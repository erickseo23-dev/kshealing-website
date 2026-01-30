import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Heart, Zap, Users, BookOpen, Star, Sparkles, Lightbulb, Infinity } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ksHealingTestimonials } from "@/lib/programTestimonials";
import { Button } from "@/components/ui/button";

export default function KSHealing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">✨ Programa Fundamental</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              KS <span className="text-primary">Healing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              La base fundamental de la sanación energética. Aprende a trabajar directamente con la Energía Keiouvos Stharef para transformar tu campo vibracional y recordar tu verdadera naturaleza divina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Comenzar Ahora
              </Button>
              <Button size="lg" variant="outline">
                Ver Próximos Eventos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is KS Healing - Redesigned */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl font-bold text-foreground mb-6">
                ¿Qué es <span className="text-primary">KS Healing</span>?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Un sistema revolucionario de sanación energética que utiliza la Energía Keiouvos Stharef para facilitar transformación profunda en todos los niveles de tu ser.
              </p>
            </div>

            {/* Three Pillars with Enhanced Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Conexión Divina",
                  description: "Conectar con la Energía KS es más que una experiencia espiritual, es desarrollar una relación profunda con el Creador y contigo mismo. Reconoce a Dios en ti y recuerda tu propia naturaleza divina.",
                  icon: Sparkles,
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-50 dark:bg-blue-950/30",
                },
                {
                  title: "Sanación Profunda",
                  description: "Transforma patrones emocionales y energéticos que limitan tu vida. Restaura tus sistemas energéticos al arquetipo divino original y recupera la coherencia divina que hemos olvidado.",
                  icon: Heart,
                  color: "from-rose-500 to-pink-500",
                  bgColor: "bg-rose-50 dark:bg-rose-950/30",
                },
                {
                  title: "Expansión de Conciencia",
                  description: "Accede a estados más profundos de presencia, coherencia y claridad interna. Equilibra todos tus cuerpos y sana en todos los niveles de tu viaje transformador.",
                  icon: Lightbulb,
                  color: "from-amber-500 to-orange-500",
                  bgColor: "bg-amber-50 dark:bg-amber-950/30",
                },
              ].map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className={`${pillar.bgColor} rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${pillar.color} mb-6`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="mt-20 pt-20 border-t border-primary/20">
            <h3 className="font-display text-3xl font-bold text-center text-foreground mb-12">
              Beneficios de la Práctica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "Transformar patrones emocionales limitantes",
                "Restaurar la coherencia divina original",
                "Elevar tu vibración y consciencia",
                "Recordar tu verdadera naturaleza divina",
                "Sanar en todos los niveles de tu ser",
                "Conectar con tu propósito de alma",
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20">
                      <Check size={16} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Bodies */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Sanación de los <span className="text-primary">7 Cuerpos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              KS Healing actúa sobre todos los niveles de tu ser, no solo el físico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { name: "Cuerpo Físico", icon: "💪", description: "Sanación y vitalidad del cuerpo material", color: "from-red-500 to-orange-500" },
              { name: "Cuerpo Emocional", icon: "❤️", description: "Liberación de emociones limitantes", color: "from-pink-500 to-rose-500" },
              { name: "Cuerpo Mental", icon: "🧠", description: "Claridad mental y reprogramación", color: "from-blue-500 to-cyan-500" },
              { name: "Cuerpo Intuitivo", icon: "✨", description: "Conexión con tu intuición divina", color: "from-purple-500 to-violet-500" },
              { name: "Cuerpo Álmico", icon: "🌟", description: "Alineación con tu propósito de alma", color: "from-yellow-500 to-amber-500" },
              { name: "Cuerpo Espiritual", icon: "🙏", description: "Conexión con lo sagrado", color: "from-green-500 to-emerald-500" },
              { name: "Cuerpo Divino", icon: "👑", description: "Unión con tu naturaleza divina", color: "from-indigo-500 to-blue-500" },
            ].map((body, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-primary/5 to-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{body.icon}</div>
                <h3 className="font-display font-bold text-foreground mb-2">{body.name}</h3>
                <p className="text-sm text-muted-foreground">{body.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Estructura del <span className="text-primary">Programa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Módulo 1: Fundamentos",
                items: [
                  "Introducción a la Energía KS",
                  "Historia y principios",
                  "Primeras prácticas",
                  "Meditaciones guiadas",
                ],
              },
              {
                title: "Módulo 2: Práctica Profunda",
                items: [
                  "Técnicas avanzadas",
                  "Trabajo energético",
                  "Sanación personal",
                  "Integración de cambios",
                ],
              },
            ].map((module, idx) => (
              <Card key={idx} className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-shadow">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">{module.title}</h3>
                <ul className="space-y-3">
                  {module.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-muted-foreground">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/retiro-sagrado">
              <a>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  Explorar Retiros
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Historias de <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce las experiencias de quienes han transformado sus vidas a través de KS Healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ksHealingTestimonials.slice(0, 3).map((testimonial, idx) => (
              <Card key={idx} className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comienza Tu Transformación
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a cientos de personas que han experimentado la sanación profunda a través de KS Healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/retiro-sagrado">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                    Reservar Mi Lugar
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
              <Button size="lg" variant="outline">
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
