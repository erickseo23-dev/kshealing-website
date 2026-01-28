import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";
import BookClubForm from "@/components/BookClubForm";

export default function Ejercicio5() {
  const [completed, setCompleted] = useState(false);

  return (
    <EjercicioLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 5. Expulsar la Entropía: Limpieza Energética
          </h1>
          <p className="text-muted-foreground">
            Libera la energía estancada y regenera tu sistema
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
                La entropía es la tendencia natural de los sistemas hacia el desorden y la degradación. En tu cuerpo energético, la entropía se acumula como bloqueos, estancamiento y energía muerta que ralentiza tu vibración.
              </p>
              <p>
                Este ejercicio te permite activar procesos sintropicos en tu sistema, revirtiendo la degradación energética y regenerando tu vitalidad. Es una limpieza profunda que prepara tu cuerpo para recibir energía fresca y vital.
              </p>
              <p>
                Cuando expulsas la entropía, liberas patrones antiguos, traumas almacenados y bloqueos que han estado limitándote. Tu cuerpo se siente más ligero, más vivo, más coherente.
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
                  Únete al Book Club
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Regístrate para acceder a materiales adicionales y conectar con nuestra comunidad.
                </p>
                <BookClubForm />
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
                <span>Realiza este ejercicio en un lugar donde puedas moverte libremente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permite que tu cuerpo se mueva naturalmente si lo necesita</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Visualiza la energía estancada siendo expulsada</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Respira profundamente para facilitar la liberación</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Después, bebe agua para anclar la limpieza</span>
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
              Después de esta limpieza, tu cuerpo estará más receptivo a las transmisiones posteriores. Puedes repetir este ejercicio regularmente, especialmente cuando sientas que necesitas una renovación energética.
            </p>
            <p className="text-muted-foreground">
              Observa cómo tu energía se siente más fresca y vital en los días siguientes.
            </p>
          </section>
        </article>
      </div>
      </EjercicioLayout>
  );
}
