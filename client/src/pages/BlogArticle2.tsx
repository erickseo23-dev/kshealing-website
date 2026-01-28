import { Link } from 'wouter';
import { ArrowLeft, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogArticle2() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container py-8">
          <Link href="/blog">
            <a className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4 w-fit">
              <ArrowLeft size={20} />
              Volver al Blog
            </a>
          </Link>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Los 7 Chakras y el Chakra Timo: La Puerta al Corazón Energético
          </h1>
          <p className="text-muted-foreground">
            Publicado el 12 de enero de 2026 • Lectura: 10 minutos
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12">
        <article className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden h-96">
            <img 
              src="/images/blog-chakras.png" 
              alt="Los 7 Chakras y el Chakra Timo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              El sistema de chakras ha sido parte del conocimiento esotérico durante miles de años. Sin embargo, en KS Healing, llevamos esta comprensión a un nuevo nivel. No solo trabajamos con los 7 chakras tradicionales, sino que enfatizamos especialmente el Chakra Timo, el centro energético que muchas tradiciones han pasado por alto.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              Los 7 Chakras Tradicionales
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Antes de explorar el Chakra Timo, es importante entender los 7 chakras principales que forman la columna vertebral del sistema energético humano:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1. Chakra Raíz (Muladhara)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ubicado en la base de la columna vertebral, el Chakra Raíz es tu conexión con la tierra y la seguridad. Cuando está equilibrado, te sientes estable, seguro y enraizado en la realidad. Cuando está bloqueado, experimentas miedo y ansiedad.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2. Chakra Sacro (Svadhisthana)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Este chakra reside en el bajo abdomen y es el centro de la creatividad, la sexualidad y la emoción. Un Chakra Sacro abierto permite que la energía creativa fluya libremente.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              3. Chakra del Plexo Solar (Manipura)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ubicado en el abdomen superior, este chakra es tu centro de poder personal y voluntad. Controla tu autoestima, confianza y capacidad de manifestación.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              4. Chakra del Corazón (Anahata)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El Chakra del Corazón es el centro del amor, la compasión y la conexión. Es el puente entre los chakras inferiores (físicos) y superiores (espirituales).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              5. Chakra de la Garganta (Vishuddha)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Este chakra controla la comunicación, la expresión y la verdad. Un Chakra de la Garganta bloqueado te impide expresar tu verdadera voz.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              6. Chakra del Tercer Ojo (Ajna)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ubicado entre las cejas, el Tercer Ojo es tu centro de intuición, visión y percepción espiritual. Cuando está abierto, accedes a conocimiento más allá de lo físico.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              7. Chakra Corona (Sahasrara)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En la parte superior de la cabeza, el Chakra Corona es tu conexión con lo divino y la consciencia universal. Representa la iluminación y la unidad con todo.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              El Chakra Timo: El Octavo Chakra Olvidado
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Mientras que la mayoría de las tradiciones se enfocaban en los 7 chakras principales, en KS Healing reconocemos la existencia y la importancia crítica del Chakra Timo, ubicado en el timo (una glándula en el pecho).
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              El Chakra Timo es el centro de la <strong>verdad intencionalizada</strong>. Es donde tu intención se convierte en realidad. Mientras que el Chakra del Corazón es el centro del amor, el Chakra Timo es el centro del <em>poder creativo</em> que surge del amor.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Características del Chakra Timo
            </h3>

            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Manifestación:</strong> Es el chakra que convierte tus intenciones en realidad física</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Verdad:</strong> Conecta con tu verdad más profunda y auténtica</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Poder:</strong> Es el centro de tu poder creativo y personal</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Coherencia:</strong> Alinea todos los otros chakras en una sola frecuencia</span>
              </li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              ¿Por Qué el Chakra Timo Ha Sido Olvidado?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Históricamente, el Chakra Timo fue suprimido. En muchas culturas antiguas, se entendía que el verdadero poder humano residía en la capacidad de manifestar intención a través del timo. Sin embargo, sistemas de control externo encontraron beneficioso mantener a la humanidad desconectada de este poder.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              En KS Healing, reactivamos el Chakra Timo, permitiendo que recuperes tu poder creativo innato. Cuando el Chakra Timo está activo, tu vida cambia fundamentalmente.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              Cómo Activar Tu Chakra Timo
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Existen varias formas de activar y fortalecer tu Chakra Timo:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1. Meditación Intencionalizada
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Enfoca tu atención en el centro de tu pecho, donde reside el timo. Visualiza una luz brillante activándose. Establece una intención clara para tu vida.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2. Transmisión de Energía KS
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La transmisión de Energía KS está específicamente diseñada para activar el Chakra Timo. A través de una sesión de KS Healing, tu timo se despierta y comienza a irradiar su poder creativo.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              3. Afirmaciones Poderosas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Repite afirmaciones como: "Mi Chakra Timo está completamente activado", "Mi intención se manifiesta en realidad", "Soy un creador consciente de mi realidad".
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              La Integración de los Chakras
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              El verdadero poder no viene de un solo chakra, sino de la integración armónica de todos ellos. Cuando tu Chakra Timo está activado y alineado con los otros chakras, experimentas una coherencia energética que te permite manifestar tu verdadero potencial.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <Heart className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Activa Tu Chakra Timo Hoy
                </h3>
                <p className="text-muted-foreground mb-4">
                  Descubre el poder de tu Chakra Timo a través de una sesión de KS Healing. Reserva tu consulta gratuita ahora.
                </p>
                <Link href="/contacto">
                  <a>
                    <Button className="bg-primary hover:bg-primary/90">
                      Reservar Sesión
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              Artículos Relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/blog/article-1">
                <a className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <p className="font-semibold text-foreground">Cómo la Energía KS Transforma tu Realidad</p>
                  <p className="text-sm text-muted-foreground mt-1">Descubre la transformación profunda</p>
                </a>
              </Link>
              <Link href="/blog/article-4">
                <a className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <p className="font-semibold text-foreground">Sintropía vs Entropía</p>
                  <p className="text-sm text-muted-foreground mt-1">Por qué tu cuerpo necesita regeneración</p>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
