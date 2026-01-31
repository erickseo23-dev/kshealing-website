import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface EjercicioCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children: ReactNode;
  variant?: "intro" | "recommendations" | "completion" | "default";
  colorClass?: string;
}

/**
 * Componente reutilizable para tarjetas de ejercicios con diseño mejorado
 * Soporta múltiples variantes visuales
 */
export default function EjercicioCard({
  icon: Icon,
  title,
  description,
  children,
  variant = "default",
  colorClass = "from-primary/10 to-accent/10",
}: EjercicioCardProps) {
  const baseClasses =
    "rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20";

  const variantClasses = {
    intro: `p-8 bg-gradient-to-br ${colorClass}`,
    recommendations: `p-8 bg-card`,
    completion: `p-8 bg-gradient-to-r ${colorClass}`,
    default: `p-8 bg-card`,
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {Icon && (
        <div className="mb-4 flex items-center gap-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground">
            {title}
          </h2>
        </div>
      )}

      {!Icon && (
        <h2 className="text-2xl font-display font-bold text-foreground mb-4">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}

      {children}
    </div>
  );
}
