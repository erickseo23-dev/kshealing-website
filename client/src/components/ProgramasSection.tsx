import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProgramasSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Programas de <span className="text-primary">KS Healing Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Cada programa está diseñado para un paso diferente en tu viaje de transformación y evolución espiritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "KS Healing",
              description: "La base fundamental de la sanación energética. Aprende a trabajar directamente con la Energía Keiouvos Stharef para transformar tu campo vibracional y recordar tu verdadera naturaleza divina.",
              image: "/images/ks-healing-program.png",
              color: "from-primary/20 to-primary/5",
              href: "/ks-healing",
            },
            {
              title: "D.A.R.T.",
              description: "Deep Archetypal Renewal Therapy. Trabaja en la raíz de tus patrones internos para reemplazar arquetipos negativos por arquetipos positivos y balanceados.",
              image: "/images/dart-program.png",
              color: "from-accent/20 to-accent/5",
              href: "/dart",
            },
            {
              title: "Genética Sagrada",
              description: "Accede a la sabiduría ancestral de tu linaje. Activa tu ADN espiritual y reconecta con el poder hereditario de tu familia.",
              image: "/images/genetica-sagrada-program.png",
              color: "from-primary/20 to-accent/10",
              href: "/genetica-sagrada",
            },
            {
              title: "Retiro Sagrado",
              description: "Una experiencia inmersiva de transformación profunda. Retiros presenciales donde experimentarás transmisiones intensivas de Energía KS en comunidad.",
              image: "/images/retiro-sagrado-program.png",
              color: "from-accent/20 to-primary/10",
              href: "/retiro-sagrado",
            },
          ].map((program, idx) => (
            <Card key={idx} className="overflow-hidden border-border/50 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className={`p-8 bg-gradient-to-br ${program.color} flex flex-col flex-grow`}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {program.description}
                </p>
                <Link href={program.href}>
                  <a>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      Conocer Más
                    </Button>
                  </a>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* SVG Divider - Bottom of Programs Section */}
      <svg className="w-full" style={{height: '100px', backgroundColor: '#ffffff'}} viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#000" opacity="1"/>
      </svg>
    </section>
  );
}
