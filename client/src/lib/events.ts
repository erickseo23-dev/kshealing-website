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
  // Ordenados por fecha cronológica
  {
    id: 13,
    title: "Taller Online Gratuito KS Healing y La Consciencia Crísitica",
    description: "Descubre cómo la Energía KS transforma tu consciencia crítica. Un taller interactivo donde exploraremos la conexión entre sanación energética y pensamiento consciente.",
    fecha: "15 de Marzo",
    ubicacion: "Online en vivo",
    horario: "10:00 - 13:00 hrs (CDMX) / 17:00 - 20:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Gratuito",
    incluye: ["Transmisión en vivo interactiva", "Introducción a KS Healing", "Ejercicio práctico de consciencia crítica", "Acceso a recursos descargables"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/vTRBQZgDDKzUWUdr.png",
    tipo: "Taller",
    tema: "Consciencia",
    modalidad: "Online en Vivo"
  },
  {
    id: 15,
    title: "Activación del Libro KS Healing - Por YOHEV",
    description: "Sesión especial de activación para lectores del libro KS Healing. Escanea el código QR de la página 233 con tu móvil para registrar tu libro y formar parte de la comunidad de lectores de YOHEV.",
    fecha: "18 de Marzo",
    ubicacion: "Online en vivo por Zoom",
    horario: "11:00 - 12:30 hrs (CDMX) / 18:00 - 19:30 hrs (España)",
    participantes: "Ilimitado",
    precio: "Gratuito",
    incluye: ["Transmisión en vivo con YOHEV", "Activación de tu libro físico", "Acceso a comunidad de lectores", "Grabación disponible"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/GTnsaEwxAStNPnrW.png",
    tipo: "Activación de Libro",
    tema: "Libro",
    modalidad: "Online en Vivo"
  },
  {
    id: 12,
    title: "Certificación Internacional en KS Healing Nivel Básico",
    description: "Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos.",
    fecha: "22 Mar - 5 Abr",
    ubicacion: "Online en vivo",
    horario: "3 domingos (22 Mar, 29 Mar, 5 Abr) - 12:00 - 14:00 hrs (CDMX) / 19:00 - 21:00 hrs (España)",
    participantes: "20 lugares disponibles",
    precio: "$232 USD (3999 MXN)",
    incluye: [
      "Material en Video Pregrabado - Acceso completo a videos de cada módulo",
      "Sesión en Vivo con YOHEV - 2 horas de transmisión directa en Zoom",
      "Prácticas Online Programadas - Sesiones con facilitador certificado",
      "Certificación Internacional - Reconocimiento oficial como Practicante de KS Healing"
    ],
    estado: "Abierto",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/HVhXRvxQEBwQkYur.png",
    tipo: "Certificación",
    tema: "KS Healing",
    modalidad: "Online en Vivo"
  },
  {
    id: 3,
    title: "El Niño que Habita en Ti",
    description: "Sanar la raíz emocional sin revivir el dolor. El niño interior como estructura viva que sigue organizando decisiones y vínculos.",
    fecha: "5 de Abril",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Identificación de patrones infantiles", "Sanar sin revivir trauma", "Reordenamiento desde el adulto consciente", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151 de VilmLqqDtgInyNrt.png",
    tipo: "Retiro Sagrado",
    tema: "Sanación",
    modalidad: "Online en Vivo"
  },
  {
    id: 4,
    title: "El Vínculo Materno",
    description: "La primera relación que modeló tu forma de amar y recibir. Sanar el vínculo sin rechazarlo ni idealizarlo.",
    fecha: "3 de Mayo",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Exploración de la matriz emocional materna", "Liberación de culpa y lealtad", "Sanar sin cargar", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/aEmOStczwGCLviCw.png",
    tipo: "Retiro Sagrado",
    tema: "Relaciones",
    modalidad: "Online en Vivo"
  },
  {
    id: 5,
    title: "La Fuerza Paterna",
    description: "Autoridad, dirección y sostén interno. Cómo la figura paterna afecta decisiones, éxito y autoridad personal.",
    fecha: "7 de Junio",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Exploración de seguridad y límites", "Sanación de ausencia o rigidez paterna", "Recuperación de dirección personal", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151 de JgAVzSzhxZNnKDAE.png",
    tipo: "Retiro Sagrado",
    tema: "Transformación",
    modalidad: "Online en Vivo"
  },
  {
    id: 6,
    title: "Rompe la Capa del Estrés Crónico",
    description: "Cuando vivir en alerta se volvió normal. Cuerpo en supervivencia y sistema nervioso saturado.",
    fecha: "5 de Julio",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Identificación del estrés normalizado", "Regulación del sistema nervioso", "Recuperación de calma", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/qqTFjXiFpvcVHnry.png",
    tipo: "Retiro Sagrado",
    tema: "Sanación",
    modalidad: "Online en Vivo"
  },
  {
    id: 7,
    title: "El Arte de Soltar con Conciencia",
    description: "Cerrar ciclos sin lucha ni resistencia. Soltar personas, versiones propias, expectativas y control.",
    fecha: "2 de Agosto",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Técnicas de soltar consciente", "Cierre de ciclos", "Liberación sin resistencia", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151 de CssIHQgNGfpPclOl.png",
    tipo: "Retiro Sagrado",
    tema: "Transformación",
    modalidad: "Online en Vivo"
  },
  {
    id: 8,
    title: "El Poder de Elegir",
    description: "Salir del automatismo y recuperar tu soberanía interna. Elecciones inconscientes, patrones repetidos y decisiones heredadas.",
    fecha: "6 de Septiembre",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Identificación de automatismos", "Recuperación de soberanía", "Elecciones conscientes", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/PWCWWXokMvvbuHAT.png",
    tipo: "Retiro Sagrado",
    tema: "Consciencia",
    modalidad: "Online en Vivo"
  },
  {
    id: 9,
    title: "Protección Energética Consciente",
    description: "Límites, campo y soberanía personal. No absorber cargas ajenas y protección sin cerrarse.",
    fecha: "4 de Octubre",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Establecimiento de límites energéticos", "Protección del campo", "Soberanía personal", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/mjLVgRJUmSmOBnUd.png",
    tipo: "Retiro Sagrado",
    tema: "Sanación",
    modalidad: "Online en Vivo"
  },
  {
    id: 10,
    title: "El Llamado de los Ancestros",
    description: "Sanar el linaje sin repetir su historia. Herencias emocionales, lealtades invisibles y cargas que no son propias.",
    fecha: "1 de Noviembre",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Exploración del linaje", "Sanación de herencias", "Honrar sin repetir", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/MVAVXNlSzQDfLXcz.png",
    tipo: "Retiro Sagrado",
    tema: "Transformación",
    modalidad: "Online en Vivo"
  },
  {
    id: 11,
    title: "Cierra el Año en Luz",
    description: "Recolección, integración y cierre consciente. Recoger energía, cerrar ciclos e integrar aprendizajes.",
    fecha: "6 de Diciembre",
    ubicacion: "Club del Retiro Sagrado",
    horario: "8:00 - 12:00 hrs (CDMX) / 15:00 - 19:00 hrs (España)",
    participantes: "Ilimitado",
    precio: "Acceso al Club",
    incluye: ["Recolección de energía", "Cierre de ciclos anuales", "Integración de aprendizajes", "Certificado de participación"],
    estado: "Próximamente",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/DZbuvSAgAwEaNanY.png",
    tipo: "Retiro Sagrado",
    tema: "Consciencia",
    modalidad: "Online en Vivo"
  }
];
