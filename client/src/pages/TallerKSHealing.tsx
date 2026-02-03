import { Link } from 'wouter';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Sparkles, Heart, Zap, Gift, Wind, Quote } from 'lucide-react';
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

      {/* Hero Section - Enhanced */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/cJ0NsjiTEgFuWB5HAN1kHs/sandbox/BwJg7sRQS8Nv81PIK5Z10X-img-1_1770115019000_na1fn_dGFsbGVyLWhlcm8tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0owTnNqaVRFZ0Z1V0I1SEFOMWtIcy9zYW5kYm94L0J3Smc3c1JRUzhOdjgxUElLNVoxMFgtaW1nLTFfMTc3MDExNTAxOTAwMF9uYTFmbl9kR0ZzYkdWeUxXaGxjbTh0WW1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eV2WE-fDok~5ZOfSnSqMrWsmBAJc4iWs0jqEY8C1BPf0VeCJb5-ctOSEF0RXly9cBL4zGNYQvgH8DDyh-nhn~tLUUjgOO-jYyospJYP85~IfqbUuQkianXfmW3ggudEZ-k3Ib6fkVwqTLXnMdAas2mA6uLwIRa1KNoI2IWdnmk7VFrRVqyE75CxzT-tJUgFxc0KfZe6bVHc4YKRF6ZZQsc2vIgMCOkI8m9D0u80VyKQfC8uI7y4d2tIu3Vw0xhwoMpM7j8JtcHznKufT6DVcK5Tj5Z3CVIZ94YSNymMtnuCMHN6sJrysbqogrnTl2dP1g34IWlB416wGdV5qMj-WBQ__)',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl py-20">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-300">
            <Sparkles size={18} className="text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">✨ Experiencia Vivencial Gratuita</span>
          </div>

          {/* Facilitator name */}
          <div className="mb-6 text-lg text-white font-bold tracking-widest uppercase opacity-95">
            Impartido por <span className="text-primary">YOHEV</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            <span className="block mb-2">KS Healing</span>
            <span className="block">
              <span className="text-white">y la</span><br />
              <span className="text-primary drop-shadow-lg">Consciencia Crística</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md">
            Una <strong className="text-white">experiencia energética profunda</strong> de 3 horas para conectar con la Energía KS, despertar tu sensibilidad y preparar tu campo para la transformación.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-bold rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105">
              Inscríbete al Taller
              <ArrowRight size={24} className="ml-3" />
            </Button>
          </div>

          {/* Event details card */}
          <div className="bg-white/12 backdrop-blur-lg border border-white/25 rounded-xl p-6 max-w-2xl mx-auto shadow-xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white/95 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span className="font-semibold">15 de febrero</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span className="font-semibold">10:00 - 13:00 CDMX (17:00 - 20:00 España)</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">💻</span>
                <span className="font-semibold">Online en vivo + Grabación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Facilitator */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-8">Quién Guía Este Taller</h2>
              <div className="h-1 w-20 bg-primary mb-8" />
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong>YOHEV</strong> es el creador y director del sistema de enseñanza <strong>KS Healing Systems</strong>. Con profundo conocimiento en consciencia expandida y energía crística, YOHEV facilita experiencias transformadoras que trascienden lo teórico.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Su enfoque integra rigor espiritual con claridad pedagógica. En este taller, no solo enseña conceptos, sino que crea un espacio seguro para que experimentes directamente la Energía KS.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                <p className="text-lg text-foreground italic">
                  "Sé un sol en la tierra. Recuerda quién eres y entonces sé."
                </p>
                <p className="text-primary font-semibold mt-3">— YOHEV</p>
              </blockquote>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-2xl" />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/yozelzMfRVwNZHTM.png"
                  alt="YOHEV"
                  className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Workshop Exists */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por Qué Existe Este Taller?</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-12 border border-primary/20">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Muchas personas hablan de energía, consciencia y sanación… pero pocas logran <strong>sostener esos estados en el cuerpo</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              KS Healing no busca elevarte fuera de ti. <strong>Busca ordenarte por dentro</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este taller es el umbral previo a la Certificación: un espacio para <strong>sentir, reconocer y decidir desde la consciencia</strong> — no desde la expectativa.
            </p>
          </div>
        </div>
      </section>

      {/* Based on the Book */}
      <section className="py-24 bg-card/50 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-8">Basado en el Libro KS Healing</h2>
              <div className="h-1 w-20 bg-primary mb-8" />
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Todo el contenido de este taller está inspirado y estructurado a partir del libro <strong>KS Healing</strong>, traducido a una experiencia vivencial, guiada y accesible.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                No necesitas haber leído el libro. El taller es completamente autónomo y diseñado incluso para quienes nunca han trabajado con energía antes.
              </p>
              
              <Link href="/el-libro">
                <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Conocer más sobre el libro
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>

            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-xl blur-2xl" />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/GTnsaEwxAStNPnrW.png"
                  alt="Libro KS Healing"
                  className="relative w-full max-w-xs rounded-xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Exercises */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Los 4 Ejercicios Vivenciales</h2>
            <p className="text-lg text-muted-foreground">
              Experiencias guiadas diseñadas para abrir tu percepción sin forzar procesos
            </p>
            <div className="h-1 w-20 bg-primary mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: 'Ejercicio 1: Conexión con el Campo KS',
                description: 'Aprenderás a reconocer el Campo KS como una energía que no empuja, no invade y no exige, sino que ordena y estabiliza. No se trata de imaginar energía, sino de reconocer un campo que ya existe.'
              },
              {
                icon: Wind,
                title: 'Ejercicio 2: Activación de los Chakras de las Manos',
                description: 'Prepararás tus manos como canales perceptivos, despertando la sensibilidad necesaria para el trabajo energético consciente (sin transmitir KS Healing formalmente aún).'
              },
              {
                icon: Gift,
                title: 'Ejercicio 3: Recepción de un Regalo Divino',
                description: 'Un ejercicio profundo de conexión interna, donde permitirás que la Energía KS te entregue exactamente lo que puedes sostener hoy. Cada experiencia es distinta. Todas son legítimas.'
              },
              {
                icon: Heart,
                title: 'Ejercicio 4: Activación del Timo',
                description: 'Afinarás el centro de coherencia del pecho, dejando tu sistema preparado para recibir el Cuerpo KS en la Certificación, sin activarlo todavía. Este ejercicio no completa el proceso. Lo deja listo.'
              }
            ].map((exercise, index) => {
              const IconComponent = exercise.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-card to-card/50 rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold leading-snug">{exercise.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exercise.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Take Away */}
      <section className="py-24 bg-card/50 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Qué Te Llevarás al Finalizar</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Para Quién Es Este Taller?</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/30">
            <p className="text-lg text-foreground mb-8 font-semibold">
              Este taller es para ti si:
            </p>
            <div className="space-y-6">
              {[
                'Sientes el llamado a trabajar con consciencia y energía',
                'Buscas algo más profundo que técnicas sueltas',
                'Quieres sentir antes de decidir',
                'Estás explorando la Certificación en KS Healing, pero deseas estar seguro'
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card/50 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-lg text-foreground">{item.question}</h3>
                  <span className={`text-primary transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`}>
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-5xl font-bold mb-8">¿Sientes el Llamado?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Si algo en ti reconoce este espacio, este taller es para ti. <br />
            <strong>Es completamente gratuito y abierto a quienes sientan el llamado.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg">
              Inscríbete al Taller
              <ArrowRight size={24} className="ml-3" />
            </Button>
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Después del Taller</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Quienes lo sientan con claridad podrán acceder a la <strong>Certificación Internacional en KS Healing – Nivel Básico</strong>, donde se realiza la entrega directa del Cuerpo KS y la formación formal como practicante.
            </p>
            <Link href="/ks-healing">
              <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Conocer más sobre la Certificación
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
