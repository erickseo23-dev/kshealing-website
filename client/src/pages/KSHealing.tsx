'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Users, Award, Check, ArrowRight, Calendar, Zap } from "lucide-react";
import { ksHealingTestimonials } from "@/lib/programTestimonials";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

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

  const whatIncluded = [
    { title: "Material en Video Pregrabado", description: "Acceso completo a videos de cada módulo para revisar cuando quieras" },
    { title: "Sesión en Vivo con YOHEV", description: "2 horas de transmisión directa en Zoom para cada módulo" },
    { title: "Prácticas Online Programadas", description: "Sesiones con facilitador certificado según tu disponibilidad" },
    { title: "Certificación Internacional", description: "Reconocimiento oficial como Practicante de KS Healing" },
    { title: "Manual y Material Descargable", description: "Guías completas, ejercicios y recursos para tu práctica continua" },
  ];

  const forWhom = [
    "Quieres transformar tu vida a través de la Energía KS",
    "Deseas ayudar a otros sanando energéticamente",
    "Buscas una profesión con propósito y significado",
    "Estás comprometido con tu crecimiento espiritual",
    "Quieres unirte a una comunidad global de practicantes",
    "Tienes curiosidad genuina por la sanación energética",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* 1. Hero Section - Aspirational */}
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
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Conviértete en <span className="text-secondary" style={{color: '#fbbc0e'}}>Practicante Certificado</span> de KS Healing
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.i3cdigital.com/offers/FQuDTjNV/checkout" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-slate-950 font-bold gap-2" style={{backgroundColor: '#fbbc0e'}}>
                  Inscríbete Ahora
                  <ArrowRight size={20} />
                </Button>
              </a>
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

      {/* 2. Professional Session Image - After Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/iGSDDzIRXcH5A0CLxFJ7HR-img-1_1770062980000_na1fn_a3MtaGVhbGluZy1wcmFjdGl0aW9uZXItbWFsZS1zZXNzaW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L2lHU0REeklSWGNINUEwQ0x4Rko3SFItaW1nLTFfMTc3MDA2Mjk4MDAwMF9uYTFmbl9hM010YUdWaGJHbHVaeTF3Y21GamRHbDBhVzl1WlhJdGJXRnNaUzF6WlhOemFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SjUCyWqdz-ab0V1TwCOwsBFqLRKoVWRrohz~8oS0bizp4zaFHdTYRut3aOlMiPIZ3iB-bHNI1Pys3c0AlhcoafIYvyVp9bEjXbPCwZx54Cb3onw~3-gbuE5dQEJ6WMf1okvcaSrOUS3DyiUIyNWmneMATJTMn72uTHIVrA0dxIwmi4zpLealTR8Jxg3Mu41PNejiK19id8ZJo~5UDS3LAInoxFjW74afsXUHF9O69nUJz8V270KZzkERrlTs07OPYnSc7oKPmqqEuSNaBt3L2Wsv3rTJ9~1QdA08rWjwzOp~L3GnvS18DfT8ydJtHNeTJeC~xMhEfM8bnte8s~LZpg__" 
                alt="Sesión profesional de KS Healing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Certification */}
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

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainBenefits.map((benefit, idx) => {
              return (
                <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
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

      {/* 4. Training Image - Distributed */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/QNzd4Ewv2ZIOdzbbeCa2cU-img-1_1770063461000_na1fn_a3MtaGVhbGluZy10cmFpbmluZy1yZWFsLXBhdGllbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L1FOemQ0RXd2MlpJT2R6YmJlQ2EyY1UtaW1nLTFfMTc3MDA2MzQ2MTAwMF9uYTFmbl9hM010YUdWaGJHbHVaeTEwY21GcGJtbHVaeTF5WldGc0xYQmhkR2xsYm5RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dbP2WbhLKEUBo-rwoeFtK1f9KKDMuc9q-YG1MZ9bES0ur64~-wYClx2V4lAcmu8ukipy6BF976oVVDiYzR4QBjufvHBvckZK63t7cJl54sO2P-VVPBkTSnVnRkWdz9iC4pjOBfMDow2xlAR8xMHJo02-voGc8uhr0kickg3TBUM7CedWcu4MkXQW2bX8PZMeDTkaJv8B~hBKa4EsfcFb-42I1H5JdqV~pRYkeHG9AbpoLMg~nTlyPM7U0vF8OGLu3Kvo7h~brEq7FzK-wSLNBho4xDwKNDuyj3877ALCHvdyqviNObcImbK-cZvKO6w0FLdV1MMfz8ReWwOyPTL79Q__" 
                alt="Entrenamiento certificado" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. How to Start - Getting Started */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cómo <span className="text-primary">Empezar</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recomendamos prepararte con uno de estos dos caminos antes de iniciar la certificación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option 1: Book */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
              <div className="relative overflow-hidden rounded-xl mb-6 h-64">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/mQtJkKgneMgMTkmz.png" 
                  alt="Libro KS Healing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Opción 1: El Libro de KS Healing
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Adquiere el libro oficial de KS Healing para comprender profundamente los fundamentos de la Energía KS, la filosofía detrás del método y los principios que guían la práctica.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Comprensión profunda de los fundamentos</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Acceso a la filosofía y principios del método</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Preparación ideal para la certificación</span>
                </li>
              </ul>
              <a href="https://a.co/d/0ffmcjLG" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-slate-950 font-bold" style={{backgroundColor: '#fbbc0e'}}>
                  Comprar el Libro
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Card>

            {/* Option 2: Free Workshop */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
              <div className="relative overflow-hidden rounded-xl mb-6 h-64">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/bKIoEAVTrrzvvghT.png" 
                  alt="YOHEV dando taller" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Opción 2: Taller Gratuito
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Participa en el taller gratuito "KS Healing y Consciencia Crística" para experimentar directamente la Energía KS, conectar con la comunidad y decidir si la certificación es para ti.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Experiencia directa de la Energía KS</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Conexión con la comunidad</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">100% Gratuito y sin compromiso</span>
                </li>
              </ul>
              <Link href="/taller-ks-healing">
                <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Más Información del Taller
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20">
            <p className="text-center text-foreground leading-relaxed">
              <span className="font-semibold">Nota:</span> Recomendamos completar al menos uno de estos caminos antes de inscribirse en la certificación. Esto asegura que tengas una base sólida y que entiendas completamente qué es KS Healing.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Next Certification - Moved Up */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {certDetails.map((detail, idx) => (
                <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {detail.description}
                  </p>
                  <p className="text-sm font-semibold text-primary" style={{color: '#fbbc0e'}}>
                    {detail.date}
                  </p>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Fechas</p>
                  <p className="font-display text-2xl font-bold text-foreground">22 Feb, 1 Mar, 8 Mar</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Horario</p>
                  <p className="font-display text-2xl font-bold text-foreground">12:00 - 14:00 CDMX</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Modalidad</p>
                  <p className="font-display text-2xl font-bold text-foreground">Online en vivo</p>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-8">
                <p className="text-lg font-bold text-foreground mb-4">Inversión: <span style={{color: '#fbbc0e'}}>$145 USD</span></p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://www.i3cdigital.com/offers/FQuDTjNV/checkout" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-slate-950 font-bold gap-2" style={{backgroundColor: '#fbbc0e'}}>
                      Inscríbete Ahora
                      <ArrowRight size={20} />
                    </Button>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* 7. Program Structure - Grid */}
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

          <div className="max-w-3xl mx-auto space-y-4">
            {modules.map((module, idx) => (
              <details key={idx} className="group border border-primary/20 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-slate-900/10 hover:shadow-lg transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display text-lg font-bold text-foreground hover:bg-primary/10 transition-colors">
                  {module.title}
                  <span className="text-primary transition-transform group-open:rotate-180" style={{color: '#fbbc0e'}}>
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-primary/10 text-muted-foreground leading-relaxed">
                  {module.description}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Mastery Image */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-slate-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/Sxi0MGkM6ySD3Cf2bQpjlE-img-1_1770063821000_na1fn_a3MtcHJhY3RpdGlvbmVyLWFkdmFuY2VkLXByYWN0aWNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L1N4aTBNR2tNNnlTRDNDZjJiUXBqbEUtaW1nLTFfMTc3MDA2MzgyMTAwMF9uYTFmbl9hM010Y0hKaFkzUnBkR2x2Ym1WeUxXRmtkbUZ1WTJWa0xYQnlZV04wYVdObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Lhk6dDc0QYt4JmEZcHCrNsd8ECLdftPh5rWsK8IlmeZ9ulR61pyElstxx1IVm7AwyfE97tYj3HMsReQnkWRVKms8bzJLWa3LwsU6m~teEP~PSqYs5Chzig8uFQtiYTDqI56pKo9PFMef9l-tZd3HcO0KmXLqAs0XtA0g8n8Mlg3k~qww0pO~1MyrzyaXvBztagLme9BZpLUC4~wvvcdnfLdajhHtlnrqwHJSXyqsQurU6JoGk0-i1uPL0C3o~2NvwDvJdijWuzLn3EGCNPCHdxbO5-H25rUppwFGwW3pO15jF~5EjzG1~hoXAyGMYsLBzcw4Khk29Z3Ui6H0u1gkvQ__" 
                alt="Maestría profesional" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. What's Included */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Qué <span className="text-primary">Incluye</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada módulo contiene
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {whatIncluded.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20">
                      <Check size={16} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. For Whom */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Para <span className="text-primary">Quién</span> es?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Esta certificación es ideal para ti si...
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {forWhom.map((item, idx) => (
                <div key={idx} className="flex gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/10">
                  <Sparkles size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Practitioner Image */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/xJxatuqQKjkiNbwb.png" 
                alt="KS Healing Advanced Practitioner" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Transformation Journey */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tu Viaje de <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              De estudiante a Practicante Certificado
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="font-bold text-primary">1</span>
                  </div>
                </div>
                <div className="pt-12 pb-8 px-6 rounded-xl bg-gradient-to-br from-primary/5 to-slate-900/10 border border-primary/10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Inscripción</h3>
                  <p className="text-muted-foreground">Acceso inmediato a material pregrabado y comunidad</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="font-bold text-primary">2</span>
                  </div>
                </div>
                <div className="pt-12 pb-8 px-6 rounded-xl bg-gradient-to-br from-primary/5 to-slate-900/10 border border-primary/10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Aprendizaje</h3>
                  <p className="text-muted-foreground">Sesiones en vivo y prácticas con facilitadores certificados</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="font-bold text-primary">3</span>
                  </div>
                </div>
                <div className="pt-12 pb-8 px-6 rounded-xl bg-gradient-to-br from-primary/5 to-slate-900/10 border border-primary/10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Certificación</h3>
                  <p className="text-muted-foreground">Reconocimiento internacional como Practicante de KS Healing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Community */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Únete a Nuestra <span className="text-primary">Comunidad</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Practicantes certificados transformando vidas en todo el mundo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                <Users size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Practicantes Certificados</p>
              </Card>

              <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                <Award size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Países Representados</p>
              </Card>

              <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                <Heart size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">10k+</h3>
                <p className="text-muted-foreground">Vidas Transformadas</p>
              </Card>
            </div>
          </div>

          {/* Community Celebration Image */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/rSpRpvihZcFKdXxn.png" 
                alt="KS Healing Community Celebration" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 13. Testimonials - At the End */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Historias de <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lo que otros practicantes han experimentado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ksHealingTestimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-900/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary" style={{color: '#fbbc0e'}}>★</span>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-blue-600/10 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Listo para Tu <span className="text-primary">Transformación</span>?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Únete a la próxima certificación y conviértete en un Practicante Certificado de KS Healing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.i3cdigital.com/offers/FQuDTjNV/checkout" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-slate-950 font-bold gap-2" style={{backgroundColor: '#fbbc0e'}}>
                  Inscríbete Ahora
                  <ArrowRight size={20} />
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Próximas sesiones: 22 de Febrero, 1 de Marzo, 8 de Marzo • Online en vivo con YOHEV • $145 USD
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
