import { ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

interface EjercicioLayoutProps {
  children: ReactNode;
}

/**
 * Layout personalizado para páginas de ejercicios
 * - Mantiene la navegación principal del sitio (HOME, BLOG, EVENTOS, etc.)
 * - Oculta la navegación entre ejercicios
 * - Permite acceso a todas las páginas del sitio web
 */
export default function EjercicioLayout({ children }: EjercicioLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header con navegación restringida */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          {/* Logo y Home */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">KS</span>
              </div>
              <span className="font-display font-bold text-foreground hidden sm:inline">
                KS Healing
              </span>
            </a>
          </Link>

          {/* Navegación principal - Solo acceso a secciones del sitio, NO a otros ejercicios */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                HOME
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                BLOG
              </a>
            </Link>
            <Link href="/eventos">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                EVENTOS
              </a>
            </Link>
            <Link href="/sobre-yohev">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                SOBRE YOHEV
              </a>
            </Link>
            <Link href="/el-libro">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                EL LIBRO
              </a>
            </Link>
          </nav>

          {/* Botón de Home para mobile */}
          <Link href="/">
            <a className="md:hidden">
              <Button variant="ghost" size="icon">
                <Home size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </header>

      {/* Contenido del ejercicio */}
      <main className="flex-1">{children}</main>

      {/* Footer con restricción */}
      <footer className="border-t border-border bg-background/50 mt-12">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Acceso a secciones principales */}
            <div>
              <h3 className="font-display font-bold text-foreground mb-4">
                Explorar
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      Inicio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/eventos">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      Eventos
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Información */}
            <div>
              <h3 className="font-display font-bold text-foreground mb-4">
                Conocer
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre-yohev">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      Sobre YOHEV
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/que-es-ks-healing">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      ¿Qué es KS Healing?
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/el-libro">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      El Libro
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="font-display font-bold text-foreground mb-4">
                Recursos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/testimonios">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      Testimonios
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/recursos">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      Recursos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/directorio">
                    <a className="text-muted-foreground hover:text-foreground transition-colors">
                      Directorio
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 KS Healing. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs">
              Este espacio es solo para practicantes registrados. Respeta el
              propósito de cada ejercicio.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
