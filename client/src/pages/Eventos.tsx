import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

const eventos = [
  {
    id: 1,
    title: "Retiro Inmersivo KS Healing - 3 Días",
    description: "Una experiencia transformadora de 3 días en un ambiente de naturaleza, dedicado completamente a la práctica intensiva de KS Healing y la transmisión directa de Energía Crística.",
    fecha: "15-17 de Febrero, 2026",
    ubicacion: "Retiro Espiritual, Costa Rica",
    horario: "Viernes 9am - Domingo 6pm",
    participantes: "Máximo 25 personas",
    precio: "$1,200 USD",
    incluye: ["Alojamiento", "Comidas", "Transmisiones directas", "Ejercicios prácticos", "Material de curso"],
    estado: "Próximamente",
    imagen: "/images/evento-retiro.png",
  },
  {
    id: 2,
    title: "Seminario Online: Fundamentos de KS Healing",
    description: "Introducción completa a los fundamentos de la Energía Crística Keiouvos Stharef. Ideal para principiantes que desean comprender cómo funciona KS Healing.",
    fecha: "1-3 de Marzo, 2026",
    ubicacion: "En línea (Zoom)",
    horario: "Sábados y domingos 10am-1pm (GMT-5)",
    participantes: "Ilimitado",
    precio: "$299 USD",
    incluye: ["Acceso a grabaciones", "Material descargable", "Comunidad privada", "Certificado"],
    estado: "Abierto",
    imagen: "/images/evento-seminario.png",
  },
  {
    id: 3,
    title: "Sesión Grupal de Transmisión Directa",
    description: "Experiencia grupal donde recibirás transmisión directa de Energía KS. Perfecta para practicantes que desean profundizar su conexión con la frecuencia.",
    fecha: "Cada viernes",
    ubicacion: "En línea (Zoom)",
    horario: "7pm-8:30pm (GMT-5)",
    participantes: "Máximo 50 personas",
    precio: "$49 USD por sesión",
    incluye: ["Transmisión en vivo", "Meditación guiada", "Acceso a grabación"],
    estado: "Abierto",
    imagen: "/images/evento-meditacion.png",
  },
  {
    id: 4,
    title: "Certificación Practicante KS Healing",
    description: "Programa de certificación de 8 semanas para convertirse en practicante certificado de KS Healing. Incluye teoría, práctica y transmisión directa.",
    fecha: "Inicio: 7 de Abril, 2026",
    ubicacion: "En línea + Presencial (opcional)",
    horario: "Flexible (acceso 24/7)",
    participantes: "Máximo 30 personas",
    precio: "$1,999 USD",
    incluye: ["8 módulos completos", "Transmisiones en vivo", "Mentoría individual", "Certificado oficial"],
    estado: "Próximamente",
    imagen: "/images/evento-taller.png",
  },
  {
    id: 5,
    title: "Masterclass: Geometría Sagrada y Energía KS",
    description: "Exploración profunda de la relación entre geometría sagrada (toroide) y la estructura de la Energía Crística. Para practicantes avanzados.",
    fecha: "22 de Marzo, 2026",
    ubicacion: "En línea (Zoom)",
    horario: "10am-1pm (GMT-5)",
    participantes: "Máximo 100 personas",
    precio: "$199 USD",
    incluye: ["Sesión grabada", "Presentación en PDF", "Acceso a comunidad"],
    estado: "Abierto",
    imagen: "/images/evento-seminario.png",
  },
  {
    id: 6,
    title: "Retiro de Meditación Ascendente",
    description: "Retiro de 5 días enfocado en meditaciones profundas y prácticas de coherencia energética. Experiencia silenciosa con transmisión de Energía KS.",
    fecha: "12-16 de Mayo, 2026",
    ubicacion: "Monasterio, Perú",
    horario: "Tiempo completo",
    participantes: "Máximo 15 personas",
    precio: "$1,800 USD",
    incluye: ["Alojamiento", "Comidas vegetarianas", "Meditaciones guiadas", "Transmisiones"],
    estado: "Próximamente",
    imagen: "/images/evento-meditacion.png",
  },
];

export default function Eventos() {
  return (
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
                    <p className="text-sm font-semibold text-foreground mb-2">Incluye:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {evento.incluye.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-primary">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                    Reservar Ahora
                    <ArrowRight size={16} />
                  </Button>
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
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
