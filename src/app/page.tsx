import { DialogProvider } from "@/components/Dialogs";
import { Header } from "@/components/Header";
import {
  Announcement, Cta, Experience, Faq, Footer, Hero, Locations, Services,
  Specialties, Staff, Values, Voices,
} from "@/components/Sections";
import { contacto, especialidades, sedes } from "@/data/clinica";

// Datos estructurados para SEO local (con datos de ejemplo).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Clínica Pacífico (prototipo)",
  telephone: contacto.central.label,
  medicalSpecialty: especialidades.map((e) => e.nombre),
  address: sedes.map((s) => ({
    "@type": "PostalAddress",
    streetAddress: s.direccion,
    addressLocality: "Chiclayo",
    addressRegion: "Lambayeque",
    addressCountry: "PE",
  })),
};

export default function Home() {
  return (
    <DialogProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#contenido">Ir al contenido</a>
      <Announcement />
      <Header />
      <main id="contenido">
        <Hero />
        <Values />
        <Specialties />
        <Staff />
        <Services />
        <Experience />
        <Voices />
        <Locations />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </DialogProvider>
  );
}
