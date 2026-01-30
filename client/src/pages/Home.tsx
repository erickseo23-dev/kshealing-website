import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Sparkles, Heart, Zap, BookOpen, Users, ArrowRight, Star } from "lucide-react";
import { eventos } from "@/lib/events";
import { testimonios } from "@/lib/testimonials";

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonio = testimonios[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Historias de <span className="text-primary">Transformación</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Experiencias reales de personas que han trabajado con la Energía KS
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {/* Carousel Card */}
          <Card className="p-8 md:p-12 border-border/50 min-h-[400px] flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: currentTestimonio.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-secondary text-secondary" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg text-foreground mb-8 flex-grow leading-relaxed italic">
              "{currentTestimonio.text}"
            </p>

            {/* Author Info */}
            <div className="border-t border-border pt-6 mb-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {currentTestimonio.name}
              </h3>
              <p className="text-sm text-primary font-semibold mb-2">
                {currentTestimonio.title}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                {currentTestimonio.location}
              </p>
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {currentTestimonio.certification}
              </span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-4">
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                ← Anterior
              </Button>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonios.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ir al testimonio ${idx + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Siguiente →
              </Button>
            </div>
          </Card>
        </div>

        {/* Counter */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Testimonio {currentIndex + 1} de {testimonios.length}
          </p>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link href="/testimonios">
            <a>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                Ver Todos los Testimonios
                <ArrowRight size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 text-white overflow-hidden" style={{
        backgroundImage: 'url(/images/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/20 border border-accent/50">
              <p className="text-accent font-medium text-sm">SER UN SOL EN LA TIERRA</p>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Recuerda Quién Eres<br />
              <span className="text-secondary">Realmente</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif leading-relaxed">
              La Energía KS Keiouvos Stharef te devuelve a tu verdadera naturaleza divina. Un sistema de sanación energética que transforma tu vida desde adentro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/que-es-ks-healing">
                <a>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary gap-2">
                    Descubre KS Healing
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
              <Link href="/el-libro">
                <a>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                    <BookOpen size={20} />
                    Leer el Libro
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is KS Healing */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              ¿Qué es <span className="text-primary">KS Healing</span>?
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Un sistema de sanación energética que utiliza la Energía Keiouvos Stharef para facilitar la transformación profunda de los sistemas energéticos humanos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Conexión Divina",
                description: "Conectar con la Energía KS es más que una experiencia espiritual, es desarrollar una relación profunda con el Creador y contigo mismo. Es encontrar tu propio lugar en la creación, tanto en la Tierra como en los planos superiores. Es reconocer a Dios en ti y recordar tu propia naturaleza divina",
              },
              {
                icon: Heart,
                title: "Sanación Profunda",
                description: "Transforma patrones emocionales y energéticos que limitan tu vida, restableciendo tus sistemas energéticos al arquetipo divino original. Somos perfectos, bellos, sanos y abundantes por diseño. Solo debemos recordar y recuperar la coherencia divina que hemos olvidado",
              },
              {
                icon: Zap,
                title: "Expansión de Consciencia",
                description: "Accede a estados más profundos de presencia, coherencia y claridad interna. Renovar los arquetipos negativos de la personalidad; equilibrar tus cuerpos de dolor y de placer, y soltar todo el dolor emocional para sanar en todos los niveles, es parte de tu viaje transformador en KS Healing",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-8 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About YOHEV */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/yohev-foto.jpg" 
                  alt="YOHEV - Dr. Erick Gurrola" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Conoce a <span className="text-primary">YOHEV</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Dr. Erick Gurrola, conocido por su nombre espiritual YOHEV, es el maestro y fundador de KS Healing. Su viaje espiritual lo llevó a descubrir y canalizar la Energía KS y enseñar a otros a sanarse a sí mismos con esta energía de altísima vibración.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Con más de una década de experiencia en transformación espiritual, YOHEV ha dedicado su vida a ayudar a miles de personas a recordar su verdadera naturaleza divina.
              </p>
              <Link href="/sobre-yohev">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                    Conocer su Historia
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KS Healing Programs */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Decorative SVG Divider */}
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{height: '120px'}}>
          <path d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z" fill="rgba(var(--primary-rgb), 0.1)" />
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Programas de <span className="text-primary">KS Healing Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada programa está diseñado para un paso diferente en tu viaje de transformación y evolución espiritual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "KS Healing",
                description: "La base fundamental de la sanación energética. Aprende a trabajar directamente con la Energía Keiouvos Stharef para transformar tu campo vibracional y recordar tu verdadera naturaleza divina.",
                icon: "✨",
                color: "from-primary/20 to-primary/5",
                href: "/ks-healing",
              },
              {
                title: "D.A.R.T.",
                description: "Deep Archetypal Renewal Therapy. Trabaja en la raíz de tus patrones internos para reemplazar arquetipos negativos por arquetipos positivos y balanceados.",
                icon: "🔄",
                color: "from-accent/20 to-accent/5",
                href: "/dart",
              },
              {
                title: "Genética Sagrada",
                description: "Accede a la sabiduría ancestral de tu linaje. Activa tu ADN espiritual y reconecta con el poder hereditario de tu familia.",
                icon: "🧬",
                color: "from-primary/20 to-accent/10",
                href: "/genetica-sagrada",
              },
              {
                title: "Retiro Sagrado",
                description: "Una experiencia inmersiva de transformación profunda. Retiros presenciales donde experimentarás transmisiones intensivas de Energía KS en comunidad.",
                icon: "🏔️",
                color: "from-accent/20 to-primary/10",
                href: "/retiro-sagrado",
              },
            ].map((program, idx) => (
              <Card key={idx} className={`p-8 border-border/50 hover:shadow-xl transition-all hover:-translate-y-2 bg-gradient-to-br ${program.color} flex flex-col`}>
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {program.description}
                </p>
                <Link href={program.href}>
                  <a>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      Conocer Más
                    </Button>
                  </a>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Próximos <span className="text-primary">Eventos</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Seminarios, retiros, certificaciones y sesiones grupales donde experimentarás la transmisión directa de Energía KS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {eventos.slice(0, 3).map((event) => (
              <Card key={event.id} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow flex flex-col">
                {event.imagen && (
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={event.imagen}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full">
                      {event.tipo || "Evento"}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-primary font-semibold mb-2">{event.fecha}</p>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                      📍 {event.ubicacion}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">
                    Más Información
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/eventos">
              <a>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                  Ver Todos los Eventos
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* The Book */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              El Libro: <span className="text-primary">Un Portal Vivo</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              Más que un libro. Un sistema integrado de narrativa, técnica, ejercicios prácticos y transmisión directa de Energía KS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/book-cover.png" 
                  alt="KS Healing - La Nueva Frecuencia Crística" 
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-6">
                <Card className="p-8 border-border/50">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">18 Capítulos</h3>
                  <p className="text-muted-foreground mb-6">
                    Desde la historia personal de YOHEV hasta el conocimiento profundo de la Energía KS y las bases de la terapia KS Healing, incluyendo 10 ejercicios prácticos con códigos QR.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Narrativa profunda y transformadora</li>
                    <li>✓ Una nueva visión cosmológica</li>
                    <li>✓ Ejercicios prácticos guiados</li>
                    <li>✓ Códigos QR con transmisión directa</li>
                  </ul>
                </Card>

                <Card className="p-8 border-border/50 bg-primary/5">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Transmisión Viva</h3>
                  <p className="text-muted-foreground mb-6">
                    Estuve escribiendo y cargando de energía este libro durante cinco años. Cada palabra está intencionada con Energía KS. Al leer, tu sistema energético entra en resonancia con una frecuencia de alta vibración.
                                                         -YOHEV-
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/el-libro">
                      <a>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                          Explorar el Libro
                        </Button>
                      </a>
                    </Link>
                    <Button variant="outline" className="w-full">
                      Descargar Introducción Gratis
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel />

      {/* Latest Blog Posts */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Últimos <span className="text-primary">Posts</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Artículos y reflexiones sobre transformación, energía y consciencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {[
              {
                id: 1,
                titulo: "Cómo la Energía KS Transforma tu Realidad",
                descripcion: "Descubre los 3 pilares de transformación que hacen de KS Healing un sistema único",
                fecha: "15 Enero 2026",
                imagen: "/images/blog-transformacion.png",
                link: "/blog/article-1",
              },
              {
                id: 2,
                titulo: "Los 7 Chakras y el Chakra Timo",
                descripcion: "Explora el centro de tu poder creativo y su conexión con la Energía Crística",
                fecha: "12 Enero 2026",
                imagen: "/images/blog-chakras.png",
                link: "/blog/article-2",
              },
              {
                id: 3,
                titulo: "Entrelazamiento Cuántico y Consciencia",
                descripcion: "La ciencia detrás de KS Healing: cómo la cuántica explica la transformación",
                fecha: "8 Enero 2026",
                imagen: "/images/blog-cuantica.png",
                link: "/blog/article-3",
              },
            ].map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src={post.imagen} 
                    alt={post.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-xs text-primary font-semibold mb-2">{post.fecha}</p>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    {post.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {post.descripcion}
                  </p>
                  <Link href={post.link}>
                    <a>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 gap-2">
                        Leer Artículo
                        <ArrowRight size={16} />
                      </Button>
                    </a>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <a>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                  Ver Todos los Artículos
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Comienza Tu Transformación
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Elige el camino que resuena con tu alma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sesiones">
              <a>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary gap-2">
                  Sesión Privada
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
            <Link href="/cursos">
              <a>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  Explorar Cursos
                  <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
