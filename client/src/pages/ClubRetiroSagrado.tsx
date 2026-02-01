import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { eventos } from "@/lib/events";

const kajabi_mensual = "https://www.i3cdigital.com/offers/GdzCo9uE/checkout";
const kajabi_anual = "https://www.i3cdigital.com/offers/JvrtZ9TF";

export default function ClubRetiroSagrado() {
  const retiros2026 = eventos.filter(e => e.tipo === "Retiro Sagrado");
  const retiros2025 = [
    { nombre: "VOLVER AL SILENCIO", image: "/images/retiro-volver-silencio.png" },
    { nombre: "LIMPIA TU ENERGÍA", image: "/images/retiro-limpia-energia.png" },
    { nombre: "CÓDIGOS DE LUZ", image: "/images/retiro-codigos-luz.png" },
    { nombre: "RECUPERA TU CENTRO", image: "/images/retiro-recupera-centro.png" },
    { nombre: "SANA Y CIERRA CICLOS", image: "/images/retiro-sana-ciclos.png" },
    { nombre: "CLAVES INTERNAS PARA EL BIENESTAR VERDADERO", image: "/images/retiro-claves-bienestar.png" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">TRANSFORMACIÓN CONTINUA</p>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Club del Retiro Sagrado
            </h1>
            <p className="text-xl text-foreground mb-4">
              12 meses de transformación. 12 retiros en vivo con YOHEV.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Un viaje profundo de sanación, consciencia y transformación personal. Cada mes, un nuevo retiro facilitado directamente por YOHEV. Cada retiro, una nueva oportunidad de evolucionar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={kajabi_anual} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 gap-2">
                  Plan Anual - Ahorra $1,000
                  <ArrowRight size={24} />
                </Button>
              </a>
              <a href={kajabi_mensual} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-bold text-lg px-12 py-6">
                  Plan Mensual - $500
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Incluye */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Qué Incluye Tu Membresía
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Acceso completo a todo lo que necesitas para tu transformación
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Retiros Mensuales con YOHEV",
                  description: "Cada primer domingo del mes (8-12 hrs CDMX). Conexión en directo, EN VIVO, POR ZOOM.",
                  icon: "🔴"
                },
                {
                  title: "Grabaciones Ilimitadas",
                  description: "Acceso a grabaciones de todos los retiros. Disponible mientras mantengas tu membresía activa.",
                  icon: "📹"
                },
                {
                  title: "Acceso a la Comunidad del Club",
                  description: "Conecta con otros miembros en transformación. Comparte experiencias y aprendizajes.",
                  icon: "👥"
                },
                {
                  title: "Contenido Exclusivo",
                  description: "Meditaciones, ejercicios y recursos especiales solo para miembros. Disponible mientras mantengas tu membresía activa.",
                  icon: "✨"
                }
              ].map((benefit, idx) => (
                <Card key={idx} className="p-8 border-border/50 bg-background hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Los 12 Retiros de 2026 */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Los 12 Retiros de 2026 con YOHEV
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Un retiro transformador cada mes del año
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retiros2026.map((retiro, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg h-48 cursor-pointer">
                  <img
                    src={retiro.imagen || "/images/retiro-default.png"}
                    alt={retiro.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-display text-lg font-bold line-clamp-2">{retiro.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Retiros 2025 */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Retiros 2025 - Incluidos en Tu Membresía
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Acceso a todas las grabaciones de retiros anteriores mientras mantengas tu membresía activa
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retiros2025.map((retiro, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg h-40 cursor-pointer">
                  <img
                    src={retiro.image}
                    alt={retiro.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                    <h3 className="text-white font-display font-bold text-sm md:text-base leading-tight">
                      {retiro.nombre}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Lo Que Dicen Nuestros Miembros
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Historias reales de transformación
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Soy miembro desde hace 8 meses. La facilidad de YOHEV es increíble. Cada retiro me da herramientas nuevas. Las grabaciones me permiten profundizar cuando lo necesito.",
                  author: "María C.",
                  role: "Miembro - 8 meses"
                },
                {
                  quote: "Lo mejor es que YOHEV está siempre presente. No es un facilitador genérico. Su energía y conocimiento transforman cada retiro. He revisado grabaciones varias veces.",
                  author: "Roberto M.",
                  role: "Miembro - 1 año"
                },
                {
                  quote: "Perdí algunos retiros por trabajo, pero poder verlos grabados con YOHEV facilitando me permitió no quedarme atrás. El Club es flexible y profundo.",
                  author: "Alejandra T.",
                  role: "Miembro - 6 meses"
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Preguntas Frecuentes
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Todo lo que necesitas saber sobre el Club
            </p>

            <div className="space-y-4">
              {[
                {
                  q: "¿Cuándo comienza el Club?",
                  a: "El Club está disponible todo el año. Puedes inscribirte en cualquier momento y comenzar a disfrutar de los retiros mensuales y el contenido exclusivo."
                },
                {
                  q: "¿Puedo ver los retiros en vivo si no estoy en la zona horaria CDMX?",
                  a: "Sí. Los retiros se graban y tienes acceso ilimitado a todas las grabaciones. Puedes verlas en cualquier momento que te convenga."
                },
                {
                  q: "¿Qué pasa si me pierdo un retiro en vivo?",
                  a: "No hay problema. La grabación estará disponible en tu plataforma dentro de 24 horas. Puedes verla cuantas veces necesites."
                },
                {
                  q: "¿Puedo cambiar entre plan mensual y anual?",
                  a: "Sí. Puedes comenzar con el plan mensual y cambiar al anual en cualquier momento. Contacta a nuestro equipo de soporte para asistencia."
                },
                {
                  q: "¿Qué pasa si cancelo mi membresía?",
                  a: "Puedes cancelar tu suscripción en cualquier momento sin penalización. Sin embargo, al cancelar pierdes acceso inmediato a todo el contenido del Club, incluyendo grabaciones y acceso a la comunidad. El contenido solo está disponible mientras mantengas tu membresía activa."
                },
                {
                  q: "¿Quién facilita los retiros?",
                  a: "Todos los retiros del Club son facilitados directamente por YOHEV, quien aporta su experiencia, profundidad espiritual y presencia única a cada retiro."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="p-6 border-border/50 bg-background">
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground ml-6">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para Tu Transformación con YOHEV?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a cientos de personas que ya están transformando sus vidas a través del Club del Retiro Sagrado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={kajabi_anual} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 gap-2">
                  Plan Anual - Ahorra $1,000
                  <ArrowRight size={24} />
                </Button>
              </a>
              <a href={kajabi_mensual} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-bold text-lg px-12 py-6">
                  Plan Mensual - $500
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
