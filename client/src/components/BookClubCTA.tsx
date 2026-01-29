import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BookClubCTA() {
  return (
    <div className="w-full space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-display font-bold text-foreground">
          Registra tu copia del libro
        </h3>
        <p className="text-sm text-muted-foreground">
          Para recibir <span className="font-semibold">MÁS EJERCICIOS KS ESPECIALES</span> y
          <br />
          contenido adicional en tu correo.
        </p>
      </div>

      <Button
        onClick={() => window.open("https://www.i3cdigital.com/registra-tu-libro", "_blank")}
        className="w-full bg-primary hover:bg-primary/90 text-base py-6 gap-2"
      >
        Registrar Libro
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}
