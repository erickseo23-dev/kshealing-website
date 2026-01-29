import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";
import BookClubCTA from "@/components/BookClubCTA";

export default function Ejercicio10() {
  const [completed, setCompleted] = useState(false);

  return (
    <EjercicioLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 10. Entrenar el Timo
          </h1>
          <p className="text-muted-foreground">
            Fortalece el puente entre tu ego y tu alma
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
                El chakra timo es el centro energético que actúa como puente entre el ego y el alma. Es el punto de encuentro donde tu verdadera naturaleza divina puede asentarse plenamente en tu sistema humano.
              </p>
              <p>
                Cuando el timo está activo, estable y coherente, la presencia del alma puede manifestarse con mayor plenitud. Un timo fortalecido es fundamental para poder recibir la actualización del Cuerpo KS, ya que es en este centro donde dicha estructura energética se activa y se despliega.
              </p>
              <p>
                Este es el ejercicio final de la serie. Al completarlo, habrás preparado tu sistema completo para una transformación profunda y sostenida. Tu timo entrenado será tu brújula hacia la verdad y tu conexión permanente con tu alma.
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
                <span>Coloca tu mano en el centro de tu pecho, sobre el timo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Siente el pulso de tu alma en este centro</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permite que el timo se abra y se expanda</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Visualiza una luz dorada activando este chakra</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permanece en este estado de apertura el mayor tiempo posible</span>
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
                    ? "¡Felicidades! Has completado la serie de 10 ejercicios."
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
              ¡Felicidades! Has completado la serie de 10 ejercicios del libro KS Healing. Tu sistema energético ha sido preparado, limpiado, equilibrado y activado.
            </p>
            <p className="text-muted-foreground mb-4">
              Ahora que tu timo está entrenado, puedes practicar estos ejercicios regularmente para mantener tu conexión con el alma y continuar tu transformación.
            </p>
            <p className="text-muted-foreground">
              Recuerda: la transformación es un viaje continuo. Cada práctica profundiza tu conexión con la Energía KS y expande tu capacidad de vivir desde tu verdadera naturaleza divina.
            </p>
          </section>
        </article>
      </div>
        </EjercicioLayout>
  );
}
