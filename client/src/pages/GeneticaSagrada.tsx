import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function GeneticaSagrada() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm w-fit">
                <span className="text-sm font-semibold text-purple-400">🧬 Código Sagrado</span>
              </div>
              <div>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">Genética Sagrada</h1>
                <p className="text-2xl text-purple-400 font-semibold">Activación del Código Divino</p>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Despierta el potencial dormido en tu ADN. Accede a la sabiduría ancestral codificada en tus células.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Explorar</Button>
                <Button size="lg" variant="outline">Más Información</Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img src="/images/genetica-sagrada-dna.png" alt="Genética Sagrada" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
