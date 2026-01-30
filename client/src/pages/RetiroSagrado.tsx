import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Mountain, Users, Heart, Zap, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { retiroSagradoTestimonials } from "@/lib/programTestimonials";

export default function RetiroSagrado() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold">🏔️ Experiencia Inmersiva</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Retiro <span className="text-accent">Sagrado</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Una experiencia inmersiva de transformación profunda. Retiros presenciales donde experimentarás transmisiones intensivas de Energía KS en comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Reservar tu Lugar
              </Button>
              <Button size="lg" variant="outline">
                Ver Próximas Fechas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Retiro Sagrado */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/sdfsf.jpeg" 
                alt="Retiro Sagrado" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                ¿Qué es el <span className="text-accent">Retiro Sagrado</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  El Retiro Sagrado es una experiencia transformadora diseñada para aquellos que desean sumergirse completamente en la Energía KS y experimentar una transformación profunda en comunidad.
                </p>
                <p className="text-lg leading-relaxed">
                  Durante varios días, te desconectas del mundo exterior y te conectas profundamente con tu ser interior, rodeado de facilitadores expertos y una comunidad de buscadores espirituales.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-accent">
                  Es un espacio sagrado donde la transformación ocurre a todos los niveles de tu ser.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Transmisiones intensivas de Energía KS",
                  "Meditaciones y prácticas guiadas",
                  "Sesiones de sanación grupal",
                  "Conexión profunda con otros participantes",
                  "Experiencias transformadoras",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <Check size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Experience */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              La Experiencia del <span className="text-accent">Retiro</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada día está diseñado para profundizar tu transformación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Mountain,
                title: "Ambiente Sagrado",
                description: "Retiros en lugares especialmente seleccionados por su energía y belleza natural",
              },
              {
                icon: Users,
                title: "Comunidad Transformadora",
                description: "Comparte la experiencia con otros buscadores espirituales en el mismo camino",
              },
              {
                icon: Zap,
                title: "Transmisiones Intensivas",
                description: "Recibe transmisiones directas de Energía KS de YOHEV y facilitadores certificados",
              },
              {
                icon: Heart,
                title: "Sanación Profunda",
                description: "Accede a estados de sanación y transformación que no son posibles en la vida cotidiana",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Retreat Schedule */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Estructura del <span className="text-accent">Retiro</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                day: "Día 1",
                title: "Llegada y Apertura",
                description: "Bienvenida, orientación y primera transmisión de Energía KS para establecer el espacio sagrado",
              },
              {
                day: "Día 2-3",
                title: "Profundización",
                description: "Transmisiones intensivas, meditaciones guiadas y trabajo energético profundo",
              },
              {
                day: "Día 4",
                title: "Integración y Expansión",
                description: "Sesiones de sanación grupal, prácticas avanzadas y conexión comunitaria",
              },
              {
                day: "Día 5",
                title: "Cierre y Regreso",
                description: "Ceremonia de cierre, integración de la experiencia y preparación para llevar la transformación a tu vida",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold">
                    {idx + 1}
                  </div>
                  {idx < 3 && <div className="w-1 h-16 bg-accent/30 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {item.day}: {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-border/50 bg-gradient-to-br from-accent/10 to-background">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Qué Esperar en el <span className="text-accent">Retiro</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  El Retiro Sagrado es una experiencia transformadora que va más allá de lo intelectual. Espera experimentar:
                </p>
                <ul className="space-y-3 mt-6">
                  {[
                    "Transmisiones de Energía KS que transforman tu campo vibracional",
                    "Liberación de emociones y patrones profundos",
                    "Momentos de claridad y conexión divina",
                    "Sanación en todos los niveles de tu ser",
                    "Conexión profunda con otros participantes",
                    "Cambios duraderos en tu percepción y vida",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Beneficios del <span className="text-accent">Retiro Sagrado</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Transformación profunda y acelerada",
              "Liberación de patrones ancestrales",
              "Conexión directa con tu propósito",
              "Sanación integral en todos los niveles",
              "Comunidad de apoyo duradero",
              "Herramientas para mantener la transformación",
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-accent/10 to-background">
                <div className="flex gap-4">
                  <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Experiencias del <span className="text-accent">Retiro Sagrado</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo el Retiro ha transformado vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {retiroSagradoTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-border/50 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-accent mt-1">{testimonial.certification}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 to-primary/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Vive la Transformación Sagrada
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a una experiencia transformadora que cambiará tu vida para siempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white gap-2">
              Reservar tu Lugar
              <ArrowRight size={20} />
            </Button>
            <Link href="/eventos">
              <a>
                <Button size="lg" variant="outline">
                  Ver Próximas Fechas
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
