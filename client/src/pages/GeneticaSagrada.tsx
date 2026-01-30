import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Dna, Zap, Heart, Users, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { geneticaSagradaTestimonials } from "@/lib/programTestimonials";

export default function GeneticaSagrada() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold">🧬 Programa Ancestral</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Genética <span className="text-primary">Sagrada</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Accede a la sabiduría ancestral de tu linaje. Activa tu ADN espiritual y reconecta con el poder hereditario de tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explorar tu Linaje
              </Button>
              <Button size="lg" variant="outline">
                Ver Próximos Talleres
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Genética Sagrada */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                ¿Qué es <span className="text-primary">Genética Sagrada</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  Genética Sagrada es un programa diseñado para acceder a la sabiduría ancestral de tu linaje familiar y activar el potencial divino codificado en tu ADN espiritual.
                </p>
                <p className="text-lg leading-relaxed">
                  Este programa reconoce que no solo heredamos genes físicos, sino también patrones energéticos, creencias, talentos y dones de nuestros ancestros.
                </p>
                <p className="text-lg leading-relaxed">
                  A través de Genética Sagrada, aprendes a:
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Conectar con la sabiduría de tu linaje ancestral",
                  "Activar el ADN espiritual dormido",
                  "Sanar traumas generacionales",
                  "Reclamar los dones heredados de tu familia",
                  "Honrar y integrar la herencia divina",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="/sdfsf.jpeg" 
                alt="Genética Sagrada" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ancestral Wisdom */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              La Sabiduría de tus <span className="text-primary">Ancestros</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tu linaje familiar es un tesoro de conocimiento y poder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Dna,
                title: "Herencia Genética Espiritual",
                description: "Tu ADN contiene la memoria y sabiduría de generaciones de ancestros",
              },
              {
                icon: Zap,
                title: "Dones y Talentos Heredados",
                description: "Activa los dones especiales que tu familia ha cultivado a lo largo del tiempo",
              },
              {
                icon: Heart,
                title: "Sanación Generacional",
                description: "Sana traumas y patrones que se han transmitido de generación en generación",
              },
              {
                icon: Users,
                title: "Conexión Familiar Profunda",
                description: "Reconecta con tus ancestros y honra su legado en tu vida",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* DNA Activation */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Activación del <span className="text-primary">ADN Espiritual</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Despierta el potencial divino codificado en tu ser
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Exploración del Linaje",
                description: "Accedemos a la información energética de tu árbol genealógico y ancestros",
              },
              {
                step: 2,
                title: "Identificación de Dones",
                description: "Identificamos los talentos y dones especiales heredados de tu familia",
              },
              {
                step: 3,
                title: "Activación del ADN",
                description: "Utilizamos la Energía KS para activar el ADN espiritual dormido",
              },
              {
                step: 4,
                title: "Integración y Empoderamiento",
                description: "Integras los dones ancestrales y te empodera para usarlos en tu vida",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold">
                    {item.step}
                  </div>
                  {item.step < 4 && <div className="w-1 h-16 bg-primary/30 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Generational Trauma */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-border/50 bg-gradient-to-br from-primary/10 to-background">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Sanación de Traumas <span className="text-primary">Generacionales</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Los traumas no sanados en una generación se transmiten a la siguiente. Genética Sagrada te permite identificar y sanar estos patrones ancestrales.
                </p>
                <p className="text-lg leading-relaxed">
                  Al sanar tu linaje, no solo te liberas a ti mismo, sino que también ayudas a sanar a tus ancestros y proteges a las generaciones futuras.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary">
                  Eres el punto de quiebre donde termina el sufrimiento ancestral y comienza la sanación.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Beneficios de <span className="text-primary">Genética Sagrada</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Conexión profunda con tu herencia ancestral",
              "Activación de dones y talentos heredados",
              "Sanación de traumas generacionales",
              "Mayor claridad sobre tu propósito familiar",
              "Empoderamiento personal y familiar",
              "Honra y respeto por tu linaje",
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-gradient-to-br from-primary/10 to-background">
                <div className="flex gap-4">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Conexiones <span className="text-primary">Ancestrales</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo Genética Sagrada ha reconectado a personas con su linaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {geneticaSagradaTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-border/50 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.certification}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Reconecta con tu Herencia Divina
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre el poder ancestral que vive en tu ADN y actívalo en tu vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
              Comenzar Exploración
              <ArrowRight size={20} />
            </Button>
            <Link href="/eventos">
              <a>
                <Button size="lg" variant="outline">
                  Ver Próximos Talleres
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
