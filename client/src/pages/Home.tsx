import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Users, BookOpen, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Por primera vez en la historia</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Recuerda Quién Eres <span className="text-primary">Realmente</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-serif">
              La Energía Crística Keiouvos Stharef te devuelve a tu verdadera naturaleza divina. Un sistema de sanación energética que transforma tu vida desde adentro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/que-es-ks-healing">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                    Descubre KS Healing
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
              <Link href="/el-libro">
                <a>
                  <Button size="lg" variant="outline" className="gap-2">
                    <BookOpen size={20} />
                    Leer el Libro
                  </Button>
                </a>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">5000+</div>
                <p className="text-sm text-muted-foreground">Practicantes Activos</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">45+</div>
                <p className="text-sm text-muted-foreground">Países</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">17</div>
                <p className="text-sm text-muted-foreground">Capítulos del Libro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              ¿Por Qué KS Healing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un sistema integral de transformación que combina transmisión energética, educación espiritual y práctica consciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Transmisión Energética Viva",
                description: "Energía intencionalizada que actúa en múltiples niveles de tu ser",
              },
              {
                icon: Users,
                title: "Guía Experto",
                description: "Acompañamiento directo de YOHEV y facilitadores certificados",
              },
              {
                icon: Sparkles,
                title: "Transformación Comprobada",
                description: "Miles de practicantes en transformación activa en todo el mundo",
              },
              {
                icon: BookOpen,
                title: "Accesible para Todos",
                description: "No requiere conocimientos previos, solo apertura y consciencia",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comienza Tu Viaje de Transformación
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si has sentido el llamado a leer esto, es porque ya existe en ti una resonancia con esta frecuencia. 
              No necesitas ser perfecto. Solo necesitas estar abierto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sesiones">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Reservar una Sesión
                  </Button>
                </a>
              </Link>
              <Link href="/cursos">
                <a>
                  <Button size="lg" variant="outline">
                    Ver Cursos
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Historias de Transformación
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo la Energía KS ha transformado vidas en todo el mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "María González",
                location: "México",
                quote: "La Energía KS cambió mi vida. Pasé de vivir en el miedo a vivir en la paz.",
              },
              {
                name: "Juan Rodríguez",
                location: "España",
                quote: "Después de recibir KS Healing, mi perspectiva sobre la vida se transformó completamente.",
              },
              {
                name: "Ana Martínez",
                location: "Argentina",
                quote: "Finalmente entiendo quién soy realmente. KS Healing me devolvió a mí misma.",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
