import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Zap, Brain, Heart, Shield, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { dartTestimonials } from "@/lib/programTestimonials";

export default function DART() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/dart-archetypal-renewal.png" 
            alt="D.A.R.T. - Renovación Arquetípica Profunda" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-300/30 backdrop-blur-sm">
              <span className="text-blue-200 font-semibold">🔄 Terapia Avanzada</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-blue-300">D.A.R.T.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-blue-100 mb-4">
              Deep Archetypal Renewal Therapy
            </p>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Trabaja en la raíz de tus patrones internos para reemplazar arquetipos negativos por arquetipos positivos y balanceados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
                Conocer Más
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-20">
            <Card className="p-12 border-blue-400/30 bg-gradient-to-br from-indigo-900/40 to-slate-900/40 backdrop-blur-sm">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                ¿Qué es <span className="text-blue-300">D.A.R.T.</span>?
              </h2>
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p className="text-lg">
                  D.A.R.T. (Deep Archetypal Renewal Therapy) es una terapia revolucionaria diseñada para trabajar donde se originan muchos de los patrones que determinan la vida de una persona: los arquetipos internos programados en el inconsciente.
                </p>
                <p className="text-lg">
                  Los arquetipos no son "heridas" aisladas, sino configuraciones internas que moldean tu percepción y respuesta ante la vida. D.A.R.T. busca reemplazar arquetipos negativos por arquetipos positivos y balanceados.
                </p>
                <p className="text-lg font-semibold text-blue-300">
                  La transformación no es solo emocional o mental, sino estructural y energética.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What D.A.R.T. Addresses */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Patrones que <span className="text-blue-300">D.A.R.T. Transforma</span>
            </h2>
            <p className="text-lg text-blue-100">
              D.A.R.T. trabaja sobre los arquetipos que generan estos patrones limitantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Patrones repetitivos en relaciones",
              "Límites internos hacia la abundancia y el éxito",
              "Autosabotaje y creencias de insuficiencia",
              "Culpa, miedo y vergüenza",
              "Respuestas emocionales desproporcionadas",
              "Bloqueos en la creatividad y expresión",
            ].map((pattern, idx) => (
              <Card key={idx} className="p-6 border-blue-400/20 bg-gradient-to-br from-indigo-900/30 to-slate-900/30 backdrop-blur-sm hover:border-blue-400/40 transition-all">
                <div className="flex gap-4">
                  <Check size={24} className="text-blue-300 flex-shrink-0 mt-1" />
                  <p className="text-blue-100">{pattern}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equiliminalidad */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-blue-400/30 bg-gradient-to-br from-indigo-900/40 to-slate-900/40 backdrop-blur-sm">
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                <span className="text-blue-300">Equiliminalidad</span>: El Fundamento de D.A.R.T.
              </h2>
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p className="text-lg">
                  Dentro de D.A.R.T., Yohev integró la técnica Equiliminal, creada para sostener un estado de equilibrio entre el Cuerpo del Dolor y el Cuerpo del Placer.
                </p>
                <p className="text-lg">
                  Esta técnica evita desbordes emocionales durante los procesos de renovación profunda, permitiendo que avances con claridad, seguridad interna y una sensación real de "piso" al reescribir tu programación.
                </p>
                <p className="text-lg font-semibold text-blue-300">
                  Equiliminalidad = Estabilidad emocional para cambios profundos
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How D.A.R.T. Works */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Cómo Funciona <span className="text-blue-300">D.A.R.T.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Identificación de Arquetipos",
                description: "Identificamos los arquetipos internos que están generando tus patrones limitantes",
                icon: Brain,
              },
              {
                step: 2,
                title: "Visualización Profunda",
                description: "Accedemos a estos arquetipos a través de visualización y trabajo energético profundo",
                icon: Zap,
              },
              {
                step: 3,
                title: "Intervención Consciente",
                description: "Realizamos intervención consciente para reemplazar arquetipos negativos por positivos",
                icon: Heart,
              },
              {
                step: 4,
                title: "Integración y Estabilización",
                description: "Integramos los cambios con Equiliminalidad para asegurar estabilidad emocional",
                icon: Shield,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/50">
                      <Icon size={24} />
                    </div>
                    {item.step < 4 && <div className="w-1 h-16 bg-gradient-to-b from-blue-400/50 to-transparent mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Beneficios de <span className="text-blue-300">D.A.R.T.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Transformación estructural de patrones profundos",
              "Liberación de culpa, miedo y vergüenza ancestral",
              "Mejora significativa en relaciones personales",
              "Acceso a la abundancia y el éxito",
              "Mayor claridad en tu propósito de vida",
              "Estabilidad emocional y paz interna",
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border-blue-400/20 bg-gradient-to-br from-indigo-900/30 to-slate-900/30 backdrop-blur-sm hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-blue-300" />
                  </div>
                  <p className="text-blue-100">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Transformaciones con <span className="text-blue-300">D.A.R.T.</span>
            </h2>
            <p className="text-lg text-blue-100">
              Descubre cómo D.A.R.T. ha transformado arquetipos y vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dartTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-blue-400/20 bg-gradient-to-br from-indigo-900/30 to-slate-900/30 backdrop-blur-sm hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-blue-100 mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-blue-400/20 pt-4">
                  <p className="font-display font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-200">{testimonial.title}</p>
                  <p className="text-xs text-blue-300 mt-1">{testimonial.certification}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 border-t border-blue-400/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Transforma tus Arquetipos con D.A.R.T.
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Accede a una transformación estructural y energética de tus patrones más profundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
              Agendar Sesión de D.A.R.T.
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
