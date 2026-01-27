import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonios = [
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

export default function Testimonios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Historias de Transformación
            </h1>
            <p className="text-xl text-white/90">
              Experiencias reales de personas que han trabajado con la Energía KS
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio) => (
              <Card key={testimonio.id} className="p-8 border-border/50 hover:shadow-lg transition-shadow flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonio.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 flex-grow leading-relaxed italic">
                  "{testimonio.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {testimonio.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-1">
                    {testimonio.title}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {testimonio.location}
                  </p>
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {testimonio.certification}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Listo para tu propia transformación?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada historia comienza con un primer paso. Elige el camino que resuena con tu alma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold transition-colors">
              Agendar Sesión
            </button>
            <button className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5 font-semibold transition-colors">
              Explorar Cursos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
