import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Dna, Zap, Heart, Users, Star, BookOpen, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { geneticaSagradaTestimonials } from "@/lib/programTestimonials";
import { useState } from "react";

const dnaLayers = [
  {
    number: 1,
    name: "ADN Nuclear",
    description: "Tu material genético físico. La base biológica que contiene toda la información de tu linaje ancestral. Es el código que heredaste de tus padres y que se expresa en tu cuerpo físico.",
    focus: "Sanación del cuerpo físico y la salud genética",
    benefits: ["Limpieza de patrones genéticos heredados", "Activación del potencial físico", "Armonización celular"]
  },
  {
    number: 2,
    name: "Linaje Materno",
    description: "La herencia energética de tu madre y todas las mujeres de tu línea materna. Contiene la sabiduría femenina, la capacidad de recibir, la intuición y el poder creativo de tu linaje femenino.",
    focus: "Sanación de la relación con lo femenino y la madre",
    benefits: ["Reconexión con la sabiduría materna", "Liberación de creencias limitantes maternas", "Activación de la intuición femenina"]
  },
  {
    number: 3,
    name: "Linaje Paterno",
    description: "La herencia energética de tu padre y todos los hombres de tu línea paterna. Contiene la fuerza masculina, la capacidad de actuar, la voluntad y el poder de tu linaje masculino.",
    focus: "Sanación de la relación con lo masculino y el padre",
    benefits: ["Reconexión con la fuerza paterna", "Liberación de patrones paternos limitantes", "Activación del poder masculino"]
  },
  {
    number: 4,
    name: "Cuerpo Vital",
    description: "Tu cuerpo energético que rodea el físico. Es el puente entre tu alma y tu cuerpo material. Contiene tu vitalidad, tu energía de vida y tu capacidad de manifestación.",
    focus: "Aumento de vitalidad y energía de vida",
    benefits: ["Incremento de energía vital", "Mejora del aura energética", "Conexión cuerpo-espíritu"]
  },
  {
    number: 5,
    name: "Cuerpo Astral",
    description: "Tu cuerpo emocional y de deseos. Es donde residen tus emociones, tus sueños y tu capacidad de conexión con otros seres. Contiene tu resonancia emocional y tu poder de atracción.",
    focus: "Sanación emocional y equilibrio del deseo",
    benefits: ["Liberación de bloqueos emocionales", "Armonización de relaciones", "Equilibrio del deseo y la pasión"]
  },
  {
    number: 6,
    name: "Ego",
    description: "Tu identidad individual y tu sentido del yo. No es negativo, es tu vehículo de identidad que te permite experimentar la vida como un ser único. Contiene tu poder personal y tu voluntad.",
    focus: "Fortalecimiento del yo auténtico",
    benefits: ["Claridad de identidad personal", "Recuperación del poder personal", "Autenticidad genuina"]
  },
  {
    number: 7,
    name: "ECO",
    description: "Tu campo holográfico de proyección. Es el campo energético que proyecta tu realidad. Contiene tu capacidad de crear y manifestar a través de la coherencia energética.",
    focus: "Alineación del campo holográfico",
    benefits: ["Manifestación consciente", "Coherencia energética", "Creación de realidad alineada"]
  },
  {
    number: 8,
    name: "Cuerpo Mental Multidimensional",
    description: "Tu mente cuántica que existe en múltiples dimensiones simultáneamente. Contiene tu capacidad de pensamiento elevado, tu conexión con realidades paralelas y tu potencial mental ilimitado.",
    focus: "Expansión de la conciencia mental",
    benefits: ["Acceso a inteligencia multidimensional", "Pensamiento cuántico", "Conexión con realidades paralelas"]
  },
  {
    number: 9,
    name: "Cuerpo Mental de Simultaneidad Encarnativa",
    description: "Tu conexión con todas tus encarnaciones simultáneamente. Contiene la sabiduría de todas tus vidas pasadas, presentes y futuras que existen al mismo tiempo en el continuo cuántico.",
    focus: "Integración de todas las encarnaciones",
    benefits: ["Acceso a sabiduría de vidas pasadas", "Integración kármica", "Comprensión de propósito encarnativo"]
  },
  {
    number: 10,
    name: "Árbol de La Vida",
    description: "El código sagrado de tu alma. Es la estructura divina que contiene los 10 sefirots y representa el camino de tu evolución espiritual. Tu conexión con la geometría sagrada del universo.",
    focus: "Activación del código sagrado del alma",
    benefits: ["Conexión con geometría sagrada", "Activación de los sefirots", "Alineación con propósito divino"]
  },
  {
    number: 11,
    name: "Adam Kadmón",
    description: "Tu Arquetipo Divino Original. Es la plantilla perfecta de tu ser antes de cualquier distorsión. Contiene tu verdadera naturaleza divina y tu diseño original como expresión del Creador.",
    focus: "Reconexión con el Arquetipo Divino",
    benefits: ["Recordar tu verdadera naturaleza", "Alineación con diseño original", "Expresión auténtica divina"]
  },
  {
    number: 12,
    name: "Universo Multidimensional",
    description: "Tu conexión con el Campo Unificado. Es la capa más elevada donde tu ser individual se funde con el Universo infinito. Contiene tu unidad con toda la creación y tu verdadera naturaleza cósmica.",
    focus: "Unificación con el Campo Divino",
    benefits: ["Experiencia de unidad cósmica", "Conexión con Fuente", "Realización de tu naturaleza infinita"]
  }
];

export default function GeneticaSagrada() {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">🧬 Taller Online</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Genética <span className="text-primary">Sagrada</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Afina las 12 CAPAS de tu ADN Cuántico a su Octava Divina
            </p>
            <p className="text-lg text-muted-foreground mb-8 italic">
              "No se trata de cambiar tu ADN… sino de recordar cómo suena cuando vibra con la melodía de tu alma."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Inscribirse Ahora
              </Button>
              <Button size="lg" variant="outline">
                Ver Próximas Fechas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Genética Sagrada */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              ¿Qué es <span className="text-primary">Genética Sagrada</span>?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Un viaje profundo de 21 días para reconectar con el código original de tu ser. Aprenderás a identificar y afinar las 12 capas de tu ADN espiritual para alinearlas con su frecuencia perfecta: la Octava Divina de tu ADN.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Estructura Energética del ADN Espiritual</h4>
                    <p className="text-muted-foreground">Conocerás cómo está estructurado tu ADN a nivel energético y espiritual</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Identificación de Desentonaciones</h4>
                    <p className="text-muted-foreground">Descubrirás qué ha desentonado cada capa: traumas, linajes ancestrales, karmas, represión</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Afinación Multidimensional</h4>
                    <p className="text-muted-foreground">Afinarás capa por capa desde tu Yo físico, emocional, mental, universal y divino</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Conexión con el Arquetipo Divino</h4>
                    <p className="text-muted-foreground">YOHEV conectará el Arquetipo Divino Original a cada una de tus capas y a tu vida cotidiana</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The 12 DNA Layers */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Las 12 Capas del <span className="text-primary">ADN Cuántico</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada capa representa una dimensión de tu ser que será afinada a su Octava Divina
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src="/images/adn-cuantico-12-capas-circular-final.png" 
              alt="Las 12 Capas del ADN Cuantico" 
              className="w-full h-auto rounded-lg shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Expandable DNA Layers Details */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Descripción Detallada de las <span className="text-primary">12 Capas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Haz clic en cada capa para explorar su significado y beneficios
              </p>
            </div>

            <div className="space-y-4">
              {dnaLayers.map((layer) => (
                <Card 
                  key={layer.number}
                  className="border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedLayer(expandedLayer === layer.number ? null : layer.number)}
                    className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-background to-primary/5 hover:from-primary/5 hover:to-primary/10 transition-colors"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-lg">{layer.number}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {layer.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {layer.focus}
                        </p>
                      </div>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                        expandedLayer === layer.number ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedLayer === layer.number && (
                    <div className="px-6 pb-6 border-t border-border/50 bg-background/50">
                      <div className="space-y-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Descripción</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {layer.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Beneficios de la Afinación</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {layer.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Estructura del Taller</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Duración:</p>
                    <p>3 semanas</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Modalidad:</p>
                    <p>Online en vivo por Zoom</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Frecuencia:</p>
                    <p>1 clase semanal (3 sábados consecutivos)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horario:</p>
                    <p>11:00 a 14:00 hrs (CDMX)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Acceso:</p>
                    <p>Grabaciones disponibles por tiempo indefinido</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Qué Incluye</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>3 clases semanales en vivo con YOHEV (grabadas)</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Manual completo del taller con estructura de las 12 capas</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Ejercicios de activación de cada capa del ADN energético</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Audios y códigos de afinación de las 12 capas</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Guía para mantener tu ADN activado/afinado</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Acceso a grupo privado para seguimiento e integración</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Este Taller es para Ti si...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Sientes que tu alma guarda un diseño original más elevado que aún no has manifestado",
                "Has hecho trabajo personal pero algo aún no termina de desbloquearse",
                "Quieres comprender y afinar tus bloqueos físicos, emocionales, mentales o espirituales",
                "Estás listo para recibir una activación profunda de las 12 capas de tu ADN desde la Energía KS",
              ].map((reason, idx) => (
                <Card key={idx} className="p-6 border-border/50 bg-background">
                  <div className="flex gap-4">
                    <Heart size={24} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{reason}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              <span className="font-semibold text-foreground">Abierto a todo el público a partir de 9 años</span> (menores acompañados por adulto)
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Conexiones <span className="text-primary">Ancestrales</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo Genética Sagrada ha reconectado a personas con su linaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {geneticaSagradaTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  {testimonial.certification && (
                    <p className="text-sm text-primary mt-1">✓ {testimonial.certification}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Activa y Resuena en la <span className="text-primary">Octava Divina</span> de tu ADN
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tu alma ya sabe… ahora tu ADN lo recordará.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Inscribirse Ahora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
