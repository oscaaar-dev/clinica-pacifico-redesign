import {
  Activity, BedDouble, Baby, Bone, Brain, FlaskConical, HeartPulse, Microscope,
  Scan, ScanLine, Siren, Sprout, Stethoscope, Wind, type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/clinica";

const icons: Record<IconName, LucideIcon> = {
  bone: Bone,
  brain: Brain,
  stethoscope: Stethoscope,
  baby: Baby,
  heart: HeartPulse,
  wind: Wind,
  sprout: Sprout,
  lab: Microscope,
  flask: FlaskConical,
  radio: ScanLine,
  scan: Scan,
  waves: Activity,
  bed: BedDouble,
  siren: Siren,
};

export function Icon({ name }: { name: IconName }) {
  const Component = icons[name];
  return <Component aria-hidden="true" />;
}

// Isotipo genérico del prototipo; no es el logotipo de la clínica.
export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M16 3h8v13h13v8H24v13h-8V24H3v-8h13Z" fill="currentColor" stroke="none" />
      <path className="brand-lines" d="M7 7c8 0 26 18 26 26M33 7C25 7 7 25 7 33" />
    </svg>
  );
}

export function Brand({ label = "Clínica Pacífico, inicio" }: { label?: string }) {
  return (
    <a className="brand" href="#inicio" aria-label={label}>
      <BrandMark />
      <span className="brand-name"><small>Clínica</small>Pacífico</span>
    </a>
  );
}
