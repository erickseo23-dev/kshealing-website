import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Heart, Zap, Users, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function KSHealing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">✨ Programa Fundamental</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              KS <span className="text-primary">Healing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              La base fundamental de la sanación energética. Aprende a trabajar directamente con la Energía Keiouvos Stharef para transformar tu campo vibracional y recordar tu verdadera naturaleza divina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Comenzar Ahora
              </Button>
              <Button size="lg" variant="outline">
                Ver Próximos Eventos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is KS Healing */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                ¿Qué es <span className="text-primary">KS Healing</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  KS Healing es un sistema de sanación energética revolucionario que utiliza la Energía Keiouvos Stharef (KS) para facilitar transformación profunda en los sistemas energéticos humanos.
                </p>
                <p className="text-lg leading-relaxed">
                  Esta energía viva, consciente y programable trabaja directamente sobre tu campo vibracional, permitiéndote acceder a estados de coherencia, claridad y conexión divina.
                </p>
                <p className="text-lg leading-relaxed">
                  A través de KS Healing, aprendes a:
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Conectar con la Energía Keiouvos Stharef",
                  "Transformar patrones emocionales limitantes",
                  "Restaurar la coherencia divina original",
                  "Elevar tu vibración y consciencia",
                  "Recordar tu verdadera naturaleza divina",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/sdfsf.jpeg" 
                alt="KS Healing" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Bodies */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Sanación de los <span className="text-primary">7 Cuerpos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              KS Healing actúa sobre todos los niveles de tu ser, no solo el físico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { name: "Cuerpo Físico", icon: "💪", description: "Sanación y vitalidad del cuerpo material" },
              { name: "Cuerpo Emocional", icon: "❤️", description: "Liberación de emociones limitantes" },
              { name: "Cuerpo Mental", icon: "🧠", description: "Claridad mental y reprogramación" },
              { name: "Cuerpo Intuitivo", icon: "✨", description: "Conexión con tu intuición divina" },
              { name: "Cuerpo Álmico", icon: "🌟", description: "Alineación con tu propósito de alma" },
              { name: "Cuerpo Espiritual", icon: "🙏", description: "Conexión con lo sagrado" },
              { name: "Cuerpo Divino", icon: "👑", description: "Unión con tu naturaleza divina" },
            ].map((body, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-primary/10 to-background hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3">{body.icon}</div>
                <h3 className="font-display font-bold text-foreground mb-2">{body.name}</h3>
                <p className="text-sm text-muted-foreground">{body.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Beneficios de <span className="text-primary">KS Healing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Sanación Emocional Profunda",
                description: "Libérate de traumas, miedos y patrones emocionales que han limitado tu vida",
              },
              {
                icon: Zap,
                title: "Activación Energética",
                description: "Eleva tu vibración y accede a estados de mayor claridad y presencia",
              },
              {
                icon: Users,
                title: "Transformación de Relaciones",
                description: "Mejora tus relaciones personales y profesionales desde la coherencia interna",
              },
              {
                icon: BookOpen,
                title: "Reconexión con tu Propósito",
                description: "Recuerda tu verdadera misión de vida y vive con dirección y significado",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="p-8 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Estructura del <span className="text-primary">Programa</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Iniciación",
                description: "Recibe la transmisión inicial de Energía KS y aprende los fundamentos del sistema",
              },
              {
                step: 2,
                title: "Práctica Guiada",
                description: "Desarrolla tus habilidades con ejercicios prácticos y sesiones de grupo",
              },
              {
                step: 3,
                title: "Profundización",
                description: "Accede a técnicas avanzadas y trabaja en tu transformación personal",
              },
              {
                step: 4,
                title: "Certificación",
                description: "Completa el programa y obtén tu certificación como practicante de KS Healing",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold">
                    {item.step}
                  </div>
                  {item.step < 4 && <div className="w-1 h-16 bg-primary/30 mt-2"></div>}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Comienza tu Transformación con KS Healing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre cómo la Energía Keiouvos Stharef puede transformar tu vida y ayudarte a recordar tu verdadera naturaleza divina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
              Reservar Sesión
              <ArrowRight size={20} />
            </Button>
            <Link href="/eventos">
              <a>
                <Button size="lg" variant="outline">
                  Ver Próximos Eventos
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
