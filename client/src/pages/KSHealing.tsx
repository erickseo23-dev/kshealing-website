import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Heart, Zap, Users, BookOpen, Star, Sparkles, Lightbulb, Infinity, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ksHealingTestimonials } from "@/lib/programTestimonials";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function KSHealing() {
  const [currentBenefitIdx, setCurrentBenefitIdx] = useState(0);
  const [currentModuleIdx, setCurrentModuleIdx] = useState(0);
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  const benefits = [
    { title: "Transformación Profunda", description: "Cambios radicales en tu vida, relaciones y propósito", icon: Sparkles },
    { title: "Coherencia Divina", description: "Alineación con tu verdadera naturaleza espiritual", icon: Heart },
    { title: "Claridad Mental", description: "Acceso a estados profundos de presencia y sabiduría", icon: Lightbulb },
    { title: "Sanación Integral", description: "Restauración de todos tus cuerpos energéticos", icon: Zap },
    { title: "Conexión Infinita", description: "Reconexión con lo divino y el propósito de tu alma", icon: Infinity },
    { title: "Práctica Sostenible", description: "Herramientas que se desarrollan indefinidamente", icon: BookOpen },
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos",
      description: "Introducción a la Energía KS y principios fundamentales",
      items: ["Historia de KS Healing", "Primeros pasos", "Meditaciones guiadas", "Integración básica"],
    },
    {
      title: "Módulo 2: Práctica Profunda",
      description: "Técnicas avanzadas y trabajo energético intensivo",
      items: ["Técnicas avanzadas", "Trabajo personal", "Sanación emocional", "Expansión de campo"],
    },
    {
      title: "Módulo 3: Maestría",
      description: "Dominio completo y transmisión de la Energía KS",
      items: ["Maestría energética", "Transmisión", "Facilitación", "Integración total"],
    },
  ];

  const handleNextBenefit = () => {
    setCurrentBenefitIdx((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
  };

  const handlePrevBenefit = () => {
    setCurrentBenefitIdx((prev) => (prev === 0 ? benefits.length - 1 : prev - 1));
  };

  const handleNextModule = () => {
    setCurrentModuleIdx((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
  };

  const handlePrevModule = () => {
    setCurrentModuleIdx((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev === ksHealingTestimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev === 0 ? ksHealingTestimonials.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-program-hero.png" 
            alt="KS Healing Program" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 border border-white/50 backdrop-blur-sm">
              <p className="text-white font-medium text-sm font-semibold">PROGRAMA FUNDAMENTAL</p>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              KS <span className="text-secondary" style={{color: '#fbbc0e'}}>Healing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif leading-relaxed max-w-2xl">
              La base fundamental de la sanación energética. Aprende a trabajar directamente con la Energía Keiouvos Stharef para transformar tu campo vibracional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary gap-2" style={{color: '#ffffff'}}>
                Comenzar Ahora
                <ArrowRight size={20} />
              </Button>
              <Link href="/eventos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  Ver Próximos Eventos
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is KS Healing */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl font-bold text-foreground mb-6">
                ¿Qué es <span className="text-primary">KS Healing</span>?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Un sistema revolucionario de sanación energética que utiliza la Energía Keiouvos Stharef para facilitar transformación profunda
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Conexión Divina",
                  description: "Conectar con la Energía KS es desarrollar una relación profunda con el Creador y contigo mismo.",
                  icon: Sparkles,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Sanación Profunda",
                  description: "Transforma patrones emocionales y energéticos que limitan tu vida.",
                  icon: Heart,
                  color: "from-rose-500 to-pink-500",
                },
                {
                  title: "Expansión de Conciencia",
                  description: "Accede a estados más profundos de presencia, coherencia y claridad interna.",
                  icon: Lightbulb,
                  color: "from-amber-500 to-orange-500",
                },
              ].map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${pillar.color} mb-6`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Beneficios de la <span className="text-secondary" style={{color: '#fbbc0e'}}>Práctica</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Descubre cómo KS Healing transforma todos los aspectos de tu vida
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-12 md:p-16 border-primary/30 bg-gradient-to-br from-primary/10 to-slate-900/40 backdrop-blur-sm min-h-[300px] flex flex-col justify-between">
              <div>
                <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-secondary to-yellow-500 mb-6" style={{background: 'linear-gradient(135deg, #fbbc0e, #fcd34d)'}}>
                  {(() => {
                    const IconComponent = benefits[currentBenefitIdx].icon;
                    return <IconComponent size={32} className="text-slate-900" />;
                  })()}
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  {benefits[currentBenefitIdx].title}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  {benefits[currentBenefitIdx].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-4 mt-12">
                <Button
                  onClick={handlePrevBenefit}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronLeft size={20} />
                </Button>

                <div className="flex gap-2">
                  {benefits.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentBenefitIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentBenefitIdx
                          ? "bg-secondary w-8"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      style={{backgroundColor: idx === currentBenefitIdx ? '#fbbc0e' : undefined}}
                      aria-label={`Ir al beneficio ${idx + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNextBenefit}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>

              <p className="text-center text-sm text-white/60 mt-6">
                Beneficio {currentBenefitIdx + 1} de {benefits.length}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Structure Carousel */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Estructura del <span className="text-primary">Programa</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un camino progresivo hacia la maestría en KS Healing
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-12 md:p-16 border-primary/30 bg-gradient-to-br from-primary/5 to-slate-900/10">
              <div className="mb-8">
                <h3 className="font-display text-3xl font-bold text-foreground mb-3">
                  {modules[currentModuleIdx].title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {modules[currentModuleIdx].description}
                </p>
                <ul className="space-y-3">
                  {modules[currentModuleIdx].items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-primary/20">
                <Button
                  onClick={handlePrevModule}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronLeft size={20} />
                </Button>

                <div className="flex gap-2">
                  {modules.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentModuleIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentModuleIdx
                          ? "bg-primary w-8"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Ir al módulo ${idx + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNextModule}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Módulo {currentModuleIdx + 1} de {modules.length}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Practice Gallery */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                Práctica de <span style={{color: '#fbbc0e'}}>KS Healing</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Visualiza cómo se practica y enseña KS Healing en diferentes contextos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { src: '/images/ks-healing-program-hero.png', alt: 'Sesión de Grupo' },
                { src: '/images/ks-healing-practice-daily.png', alt: 'Práctica Diaria' },
                { src: '/images/ks-healing-transformation-journey.png', alt: 'Transformación' },
                { src: '/images/ks-healing-group-session.png', alt: 'Workshop' },
              ].map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <p className="text-white font-serif text-lg">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 Bodies Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Sanación de los <span className="text-primary">7 Cuerpos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              KS Healing actúa sobre todos los niveles de tu ser
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { name: "Cuerpo Físico", icon: "💪", description: "Sanación y vitalidad", color: "from-red-500 to-orange-500" },
              { name: "Cuerpo Emocional", icon: "❤️", description: "Liberación emocional", color: "from-pink-500 to-rose-500" },
              { name: "Cuerpo Mental", icon: "🧠", description: "Claridad mental", color: "from-blue-500 to-cyan-500" },
              { name: "Cuerpo Intuitivo", icon: "✨", description: "Intuición divina", color: "from-purple-500 to-violet-500" },
              { name: "Cuerpo Álmico", icon: "🌟", description: "Propósito de alma", color: "from-yellow-500 to-amber-500" },
              { name: "Cuerpo Espiritual", icon: "🙏", description: "Conexión sagrada", color: "from-green-500 to-emerald-500" },
              { name: "Cuerpo Divino", icon: "👑", description: "Naturaleza divina", color: "from-indigo-500 to-blue-500" },
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

      {/* Testimonials Carousel */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Historias de <span className="text-secondary" style={{color: '#fbbc0e'}}>Transformación</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Experiencias reales de quienes han transformado sus vidas
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-10 md:p-12 border-primary/30 bg-gradient-to-br from-primary/10 to-slate-900/40 backdrop-blur-sm min-h-[380px] flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" style={{color: '#fbbc0e'}} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-white mb-8 flex-grow leading-relaxed italic">
                "{ksHealingTestimonials[currentTestimonialIdx].quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-primary/20 pt-6 mb-8">
                <p className="font-display text-xl font-bold text-white mb-2">
                  {ksHealingTestimonials[currentTestimonialIdx].name}
                </p>
                <p className="text-sm text-secondary font-semibold" style={{color: '#fbbc0e'}}>
                  {ksHealingTestimonials[currentTestimonialIdx].title}
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

                <div className="flex gap-2">
                  {ksHealingTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentTestimonialIdx
                          ? "bg-secondary w-8"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      style={{backgroundColor: idx === currentTestimonialIdx ? '#fbbc0e' : undefined}}
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

              <p className="text-center text-sm text-white/60 mt-6">
                Testimonio {currentTestimonialIdx + 1} de {ksHealingTestimonials.length}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Comienza Tu Transformación
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
              Únete a miles de personas que han transformado sus vidas a través de KS Healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-blue-50 text-primary gap-2">
                Comenzar Ahora
                <ArrowRight size={20} />
              </Button>
              <Link href="/retiro-sagrado">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  Ver Retiros
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
