"use client";

import { createContext, useContext, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CircleCheck, X } from "lucide-react";
import { especialidades, type Especialidad } from "@/data/clinica";

type DialogApi = {
  openAppointment: (specialty?: string) => void;
  openSpecialty: (specialty: Especialidad) => void;
  openPrivacy: () => void;
};

const DialogContext = createContext<DialogApi | null>(null);

export function useDialogs() {
  const api = useContext(DialogContext);
  if (!api) throw new Error("useDialogs debe usarse dentro de <DialogProvider>");
  return api;
}

const localToday = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};

// Cierra el diálogo al hacer clic en el fondo (fuera del recuadro).
function closeOnBackdrop(event: React.MouseEvent<HTMLDialogElement>) {
  const dialog = event.currentTarget;
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
}

function DialogHead({ id, title, onClose, label }: { id: string; title: ReactNode; onClose: () => void; label: string }) {
  return (
    <div className="dialog-head">
      <h2 id={id}>{title}</h2>
      <button className="close-dialog" aria-label={label} onClick={onClose}><X aria-hidden="true" /></button>
    </div>
  );
}

export function DialogProvider({ children }: { children: ReactNode }) {
  const appointmentRef = useRef<HTMLDialogElement>(null);
  const specialtyRef = useRef<HTMLDialogElement>(null);
  const privacyRef = useRef<HTMLDialogElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const [specialty, setSpecialty] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minDate, setMinDate] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [current, setCurrent] = useState<Especialidad | null>(null);

  const api: DialogApi = {
    openAppointment(initial = "") {
      setSpecialty(initial);
      setDate("");
      setTime("");
      setSummary(null);
      setMinDate(localToday());
      appointmentRef.current?.showModal();
    },
    openSpecialty(item) {
      setCurrent(item);
      specialtyRef.current?.showModal();
    },
    openPrivacy() {
      privacyRef.current?.showModal();
    },
  };

  function submit(event: FormEvent) {
    event.preventDefault();
    if (date < localToday()) {
      dateRef.current?.setCustomValidity("Elige hoy o una fecha futura.");
      dateRef.current?.reportValidity();
      return;
    }
    const pretty = new Date(`${date}T12:00:00`).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
    setSummary(`${specialty} · ${pretty} · ${time}.`);
  }

  return (
    <DialogContext.Provider value={api}>
      {children}

      <dialog ref={appointmentRef} aria-labelledby="appointment-title" onClick={closeOnBackdrop}>
        <DialogHead id="appointment-title" title={<>Un momento <em>para ti.</em></>} label="Cerrar formulario" onClose={() => appointmentRef.current?.close()} />
        {summary === null ? (
          <div>
            <p className="dialog-copy">Explora cómo sería solicitar una cita. Esta es una demostración y no genera una reserva.</p>
            <form onSubmit={submit}>
              <div className="form-field">
                <label htmlFor="specialty">¿En qué podemos orientarte?</label>
                <select id="specialty" required value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                  <option value="">Selecciona un área</option>
                  {especialidades.map((e) => <option key={e.nombre}>{e.nombre}</option>)}
                  <option>Necesito orientación</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="preferred-date">¿Qué día prefieres?</label>
                <input
                  ref={dateRef} type="date" id="preferred-date" required min={minDate} value={date}
                  onChange={(e) => { e.target.setCustomValidity(""); setDate(e.target.value); }}
                />
              </div>
              <div className="form-field">
                <label htmlFor="time-slot">¿En qué momento del día?</label>
                <select id="time-slot" required value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="">Selecciona una preferencia</option>
                  <option>Mañana</option>
                  <option>Tarde</option>
                  <option>Sin preferencia</option>
                </select>
              </div>
              <p className="form-note">No solicitamos datos personales. Tus selecciones solo se usan en esta ventana, no se guardan ni se envían.</p>
              <button className="btn btn-primary w-full" type="submit">Ver resumen de ejemplo <ArrowRight aria-hidden="true" /></button>
            </form>
          </div>
        ) : (
          <div className="form-success" role="status">
            <CircleCheck aria-hidden="true" />
            <h3>Así empieza<br /><em>tu próximo paso.</em></h3>
            <p>{summary}</p>
            <p>Esta es una vista de ejemplo. No se ha enviado ninguna solicitud ni reservado una cita.</p>
            <button className="btn btn-outline" onClick={() => setSummary(null)} autoFocus>Volver al formulario</button>
          </div>
        )}
      </dialog>

      <dialog ref={specialtyRef} aria-labelledby="specialty-title" onClick={closeOnBackdrop}>
        <DialogHead id="specialty-title" title={current?.nombre} label="Cerrar especialidad" onClose={() => specialtyRef.current?.close()} />
        <p className="dialog-copy">{current?.detalle}</p>
        <p className="form-note">Área ilustrativa de este prototipo. Los servicios y profesionales deben confirmarse con la clínica.</p>
        <button className="btn btn-primary" onClick={() => { specialtyRef.current?.close(); api.openAppointment(current?.nombre); }}>
          Explorar solicitud de cita <ArrowRight aria-hidden="true" />
        </button>
      </dialog>

      <dialog ref={privacyRef} aria-labelledby="privacy-title" onClick={closeOnBackdrop}>
        <DialogHead id="privacy-title" title="Tu privacidad." label="Cerrar privacidad" onClose={() => privacyRef.current?.close()} />
        <div className="privacy-body">
          <p>Este prototipo no solicita nombres, teléfonos, correos electrónicos ni información médica. El formulario de demostración solo usa una especialidad y preferencias de fecha y horario.</p>
          <p>Las selecciones permanecen temporalmente en esta página. No se guardan, no se envían a la clínica y se borran al recargar. La página no incorpora analítica ni cookies.</p>
          <p>Antes de habilitar reservas reales, la clínica deberá incorporar su información de contacto, su política de privacidad y un sistema para gestionar las solicitudes.</p>
        </div>
      </dialog>
    </DialogContext.Provider>
  );
}

export function AppointmentButton({ className = "btn btn-primary", specialty, children }: { className?: string; specialty?: string; children: ReactNode }) {
  const { openAppointment } = useDialogs();
  return <button className={className} onClick={() => openAppointment(specialty)}>{children}</button>;
}

export function PrivacyButton() {
  const { openPrivacy } = useDialogs();
  return <button onClick={openPrivacy}>Privacidad de esta demostración</button>;
}
