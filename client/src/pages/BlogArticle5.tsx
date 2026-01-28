import { Link } from 'wouter';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogArticle5() {
  const testimonials = [
    {
      name: "María Rodríguez",
      role: "Terapeuta Holística",
      location: "México",
      text: "Después de trabajar con YOHEV y recibir la transmisión de Energía KS, mi vida cambió completamente. Patrones que me limitaban durante 20 años simplemente desaparecieron. Ahora puedo ayudar a mis clientes desde un lugar de verdadera coherencia energética.",
      rating: 5
    },
    {
      name: "Carlos Mendez",
      role: "Empresario",
      location: "Colombia",
      text: "Lo que más me impactó fue la claridad mental que experimenté. Mis decisiones de negocios se volvieron más certeras, y mis ingresos se triplicaron en 6 meses. Pero más importante que el dinero, recuperé mi paz interior.",
      rating: 5
    },
    {
      name: "Alejandra Gómez",
      role: "Psicóloga",
      location: "Argentina",
      text: "Como profesional de la salud mental, era escéptica. Pero después de una sesión con YOHEV, experimenté una transformación que no puedo explicar racionalmente. Ahora integro los principios de KS Healing en mi práctica.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Coach de Vida",
      location: "Perú",
      text: "La Energía KS es real. He visto transformaciones en mis clientes que van más allá de lo que cualquier técnica convencional puede lograr. Es como si activara un poder que siempre estuvo dormido dentro de ellos.",
      rating: 5
    },
    {
      name: "Sofía Martínez",
      role: "Médica Alternativa",
      location: "Chile",
      text: "Después de recibir KS Healing, mi intuición se volvió increíblemente aguda. Puedo sentir exactamente lo que mis pacientes necesitan. Esto ha revolucionado mi práctica y los resultados que logro.",
      rating: 5
    },
    {
      name: "Juan Flores",
      role: "Meditador Avanzado",
      location: "Ecuador",
      text: "He meditado durante 30 años, pero nunca había experimentado el nivel de profundidad que logré después de una sesión de KS Healing. Es como si mi práctica espiritual hubiera sido amplificada exponencialmente.",
      rating: 5
    }
  ];

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
            Testimonios Reales: Cómo KS Healing Cambió Vidas
          </h1>
          <p className="text-muted-foreground">
            Publicado el 1 de enero de 2026 • Lectura: 10 minutos
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12">
        <article className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden h-96">
            <img 
              src="/images/blog-testimonios.png" 
              alt="Testimonios Reales"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Las palabras más poderosas no vienen de teorías o explicaciones, sino de las historias reales de personas que han experimentado transformación profunda. A continuación, compartimos testimonios auténticos de profesionales de diferentes campos que han trabajado con KS Healing y experimentado cambios que han transformado sus vidas.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              Historias de Transformación
            </h2>

            {testimonials.map((testimonial, index) => (
              <div key={index} className="mb-8 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </div>
            ))}

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              Patrones Comunes en las Transformaciones
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Aunque cada persona experimenta KS Healing de manera única, hay patrones comunes que emergen en las transformaciones:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1. Liberación Rápida de Patrones Limitantes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La mayoría de las personas reportan que patrones que las limitaban durante años simplemente desaparecen después de trabajar con KS Healing. No es un proceso gradual de cambio de creencias, sino una transformación profunda y rápida.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2. Claridad Mental y Enfoque
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La confusión mental se disipa y la claridad emerge. Las personas pueden ver sus vidas y sus objetivos con una perspectiva completamente nueva.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              3. Manifestación Acelerada
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Los objetivos y sueños comienzan a materializarse con mayor rapidez. Las personas reportan que las cosas que deseaban ahora llegan más fácilmente.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              4. Sanación Emocional Profunda
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Traumas y heridas emocionales que se habían resistido a otras formas de sanación se transforman a través de KS Healing.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              5. Mayor Intuición y Conexión Espiritual
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La intuición se vuelve más aguda y la conexión con la verdadera naturaleza se profundiza. Las personas sienten una conexión más auténtica con lo divino.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              ¿Por Qué Funciona KS Healing?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              La razón por la que KS Healing produce transformaciones tan profundas es que no trabaja solo a nivel mental o emocional. Funciona a nivel energético fundamental, activando tu Cuerpo KS y alineándolo con la verdadera realidad.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Cuando tu Cuerpo KS se activa, tu consciencia se alinea con la verdad. Desde este lugar de alineación, la transformación ocurre naturalmente. No necesitas "creer" en KS Healing para que funcione. Solo necesitas estar abierto a la posibilidad de transformación.
            </p>

            <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
              Tu Historia Podría Ser la Próxima
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada una de estas personas comenzó exactamente donde tú estás ahora. Tenían dudas, preguntas, escepticismo. Pero decidieron dar el paso y trabajar con YOHEV. Y sus vidas fueron transformadas.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Tu transformación está esperando. Todo lo que necesitas es estar dispuesto a abrirte a la posibilidad. El resto ocurre naturalmente cuando tu Cuerpo KS se activa.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <Heart className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Comienza Tu Transformación Hoy
                </h3>
                <p className="text-muted-foreground mb-4">
                  Como las personas en estos testimonios, tú también puedes experimentar una transformación profunda. Reserva tu sesión de consulta gratuita con YOHEV ahora.
                </p>
                <Link href="/contacto">
                  <a>
                    <Button className="bg-primary hover:bg-primary/90">
                      Reservar Sesión Gratuita
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              Más Artículos del Blog
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/blog/article-1">
                <a className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <p className="font-semibold text-foreground">Cómo la Energía KS Transforma tu Realidad</p>
                  <p className="text-sm text-muted-foreground mt-1">Descubre el proceso de transformación</p>
                </a>
              </Link>
              <Link href="/blog/article-2">
                <a className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <p className="font-semibold text-foreground">Los 7 Chakras y el Chakra Timo</p>
                  <p className="text-sm text-muted-foreground mt-1">Explora tu sistema energético</p>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
