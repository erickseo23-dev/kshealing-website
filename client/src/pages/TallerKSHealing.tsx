import { Link } from 'wouter';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Sparkles, Heart, Zap, Gift, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TallerKSHealing() {
  useEffect(() => {
    // Actualizar metadatos de Open Graph dinámicamente
    const title = 'Taller Online Gratuito: KS Healing y la Consciencia Crística';
    const description = 'Una experiencia vivencial de 3 horas para conectar con la Energía KS, despertar tu sensibilidad energética y preparar tu campo para la transformación. Impartido por Yohev.';
    const image = 'https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/L3Wxg719Y8VC42GgkGkSpW-img-1_1770113174000_na1fn_dGFsbGVyLWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80';
    const url = window.location.href;

    const updateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:image', image);
    updateMeta('og:url', url);
    updateMeta('og:type', 'website');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    document.title = title + ' | KS Healing';
  }, []);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: '¿Es realmente gratuito?',
      answer: 'Sí, el taller es completamente gratuito. No hay cargos ocultos ni intentos de venta durante la sesión. Es una oportunidad genuina para experimentar la Energía KS y decidir conscientemente si deseas continuar con la Certificación.'
    },
    {
      question: '¿Necesito experiencia previa con energía?',
      answer: 'No. El taller está diseñado para personas que nunca han trabajado con energía. Los ejercicios son accesibles y guiados cuidadosamente. Lo único que necesitas es apertura y disposición a sentir.'
    },
    {
      question: '¿Qué pasa si no siento nada?',
      answer: 'Todas las experiencias son legítimas. Algunas personas sienten sensaciones físicas claras, otras perciben cambios sutiles en su estado interno, y otras simplemente notan mayor claridad. No hay una forma "correcta" de experimentar. Lo importante es tu propia vivencia.'
    },
    {
      question: '¿Cuál es la diferencia entre este taller y la Certificación?',
      answer: 'Este taller es preparatorio. Aquí reconoces la Energía KS y preparas tu campo. En la Certificación se realiza la entrega formal del Cuerpo KS y la formación como practicante. El taller te permite decidir conscientemente si estás listo.'
    },
    {
      question: '¿Puedo acceder después si no puedo en vivo?',
      answer: 'Sí. El taller se graba y tendrás acceso a la versión grabada si no puedes asistir en directo. Aunque la experiencia en vivo es más inmediata, la grabación mantiene toda la potencia de la transmisión.'
    },
    {
      question: '¿Qué necesito para participar?',
      answer: 'Solo necesitas una conexión a internet estable, un espacio tranquilo donde puedas estar cómodo durante 3 horas, y disposición a participar activamente en los ejercicios. Ropa cómoda es recomendable.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/L3Wxg719Y8VC42GgkGkSpW-img-1_1770113174000_na1fn_dGFsbGVyLWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-white">Experiencia Vivencial Gratuita</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            KS Healing y la<br />
            <span className="text-primary">Consciencia Crística</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Una experiencia energética profunda de 3 horas para conectar con la Energía KS, despertar tu sensibilidad y preparar tu campo para la transformación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              Acceder al Taller Gratuito
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Más Información
            </Button>
          </div>

          <p className="text-sm text-white/70">
            📅 <strong>15 de febrero, 2026</strong> | ⏱️ 10:00 - 13:00 CDMX (17:00 - 20:00 España) | 💻 Online en vivo + Grabación
          </p>
        </div>
      </section>

      {/* Why This Workshop Exists */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por Qué Existe Este Taller?</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Muchas personas hablan de energía, consciencia y sanación… pero pocas logran <strong>sostener esos estados en el cuerpo</strong>.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                KS Healing no busca elevarte fuera de ti. <strong>Busca ordenarte por dentro</strong>.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Este taller es el umbral previo a la Certificación: un espacio para <strong>sentir, reconocer y decidir desde la consciencia</strong> — no desde la expectativa.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Based on the Book */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Basado en el Libro KS Healing</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Todo el contenido de este taller está inspirado y estructurado a partir del libro <strong>KS Healing</strong>, traducido a una experiencia vivencial, guiada y accesible.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                No necesitas haber leído el libro. El taller es completamente autónomo y diseñado incluso para quienes nunca han trabajado con energía antes.
              </p>
              <p className="text-primary font-semibold">
                Impartido por: <span className="text-foreground">Yohev</span>
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/ks-healing-book.png"
                alt="Libro KS Healing"
                className="w-48 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Four Exercises */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Los 4 Ejercicios Vivenciales</h2>
            <p className="text-lg text-muted-foreground">
              Experiencias guiadas diseñadas para abrir tu percepción sin forzar procesos
            </p>
            <div className="h-1 w-20 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Exercise 1 */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ejercicio 1: Conexión con el Campo KS</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aprenderás a reconocer el Campo KS como una energía que no empuja, no invade y no exige, sino que <strong>ordena y estabiliza</strong>. No se trata de imaginar energía, sino de reconocer un campo que ya existe.
              </p>
            </div>

            {/* Exercise 2 */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wind className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ejercicio 2: Activación de los Chakras de las Manos</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Prepararás tus manos como canales perceptivos, despertando la sensibilidad necesaria para el trabajo energético consciente (sin transmitir KS Healing formalmente aún).
              </p>
            </div>

            {/* Exercise 3 */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Gift className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ejercicio 3: Recepción de un Regalo Divino</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Un ejercicio profundo de conexión interna, donde permitirás que la Energía KS te entregue exactamente lo que puedes sostener hoy. <strong>Cada experiencia es distinta. Todas son legítimas.</strong>
              </p>
            </div>

            {/* Exercise 4 */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ejercicio 4: Activación del Timo</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Afinarás el centro de coherencia del pecho, dejando tu sistema preparado para recibir el Cuerpo KS en la Certificación, sin activarlo todavía. <strong>Este ejercicio no completa el proceso. Lo deja listo.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Take Away */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Qué Te Llevarás al Finalizar</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Una experiencia real con la Energía KS',
              'Comprensión clara de qué es (y qué no es) KS Healing',
              'Sensibilidad energética despertada de forma segura',
              'Mayor coherencia interna y presencia',
              'Claridad para decidir conscientemente si deseas certificarte',
              'Acceso a la grabación del taller para revisión posterior'
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Para Quién Es Este Taller?</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="bg-primary/5 rounded-lg p-10 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Este taller es para ti si:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold text-xl">✓</span>
                <span className="text-lg text-muted-foreground">Sientes el llamado a trabajar con consciencia y energía</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold text-xl">✓</span>
                <span className="text-lg text-muted-foreground">Buscas algo más profundo que técnicas sueltas</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold text-xl">✓</span>
                <span className="text-lg text-muted-foreground">Quieres sentir antes de decidir</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold text-xl">✓</span>
                <span className="text-lg text-muted-foreground">Estás explorando la Certificación en KS Healing, pero deseas estar seguro</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-lg text-foreground">{item.question}</h3>
                  <span className={`text-primary transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 bg-background/50 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">¿Sientes el Llamado?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Si algo en ti reconoce este espacio, este taller es para ti. <br />
            <strong>Es completamente gratuito y abierto a quienes sientan el llamado.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              Acceder al Taller Gratuito
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Después del Taller</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Quienes lo sientan con claridad podrán acceder a la <strong>Certificación Internacional en KS Healing – Nivel Básico</strong>, donde se realiza la entrega directa del Cuerpo KS y la formación formal como practicante.
            </p>
            <Link href="/cursos-y-programas">
              <a className="text-primary font-semibold hover:underline">
                Conocer más sobre la Certificación →
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
