import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Heart, Users, Calendar, Play, Star, ArrowRight, Lock, ChevronDown, X, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";
import { eventos } from "@/lib/events";

export default function ClubRetiroSagrado() {
  const kajabi_mensual = "https://www.i3cdigital.com/offers/GdzCo9uE/checkout";
  const kajabi_anual = "https://www.i3cdigital.com/offers/JvrtZ9TF";
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedRetiro, setSelectedRetiro] = useState<any>(null);
  const [selectedRetiro2025, setSelectedRetiro2025] = useState<any>(null);

  const retirosSagrados2026 = eventos.filter(evento => evento.tipo === "Retiro Sagrado").slice(0, 12);

  const retiros2025 = [
    {
      id: 1,
      nombre: "Volver al Silencio",
      img: "/images/retiro-volver-silencio.png",
      descripcion: "Un retiro para aquietar el ruido interno, soltar la sobreestimulación y regresar al centro. Un espacio de pausa consciente donde el silencio se convierte en guía y claridad."
    },
    {
      id: 2,
      nombre: "Limpia tu Energía",
      img: "/images/retiro-limpia-energia.png",
      descripcion: "Un encuentro para liberar cargas emocionales, mentales y energéticas acumuladas. Ideal para quienes sienten cansancio profundo, saturación interna o desgaste invisible."
    },
    {
      id: 3,
      nombre: "Códigos de Luz",
      img: "/images/retiro-codigos-luz.png",
      descripcion: "Un retiro de reconexión con el orden interno y la información sutil de equilibrio. Permite recordar estados de coherencia profunda y alineación más allá del esfuerzo mental."
    },
    {
      id: 4,
      nombre: "Recupera tu Centro",
      img: "/images/retiro-recupera-centro.png",
      descripcion: "Diseñado para volver al eje interno cuando la vida, el estrés o las emociones desbalancean. Un espacio para reencontrarte contigo y restablecer estabilidad en medio del movimiento."
    },
    {
      id: 5,
      nombre: "Sana y Cierra Ciclos",
      img: "/images/retiro-sana-ciclos.png",
      descripcion: "Un retiro para cerrar procesos abiertos, relaciones y etapas inconclusas sin arrastre. Ayuda a liberar lo que ya cumplió su función y recuperar energía para el presente."
    },
    {
      id: 6,
      nombre: "Claves Internas para el Bienestar Verdadero",
      img: "/images/retiro-claves-bienestar.png",
      descripcion: "Un encuentro de comprensión profunda sobre lo que realmente sostiene el bienestar. Integra regulación emocional, coherencia mental, presencia corporal y orden energético."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/retiro-8-amor-divino.png" 
            alt="Club del Retiro Sagrado" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur">
              <span className="text-black font-semibold">💕 Transformación Continua con YOHEV</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-6">
              Club del Retiro Sagrado
            </h1>
            <p className="text-xl md:text-2xl text-black/90 mb-8">
              12 meses de transformación. 12 retiros en vivo con YOHEV.
            </p>
            <p className="text-lg text-black/80 mb-12 max-w-2xl">
              Un viaje profundo de sanación, consciencia y transformación personal. Cada mes, un nuevo retiro facilitado directamente por YOHEV. Cada retiro, una nueva oportunidad de evolucionar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing">
                <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-lg px-8 py-6 gap-2">
                  Unirse al Club Ahora
                  <ArrowRight size={24} />
                </Button>
              </a>
              <a href="https://www.i3cdigital.com/products/club-de-retiro-sagrado" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10 font-bold text-lg px-8 py-6">
                  Acceso de miembros
                </Button>
              </a>
              <Link href="/retiro-sagrado">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10 font-bold text-lg px-8 py-6">
                  Próximo Retiro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Qué Incluye Tu Membresía
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Acceso completo a todo lo que necesitas para tu transformación
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Calendar size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Retiros Mensuales con YOHEV
                    </h3>
                    <p className="text-muted-foreground">
                      Cada primer domingo del mes (8-12 hrs CDMX). Conexión en directo, online, por Zoom.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Play size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Grabaciones Ilimitadas
                    </h3>
                    <p className="text-muted-foreground">
                      Acceso a todas las grabaciones de retiros anteriores. Revisa cuantas veces necesites. Profundiza en cada enseñanza a tu ritmo.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Users size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Acceso a la Comunidad del Club
                    </h3>
                    <p className="text-muted-foreground">
                      Conecta con otros miembros en transformación. Comparte experiencias, aprende de otros y crece juntos en comunidad.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Lock size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Contenido Exclusivo
                    </h3>
                    <p className="text-muted-foreground">
                      Acceso a grabaciones de todos los retiros. Contenido exclusivo solo para miembros del Club.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Retiros 2026 Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Los 12 Retiros de 2026 con YOHEV
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Haz click en cualquier retiro para ver más detalles
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Presencia Viva - Enero 2026 - Ya Disponible */}
              <Card 
                key="presencia-viva" 
                className="overflow-hidden border-border/50 bg-background hover:shadow-lg transition-all cursor-pointer relative"
                onClick={() => setSelectedRetiro({
                  id: 'presencia-viva',
                  title: 'Presencia Viva',
                  fecha: 'Domingo, 4 de enero de 2026',
                  horario: '8:00 - 12:00 hrs (CDMX)',
                  modalidad: 'Online en Vivo',
                  participantes: 'Comunidad del Club',
                  imagen: '/images/retiro-presencia-viva.png',
                  description: 'Un retiro para iniciar el nuevo ciclo desde la consciencia y no desde la prisa. Enseña a habitar el presente como base de claridad, calma y coherencia en la vida cotidiana.',
                  incluye: ['Sesión en vivo con YOHEV', 'Grabación disponible', 'Acceso a comunidad', 'Materiales de apoyo']
                })}
              >
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  YA DISPONIBLE
                </div>
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="/images/retiro-presencia-viva.png" 
                    alt="Presencia Viva"
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-primary font-semibold mb-1">Enero</p>
                  <h3 className="font-semibold text-foreground text-sm">Presencia Viva</h3>
                </div>
              </Card>

              {retirosSagrados2026.map((retiro) => (
                <Card 
                  key={retiro.id} 
                  className="overflow-hidden border-border/50 bg-background hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedRetiro(retiro)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={retiro.imagen} 
                      alt={retiro.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-primary font-semibold mb-1">{retiro.fecha.split(",")[0]}</p>
                    <h3 className="font-semibold text-foreground text-sm">{retiro.title}</h3>
                  </div>
                </Card>
              ))}
            </div>

            {selectedRetiro && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedRetiro(null)}>
                <Card className="max-w-2xl w-full bg-background border-border/50 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <img 
                      src={selectedRetiro.imagen} 
                      alt={selectedRetiro.title}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedRetiro(null)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {selectedRetiro.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {selectedRetiro.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start gap-3">
                        <Calendar size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Fecha</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.fecha}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Horario</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.horario}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Modalidad</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.modalidad}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Participantes</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.participantes}</p>
                        </div>
                      </div>
                    </div>

                    {selectedRetiro.incluye && selectedRetiro.incluye.length > 0 && (
                      <div className="mb-8">
                        <h3 className="font-semibold text-foreground mb-4 text-lg">Incluye:</h3>
                        <ul className="space-y-2">
                          {selectedRetiro.incluye.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <Check size={18} className="text-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="border-t border-border/30 pt-6">
                      <a href="#pricing">
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                          Unirse al Club para Acceder
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Retiros 2025 Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Retiros 2025 - Incluidos en Tu Membresía
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Haz click en cualquier retiro para ver más detalles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retiros2025.map((retiro) => (
                <Card 
                  key={retiro.id} 
                  className="overflow-hidden border-border/50 bg-primary/5 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedRetiro2025(retiro)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={retiro.img} 
                      alt={retiro.nombre}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm">{retiro.nombre}</h3>
                  </div>
                </Card>
              ))}
            </div>

            {selectedRetiro2025 && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedRetiro2025(null)}>
                <Card className="max-w-2xl w-full bg-background border-border/50 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <img 
                      src={selectedRetiro2025.img} 
                      alt={selectedRetiro2025.nombre}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedRetiro2025(null)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {selectedRetiro2025.nombre}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {selectedRetiro2025.descripcion}
                    </p>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                      <p className="text-foreground font-semibold flex items-center gap-2">
                        <Check size={20} className="text-primary" />
                        Este retiro ya está disponible en tu membresía
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Accede a la grabación completa desde tu plataforma de miembro
                      </p>
                    </div>

                    <div className="border-t border-border/30 pt-6">
                      <a href="https://www.i3cdigital.com/products/club-de-retiro-sagrado" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                          Acceder a Mi Membresía
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Lo Que Dicen Nuestros Miembros
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Historias reales de transformación
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Soy miembro desde hace 8 meses. La facilidad de YOHEV es increíble. Cada retiro me da herramientas nuevas. Las grabaciones me permiten profundizar cuando lo necesito.",
                  author: "María C.",
                  role: "Miembro - 8 meses"
                },
                {
                  quote: "Lo mejor es que YOHEV está siempre presente. No es un facilitador genérico. Su energía y conocimiento transforman cada retiro. He revisado grabaciones varias veces.",
                  author: "Roberto M.",
                  role: "Miembro - 1 año"
                },
                {
                  quote: "Perdí algunos retiros por trabajo, pero poder verlos grabados con YOHEV facilitando me permitió no quedarme atrás. El Club es flexible y profundo.",
                  author: "Alejandra T.",
                  role: "Miembro - 6 meses"
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Dual Options */}
      <section id="pricing" className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Elige Tu Plan
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Ambas opciones incluyen acceso completo a todos los retiros en vivo y grabaciones
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Monthly Plan */}
              <Card className="p-8 border-2 border-border/50 bg-background hover:shadow-lg transition-all">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Membresía Mensual
                  </h3>
                  <p className="text-muted-foreground mb-6">Flexibilidad total, cancela cuando quieras</p>
                  <div className="mb-6">
                    <span className="font-display text-5xl font-bold text-primary">$500</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Acceso a retiros en vivo con YOHEV",
                    "Todas las grabaciones disponibles",
                    "Comunidad de miembros",
                    "Acceso a grabaciones",
                    "Cancelable cuando quieras"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a href={kajabi_mensual} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6">
                    Comenzar Ahora
                  </Button>
                </a>
              </Card>

              {/* Annual Plan */}
              <Card className="p-8 border-2 border-primary bg-background relative hover:shadow-lg transition-all">
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                  MEJOR VALOR
                </div>
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Membresía Anual
                  </h3>
                  <p className="text-muted-foreground mb-6">Ahorra $1,000 vs pagar mensual</p>
                  <div className="mb-6">
                    <span className="font-display text-5xl font-bold text-primary">$5,000</span>
                    <span className="text-muted-foreground">/año</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Acceso a retiros en vivo con YOHEV",
                    "Todas las grabaciones disponibles",
                    "Comunidad de miembros",
                    "Acceso a grabaciones",
                    "Ahorro de $1,000 vs mensual"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a href={kajabi_anual} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6">
                    Comenzar Ahora
                  </Button>
                </a>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Ambos planes incluyen acceso completo a todos los retiros en vivo, grabaciones, comunidad y contenido exclusivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "¿Quién facilita los retiros?",
                  a: "Todos los retiros del Club son facilitados directamente por YOHEV. No son con otros facilitadores. YOHEV aporta su experiencia, profundidad espiritual y presencia única a cada retiro."
                },
                {
                  q: "¿Cuándo comienza mi membresía y cómo accedo?",
                  a: "Tu acceso comienza inmediatamente después de completar el pago en Kajabi. Recibirás un email con las instrucciones de acceso a la plataforma y el link de Zoom para los retiros en vivo. Si no recibes el email, revisa tu carpeta de spam."
                },
                {
                  q: "¿A qué hora son los retiros y en qué zona horaria?",
                  a: "Los retiros son cada primer domingo del mes de 8:00 a 12:00 hrs (CDMX). Febrero es excepción: domingo 8 de febrero de 7:00 a 11:00 hrs (CDMX). Todos los retiros son EN VIVO, POR ZOOM."
                },
                {
                  q: "¿Puedo ver los retiros si no estoy en la zona horaria CDMX?",
                  a: "Sí. Los retiros se graban y tienes acceso ilimitado a todas las grabaciones. Puedes verlas en cualquier momento que te convenga, desde cualquier parte del mundo."
                },
                {
                  q: "¿Qué pasa si me pierdo un retiro en vivo?",
                  a: "No hay problema. La grabación estará disponible en tu plataforma dentro de 24 horas. Puedes verla cuantas veces necesites mientras mantengas tu membresía activa."
                },
                {
                  q: "¿Puedo cambiar entre plan mensual y anual?",
                  a: "Sí. Puedes comenzar con el plan mensual y cambiar al anual en cualquier momento. Contacta a nuestro equipo de soporte en Kajabi para asistencia con el cambio de plan."
                },
                {
                  q: "¿Qué pasa si cancelo mi membresía?",
                  a: "Puedes cancelar tu suscripción en cualquier momento sin penalización. Sin embargo, al cancelar pierdes acceso inmediato a todo el contenido del Club, incluyendo grabaciones y acceso a la comunidad. El contenido solo está disponible mientras mantengas tu membresía activa."
                },
                {
                  q: "¿Hay soporte técnico si tengo problemas con Zoom?",
                  a: "Sí. Nuestro equipo de soporte está disponible para ayudarte con cualquier problema técnico. Puedes contactar a través de la plataforma de Kajabi o enviar un email a soporte."
                }
              ].map((faq, idx) => (
                <Card 
                  key={idx} 
                  className="border-border/50 bg-primary/5 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground flex items-center gap-2 flex-1">
                        <span className="text-primary font-bold">Q:</span>
                        {faq.q}
                      </h3>
                      <ChevronDown 
                        size={20} 
                        className={`text-primary flex-shrink-0 transition-transform ${
                          expandedFAQ === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {expandedFAQ === idx && (
                      <p className="text-muted-foreground ml-6 mt-4 pt-4 border-t border-border/30">
                        {faq.a}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para Tu Transformación con YOHEV?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a cientos de personas que ya están transformando sus vidas a través del Club del Retiro Sagrado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={kajabi_anual} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 gap-2">
                  Plan Anual - Ahorra $1,000
                  <ArrowRight size={24} />
                </Button>
              </a>
              <a href={kajabi_mensual} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-bold text-lg px-12 py-6">
                  Plan Mensual - $500
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
