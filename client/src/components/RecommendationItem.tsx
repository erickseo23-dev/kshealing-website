import { LucideIcon } from "lucide-react";

interface RecommendationItemProps {
  icon: LucideIcon;
  text: string;
  colorClass?: string;
  index?: number;
}

/**
 * Componente para mostrar una recomendación con icono y color
 */
export default function RecommendationItem({
  icon: Icon,
  text,
  colorClass = "text-primary",
  index = 0,
}: RecommendationItemProps) {
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-green-500 to-teal-500",
    "from-indigo-500 to-purple-500",
  ];

  const selectedColor = colors[index % colors.length];

  return (
    <li className="flex gap-4 items-start group">
      <div
        className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${selectedColor} mt-1 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={20} className="text-white" />
      </div>
      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {text}
      </span>
    </li>
  );
}
