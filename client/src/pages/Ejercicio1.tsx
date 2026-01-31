import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Zap,
  Lightbulb,
  Heart,
  Compass,
  Wind,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import EjercicioLayout from "@/components/EjercicioLayout";
import BookClubCTA from "@/components/BookClubCTA";
import EjercicioCard from "@/components/EjercicioCard";
import RecommendationItem from "@/components/RecommendationItem";
import ExerciseProgress from "@/components/ExerciseProgress";
import ExerciseNavigation from "@/components/ExerciseNavigation";
import ProgramasSection from "@/components/ProgramasSection";
import EventosSection from "@/components/EventosSection";

export default function Ejercicio1() {
  const [completed, setCompleted] = useState(false);

  const exerciseNumber = 1;
  const totalExercises = 10;

  return (
    <EjercicioLayout>
      {/* Header Mejorado */}
      <div className="bg-gradient-to-r from-blue-900/20 via-slate-700/20 to-slate-600/20 border-b border-border relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container py-12 relative z-10">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-800 to-slate-600 rounded-lg">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-black mb-2">
                EJERCICIO {exerciseNumber}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                Para Conectar con el Campo KS
              </h1>
              <p className="text-lg text-muted-foreground">
                Establece una conexión consciente con el Campo Energético Keiouvos
                Stharef
              </p>
            </div>
          </div>

          {/* Progreso */}
          <ExerciseProgress
            currentExercise={exerciseNumber}
            totalExercises={totalExercises}
            completed={completed}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        {/* Introducción mejorada */}
        <EjercicioCard
          icon={Lightbulb}
          title="Introducción al Ejercicio"
          colorClass="from-blue-800/10 to-slate-600/10"
          variant="intro"
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Este ejercicio te permite establecer una{" "}
              <span className="text-blue-300 font-semibold">
                conexión consciente
              </span>{" "}
              con el Campo Energético KS. A través de esta práctica, activarás tu
              percepción energética y te alinearás con la frecuencia Crística que
              permea el Cuerpo KS.
            </p>
            <p>
              Cuando conectas con el Campo KS, abres un canal de comunicación
              directa con tu verdadera naturaleza energética. Esta conexión es el
              primer paso fundamental en tu viaje de transformación a través de KS
              Healing.
            </p>
            <p>
              Durante este ejercicio, yo iré conectando energéticamente contigo,
              facilitando que tu sistema nervioso se sincronice con la frecuencia
              del Campo KS. Esto puede manifestarse como sensaciones físicas,
              emocionales o simplemente como una sensación de paz y presencia.
            </p>
          </div>
        </EjercicioCard>

        {/* Main Content: Video + Form (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
          {/* Video Section (2 columns on desktop) */}
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                Video del Ejercicio
              </h2>

              {/* Video Container mejorado */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 to-slate-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden border border-border aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 inline-block p-4 bg-primary/20 rounded-full">
                      <Wind className="w-8 h-8 text-primary animate-spin" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      El video será disponible aquí una vez que lo subas a YouTube
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Espacio reservado para: iframe de YouTube privado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0 mt-1">
                    ⏱
                  </span>
                  <span>
                    Procura buscar un momento de calma y soledad para practicar este
                    ejercicio. Esto te permitirá disfrutar más de la experiencia y
                    recibir la transmisión energética con mayor claridad.
                  </span>
                </p>
              </div>
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

        {/* Recomendaciones mejoradas */}
        <EjercicioCard
          icon={Heart}
          title="Recomendaciones para la Práctica"
          colorClass="from-blue-800/10 to-pink-500/10"
          variant="recommendations"
        >
          <ul className="space-y-4">
            <RecommendationItem
              icon={Compass}
              text="Busca un lugar tranquilo donde no seas interrumpido"
              index={0}
            />
            <RecommendationItem
              icon={Wind}
              text="Siéntate o acuéstate en una posición cómoda"
              index={1}
            />
            <RecommendationItem
              icon={Lightbulb}
              text="Practica con apertura y sin expectativas específicas"
              index={2}
            />
            <RecommendationItem
              icon={Zap}
              text="Permite que la energía haga su trabajo naturalmente"
              index={3}
            />
            <RecommendationItem
              icon={Sparkles}
              text="Tómate tiempo después del ejercicio para integrar la experiencia"
              index={4}
            />
          </ul>
        </EjercicioCard>

        {/* Sección de Completación mejorada */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-800/10 to-slate-600/10 rounded-lg border border-emerald-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
                {completed ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    ¡Ejercicio Completado!
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    ¿Completaste el ejercicio?
                  </>
                )}
              </h3>
              <p className="text-muted-foreground">
                {completed
                  ? "Excelente. Tu progreso ha sido registrado. Prepárate para el siguiente ejercicio."
                  : "Marca este ejercicio como completado cuando termines la práctica."}
              </p>
            </div>
            <Button
              onClick={() => setCompleted(!completed)}
              className={`gap-2 whitespace-nowrap ${
                completed
                  ? "bg-gradient-to-r from-blue-800 to-slate-600 hover:from-blue-900 hover:to-emerald-700"
                  : "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              }`}
            >
              <CheckCircle2 size={20} />
              {completed ? "Completado ✓" : "Marcar como Completado"}
            </Button>
          </div>
        </div>

        {/* Próximos Pasos */}
        <section className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <Compass className="w-6 h-6 text-primary" />
            Próximos Pasos
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Una vez que hayas completado este ejercicio al menos una vez, estará
              disponible el siguiente ejercicio en el libro. Cada práctica profundiza
              tu conexión con el Campo KS y prepara tu sistema energético para las
              transmisiones posteriores.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Recuerda: la transformación es un proceso. No hay prisa. Cada paso que
              das en esta dirección es un acto de amor hacia ti mismo.
            </p>
          </div>
        </section>

        {/* Navegación entre ejercicios */}
        <ExerciseNavigation
          currentExercise={exerciseNumber}
          totalExercises={totalExercises}
        />
      </div>

      {/* Programas Section */}
      <ProgramasSection />

      {/* Eventos Section */}
      <EventosSection />
    </EjercicioLayout>
  );
}
