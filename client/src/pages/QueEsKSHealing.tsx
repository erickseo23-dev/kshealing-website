import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Zap, Brain, Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function QueEsKSHealing() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      location: "Ciudad de México",
      role: "Terapeuta Holística",
      testimonial: "La Energía KS transformó completamente mi práctica. Mis clientes reportan cambios profundos después de las sesiones. Es como si hubiera encontrado la herramienta que siempre busqué.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      location: "Monterrey",
      role: "Empresario",
      testimonial: "Escéptico al principio, pero después de recibir la transmisión KS mi claridad mental mejoró significativamente. Tomo mejores decisiones y siento una coherencia que no había experimentado antes.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      location: "Guadalajara",
      role: "Psicóloga",
      testimonial: "La integración de KS Healing en mi trabajo ha sido revolucionaria. Veo a mis pacientes liberarse de patrones emocionales más rápidamente. La Energía actúa en niveles que la terapia tradicional no alcanza.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      location: "Bogotá",
      role: "Coach de Vida",
      testimonial: "Después de completar la certificación en KS Healing, mi vida cambió radicalmente. Ahora puedo transmitir esta energía a otros y verlos transformarse. Es un honor ser parte de esta misión.",
      rating: 5,
    },
    {
      name: "Lucía Fernández",
      location: "Buenos Aires",
      role: "Médica Integrativa",
      testimonial: "He estudiado muchos sistemas de sanación, pero KS Healing es único. La coherencia que genera es medible y los resultados son consistentes. Mis pacientes experimentan sanación en múltiples niveles.",
      rating: 5,
    },
    {
      name: "David Morales",
      location: "Lima",
      role: "Facilitador KS",
      testimonial: "La transmisión de YOHEV abrió mis ojos a una realidad que siempre estuvo ahí. Ahora veo la vida desde una perspectiva completamente diferente. La Energía KS es real y sus efectos son profundos.",
      rating: 5,
    },
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const benefits = [
    {
      title: "Coherencia Energética",
      description: "Alineación y armonía en todos tus sistemas energéticos",
      icon: Zap,
    },
    {
      title: "Sanación Emocional",
      description: "Transformación de patrones emocionales limitantes",
      icon: Heart,
    },
    {
      title: "Claridad Mental",
      description: "Acceso a estados más profundos de presencia y claridad",
      icon: Brain,
    },
    {
      title: "Transformación de Patrones",
      description: "Liberación de creencias y comportamientos que no te sirven",
      icon: CheckCircle2,
    },
    {
      title: "Conexión Divina",
      description: "Reconexión con tu verdadera naturaleza espiritual",
      icon: Heart,
    },
    {
      title: "Impacto en la Vida",
      description: "Cambios evidentes y sostenibles en tu realidad cotidiana",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section - Improved */}
      <section className="relative py-24 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-hero.png" 
            alt="Energía KS" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 border border-white/50 backdrop-blur-sm">
              <p className="text-white font-medium text-sm font-semibold">ENERGÍA TRANSFORMADORA</p>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ¿Qué es la <span className="text-secondary" style={{color: '#fbbc0e'}}>Energía KS</span>?
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif leading-relaxed max-w-2xl">
              Un sistema de sanación energética que utiliza la Energía Crística Keiouvos Stharef para facilitar transformación profunda en tu ser.
            </p>
            
            <Link href="/ks-healing">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary gap-2" style={{color: '#ffffff'}}>
                Aprende KS Healing
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Definition Section - Enhanced */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 md:p-16 border-primary/30 bg-gradient-to-br from-primary/10 to-slate-900/40 backdrop-blur-sm">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
                Definición Fundamental
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  KS Healing es un sistema de sanación energética que utiliza la <span className="font-semibold" style={{color: '#fbbc0e'}}>Energía Keiouvos Stharef</span> para facilitar transformación profunda en los sistemas energéticos humanos.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  No es una religión, no requiere creencias previas, y funciona respetando el libre albedrío de cada persona. La Energía KS actúa en la <span className="font-semibold" style={{color: '#fbbc0e'}}>coherencia pura</span>, reorganizando los campos energéticos hacia su estado natural de armonía y salud.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Redesigned */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cómo Funciona la <span className="text-primary">Energía KS</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tres pilares fundamentales que trabajan en armonía para tu transformación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "El Cuerpo KS",
                description: "Una estructura energética multidimensional que se activa en ti a través de la transmisión directa de YOHEV. Es el vehículo a través del cual la Energía KS fluye e se integra en tu ser.",
                points: [
                  "Se recibe una sola vez en la vida",
                  "Permanece activo indefinidamente",
                  "Se desarrolla a través de la práctica",
                ],
              },
              {
                icon: Brain,
                title: "El Campo KS",
                description: "Un campo energético toroidal que se genera alrededor de ti y que actúa en múltiples niveles: físico, emocional, mental y espiritual. Este campo es dinámico y se expande con tu práctica.",
                points: [
                  "Reorganiza tu sistema energético",
                  "Facilita la coherencia interna",
                  "Impacta tu entorno",
                ],
              },
              {
                icon: Heart,
                title: "La Transmisión",
                description: "La Energía KS se transmite de forma intencionada a través de múltiples canales, llevando la frecuencia de alta coherencia directamente a tu sistema energético.",
                points: [
                  "Sesiones privadas con facilitadores",
                  "Cursos y formaciones",
                  "El libro intencionado",
                ],
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={idx} 
                  className="p-8 border-primary/30 bg-gradient-to-br from-primary/5 to-slate-900/20 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-transformation.png" 
            alt="Transformación" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tu Transformación Comienza Aquí
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif leading-relaxed">
              La Energía KS te devuelve a tu verdadera naturaleza divina y te abre a posibilidades infinitas de crecimiento y sanación.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Asymmetric Layout */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Beneficios de <span className="text-primary">KS Healing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transformación integral en todos los aspectos de tu vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={idx} 
                  className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coherence Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-coherence.png" 
            alt="Coherencia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Coherencia en Todos los Niveles
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif leading-relaxed">
              La Energía KS actúa de forma integrada, reorganizando tus sistemas energéticos hacia la armonía perfecta.
            </p>
            <Link href="/ks-healing">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary gap-2" style={{color: '#ffffff'}}>
                Aprende KS Healing
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - Improved */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Historias de <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Experiencias reales de personas que han trabajado con la Energía KS
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-10 md:p-12 border-primary/30 bg-gradient-to-br from-primary/10 to-slate-900/40 backdrop-blur-sm min-h-[380px] flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" style={{color: '#fbbc0e'}} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-white mb-8 flex-grow leading-relaxed italic">
                "{testimonials[currentTestimonial].testimonial}"
              </p>

              {/* Author Info */}
              <div className="border-t border-primary/20 pt-6 mb-8">
                <p className="font-display text-xl font-bold text-white mb-2">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-primary font-semibold mb-1">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-xs text-white/60">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-4">
                <Button
                  onClick={handlePrevTestimonial}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronLeft size={20} />
                </Button>

                {/* Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentTestimonial
                          ? "bg-primary w-8"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Ir al testimonio ${idx + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNextTestimonial}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </Card>

            {/* Counter */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Testimonio {currentTestimonial + 1} de {testimonials.length}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Comienza Tu Viaje de Transformación
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Descubre cómo la Energía KS puede cambiar tu vida y reconectar contigo mismo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
              <Link href="/ks-healing">
                <Button size="lg" className="w-full bg-white hover:bg-blue-50 text-primary gap-2">
                  Aprende KS Healing
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 gap-2">
                  Agenda una Sesión con Yohev
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/practicantes">
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 gap-2">
                  Encuentra un Practicante
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/cursos-y-programas">
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 gap-2">
                  Cursos y Programas KS
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
