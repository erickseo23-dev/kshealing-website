import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Filter, Heart, Users, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

interface Retiro {
  id: number;
  numero: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  duracion: string;
  tema: string;
  modalidad: "En Vivo" | "Grabado" | "Híbrido";
  lugar: string;
  precio: string;
  beneficios: string[];
  enlace: string;
}

const retiros: Retiro[] = [
  {
    id: 1,
    numero: 8,
    titulo: "La Arquitectura del Amor",
    descripcion: "Del amor herido al Amor como principio divino",
    fecha: "8 de Febrero 2025",
    hora: "7:00 - 11:00 hrs (CDMX)",
    duracion: "4 horas",
    tema: "Relaciones",
    modalidad: "En Vivo",
    lugar: "Club del Retiro Sagrado",
    precio: "Acceso al Club",
    beneficios: [
      "Comprensión profunda del amor divino",
      "Transformación de patrones relacionales",
      "Integración emocional",
      "Certificado de participación"
    ],
    enlace: "/retiro-sagrado"
  }
];

const temas = ["Todos", "Relaciones", "Transformación", "Consciencia", "Sanación"];
const modalidades = ["Todas", "En Vivo", "Grabado", "Híbrido"];

export default function ProximosRetiros() {
  const [filtroTema, setFiltroTema] = useState("Todos");
  const [filtroModalidad, setFiltroModalidad] = useState("Todas");

  const retirosFiltrados = retiros.filter(retiro => {
    const temaMatch = filtroTema === "Todos" || retiro.tema === filtroTema;
    const modalidadMatch = filtroModalidad === "Todas" || retiro.modalidad === filtroModalidad;
    return temaMatch && modalidadMatch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">📅 Próximos Retiros</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Retiros Sagrados <span className="text-primary">2025</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explora nuestro calendario de retiros transformacionales. Cada retiro es una oportunidad para profundizar en tu consciencia y transformación personal.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Filter size={20} className="text-primary" />
              <h2 className="font-semibold text-foreground">Filtrar por:</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tema Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Tema</label>
                <div className="flex flex-wrap gap-2">
                  {temas.map(tema => (
                    <button
                      key={tema}
                      onClick={() => setFiltroTema(tema)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        filtroTema === tema
                          ? "bg-primary text-white"
                          : "bg-background border border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {tema}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modalidad Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Modalidad</label>
                <div className="flex flex-wrap gap-2">
                  {modalidades.map(modalidad => (
                    <button
                      key={modalidad}
                      onClick={() => setFiltroModalidad(modalidad)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        filtroModalidad === modalidad
                          ? "bg-primary text-white"
                          : "bg-background border border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {modalidad}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retiros Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          {retirosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {retirosFiltrados.map(retiro => (
                <Link key={retiro.id} href={retiro.enlace}>
                  <Card className="h-full p-8 border-border/50 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-all cursor-pointer group">
                    {/* Header */}
                    <div className="mb-6 pb-6 border-b border-border/50">
                      <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-primary font-semibold text-sm">Retiro {retiro.numero}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {retiro.titulo}
                      </h3>
                      <p className="text-muted-foreground italic">{retiro.descripcion}</p>
                    </div>

                    {/* Info Grid */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Calendar size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Fecha</p>
                          <p className="text-foreground font-semibold">{retiro.fecha}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Hora</p>
                          <p className="text-foreground font-semibold">{retiro.hora}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Modalidad</p>
                          <p className="text-foreground font-semibold">{retiro.modalidad}</p>
                        </div>
                      </div>
                    </div>

                    {/* Beneficios */}
                    <div className="mb-6 pb-6 border-t border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-3">Incluye:</p>
                      <ul className="space-y-2">
                        {retiro.beneficios.slice(0, 2).map((beneficio, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                            <Heart size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                      Conocer Más
                    </Button>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">
                No hay retiros disponibles con los filtros seleccionados.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setFiltroTema("Todos");
                  setFiltroModalidad("Todas");
                }}
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              ¿No ves el retiro que buscas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuevos retiros se agregan regularmente. Suscríbete para recibir notificaciones cuando se abra la inscripción a nuevos eventos.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Notificarme de Nuevos Retiros
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
