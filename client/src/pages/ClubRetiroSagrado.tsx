import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Heart, Users, Calendar, Play, Star, ArrowRight, Lock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ClubRetiroSagrado() {
  const kajabi_mensual = "https://www.i3cdigital.com/offers/GdzCo9uE/checkout";
  const kajabi_anual = "https://www.i3cdigital.com/offers/JvrtZ9TF";

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
              <span className="text-black font-semibold">💕 Transformación Continua con Yohev</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-6">
              Club del Retiro Sagrado
            </h1>
            <p className="text-xl md:text-2xl text-black/90 mb-8">
              12 meses de transformación. 12 retiros en vivo. Siempre con Yohev.
            </p>
            <p className="text-lg text-black/80 mb-12 max-w-2xl">
              Un viaje profundo de sanación, consciencia y transformación personal. Cada mes, un nuevo retiro facilitado directamente por Yohev. Cada retiro, una nueva oportunidad de evolucionar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={kajabi_anual} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-lg px-8 py-6 gap-2">
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
                  <Calendar size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Retiros Mensuales con Yohev
                    </h3>
                    <p className="text-muted-foreground">
                      Cada primer domingo del mes (8-12 hrs CDMX). Conexión en directo con la comunidad. Facilitados directamente por Yohev. Acceso a todos los retiros del año.
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
                      Conecta con cientos de personas en tu mismo camino de transformación. Comparte experiencias, preguntas y crece juntos en un espacio seguro.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Heart size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Contenido Exclusivo
                    </h3>
                    <p className="text-muted-foreground">
                      Acceso permanente a grabaciones de todos los retiros. Contenido exclusivo solo para miembros del Club. Tu biblioteca de transformación es tuya para siempre.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Retiros 2026 Preview with Images */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Los 12 Retiros de 2026 con Yohev
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Un viaje progresivo de transformación, mes a mes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { mes: "Febrero", nombre: "LA ARQUITECTURA DEL AMOR", image: "/images/retiro-8-amor-divino.png" },
                { mes: "Marzo", nombre: "VOLVER AL SILENCIO", image: "/images/retiro-volver-silencio.png" },
                { mes: "Abril", nombre: "LIMPIA TU ENERGÍA", image: "/images/retiro-limpia-energia.png" },
                { mes: "Mayo", nombre: "CÓDIGOS DE LUZ", image: "/images/retiro-codigos-luz.png" },
                { mes: "Junio", nombre: "RECUPERA TU CENTRO", image: "/images/retiro-recupera-centro.png" },
                { mes: "Julio", nombre: "SANA Y CIERRA CICLOS", image: "/images/retiro-sana-ciclos.png" },
                { mes: "Agosto", nombre: "CLAVES INTERNAS PARA EL BIENESTAR", image: "/images/retiro-claves-bienestar.png" },
                { mes: "Septiembre", nombre: "PRESENCIA VIVA", image: "/images/retiro-presencia-viva.png" },
                { mes: "Octubre", nombre: "ROMPE LA CAPA DE ESTRÉS", image: "/images/retiro-estres.png" },
                { mes: "Noviembre", nombre: "EL ARTE DE SOLTAR", image: "/images/retiro-soltar.png" },
                { mes: "Diciembre", nombre: "EL PODER DE ELEGIR", image: "/images/retiro-poder-elegir.png" },
                { mes: "Enero 2027", nombre: "CIERRA EL AÑO EN LUZ", image: "/images/retiro-cierre.png" },
              ].map((retiro, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg h-48 cursor-pointer">
                  <img
                    src={retiro.image}
                    alt={retiro.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold opacity-90">{retiro.mes}</p>
                    <p className="font-display text-lg font-bold line-clamp-2">{retiro.nombre}</p>
                  </div>
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
                  quote: "Soy miembro desde hace 8 meses. La facilidad de Yohev es increíble. Cada retiro me da herramientas nuevas. Las grabaciones me permiten profundizar cuando lo necesito.",
                  author: "María C.",
                  role: "Miembro - 8 meses"
                },
                {
                  quote: "Lo mejor es que Yohev está siempre presente. No es un facilitador genérico. Su energía y conocimiento transforman cada retiro. He revisado grabaciones varias veces.",
                  author: "Roberto M.",
                  role: "Miembro - 1 año"
                },
                {
                  quote: "Perdí algunos retiros por trabajo, pero poder verlos grabados con Yohev facilitando me permitió no quedarme atrás. El Club es flexible y profundo.",
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
      <section className="py-20 md:py-32 bg-primary/5">
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
                  <p className="text-muted-foreground mb-6">Prueba el Club sin compromiso a largo plazo</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-4xl font-bold text-foreground">$500</span>
                    <span className="text-muted-foreground">MXN/mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8">Cancelable en cualquier momento</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Acceso a retiros en vivo con Yohev",
                    "Todas las grabaciones disponibles",
                    "Comunidad de miembros",
                    "Acceso permanente a grabaciones",
                    "Cancelable cuando quieras"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a href={kajabi_mensual} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6">
                    Comenzar Mensual
                  </Button>
                </a>
              </Card>

              {/* Annual Plan - Recommended */}
              <Card className="p-8 border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-lg transition-all relative">
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-lg font-semibold text-sm">
                  Ahorra 2 meses
                </div>
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Membresía Anual
                  </h3>
                  <p className="text-muted-foreground mb-6">La mejor opción. Ahorra equivalente a 2 meses</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-4xl font-bold text-foreground">$5,000</span>
                    <span className="text-muted-foreground">MXN/año</span>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-8">Solo $416 por mes</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Acceso a retiros en vivo con Yohev",
                    "Todas las grabaciones disponibles",
                    "Comunidad de miembros",
                    "Acceso permanente a grabaciones",
                    "Ahorro de $1,000 vs mensual"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a href={kajabi_anual} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6">
                    Comenzar Anual
                  </Button>
                </a>
              </Card>
            </div>

            <div className="text-center p-8 bg-background rounded-lg border border-border/50">
              <p className="text-foreground font-semibold mb-2">
                Garantía de satisfacción: Reembolso completo en los primeros 7 días si no estás satisfecho.
              </p>
              <p className="text-muted-foreground text-sm">
                Todos los retiros son facilitados directamente por Yohev. Acceso ilimitado a grabaciones.
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

            <div className="space-y-6">
              {[
                {
                  q: "¿Quién facilita los retiros?",
                  a: "Todos los retiros del Club son facilitados directamente por Yohev. No son con otros facilitadores. Yohev aporta su experiencia, profundidad espiritual y presencia única a cada retiro."
                },
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
                  q: "¿Puedo cambiar entre plan mensual y anual?",
                  a: "Sí. Puedes comenzar con el plan mensual y cambiar al anual en cualquier momento. Contacta a nuestro equipo de soporte para asistencia."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="p-6 border-border/50 bg-primary/5">
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground ml-6">{faq.a}</p>
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
              ¿Listo para Tu Transformación con Yohev?
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
