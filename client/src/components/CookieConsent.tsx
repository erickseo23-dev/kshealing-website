import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Content */}
          <div className="flex-1">
            <h3 className="font-display font-bold text-foreground mb-2">
              Configuración de Cookies
            </h3>
            <p className="text-sm text-muted-foreground mb-3 md:mb-0">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas nuestro uso de cookies. 
              <Link href="/politica-cookies">
                <a className="text-primary hover:text-primary/80 transition-colors ml-1 inline-flex items-center gap-1">
                  Más información
                  <ChevronRight size={14} />
                </a>
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={handleReject}
              className="flex-1 md:flex-none"
            >
              Rechazar
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-white"
            >
              Aceptar
            </Button>
            <button
              onClick={handleReject}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
