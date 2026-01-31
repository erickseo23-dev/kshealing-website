import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {description}
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Esta sección está en desarrollo. Pronto estará disponible con contenido completo.
            </p>
            <Link href="/">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
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
