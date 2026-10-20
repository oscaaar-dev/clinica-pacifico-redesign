import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Clock, Heart, Leaf, Mail, MapPin, MessageCircle,
  Phone, Quote, ShieldCheck, Stethoscope, Sun,
} from "lucide-react";
import { contacto, especialidades, faqs, noticias, sedes, servicios, staff, testimonios } from "@/data/clinica";
import { AppointmentButton, PrivacyButton } from "./Dialogs";
import { Brand, BrandMark, Icon } from "./Icons";
import { SpecialtyCard } from "./SpecialtyCard";

export function Announcement() {
  return (
    <div className="announcement">
      <span>Emergencias 24 h · <a href={contacto.emergencias.href}><Phone aria-hidden="true" />{contacto.emergencias.label}</a></span>
      <span className="demo-note">Prototipo de rediseño no oficial · Datos de ejemplo</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero-photo"
        src="/assets/bienestar-pacifico.webp"
        alt="Una mujer contempla con tranquilidad la costa del Pacífico al atardecer"
        width={1536}
        height={1024}
        preload
      />
      <div className="hero-inner">
        <p className="hero-tag">Medicina con sentido humano · Chiclayo</p>
        <h1 id="hero-title">Tu salud merece<br />tiempo. <em>Y cuidado.</em></h1>
        <p className="hero-copy">Especialistas, laboratorio, imágenes y emergencias en un solo lugar. Una forma más cercana de cuidar de ti.</p>
        <div className="hero-bottom">
          <div className="hero-actions">
            <AppointmentButton className="btn btn-light">Solicitar cita <ArrowRight aria-hidden="true" /></AppointmentButton>
            <a className="btn btn-ghost" href="#especialidades">Ver especialidades</a>
          </div>
          <div className="hero-notes" aria-label="Lo que nos distingue">
            <div className="hero-note"><strong>Emergencias 24 h</strong><span>Con traslado de pacientes</span></div>
            <div className="hero-note"><strong>2 sedes</strong><span>En Chiclayo</span></div>
            <div className="hero-note"><strong>Resultados claros</strong><span>Laboratorio e imágenes</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <div className="values wrap" aria-label="Nuestros valores">
      <span><Heart aria-hidden="true" /> Atención con calidez</span>
      <span><Leaf aria-hidden="true" /> Una mirada integral</span>
      <span><ShieldCheck aria-hidden="true" /> Confianza en cada paso</span>
      <span><Sun aria-hidden="true" /> Bienestar a largo plazo</span>
    </div>
  );
}

export function Specialties() {
  return (
    <section className="section wrap" id="especialidades" aria-labelledby="specialties-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Especialidades</p>
          <h2 id="specialties-title">Un cuidado que<br /><em>te acompaña.</em></h2>
        </div>
        <p>Especialistas para cada etapa de tu vida. Elige un área para conocer más y explorar cómo solicitar una cita.</p>
      </div>
      <div className="specialty-grid">
        {especialidades.map((e) => <SpecialtyCard key={e.nombre} item={e} />)}
      </div>
    </section>
  );
}

const initials = (name: string) =>
  name.replace(/^Dr[a]?\.\s*/, "").split(" ").map((p) => p[0]).slice(0, 2).join("");

export function Staff() {
  return (
    <section className="section staff" id="staff" aria-labelledby="staff-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Staff médico</p>
            <h2 id="staff-title">Especialistas que<br /><em>te escuchan.</em></h2>
          </div>
          <p>Conoce a quién te atenderá antes de tu cita: especialidad, colegiatura y horarios en un solo lugar.</p>
        </div>
        <div className="staff-grid">
          {staff.map((m) => (
            <article className="doctor" key={m.nombre}>
              <div className="doctor-avatar" aria-hidden="true">{initials(m.nombre)}</div>
              <h3>{m.nombre}</h3>
              <p className="doctor-specialty">{m.especialidad}</p>
              <dl>
                <div><dt>CMP</dt><dd>{m.cmp}</dd></div>
                <div><dt>Horario</dt><dd>{m.horario}</dd></div>
              </dl>
              <AppointmentButton className="btn btn-outline btn-sm" specialty={m.especialidad}>
                Solicitar cita <ArrowRight aria-hidden="true" />
              </AppointmentButton>
            </article>
          ))}
        </div>
        <div className="staff-foot">
          <span className="demo-tag">Perfiles de ejemplo · Sin datos reales</span>
          <span>La versión final incluirá a todo el staff con su autorización.</span>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section services" id="servicios" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Servicios</p>
            <h2 id="services-title">Todo lo que necesitas,<br /><em>en un mismo lugar.</em></h2>
          </div>
          <p>Diagnóstico, tratamiento y hospitalización coordinados entre sí, para que no tengas que ir de un lado a otro.</p>
        </div>
        <div className="service-grid">
          {servicios.map((s) => (
            <article className="service" key={s.nombre}>
              <Icon name={s.icon} />
              <h3>{s.nombre}</h3>
              <p>{s.descripcion}</p>
            </article>
          ))}
          <article className="service service-emergency">
            <Icon name="siren" />
            <h3>Emergencias 24 h</h3>
            <p>Respuesta oportuna y traslado de pacientes. Llama directamente desde tu celular.</p>
            <a className="btn btn-light btn-sm" href={contacto.emergencias.href}><Phone aria-hidden="true" /> {contacto.emergencias.label}</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="care" id="experiencia" aria-labelledby="care-title">
      <div className="care-grid wrap">
        <div className="care-art" role="img" aria-label="Cuaderno ilustrado con el mensaje Tu historia, tu salud, tu camino">
          <span className="care-seal">EL BIENESTAR ES PERSONAL.</span>
          <div className="journal" aria-hidden="true">
            <div className="brand"><BrandMark /><span className="brand-name"><small>Clínica</small>Pacífico</span></div>
            <h3>Tu historia.<br />Tu salud.<br /><em>Tu camino.</em></h3>
            <div className="journal-rule" />
            <p>Un nuevo capítulo de bienestar</p>
            <div className="journal-footer"><span>HECHO PARA TI</span><span>01 — ∞</span></div>
          </div>
          <div className="care-sticker" aria-hidden="true"><Leaf /><span>Cuidarte es vivir.</span></div>
        </div>
        <div className="care-copy">
          <p className="eyebrow">Contigo, paso a paso</p>
          <h2 id="care-title">Cuidarte puede<br />sentirse <em>más simple.</em></h2>
          <p>Una experiencia pensada para que te sientas escuchado, informado y acompañado desde el primer momento.</p>
          <ol className="steps">
            <li><span className="step-num">01</span><div><strong>Elige tu especialidad</strong><p>O selecciona “Necesito orientación” si no estás seguro.</p></div></li>
            <li><span className="step-num">02</span><div><strong>Conversemos de tu salud</strong><p>Comparte tu historia, tus inquietudes y tus objetivos.</p></div></li>
            <li><span className="step-num">03</span><div><strong>Encuentra tu siguiente paso</strong><p>Comprende las recomendaciones y resuelve tus dudas.</p></div></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });

export function Voices() {
  return (
    <section className="section wrap" id="testimonios" aria-labelledby="voices-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Testimonios y noticias</p>
          <h2 id="voices-title">Lo que viven<br /><em>nuestros pacientes.</em></h2>
        </div>
        <p>Experiencias de atención y consejos de salud para ti y tu familia.</p>
      </div>
      <div className="voices-grid">
        <div>
          <div className="voices-label"><h3>Testimonios</h3><span className="demo-tag">Ejemplos ilustrativos</span></div>
          <div className="quotes">
            {testimonios.map((t) => (
              <figure className="quote" key={t.texto}>
                <Quote aria-hidden="true" />
                <blockquote>{t.texto}</blockquote>
                <figcaption><strong>{t.autor}</strong> · {t.detalle}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div>
          <div className="voices-label"><h3>Noticias de salud</h3></div>
          <ul className="news-list">
            {noticias.map((n) => (
              <li key={n.titulo}>
                <time dateTime={n.fecha}>{formatDate(n.fecha)}</time>
                <h3>{n.titulo}</h3>
                <p>{n.resumen}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Locations() {
  return (
    <section className="section locations" id="sedes" aria-labelledby="locations-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Sedes y contacto</p>
            <h2 id="locations-title">Estamos<br /><em>cerca de ti.</em></h2>
          </div>
          <p>Encuentra la sede más cercana, revisa sus horarios y llama o escríbenos con un solo toque.</p>
        </div>
        <div className="locations-grid">
          {sedes.map((s) => (
            <article className="location" key={s.nombre}>
              <div className="location-map" aria-hidden="true" />
              <h3>{s.nombre}</h3>
              <p><MapPin aria-hidden="true" />{s.direccion}</p>
              <p><Clock aria-hidden="true" />{s.horario}</p>
              <p><Stethoscope aria-hidden="true" />{s.servicios}</p>
              <a className="text-link" href={s.mapa} target="_blank" rel="noopener noreferrer">Cómo llegar <ArrowUpRight aria-hidden="true" /></a>
            </article>
          ))}
          <aside className="contact-card" aria-labelledby="contact-title">
            <h3 id="contact-title">Contáctanos</h3>
            <a className="contact-row" href={contacto.central.href}><Phone aria-hidden="true" /><span><small>Central</small><strong>{contacto.central.label}</strong></span></a>
            <a className="contact-row" href={contacto.emergencias.href}><Phone aria-hidden="true" /><span><small>Emergencias 24 h</small><strong>{contacto.emergencias.label}</strong></span></a>
            <a className="contact-row" href={contacto.whatsapp.href} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /><span><small>Citas</small><strong>{contacto.whatsapp.label}</strong></span></a>
            <a className="contact-row" href={contacto.correo.href}><Mail aria-hidden="true" /><span><small>Correo</small><strong>{contacto.correo.label}</strong></span></a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section faq wrap" id="preguntas" aria-labelledby="faq-title">
      <div className="faq-intro">
        <p className="eyebrow">Hablemos con claridad</p>
        <h2 id="faq-title">Tus preguntas.<br /><em>Con calma.</em></h2>
        <p>El primer paso también puede ser resolver una duda.</p>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <details key={f.pregunta} open={i === 0}>
            <summary>{f.pregunta}</summary>
            <p>{f.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div>
        <p className="eyebrow">Tu próximo paso empieza aquí</p>
        <h2 id="cta-title">Haz de tu bienestar<br />una <em>buena costumbre.</em></h2>
        <p>Un momento para ti. Un comienzo para sentirte mejor.</p>
      </div>
      <AppointmentButton className="btn btn-light">Agenda una cita <ArrowRight aria-hidden="true" /></AppointmentButton>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <div>
          <Brand label="Clínica Pacífico, volver al inicio" />
          <p className="footer-tagline">Ciencia para cuidarte. Calidez para acompañarte.</p>
        </div>
        <div className="footer-col">
          <strong>La clínica</strong>
          <a href="#especialidades">Especialidades</a>
          <a href="#staff">Staff médico</a>
          <a href="#servicios">Servicios</a>
          <a href="#testimonios">Noticias</a>
        </div>
        <div className="footer-col">
          <strong>Sedes</strong>
          {sedes.map((s) => <span key={s.nombre}>{s.nombre} · {s.direccion}</span>)}
        </div>
        <div className="footer-col">
          <strong>Contacto</strong>
          <a href={contacto.central.href}>Central {contacto.central.label}</a>
          <a href={contacto.emergencias.href}>Emergencias {contacto.emergencias.label}</a>
          <a href={contacto.correo.href}>{contacto.correo.label}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Clínica Pacífico (nombre de ejemplo)</span>
        <span className="demo-label">Prototipo de rediseño no oficial · No afiliado a la clínica · Datos de ejemplo</span>
        <PrivacyButton />
      </div>
    </footer>
  );
}
