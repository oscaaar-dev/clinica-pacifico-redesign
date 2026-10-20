"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Brand } from "./Icons";
import { AppointmentButton } from "./Dialogs";

const links = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#staff", label: "Staff médico" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sedes", label: "Sedes y contacto" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav ref={navRef} className="nav" aria-label="Navegación principal">
        <Brand />
        <div className="nav-links" id="nav-links" data-open={open || undefined}>
          {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        </div>
        <div className="nav-actions">
          <AppointmentButton>Agenda una cita <ArrowRight aria-hidden="true" /></AppointmentButton>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-controls="nav-links"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
