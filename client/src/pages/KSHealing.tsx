'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Users, Award, Check, ArrowRight, Calendar, Zap } from "lucide-react";
import { ksHealingTestimonials } from "@/lib/programTestimonials";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function KSHealing() {

  const mainBenefits = [
    { title: "Transformación Profunda", description: "Cambios radicales en tu vida, relaciones y propósito", icon: Sparkles },
    { title: "Coherencia Divina", description: "Alineación con tu verdadera naturaleza espiritual", icon: Heart },
    { title: "Comunidad Global", description: "Únete a practicantes certificados en todo el mundo", icon: Users },
  ];

  const modules = [
    {
      title: "Módulo 1: Activación del Cuerpo KS",
      description: "Recibe el Cuerpo KS directamente de YOHEV y aprende cómo activarlo, conectarlo para utilizar la Energía KS de forma consciente.",
      icon: Zap,
    },
    {
      title: "Módulo 2: Técnica de Autosanación",
      description: "Aprende a utilizar la energía KS para sanarte a ti mismo y alcanzar coherencia interna.",
      icon: Heart,
    },
    {
      title: "Módulo 3: Técnica de Sanación Energética",
      description: "Aprende a transmitir Energía KS a otros, tanto de manera presencial como a distancia.",
      icon: Users,
    },
  ];

  const certDetails = [
    {
      title: "Sesiones en Vivo con YOHEV",
      description: "3 domingos consecutivos, 2 horas cada sesión",
      date: "22 Feb, 1 Mar, 8 Mar",
    },
    {
      title: "Material Pregrabado",
      description: "Videos completos de cada módulo para revisar cuando quieras",
      date: "Acceso inmediato",
    },
    {
      title: "Prácticas Online",
      description: "Sesiones programadas con facilitador certificado",
      date: "Según tu disponibilidad",
    },
    {
      title: "Certificación Internacional",
      description: "Reconocimiento oficial como Practicante de KS Healing",
      date: "Al completar",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section - Aspirational */}
      <section className="relative py-24 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ks-healing-professionals-hero.png" 
            alt="Profesionales de KS Healing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/50 to-slate-950/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40" style={{borderColor: '#fbbc0e40', backgroundColor: '#fbbc0e20'}}>
              <span className="text-secondary font-semibold text-sm" style={{color: '#fbbc0e'}}>Cupo Limitado - 22 Feb, 1 Mar, 8 Mar</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Conviértete en <span className="text-secondary" style={{color: '#fbbc0e'}}>Practicante Certificado</span> de KS Healing
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-slate-950 font-bold gap-2" style={{backgroundColor: '#fbbc0e'}}>
                Inscríbete Ahora
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                Más Información
                <ArrowRight size={20} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-white/80 text-sm mt-12">
              <div className="flex gap-2 items-center">
                <Calendar size={18} className="text-secondary" style={{color: '#fbbc0e'}} />
                <span>22 Feb, 1 Mar, 8 Mar</span>
              </div>
              <div className="flex gap-2 items-center">
                <Users size={18} className="text-secondary" style={{color: '#fbbc0e'}} />
                <span>Online en vivo con YOHEV</span>
              </div>
              <div className="flex gap-2 items-center">
                <Award size={18} className="text-secondary" style={{color: '#fbbc0e'}} />
                <span>$145 USD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Certification */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Por qué esta <span className="text-primary">Certificación</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubre cómo KS Healing transforma tu vida y te convierte en practicante certificado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mainBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-primary to-blue-600 mb-6">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Grid Visible */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Historias de <span className="text-secondary" style={{color: '#fbbc0e'}}>Transformación</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Lo que otros practicantes han experimentado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ksHealingTestimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 border-primary/30 bg-gradient-to-br from-primary/10 to-slate-900/40 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-secondary text-lg" style={{color: '#fbbc0e'}}>★</span>
                  ))}
                </div>

                <p className="text-base md:text-lg text-white mb-6 leading-relaxed italic line-clamp-4">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-primary/20 pt-6">
                  <p className="font-display text-lg font-bold text-white mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-secondary font-semibold" style={{color: '#fbbc0e'}}>
                    {testimonial.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure - Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Estructura del <span className="text-primary">Programa</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              3 módulos intensivos diseñados para tu transformación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {modules.map((module, idx) => {
              const IconComponent = module.icon;
              return (
                <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-secondary to-yellow-500 mb-6" style={{background: 'linear-gradient(135deg, #fbbc0e, #f59e0b)'}}>
                    <IconComponent size={32} className="text-slate-950" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Qué <span className="text-primary">Incluye</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada módulo contiene
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary" style={{backgroundColor: '#fbbc0e'}}>
                    <Check size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Material en Video Pregrabado
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Acceso completo a videos de cada módulo para revisar cuando quieras
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary" style={{backgroundColor: '#fbbc0e'}}>
                    <Check size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Sesión en Vivo con YOHEV
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    2 horas de transmisión directa en Zoom para cada módulo
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary" style={{backgroundColor: '#fbbc0e'}}>
                    <Check size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Prácticas Online Programadas
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Sesiones con facilitador certificado según tu disponibilidad
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary" style={{backgroundColor: '#fbbc0e'}}>
                    <Check size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Certificación Internacional
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Reconocimiento oficial como Practicante de KS Healing
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary" style={{backgroundColor: '#fbbc0e'}}>
                    <Check size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Manual y Material Descargable
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Guías completas, ejercicios y recursos para tu práctica continua
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Para <span className="text-secondary" style={{color: '#fbbc0e'}}>Quién</span> es?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Esta certificación es ideal para ti si...
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Quieres transformar tu vida a través de la Energía KS",
                "Deseas ayudar a otros sanando energéticamente",
                "Buscas una profesión con propósito y significado",
                "Estás comprometido con tu crecimiento espiritual",
                "Quieres unirte a una comunidad global de practicantes",
                "Tienes curiosidad genuina por la sanación energética",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <Check size={24} className="text-secondary flex-shrink-0 mt-1" style={{color: '#fbbc0e'}} />
                  <p className="text-white leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Gallery */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tu Viaje de <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              De estudiante a Practicante Certificado
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/ks-healing-transformation-journey.png" 
              alt="Viaje de transformación" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Únete a Nuestra <span className="text-primary">Comunidad</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practicantes certificados transformando vidas en todo el mundo
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/ks-healing-community-celebration.png" 
              alt="Comunidad de KS Healing" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Next Certification */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Próxima <span className="text-primary">Certificación</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Todo lo que necesitas saber sobre la próxima cohorte
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-br from-primary/10 to-slate-900/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Detalles Principales</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Calendar size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Fechas</p>
                        <p className="text-muted-foreground">22 Feb, 1 Mar, 8 Mar</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Zap size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Horario</p>
                        <p className="text-muted-foreground">12:00 - 14:00 CDMX</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Users size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Modalidad</p>
                        <p className="text-muted-foreground">Online en vivo</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Award size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Inversión</p>
                        <p className="text-secondary font-bold text-lg" style={{color: '#fbbc0e'}}>$145 USD</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Lo que Incluye</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" style={{color: '#fbbc0e'}} />
                      <span className="text-foreground">3 módulos intensivos</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" style={{color: '#fbbc0e'}} />
                      <span className="text-foreground">Sesiones con YOHEV</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" style={{color: '#fbbc0e'}} />
                      <span className="text-foreground">Material pregrabado</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" style={{color: '#fbbc0e'}} />
                      <span className="text-foreground">Prácticas con facilitador</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" style={{color: '#fbbc0e'}} />
                      <span className="text-foreground">Manual descargable</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" style={{color: '#fbbc0e'}} />
                      <span className="text-foreground">Certificación Internacional</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-slate-950 font-bold gap-2" style={{backgroundColor: '#fbbc0e'}}>
                    Inscríbete Ahora
                    <ArrowRight size={20} />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary/10 gap-2">
                    Más Información
                    <ArrowRight size={20} />
                  </Button>
                </div>
              </div>

              <p className="text-center text-muted-foreground text-sm mt-6">
                Cupo limitado - Solo 20 lugares disponibles
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl" style={{backgroundColor: '#fbbc0e'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Tu Transformación?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Únete a la próxima certificación y conviértete en un Practicante Certificado de KS Healing. Cupo limitado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold gap-2">
                Inscríbete Ahora
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                Contactar
                <ArrowRight size={20} />
              </Button>
            </div>

            <p className="text-white/70 text-sm mt-8">
              Próximas sesiones: 22 de Febrero, 1 de Marzo, 8 de Marzo • Online en vivo con YOHEV • $145 USD
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
