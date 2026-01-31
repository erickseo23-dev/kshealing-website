import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DART() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm w-fit">
                <span className="text-sm font-semibold text-blue-400">🔄 Terapia Avanzada</span>
              </div>
              <div>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">D.A.R.T.</h1>
                <p className="text-2xl text-blue-400 font-semibold">Deep Archetypal Renewal Therapy</p>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Trabaja en la raíz de tus patrones internos para reemplazar arquetipos positivos y balanceados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Conocer Más</Button>
                <Button size="lg" variant="outline">Agendar Consulta</Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img src="/images/dart-archetypal-renewal.png" alt="D.A.R.T." className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
