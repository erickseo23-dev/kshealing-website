/**
 * Eventos Compartidos - Instituto Ascendant & KS Healing
 * Fuente única de verdad para todos los eventos
 * 
 * Uso:
 * - Instituto Ascendant: getEventsBySource("instituto")
 * - KS Healing: getEventsBySource("kshealing")
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  timezone: string;
  type: "taller" | "certificacion" | "retiro" | "masterclass" | "sesion";
  format: "online" | "presencial" | "hibrido";
  instructor: "yohev" | "claribel" | "otro";
  source: ("kshealing" | "instituto")[];
  location: string;
  capacity: number | string | null;
  price: number | null;
  currency: string;
  link: string;
  tags: string[];
  accent: string;
  imagen?: string;
}

// Datos de eventos - Se sincroniza con eventos.json
export const eventos: Event[] = [
  {
    id: "evento-007",
    title: "Retiro Sagrado 13: Rompe la Capa del Estrés Crónico",
    description: "Cuando vivir en alerta se volvió normal. Cuerpo en supervivencia y sistema nervioso saturado. Un retiro para identificar, comprender y liberar el estrés crónico desde adentro con Energía KS®.",
    date: "2026-07-05",
    endDate: "2026-07-05",
    startTime: "08:00",
    endTime: "12:00",
    timezone: "America/Mexico_City",
    type: "retiro",
    format: "online",
    instructor: "yohev",
    source: ["kshealing", "instituto"],
    location: "Online en vivo",
    capacity: "Ilimitada",
    price: null,
    currency: "MXN",
    link: "https://www.kshealing.com/club-retiro-sagrado",
    tags: ["retiro-sagrado", "ks-healing", "online"],
    accent: "#7B6B8A",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/CssIHQgNGfpPclOl.png",
  },
  {
    id: "evento-008",
    title: "Retiro Sagrado 14: El Arte de Soltar con Conciencia",
    description: "Cerrar ciclos sin lucha ni resistencia. Soltar personas, versiones propias, expectativas y control. Un espacio para liberar lo que ya cumplió su función y recuperar energía para el presente.",
    date: "2026-08-02",
    endDate: "2026-08-02",
    startTime: "08:00",
    endTime: "12:00",
    timezone: "America/Mexico_City",
    type: "retiro",
    format: "online",
    instructor: "yohev",
    source: ["kshealing", "instituto"],
    location: "Online en vivo",
    capacity: "Ilimitada",
    price: null,
    currency: "MXN",
    link: "https://www.kshealing.com/club-retiro-sagrado",
    tags: ["retiro-sagrado", "ks-healing", "online"],
    accent: "#5A7A5A",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/qqTFjXiFpvcVHnry.png",
  },
];

/**
 * Obtener eventos filtrados por sitio
 * @param source - "instituto" o "kshealing"
 * @returns Array de eventos para ese sitio
 */
export function getEventsBySource(source: "instituto" | "kshealing"): Event[] {
  return eventos.filter((e) => e.source.includes(source));
}

/**
 * Obtener eventos ordenados por fecha
 * @param source - "instituto" o "kshealing"
 * @returns Array de eventos ordenados por fecha
 */
export function getUpcomingEvents(source: "instituto" | "kshealing"): Event[] {
  const filtered = getEventsBySource(source);
  return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Obtener eventos por tipo
 * @param source - "instituto" o "kshealing"
 * @param type - tipo de evento
 * @returns Array de eventos del tipo especificado
 */
export function getEventsByType(
  source: "instituto" | "kshealing",
  type: Event["type"]
): Event[] {
  return getEventsBySource(source).filter((e) => e.type === type);
}

/**
 * Obtener evento por ID
 * @param id - ID del evento
 * @returns Evento o undefined
 */
export function getEventById(id: string): Event | undefined {
  return eventos.find((e) => e.id === id);
}

/**
 * Obtener eventos por instructor
 * @param source - "instituto" o "kshealing"
 * @param instructor - nombre del instructor
 * @returns Array de eventos del instructor
 */
export function getEventsByInstructor(
  source: "instituto" | "kshealing",
  instructor: Event["instructor"]
): Event[] {
  return getEventsBySource(source).filter((e) => e.instructor === instructor);
}

/**
 * Formatear fecha para mostrar
 * @param date - fecha en formato YYYY-MM-DD
 * @returns fecha formateada
 */
export function formatDate(date: string): string {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Obtener mes y día para mostrar en tarjeta
 * @param date - fecha en formato YYYY-MM-DD
 * @returns objeto con día y mes
 */
export function getDateParts(date: string): { day: string; month: string; year: string } {
  const d = new Date(date + "T00:00:00");
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleDateString("es-ES", { month: "short" }).toUpperCase(),
    year: String(d.getFullYear()),
  };
}
