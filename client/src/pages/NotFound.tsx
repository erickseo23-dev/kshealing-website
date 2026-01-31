import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-display text-7xl font-bold text-primary mb-6">
              404
            </h1>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Página No Encontrada
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <Link href="/">
              <a>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  <ArrowLeft size={20} />
                  Volver al Inicio
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
