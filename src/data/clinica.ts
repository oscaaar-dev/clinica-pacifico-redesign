// Contenido del prototipo. Todos los datos son de ejemplo: nombres, teléfonos,
// direcciones y testimonios deben reemplazarse por información aprobada por la clínica.

export type IconName =
  | "bone" | "brain" | "stethoscope" | "baby" | "heart" | "wind" | "sprout" | "lab"
  | "flask" | "scan" | "radio" | "waves" | "bed" | "siren";

export const contacto = {
  central: { label: "(074) 000-000", href: "tel:+5174000000" },
  emergencias: { label: "900 000 000", href: "tel:+51900000000" },
  whatsapp: { label: "WhatsApp", href: "https://wa.me/51900000000" },
  correo: { label: "citas@ejemplo.pe", href: "mailto:citas@ejemplo.pe" },
};

export type Especialidad = { nombre: string; resumen: string; detalle: string; icon: IconName };

export const especialidades: Especialidad[] = [
  {
    nombre: "Traumatología y ortopedia",
    resumen: "Lesiones, fracturas y cuidado de huesos, músculos y articulaciones.",
    detalle: "Evaluación y tratamiento de fracturas, lesiones deportivas, dolor articular y problemas de columna, con acompañamiento durante la recuperación.",
    icon: "bone",
  },
  {
    nombre: "Neurología",
    resumen: "Atención del cerebro, la médula y el sistema nervioso.",
    detalle: "Consulta para dolores de cabeza persistentes, mareos, alteraciones del sueño, hormigueos u otras molestias relacionadas con el sistema nervioso.",
    icon: "brain",
  },
  {
    nombre: "Medicina interna",
    resumen: "Una mirada completa a la salud del adulto.",
    detalle: "Diagnóstico y seguimiento de enfermedades del adulto que no requieren cirugía, coordinando con otras especialidades cuando hace falta.",
    icon: "stethoscope",
  },
  {
    nombre: "Ginecología y obstetricia",
    resumen: "Salud de la mujer en cada etapa, embarazo y parto.",
    detalle: "Controles ginecológicos, planificación familiar y acompañamiento del embarazo, el parto y el puerperio.",
    icon: "baby",
  },
  {
    nombre: "Cardiología",
    resumen: "Una mirada atenta a tu corazón y a lo que te mueve cada día.",
    detalle: "Una consulta enfocada en la salud cardiovascular, tus antecedentes y las preguntas que quieras compartir con un especialista.",
    icon: "heart",
  },
  {
    nombre: "Neumología",
    resumen: "Cuidado de los pulmones y las vías respiratorias.",
    detalle: "Evaluación de tos persistente, asma, dificultad para respirar y otras condiciones del sistema respiratorio.",
    icon: "wind",
  },
  {
    nombre: "Nutrición",
    resumen: "Explora tus hábitos y tu relación con la alimentación.",
    detalle: "Una conversación sobre tus hábitos, preferencias y objetivos para un acompañamiento nutricional adaptado a tu día a día.",
    icon: "sprout",
  },
  {
    nombre: "Chequeo preventivo",
    resumen: "Dedica un momento a conocerte mejor y prevenir.",
    detalle: "Un punto de partida para conversar sobre prevención. Las evaluaciones que correspondan dependen de tu historia y del criterio del profesional.",
    icon: "lab",
  },
];

export type Medico = { nombre: string; especialidad: string; cmp: string; horario: string };

export const staff: Medico[] = [
  { nombre: "Dra. Ana Torres", especialidad: "Traumatología y ortopedia", cmp: "00001", horario: "Lun · Mié · Vie — mañanas" },
  { nombre: "Dr. Luis Medina", especialidad: "Neurología", cmp: "00002", horario: "Mar · Jue — tardes" },
  { nombre: "Dra. Carmen Vela", especialidad: "Ginecología y obstetricia", cmp: "00003", horario: "Lun a Vie — tardes" },
  { nombre: "Dr. Jorge Salas", especialidad: "Cardiología", cmp: "00004", horario: "Lun · Jue — mañanas" },
];

export type Servicio = { nombre: string; descripcion: string; icon: IconName };

export const servicios: Servicio[] = [
  { nombre: "Laboratorio", descripcion: "Análisis clínicos con resultados entregados de forma clara y oportuna.", icon: "flask" },
  { nombre: "Rayos X", descripcion: "Imágenes rápidas y no invasivas para evaluar huesos y tórax.", icon: "radio" },
  { nombre: "Tomografía", descripcion: "Estudios detallados para neurología, traumatología y más.", icon: "scan" },
  { nombre: "Ecografía", descripcion: "Imágenes con ultrasonido, sin exposición a radiación.", icon: "waves" },
  { nombre: "Hospitalización", descripcion: "Ambientes cómodos y cuidado continuo durante tu estancia.", icon: "bed" },
];

export type Sede = { nombre: string; direccion: string; horario: string; servicios: string; mapa: string };

export const sedes: Sede[] = [
  {
    nombre: "Sede Centro",
    direccion: "Av. Ejemplo 123, Chiclayo",
    horario: "Lun a Sáb · 7:00 – 20:00",
    servicios: "Consultas, laboratorio e imágenes",
    mapa: "https://maps.google.com/?q=Chiclayo",
  },
  {
    nombre: "Sede Norte",
    direccion: "Calle Referencial 456, Chiclayo",
    horario: "Emergencias 24 h · Consultas Lun a Vie",
    servicios: "Emergencias, hospitalización y cirugía",
    mapa: "https://maps.google.com/?q=Chiclayo",
  },
];

export type Testimonio = { texto: string; autor: string; detalle: string };

export const testimonios: Testimonio[] = [
  { texto: "Me explicaron cada paso del tratamiento con paciencia. Salí de la consulta sin dudas.", autor: "Paciente de ejemplo", detalle: "Traumatología" },
  { texto: "Pedir la cita fue sencillo y la atención empezó a la hora indicada.", autor: "Paciente de ejemplo", detalle: "Medicina interna" },
  { texto: "Durante el embarazo siempre me sentí acompañada y escuchada.", autor: "Paciente de ejemplo", detalle: "Ginecología" },
];

export type Noticia = { titulo: string; fecha: string; resumen: string };

export const noticias: Noticia[] = [
  { titulo: "Cómo prepararte para tu chequeo preventivo", fecha: "2026-10-02", resumen: "Qué llevar, si debes ir en ayunas y qué preguntas hacer a tu médico." },
  { titulo: "Lesiones deportivas: cuándo consultar", fecha: "2026-09-18", resumen: "Señales que indican que un dolor después del ejercicio necesita evaluación." },
  { titulo: "Golpe de calor en verano norteño", fecha: "2026-09-05", resumen: "Recomendaciones para cuidar a niños y adultos mayores en los días de más calor." },
];

export const faqs = [
  {
    pregunta: "¿Cómo puedo solicitar una cita?",
    respuesta: "Usa el botón “Agenda una cita” para explorar el formulario. Esta página es un prototipo: el formulario muestra la experiencia, pero todavía no envía solicitudes ni reserva citas.",
  },
  {
    pregunta: "¿Qué especialidad debería elegir?",
    respuesta: "Si no tienes una especialidad en mente, selecciona “Necesito orientación” en el formulario. Las áreas mostradas son ilustrativas y deben confirmarse con la clínica.",
  },
  {
    pregunta: "¿Qué hago en caso de emergencia?",
    respuesta: "En la versión final, este bloque mostrará el número de emergencias y traslado de la clínica, con un botón para llamar directamente desde el celular.",
  },
  {
    pregunta: "¿Dónde puedo ver los horarios y las tarifas?",
    respuesta: "Los horarios, la ubicación, los profesionales y las tarifas se incorporarán cuando la clínica confirme esa información. Este prototipo no muestra disponibilidad ni precios reales.",
  },
];
