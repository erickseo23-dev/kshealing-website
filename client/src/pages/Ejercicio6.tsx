import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";
import BookClubCTA from "@/components/BookClubCTA";

export default function Ejercicio6() {
  const [completed, setCompleted] = useState(false);

  return (
    <EjercicioLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 6. Proyectar Intención
          </h1>
          <p className="text-muted-foreground">
            Canaliza tu poder creativo a través de la intención consciente
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
                La intención es el poder creativo fundamental del universo. Cuando proyectas intención conscientemente, alineas tu voluntad con la frecuencia de lo que deseas manifestar.
              </p>
              <p>
                En este ejercicio, aprenderás a proyectar intención de manera coherente y poderosa. No se trata de fuerza bruta, sino de alineación. Cuando tu intención está clara y alineada con tu propósito, el universo conspira a tu favor.
              </p>
              <p>
                Este es un ejercicio fundamental para cualquiera que desee ser co-creador consciente de su realidad. A través de la proyección de intención, activas tu poder de manifestación.
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
                <span>Ten clara tu intención antes de comenzar</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Siéntate con la columna recta para facilitar el flujo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Visualiza tu intención manifestándose</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Siente la emoción de ya haberlo logrado</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Proyecta tu intención con confianza y fe</span>
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
              Después de proyectar tu intención, suelta el apego al resultado. Confía en que el universo está trabajando para manifestarlo. La manifestación ocurre cuando sueltas la necesidad de controlar el cómo.
            </p>
            <p className="text-muted-foreground">
              Practica este ejercicio regularmente para fortalecer tu poder de manifestación.
            </p>
          </section>
        </article>
      </div>
      </EjercicioLayout>
  );
}
