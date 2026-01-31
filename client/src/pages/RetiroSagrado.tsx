import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RetiroSagrado() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-emerald-950/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm w-fit">
                <span className="text-sm font-semibold text-emerald-400">🏞️ Santuario</span>
              </div>
              <div>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">Retiro Sagrado</h1>
                <p className="text-2xl text-emerald-400 font-semibold">Espacio de Transformación</p>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Sumérgete en un retiro transformador donde reconectas con tu esencia divina en un ambiente sagrado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">Reservar Retiro</Button>
                <Button size="lg" variant="outline">Ver Fechas</Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img src="/images/retiro-sagrado-sanctuary.png" alt="Retiro Sagrado" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
