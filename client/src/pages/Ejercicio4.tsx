import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";

export default function Ejercicio4() {
  const [completed, setCompleted] = useState(false);

  return (
    <EjercicioLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 4. Para Vibrar en Frecuencia Crística
          </h1>
          <p className="text-muted-foreground">
            Sincroniza tu vibración con la frecuencia del Ser Crístico
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
                Todo en el universo vibra. Tu cuerpo, tus emociones, tus pensamientos, todo tiene una frecuencia. La Frecuencia Crística es la vibración fundamental del Ser que recordó quién es realmente.
              </p>
              <p>
                En este ejercicio, elevarás conscientemente tu vibración personal para sincronizarte con la Frecuencia Crística. Cuando vibras en esta frecuencia, tu realidad comienza a reflejar coherencia, paz y poder.
              </p>
              <p>
                Esta es una práctica transformadora que te permite experimentar directamente la diferencia entre vivir desde la limitación y vivir desde la plenitud. Tu cuerpo, mente y espíritu se alinean en una sola frecuencia armónica.
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
              Realiza este ejercicio en un lugar donde puedas estar completamente presente sin distracciones.
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
                <span>Siéntate con la columna recta para facilitar el flujo energético</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Abre tu corazón a la frecuencia Crística</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Siente cómo tu vibración se eleva gradualmente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permanece en esta frecuencia el mayor tiempo posible</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Después, lleva esta vibración a tu día</span>
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
              Una vez que experimentes la Frecuencia Crística, tu percepción de la realidad comenzará a cambiar. Notarás sincronías, conexiones y oportunidades que antes no veías.
            </p>
            <p className="text-muted-foreground">
              Practica regularmente para mantener tu vibración elevada y atraer experiencias que resuenen con esta frecuencia.
            </p>
          </section>
        </article>
      </div>
    </EjercicioLayout>
  );
}
