export interface Testimonial {
  id: number;
  name: string;
  location: string;
  title: string;
  text: string;
  rating: number;
  certification: string;
}

export const testimonios: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    location: "Madrid, España",
    title: "Transformación Profunda",
    text: "Después de años de búsqueda espiritual, KS Healing me permitió experimentar una transformación real. No es solo teoría, es una experiencia viva que cambia tu relación con la energía y la consciencia.",
    rating: 5,
    certification: "Practicante Certificada",
  },
  {
    id: 2,
    name: "Carlos Mendez",
    location: "Ciudad de México",
    title: "Sanación Energética Real",
    text: "Lo que más me impactó fue que no es un sistema que promete milagros. Es una herramienta que funciona cuando te entregas a ella. Mi vida cambió después de la primera sesión con YOHEV.",
    rating: 5,
    certification: "Practicante en Formación",
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    location: "Buenos Aires, Argentina",
    title: "Coherencia y Claridad",
    text: "KS Healing me devolvió la claridad que había perdido. Ahora entiendo que la verdadera sanación viene de la coherencia entre lo que pienso, siento y hago. YOHEV es un maestro excepcional.",
    rating: 5,
    certification: "Practicante Certificada",
  },
  {
    id: 4,
    name: "David López",
    location: "Barcelona, España",
    title: "Activación de Centros Energéticos",
    text: "Los ejercicios de KS Healing son simples pero profundos. Después de practicar durante tres meses, siento una energía diferente en mi cuerpo. Es como si mis centros energéticos se hubieran despertado.",
    rating: 5,
    certification: "Practicante en Formación",
  },
  {
    id: 5,
    name: "Laura Martínez",
    location: "Lima, Perú",
    title: "Libro Intencionalizado",
    text: "El libro de KS Healing es diferente a cualquier otro. Mientras leo, siento que algo sucede en mi interior. Es un portal vivo, como YOHEV dice. Recomiendo este libro a todos mis amigos.",
    rating: 5,
    certification: "Lectora del Libro",
  },
  {
    id: 6,
    name: "Roberto García",
    location: "Bogotá, Colombia",
    title: "Camino de Consciencia",
    text: "YOHEV no vende promesas falsas. Ofrece un camino real de consciencia. Después de trabajar con KS Healing, entiendo que la verdadera transformación es interna y requiere compromiso.",
    rating: 5,
    certification: "Practicante Certificado",
  },
];
