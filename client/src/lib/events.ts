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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
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
    modalidad: "Online en Vivo"
  },
  {
    id: 12,
    title: "Certificación Internacional en KS Healing Nivel Básico",
    description: "Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos.",
    fecha: "22 de Febrero - 8 de Marzo, 2026",
    ubicacion: "Online en vivo",
    horario: "3 domingos consecutivos, 2 horas cada sesión",
    participantes: "20 lugares disponibles",
    precio: "$145 USD",
    incluye: [
      "Material en Video Pregrabado - Acceso completo a videos de cada módulo",
      "Sesión en Vivo con YOHEV - 2 horas de transmisión directa en Zoom",
      "Prácticas Online Programadas - Sesiones con facilitador certificado",
      "Certificación Internacional - Reconocimiento oficial como Practicante de KS Healing"
    ],
    estado: "Abierto",
    imagen: "https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/QNzd4Ewv2ZIOdzbbeCa2cU-img-1_1770062980000_na1fn_a3MtaGVhbGluZy1wcmFjdGl0aW9uZXItbWFsZS1zZXNzaW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L1FOemQ0RXd2MlpJT2R6YmJlQ2EyY1UtaW1nLTFfMTc3MDA2Mjk4MDAwMF9uYTFmbl9hM010YUdWaGJHbHVaeTF3Y21GamRHbDBhVzl1WlhJdGJXRnNaUzF6WlhOemFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SjUCyWqdz-ab0V1TwCOwsBFqLRKoVWRrohz~8oS0bizp4zaFHdTYRut3aOlMiPIZ3iB-bHNI1Pys3c0AlhcoafIYvyVp9bEjXbPCwZx54Cb3onw~3-gbuE5dQEJ6WMf1okvcaSrOUS3DyiUIyNWmneMATJTMn72uTHIVrA0dxIwmi4zpLealTR8Jxg3Mu41PNejiK19id8ZJo~5UDS3LAInoxFjW74afsXUHF9O69nUJz8V270KZzkERrlTs07OPYnSc7oKPmqqEuSNaBt3L2Wsv3rTJ9~1QdA08rWjwzOp~L3GnvS18DfT8ydJtHNeTJeC~xMhEfM8bnte8s~LZpg__",
    tipo: "Certificación",
    tema: "KS Healing",
    modalidad: "Online en Vivo"
  }
];
