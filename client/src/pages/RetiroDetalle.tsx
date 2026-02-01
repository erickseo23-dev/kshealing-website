import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Calendar, Clock, MapPin, Users, Heart, Check, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { eventos } from "@/lib/events";
import { useEffect, useState } from "react";

export default function RetiroDetalle() {
  const [location] = useLocation();
  const [retiro, setRetiro] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extraer ID de la URL
    const params = new URLSearchParams(location.split("?")[1]);
    const id = parseInt(params.get("id") || "0");
    
    // Buscar retiro en eventos
    const encontrado = eventos.find(e => e.id === id && e.tipo === "Retiro Sagrado");
    setRetiro(encontrado || null);
    setLoading(false);
  }, [location]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">Cargando retiro...</p>
        </div>
      </div>
    );
  }

  if (!retiro) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Retiro no encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              El retiro que buscas no existe o ha sido removido.
            </p>
            <Link href="/proximos-retiros">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Volver a Retiros
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <Link href="/proximos-retiros">
            <Button variant="ghost" className="mb-6 gap-2 text-primary hover:bg-primary/10">
              <ArrowLeft size={18} />
              Volver a Retiros
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            {retiro.imagen && (
              <div className="relative h-96 overflow-hidden rounded-xl mb-8 bg-muted">
                <img
                  src={retiro.imagen}
                  alt={retiro.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary font-semibold">{retiro.tema}</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
                {retiro.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {retiro.description}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-border/50 bg-primary/5">
                <div className="flex items-start gap-4">
                  <Calendar size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Fecha</p>
                    <p className="text-lg text-foreground font-bold">{retiro.fecha}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-primary/5">
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Horario</p>
                    <p className="text-lg text-foreground font-bold">{retiro.horario}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-primary/5">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Modalidad</p>
                    <p className="text-lg text-foreground font-bold">{retiro.modalidad}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-primary/5">
                <div className="flex items-start gap-4">
                  <Users size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Participantes</p>
                    <p className="text-lg text-foreground font-bold">{retiro.participantes}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white flex-1">
                Unirse al Club del Retiro Sagrado
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Compartir Retiro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Qué Incluye Este Retiro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {retiro.incluye?.map((beneficio: string, idx: number) => (
                <Card key={idx} className="p-6 border-border/50 bg-background">
                  <div className="flex gap-4">
                    <Heart size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold">{beneficio}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Descripción Expandida */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-8">
              Sobre Este Retiro
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {retiro.description}
              </p>

              <Card className="p-8 border-border/50 bg-primary/5 mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Enfoque de Este Retiro
                </h3>
                <ul className="space-y-3">
                  {retiro.incluye?.slice(0, 4).map((punto: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-foreground">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Acceso a la Grabación
                </h3>
                <p className="text-muted-foreground mb-4">
                  Si no puedes asistir en vivo, accede a la grabación completa incluida en tu membresía del Club del Retiro Sagrado. Practica a tu ritmo, revisa cuantas veces necesites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Listo para Transformarte
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a cientos de personas que ya están transformando sus relaciones y su vida a través de los Retiros Sagrados.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white mb-6">
              Unirse al Club del Retiro Sagrado
            </Button>
            <p className="text-sm text-muted-foreground">
              Acceso ilimitado a todos los retiros 2026 + grabaciones de retiros anteriores
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
