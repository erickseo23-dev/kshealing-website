import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Mail, Lock, User } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const { register, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLoginMode) {
        // Flujo de login
        if (!email || !password) {
          toast.error("Por favor completa email y contraseña");
          setLoading(false);
          return;
        }

        await login(email, password);
        toast.success("¡Bienvenido de vuelta a KS Healing!");
      } else {
        // Flujo de registro
        if (!email || !password || !nombre) {
          toast.error("Por favor completa todos los campos requeridos");
          setLoading(false);
          return;
        }

        if (password.length < 6) {
          toast.error("La contraseña debe tener al menos 6 caracteres");
          setLoading(false);
          return;
        }

        await register(email, password, nombre, apellido);
        toast.success("¡Registro exitoso! Bienvenido a KS Healing");
      }

      // Limpiar formulario
      setEmail("");
      setPassword("");
      setNombre("");
      setApellido("");
      setIsLoginMode(false);

      // Cerrar modal
      onClose();
    } catch (error: any) {
      console.error("Auth error:", error);
      toast.error(error.message || "Error en la autenticación. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setEmail("");
    setPassword("");
    setNombre("");
    setApellido("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            {isLoginMode ? "Iniciar Sesión" : "Acceso a los Ejercicios"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            {isLoginMode
              ? "Ingresa tu email y contraseña para acceder a los ejercicios"
              : "Regístrate para acceder a los 10 ejercicios del libro KS Healing"}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre - Solo mostrar en registro */}
          {!isLoginMode && (
            <>
              <div>
                <label htmlFor="nombre" className="text-sm font-medium">
                  Nombre *
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="pl-10"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Apellido */}
              <div>
                <label htmlFor="apellido" className="text-sm font-medium">
                  Apellido
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input
                    id="apellido"
                    type="text"
                    placeholder="Tu apellido (opcional)"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="pl-10"
                    disabled={loading}
                  />
                </div>
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email *
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                disabled={loading}
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña *
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <Input
                id="password"
                type="password"
                placeholder={isLoginMode ? "Tu contraseña" : "Mínimo 6 caracteres"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                disabled={loading}
              />
            </div>
          </div>

          {/* Información - Solo mostrar en registro */}
          {!isLoginMode && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm">
              <p className="text-foreground">
                Al registrarte, también crearemos tu cuenta en nuestro CRM para enviarte
                contenido exclusivo y secuencias de transformación.
              </p>
            </div>
          )}

          {/* Botones */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1"
            >
              {loading
                ? isLoginMode
                  ? "Iniciando sesión..."
                  : "Registrando..."
                : isLoginMode
                ? "Iniciar Sesión"
                : "Registrarse"}
            </Button>
          </div>

          {/* Toggle entre login y registro */}
          <div className="text-center pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              {isLoginMode ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
              <button
                type="button"
                onClick={toggleMode}
                className="text-primary font-semibold hover:underline"
                disabled={loading}
              >
                {isLoginMode ? "Regístrate aquí" : "Inicia sesión aquí"}
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
