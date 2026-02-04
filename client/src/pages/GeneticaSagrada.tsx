import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      <section className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden" style={{
        backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/emFwEl4u9Dz06ddgXdC7ZC-img-1_1770181646000_na1fn_Z2VuZXRpY2Etc2FncmFkYS1oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm md:text-base">✨ Taller Online Transformacional</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Genética <span className="text-amber-300">Sagrada</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 drop-shadow-md font-medium">
              Afina las 12 CAPAS de tu ADN Cuántico a su Octava Divina
            </p>
            <p className="text-lg md:text-xl text-amber-100 mb-8 italic drop-shadow-md">
              "No se trata de cambiar tu ADN… sino de recordar cómo suena cuando vibra con la melodía de tu alma."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base md:text-lg px-8 py-6">
                Inscribirse Ahora
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white font-semibold text-base md:text-lg px-8 py-6 border border-white/40 backdrop-blur-sm">
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
                    <h4 className="font-semibold text-foreground mb-1">Técnicas de Afinación Energética</h4>
                    <p className="text-muted-foreground">Aprenderás ejercicios prácticos para afinar cada capa de tu ADN</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Integración y Manifestación</h4>
                    <p className="text-muted-foreground">Cómo integrar estos cambios y manifestar tu verdadero potencial</p>
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
              Las 12 Capas del <span className="text-primary">ADN Sagrado</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada capa representa una dimensión diferente de tu ser y contiene información crucial para tu evolución
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {dnaLayers.map((layer) => (
              <Card
                key={layer.number}
                className="p-6 cursor-pointer border-border/50 hover:border-primary/50 transition-all"
                onClick={() => setExpandedLayer(expandedLayer === layer.number ? null : layer.number)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary">{layer.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1">{layer.name}</h3>
                      <p className="text-muted-foreground text-sm">{layer.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-muted-foreground transition-transform ${
                      expandedLayer === layer.number ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedLayer === layer.number && (
                  <div className="mt-6 pt-6 border-t border-border/50 space-y-4">
                    <div>
                      <p className="text-muted-foreground">{layer.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Enfoque del taller:</h4>
                      <p className="text-muted-foreground">{layer.focus}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Beneficios:</h4>
                      <ul className="space-y-1">
                        {layer.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-2 text-muted-foreground">
                            <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Estructura del <span className="text-primary">Taller</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background">
              <div className="flex gap-4 mb-4">
                <BookOpen size={24} className="text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg text-foreground">Modalidad</h3>
              </div>
              <p>Online en vivo por Zoom</p>
            </Card>
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background">
              <div className="flex gap-4 mb-4">
                <Zap size={24} className="text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg text-foreground">Frecuencia</h3>
              </div>
              <p>1 clase semanal (3 domingos consecutivos)</p>
            </Card>
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background">
              <div className="flex gap-4 mb-4">
                <Clock size={24} className="text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg text-foreground">Horario</h3>
              </div>
              <p>11:00 a 14:00 hrs (CDMX)</p>
            </Card>
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background">
              <div className="flex gap-4 mb-4">
                <Star size={24} className="text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg text-foreground">Acceso</h3>
              </div>
              <p>Grabaciones disponibles por tiempo indefinido</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Lo que dicen nuestros <span className="text-primary">Participantes</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {geneticaSagradaTestimonials.slice(0, 3).map((testimonial, idx) => (
              <Card key={idx} className="p-8 border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
              ¿Listo para Activar tu Potencial?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a nuestra próxima cohorte y comienza tu transformación energética
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Inscribirse Ahora
              </Button>
              <Button size="lg" variant="outline">
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Add Clock icon since it's not in lucide-react by default
function Clock(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
