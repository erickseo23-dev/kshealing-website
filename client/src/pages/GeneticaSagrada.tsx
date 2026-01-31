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

      {/* Hero Section with Image */}
      <section className="relative py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/genetica-sagrada-dna.png" 
            alt="Genética Sagrada - ADN Cuántico" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-300/30 backdrop-blur-sm">
              <span className="text-purple-200 font-semibold">🧬 Taller Online</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Genética <span className="text-purple-300">Sagrada</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-purple-100 mb-6">
              Afina las 12 CAPAS de tu ADN Cuántico a su Octava Divina
            </p>
            <p className="text-xl text-white/90 mb-8 italic font-serif">
              "No se trata de cambiar tu ADN… sino de recordar cómo suena cuando vibra con la melodía de tu alma."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white gap-2">
                Inscribirse Ahora
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Ver Próximas Fechas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-20">
            <Card className="p-12 border-purple-400/30 bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                ¿Qué es <span className="text-purple-300">Genética Sagrada</span>?
              </h2>
              <div className="space-y-4 text-purple-100 leading-relaxed">
                <p className="text-lg">
                  Un viaje profundo de 21 días para reconectar con el código original de tu ser. Aprenderás a identificar y afinar las 12 capas de tu ADN espiritual para alinearlas con su frecuencia perfecta: la Octava Divina de tu ADN.
                </p>
                <p className="text-lg font-semibold text-purple-300">
                  Este es un modelo pedagógico y espiritual que utiliza el lenguaje del ADN como metáfora estructural para comprender niveles de consciencia.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-950 via-slate-900 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Lo que <span className="text-purple-300">Aprenderás</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: "Estructura Energética del ADN Espiritual",
                description: "Conocerás cómo está estructurado tu ADN a nivel energético y espiritual",
                icon: Dna
              },
              {
                title: "Identificación de las 12 Capas",
                description: "Aprenderás a reconocer cada una de las 12 capas de tu ADN cuántico",
                icon: BookOpen
              },
              {
                title: "Afinación a la Octava Divina",
                description: "Técnicas para afinar cada capa a su frecuencia perfecta",
                icon: Zap
              },
              {
                title: "Integración y Activación",
                description: "Proceso de integración para activar tu código sagrado completo",
                icon: Heart
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 border-purple-400/20 bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-sm hover:border-purple-400/40 transition-all">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-purple-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 12 DNA Layers */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Las 12 Capas del <span className="text-purple-300">ADN Espiritual</span>
            </h2>
            <p className="text-lg text-purple-100">
              Un modelo conceptual para comprender las dimensiones de tu ser
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {dnaLayers.map((layer) => (
              <Card key={layer.number} className="border-purple-400/20 bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-sm hover:border-purple-400/40 transition-all">
                <button
                  onClick={() => setExpandedLayer(expandedLayer === layer.number ? null : layer.number)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                      <span className="text-white font-bold">{layer.number}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {layer.name}
                      </h3>
                      <p className="text-sm text-purple-200">{layer.focus}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    size={24} 
                    className={`text-purple-300 transition-transform ${expandedLayer === layer.number ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {expandedLayer === layer.number && (
                  <div className="px-6 pb-6 space-y-4">
                    <p className="text-purple-100 leading-relaxed">
                      {layer.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-300">Beneficios:</h4>
                      {layer.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex gap-2">
                          <Check size={16} className="text-purple-400 flex-shrink-0 mt-1" />
                          <p className="text-purple-100 text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-950 via-slate-900 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Beneficios del <span className="text-purple-300">Taller</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Reconexión con tu código sagrado original",
              "Liberación de patrones genéticos limitantes",
              "Activación de tu potencial multidimensional",
              "Sanación de linajes materno y paterno",
              "Alineación con tu propósito divino",
              "Integración de todas tus dimensiones",
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border-purple-400/20 bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-sm hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-purple-300" />
                  </div>
                  <p className="text-purple-100">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Experiencias con <span className="text-purple-300">Genética Sagrada</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {geneticaSagradaTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-purple-400/20 bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-sm hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-purple-400/20 pt-4">
                  <p className="font-display font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-purple-200">{testimonial.title}</p>
                  <p className="text-xs text-purple-300 mt-1">{testimonial.certification}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-900 via-violet-900 to-purple-900 border-t border-purple-400/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Reconecta con tu Código Sagrado
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Inicia tu viaje de 21 días para afinar las 12 capas de tu ADN espiritual
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white gap-2">
              Inscribirse al Taller
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
