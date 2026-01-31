import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducción</h2>
              <p>
                KS Healing Systems ("nosotros", "nuestro" o "la Empresa") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos tu información personal cuando visitas nuestro sitio web.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Información que Recopilamos</h2>
              <p>Recopilamos información de varias formas:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Información que proporcionas directamente:</strong> Nombre, correo electrónico, teléfono y otros datos cuando te registras, completas formularios o contactas con nosotros.</li>
                <li><strong>Información automática:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y datos de referencia mediante cookies y tecnologías similares.</li>
                <li><strong>Información de terceros:</strong> Datos de plataformas de redes sociales si conectas tu cuenta con nosotros.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cómo Utilizamos tu Información</h2>
              <p>Utilizamos tu información para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Procesar transacciones y enviar confirmaciones</li>
                <li>Responder a tus consultas y solicitudes</li>
                <li>Enviar comunicaciones de marketing (con tu consentimiento)</li>
                <li>Analizar el uso del sitio para mejorar la experiencia del usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartir tu Información</h2>
              <p>
                No vendemos tu información personal. Podemos compartir tu información con terceros en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Proveedores de servicios que nos ayudan a operar nuestro sitio</li>
                <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
                <li>Con tu consentimiento explícito</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Seguridad de tu Información</h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet es 100% seguro.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies y Tecnologías de Seguimiento</h2>
              <p>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Puedes controlar las cookies a través de la configuración de tu navegador. Para más información, consulta nuestra Política de Cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Tus Derechos</h2>
              <p>
                Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, contáctanos en contacto@kshealing.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Retención de Datos</h2>
              <p>
                Retenemos tu información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p><strong>Email:</strong> contacto@kshealing.com</p>
                <p><strong>Teléfono:</strong> +52 (311) 393-1660</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
