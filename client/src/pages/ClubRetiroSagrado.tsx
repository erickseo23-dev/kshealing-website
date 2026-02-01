import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Heart, Users, Calendar, Play, Star, ArrowRight, Lock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ClubRetiroSagrado() {
  const kajabi_checkout = "https://www.i3cdigital.com/offers/GdzCo9uE/checkout";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-rose-600 via-rose-500 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur">
              <span className="text-white font-semibold">💕 Transformación Continua</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Club del Retiro Sagrado
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              12 meses de transformación. 12 retiros en vivo. Acceso ilimitado a grabaciones.
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Un viaje profundo de sanación, consciencia y transformación personal. Cada mes, un nuevo retiro. Cada retiro, una nueva oportunidad de evolucionar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={kajabi_checkout} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white hover:bg-white/90 text-rose-600 font-bold text-lg px-8 py-6 gap-2">
                  Unirse al Club Ahora
                  <ArrowRight size={24} />
                </Button>
              </a>
              <Link href="/retiro-sagrado">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6">
                  Conocer más
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
                  <Calendar size={32} className="text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      12 Retiros en Vivo
                    </h3>
                    <p className="text-muted-foreground">
                      Cada primer domingo del mes (8-12 hrs CDMX). Conexión en directo con la comunidad. Experiencia transformadora en tiempo real.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Play size={32} className="text-rose-600 flex-shrink-0 mt-1" />
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
                  <Users size={32} className="text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Comunidad Global
                    </h3>
                    <p className="text-muted-foreground">
                      Conecta con cientos de personas en tu mismo camino de transformación. Comparte experiencias y crece juntos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Heart size={32} className="text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Acceso Permanente
                    </h3>
                    <p className="text-muted-foreground">
                      Mantén acceso a todas las grabaciones incluso después de terminar tu membresía. Tu biblioteca de transformación es tuya.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Retiros 2026 Preview */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Los 12 Retiros de 2026
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Un viaje progresivo de transformación, mes a mes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { mes: "Febrero", nombre: "LA ARQUITECTURA DEL AMOR", color: "from-rose-500 to-rose-600" },
                { mes: "Marzo", nombre: "VOLVER AL SILENCIO", color: "from-blue-500 to-blue-600" },
                { mes: "Abril", nombre: "LIMPIA TU ENERGÍA", color: "from-amber-500 to-amber-600" },
                { mes: "Mayo", nombre: "CÓDIGOS DE LUZ", color: "from-yellow-500 to-yellow-600" },
                { mes: "Junio", nombre: "RECUPERA TU CENTRO", color: "from-green-500 to-green-600" },
                { mes: "Julio", nombre: "SANA Y CIERRA CICLOS", color: "from-pink-500 to-pink-600" },
                { mes: "Agosto", nombre: "CLAVES INTERNAS PARA EL BIENESTAR", color: "from-teal-500 to-teal-600" },
                { mes: "Septiembre", nombre: "PRESENCIA VIVA", color: "from-indigo-500 to-indigo-600" },
                { mes: "Octubre", nombre: "ROMPE LA CAPA DE ESTRÉS", color: "from-cyan-500 to-cyan-600" },
                { mes: "Noviembre", nombre: "EL ARTE DE SOLTAR", color: "from-violet-500 to-violet-600" },
                { mes: "Diciembre", nombre: "EL PODER DE ELEGIR", color: "from-fuchsia-500 to-fuchsia-600" },
                { mes: "Enero 2027", nombre: "CIERRA EL AÑO EN LUZ", color: "from-orange-500 to-orange-600" },
              ].map((retiro, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${retiro.color} p-6 rounded-lg text-white hover:shadow-lg transition-all`}>
                  <p className="text-sm font-semibold opacity-90 mb-1">{retiro.mes}</p>
                  <p className="font-display text-lg font-bold">{retiro.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Lo Que Dicen Nuestros Miembros
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Historias reales de transformación
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Soy miembro desde hace 8 meses y he asistido a todos los retiros en vivo. Cada uno me ha dado herramientas diferentes. Ahora reviso las grabaciones cuando necesito profundizar.",
                  author: "María C.",
                  role: "Miembro - 8 meses"
                },
                {
                  quote: "Lo mejor del Club es tener acceso a todas las grabaciones. He revisado 'Volver al Silencio' más de 5 veces. Cada visión me revela algo nuevo.",
                  author: "Roberto M.",
                  role: "Miembro - 1 año"
                },
                {
                  quote: "Perdí algunos retiros por trabajo, pero poder verlos grabados me permitió no quedarme atrás. El Club es flexible y se adapta a mi ritmo de vida.",
                  author: "Alejandra T.",
                  role: "Miembro - 6 meses"
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-rose-600 text-rose-600" />
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

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "¿Cuándo comienza mi membresía?",
                  a: "Tu acceso comienza inmediatamente después de completar el pago. Recibirás un email con las instrucciones de acceso a la plataforma."
                },
                {
                  q: "¿Puedo ver los retiros en vivo si no estoy en la zona horaria CDMX?",
                  a: "Sí. Los retiros se graban y tienes acceso ilimitado a todas las grabaciones. Puedes verlas en cualquier momento que te convenga."
                },
                {
                  q: "¿Qué pasa si me pierdo un retiro en vivo?",
                  a: "No hay problema. La grabación estará disponible en tu plataforma dentro de 24 horas. Puedes verla cuantas veces necesites."
                },
                {
                  q: "¿Puedo compartir mi acceso con otra persona?",
                  a: "No. Cada membresía es personal e intransferible. Si alguien más quiere unirse, debe adquirir su propia membresía."
                },
                {
                  q: "¿Hay garantía de satisfacción?",
                  a: "Sí. Si no estás satisfecho en los primeros 7 días, ofrecemos reembolso completo sin preguntas."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="p-6 border-border/50 bg-background">
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-1">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground ml-6">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-rose-600 via-rose-500 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Membresía Anual del Club
            </h2>
            <p className="text-xl text-white/90 mb-12">
              12 retiros en vivo + Acceso ilimitado a grabaciones + Comunidad global
            </p>

            <Card className="p-12 bg-white/95 backdrop-blur mb-12">
              <div className="text-center">
                <p className="text-muted-foreground text-lg mb-4">Inversión anual</p>
                <div className="flex items-baseline justify-center gap-2 mb-8">
                  <span className="font-display text-5xl font-bold text-foreground">Acceso</span>
                  <span className="text-2xl text-muted-foreground">en Kajabi</span>
                </div>
                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    "12 retiros en vivo vía Zoom",
                    "Grabaciones de todos los retiros",
                    "Acceso permanente a la biblioteca",
                    "Comunidad de transformación",
                    "Soporte y orientación continua"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <Check size={20} className="text-rose-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href={kajabi_checkout} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg px-12 py-6 w-full gap-2">
                    Unirse al Club Ahora
                    <ArrowRight size={24} />
                  </Button>
                </a>
              </div>
            </Card>

            <p className="text-white/80 text-sm">
              Garantía de satisfacción: Reembolso completo en los primeros 7 días si no estás satisfecho.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para Tu Transformación?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a cientos de personas que ya están transformando sus vidas a través del Club del Retiro Sagrado.
            </p>
            <a href={kajabi_checkout} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg px-12 py-6 gap-2">
                Comenzar Mi Transformación
                <Heart size={24} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
