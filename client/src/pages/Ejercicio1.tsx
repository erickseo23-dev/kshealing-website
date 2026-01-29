import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";
import BookClubCTA from "@/components/BookClubCTA";

export default function Ejercicio1() {
  const [completed, setCompleted] = useState(false);

  return (
    <EjercicioLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Ejercicio 1. Para Conectar con el Campo KS
          </h1>
          <p className="text-muted-foreground">
            Establece una conexión consciente con el Campo Energético Keiouvos Stharef
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-12 p-8 bg-card rounded-lg border border-border">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Introducción al Ejercicio
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Este ejercicio te permite establecer una conexión consciente con el Campo Energético KS. A través de esta práctica, activarás tu percepción energética y te alinearás con la frecuencia Crística que permea el Cuerpo KS.
            </p>
            <p>
              Cuando conectas con el Campo KS, abres un canal de comunicación directa con tu verdadera naturaleza energética. Esta conexión es el primer paso fundamental en tu viaje de transformación a través de KS Healing.
            </p>
            <p>
              Durante este ejercicio, yo iré conectando energéticamente contigo, facilitando que tu sistema nervioso se sincronice con la frecuencia del Campo KS. Esto puede manifestarse como sensaciones físicas, emocionales o simplemente como una sensación de paz y presencia.
            </p>
          </div>
        </section>

        {/* Main Content: Video + Form (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Video Section (2 columns on desktop) */}
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Video del Ejercicio
              </h2>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/gMDvBjPulQ8"
                  title="Ejercicio 1: Conectar con el Campo KS"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                />
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
              <span>Busca un lugar tranquilo donde no seas interrumpido</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Siéntate o acuéstate en una posición cómoda</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Practica con apertura y sin expectativas específicas</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Permite que la energía haga su trabajo naturalmente</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Tómate tiempo después del ejercicio para integrar la experiencia</span>
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
            Una vez que hayas completado este ejercicio al menos una vez, estará disponible el siguiente ejercicio en el libro. Cada práctica profundiza tu conexión con el Campo KS y prepara tu sistema energético para las transmisiones posteriores.
          </p>
          <p className="text-muted-foreground">
            Recuerda: la transformación es un proceso. No hay prisa. Cada paso que das en esta dirección es un acto de amor hacia ti mismo.
          </p>
        </section>
      </div>
    </EjercicioLayout>
  );
}
