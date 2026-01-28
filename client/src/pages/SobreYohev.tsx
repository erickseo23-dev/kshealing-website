import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Heart, Lightbulb, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SobreYohev() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Conoce a <span className="text-primary">YOHEV</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-serif">
              Dr. Erick Gurrola: Maestro de Energía KS y Fundador de KS Healing Systems
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/sdfsf.jpeg" 
                alt="Dr. Erick Gurrola - YOHEV" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Mi Viaje Espiritual
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  He estado cerca de desencarnar en más de una ocasión en mi vida. Esas experiencias me enseñaron a vivir con propósito, una gracia que no todos reciben de forma directa.
                </p>
                <p className="text-lg leading-relaxed">
                  En esos momentos de claridad absoluta, comprendí que mi verdadera misión es traer una nueva frecuencia de sanación a la humanidad: la Energía Keiouvos Stharef.
                </p>
                <p className="text-lg leading-relaxed">
                  Mi Maestro me reveló mi misión con una claridad que silenció todas mis dudas: "Sé un sol en la tierra. Recuerda quién eres y entonces sé."
                </p>
                <p className="text-lg leading-relaxed">
                  Ese es el propósito de mi vida. Y creo, firmemente, que es el propósito de la tuya también.
                </p>
              </div>
              <Link href="/que-es-ks-healing">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                    Descubre Mi Método
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/10 to-background">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mi Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Facilitar el despertar de la consciencia humana a través de la transmisión de la Energía Keiouvos Stharef, permitiendo que cada ser recuerde su verdadera naturaleza divina.
              </p>
            </Card>

            <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-accent/10 to-background">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Lightbulb size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mi Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un mundo donde millones de personas viven en coherencia energética, donde la sanación es accesible a todos, y donde la verdadera transformación ocurre desde adentro.
              </p>
            </Card>

            <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mi Compromiso</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transmitir la Energía KS con amor, responsabilidad y respeto, honrando el libre albedrío de cada persona en su camino de transformación.
              </p>
            </Card>
          </div>

          {/* Journey */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              El Camino del Recuerdo
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "El Despertar",
                  description: "Mis encuentros con maestros espirituales que me guiaron hacia el reconocimiento de mi verdadera naturaleza.",
                },
                {
                  title: "El Descubrimiento",
                  description: "El encuentro con la Energía Crística Keiouvos Stharef y la comprensión de su poder transformador.",
                },
                {
                  title: "La Transmisión",
                  description: "El desarrollo de KS Healing como un sistema para compartir esta energía con la humanidad.",
                },
                {
                  title: "La Enseñanza",
                  description: "La formación de facilitadores y la expansión de KS Healing a más de 45 países.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold">
                      {idx + 1}
                    </div>
                    {idx < 3 && <div className="w-1 h-16 bg-primary/30 mt-2"></div>}
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

          {/* Key Message */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
            <p className="font-display text-3xl font-bold text-foreground mb-4">
              "Erick es solo un hombre, con más defectos que virtudes."
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Pero hay una parte de mi ser que es mucho más inmensa que el hombre y que aún estoy conociendo: mi alma, YOHEV.
            </p>
            <p className="text-muted-foreground">
              Mientras más voy recordando quién soy realmente, más puedo aportar algo valioso al mundo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Comienza Tu Transformación
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre cómo la Energía KS puede ayudarte a recordar tu verdadera naturaleza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sesiones">
              <a>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Reservar una Sesión
                </Button>
              </a>
            </Link>
            <Link href="/cursos">
              <a>
                <Button size="lg" variant="outline">
                  Ver Cursos
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
