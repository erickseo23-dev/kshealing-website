import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";
import BookClubCTA from "@/components/BookClubCTA";

export default function Ejercicio3() {
  const [completed, setCompleted] = useState(false);

  return (
    <EjercicioLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 3. Para Recibir Sanación Energética
          </h1>
          <p className="text-muted-foreground">
            Abre los canales de tu cuerpo para recibir la transmisión de sanación
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <article className="max-w-3xl mx-auto">
          {/* Introduction */}
          <section className="mb-12 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Introducción al Ejercicio
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                La sanación energética es un proceso de restauración y equilibrio. En este ejercicio, abrirás conscientemente los canales de tu cuerpo para recibir la transmisión de Energía KS en su forma sanadora.
              </p>
              <p>
                La sanación no solo ocurre a nivel físico. Funciona en todos los niveles: emocional, mental y espiritual. Cuando recibes esta transmisión, tu sistema energético completo se reorganiza hacia el equilibrio y la coherencia.
              </p>
              <p>
                Durante esta práctica, puedes experimentar liberación emocional, claridad mental, relajación profunda, o simplemente una sensación de paz y renovación. Cada persona experimenta la sanación de manera única.
              </p>
            </div>
          </section>        {/* Main Content: Video + Form (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Video Section (2 columns on desktop) */}
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Video del Ejercicio
              </h2>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden border border-border aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    El video será disponible aquí una vez que lo subas a YouTube
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Espacio reservado para: iframe de YouTube privado
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Procura buscar un momento de calma y soledad para practicar este ejercicio. Esto te permitirá disfrutar más de la experiencia y recibir la transmisión energética con mayor claridad.
              </p>
            </section>
          </div>

          {/* Kajabi Form (1 column on desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-4">

                </h3>
                <p className="text-sm text-muted-foreground mb-6">

                </p>
                <BookClubCTA />
              </div>
            </div>
          </div>
        </div>

          {/* Instructions */}
          <section className="mb-12 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Recomendaciones para la Práctica
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Acuéstate en una posición cómoda si es posible</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Abre tu intención a recibir sanación</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permite que cualquier emoción que surja fluya naturalmente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>No juzgues tu experiencia, simplemente observa</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Tómate tiempo después para integrar la sanación</span>
              </li>
            </ul>
          </section>

          {/* Completion Button */}
          <section className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {completed ? "¡Ejercicio Completado!" : "¿Completaste el ejercicio?"}
                </h3>
                <p className="text-muted-foreground">
                  {completed
                    ? "Excelente. Tu progreso ha sido registrado."
                    : "Marca este ejercicio como completado cuando termines la práctica."}
                </p>
              </div>
              <Button
                onClick={() => setCompleted(!completed)}
                className={`gap-2 ${
                  completed
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                <CheckCircle2 size={20} />
                {completed ? "Completado" : "Marcar como Completado"}
              </Button>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              Próximos Pasos
            </h3>
            <p className="text-muted-foreground mb-4">
              La sanación es un proceso continuo. Puedes repetir este ejercicio tantas veces como lo necesites. Cada práctica profundiza el proceso de restauración en tu cuerpo energético.
            </p>
            <p className="text-muted-foreground">
              Observa cómo te sientes en los días siguientes. La sanación a menudo continúa trabajando después de que termina el ejercicio.
            </p>
          </section>
        </article>
      </div>
      </EjercicioLayout>
  );
}
