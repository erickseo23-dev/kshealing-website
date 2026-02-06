import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { eventos } from "@/lib/events";
import { SEO } from "@/components/SEO";
import { SchemaEvent } from "@/components/SchemaEvent";

export default function Eventos() {
  // Generar schema para el primer evento destacado
  const eventSchema = (
    <SchemaEvent
      name="Seminario de Energía KS Healing"
      description="Experiencia transformadora con transmisión directa de Energía KS. Seminario en vivo con YOHEV."
      image="/images/evento-principal.png"
      startDate="2026-03-15T09:00:00Z"
      endDate="2026-03-15T18:00:00Z"
      url="https://kshealing.com/eventos"
    />
  );
  
  return (
    <>
      {eventSchema}
      <SEO
        title="Eventos y Seminarios KS Healing - Transmisiones de Energía Crística"
        description="Descubre los próximos eventos y seminarios de KS Healing. Experiencias transformadoras con transmisión directa de energía crística con YOHEV."
        keywords="eventos KS Healing, seminarios, talleres, transmisiones, energía crística, YOHEV, transformación"
        canonicalUrl="https://kshealing.com/eventos"
      />
      <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Eventos y Seminarios
            </h1>
            <p className="text-xl text-white/90">
              Experiencias transformadoras con transmisión directa de Energía KS
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventos.map((evento) => (
              <Card key={evento.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src={evento.imagen} 
                    alt={evento.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                    evento.estado === "Abierto" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {evento.estado}
                  </span>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {evento.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {evento.description}
                  </p>
                </div>

                <div className="p-6 flex-grow">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-foreground">
                      <Calendar size={18} className="text-primary flex-shrink-0" />
                      <span>{evento.fecha}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <MapPin size={18} className="text-primary flex-shrink-0" />
                      <span>{evento.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <Clock size={18} className="text-primary flex-shrink-0" />
                      <span>{evento.horario}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <Users size={18} className="text-primary flex-shrink-0" />
                      <span>{evento.participantes}</span>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-border">
                    <p className="font-semibold text-primary text-lg mb-3">
                      {evento.precio}
                    </p>
                    {evento.incluye && (
                      <>
                        <p className="text-sm font-semibold text-foreground mb-2">Incluye:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {evento.incluye.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-primary">✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {evento.tipo === "Retiro Sagrado" ? (
                    <Link href="/club-retiro-sagrado" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                        Unirse al Club
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  ) : evento.tipo === "Certificación" ? (
                    <Link href="/ks-healing" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                        Reservar Ahora
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/taller-ks-healing" className="block">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-2">
                        Reservar Ahora
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              No te pierdas nuevos eventos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Suscríbete para recibir notificaciones de nuevos seminarios y retiros
            </p>
            <a href="https://www.i3cdigital.com/Newsletter" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Suscribirse
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
