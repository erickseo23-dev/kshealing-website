export interface Event {
  id: number;
  title: string;
  description: string;
  fecha: string;
  ubicacion: string;
  horario?: string;
  participantes?: string;
  precio?: string;
  incluye?: string[];
  estado: string;
  imagen?: string;
  tipo?: string;
}

export const eventos: Event[] = [
  {
    id: 1,
    title: "Retiro Inmersivo KS Healing - 3 Días",
    description: "Una experiencia transformadora de 3 días en un ambiente de naturaleza, dedicado completamente a la práctica intensiva de KS Healing y la transmisión directa de Energía Crística.",
    fecha: "15-17 de Febrero, 2026",
    ubicacion: "Retiro Espiritual, Costa Rica",
    horario: "Viernes 9am - Domingo 6pm",
    participantes: "Máximo 25 personas",
    precio: "$1,200 USD",
    incluye: ["Alojamiento", "Comidas", "Transmisiones directas", "Ejercicios prácticos", "Material de curso"],
    estado: "Próximamente",
    imagen: "/images/evento-retiro.png",
    tipo: "Retiro",
  },
  {
    id: 2,
    title: "Seminario Online: Fundamentos de KS Healing",
    description: "Introducción completa a los fundamentos de la Energía Crística Keiouvos Stharef. Ideal para principiantes que desean comprender cómo funciona KS Healing.",
    fecha: "1-3 de Marzo, 2026",
    ubicacion: "En línea (Zoom)",
    horario: "Sábados y domingos 10am-1pm (GMT-5)",
    participantes: "Ilimitado",
    precio: "$299 USD",
    incluye: ["Acceso a grabaciones", "Material descargable", "Comunidad privada", "Certificado"],
    estado: "Abierto",
    imagen: "/images/evento-seminario.png",
    tipo: "En línea",
  },
  {
    id: 3,
    title: "Sesión Grupal de Transmisión Directa",
    description: "Experiencia grupal donde recibirás transmisión directa de Energía KS. Perfecta para practicantes que desean profundizar su conexión con la frecuencia.",
    fecha: "Cada viernes",
    ubicacion: "En línea (Zoom)",
    horario: "7pm-8:30pm (GMT-5)",
    participantes: "Máximo 50 personas",
    precio: "$49 USD por sesión",
    incluye: ["Transmisión en vivo", "Meditación guiada", "Acceso a grabación"],
    estado: "Abierto",
    imagen: "/images/evento-meditacion.png",
    tipo: "En línea",
  },
  {
    id: 4,
    title: "Certificación Practicante KS Healing",
    description: "Programa de certificación de 8 semanas para convertirse en practicante certificado de KS Healing. Incluye teoría, práctica y transmisión directa.",
    fecha: "Inicio: 7 de Abril, 2026",
    ubicacion: "En línea + Presencial (opcional)",
    horario: "Flexible (acceso 24/7)",
    participantes: "Máximo 30 personas",
    precio: "$1,999 USD",
    incluye: ["8 módulos completos", "Transmisiones en vivo", "Mentoría individual", "Certificado oficial"],
    estado: "Próximamente",
    imagen: "/images/evento-taller.png",
    tipo: "Certificación",
  },
  {
    id: 5,
    title: "Masterclass: Geometría Sagrada y Energía KS",
    description: "Exploración profunda de la relación entre geometría sagrada (toroide) y la estructura de la Energía Crística. Para practicantes avanzados.",
    fecha: "22 de Marzo, 2026",
    ubicacion: "En línea (Zoom)",
    horario: "10am-1pm (GMT-5)",
    participantes: "Máximo 100 personas",
    precio: "$199 USD",
    incluye: ["Sesión grabada", "Presentación en PDF", "Acceso a comunidad"],
    estado: "Abierto",
    imagen: "/images/evento-seminario.png",
    tipo: "En línea",
  },
  {
    id: 6,
    title: "Retiro de Meditación Ascendente",
    description: "Retiro de 5 días enfocado en meditaciones profundas y prácticas de coherencia energética. Experiencia silenciosa con transmisión de Energía KS.",
    fecha: "12-16 de Mayo, 2026",
    ubicacion: "Monasterio, Perú",
    horario: "Tiempo completo",
    participantes: "Máximo 15 personas",
    precio: "$1,800 USD",
    incluye: ["Alojamiento", "Comidas vegetarianas", "Meditaciones guiadas", "Transmisiones"],
    estado: "Próximamente",
    imagen: "/images/evento-meditacion.png",
    tipo: "Retiro",
  },
];
