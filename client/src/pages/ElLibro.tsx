import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, QrCode, Play, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ElLibro() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              El Libro de <span className="text-primary">KS Healing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-serif">
              Un libro intencionalizado con Energía KS que es simultáneamente narrativa, manual técnico, sistema de ejercicios y transmisión energética viva.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Book Cover */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <BookOpen size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">[Portada del Libro]</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Un Portal Multidimensional
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Este no es un libro ordinario. Es un sistema integrado que funciona en múltiples niveles simultáneamente.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">Narrativa Profunda</h3>
                    <p className="text-muted-foreground">La historia personal de YOHEV y su viaje espiritual</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">Manual Técnico</h3>
                    <p className="text-muted-foreground">Explicación completa de KS Healing y cómo funciona</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">Ejercicios Prácticos</h3>
                    <p className="text-muted-foreground">10 ejercicios guiados para activar y desarrollar tu Cuerpo KS</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">Transmisión Viva</h3>
                    <p className="text-muted-foreground">Códigos QR que conectan con videos de transmisión directa de Energía KS</p>
                  </div>
                </div>
              </div>

              <Link href="/el-libro#comprar">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                    Comprar Ahora
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          {/* Chapters */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Los 17 Capítulos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: "I", title: "Introducción a YOHEV", desc: "Mi viaje personal y cómo descubrí mi propósito" },
                { num: "II", title: "El Encuentro Espiritual", desc: "Mi encuentro con el Maestro y la revelación de mi misión" },
                { num: "III", title: "La Sanación Emocional", desc: "Cómo sanar las heridas del pasado y transformar el dolor" },
                { num: "IV", title: "El Sistema KS Healing", desc: "Introducción técnica a KS Healing y sus componentes" },
                { num: "V", title: "La Energía Crística", desc: "Explicación profunda de la Energía Keiouvos Stharef" },
                { num: "VI", title: "El Cuerpo KS", desc: "Estructura y activación del Cuerpo KS" },
                { num: "VII", title: "La Carta de YOHEV", desc: "Mensaje directo a los primeros alumnos" },
                { num: "VIII", title: "La Ciencia de la Energía", desc: "Integración de ciencia y espiritualidad" },
                { num: "IX", title: "La Consciencia Expandida", desc: "Acceso a estados más profundos de presencia" },
                { num: "X", title: "El Campo Electromagnético", desc: "Cómo el Cuerpo KS impacta tu entorno" },
                { num: "XI", title: "La Geometría Divina", desc: "El Toroide y los sistemas energéticos" },
                { num: "XII", title: "Ejercicios Prácticos I", desc: "Primeros 5 ejercicios para activar tu Cuerpo KS" },
                { num: "XIII", title: "Ejercicios Prácticos II", desc: "Ejercicios avanzados para profundizar" },
                { num: "XIV", title: "Integración en la Vida", desc: "Cómo aplicar KS Healing en tu vida cotidiana" },
                { num: "XV", title: "Preguntas Frecuentes", desc: "Respuestas a las preguntas más comunes" },
                { num: "XVI", title: "Testimonios", desc: "Historias de transformación de practicantes" },
                { num: "XVII", title: "El Siguiente Paso", desc: "Tu camino como practicante de KS Healing" },
              ].map((chapter) => (
                <Card key={chapter.num} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-primary">{chapter.num}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {chapter.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Características Especiales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <QrCode size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Códigos QR Escanables
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cada ejercicio incluye un código QR que te conecta directamente con los videos de transmisión.
                </p>
                <p className="text-sm text-primary font-medium">
                  10 códigos QR integrados en el libro
                </p>
              </Card>

              <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Play size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Videos de Transmisión
                </h3>
                <p className="text-muted-foreground mb-4">
                  Recibe la Energía KS directamente de YOHEV a través de videos grabados con intención.
                </p>
                <p className="text-sm text-primary font-medium">
                  Transmisión energética directa
                </p>
              </Card>

              <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Contenido Completo
                </h3>
                <p className="text-muted-foreground mb-4">
                  Más de 300 páginas de contenido profundo, educativo y transformador.
                </p>
                <p className="text-sm text-primary font-medium">
                  Narrativa + Técnica + Práctica
                </p>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Lo Que Dicen los Lectores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Este libro cambió mi vida. No es solo información, es una transmisión viva que te transforma mientras lees.",
                  author: "María García",
                  location: "México",
                },
                {
                  quote: "Los ejercicios con los códigos QR son increíbles. Siento la energía directamente de YOHEV.",
                  author: "Juan López",
                  location: "España",
                },
                {
                  quote: "Finalmente entiendo quién soy. Este libro es el manual de instrucciones que siempre necesité.",
                  author: "Ana Martínez",
                  location: "Argentina",
                },
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-6 border-border/50">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Purchase Section */}
          <div id="comprar" className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Obtén Tu Copia Ahora
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="font-display font-bold text-foreground mb-4">Versión Impresa</h3>
                <p className="text-muted-foreground mb-4">
                  Portada de tapa dura, papel de calidad premium, códigos QR funcionales.
                </p>
                <div className="text-3xl font-display font-bold text-primary mb-4">
                  $45 USD
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Comprar en Amazon
                </Button>
              </Card>

              <Card className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="font-display font-bold text-foreground mb-4">Versión Digital</h3>
                <p className="text-muted-foreground mb-4">
                  PDF interactivo con enlaces directos a los videos de transmisión.
                </p>
                <div className="text-3xl font-display font-bold text-primary mb-4">
                  $25 USD
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Descargar Ahora
                </Button>
              </Card>
            </div>

            <div className="text-center pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                ¿No estás seguro? Descarga una muestra gratuita
              </p>
              <Button variant="outline" className="gap-2">
                <Download size={20} />
                Descargar Introducción Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            El libro es el primer paso. Los ejercicios y videos te guiarán hacia la experiencia directa de la Energía KS.
          </p>
          <Link href="/el-libro#comprar">
            <a>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                Obtener el Libro
                <ArrowRight size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
