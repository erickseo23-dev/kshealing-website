export interface Event {
  id: string;
  title: string;
  description: string;
  category: 'certification' | 'workshop' | 'retreat' | 'masterclass';
  startDate: Date;
  endDate: Date;
  schedule: string;
  location: string;
  format: 'online' | 'in-person' | 'hybrid';
  instructor: string;
  price: number;
  currency: string;
  capacity: number;
  enrolled: number;
  modules?: string[];
  includes?: string[];
  prerequisites?: string[];
  image?: string;
  link?: string;
}

export const events: Event[] = [
  {
    id: 'ks-healing-basic-2026-feb',
    title: 'Certificación Internacional en KS Healing Nivel Básico',
    description: 'Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos.',
    category: 'certification',
    startDate: new Date(2026, 1, 22), // February 22, 2026
    endDate: new Date(2026, 2, 8), // March 8, 2026
    schedule: '3 domingos consecutivos, 2 horas cada sesión',
    location: 'Online en vivo',
    format: 'online',
    instructor: 'YOHEV',
    price: 145,
    currency: 'USD',
    capacity: 20,
    enrolled: 0,
    modules: [
      'Módulo 1: Activación del Cuerpo KS',
      'Módulo 2: Técnica de Autosanación',
      'Módulo 3: Técnica de Sanación Energética'
    ],
    includes: [
      'Material en Video Pregrabado - Acceso completo a videos de cada módulo para revisar cuando quieras',
      'Sesión en Vivo con YOHEV - 2 horas de transmisión directa en Zoom para cada módulo',
      'Prácticas Online Programadas - Sesiones con facilitador certificado según tu disponibilidad',
      'Certificación Internacional - Reconocimiento oficial como Practicante de KS Healing'
    ],
    prerequisites: [
      'Recomendado: Haber leído el libro "KS Healing - La Nueva Frecuencia Crística"',
      'Recomendado: Haber tomado el taller gratuito "KS Healing y Consciencia Crística"',
      'No es obligatorio pero facilita el aprendizaje'
    ],
    link: 'https://a.co/d/0ffmcjLG'
  }
];

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getUpcomingEvents = (): Event[] => {
  const now = new Date();
  return events
    .filter(event => event.startDate > now)
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
};

export const getEventsByCategory = (category: Event['category']): Event[] => {
  return events.filter(event => event.category === category);
};

export const getAvailableSpots = (event: Event): number => {
  return event.capacity - event.enrolled;
};
