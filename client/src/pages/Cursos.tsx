import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, BookOpen, Clock, DollarSign, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const cursos = [
  {
    id: 1,
    title: "KS Healing",
    subtitle: "Sanacion Energetica Consciente",
    description: "La base fundamental de la sanacion energetica. Aprende a trabajar directamente con la Energia Keiouvos Stharef para acompanar procesos internos, emocionales y de consciencia.",
    duration: "8 semanas",
    investment: "$297 USD",
    level: "Principiante",
    icon: "⚡",
    image: "/images/ks-healing-therapy.png",
    benefits: [
      "Acompanamiento energetico consciente",
      "Tecnicas de presencia e intencion",
      "Integracion de mente, emocion y espiritu",
      "Certificacion como practicante"
    ],
    color: "from-blue-600 to-blue-800",
    kajabi: "https://kajabi.com/ks-healing",
  },
  {
    id: 2,
    title: "D.A.R.T.",
    subtitle: "Deep Archetypal Renewal Therapy",
    description: "Transforma los arquetipos internos que condicionan tu vida. Un proceso profundo de autoconocimiento que te permite renovar patrones limitantes y activar tu verdadero potencial.",
    duration: "10 semanas",
    investment: "$397 USD",
    level: "Intermedio",
    icon: "🔄",
    image: "/images/dart-therapy.png",
    benefits: [
      "Identificacion de arquetipos limitantes",
      "Renovacion de patrones internos",
      "Transformacion profunda de creencias",
      "Integracion de sombra y luz"
    ],
    color: "from-purple-600 to-purple-800",
    kajabi: "https://kajabi.com/dart",
  },
  {
    id: 3,
    title: "Genetica Sagrada",
    subtitle: "Las 12 Capas del ADN Espiritual",
    description: "Accede a la sabiduria ancestral de tu linaje. Explora las 12 capas de tu ADN espiritual y activa el potencial multidimensional que siempre estuvo en ti.",
    duration: "12 semanas",
    investment: "$497 USD",
    level: "Avanzado",
    icon: "🧬",
    image: "/images/genetica-sagrada-workshop.png",
    benefits: [
      "Exploracion de las 12 capas del ADN",
      "Sanacion de linaje ancestral",
      "Activacion multidimensional",
      "Integracion de consciencia cosmica"
    ],
    color: "from-amber-600 to-amber-800",
    kajabi: "https://kajabi.com/genetica-sagrada",
  },
  {
    id: 4,
    title: "Meditacion Ascendente",
    subtitle: "Expansion Progresiva de Consciencia",
    description: "Un metodo progresivo que te guia desde la percepcion ordinaria hacia estados profundos de presencia, claridad interna y consciencia lucida aplicable a tu vida cotidiana.",
    duration: "6 semanas",
    investment: "$197 USD",
    level: "Principiante",
    icon: "🧘",
    image: "/images/meditacion-ascendente.png",
    benefits: [
      "Expansion de consciencia",
      "Regulacion emocional",
      "Presencia y claridad mental",
      "Practica sostenida y transformadora"
    ],
    color: "from-teal-600 to-teal-800",
    kajabi: "https://kajabi.com/meditacion-ascendente",
  },
  {
    id: 5,
    title: "Retiro Sagrado",
    subtitle: "Transformacion Mensual en Vivo",
    description: "Un programa de transformacion continua con retiros mensuales en vivo via Zoom. Acceso ilimitado a todos los retiros 2026 + grabaciones de retiros anteriores. Practica a tu ritmo y profundiza en cada ensenanza.",
    duration: "12 meses",
    investment: "Membresia Anual",
    level: "Todos los niveles",
    icon: "💕",
    image: "/images/retiro-sagrado-online.png",
    benefits: [
      "Retiros mensuales en vivo via Zoom",
      "Acceso a todas las grabaciones",
      "Comunidad de transformacion",
      "Practica continua y sostenida"
    ],
    color: "from-rose-600 to-rose-800",
    kajabi: "https://kajabi.com/retiro-sagrado",
  },
];

export default function Cursos() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-accent">Cursos y Programas</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Elige tu camino de transformacion. Cada programa esta disenado para un paso diferente en tu viaje de consciencia y evolucion espiritual.
            </p>
          </div>
        </div>
      </section>

      {/* Cursos Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cursos.map((curso) => (
              <Card
                key={curso.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card flex flex-col"
              >
                {/* Image */}
                {curso.image && (
                  <div className="w-full h-48 overflow-hidden bg-muted">
                    <img 
                      src={curso.image} 
                      alt={curso.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${curso.color} p-8 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-4xl mb-3">{curso.icon}</div>
                      <h2 className="font-display text-3xl font-bold mb-2">{curso.title}</h2>
                      <p className="text-white/90 text-lg">{curso.subtitle}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      {curso.level}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {curso.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duracion</p>
                        <p className="font-semibold text-foreground">{curso.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign size={18} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Inversion</p>
                        <p className="font-semibold text-foreground">{curso.investment}</p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle size={18} className="text-primary" />
                      Que aprenderas
                    </h3>
                    <ul className="space-y-2">
                      {curso.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a href={curso.kajabi} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 flex items-center justify-center gap-2">
                      Inscribirse en Kajabi
                      <ArrowRight size={18} />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              No sabes por donde empezar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Si tienes dudas sobre cual programa es el mas adecuado para ti, te recomendamos comenzar con Meditacion Ascendente o KS Healing como base solida.
            </p>
            <Link href="/que-es-ks-healing">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  Conoce mas sobre KS Healing
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
