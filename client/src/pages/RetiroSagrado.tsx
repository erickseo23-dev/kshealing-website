import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Heart, Zap, Users, Star, Leaf, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { retiroSagradoTestimonials } from "@/lib/programTestimonials";

export default function RetiroSagrado() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">🕉️ Experiencia Vivencial</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Retiro <span className="text-primary">Sagrado 7</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Presencia Viva - Domingo 01 de Febrero
            </p>
            <p className="text-lg text-muted-foreground mb-2">
              Claves Internas para el Bienestar Verdadero
            </p>
            <p className="text-lg text-muted-foreground mb-8 italic">
              "El bienestar se activa cuando todo dentro de mí se ordena."
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Un espacio profundo para iniciar el nuevo ciclo en coherencia, calma y alineación interior. Aprender a habitar el presente como base de todo lo que viene.
            </p>
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">📅 Próximo Domingo 01 de Febrero | 10:00 - 14:00 hrs (CDMX)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Reservar Mi Lugar
              </Button>
              <Button size="lg" variant="outline">
                Unirse al Club de Retiro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-border/50 bg-gradient-to-br from-background to-primary/10">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Inicia el Nuevo Ciclo desde la Presencia Viva
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Después de meses intensos, decisiones importantes, desgaste emocional y procesos internos profundos, muchas personas llegan a un nuevo ciclo sin haber verdaderamente cerrado o integrado lo vivido. Sin presencia, sin claridad, sin conexión con el ahora.
                </p>
                <p className="font-semibold text-foreground mt-6">
                  Este retiro nace para eso: para enseñarte a habitar el presente como base de todo lo que viene. La presencia viva es el fundamento del nuevo ciclo.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              ¿Qué Viviremos <span className="text-primary">Juntos</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Una experiencia energética guiada de 4 horas en vivo con YOHEV
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-background mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                No es una clase. No es teoría. Es una experiencia vivencial profunda diseñada para ayudarte a:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Recuperar Estabilidad Emocional",
                    description: "Reconecta con tu equilibrio emocional profundo"
                  },
                  {
                    icon: Zap,
                    title: "Calmar el Sistema Nervioso",
                    description: "Restaura tu paz interior y coherencia"
                  },
                  {
                    icon: Leaf,
                    title: "Alinear Mente, Emoción, Cuerpo y Energía",
                    description: "Integra todos tus niveles de ser"
                  },
                  {
                    icon: Sparkles,
                    title: "Reconectar con tu Centro Interno",
                    description: "Accede a tu verdadera naturaleza divina"
                  },
                  {
                    icon: Check,
                    title: "Habitar el Presente como Base",
                    description: "Aprender a estar aquí, ahora, como fundamento del nuevo ciclo"
                  },
                  {
                    icon: Users,
                    title: "Comenzar el Próximo Ciclo",
                    description: "Desde un lugar más estable y consciente"
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <Icon size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-border/50 bg-background">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Estructura del Retiro</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Duración:</p>
                    <p>4 horas sagradas de conexión profunda</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Modalidad:</p>
                    <p>En vivo por Zoom</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fecha:</p>
                    <p className="font-bold text-primary">Domingo 01 de Febrero de 2026</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horario:</p>
                    <p>10:00 a 14:00 hrs (hora CDMX)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ambiente:</p>
                    <p>Sin celular, sin redes y sin interrupciones</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Grabación:</p>
                    <p>El evento queda grabado para acceso posterior</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-background">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Para Quién es Este Retiro</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Sientes que has hecho mucho trabajo interno, pero te cuesta sostener el bienestar</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Te notas cansado emocional o mentalmente</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Quieres iniciar el nuevo ciclo con presencia y claridad, no con prisa</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Deseas comenzar el próximo ciclo desde un lugar más estable y consciente</span>
                  </li>
                  <li className="flex gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Buscas un espacio de silencio, guía y restauración real</span>
                  </li>
                </ul>
                <p className="text-sm text-primary mt-6 font-semibold">
                  No necesitas experiencia previa. Solo la disposición de estar contigo.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Retiros */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Retiros <span className="text-primary">Anteriores</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Accede a todos los retiros pasados con el Club de Retiro Sagrado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Volver al Silencio",
              "Limpia Tu Energía",
              "Código de Luz",
              "Recupera Tu Centro",
              "Sana y Cierra Ciclos",
              "Y más por venir...",
            ].map((retiro, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-primary/10 to-background hover:shadow-lg transition-shadow">
                <div className="flex gap-3">
                  <Sparkles size={24} className="text-primary flex-shrink-0" />
                  <p className="font-semibold text-foreground">{retiro}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Club de Retiro Sagrado */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-border/50 bg-gradient-to-br from-primary/10 to-background">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Club de <span className="text-primary">Retiro Sagrado</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Una membresía mensual creada para quienes desean un acompañamiento espiritual continuo, sin prisas ni exigencias, a lo largo del año.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Acceso a Todos los Retiros</p>
                    <p className="text-muted-foreground">Acceso a este retiro y todos los retiros futuros mientras tu membresía esté activa</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Grabaciones Completas</p>
                    <p className="text-muted-foreground">Acceso inmediato a las grabaciones de todos los retiros anteriores</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Comunidad Privada</p>
                    <p className="text-muted-foreground">Acceso a la comunidad del club y contenido de valor adicional</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Flexibilidad</p>
                    <p className="text-muted-foreground">Puedes cancelar en cualquier momento, sin compromisos a largo plazo</p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg mb-8">
                <p className="text-3xl font-bold text-primary mb-2">$500 MXN</p>
                <p className="text-muted-foreground">Membresía mensual</p>
              </div>

              <p className="text-muted-foreground italic mb-8">
                Es una forma sencilla y profunda de sostener tu bienestar, claridad y equilibrio, integrando la práctica espiritual en tu vida cotidiana.
              </p>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                Unirse al Club de Retiro Sagrado
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Experiencias del <span className="text-primary">Retiro Sagrado</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo el Retiro Sagrado ha transformado la vida de participantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {retiroSagradoTestimonials.map((testimonial) => (
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
              Inicia el Nuevo Ciclo desde la <span className="text-primary">Presencia Viva</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cupo limitado para garantizar una experiencia íntima y profunda. Domingo 01 de Febrero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Reservar Mi Lugar
              </Button>
              <Button size="lg" variant="outline">
                Unirse al Club
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
