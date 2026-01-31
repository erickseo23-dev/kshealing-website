import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Zap, Brain, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function QueEsKSHealing() {
  const testimonials = [
    {
      name: "María González",
      location: "Ciudad de México",
      role: "Terapeuta Holística",
      testimonial: "La Energía KS transformó completamente mi práctica. Mis clientes reportan cambios profundos después de las sesiones. Es como si hubiera encontrado la herramienta que siempre busqué.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      location: "Monterrey",
      role: "Empresario",
      testimonial: "Escéptico al principio, pero después de recibir la transmisión KS mi claridad mental mejoró significativamente. Tomo mejores decisiones y siento una coherencia que no había experimentado antes.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      location: "Guadalajara",
      role: "Psicóloga",
      testimonial: "La integración de KS Healing en mi trabajo ha sido revolucionaria. Veo a mis pacientes liberarse de patrones emocionales más rápidamente. La Energía actúa en niveles que la terapia tradicional no alcanza.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      location: "Bogotá",
      role: "Coach de Vida",
      testimonial: "Después de completar la certificación en KS Healing, mi vida cambió radicalmente. Ahora puedo transmitir esta energía a otros y verlos transformarse. Es un honor ser parte de esta misión.",
      rating: 5,
    },
    {
      name: "Lucía Fernández",
      location: "Buenos Aires",
      role: "Médica Integrativa",
      testimonial: "He estudiado muchos sistemas de sanación, pero KS Healing es único. La coherencia que genera es medible y los resultados son consistentes. Mis pacientes experimentan sanación en múltiples niveles.",
      rating: 5,
    },
    {
      name: "David Morales",
      location: "Lima",
      role: "Facilitador KS",
      testimonial: "La transmisión de YOHEV abrió mis ojos a una realidad que siempre estuvo ahí. Ahora veo la vida desde una perspectiva completamente diferente. La Energía KS es real y sus efectos son profundos.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-energy-field.png" 
            alt="Energía KS" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              ¿Qué es la <span className="text-blue-300">Energía KS</span>?
            </h1>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Un sistema de sanación energética que utiliza la Energía Crística Keiouvos Stharef para facilitar transformación profunda.
            </p>
            <Link href="/ks-healing">
              <a>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
                  Explorar KS Healing
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-20">
            <Card className="p-12 border-blue-400/30 bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-sm">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Definición
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                KS Healing es un sistema de sanación energética que utiliza la Energía Keiouvos Stharef para facilitar transformación profunda en los sistemas energéticos humanos.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                No es una religión, no requiere creencias previas, y funciona respetando el libre albedrío de cada persona. La Energía KS actúa en la coherencia pura, reorganizando los campos energéticos hacia su estado natural de armonía y salud.
              </p>
            </Card>
          </div>

          {/* How it Works */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold text-white mb-12 text-center">
              Cómo Funciona
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 border-blue-400/30 bg-gradient-to-br from-blue-800/40 to-slate-800/40 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-blue-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  El Cuerpo KS
                </h3>
                <p className="text-blue-100 mb-4">
                  Una estructura energética multidimensional que se activa en ti a través de la transmisión directa de YOHEV. Es el vehículo a través del cual la Energía KS fluye y se integra en tu ser.
                </p>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Se recibe una sola vez en la vida</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Permanece activo indefinidamente</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Se desarrolla a través de la práctica</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-blue-400/30 bg-gradient-to-br from-blue-800/40 to-slate-800/40 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Brain size={24} className="text-blue-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  El Campo KS
                </h3>
                <p className="text-blue-100 mb-4">
                  Un campo energético toroidal que se genera alrededor de ti y que actúa en múltiples niveles: físico, emocional, mental y espiritual. Este campo es dinámico y se expande con tu práctica.
                </p>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Reorganiza tu sistema energético</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Facilita la coherencia interna</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Impacta tu entorno</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-blue-400/30 bg-gradient-to-br from-blue-800/40 to-slate-800/40 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-blue-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  La Transmisión
                </h3>
                <p className="text-blue-100 mb-4">
                  La Energía KS se transmite de forma intencionalizada a través de múltiples canales, llevando la frecuencia de alta coherencia directamente a tu sistema energético.
                </p>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Sesiones privadas con facilitadores</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Cursos y formaciones</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>El libro intencionalizado</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Image Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-transformation.png" 
            alt="Transformación" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Tu Transformación Comienza Aquí
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              La Energía KS te devuelve a tu verdadera naturaleza divina y te abre a posibilidades infinitas de crecimiento y sanación.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-blue-950/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            Beneficios de <span className="text-blue-400">KS Healing</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Coherencia Energética",
                description: "Alineación y armonía en todos tus sistemas energéticos",
              },
              {
                title: "Sanación Emocional",
                description: "Transformación de patrones emocionales limitantes",
              },
              {
                title: "Expansión de Consciencia",
                description: "Acceso a estados más profundos de presencia y claridad",
              },
              {
                title: "Transformación de Patrones",
                description: "Liberación de creencias y comportamientos que no te sirven",
              },
              {
                title: "Conexión Divina",
                description: "Reconexión con tu verdadera naturaleza espiritual",
              },
              {
                title: "Impacto en la Vida",
                description: "Cambios evidentes y sostenibles en tu realidad cotidiana",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-slate-900/20 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coherence Image Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ks-healing-coherence.png" 
            alt="Coherencia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Coherencia en Todos los Niveles
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              La Energía KS actúa de forma integrada, reorganizando tus sistemas energéticos hacia la armonía perfecta.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-12 text-center">
            Lo Que Dicen Quienes Han Experimentado <span className="text-blue-300">KS Healing</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 border-blue-400/30 bg-gradient-to-br from-blue-800/30 to-slate-800/30 backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-blue-300">★</span>
                  ))}
                </div>
                <p className="text-blue-100 mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t border-blue-400/20 pt-4">
                  <p className="font-display font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-blue-300">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-blue-200">
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Comienza Tu Viaje de Transformación
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Descubre cómo la Energía KS puede cambiar tu vida y reconectar contigo mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ks-healing">
                <a>
                  <Button size="lg" className="bg-white hover:bg-blue-50 text-blue-600 gap-2">
                    Explorar KS Healing
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
              <Link href="/eventos">
                <a>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                    Ver Próximos Eventos
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
