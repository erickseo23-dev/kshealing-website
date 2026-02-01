import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Heart, Zap, Users, Star, Leaf, Sparkles, Share2, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { retiroSagradoTestimonials } from "@/lib/programTestimonials";
import { eventos } from "@/lib/events";
import { useState } from "react";

export default function RetiroSagrado() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">💕 Retiro Sagrado 8 - CON YOHEV</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              La Arquitectura <span className="text-primary">del Amor</span>
            </h1>
            <p className="text-lg text-primary font-semibold mb-4">
              Facilitado directamente por Yohev
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              Del amor herido al Amor como principio divino
            </p>
            <p className="text-lg text-muted-foreground mb-8 italic">
              "El Amor verdadero no te rompe, te recuerda quién eres."
            </p>
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">📅 Domingo 8 de Febrero | 7:00 - 11:00 hrs (CDMX)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/club-retiro-sagrado">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Unirse al Club del Retiro
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Más Información
              </Button>
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
                Este NO es un retiro para "aprender a amar"
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Es un espacio para <span className="font-semibold text-foreground">recordar qué es realmente el Amor</span> y permitir que ese recuerdo reordene la forma en que amas, te vinculas y te entregas.
                </p>
                <p className="mt-6">
                  El amor humano suele doler no porque amar sea un error, sino porque amamos desde estructuras internas heridas, condicionadas y programadas.
                </p>
                <p className="font-semibold text-foreground mt-6">
                  Este retiro no trabaja relaciones específicas. Trabaja la arquitectura interna desde la cual te relacionas con todo: contigo, con los demás, y con la vida.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Love Principle */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                     <img 
                src="/images/retiro-8-consciencia-amor.png" 
                alt="Consciencia del Amor" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                El Amor como <span className="text-primary">Principio Divino</span>
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  El Amor no es solo una emoción. Es un principio universal que une, ordena, da coherencia y sostiene la creación.
                </p>
                <p className="text-lg leading-relaxed">
                  El problema no es el amor. El problema es que el ego humano interpreta el amor a través de heridas, miedos y carencias, y desde ahí lo convierte en una experiencia dolorosa.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-foreground">
                  No sufrimos por amar. Sufrimos por el filtro desde el que amamos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Share Section */}
      <section className="py-12 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-muted-foreground font-semibold">¿Te resuena este retiro?</p>
            <Button 
              size="lg" 
              onClick={() => {
                const url = window.location.href;
                const text = "Retiro Sagrado 8: La Arquitectura del Amor - Del amor herido al Amor como principio divino";
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

      {/* Visual Gallery Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            Relaciones Sanas, Amor Consciente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/images/retiro-8-amor-divino.png" 
                alt="Pareja en Amor" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video group-hover:shadow-3xl transition-shadow"
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/images/retiro-8-transformacion-amor.png" 
                alt="Familia en Amor" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video group-hover:shadow-3xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Qué Distorsiona el Amor Humano?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-border/50 bg-background">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-primary" />
                  Lo que Cargamos
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Arquetipos inconscientes del amor</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Aprendizajes tempranos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Experiencias no resueltas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Heridas emocionales</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-8 border-border/50 bg-background">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-primary" />
                  Cómo se Vive
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Miedo a perder</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Apego y dependencia</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Sacrificio excesivo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Control y abandono de uno mismo</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Work */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Qué Vamos a Trabajar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Comprender el Amor como principio divino, no como emoción cambiante",
                "Identificar los filtros internos desde los que cada uno ama",
                "Reconocer los arquetipos inconscientes del amor que operan en tu vida",
                "Conectar con el modelo original del Amor",
                "Permitir que ese modelo reordene tu mente inconsciente",
                "Liberar distorsiones sin forzar procesos ni revivir historias",
                "Abrir espacio para relaciones más claras, libres y coherentes",
                "Permitir que el Amor haga su trabajo en ti"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground font-semibold text-center">
                No se trata de "hacer algo" con el amor. Se trata de permitir que el Amor haga su trabajo en ti.
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
                "Menos dependencia emocional",
                "Mayor claridad en relaciones",
                "Menos miedo a perder",
                "Más coherencia interna",
                "Vínculos más honestos",
                "Paz al amar, sin cerrarse"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg">
                  <Star size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-background rounded-lg border border-primary/20">
              <p className="text-foreground text-center">
                No porque "hicieron algo bien", sino porque <span className="font-semibold">el orden interno cambia la experiencia externa.</span>
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
                  <span>El Amor como principio universal</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>El filtro humano del amor</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Arquetipos inconscientes del amor herido</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>El modelo divino del Amor</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Reordenamiento interno profundo</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Amar desde el orden, no desde la herida</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Meditación central: "Recordar el Amor"</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Cierre y código vibracional</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Para Quién es Este Retiro?
            </h2>
            <Card className="p-12 border-border/50 bg-background">
              <p className="text-muted-foreground mb-8">Este retiro es para ti si:</p>
              <ul className="space-y-4 text-muted-foreground mb-8">
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Sientes que amar te ha desgastado</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Repites patrones en relaciones</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Te cuesta amar sin perderte</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Quieres sanar sin forzar procesos emocionales</span>
                </li>
                <li className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Buscas un enfoque profundo, no superficial</span>
                </li>
              </ul>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-foreground font-semibold text-center">
                  No importa si estás en pareja o no. El trabajo ocurre dentro.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Cómo Accedes al Retiro?
            </h2>
            <Card className="p-12 border-border/50 bg-gradient-to-br from-background to-primary/10">
              <p className="text-muted-foreground mb-8">
                Este retiro forma parte del <span className="font-semibold text-foreground">Club del Retiro Sagrado.</span>
              </p>
              <p className="text-muted-foreground mb-8">Al ser miembro del Club obtienes:</p>
              <ul className="space-y-4 text-muted-foreground mb-8">
                <li className="flex gap-3">
                  <Users size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Acceso en vivo a este retiro</span>
                </li>
                <li className="flex gap-3">
                  <Users size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Acceso a todas las grabaciones de retiros anteriores</span>
                </li>
                <li className="flex gap-3">
                  <Users size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Acceso a los retiros futuros mientras tu membresía esté activa</span>
                </li>
                <li className="flex gap-3">
                  <Users size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Invitación a terapias energéticas en vivo que se publican después en redes</span>
                </li>
                <li className="flex gap-3">
                  <Users size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Un espacio continuo de trabajo interno, no eventos aislados</span>
                </li>
              </ul>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-foreground font-semibold text-center">
                  No se vende este retiro por separado. El acceso es únicamente a través del Club.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Testimonios del Club del Retiro Sagrado
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Experiencias de miembros que han accedido a todos los retiros pasados y en vivo
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-border/50 bg-background">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "Soy miembro desde hace 8 meses y he asistido a todos los retiros en vivo. Cada uno me ha dado herramientas diferentes. Ahora reviso las grabaciones de los retiros pasados cuando necesito profundizar en un tema específico."
                </p>
                <p className="font-semibold text-foreground">María C.</p>
                <p className="text-sm text-muted-foreground">Miembro del Club - 8 meses</p>
              </Card>
              <Card className="p-8 border-border/50 bg-background">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "Lo mejor del Club es tener acceso a todas las grabaciones. He revisado 'Volver al Silencio' más de 5 veces. Cada visión me revela algo nuevo. Es como tener un maestro disponible siempre."
                </p>
                <p className="font-semibold text-foreground">Roberto M.</p>
                <p className="text-sm text-muted-foreground">Miembro del Club - 1 año</p>
              </Card>
              <Card className="p-8 border-border/50 bg-background">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "Perdí algunos retiros en vivo por trabajo, pero poder verlos grabados me permitió no quedarme atrás. El Club es flexible y realmente se adapta a tu ritmo de vida."
                </p>
                <p className="font-semibold text-foreground">Alejandra T.</p>
                <p className="text-sm text-muted-foreground">Miembro del Club - 6 meses</p>
              </Card>
              <Card className="p-8 border-border/50 bg-background">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "Después de estar en el Club, mi familia ha notado el cambio. No es solo un retiro, es un proceso continuo. Poder acceder a todos los retiros anteriores ha sido transformador."
                </p>
                <p className="font-semibold text-foreground">Carlos L.</p>
                <p className="text-sm text-muted-foreground">Miembro del Club - 10 meses</p>
              </Card>
            </div>
            <div className="mt-12 p-8 bg-background rounded-lg border border-primary/20 text-center">
              <p className="text-foreground font-semibold mb-2">
                Acceso ilimitado a todos los retiros en vivo + grabaciones de retiros anteriores
              </p>
              <p className="text-muted-foreground text-sm">
                Practica a tu ritmo, revisa cuantas veces necesites, integra profundamente cada enseñanza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Retiros Section */}
      <section className="py-20 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                Próximos <span className="text-primary">Retiros 2026</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center">
                Continúa tu transformación con los retiros que vienen. Cada mes, un nuevo tema, una nueva oportunidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {eventos
                .filter(e => e.tipo === "Retiro Sagrado")
                .slice(1, 4)
                .map(retiro => (
                  <Card key={retiro.id} className="p-6 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                    {retiro.imagen && (
                      <div className="relative h-32 overflow-hidden rounded-lg mb-4 bg-muted">
                        <img
                          src={retiro.imagen}
                          alt={retiro.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-primary font-semibold text-sm">{retiro.tema}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {retiro.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{retiro.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Calendar size={14} className="text-primary" />
                        <span>{retiro.fecha}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Clock size={14} className="text-primary" />
                        <span>{retiro.horario}</span>
                      </div>
                    </div>
                    <Link href={`/retiro-detalle?id=${retiro.id}`}>
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white">
                        Ver Detalles
                      </Button>
                    </Link>
                  </Card>
                ))}
            </div>

            <div className="text-center">
              <Link href="/proximos-retiros">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                  Ver Todos los Retiros 2026
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retiros Pasados Section */}
      <section className="py-20 md:py-32 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                Retiros Incluidos en tu <span className="text-primary">Membresía</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center">
                Acceso a toda la biblioteca de retiros anteriores. Revive, integra y profundiza en tu práctica.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Retiro Sagrado 1 - VOLVER AL SILENCIO", image: "/images/retiro-volver-silencio.png" },
                { title: "Retiro Sagrado 2 - LIMPIA TU ENERGÍA", image: "/images/retiro-limpia-energia.png" },
                { title: "Retiro Sagrado 3 - CÓDIGOS DE LUZ", image: "/images/retiro-codigos-luz.png" },
                { title: "Retiro Sagrado 4 - RECUPERA TU CENTRO", image: "/images/retiro-recupera-centro.png" },
                { title: "Retiro Sagrado 5 - SANA Y CIERRA CICLOS", image: "/images/retiro-sana-ciclos.png" },
                { title: "Retiro Sagrado 6 - CLAVES INTERNAS PARA EL BIENESTAR VERDADERO", image: "/images/retiro-claves-bienestar.png" },
                { title: "Retiro Sagrado 7 - PRESENCIA VIVA", image: "/images/retiro-presencia-viva.png" },
                { title: "Retiro Sagrado 8 - LA ARQUITECTURA DEL AMOR", image: "/images/retiro-8-amor-divino.png" },
              ].map((retiro, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg h-40 cursor-pointer">
                  <img
                    src={retiro.image}
                    alt={retiro.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold text-sm">{retiro.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-background rounded-lg border border-primary/20 text-center">
              <p className="text-foreground font-semibold mb-2">
                Acceso ilimitado a todos los retiros grabados
              </p>
              <p className="text-muted-foreground mb-6">
                Integrados en tu membresía del Club del Retiro Sagrado. Practica a tu ritmo, revisa cuantas veces necesites.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Unirse al Club
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              El Amor Verdadero No Te Rompe
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Te recuerda quién eres.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Si sientes el llamado, este espacio es para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Unirse al Club del Retiro Sagrado
              </Button>
              <Link href="/proximos-retiros">
                <Button size="lg" variant="outline">
                  Ver Todos los Retiros 2026
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
