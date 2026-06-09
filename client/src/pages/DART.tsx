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

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold">🔄 Terapia Avanzada</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-accent">D.A.R.T.</span>
            </h1>
            <p className="text-2xl font-semibold text-muted-foreground mb-4">
              Deep Archetypal Renewal Therapy
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              Trabaja en la raíz de tus patrones internos para reemplazar arquetipos negativos por arquetipos positivos y balanceados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is D.A.R.T. */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/SQuFMJBVFdaVgkdj.png" 
                alt="D.A.R.T. Transformacion Arquetipica" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                ¿Qué es <span className="text-accent">D.A.R.T.</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  D.A.R.T. (Deep Archetypal Renewal Therapy) es una terapia revolucionaria diseñada para trabajar donde se originan muchos de los patrones que determinan la vida de una persona: los arquetipos internos programados en el inconsciente.
                </p>
                <p className="text-lg leading-relaxed">
                  Los arquetipos no son "heridas" aisladas, sino configuraciones internas que moldean tu percepción y respuesta ante la vida. D.A.R.T. busca reemplazar arquetipos negativos por arquetipos positivos y balanceados.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-accent">
                  La transformación no es solo emocional o mental, sino estructural y energética.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What D.A.R.T. Addresses */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Patrones que <span className="text-accent">D.A.R.T. Transforma</span>
            </h2>
            <p className="text-lg text-muted-foreground">
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
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-accent/10 to-background">
                <div className="flex gap-4">
                  <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{pattern}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equiliminalidad */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-border/50 bg-gradient-to-br from-accent/10 to-primary/5">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                <span className="text-accent">Equiliminalidad</span>: El Fundamento de D.A.R.T.
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  Dentro de D.A.R.T., YOHEV integró la técnica Equiliminal, creada para sostener un estado de equilibrio entre el Cuerpo del Dolor y el Cuerpo del Placer.
                </p>
                <p className="text-lg leading-relaxed">
                  Esta técnica evita desbordes emocionales durante los procesos de renovación profunda, permitiendo que avances con claridad, seguridad interna y una sensación real de "piso" al reescribir tu programación.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-accent">
                  Equiliminalidad = Estabilidad emocional para cambios profundos
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Neural Restructuring Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Reestructuración <span className="text-accent">Neural y Energética</span>
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  D.A.R.T. no solo trabaja a nivel consciente. A través de visualización profunda y trabajo energético, accedemos a los patrones arquetípicos almacenados en tu inconsciente y los reestructuramos desde la raíz.
                </p>
                <p className="text-lg leading-relaxed">
                  Este proceso crea nuevas rutas neurales y reorganiza tu campo energético, permitiendo que experimentes cambios duraderos y transformacionales.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/jlICIOTIEtXlgNKy.png" 
                alt="Reestructuración Neural" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How D.A.R.T. Works */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Cómo Funciona <span className="text-accent">D.A.R.T.</span>
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
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                      <Icon size={24} />
                    </div>
                    {item.step < 4 && <div className="w-1 h-16 bg-accent/30 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consciousness Expansion */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/UkTBjpbZPmdUyxBP.png" 
                alt="Expansión de Consciencia" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Expansión de <span className="text-accent">Consciencia</span>
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  Cuando reemplazas arquetipos limitantes por arquetipos balanceados, tu percepción se expande. Ves la vida desde una perspectiva más elevada, donde los patrones que antes te controlaban ahora están bajo tu consciencia.
                </p>
                <p className="text-lg leading-relaxed">
                  Esta expansión no es temporal. Es una reestructuración profunda que te permite acceder a nuevas capacidades, relaciones más sanas y una vida alineada con tu verdadera naturaleza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Beneficios de <span className="text-accent">D.A.R.T.</span>
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
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-accent/10 to-background hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-accent" />
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Transformaciones con <span className="text-accent">D.A.R.T.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo D.A.R.T. ha transformado arquetipos y vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dartTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-border/50 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-accent mt-1">{testimonial.certification}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 to-primary/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Transforma tus Arquetipos con D.A.R.T.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accede a una transformación estructural y energética de tus patrones más profundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white gap-2">
              Agendar Sesión de D.A.R.T.
              <ArrowRight size={20} />
            </Button>
            <Link href="/sobre-yohev">
              <a>
                <Button size="lg" variant="outline">
                  Conocer a YOHEV
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>


      {/* Becas Ascendant Block */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(135deg, #0f1520 0%, #1a2035 100%)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-amber-400/70 text-xs tracking-[0.2em] uppercase mb-2">Programa Becas Ascendant®</p>
            <h2 className="text-white text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Accede a DART con apoyo educativo
            </h2>
            <p className="text-white/60 text-base max-w-xl leading-relaxed mb-4">
              El programa DART es elegible para el Programa Becas Ascendant®. Puedes recibir un{" "}
              <span className="text-amber-400 font-semibold">apoyo educativo significativo</span>{" "}
              sobre tu inversión. La disponibilidad es limitada.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://institutoascendant.com/becas"
              className="inline-block text-slate-950 font-semibold tracking-wider uppercase text-sm px-10 py-4 transition-all duration-300 whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #fbbc0e 0%, #f5a623 100%)" }}
            >
              Solicitar Beca
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
