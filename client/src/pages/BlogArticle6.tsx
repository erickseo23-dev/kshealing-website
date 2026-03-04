import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Heart, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';

export default function BlogArticle6() {
  return (
    <>
      <SEO
        title="El Niño Interior: Cómo Sanar Patrones Emocionales Profundos"
        description="Descubre cómo sanar tu niño interior y transformar patrones emocionales limitantes. La sanación del niño interior es la clave para relaciones auténticas y libertad emocional."
        keywords="niño interior, sanación emocional, patrones emocionales, trauma infantil, sanación energética, KS Healing"
        canonicalUrl="https://kshealing.com/blog/article-6"
      />
      <BlogArticle6Content />
    </>
  );
}

function BlogArticle6Content() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <ContentComponent />
    </div>
  );
}

function ContentComponent() {
  useEffect(() => {
    // Actualizar metadatos de Open Graph dinámicamente
    const title = 'El Niño Interior: Cómo Sanar Patrones Emocionales Profundos';
    const description = 'Descubre cómo sanar tu niño interior y transformar patrones emocionales limitantes. La sanación del niño interior es la clave para relaciones auténticas y libertad emocional.';
    const image = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/blog-inner-child-healing-FaNGXam9Ft2BWiX5ecw3nz.webp';
    const url = window.location.href;

    // Actualizar og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Actualizar og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Actualizar og:image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', image);

    // Actualizar og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', url);

    // Actualizar og:type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'article');

    // Actualizar twitter:title
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('property', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', title);

    // Actualizar twitter:description
    let twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('property', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', description);

    // Actualizar twitter:image
    let twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('property', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', image);

    // Actualizar page title
    document.title = title + ' | KS Healing';
  }, []);

  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'El Niño Interior: Cómo Sanar Patrones Emocionales Profundos';
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}&quote=${encodeURIComponent(articleTitle)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(articleTitle + ' ' + articleUrl)}`
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
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
            El Niño Interior: Cómo Sanar Patrones Emocionales Profundos
          </h1>
          <p className="text-muted-foreground">
            Publicado el 1 de Marzo de 2026 • Lectura: 11 minutos
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 flex-grow">
        <article className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden h-96">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/blog-inner-child-healing-FaNGXam9Ft2BWiX5ecw3nz.webp" 
              alt="Sanación del niño interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Share Buttons */}
          <div className="mb-8 flex items-center gap-4 flex-wrap pb-6 border-b border-border">
            <span className="text-sm font-semibold text-muted-foreground">Compartir:</span>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors" title="Compartir en Facebook">
              <Facebook size={18} className="text-primary" />
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors" title="Compartir en Twitter">
              <Twitter size={18} className="text-primary" />
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors" title="Compartir en LinkedIn">
              <Linkedin size={18} className="text-primary" />
            </a>
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors" title="Compartir en WhatsApp">
              <MessageCircle size={18} className="text-primary" />
            </a>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dentro de cada adulto vive un niño. No es una metáfora poética, sino una realidad energética profunda. Este niño interior contiene tus heridas originales, tus miedos primarios, tus creencias limitantes sobre ti mismo y el mundo. Y más importante aún: contiene tu capacidad de sentir, crear, amar sin condiciones y vivir con autenticidad. La sanación del niño interior es uno de los trabajos más transformadores que puedes hacer en tu vida.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              ¿Qué es el Niño Interior?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El niño interior no es simplemente un concepto psicológico. Es una estructura energética real que existe dentro de tu Cuerpo KS. Representa la parte de ti que se formó durante los primeros años de vida, cuando tu consciencia era más abierta, más vulnerable, más conectada con la verdad de tu ser.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Durante la infancia, experimentaste eventos que moldearon tu percepción de la realidad. Algunos fueron amorosos y nutritivos. Otros fueron traumáticos, negligentes o abusivos. Tu niño interior absorbió todos estos eventos como verdades sobre ti mismo, sobre los demás y sobre cómo funciona el mundo. Estas creencias se convirtieron en patrones energéticos que aún controlan gran parte de tu vida adulta.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              Los Patrones del Niño Herido
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cuando el niño interior ha sido herido, desarrolla patrones de protección. Estos patrones fueron inteligentes en su momento: te permitieron sobrevivir a situaciones difíciles. Pero en la edad adulta, estos mismos patrones se convierten en prisiones emocionales.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Algunos de los patrones más comunes del niño herido incluyen:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Necesidad de validación externa:</strong> Buscas constantemente la aprobación de otros porque tu niño interior no recibió validación incondicional</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Miedo al abandono:</strong> Toleras comportamientos inaceptables en relaciones porque tu niño interior teme quedarse solo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Perfeccionismo:</strong> Trabajas obsesivamente para demostrar tu valor, porque tu niño interior cree que solo eres digno si eres perfecto</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Dificultad para establecer límites:</strong> Dices "sí" a todo porque tu niño interior fue entrenado a complacer a otros</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Desconexión emocional:</strong> Reprimes tus sentimientos porque fue peligroso sentir en tu infancia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Sabotaje autodestructivo:</strong> Saboteas tu propio éxito porque tu niño interior no cree que mereces ser feliz</span>
              </li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              Cómo el Niño Interior Afecta tus Relaciones
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tus relaciones son el espejo más claro de tu niño interior. Las personas que atraes, los patrones que repites, la forma en que respondes al conflicto: todo esto es una expresión de tu niño herido buscando sanar a través de la relación.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Si tu niño interior fue abandonado, atraerás parejas que te abandonen. Si fue controlado, atraerás parejas controladoras. Si fue criticado, atraerás parejas críticas. No es coincidencia: es tu niño interior buscando desesperadamente la oportunidad de sanar la herida original.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Pero aquí está la verdad: otra persona no puede sanar tu niño interior. Solo tú puedes hacerlo. Y cuando lo hagas, tus relaciones se transformarán completamente. Atraerás personas que realmente te amen. Crearás conexiones auténticas basadas en la salud emocional, no en la necesidad o el trauma.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              La Sanación a Través de KS Healing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La sanación tradicional del niño interior a menudo requiere revivir el trauma, procesar el dolor, y trabajar a través de años de patrones. Es valioso, pero es lento y a menudo retraumatizante.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              KS Healing ofrece un camino diferente. A través de la Energía KS, puedes sanar tu niño interior a nivel cuántico, sin necesidad de revivir el trauma. La Energía KS accede directamente a la estructura energética donde se almacenan estas heridas y las transforma desde la raíz.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Cuando tu niño interior es sanado a través de KS Healing, algo extraordinario sucede:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Recuperas tu capacidad natural de sentir alegría, curiosidad y asombro</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Tus relaciones se profundizan porque puedes amar sin miedo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Tu creatividad se despierta porque ya no temes ser visto</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Tu cuerpo se relaja porque la tensión del trauma se disuelve</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Tu poder personal emerge porque ya no necesitas validación externa</span>
              </li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              El Retiro "El Niño que Habita en Ti"
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Reconociendo la importancia crítica de esta sanación, hemos creado el Retiro Sagrado "El Niño que Habita en Ti". Este es un espacio sagrado donde tu niño interior puede finalmente sentirse seguro, visto y amado.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Durante este retiro de 4 horas, trabajaremos directamente con tu niño interior. Utilizaremos la Energía KS para acceder a las heridas originales, para sanarlas, y para reintegrar la sabiduría y la inocencia de tu niño en tu ser adulto. Al final, no solo habrás sanado tu pasado: habrás recuperado una parte esencial de ti mismo.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              El Comienzo de Tu Verdadera Libertad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La sanación del niño interior no es un lujo. Es una necesidad fundamental para vivir una vida auténtica, amorosa y libre. Es el trabajo que permite que todos los demás trabajos de transformación sean posibles. Es la base sobre la cual construyes una vida verdaderamente tuya.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Tu niño interior ha estado esperando durante años por esta oportunidad. Ha estado esperando que alguien lo vea, lo ame, lo sane. Ese alguien eres tú. Y con la ayuda de la Energía KS, finalmente puedes darle lo que siempre necesitó: seguridad, amor incondicional, y la libertad de ser completamente él mismo.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <Heart className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Sana tu Niño Interior
                </h3>
                <p className="text-muted-foreground mb-4">
                  Descubre cómo la sanación del niño interior es la clave para relaciones auténticas y libertad emocional. Únete al Retiro "El Niño que Habita en Ti" y transforma tu vida desde la raíz.
                </p>
                <Link href="/retiro-sagrado">
                  <a>
                    <Button className="bg-primary hover:bg-primary/90">
                      Conocer el Retiro
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
                  <p className="text-sm text-muted-foreground mt-1">La transformación comienza a nivel energético</p>
                </a>
              </Link>
              <Link href="/blog/article-2">
                <a className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <p className="font-semibold text-foreground">Los 7 Chakras y el Chakra Timo</p>
                  <p className="text-sm text-muted-foreground mt-1">La puerta al corazón energético</p>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
