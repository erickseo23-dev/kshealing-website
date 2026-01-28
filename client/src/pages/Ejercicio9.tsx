import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Ejercicio9() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 9. Limpiar la Energía de la Culpa
          </h1>
          <p className="text-muted-foreground">
            Libera una de las cargas energéticas más profundas del sistema humano
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12">
        <article className="max-w-3xl mx-auto">
          {/* Introduction */}
          <section className="mb-12 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Introducción al Ejercicio
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                La culpa no es solo una emoción; es una frecuencia que se aloja en los centros energéticos y bloquea el flujo natural de la energía vital. La culpa afecta tu expresión, tu creatividad, tu amor, tu voluntad y tu conexión espiritual.
              </p>
              <p>
                Muchas personas cargan con culpa por años, incluso décadas, sin darse cuenta de cómo esta energía está limitando su vida. La culpa es una prisión invisible que construimos con nuestras propias manos.
              </p>
              <p>
                En este ejercicio, liberarás energéticamente la culpa almacenada en tus siete chakras principales y en el chakra timo. Permitirás que la energía vuelva a fluir con naturalidad, restaurando tu poder y tu paz.
              </p>
            </div>
          </section>

          {/* Video Section */}
          <section className="mb-12">
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
              Este ejercicio es profundamente liberador. Prepárate para soltar lo que ya no te sirve.
            </p>
          </section>

          {/* Instructions */}
          <section className="mb-12 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Recomendaciones para la Práctica
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Sé honesto contigo mismo sobre dónde sientes culpa</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permite que cualquier emoción que surja fluya libremente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Visualiza la culpa siendo liberada de tu sistema</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Reemplaza la culpa con compasión hacia ti mismo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Después, practica el auto-perdón consciente</span>
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
              Después de liberar la culpa, notarás un cambio profundo en tu energía. Te sentirás más ligero, más libre, más capaz de expresarte auténticamente.
            </p>
            <p className="text-muted-foreground">
              Si la culpa vuelve a aparecer, repite este ejercicio. La liberación es un proceso continuo de auto-compasión y perdón.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
