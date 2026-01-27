import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Music, FileText, Lock, ArrowRight } from "lucide-react";

const recursos = [
  {
    id: 1,
    title: "Introducción a KS Healing",
    description: "Documento PDF con los fundamentos esenciales de la Energía Crística Keiouvos Stharef. Perfecto para principiantes.",
    tipo: "PDF",
    tamaño: "2.4 MB",
    paginas: "24 páginas",
    precio: "Gratuito",
    icon: FileText,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Meditación Guiada: Coherencia Energética",
    description: "Audio de 15 minutos con meditación guiada para activar coherencia entre cuerpo, mente y espíritu.",
    tipo: "Audio MP3",
    tamaño: "12.5 MB",
    duracion: "15 minutos",
    precio: "Gratuito",
    icon: Music,
    color: "text-purple-500",
  },
  {
    id: 3,
    title: "Guía de Ejercicios KS Healing",
    description: "Manual completo con los 10 ejercicios prácticos de KS Healing explicados paso a paso con ilustraciones.",
    tipo: "PDF",
    tamaño: "5.8 MB",
    paginas: "48 páginas",
    precio: "$29 USD",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    id: 4,
    title: "Meditación Ascendente - Nivel Básico",
    description: "Serie de 7 meditaciones progresivas para practicantes que desean profundizar su conexión con la Energía KS.",
    tipo: "Audio Bundle",
    tamaño: "89 MB",
    duracion: "7 x 20 minutos",
    precio: "$49 USD",
    icon: Music,
    color: "text-purple-500",
  },
  {
    id: 5,
    title: "Libro Completo: KS Healing",
    description: "Versión digital del libro completo con 17 capítulos, ejercicios y códigos QR para transmisiones en video.",
    tipo: "PDF + Video",
    tamaño: "125 MB",
    paginas: "320 páginas",
    precio: "$39 USD",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    id: 6,
    title: "Certificado de Practicante",
    description: "Acceso a programa de certificación en línea con 8 módulos, mentoría y transmisiones en vivo.",
    tipo: "Programa Online",
    tamaño: "Acceso completo",
    duracion: "8 semanas",
    precio: "$1,999 USD",
    icon: Lock,
    color: "text-amber-500",
  },
];

export default function Recursos() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Recursos y Materiales
            </h1>
            <p className="text-xl text-white/90">
              Accede a guías, meditaciones, libros y programas para profundizar tu práctica
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recursos.map((recurso) => {
              const Icon = recurso.icon;
              return (
                <Card key={recurso.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">
                        {recurso.tipo}
                      </p>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {recurso.title}
                      </h3>
                    </div>
                    <Icon size={32} className={`${recurso.color} flex-shrink-0`} />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-6">
                      {recurso.description}
                    </p>

                    <div className="space-y-2 mb-6 pb-6 border-b border-border text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Tamaño:</span>
                        <span className="font-semibold text-foreground">{recurso.tamaño}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{recurso.paginas ? "Páginas" : "Duración"}:</span>
                        <span className="font-semibold text-foreground">
                          {recurso.paginas || recurso.duracion}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-2xl font-bold text-primary">
                        {recurso.precio}
                      </p>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                      {recurso.precio === "Gratuito" ? (
                        <>
                          <Download size={16} />
                          Descargar
                        </>
                      ) : (
                        <>
                          <ArrowRight size={16} />
                          Obtener Acceso
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Puedo descargar los recursos gratuitos sin crear cuenta?",
                  a: "Sí, los recursos gratuitos están disponibles para descarga inmediata. Solo necesitas proporcionar tu email para recibir el enlace de descarga.",
                },
                {
                  q: "¿Cuál es la diferencia entre los recursos gratuitos y de pago?",
                  a: "Los recursos gratuitos son introducciones y meditaciones básicas. Los de pago incluyen contenido avanzado, programas completos de certificación y acceso a comunidad privada.",
                },
                {
                  q: "¿Tengo acceso de por vida a los recursos comprados?",
                  a: "Sí, una vez comprado, tienes acceso de por vida a todos los materiales, incluyendo futuras actualizaciones.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="font-display font-bold text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
