import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, BookOpen, Clock, DollarSign, CheckCircle, Lock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

// Sección 1: Programas para Público General
const cursosPublicos = [
  {
    id: 1,
    title: "Taller Online Gratuito",
    subtitle: "KS Healing y Consciencia Crística",
    description: "Descubre cómo la Energía KS transforma tu consciencia crítica. Un taller interactivo donde exploraremos la conexión entre sanación energética y pensamiento consciente.",
    duration: "3 Horas",
    investment: "GRATIS",
    level: "Abierto a todos",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/vTRBQZgDDKzUWUdr.png",
    benefits: [
      "Introducción a la Energía KS",
      "Conexión con tu consciencia crítica",
      "Experiencia de transmisión directa",
      "Comunidad de transformación"
    ],
    color: "from-blue-600 to-blue-800",
    kajabi: "/taller-ks-healing",
    buttonText: "Más Información"
  },
  {
    id: 2,
    title: "Club del Retiro Sagrado",
    subtitle: "Transformación Mensual en Vivo",
    description: "Un programa de transformación continua con retiros mensuales en vivo vía Zoom. Acceso ilimitado a todos los retiros 2026 + grabaciones de retiros anteriores. Practica a tu ritmo y profundiza en cada enseñanza.",
    duration: "Membresía",
    investment: "29 USD c/mes",
    level: "Abierto a todos",
    image: "/images/retiro-sagrado-online.png",
    benefits: [
      "Retiros mensuales en vivo vía Zoom",
      "Acceso a todas las grabaciones",
      "Comunidad de transformación",
      "Práctica continua y sostenida"
    ],
    color: "from-rose-600 to-rose-800",
    kajabi: "/club-retiro-sagrado",
    buttonText: "Más Información"
  },
  {
    id: 3,
    title: "KS Healing Nivel Básico",
    subtitle: "Sanación Energética Consciente",
    description: "La base fundamental de la sanación energética. Aprende a trabajar directamente con la Energía Keiouvos Stharef para acompañar procesos internos, emocionales y de consciencia.",
    duration: "3 semanas",
    investment: "145 USD",
    level: "Principiante",
    image: "/images/ks-healing-therapy.png",
    benefits: [
      "Acompañamiento energético consciente",
      "Técnicas de presencia e intención",
      "Integración de mente, emoción y espíritu",
      "Certificación como practicante"
    ],
    color: "from-blue-600 to-blue-800",
    kajabi: "/ks-healing",
    buttonText: "Más Información"
  },
  {
    id: 4,
    title: "Taller de Genética Sagrada",
    subtitle: "Las 12 Capas del ADN Espiritual",
    description: "Accede a la sabiduría ancestral de tu linaje. Explora las 12 capas de tu ADN espiritual y activa el potencial multidimensional que siempre estuvo en ti.",
    duration: "3 semanas",
    investment: "145 USD",
    level: "Abierto a todos",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/aa1v2zWj3WLVAQOIDAVvSD-img-1_1770104531000_na1fn_dGFsbGVyLWdlbmV0aWNhLXNhZ3JhZGEtbmV3.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L2FhMXYyeldqM1dMVkFRT0lEQVZ2U0QtaW1nLTFfMTc3MDEwNDUzMTAwMF9uYTFmbl9kR0ZzYkdWeUxXZGxibVYwYVdOaExYTmhaM0poWkdFdGJtVjMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=v5rxV7Mqsp9GHxqEGM0YzoHu1bfnI55OfKXTv6hc0gBGkbGOfgVxjFclrvvstaqOWF4haGL9msioFsi2-evua~R-ms~e7sAUG3ZJvTLXtb2if0S8LTAqfpTsBdjpPOC1mmxV8ptycjkQHa7qVY2lw-iDYLHp4thcT9spg6oEH3lVXoIXk4nX2oNcNwo8aK327Tub2wHZeOAhM6fj2yu3t2sygjAOA~F6BL~UEdn~Q7xcnUznEmDgD27fvBAOzbPM9GvPal~1Iwb2gcJi387osBy0oGUdmDbMoOpumXys6Y~0gYxShfQXzOVbcsMyVBnm68TDonw~P4Ve8NWfDZ9arQ__",
    benefits: [
      "Exploración de las 12 capas del ADN",
      "Sanación de linaje ancestral",
      "Activación multidimensional",
      "Integración de consciencia cósmica"
    ],
    color: "from-amber-600 to-amber-800",
    kajabi: "/genetica-sagrada",
    buttonText: "Más Información"
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
    image: "https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/aa1v2zWj3WLVAQOIDAVvSD-img-2_1770104550000_na1fn_a3MtaGVhbGluZy1hdmFuemFkbw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L2FhMXYyeldqM1dMVkFRT0lEQVZ2U0QtaW1nLTJfMTc3MDEwNDU1MDAwMF9uYTFmbl9hM010YUdWaGJHbHVaeTFoZG1GdWVtRmtidy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=W1q-6a~X9hNL3myn-xCh5e7URVn4hmQlzunbbBn1fzY59j0BodpEWYRO7JJPJFro2dBx-V3PF8SsOwFQJDmPteK4etoRsJL1-UN6AvjDMoJLIN34m2xZtgEM9~tIh9tkXlmWJWDd2Nx5xlEeb~KCBcgtaG3XRTHHr~6fcJD5rF-07wH1uk0frG0H-HKLW3sQpuDOsGyLQk6iO5ElaYrFKpy7SZ2CqdotjqYw2B7nw0F0HlksT5ApFryc2bQ62tcFSxGDDFKP6HXDlUMEl~jQKP1GdSbvWl02laqD4ffVumkyNw2KzF2gAK18YHw6KaY-lsQAH8o0IndHNhKLM9yCSg__",
    benefits: [
      "Técnicas avanzadas de transmisión",
      "Profundización en arquetipos divinos",
      "Desarrollo de capacidades energéticas",
      "Preparación para facilitador"
    ],
    color: "from-indigo-600 to-indigo-800",
    kajabi: "https://kajabi.com/ks-healing-avanzado",
    requiereAvanzado: true,
  },
  {
    id: 6,
    title: "D.A.R.T.",
    subtitle: "Deep Archetypal Renewal Therapy",
    description: "Transforma los arquetipos internos que condicionan tu vida. Un proceso profundo de autoconocimiento que te permite renovar patrones limitantes y activar tu verdadero potencial.",
    duration: "8 semanas",
    investment: "$397 USD",
    level: "Avanzado",
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
    image: "https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/aa1v2zWj3WLVAQOIDAVvSD-img-3_1770104548000_na1fn_ZmFjaWxpdGFkb3Ita3MtaGVhbGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L2FhMXYyeldqM1dMVkFRT0lEQVZ2U0QtaW1nLTNfMTc3MDEwNDU0ODAwMF9uYTFmbl9abUZqYVd4cGRHRmtiM0l0YTNNdGFHVmhiR2x1WncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=b2IZ7RO1urlTSh6XYk2ew2KLCnmBUTMk2quBUZKJIlDb~wFXP8ZemVfACrAJqqbjxmJpqGQ1qk4azvvEW2wYQwvIn2VtQ8oggj-dzWU9steeyguqOiZJ5BbTEIWBQwtbow4InpV-skt7iKoGYGaq0iYl~kh-ouVNYQ6Ku4Gkus6eTIvr06GYUTFiAatzqm2mPboG6UNNsWBxsYkVCCa1-oqmZUWp44DUBnV-GQReDzo6OiIlr6~36-ODc~A-gb~DvlEl7d3ciftbWnJ3Snf2LMEzC53aUiOxRAFlhpKgUMov20ZO1tDh5FvJJTEVyNMv~SHJucnBtS~GVbOv~hoQJQ__",
    subtitle: "Especialización en Sanación Energética",
    description: "Conviértete en facilitador certificado de KS Healing. Desarrolla las habilidades necesarias para guiar a otros en su transformación energética.",
    duration: "8 semanas",
    investment: "$597 USD",
    level: "Avanzado",
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
    image: "https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/aa1v2zWj3WLVAQOIDAVvSD-img-4_1770104545000_na1fn_bWFzdGVyLWtzLWhlYWxpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L2FhMXYyeldqM1dMVkFRT0lEQVZ2U0QtaW1nLTRfMTc3MDEwNDU0NTAwMF9uYTFmbl9iV0Z6ZEdWeUxXdHpMV2hsWVd4cGJtYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ezea2c~iJ2I5bjZF092lNb~OrFEq4Ym4b5t3yXnXN72pJlaMZYVyQESD0zRO1gNX8DFUZAW1IRo7zPH8X1jq0nf4t7P4ZlHY5jUKDOwudJ~43I4WJrvCb4mg5BfbmirrLZfzPmOVvfKd-aNjawAG3-DijEVd-cAqmt7ak7bbLZO8Xpdn-ErgvXUl5PplHdVRg5ql4uNXr2OynVUXP0R02U9-YPpLLah4tLsGRoOzGBPvr3fVWr6kyJ2fvoy3hvN5o01dpW0uczn~CHVr688HA67JAlDCvaAlTjbFQSiaaOY~Wf4~jY~CTyrX5cB3oB~Ja5pR2u7Enwf0hcbkGBwmLA__",
    subtitle: "Maestría en Transformación Energética",
    description: "El nivel más alto de especialización en KS Healing. Integra toda la sabiduría del sistema y conviértete en un maestro de la Energía Keiouvos Stharef.",
    duration: "Programa intensivo",
    investment: "Consultar",
    level: "Master",
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
  const isPublic = !isAdvanced;
  
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

      {/* Header - Simplified */}
      <div className="p-8 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">{curso.title}</h2>
        <p className="text-muted-foreground">{curso.subtitle}</p>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {curso.description}
        </p>

        {/* Info Grid - Only for public programs */}
        {isPublic && (
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
        )}

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

        {/* CTA Button - Only for public programs */}
        {isPublic && (
          <Link href={curso.kajabi}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 flex items-center justify-center gap-2">
              {curso.buttonText}
              <ArrowRight size={18} />
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
}

function CursosPage() {
  return (
    <>
      <SEO
        title="Cursos y Certificaciones KS Healing - Formación en Energía Crística"
        description="Aprende KS Healing con cursos certificados. Desde talleres gratuitos hasta programas avanzados de formación en sanación energética crística."
        keywords="cursos KS Healing, certificación, formación, energía crística, taller gratuito, programa avanzado, YOHEV"
        canonicalUrl="https://kshealing.com/cursos"
      />
      <div className="min-h-screen flex flex-col bg-background"> <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-lg mb-4 uppercase tracking-wide">KS Healing Systems</p>
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
            <Link href="/que-es-ks-healing">
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
    </>
  );
}

export default CursosPage;
