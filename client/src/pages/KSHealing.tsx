import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Heart, Zap, Users, BookOpen, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ksHealingTestimonials } from "@/lib/programTestimonials";

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

      {/* What is KS Healing */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                ¿Qué es <span className="text-primary">KS Healing</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  KS Healing es un sistema de sanación energética revolucionario que utiliza la Energía Keiouvos Stharef (KS) para facilitar transformación profunda en los sistemas energéticos humanos.
                </p>
                <p className="text-lg leading-relaxed">
                  Un sistema de sanación energética que utiliza la Energía Keiouvos Stharef para facilitar la transformación profunda de los sistemas energéticos humanos.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Transformar patrones emocionales limitantes",
                  "Restaurar la coherencia divina original",
                  "Elevar tu vibración y consciencia",
                  "Recordar tu verdadera naturaleza divina",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/sdfsf.jpeg" 
                alt="KS Healing" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Bodies */}
      <section className="py-20 md:py-32 bg-primary/5">
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
              { name: "Cuerpo Físico", icon: "💪", description: "Sanación y vitalidad del cuerpo material" },
              { name: "Cuerpo Emocional", icon: "❤️", description: "Liberación de emociones limitantes" },
              { name: "Cuerpo Mental", icon: "🧠", description: "Claridad mental y reprogramación" },
              { name: "Cuerpo Intuitivo", icon: "✨", description: "Conexión con tu intuición divina" },
              { name: "Cuerpo Álmico", icon: "🌟", description: "Alineación con tu propósito de alma" },
              { name: "Cuerpo Espiritual", icon: "🙏", description: "Conexión con lo sagrado" },
              { name: "Cuerpo Divino", icon: "👑", description: "Unión con tu naturaleza divina" },
            ].map((body, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-primary/10 to-background hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3">{body.icon}</div>
                <h3 className="font-display font-bold text-foreground mb-2">{body.name}</h3>
                <p className="text-sm text-muted-foreground">{body.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with Images */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Beneficios de <span className="text-primary">KS Healing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Conexión Divina",
                description: "Conectar con la Energía KS es más que una experiencia espiritual, es desarrollar una relación profunda con el Creador y contigo mismo. Es encontrar tu propio lugar en la creación, tanto en la Tierra como en los planos superiores. Es reconocer a Dios en ti y recordar tu propia naturaleza divina",
                image: "/images/conexion-divina-header.png",
              },
              {
                title: "Sanación Profunda",
                description: "Transforma patrones emocionales y energéticos que limitan tu vida, restableciendo tus sistemas energéticos al arquetipo divino original. Somos perfectos, bellos, sanos y abundantes por diseño. Solo debemos recordar y recuperar la coherencia divina que hemos olvidado",
                image: "/images/sanacion-profunda-header.png",
              },
              {
                title: "Expansión de Conciencia",
                description: "Accede a estados más profundos de presencia, coherencia y claridad interna. Renovar los arquetipos negativos de la personalidad; equilibrar tus cuerpos de dolor y de placer; sanar en todos los niveles, es parte de tu viaje transformador en KS Healing",
                image: "/images/expansion-conciencia-header.png",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
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

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Fundamentos de la Energía KS",
                description: "Comprende los principios básicos de la Energía Keiouvos Stharef y cómo actúa en tu campo energético",
              },
              {
                step: 2,
                title: "Técnicas de Activación",
                description: "Aprende las técnicas específicas para activar y canalizar la Energía KS",
              },
              {
                step: 3,
                title: "Sanación de los 7 Cuerpos",
                description: "Trabaja con cada uno de los cuerpos energéticos para lograr sanación integral",
              },
              {
                step: 4,
                title: "Integración y Maestría",
                description: "Integra todo lo aprendido y desarrolla tu capacidad de trabajar con la Energía KS de forma autónoma",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {item.title}
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

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Lo que dicen nuestros <span className="text-primary">Participantes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ksHealingTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.certification}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Comienza tu Transformación
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a cientos de personas que han experimentado la sanación profunda a través de KS Healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                Inscribirse Ahora
                <ArrowRight size={20} />
              </Button>
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
