import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Heart, Zap, Users, Star, Leaf, Sparkles, Share2, Calendar, Clock, MapPin, ArrowRight, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { retiroSagradoTestimonials } from "@/lib/programTestimonials";
import { eventos } from "@/lib/events";
import { useState } from "react";

export default function RetiroSagrado() {
  const [selectedRetiro, setSelectedRetiro] = useState<any>(null);
  const [selectedRetiro2025, setSelectedRetiro2025] = useState<any>(null);

  const retiros2025 = [
    {
      id: 1,
      nombre: "Volver al Silencio",
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/yAWkbSAsDZEhZfSE.png",
      descripcion: "Un retiro para aquietar el ruido interno, soltar la sobreestimulación y regresar al centro. Un espacio de pausa consciente donde el silencio se convierte en guía y claridad."
    },
    {
      id: 2,
      nombre: "Limpia tu Energía",
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/awwYPuBlxOHblLFU.png",
      descripcion: "Un encuentro para liberar cargas emocionales, mentales y energéticas acumuladas. Ideal para quienes sienten cansancio profundo, saturación interna o desgaste invisible."
    },
    {
      id: 3,
      nombre: "Códigos de Luz",
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/SlhMwHLojSoulpMw.png",
      descripcion: "Un retiro de reconexión con el orden interno y la información sutil de equilibrio. Permite recordar estados de coherencia profunda y alineación más allá del esfuerzo mental."
    },
    {
      id: 4,
      nombre: "Recupera tu Centro",
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/yDLnhOHAVkuqDLHK.png",
      descripcion: "Diseñado para volver al eje interno cuando la vida, el estrés o las emociones desbalancean. Un espacio para reencontrarte contigo y restablecer estabilidad en medio del movimiento."
    },
    {
      id: 5,
      nombre: "Sana y Cierra Ciclos",
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/xSECzmGUyDixWbNv.png",
      descripcion: "Un retiro para cerrar procesos abiertos, relaciones y etapas inconclusas sin arrastre. Ayuda a liberar lo que ya cumplió su función y recuperar energía para el presente."
    },
    {
      id: 6,
      nombre: "Claves Internas para el Bienestar Verdadero",
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/rnjSKFLtTUKVGlty.png",
      descripcion: "Un encuentro de comprensión profunda sobre lo que realmente sostiene el bienestar. Integra regulación emocional, coherencia mental, presencia corporal y orden energético."
    },
    {
      id: 7,
      nombre: "Presencia Viva",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/presencia-viva-retreat-jSoYc9AvwbYg8BDm4zgGKM.webp",
      descripcion: "Un retiro de profunda presencia y consciencia. Aprende a estar completamente presente en cada momento, disolviendo distracciones y conectando con tu esencia más pura. Acceso completo a la grabación disponible para ver en cualquier momento dentro de tu membresía."
    },
    {
      id: 8,
      nombre: "La Arquitectura del Amor",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/arquitectura-del-amor-couple-EddrtjoJULaDsnKrapS9u8.webp",
      descripcion: "Un retiro que explora la estructura fundamental del amor en todas sus dimensiones. Descubre cómo el amor construye, sana y transforma. Acceso completo a la grabación disponible para ver en cualquier momento dentro de tu membresía."
    },
    {
      id: 9,
      nombre: "Reinicio Energético Profundo",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/reinicio-energetico-retreat-j5cWC2a8g4Uszh94JgpFdt.webp",
      descripcion: "Un retiro de renovación y reset energético. Limpia patrones antiguos, restablece tu energía vital y comienza de nuevo con claridad y poder. Acceso completo a la grabación disponible para ver en cualquier momento dentro de tu membresía."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hero-inner-child-Wkh3TYb93bP6YvZbv6dsib.png)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white font-semibold">🌿 Retiro Sagrado 10 - CON YOHEV</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                El Niño que <span className="text-yellow-300">Habita en Ti</span>
              </h1>
              <p className="text-lg text-white font-semibold mb-4 drop-shadow">
                Facilitado directamente por YOHEV
              </p>
              <p className="text-xl text-white mb-6 drop-shadow">
                Sanar la raíz emocional sin revivir el dolor
              </p>
              <p className="text-lg text-white mb-8 italic drop-shadow">
                "El niño interior como estructura viva que sigue organizando decisiones y vínculos."
              </p>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white font-semibold">📅 Domingo 12 de Abril | 8:00 - 12:00 hrs (CDMX)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#enrollment">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Inscribirme a este Retiro
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-border/50 bg-gradient-to-br from-background to-primary/10">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                El <span className="text-primary">Niño Interior</span> Sigue Organizando tu Vida
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Tus decisiones, tus relaciones, tu forma de amar y recibir... todo está siendo influenciado por una estructura viva que se formó hace años.
                </p>
                <p className="mt-6">
                  <span className="font-semibold text-foreground">El niño interior no es un concepto. Es una realidad energética que sigue operando desde las sombras.</span>
                </p>
                <p className="font-semibold text-foreground mt-6">
                  Este retiro es un espacio para sanar esa raíz sin revivir el trauma.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Energy Reset */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/man-inner-child-healing-anyvamPKx5eCcPv6uhKrFU.webp" 
                alt="Hombre en Meditación y Sanación del Niño Interior" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                ¿Qué es el <span className="text-primary">Niño Interior?</span>
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  No es un concepto terapéutico. Es una estructura energética viva que se formó cuando eras pequeño y sigue operando hoy.
                </p>
                <p className="text-lg leading-relaxed">
                  Influye en:
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Cómo tomas decisiones</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Cómo amas y recibes amor</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tus patrones de relación</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tu relación con la autoridad</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tu capacidad de recibir y prosperar</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed font-semibold text-foreground mt-6">
                  Sanar esto sin revivir el trauma es posible. Y es transformador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-muted-foreground font-semibold">¿Te resuena este retiro?</p>
            <Button 
              size="lg" 
              onClick={() => {
                const url = window.location.href;
                const text = "Retiro Sagrado 9: El Niño que Habita en Ti - Sana la raíz emocional sin revivir el dolor";
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank', 'width=600,height=400');
              }}
              className="gap-2 bg-[#1877F2] hover:bg-[#165FD8] text-white"
            >
              <Share2 size={18} />
              Compartir en Facebook
            </Button>
          </div>
        </div>
      </section>

      {/* Why March */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            ¿Por Qué Sanar el Niño Interior Ahora?
          </h2>
          <div className="mb-12">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/man-transformation-freedom-bsbHWNgDrMLmYA9CjnzihM.webp" alt="Transformación y Libertad del Hombre" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <Card className="relative p-8 border-border/50 bg-background group-hover:shadow-3xl transition-shadow">
                <Heart size={32} className="text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-4">Transformación Profunda</h3>
                <p className="text-muted-foreground">
                  Sanar el niño interior no es revivir el trauma. Es identificar la estructura viva que sigue organizando tus decisiones y transformarla desde la consciencia del adulto.
                </p>
              </Card>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <Card className="relative p-8 border-border/50 bg-background group-hover:shadow-3xl transition-shadow">
                <Sparkles size={32} className="text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-4">Libertad Emocional</h3>
                <p className="text-muted-foreground">
                  Recupera tu poder de decisión, libérate de patrones repetitivos, sana tus vínculos desde la raíz y entra en relaciones desde tu verdadero ser, no desde las heridas del pasado.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Work */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Qué Vamos a Sanar?
            </h2>
            <div className="mb-12">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/meditation-healing-BJkpk6iTNFduXPoQ5r6rvL.webp" alt="Meditación y Sanación del Niño Interior" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Identificar patrones del niño interior que siguen operando",
                "Reconocer cómo influye en tus decisiones y relaciones",
                "Sanar la raíz sin revivir el trauma",
                "Reordenarte desde el adulto consciente",
                "Transformar patrones de relación",
                "Recuperar tu libertad emocional",
                "Sanar vínculos desde la raíz",
                "Entrar en relaciones desde tu verdadero ser"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground font-semibold text-center">
                No se trata de revivir el trauma. Se trata de identificar la estructura viva del niño interior y transformarla desde la consciencia del adulto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is This For */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Cómo Saber si Necesitas Este Retiro?
            </h2>
            <div className="mb-12">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/inner-child-patterns-TmCkAT4kpMuU3zDFNN6yws.webp" alt="Identificación de Patrones del Niño Interior" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Tus relaciones se repiten en patrones que no entiendes",
                "Tomas decisiones desde el miedo, no desde tu verdadero ser",
                "Te cuesta recibir amor o prosperidad",
                "Sientes que \"algo\" controla tus acciones desde adentro",
                "Repites los mismos conflictos en diferentes relaciones",
                "Quieres sanar, pero no sabes por dónde empezar"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <Star size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground text-center">
                <span className="font-semibold">Si reconoces estos patrones,</span> el niño interior sigue operando desde las sombras. Este retiro es para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Can Change */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Qué Puede Cambiar Después?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Libertad para tomar decisiones propias",
                "Relaciones más auténticas",
                "Capacidad de recibir amor sin culpa",
                "Patrones de relación transformados",
                "Conexión con tu verdadero ser",
                "Prosperidad desde tu poder personal"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg">
                  <Sparkles size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-background rounded-lg border border-primary/20">
              <p className="text-foreground text-center">
                No porque "hicieron algo",<br />
                sino porque <span className="font-semibold">sanaron la raíz y el niño interior se transformó.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retiro Structure */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Estructura del Retiro (4 Horas)
            </h2>
            <Card className="p-12 border-border/50 bg-gradient-to-br from-background to-primary/10">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Llegada y estabilización del sistema nervioso</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Identificación de patrones del niño interior</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Reconocimiento de cómo influye en tus decisiones</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Sanación de la raíz sin revivir el trauma</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Transformación desde la consciencia del adulto</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Liberación de patrones de relación</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Meditación de reconexión con tu verdadero ser</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Sellado de tu libertad emocional</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Cómo Accedes al Retiro?
            </h2>
            <Card className="p-12 border-border/50 bg-gradient-to-br from-background to-primary/10">
              <p className="text-muted-foreground text-lg mb-6">
                Este retiro forma parte del <span className="font-semibold text-foreground">Club del Retiro Sagrado</span>.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Al ser miembro del Club obtienes:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Acceso en vivo a este retiro</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Acceso a todas las grabaciones de retiros anteriores</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Acceso a los retiros futuros mientras tu membresía esté activa</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Invitación a terapias energéticas en vivo que se publican después en redes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Un espacio continuo de trabajo interno, no eventos aislados</span>
                </li>
              </ul>
              <p className="text-foreground font-semibold">
                No se vende este retiro por separado. El acceso es únicamente a través del Club.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Una Idea Final */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Una Idea Final
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              No necesitas más terapia.<br />
              No necesitas más razón.
            </p>
            <p className="text-2xl font-semibold text-foreground mb-8">
              Necesitas sanar la raíz.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Si sientes que el niño interior sigue controlando tu vida, este espacio es para ti.
            </p>
            <a href="#enrollment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Inscribirme a este Retiro
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-12 text-center">
              ¿Listo para Sanar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Option 1: Single Retiro */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-white/40 transition-all">
                <p className="text-white/80 mb-4 font-semibold">Acceso Individual</p>
                <h3 className="text-2xl font-bold text-white mb-4">El Niño que Habita en Ti</h3>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Acceso en vivo al retiro</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Grabación disponible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Acceso por 30 días</span>
                  </li>
                </ul>
                <p className="text-5xl font-bold text-white mb-2">$29 USD <span className="text-2xl">(~500 MXN)</span></p>
                <p className="text-white/70 text-sm mb-6">compra única • Acceso 30 días</p>
                <a href="https://cursos.institutoascendant.com/offers/6c23Rxto" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                    Comprar Ahora
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center md:col-span-2">
                <div className="text-white/60 text-2xl font-bold">O</div>
              </div>

              {/* Option 2: Club Membership */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-white/40 transition-all">
                <p className="text-white/80 mb-4 font-semibold">Acceso Completo</p>
                <h3 className="text-2xl font-bold text-white mb-4">Membresía al Club del Retiro Sagrado</h3>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Este retiro en vivo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Todos los retiros futuros</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Grabaciones anteriores</span>
                  </li>
                </ul>
                <p className="text-5xl font-bold text-white mb-2">$29 USD <span className="text-2xl">(~500 MXN)</span></p>
                <p className="text-white/70 text-sm mb-6">por mes • Cancela cuando quieras</p>
                <a href="https://www.i3cdigital.com/offers/GdzCo9uE/checkout" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                    Inscribirse Ahora
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm mb-4">
                ¿Quieres acceso a todos los retiros del Club?
              </p>
              <Link href="/club-retiro-sagrado" className="text-white hover:text-white/80 underline inline-block font-semibold">
                Conocer el Club del Retiro Sagrado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retiros Disponibles Section - Same as Club */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Retiros que ya están disponibles en tu membresía
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Haz click en cualquier retiro para ver más detalles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retiros2025.map((retiro) => (
                <Card 
                  key={retiro.id} 
                  className="overflow-hidden border-border/50 bg-primary/5 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedRetiro2025(retiro)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={retiro.img} 
                      alt={retiro.nombre}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm mb-2">{retiro.nombre}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {retiro.descripcion}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {selectedRetiro2025 && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedRetiro2025(null)}>
                <Card className="max-w-2xl w-full bg-background border-border/50 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <img 
                      src={selectedRetiro2025.img} 
                      alt={selectedRetiro2025.nombre}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedRetiro2025(null)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {selectedRetiro2025.nombre}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {selectedRetiro2025.descripcion}
                    </p>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                      <p className="text-foreground font-semibold flex items-center gap-2">
                        <Check size={20} className="text-primary" />
                        Este retiro ya está disponible en tu membresía
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Accede a la grabación completa desde tu plataforma de miembro
                      </p>
                    </div>

                    <div className="border-t border-border/30 pt-6">
                      <a href="https://www.i3cdigital.com/products/club-de-retiro-sagrado" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                          Acceder a Mi Membresía
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Próximos Retiros Section - Same as Club */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Próximos Retiros con YOHEV
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Haz click en cualquier retiro para ver más detalles
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventos.filter(e => e.tipo === "Retiro Sagrado").slice(0, 12).map((retiro) => (
                <Card 
                  key={retiro.id} 
                  className="overflow-hidden border-border/50 bg-background hover:shadow-lg transition-all cursor-pointer relative"
                  onClick={() => setSelectedRetiro(retiro)}
                >
                  {retiro.estado === "Ya Disponible" && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      YA DISPONIBLE
                    </div>
                  )}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={retiro.imagen} 
                      alt={retiro.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-primary font-semibold mb-1">
                      {retiro.fecha}
                    </p>
                    <h3 className="font-semibold text-foreground text-sm mb-2">{retiro.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {retiro.description || 'Un encuentro profundo de transformación y sanación.'}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {selectedRetiro && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedRetiro(null)}>
                <Card className="max-w-2xl w-full bg-background border-border/50 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <img 
                      src={selectedRetiro.imagen} 
                      alt={selectedRetiro.title}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedRetiro(null)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {selectedRetiro.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {selectedRetiro.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start gap-3">
                        <Calendar size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Fecha</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.fecha}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Horario</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.horario}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Modalidad</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.modalidad}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Participantes</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.participantes}</p>
                        </div>
                      </div>
                    </div>

                    {selectedRetiro.incluye && selectedRetiro.incluye.length > 0 && (
                      <div className="mb-8">
                        <h3 className="font-semibold text-foreground mb-4 text-lg">Incluye:</h3>
                        <ul className="space-y-2">
                          {selectedRetiro.incluye.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <Check size={18} className="text-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="border-t border-border/30 pt-6">
                      <a href="#pricing">
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                          Unirse al Club para Acceder
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
