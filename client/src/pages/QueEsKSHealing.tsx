import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Zap, Brain, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function QueEsKSHealing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              ¿Qué es la <span className="text-primary">Energía KS</span>?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-serif">
              Un sistema de sanación energética que utiliza la Energía Crística Keiouvos Stharef para facilitar transformación profunda.
            </p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-20">
            <Card className="p-12 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Definición
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KS Healing es un sistema de sanación energética que utiliza la Energía Crística Keiouvos Stharef para facilitar transformación profunda en los sistemas energéticos humanos. No es una religión, no requiere creencias previas, y funciona respetando el libre albedrío de cada persona.
              </p>
            </Card>
          </div>

          {/* How it Works */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Cómo Funciona
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  El Cuerpo KS
                </h3>
                <p className="text-muted-foreground mb-4">
                  Una estructura energética que se activa en ti a través de la transmisión directa de YOHEV.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Se recibe una sola vez en la vida</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Permanece activo indefinidamente</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Se desarrolla a través de la práctica</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  El Campo KS
                </h3>
                <p className="text-muted-foreground mb-4">
                  Un campo energético que se genera alrededor de ti y que actúa en múltiples niveles.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Reorganiza tu sistema energético</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Facilita la coherencia interna</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Impacta tu entorno</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  La Transmisión
                </h3>
                <p className="text-muted-foreground mb-4">
                  La Energía KS se transmite de forma intencionalizada a través de múltiples canales.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Sesiones privadas con facilitadores</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Cursos y formaciones</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>El libro intencionalizado</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Beneficios de KS Healing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Card key={idx} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={20} className="text-primary" />
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

          {/* Is it for me? */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              ¿Es KS Healing para Mí?
            </h2>

            <Card className="p-12 border-border/50">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">
                      No necesitas experiencia previa
                    </h3>
                    <p className="text-muted-foreground">
                      KS Healing está diseñado para cualquiera, sin importar tu trasfondo espiritual.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">
                      No necesitas creer en nada específico
                    </h3>
                    <p className="text-muted-foreground">
                      La Energía KS funciona independientemente de tus creencias. Solo necesitas estar abierto.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">
                      Funciona para cualquier edad
                    </h3>
                    <p className="text-muted-foreground">
                      Desde adolescentes hasta adultos mayores, KS Healing se adapta a cada persona.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">
                      Respeta tu proceso individual
                    </h3>
                    <p className="text-muted-foreground">
                      Cada persona experimenta KS Healing de forma única, según su propio ritmo y necesidades.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Listo para Experimentar KS Healing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tu momento y comienza tu transformación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sesiones">
              <a>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  Sesión Privada
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
            <Link href="/cursos">
              <a>
                <Button size="lg" variant="outline" gap-2>
                  Explorar Cursos
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
            <Link href="/el-libro">
              <a>
                <Button size="lg" variant="outline" gap-2>
                  Leer el Libro
                  <ArrowRight size={20} />
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
