"use client";

import { ArrowRight } from "lucide-react";
import type { Especialidad } from "@/data/clinica";
import { useDialogs } from "./Dialogs";
import { Icon } from "./Icons";

export function SpecialtyCard({ item }: { item: Especialidad }) {
  const { openSpecialty } = useDialogs();
  return (
    <button className="specialty" onClick={() => openSpecialty(item)}>
      <Icon name={item.icon} />
      <h3>{item.nombre}</h3>
      <p>{item.resumen}</p>
      <span className="card-link">Conoce la especialidad <ArrowRight aria-hidden="true" /></span>
    </button>
  );
}
