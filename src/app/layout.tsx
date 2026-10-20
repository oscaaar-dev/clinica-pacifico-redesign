import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const display = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });
const sans = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // URL pública del VPS; se define al compilar con SITE_URL=https://tu-dominio npm run build
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: "Clínica Pacífico — Tu salud, con calma · Prototipo",
  description:
    "Prototipo no oficial de rediseño web para una clínica en Chiclayo: especialidades, staff médico, servicios, sedes y solicitud de citas.",
  // Es un prototipo no oficial: no debe aparecer en buscadores.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Clínica Pacífico — Prototipo de rediseño",
    description: "Propuesta de rediseño web responsive. Datos de ejemplo.",
    locale: "es_PE",
    type: "website",
    images: ["/assets/bienestar-pacifico.webp"],
  },
};

export const viewport: Viewport = { themeColor: "#fef9ef" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
