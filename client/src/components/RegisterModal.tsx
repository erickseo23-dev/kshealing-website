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
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validar campos
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

      // Registrar usuario
      await register(email, password, nombre, apellido);

      toast.success("¡Registro exitoso! Bienvenido a KS Healing");

      // Limpiar formulario
      setEmail("");
      setPassword("");
      setNombre("");
      setApellido("");

      // Cerrar modal
      onClose();
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.message || "Error al registrarse. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            Acceso a los Ejercicios
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Regístrate para acceder a los 10 ejercicios del libro KS Healing
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
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
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                disabled={loading}
              />
            </div>
          </div>

          {/* Información */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm">
            <p className="text-foreground">
              Al registrarte, también crearemos tu cuenta en nuestro CRM para enviarte
              contenido exclusivo y secuencias de transformación.
            </p>
          </div>

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
              {loading ? "Registrando..." : "Registrarse"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
