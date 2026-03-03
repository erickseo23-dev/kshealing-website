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
      <section className="py-20 md:py-32 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/XJdkoaargGhEHhuy.png)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white font-semibold">🌿 Retiro Sagrado 9 - CON YOHEV</span>
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
                <span className="text-white font-semibold">📅 Domingo 5 de Abril | 8:00 - 12:00 hrs (CDMX)</span>
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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/RlpopimQxAHRPGeg.png" 
                alt="Reinicio Energético" 
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
                const text = "Retiro Sagrado 9: Reinicio Energético Profundo - Libera el arrastre y recupera tu fuerza interior";
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
            ¿Por Qué Marzo es el Momento Ideal?
          </h2>
          <div className="mb-12">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/IMxOiCSVBeCEUYZA.png" alt="Equinoccio de Primavera" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <Card className="relative p-8 border-border/50 bg-background group-hover:shadow-3xl transition-shadow">
                <Leaf size={32} className="text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-4">Equilibrio Natural</h3>
                <p className="text-muted-foreground">
                  El equinoccio marca un punto de equilibrio natural. La naturaleza se reajusta. La luz y la sombra se equilibran. Tu sistema también puede hacerlo.
                </p>
              </Card>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <Card className="relative p-8 border-border/50 bg-background group-hover:shadow-3xl transition-shadow">
                <Sparkles size={32} className="text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-4">Momento Perfecto</h3>
                <p className="text-muted-foreground">
                  Sacude el desgaste del inicio de año, libera estrés acumulado, reorganiza tu energía antes de que el ritmo aumente, y entra a la primavera con claridad y fuerza interna.
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
              ¿Qué Vamos a Trabajar?
            </h2>
            <div className="mb-12">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/fTmsXInBtDfdPnOu.png" alt="Meditación y Transformación Energética" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Identificar dónde se acumula el arrastre energético",
                "Diferenciar cansancio físico de carga emocional",
                "Liberar residuos mentales repetitivos",
                "Recuperar energía que se quedó dispersa",
                "Reordenar tu campo sin forzar procesos",
                "Sellar tu sistema con estabilidad y coherencia",
                "Permitir que tu sistema vuelva a su estado natural",
                "Entrar a la primavera con fuerza renovada"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground font-semibold text-center">
                No se trata de hacer algo extraordinario. Se trata de permitir que tu sistema vuelva a su estado natural de equilibrio.
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
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/oYrDAQuLyeypkEJD.png" alt="Claridad y Renovación" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Te sientes cansado sin razón clara",
                "Estás haciendo lo correcto, pero no te sientes ligero",
                "Te cuesta concentrarte",
                "Sientes saturación emocional",
                "Te cuesta descansar profundamente",
                "Iniciaste el año con impulso, pero ya estás perdiendo fuerza"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <Star size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground text-center">
                <span className="font-semibold">No necesitas estar en crisis.</span> A veces solo necesitas reiniciar.
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
                "Mayor claridad mental",
                "Sensación de ligereza",
                "Energía más estable",
                "Mejor descanso",
                "Enfoque renovado",
                "Mayor presencia corporal"
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
                sino porque <span className="font-semibold">dejaron de sostener lo que ya no correspondía.</span>
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
                  <span>Identificación de cargas invisibles</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Liberación consciente sin dramatización</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Recuperación de energía personal</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Reordenamiento del campo interno</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Anclaje de fuerza y claridad</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Meditación central de reinicio</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Sellado energético de primavera</span>
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
              No necesitas más disciplina.<br />
              No necesitas más fuerza.
            </p>
            <p className="text-2xl font-semibold text-foreground mb-8">
              Necesitas menos carga.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Si sientes que es momento de reiniciar, este espacio es para ti.
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              ¿Listo para Reiniciar?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Acceso a este retiro + todos los retiros del Club + grabaciones anteriores
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
              <p className="text-white/80 mb-4">Membresía al Club del Retiro Sagrado</p>
              <p className="text-5xl font-bold text-white mb-2">$29 USD <span className="text-2xl">(~500 MXN)</span></p>
              <p className="text-white/70 text-sm mb-6">por mes en dólares • Cancela cuando quieras</p>
              <a href="https://www.i3cdigital.com/offers/GdzCo9uE/checkout" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                  Inscribirse Ahora
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
            </div>
            <p className="text-white/70 text-sm">
              O si quieres saber más sobre el Club y todos sus beneficios:
            </p>
            <Link href="/club-retiro-sagrado" className="text-white hover:text-white/80 underline mt-2 inline-block">
              Conocer el Club del Retiro Sagrado
            </Link>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {retiroSagradoTestimonials.slice(0, 4).map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border/50 bg-background">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Retreats */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            Próximos Retiros 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {eventos.slice(2, 5).map((retiro, idx) => (
              <Card key={idx} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Sparkles size={48} className="text-primary/50" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">{retiro.tema}</p>
                  <h3 className="font-semibold text-foreground mb-3">{retiro.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{retiro.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <Calendar size={14} className="inline mr-1" />
                    {retiro.fecha}
                  </p>
                  <Link href="/club-retiro-sagrado">
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
