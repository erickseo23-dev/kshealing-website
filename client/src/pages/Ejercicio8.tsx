import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";
import BookClubForm from "@/components/BookClubForm";

export default function Ejercicio8() {
  const [completed, setCompleted] = useState(false);

  return (
    <EjercicioLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 8. Equilibrar los Cuerpos
          </h1>
          <p className="text-muted-foreground">
            Alinea tus cuerpos físico, mental y emocional en coherencia
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
                El ser humano es un sistema complejo compuesto por tres cuerpos principales: el físico, el mental y el emocional. Cuando estos tres están desalineados, experimentas conflicto interno, confusión y falta de poder.
              </p>
              <p>
                En este ejercicio, te volverás consciente de estos tres componentes del ego y los alinearás entre sí. Esto permite que vivas desde una consciencia mejor integrada y facilita la comunicación directa con tu alma.
              </p>
              <p>
                Cuando tus tres cuerpos están equilibrados, tu poder se multiplica. Tu mente y corazón trabajan juntos, tu cuerpo responde con vitalidad, y tu espíritu puede expresarse plenamente a través de ti.
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
                <span>Observa dónde sientes desalineación en tu sistema</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permite que tu cuerpo se ajuste naturalmente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Siente cómo tu mente, corazón y cuerpo se sincronizan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Permanece en este estado de equilibrio el mayor tiempo posible</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Después, lleva esta coherencia a tu vida diaria</span>
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
              Con tus cuerpos equilibrados, tu capacidad de manifestación se multiplica. Notarás que tus decisiones son más claras, tus acciones más efectivas, y tu vida más coherente.
            </p>
            <p className="text-muted-foreground">
              Practica este ejercicio regularmente para mantener la alineación entre tus tres cuerpos.
            </p>
          </section>
        </article>
      </div>
        </EjercicioLayout>
  );
}
