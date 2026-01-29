import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, QrCode, Play, Download, CheckCircle2, Zap } from "lucide-react";
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
            <p className="text-lg text-primary font-semibold">
              18 Capítulos • 234 Páginas • 10 Códigos QR con Videos de Transmisión
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/images/book-cover.png" 
                alt="Portada del Libro KS Healing" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Un Portal Multidimensional
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Este no es un libro ordinario. Es un sistema integrado que funciona en múltiples niveles simultáneamente, diseñado para ser tanto una guía intelectual como una transmisión energética viva.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">Narrativa Profunda</h3>
                    <p className="text-muted-foreground">La historia personal de YOHEV, su viaje espiritual y el descubrimiento de la Energía KS</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">Descripción y visión cosmológica</h3>
                    <p className="text-muted-foreground">Explicación profunda de KS Healing, el Cuerpo KS, el Campo KS y la Energía Crística</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">10 Ejercicios Prácticos</h3>
                    <p className="text-muted-foreground">Ejercicios guiados paso a paso para activar y desarrollar tu Cuerpo KS</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">Transmisión Viva</h3>
                    <p className="text-muted-foreground">10 códigos QR que conectan con videos de transmisión directa de Energía KS de YOHEV</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/el-libro#comprar">
                  <a>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                      Comprar Ahora
                      <ArrowRight size={20} />
                    </Button>
                  </a>
                </Link>
                <Button size="lg" variant="outline" gap-2>
                  <Download size={20} />
                  Muestra Gratis
                </Button>
              </div>
            </div>
          </div>

          {/* Chapters */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Los 18 Capítulos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: "I", title: "La Academia", desc: "Primera Parte: El Viaje - Introducción al camino de YOHEV", part: "Primera Parte: El Viaje" },
                { num: "II", title: "El Médico de Médicos", desc: "El encuentro que cambió todo" },
                { num: "III", title: "El Maestro", desc: "La revelación de la misión divina" },
                { num: "IV", title: "Sucesos Extraordinarios", desc: "Experiencias que transformaron la comprensión" },
                { num: "V", title: "Camina Conmigo", desc: "La invitación al camino" },
                { num: "VI", title: "La Nueva Academia", desc: "El nacimiento de KS Healing" },
                { num: "VII", title: "YOHEV", desc: "Segunda Parte: La Energía KS - La identidad revelada", part: "Segunda Parte: La Energía KS" },
                { num: "VIII", title: "Keiouvos Stharef", desc: "La Energía Crística explicada" },
                { num: "IX", title: "Entropía, Neguentropía y Sintropía", desc: "Principios energéticos fundamentales" },
                { num: "X", title: "Entrelazamiento", desc: "La interconexión de todas las cosas" },
                { num: "XI", title: "Sistemas Energéticos", desc: "Estructura y funcionamiento" },
                { num: "XII", title: "Cuerpos y Dimensiones", desc: "La multidimensionalidad del ser" },
                { num: "XIII", title: "El Chakra Timo", desc: "El centro de la coherencia" },
                { num: "XIV", title: "El Cuerpo KS", desc: "Estructura y activación del vehículo energético" },
                { num: "XV", title: "Sobre La Terapia", desc: "Tercera Parte: KS Healing - Fundamentos de la práctica", part: "Tercera Parte: KS Healing" },
                { num: "XVI", title: "Qué Esperar de La Terapia", desc: "Resultados y transformaciones" },
                { num: "XVII", title: "Cómo Convertirme En Practicante", desc: "El camino de la certificación" },
                { num: "XVIII", title: "Ética Terapéutica", desc: "Responsabilidad y compromiso" },
              ].map((chapter) => (
                <Card key={chapter.num} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-primary text-lg">{chapter.num}</span>
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
                  Códigos QR Interactivos
                </h3>
                <p className="text-muted-foreground mb-4">
                  10 códigos QR estratégicamente ubicados en los ejercicios que te conectan directamente con videos de transmisión de Energía KS.
                </p>
                <p className="text-sm text-primary font-medium">
                  Transmisión directa de YOHEV
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
                  Recibe la Energía KS directamente de YOHEV a través de videos grabados con intención y coherencia energética.
                </p>
                <p className="text-sm text-primary font-medium">
                  Acceso restringido con registro
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
                  234 páginas de contenido profundo: narrativa inspiradora, técnica avanzada y práctica transformadora.
                </p>
                <p className="text-sm text-primary font-medium">
                  Narrativa + Técnica + Práctica
                </p>
              </Card>
            </div>
          </div>

          {/* What's Inside */}
          <div className="mb-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Qué Encontrarás en el Libro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Historia Personal de YOHEV", desc: "Un relato profundo de transformación espiritual y descubrimiento" },
                { title: "Fundamentos Técnicos", desc: "Explicación completa del Cuerpo KS, Campo KS y Energía Crística" },
                { title: "10 Ejercicios Prácticos", desc: "Ejercicios paso a paso con ilustraciones y códigos QR" },
                { title: "Geometría Sagrada", desc: "La importancia del toroide en la estructura energética" },
                { title: "Integración Científica", desc: "Conexión entre física cuántica y espiritualidad" },
                { title: "Testimon ios Reales", desc: "Historias de transformación de practicantes certificados" },
                { title: "Preguntas Frecuentes", desc: "Respuestas a las dudas más comunes sobre KS Healing" },
                { title: "Próximos Pasos", desc: "Cómo continuar tu camino como practicante de KS Healing" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                  role: "Practicante Certificada",
                },
                {
                  quote: "Los ejercicios con los códigos QR son increíbles. Siento la energía directamente de YOHEV en cada transmisión.",
                  author: "Juan López",
                  location: "España",
                  role: "Practicante en Formación",
                },
                {
                  quote: "Finalmente entiendo quién soy. Este libro es el manual de instrucciones que siempre necesité para mi transformación.",
                  author: "Ana Martínez",
                  location: "Argentina",
                  role: "Lectora del Libro",
                },
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-6 border-border/50">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary font-medium mb-1">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Purchase Section */}
          <div id="comprar" className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Obtén Tu Copia Ahora
            </h2>

            <p className="text-center text-muted-foreground mb-8">
              Elige el formato que mejor se adapte a ti. Ambas versiones incluyen acceso a los 10 videos de transmisión con registro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-8 border-2 border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-primary" size={24} />
                  <h3 className="font-display font-bold text-foreground text-xl">Versión Impresa</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Portada de tapa dura, papel de calidad premium, códigos QR funcionales. Perfecto para leer y practicar.
                </p>
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex gap-2 text-sm">
                    <Zap size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Tapa dura de calidad premium</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <Zap size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Códigos QR funcionales</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <Zap size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Acceso a videos de transmisión</span>
                  </div>
                </div>
                <div className="text-3xl font-display font-bold text-primary mb-6">
                  $45 USD
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Comprar en Amazon
                </Button>
              </Card>

              <Card className="p-8 border-2 border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="text-primary" size={24} />
                  <h3 className="font-display font-bold text-foreground text-xl">Versión Digital</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  PDF interactivo con enlaces directos a los videos. Acceso inmediato, portátil y fácil de compartir.
                </p>
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex gap-2 text-sm">
                    <Zap size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">PDF interactivo con enlaces</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <Zap size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Acceso inmediato</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <Zap size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Acceso a videos de transmisión</span>
                  </div>
                </div>
                <div className="text-3xl font-display font-bold text-primary mb-6">
                  $25 USD
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Descargar Ahora
                </Button>
              </Card>
            </div>

            <div className="text-center pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                ¿No estás seguro? Descarga una muestra gratuita del primer capítulo
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
            El libro es el primer paso. Los ejercicios y videos de transmisión te guiarán hacia la experiencia directa de la Energía Keiouvos Stharef.
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
