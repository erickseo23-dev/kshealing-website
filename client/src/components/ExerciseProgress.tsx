interface ExerciseProgressProps {
  currentExercise: number;
  totalExercises?: number;
  completed?: boolean;
}

/**
 * Componente para mostrar el progreso del ejercicio actual
 */
export default function ExerciseProgress({
  currentExercise,
  totalExercises = 10,
  completed = false,
}: ExerciseProgressProps) {
  const progressPercentage = (currentExercise / totalExercises) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Progreso
        </span>
        <span className="text-sm font-bold text-primary">
          Ejercicio {currentExercise} de {totalExercises}
        </span>
      </div>

      {/* Barra de progreso */}
      <div className="w-full h-2 bg-background rounded-full overflow-hidden border border-border">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            completed
              ? "bg-gradient-to-r from-green-500 to-emerald-500"
              : "bg-gradient-to-r from-primary to-accent"
          }`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Indicadores de ejercicios */}
      <div className="flex gap-1 mt-4">
        {Array.from({ length: totalExercises }).map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              index < currentExercise
                ? "bg-gradient-to-r from-primary to-accent"
                : index === currentExercise - 1
                  ? "bg-primary"
                  : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
