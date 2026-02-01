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
  tema?: string;
  modalidad?: string;
}

export const eventos: Event[] = [
  {
    id: 1,
    title: "La Arquitectura del Amor",
    description: "Del amor herido al Amor como principio divino. Amor como principio universal, no como drama humano.",
    fecha: "8 de Febrero, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "7:00 - 11:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Transmisión en vivo", "Meditación central: Recordar el Amor", "Reordenamiento interno profundo", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-8-amor-divino.png",
    tipo: "Retiro Sagrado",
    tema: "Relaciones",
    modalidad: "En Vivo"
  },
  {
    id: 2,
    title: "Reinicio Energético Profundo",
    description: "Limpia el arrastre, recupera tu fuerza y renace desde tu centro. Distinguir cansancio físico vs arrastre energético.",
    fecha: "1 de Marzo, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Liberación suave de residuos energéticos", "Recuperación de energía personal", "Sellado y estabilización", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-reinicio.png",
    tipo: "Retiro Sagrado",
    tema: "Transformación",
    modalidad: "En Vivo"
  },
  {
    id: 3,
    title: "El Niño que Habita en Ti",
    description: "Sanar la raíz emocional sin revivir el dolor. El niño interior como estructura viva que sigue organizando decisiones y vínculos.",
    fecha: "5 de Abril, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Identificación de patrones infantiles", "Sanar sin revivir trauma", "Reordenamiento desde el adulto consciente", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-nino-interior.png",
    tipo: "Retiro Sagrado",
    tema: "Sanación",
    modalidad: "En Vivo"
  },
  {
    id: 4,
    title: "El Vínculo Materno",
    description: "La primera relación que modeló tu forma de amar y recibir. Sanar el vínculo sin rechazarlo ni idealizarlo.",
    fecha: "3 de Mayo, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Exploración de la matriz emocional materna", "Liberación de culpa y lealtad", "Sanar sin cargar", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-vinculo-materno.png",
    tipo: "Retiro Sagrado",
    tema: "Relaciones",
    modalidad: "En Vivo"
  },
  {
    id: 5,
    title: "La Fuerza Paterna",
    description: "Autoridad, dirección y sostén interno. Cómo la figura paterna afecta decisiones, éxito y autoridad personal.",
    fecha: "7 de Junio, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Exploración de seguridad y límites", "Sanación de ausencia o rigidez paterna", "Recuperación de dirección personal", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-fuerza-paterna.png",
    tipo: "Retiro Sagrado",
    tema: "Transformación",
    modalidad: "En Vivo"
  },
  {
    id: 6,
    title: "Rompe la Capa del Estrés Crónico",
    description: "Cuando vivir en alerta se volvió normal. Cuerpo en supervivencia y sistema nervioso saturado.",
    fecha: "5 de Julio, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Identificación del estrés normalizado", "Regulación del sistema nervioso", "Recuperación de calma", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-estres.png",
    tipo: "Retiro Sagrado",
    tema: "Sanación",
    modalidad: "En Vivo"
  },
  {
    id: 7,
    title: "El Arte de Soltar con Conciencia",
    description: "Cerrar ciclos sin lucha ni resistencia. Soltar personas, versiones propias, expectativas y control.",
    fecha: "2 de Agosto, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Técnicas de soltar consciente", "Cierre de ciclos", "Liberación sin resistencia", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-soltar.png",
    tipo: "Retiro Sagrado",
    tema: "Transformación",
    modalidad: "En Vivo"
  },
  {
    id: 8,
    title: "El Poder de Elegir",
    description: "Salir del automatismo y recuperar tu soberanía interna. Elecciones inconscientes, patrones repetidos y decisiones heredadas.",
    fecha: "6 de Septiembre, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Identificación de automatismos", "Recuperación de soberanía", "Elecciones conscientes", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-poder-elegir.png",
    tipo: "Retiro Sagrado",
    tema: "Consciencia",
    modalidad: "En Vivo"
  },
  {
    id: 9,
    title: "Protección Energética Consciente",
    description: "Límites, campo y soberanía personal. No absorber cargas ajenas y protección sin cerrarse.",
    fecha: "4 de Octubre, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Establecimiento de límites energéticos", "Protección del campo", "Soberanía personal", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-proteccion.png",
    tipo: "Retiro Sagrado",
    tema: "Sanación",
    modalidad: "En Vivo"
  },
  {
    id: 10,
    title: "El Llamado de los Ancestros",
    description: "Sanar el linaje sin repetir su historia. Herencias emocionales, lealtades invisibles y cargas que no son propias.",
    fecha: "1 de Noviembre, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Exploración del linaje", "Sanación de herencias", "Honrar sin repetir", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-ancestros.png",
    tipo: "Retiro Sagrado",
    tema: "Transformación",
    modalidad: "En Vivo"
  },
  {
    id: 11,
    title: "Cierra el Año en Luz",
    description: "Recolección, integración y cierre consciente. Recoger energía, cerrar ciclos e integrar aprendizajes.",
    fecha: "6 de Diciembre, 2026",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Recolección de energía", "Cierre de ciclos anuales", "Integración de aprendizajes", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "/images/retiro-cierre.png",
    tipo: "Retiro Sagrado",
    tema: "Consciencia",
    modalidad: "En Vivo"
  }
];
