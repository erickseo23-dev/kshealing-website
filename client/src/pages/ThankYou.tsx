import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-green-50 p-6">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              ¡Gracias por registrar tu copia!
            </h1>
            <p className="text-lg text-muted-foreground">
              Tu libro ha sido registrado correctamente en nuestro sistema.
            </p>
          </div>

          {/* Details */}
          <div className="bg-card rounded-lg border border-border p-8 space-y-4">
            <p className="text-foreground font-semibold">
              A partir de ahora recibirás:
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">
                  Más ejercicios KS especiales exclusivos para propietarios del libro
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">
                  Contenido adicional y prácticas avanzadas en tu correo
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">
                  Acceso a nuestra comunidad de práctica y transformación
                </span>
              </li>
            </ul>
          </div>

          {/* Confirmation Message */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
            <p className="text-blue-900">
              Revisa tu correo electrónico en los próximos minutos para confirmar tu registro y acceder a los primeros materiales exclusivos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Volver al Inicio
              </Button>
            </Link>
            <Link href="/ejercicio-1-conectar-campo-ks">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Explorar Ejercicios
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
