import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft size={20} />
              Volver al inicio
            </a>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Política de Cookies
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: 31 de enero de 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a recordar información sobre ti y mejorar tu experiencia de navegación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Tipos de Cookies que Utilizamos</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Cookies Esenciales</h3>
                  <p>
                    Necesarias para el funcionamiento básico del sitio, como mantener tu sesión activa y procesar transacciones.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Cookies de Rendimiento</h3>
                  <p>
                    Nos ayudan a entender cómo utilizas nuestro sitio, qué páginas son más populares y dónde ocurren los errores.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Cookies de Funcionalidad</h3>
                  <p>
                    Recuerdan tus preferencias y configuraciones para personalizar tu experiencia.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Cookies de Marketing</h3>
                  <p>
                    Utilizadas para rastrear tu actividad y mostrarte anuncios relevantes en otros sitios web.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cómo Controlamos las Cookies</h2>
              <p>
                Puedes controlar y/o eliminar cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Ver qué cookies están almacenadas en tu dispositivo</li>
                <li>Eliminar cookies individuales o todas las cookies</li>
                <li>Bloquear cookies de terceros</li>
                <li>Recibir una advertencia antes de que se almacene una cookie</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies de Terceros</h2>
              <p>
                Nuestro sitio puede contener cookies de terceros de servicios como Google Analytics. Estos terceros tienen sus propias políticas de privacidad y no estamos bajo su control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Consentimiento</h2>
              <p>
                Al continuar utilizando nuestro sitio sin cambiar la configuración de cookies de tu navegador, aceptas nuestro uso de cookies. Si no aceptas el uso de cookies, puedes deshabilitarlas en tu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta Política de Cookies ocasionalmente. Te recomendamos revisar esta página periódicamente para estar informado sobre cómo utilizamos las cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta Política de Cookies, contáctanos en:
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p><strong>Email:</strong> contacto@kshealing.com</p>
                <p><strong>Teléfono:</strong> +52 (311) 393-1660</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm">
                <strong>Nota:</strong> Esta política es un documento general. Para obtener información específica sobre cómo tu navegador maneja las cookies, consulta la documentación de tu navegador o visita <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">www.allaboutcookies.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
