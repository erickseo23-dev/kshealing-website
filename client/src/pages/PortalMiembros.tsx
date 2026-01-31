import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Users, BookOpen, Zap, MessageSquare, Calendar } from "lucide-react";

export default function PortalMiembros() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Portal de Miembros
            </h1>
            <p className="text-xl text-white/90">
              Acceso exclusivo a contenido, comunidad y transmisiones directas
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Inicia Sesión
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Inicia Sesión
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  ¿No tienes cuenta?
                </p>
                <Button variant="outline" className="w-full">
                  Crear Cuenta
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            Beneficios de Ser Miembro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                titulo: "Contenido Exclusivo",
                descripcion: "Acceso a cursos, guías y materiales que no están disponibles públicamente.",
              },
              {
                icon: Users,
                titulo: "Comunidad Privada",
                descripcion: "Conecta con otros practicantes en un espacio seguro y de apoyo.",
              },
              {
                icon: Zap,
                titulo: "Transmisiones en Vivo",
                descripcion: "Sesiones semanales de transmisión directa de Energía KS con YOHEV.",
              },
              {
                icon: MessageSquare,
                titulo: "Mentoría Individual",
                descripcion: "Acceso a sesiones de mentoría personalizada con practicantes certificados.",
              },
              {
                icon: Calendar,
                titulo: "Eventos Exclusivos",
                descripcion: "Invitaciones prioritarias a retiros, seminarios y eventos especiales.",
              },
              {
                icon: Lock,
                titulo: "Acceso VIP",
                descripcion: "Beneficios adicionales y acceso anticipado a nuevos programas.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {feature.titulo}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.descripcion}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            Planes de Membresía
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                nombre: "Básico",
                precio: "$29/mes",
                descripcion: "Acceso a contenido exclusivo y comunidad",
                features: [
                  "Acceso a biblioteca de cursos",
                  "Comunidad privada",
                  "Actualizaciones mensuales",
                  "Soporte por email",
                ],
                cta: "Comenzar",
                highlighted: false,
              },
              {
                nombre: "Premium",
                precio: "$79/mes",
                descripcion: "Todo lo del plan básico + transmisiones en vivo",
                features: [
                  "Todo del plan Básico",
                  "Transmisiones en vivo semanales",
                  "Meditaciones exclusivas",
                  "Acceso a eventos",
                  "Soporte prioritario",
                ],
                cta: "Comenzar",
                highlighted: true,
              },
              {
                nombre: "VIP",
                precio: "$199/mes",
                descripcion: "Acceso completo + mentoría personalizada",
                features: [
                  "Todo del plan Premium",
                  "Mentoría individual mensual",
                  "Acceso VIP a eventos",
                  "Certificación acelerada",
                  "Soporte 24/7",
                ],
                cta: "Comenzar",
                highlighted: false,
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-primary shadow-lg"
                    : "border border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.nombre}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {plan.descripcion}
                </p>

                <p className="text-4xl font-bold text-primary mb-6">
                  {plan.precio}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-foreground">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "¿Puedo cancelar mi membresía en cualquier momento?",
                a: "Sí, puedes cancelar tu membresía en cualquier momento sin penalidades. Tu acceso continuará hasta el final del período de facturación.",
              },
              {
                q: "¿Qué métodos de pago aceptan?",
                a: "Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), transferencia bancaria y PayPal.",
              },
              {
                q: "¿Hay descuentos para pagos anuales?",
                a: "Sí, si pagas anualmente recibes un descuento del 20% sobre el precio mensual.",
              },
              {
                q: "¿Puedo cambiar de plan en cualquier momento?",
                a: "Claro, puedes cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo ciclo de facturación.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-display font-bold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
