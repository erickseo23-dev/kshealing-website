import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Heart, Zap, Sparkles, Lightbulb, Infinity, BookOpen, Star, Calendar, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ksHealingTestimonials } from "@/lib/programTestimonials";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function KSHealing() {

  const mainBenefits = [
    { title: "Transformación Profunda", description: "Cambios radicales en tu vida, relaciones y propósito", icon: Sparkles },
    { title: "Coherencia Divina", description: "Alineación con tu verdadera naturaleza espiritual", icon: Heart },
    { title: "Claridad Mental", description: "Acceso a estados profundos de presencia y sabiduría", icon: Lightbulb },
  ];

  const modules = [
    {
      title: "Módulo 1",
      subtitle: "Activación del Cuerpo KS",
      description: "Recibe el Cuerpo KS directamente de YOHEV y aprende cómo activarlo y conectarlo para utilizar la Energía KS de forma consciente.",
      items: ["Recepción del Cuerpo KS", "Activación energética", "Conexión consciente", "Uso de la Energía KS"],
      date: "22 de Febrero",
    },
    {
      title: "Módulo 2",
      subtitle: "Técnica de Autosanación",
      description: "Aprende a utilizar la Energía KS para sanarte a ti mismo y transformar tus patrones energéticos.",
      items: ["Autosanación energética", "Liberación de bloqueos", "Transformación personal", "Integración de cambios"],
      date: "1 de Marzo",
    },
    {
      title: "Módulo 3",
      subtitle: "Técnica de Sanación Energética",
      description: "Aprende a transmitir Energía KS a otros, tanto de manera presencial como a distancia.",
      items: ["Transmisión de energía", "Sanación presencial", "Sanación a distancia", "Facilitación profesional"],
      date: "8 de Marzo",
    },
  ];



  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Urgency */}
      <section className="relative py-24 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-program-hero.png" 
            alt="KS Healing Program" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 backdrop-blur-sm mb-6">
              <p className="text-red-200 font-semibold text-sm">⚡ CUPO LIMITADO - SOLO 3 DOMINGOS</p>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Certificación en <span className="text-secondary" style={{color: '#fbbc0e'}}>KS Healing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif leading-relaxed max-w-2xl">
              Formación oficial impartida directamente por YOHEV. Conviértete en practicante certificado en 3 domingos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2 font-bold text-lg" style={{color: '#ffffff'}}>
                Inscribirse Ahora
                <ArrowRight size={20} />
              </Button>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  Más Información
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-white/80 text-sm">
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

      {/* Testimonials - Early Social Proof */}
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
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" style={{color: '#fbbc0e'}} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base md:text-lg text-white mb-6 leading-relaxed italic line-clamp-4">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
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

      {/* Program Structure - Grid (No Carousel) */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Estructura del <span className="text-primary">Programa</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tres módulos progresivos hacia la maestría en KS Healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modules.map((module, idx) => (
              <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 w-fit">
                  {module.title}
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {module.subtitle}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {module.description}
                </p>
                
                <div className="border-t border-primary/20 pt-6 mb-6">
                  <p className="text-sm font-semibold text-foreground mb-4">Incluye:</p>
                  <ul className="space-y-2">
                    {module.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-primary/20 pt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Domingo:</span> {module.date}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Hora:</span> 12:00 - 14:00 hrs (CDMX)
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included in Each Module */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Cada Módulo Incluye
            </h2>
            <p className="text-lg text-muted-foreground">
              Estructura completa para tu aprendizaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🎬", title: "Material en Video", desc: "Contenido pregrabado para estudio independiente" },
              { icon: "🔴", title: "Sesión en Vivo", desc: "2 horas en vivo por Zoom con YOHEV cada domingo" },
              { icon: "👥", title: "Prácticas Online", desc: "Sesiones programadas con facilitador certificado" },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details - Key Info */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Detalles de la <span className="text-primary">Certificación</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Left: Key Details */}
              <div className="space-y-6">
                <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">📅 Próximas Fechas</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Domingo 22 de Febrero</p>
                        <p className="text-sm text-muted-foreground">Módulo 1: Activación del Cuerpo KS</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Domingo 1 de Marzo</p>
                        <p className="text-sm text-muted-foreground">Módulo 2: Técnica de Autosanación</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Domingo 8 de Marzo</p>
                        <p className="text-sm text-muted-foreground">Módulo 3: Técnica de Sanación Energética</p>
                      </div>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">💻 Modalidad</h3>
                  <div className="space-y-3 text-foreground">
                    <p><span className="font-semibold">100% Online en vivo</span></p>
                    <p>Por Zoom con YOHEV</p>
                    <p className="text-sm text-muted-foreground">Horario: 12:00 - 14:00 hrs (CDMX)</p>
                    <p className="text-sm text-muted-foreground">Duración: 2 horas por sesión</p>
                  </div>
                </Card>
              </div>

              {/* Right: Investment & Requirements */}
              <div className="space-y-6">
                <Card className="p-8 border-secondary/50 bg-gradient-to-br from-secondary/20 to-yellow-500/10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">💰 Inversión</h3>
                  <div className="space-y-4">
                    <p className="text-5xl font-bold text-secondary" style={{color: '#fbbc0e'}}>$145 USD</p>
                    <p className="text-sm text-muted-foreground">Incluye:</p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-foreground">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>3 sesiones en vivo con YOHEV</span>
                      </li>
                      <li className="flex gap-2 text-foreground">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>Material en video pregrabado</span>
                      </li>
                      <li className="flex gap-2 text-foreground">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>Prácticas online supervisadas</span>
                      </li>
                      <li className="flex gap-2 text-foreground">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>Certificación Internacional</span>
                      </li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">✨ Para quién es</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-foreground">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Personas en expansión de consciencia</span>
                    </li>
                    <li className="flex gap-2 text-foreground">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Terapeutas y facilitadores</span>
                    </li>
                    <li className="flex gap-2 text-foreground">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Quienes desean transmitir energía</span>
                    </li>
                    <li className="flex gap-2 text-foreground">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Con llamado a tecnologías energéticas</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Reserva Tu Lugar Ahora
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
              Cupo limitado para preservar la calidad del proceso energético
            </p>
            <p className="text-base text-white/80 mb-12 leading-relaxed">
              Da el primer paso en tu camino como practicante de KS Healing. Activa tu Cuerpo KS y aprende directamente de YOHEV.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-blue-50 text-primary gap-2 font-bold text-lg">
                Inscribirse en la Certificación
                <ArrowRight size={20} />
              </Button>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  Más Información
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
