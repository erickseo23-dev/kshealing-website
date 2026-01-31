import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Heart, Lightbulb, Users, Facebook, Instagram, Youtube, Music } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SobreYohev() {
  const [youtubeVideos, setYoutubeVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch latest YouTube videos
    const fetchYoutubeVideos = async () => {
      try {
        // Using YouTube's public API to get latest videos from the channel
        const channelId = "UCAXCnGTE3YIjQuZFP--sACw"; // Dr. Erick Gurrola channel ID
        const apiKey = "AIzaSyB7CtKN53btaGlhxAfN6sv6wboAbTBEs2E"; // Public API key
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=6&type=video`
        );
        
        if (response.ok) {
          const data = await response.json();
          setYoutubeVideos(data.items || []);
        }
      } catch (error) {
        console.log("YouTube feed will show placeholder videos");
      } finally {
        setLoading(false);
      }
    };

    fetchYoutubeVideos();
  }, []);

  // Placeholder videos in case API fails
  const placeholderVideos = [
    { id: "1", videoId: "dQw4w9WgXcQ", title: "Video 1" },
    { id: "2", videoId: "dQw4w9WgXcQ", title: "Video 2" },
    { id: "3", videoId: "dQw4w9WgXcQ", title: "Video 3" },
    { id: "4", videoId: "dQw4w9WgXcQ", title: "Video 4" },
    { id: "5", videoId: "dQw4w9WgXcQ", title: "Video 5" },
    { id: "6", videoId: "dQw4w9WgXcQ", title: "Video 6" },
  ];

  const displayVideos = youtubeVideos.length > 0 ? youtubeVideos : placeholderVideos;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Conoce a <span className="text-primary">YOHEV</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dr. Erick Gurrola: Pionero y Creador de KS Healing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Descubriendo el Propósito */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content */}
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Descubriendo el Propósito
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  Yohev es el pionero y creador de KS Healing, una tecnología de sanación energética de nueva generación que ha transformado la vida de miles de personas en múltiples países.
                </p>
                <p className="text-lg leading-relaxed">
                  A través de una década de estudio, práctica y canalización, Yohev fue el primer ser humano en el planeta en descargar y utilizar la energía KS, una energía viva, consciente y programable que trabaja directamente sobre el campo vibracional del ser humano.
                </p>
                <p className="text-lg leading-relaxed">
                  Desde muy temprano en su camino espiritual, sintió el llamado a explorar la naturaleza de la energía, la conciencia y la sanación más allá de los métodos tradicionales.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="https://www.facebook.com/Dr.ErickGurrola" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                    <Facebook size={20} />
                    Facebook
                  </Button>
                </a>
                <a href="https://www.instagram.com/erickgurrolaoficial/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                    <Instagram size={20} />
                    Instagram
                  </Button>
                </a>
                <a href="https://www.youtube.com/@drerickgurrola" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                    <Youtube size={20} />
                    YouTube
                  </Button>
                </a>
                <a href="https://www.tiktok.com/@dr.erickgurrola_yohev" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                    <Music size={20} />
                    TikTok
                  </Button>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/sdfsf.jpeg" 
                alt="Dr. Erick Gurrola - YOHEV" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
            </div>
          </div>

          {/* KS Healing & D.A.R.T. Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 py-12">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/sdfsf.jpeg" 
                alt="KS Healing Method" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                La Energía KS y D.A.R.T.
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  Esta búsqueda lo llevó a descubrir y estructurar la Energía KS (Keiouvos Stharef) —una frecuencia de origen divino específica para esta era de evolución humana— y a diseñar un método de sanación que actúa no solo sobre el cuerpo físico, sino sobre los siete cuerpos del ser.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary">
                  D.A.R.T. — Deep Archetypal Renewal Therapy
                </p>
                <p className="text-lg leading-relaxed">
                  Como extensión natural de KS Healing, Yohev desarrolló D.A.R.T., una terapia diseñada para trabajar donde se originan muchos de los patrones que determinan la vida de una persona: los arquetipos internos programados en el inconsciente.
                </p>
                <p className="text-lg leading-relaxed">
                  D.A.R.T. combina trabajo energético, visualización profunda e intervención consciente para reemplazar arquetipos negativos por arquetipos positivos y balanceados, haciendo que la transformación sea estructural y energética.
                </p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Commitment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/10 to-background">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mi Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Facilitar el despertar de la consciencia humana a través de la transmisión de la Energía Keiouvos Stharef, permitiendo que cada ser recuerde su verdadera naturaleza divina.
              </p>
            </Card>

            <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-accent/10 to-background">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Lightbulb size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mi Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un mundo donde millones de personas viven en coherencia energética, donde la sanación es accesible a todos, y donde la verdadera transformación ocurre desde adentro.
              </p>
            </Card>

            <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mi Compromiso</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transmitir la Energía KS con amor, responsabilidad y respeto, honrando el libre albedrío de cada persona en su camino de transformación.
              </p>
            </Card>
          </div>

          {/* Key Message */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center mb-20">
            <p className="font-display text-3xl font-bold text-foreground mb-4">
              "Erick es solo un hombre, con más defectos que virtudes."
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Pero hay una parte de mi ser que es mucho más inmensa que el hombre y que aún estoy conociendo: mi alma, YOHEV.
            </p>
            <p className="text-muted-foreground">
              Mientras más voy recordando quién soy realmente, más puedo aportar algo valioso al mundo.
            </p>
          </div>

          {/* Equiliminalidad Section */}
          <div className="max-w-3xl mx-auto mb-20">
            <Card className="p-8 md:p-12 border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                Equiliminalidad: Estabilidad Emocional para Cambios Profundos
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dentro de esta terapia, Yohev integró la técnica Equiliminal, creada para sostener un estado de equilibrio entre el Cuerpo del Dolor y el Cuerpo del Placer, evitando desbordes emocionales durante los procesos de renovación profunda.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esta base permite que la persona avance con claridad, seguridad interna y una sensación real de "piso" al reescribir su programación.
              </p>
            </Card>
          </div>

          {/* Journey Section */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Un Camino de Formación y Expansión
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold">
                    1
                  </div>
                  <div className="w-1 h-16 bg-primary/30 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Descubrimiento de la Energía KS
                  </h3>
                  <p className="text-muted-foreground">
                    Yohev descubrió y estructuró la Energía Keiouvos Stharef, una frecuencia de origen divino específica para esta era de evolución humana.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold">
                    2
                  </div>
                  <div className="w-1 h-16 bg-primary/30 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Desarrollo de KS Healing
                  </h3>
                  <p className="text-muted-foreground">
                    Durante más de diez años, Yohev ha dedicado su vida a desarrollar y perfeccionar el método KS Healing, acompañando a personas en procesos profundos de liberación y transformación.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold">
                    3
                  </div>
                  <div className="w-1 h-16 bg-primary/30 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Formación de Facilitadores
                  </h3>
                  <p className="text-muted-foreground">
                    Yohev es maestro y mentor que ha formado a practicantes en KS Healing y metodologías de transformación interna, guiando procesos que ayudan a las personas a recuperar su centro.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold">
                    4
                  </div>
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Expansión Global
                  </h3>
                  <p className="text-muted-foreground">
                    La misión de Yohev es clara: ayudar a seres humanos a recordar quiénes son, liberarse de la programación que limita su potencial y volver a habitar su vida con poder interno, propósito y expansión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Feed Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Últimos Videos
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Descubre los últimos contenidos de YOHEV en YouTube
            </p>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Cargando videos...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayVideos.slice(0, 6).map((video: any, idx: number) => {
                  const videoId = video.id?.videoId || video.videoId;
                  const title = video.snippet?.title || video.title || `Video ${idx + 1}`;
                  
                  return (
                    <a
                      key={idx}
                      href={`https://www.youtube.com/watch?v=${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all h-full flex flex-col">
                        <div className="relative bg-black aspect-video overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                              <Youtube size={32} className="text-white ml-1" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                          <h3 className="font-display font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {title}
                          </h3>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            )}

            <div className="text-center mt-12">
              <a href="https://www.youtube.com/@drerickgurrola" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  Ver Todos los Videos
                  <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Comienza Tu Transformación
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre cómo la Energía KS puede ayudarte a recordar tu verdadera naturaleza y vivir con propósito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/que-es-ks-healing">
              <a>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Descubre KS Healing
                </Button>
              </a>
            </Link>
            <Link href="/eventos">
              <a>
                <Button size="lg" variant="outline">
                  Ver Eventos
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
