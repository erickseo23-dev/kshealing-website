import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TerminosServicio() {
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
            Términos de Servicio
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de Términos</h2>
              <p>
                Al acceder y utilizar el sitio web de KS Healing Systems, aceptas estar vinculado por estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso Permitido</h2>
              <p>
                Aceptas utilizar este sitio solo para propósitos legales y de manera que no infrinja los derechos de otros ni restrinja su disfrute del sitio. Conducta prohibida incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Acosar o causar angustia o inconveniente a cualquier persona</li>
                <li>Transmitir contenido obsceno u ofensivo</li>
                <li>Interrumpir el flujo normal de diálogo dentro de nuestro sitio</li>
                <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido en este sitio, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de KS Healing Systems o sus proveedores de contenido y está protegido por leyes internacionales de derechos de autor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitación de Responsabilidad</h2>
              <p>
                KS Healing Systems no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos que resulten del uso o la imposibilidad de usar el sitio, incluso si hemos sido informados de la posibilidad de tales daños.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Descargo de Responsabilidad</h2>
              <p>
                El sitio se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. No garantizamos que el sitio sea libre de errores, virus o componentes dañinos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Enlaces a Terceros</h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, precisión o prácticas de estos sitios externos. El acceso a estos sitios es bajo tu propio riesgo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificación de Términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Terminación</h2>
              <p>
                Podemos terminar o suspender tu acceso al sitio en cualquier momento, sin previo aviso, por cualquier razón, incluyendo si creemos que has violado estos Términos de Servicio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Ley Aplicable</h2>
              <p>
                Estos Términos de Servicio se rigen por las leyes de México y te sometes a la jurisdicción exclusiva de los tribunales ubicados en México.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contacto</h2>
              <p>
                Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:
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
