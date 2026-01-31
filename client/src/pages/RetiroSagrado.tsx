import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Heart, Zap, Users, Star, Leaf, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { retiroSagradoTestimonials } from "@/lib/programTestimonials";

export default function RetiroSagrado() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/retiro-sagrado-sanctuary.png" 
            alt="Retiro Sagrado - Presencia Viva" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-emerald-900/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-300/30 backdrop-blur-sm">
              <span className="text-emerald-200 font-semibold">🕉️ Experiencia Vivencial</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Retiro <span className="text-emerald-300">Sagrado 7</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-emerald-100 mb-4">
              Presencia Viva
            </p>
            <p className="text-xl text-white/90 mb-6">
              Claves Internas para el Bienestar Verdadero
            </p>
            <p className="text-lg text-white/80 mb-8 italic font-serif">
              "El bienestar se activa cuando todo dentro de mí se ordena."
            </p>
            <div className="inline-block mb-8 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-300/30 backdrop-blur-sm">
              <span className="text-emerald-200 font-semibold">📅 Próximo Domingo 01 de Febrero | 10:00 - 14:00 hrs (CDMX)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
                Reservar Mi Lugar
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Unirse al Club de Retiro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Purpose */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-emerald-400/30 bg-gradient-to-br from-emerald-900/40 to-slate-900/40 backdrop-blur-sm">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Inicia el Nuevo Ciclo desde la <span className="text-emerald-300">Presencia Viva</span>
              </h2>
              <div className="space-y-4 text-emerald-100 leading-relaxed">
                <p className="text-lg">
                  Después de meses intensos, decisiones importantes, desgaste emocional y procesos internos profundos, muchas personas llegan a un nuevo ciclo sin haber verdaderamente cerrado o integrado lo vivido. Sin presencia, sin claridad, sin conexión con el ahora.
                </p>
                <p className="text-lg font-semibold text-emerald-300">
                  Este retiro nace para eso: para enseñarte a habitar el presente como base de todo lo que viene. La presencia viva es el fundamento del nuevo ciclo.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              ¿Qué Viviremos <span className="text-emerald-300">Juntos</span>?
            </h2>
            <p className="text-lg text-emerald-100">
              Una experiencia energética guiada de 4 horas en vivo con YOHEV
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-emerald-400/20 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 backdrop-blur-sm mb-8">
              <p className="text-lg text-emerald-100 leading-relaxed mb-8">
                No es una clase. No es teoría. Es una experiencia vivencial profunda diseñada para ayudarte a:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Recuperar Estabilidad Emocional",
                    description: "Reconecta con tu equilibrio emocional profundo"
                  },
                  {
                    icon: Zap,
                    title: "Calmar el Sistema Nervioso",
                    description: "Restaura tu paz interior y coherencia"
                  },
                  {
                    icon: Leaf,
                    title: "Alinear Mente, Emoción, Cuerpo y Energía",
                    description: "Integra todos tus niveles de ser"
                  },
                  {
                    icon: Sparkles,
                    title: "Reconectar con tu Centro Interno",
                    description: "Accede a tu verdadera naturaleza divina"
                  },
                  {
                    icon: Check,
                    title: "Habitar el Presente como Base",
                    description: "Aprender a estar aquí, ahora, como fundamento del nuevo ciclo"
                  },
                  {
                    icon: Users,
                    title: "Comenzar el Próximo Ciclo",
                    description: "Desde un lugar más estable y consciente"
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/50">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-emerald-200">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-emerald-400/20 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold text-white mb-6">Estructura del Retiro</h3>
                <div className="space-y-4 text-emerald-100">
                  <div>
                    <p className="font-semibold text-emerald-300">Duración:</p>
                    <p>4 horas sagradas de conexión profunda</p>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-300">Formato:</p>
                    <p>Sesión en vivo por Zoom con YOHEV</p>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-300">Modalidad:</p>
                    <p>Experiencia vivencial guiada</p>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-300">Incluye:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Meditaciones profundas</li>
                      <li>Activaciones energéticas</li>
                      <li>Prácticas de integración</li>
                      <li>Grabación del retiro</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-emerald-400/20 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold text-white mb-6">Inversión</h3>
                <div className="space-y-4 text-emerald-100">
                  <div>
                    <p className="font-semibold text-emerald-300">Retiro Individual:</p>
                    <p className="text-3xl font-bold text-white my-2">$1,200 MXN</p>
                    <p className="text-sm">Acceso completo al retiro + grabación</p>
                  </div>
                  <div className="border-t border-emerald-400/20 pt-4">
                    <p className="font-semibold text-emerald-300">Club de Retiro (Membresía):</p>
                    <p className="text-3xl font-bold text-white my-2">$800 MXN/mes</p>
                    <p className="text-sm">Acceso a todos los retiros mensuales + comunidad exclusiva + contenido adicional</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Beneficios del <span className="text-emerald-300">Retiro Sagrado</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Profunda estabilidad emocional y paz interior",
              "Sistema nervioso calmado y regulado",
              "Alineación de mente, emoción, cuerpo y energía",
              "Reconexión con tu centro interno y presencia viva",
              "Claridad para iniciar el nuevo ciclo conscientemente",
              "Herramientas prácticas para mantener el equilibrio",
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border-emerald-400/20 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 backdrop-blur-sm hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-emerald-300" />
                  </div>
                  <p className="text-emerald-100">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Experiencias en <span className="text-emerald-300">Retiro Sagrado</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {retiroSagradoTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-emerald-400/20 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 backdrop-blur-sm hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-emerald-100 mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-emerald-400/20 pt-4">
                  <p className="font-display font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-emerald-200">{testimonial.title}</p>
                  <p className="text-xs text-emerald-300 mt-1">{testimonial.certification}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 border-t border-emerald-400/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Inicia el Nuevo Ciclo desde la Presencia
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Únete al próximo Retiro Sagrado y experimenta la transformación profunda que viene de habitar el presente conscientemente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
              Reservar Mi Lugar
              <ArrowRight size={20} />
            </Button>
            <Link href="/sobre-yohev">
              <a>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Conocer a YOHEV
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
