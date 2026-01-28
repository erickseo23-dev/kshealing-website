import { ReactNode, useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import RegisterModal from "@/components/RegisterModal";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface ProtectedEjercicioProps {
  children: ReactNode;
  ejercicioNumber: number;
}

/**
 * Componente que protege las páginas de ejercicios
 * Si el usuario no está autenticado, muestra un modal de registro
 */
export default function ProtectedEjercicio({
  children,
  ejercicioNumber,
}: ProtectedEjercicioProps) {
  const { user, loading, isAuthenticated } = useAuth();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Mostrar modal si no está autenticado
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setShowRegisterModal(true);
    } else if (!loading && isAuthenticated) {
      // Cerrar modal cuando el usuario se autentica
      setShowRegisterModal(false);
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md w-full mx-auto px-4 text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Lock className="text-primary" size={32} />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-2">
              Acceso Restringido
            </h2>

            <p className="text-muted-foreground mb-6">
              Para acceder al Ejercicio {ejercicioNumber}, necesitas registrarte primero.
              Es rápido, gratuito y seguro.
            </p>

            <Button
              onClick={() => setShowRegisterModal(true)}
              size="lg"
              className="w-full"
            >
              Registrarse Ahora
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Al registrarte, también recibirás acceso a todos los ejercicios del libro
              y contenido exclusivo en tu email.
            </p>
          </div>
        </div>

        <RegisterModal
          isOpen={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
        />
      </>
    );
  }

  // Usuario autenticado - mostrar contenido
  return <>{children}</>;
}
