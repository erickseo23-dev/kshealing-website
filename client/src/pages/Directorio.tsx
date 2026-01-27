import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Globe, Star } from "lucide-react";
import { useState } from "react";

const practicantes = [
  {
    id: 1,
    nombre: "YOHEV (Dr. Erick Gurrola)",
    titulo: "Maestro Fundador",
    certificacion: "Creador de KS Healing",
    ubicacion: "México / Internacional",
    email: "yohev@kshealing.com",
    web: "www.kshealing.com",
    especialidad: "Sesiones privadas, Retiros, Certificaciones",
    experiencia: "20+ años",
    rating: 5,
    resenas: 150,
  },
  {
    id: 2,
    nombre: "María González",
    titulo: "Practicante Certificada",
    certificacion: "Master KS Healing",
    ubicacion: "Madrid, España",
    email: "maria@kshealing.es",
    phone: "+34 91 234 5678",
    especialidad: "Sesiones privadas, Meditaciones guiadas",
    experiencia: "5 años",
    rating: 4.9,
    resenas: 45,
  },
  {
    id: 3,
    nombre: "Carlos Mendez",
    titulo: "Practicante Certificado",
    certificacion: "Practicante Avanzado KS Healing",
    ubicacion: "Ciudad de México, México",
    email: "carlos@kshealing.mx",
    phone: "+52 55 1234 5678",
    especialidad: "Sesiones en línea, Talleres grupales",
    experiencia: "3 años",
    rating: 4.8,
    resenas: 32,
  },
  {
    id: 4,
    nombre: "Ana Rodríguez",
    titulo: "Practicante Certificada",
    certificacion: "Master KS Healing",
    ubicacion: "Buenos Aires, Argentina",
    email: "ana@kshealing.ar",
    phone: "+54 11 2345 6789",
    especialidad: "Sesiones privadas, Retiros",
    experiencia: "4 años",
    rating: 4.9,
    resenas: 38,
  },
  {
    id: 5,
    nombre: "David López",
    titulo: "Practicante Certificado",
    certificacion: "Practicante KS Healing",
    ubicacion: "Barcelona, España",
    email: "david@kshealing.es",
    phone: "+34 93 345 6789",
    especialidad: "Sesiones en línea, Meditaciones",
    experiencia: "2 años",
    rating: 4.7,
    resenas: 28,
  },
  {
    id: 6,
    nombre: "Laura Martínez",
    titulo: "Practicante Certificada",
    certificacion: "Master KS Healing",
    ubicacion: "Lima, Perú",
    email: "laura@kshealing.pe",
    phone: "+51 1 2345 678",
    especialidad: "Sesiones privadas, Talleres",
    experiencia: "5 años",
    rating: 4.9,
    resenas: 42,
  },
];

export default function Directorio() {
  const [filtroUbicacion, setFiltroUbicacion] = useState("");
  const [filtroEspecialidad, setFiltroEspecialidad] = useState("");

  const practicantesFiltrados = practicantes.filter((p) => {
    const ubicacionMatch = !filtroUbicacion || p.ubicacion.toLowerCase().includes(filtroUbicacion.toLowerCase());
    const especialidadMatch = !filtroEspecialidad || p.especialidad.toLowerCase().includes(filtroEspecialidad.toLowerCase());
    return ubicacionMatch && especialidadMatch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Directorio de Practicantes
            </h1>
            <p className="text-xl text-white/90">
              Encuentra un practicante certificado de KS Healing cerca de ti
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Ubicación
              </label>
              <input
                type="text"
                placeholder="Buscar por ciudad o país..."
                value={filtroUbicacion}
                onChange={(e) => setFiltroUbicacion(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Especialidad
              </label>
              <select
                value={filtroEspecialidad}
                onChange={(e) => setFiltroEspecialidad(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Todas las especialidades</option>
                <option value="Sesiones privadas">Sesiones privadas</option>
                <option value="Sesiones en línea">Sesiones en línea</option>
                <option value="Meditaciones">Meditaciones guiadas</option>
                <option value="Talleres">Talleres grupales</option>
                <option value="Retiros">Retiros</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {practicantesFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No se encontraron practicantes que coincidan con tus criterios. Intenta con otros filtros.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practicantesFiltrados.map((practicante) => (
                <Card key={practicante.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {practicante.nombre}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-1">
                      {practicante.titulo}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {practicante.certificacion}
                    </p>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(practicante.rating) ? "fill-secondary text-secondary" : "text-muted-foreground"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({practicante.resenas} reseñas)
                      </span>
                    </div>

                    {/* Info */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-border text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <MapPin size={16} className="text-primary flex-shrink-0" />
                        <span>{practicante.ubicacion}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                          {practicante.experiencia}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        <span className="font-semibold text-foreground">Especialidad:</span> {practicante.especialidad}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Mail size={14} />
                        <a href={`mailto:${practicante.email}`} className="truncate">
                          {practicante.email}
                        </a>
                      </div>
                      {practicante.phone && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                          <Phone size={14} />
                          <a href={`tel:${practicante.phone}`}>
                            {practicante.phone}
                          </a>
                        </div>
                      )}
                      {practicante.web && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                          <Globe size={14} />
                          <a href={`https://${practicante.web}`} target="_blank" rel="noopener noreferrer">
                            {practicante.web}
                          </a>
                        </div>
                      )}
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Contactar
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            ¿Eres Practicante Certificado?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Si eres un practicante certificado de KS Healing, puedes registrarte en nuestro directorio para que otros te encuentren.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Registrarse como Practicante
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
