import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

interface ExerciseNavigationProps {
  currentExercise: number;
  totalExercises?: number;
  onPrevious?: () => void;
  onNext?: () => void;
  showBookLink?: boolean;
}

/**
 * Componente para navegar entre ejercicios
 */
export default function ExerciseNavigation({
  currentExercise,
  totalExercises = 10,
  onPrevious,
  onNext,
  showBookLink = true,
}: ExerciseNavigationProps) {
  const hasPrevious = currentExercise > 1;
  const hasNext = currentExercise < totalExercises;

  return (
    <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-border">
      {/* Botón Anterior */}
      <Button
        onClick={onPrevious}
        disabled={!hasPrevious}
        variant="outline"
        className="gap-2"
      >
        <ChevronLeft size={18} />
        Anterior
      </Button>

      {/* Botón Volver al Libro */}
      {showBookLink && (
        <Link href="/el-libro">
          <a>
            <Button variant="ghost" className="gap-2">
              <BookOpen size={18} />
              Volver al Libro
            </Button>
          </a>
        </Link>
      )}

      {/* Botón Siguiente */}
      <Button
        onClick={onNext}
        disabled={!hasNext}
        className="gap-2 bg-primary hover:bg-primary/90"
      >
        Siguiente
        <ChevronRight size={18} />
      </Button>
    </div>
  );
}
