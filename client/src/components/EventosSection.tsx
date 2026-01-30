import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { eventos } from "@/lib/events";

export default function EventosSection() {
  return (
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
  );
}
