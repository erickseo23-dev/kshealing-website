import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, BookOpen, Clock, DollarSign, CheckCircle, Lock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

// Sección 1: Programas para Público General
const cursosPublicos = [
  {
    id: 1,
    title: "Taller Online Gratuito",
    subtitle: "KS Healing y Consciencia Crística",
    description: "Descubre cómo la Energía KS transforma tu consciencia crítica. Un taller interactivo donde exploraremos la conexión entre sanación energética y pensamiento consciente.",
    duration: "1 sesión",
    investment: "Gratis",
    level: "Abierto a todos",
    icon: "⚡",
    image: "/images/ks-healing-therapy.png",
    benefits: [
      "Introducción a la Energía KS",
      "Conexión con tu consciencia crítica",
      "Experiencia de transmisión directa",
      "Comunidad de transformación"
    ],
    color: "from-blue-600 to-blue-800",
    kajabi: "https://kajabi.com/taller-gratuito",
  },
  {
    id: 2,
    title: "Club del Retiro Sagrado",
    subtitle: "Transformación Mensual en Vivo",
    description: "Un programa de transformación continua con retiros mensuales en vivo vía Zoom. Acceso ilimitado a todos los retiros 2026 + grabaciones de retiros anteriores. Practica a tu ritmo y profundiza en cada enseñanza.",
    duration: "12 meses",
    investment: "Membresía Anual",
    level: "Abierto a todos",
    icon: "💕",
    image: "/images/retiro-sagrado-online.png",
    benefits: [
      "Retiros mensuales en vivo vía Zoom",
      "Acceso a todas las grabaciones",
      "Comunidad de transformación",
      "Práctica continua y sostenida"
    ],
    color: "from-rose-600 to-rose-800",
    kajabi: "https://kajabi.com/club-retiro-sagrado",
  },
  {
    id: 3,
    title: "KS Healing Nivel Básico",
    subtitle: "Sanación Energética Consciente",
    description: "La base fundamental de la sanación energética. Aprende a trabajar directamente con la Energía Keiouvos Stharef para acompañar procesos internos, emocionales y de consciencia.",
    duration: "3 semanas",
    investment: "$297 USD",
    level: "Principiante",
    icon: "⚡",
    image: "/images/ks-healing-therapy.png",
    benefits: [
      "Acompañamiento energético consciente",
      "Técnicas de presencia e intención",
      "Integración de mente, emoción y espíritu",
      "Certificación como practicante"
    ],
    color: "from-blue-600 to-blue-800",
    kajabi: "https://kajabi.com/ks-healing-basico",
  },
  {
    id: 4,
    title: "Taller de Genética Sagrada",
    subtitle: "Las 12 Capas del ADN Espiritual",
    description: "Accede a la sabiduría ancestral de tu linaje. Explora las 12 capas de tu ADN espiritual y activa el potencial multidimensional que siempre estuvo en ti.",
    duration: "3 semanas",
    investment: "$197 USD",
    level: "Abierto a todos",
    icon: "🧬",
    image: "/images/genetica-sagrada-workshop.png",
    benefits: [
      "Exploración de las 12 capas del ADN",
      "Sanación de linaje ancestral",
      "Activación multidimensional",
      "Integración de consciencia cósmica"
    ],
    color: "from-amber-600 to-amber-800",
    kajabi: "https://kajabi.com/genetica-sagrada-taller",
  },
];

// Sección 2: Programas Avanzados (Requieren Practicante)
const cursosAvanzados = [
  {
    id: 5,
    title: "KS Healing Nivel Avanzado",
    subtitle: "Especialización en Sanación Energética",
    description: "Profundiza en las técnicas avanzadas de KS Healing. Desarrolla tu capacidad de transmisión y expande tu comprensión de la Energía Keiouvos Stharef.",
    duration: "8 semanas",
    investment: "$497 USD",
    level: "Avanzado",
    icon: "⚡",
    image: "/images/ks-healing-therapy.png",
    benefits: [
      "Técnicas avanzadas de transmisión",
      "Profundización en arquetipos divinos",
      "Desarrollo de capacidades energéticas",
      "Preparación para facilitador"
    ],
    color: "from-indigo-600 to-indigo-800",
    kajabi: "https://kajabi.com/ks-healing-avanzado",
    requiereBasico: true,
  },
  {
    id: 6,
    title: "D.A.R.T.",
    subtitle: "Deep Archetypal Renewal Therapy",
    description: "Transforma los arquetipos internos que condicionan tu vida. Un proceso profundo de autoconocimiento que te permite renovar patrones limitantes y activar tu verdadero potencial.",
    duration: "8 semanas",
    investment: "$397 USD",
    level: "Avanzado",
    icon: "🔄",
    image: "/images/dart-therapy.png",
    benefits: [
      "Identificación de arquetipos limitantes",
      "Renovación de patrones internos",
      "Transformación profunda de creencias",
      "Integración de sombra y luz"
    ],
    color: "from-purple-600 to-purple-800",
    kajabi: "https://kajabi.com/dart",
    requiereAvanzado: true,
  },
  {
    id: 7,
    title: "Facilitador de Genética Sagrada",
    subtitle: "Especialización en ADN Espiritual",
    description: "Conviértete en facilitador de Genética Sagrada. Aprende a guiar a otros en la exploración de su ADN espiritual y la sanación de linaje ancestral.",
    duration: "8 semanas",
    investment: "$597 USD",
    level: "Avanzado",
    icon: "🧬",
    image: "/images/genetica-sagrada-workshop.png",
    benefits: [
      "Formación como facilitador",
      "Técnicas avanzadas de transmisión",
      "Protocolos de sesión grupal",
      "Certificación internacional"
    ],
    color: "from-amber-600 to-amber-800",
    kajabi: "https://kajabi.com/facilitador-genetica",
    requiereAvanzado: true,
  },
  {
    id: 8,
    title: "Facilitador de KS Healing",
    subtitle: "Especialización en Sanación Energética",
    description: "Conviértete en facilitador certificado de KS Healing. Desarrolla las habilidades necesarias para guiar a otros en su transformación energética.",
    duration: "8 semanas",
    investment: "$597 USD",
    level: "Avanzado",
    icon: "⚡",
    image: "/images/ks-healing-therapy.png",
    benefits: [
      "Formación como facilitador",
      "Técnicas de transmisión grupal",
      "Protocolos de sesión profesional",
      "Certificación internacional"
    ],
    color: "from-blue-600 to-blue-800",
    kajabi: "https://kajabi.com/facilitador-ks-healing",
    requiereAvanzado: true,
  },
  {
    id: 9,
    title: "Master en KS Healing",
    subtitle: "Maestría en Transformación Energética",
    description: "El nivel más alto de especialización en KS Healing. Integra toda la sabiduría del sistema y conviértete en un maestro de la Energía Keiouvos Stharef.",
    duration: "Programa intensivo",
    investment: "Consultar",
    level: "Master",
    icon: "👑",
    image: "/images/ks-healing-therapy.png",
    benefits: [
      "Integración completa del sistema",
      "Transmisión de maestría",
      "Formación de facilitadores",
      "Acceso a enseñanzas exclusivas"
    ],
    color: "from-yellow-600 to-yellow-800",
    kajabi: "https://kajabi.com/master-ks-healing",
    requiereAvanzado: true,
  },
];

function CursoCard({ curso, isAdvanced = false }: { curso: any; isAdvanced?: boolean }) {
  return (
    <Card
      className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card flex flex-col"
    >
      {/* Image */}
      {curso.image && (
        <div className="w-full h-48 overflow-hidden bg-muted relative">
          <img 
            src={curso.image} 
            alt={curso.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {isAdvanced && (
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-white">
              <Lock size={14} />
              Requiere Practicante
            </div>
          )}
        </div>
      )}

      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${curso.color} p-8 text-white`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-4xl mb-3">{curso.icon}</div>
            <h2 className="font-display text-3xl font-bold mb-2">{curso.title}</h2>
            <p className="text-white/90 text-lg">{curso.subtitle}</p>
          </div>
          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
            {curso.level}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {curso.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-primary flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Duración</p>
              <p className="font-semibold text-foreground">{curso.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign size={18} className="text-primary flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Inversión</p>
              <p className="font-semibold text-foreground">{curso.investment}</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 flex-1">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={18} className="text-primary" />
            Qué aprenderás
          </h3>
          <ul className="space-y-2">
            {curso.benefits.map((benefit: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="text-primary font-bold mt-1">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a href={curso.kajabi} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 flex items-center justify-center gap-2">
            Inscribirse en Kajabi
            <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </Card>
  );
}

export default function Cursos() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-accent">Cursos y Programas</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Elige tu camino de transformación. Cada programa está diseñado para un paso diferente en tu viaje de consciencia y evolución espiritual.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Programas para Público General */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comienza Tu <span className="text-primary">Camino</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Programas diseñados para el público general. No requieren experiencia previa en KS Healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cursosPublicos.map((curso) => (
              <CursoCard key={curso.id} curso={curso} isAdvanced={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-12 bg-gradient-to-r from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Profundiza Tu Práctica
            </h3>
            <p className="text-muted-foreground">
              Programas avanzados para practicantes certificados de KS Healing
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Programas Avanzados */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Especialización <span className="text-primary">Avanzada</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Programas exclusivos para practicantes de KS Healing Nivel Avanzado. Desarrolla tu maestría y conviértete en facilitador certificado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cursosAvanzados.map((curso) => (
              <CursoCard key={curso.id} curso={curso} isAdvanced={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Si tienes dudas sobre cuál programa es el más adecuado para ti, te recomendamos comenzar con el Taller Online Gratuito o KS Healing Nivel Básico como base sólida.
            </p>
            <Link href="/sobre-yohev">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                Conoce más sobre KS Healing
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
