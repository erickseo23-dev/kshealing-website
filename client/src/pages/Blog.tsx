import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Comprendiendo la Energía Crística Keiouvos Stharef",
    excerpt: "Explora los fundamentos de la Energía KS y cómo funciona en tu sistema energético para facilitar transformación profunda.",
    author: "YOHEV",
    date: "27 de Enero, 2026",
    category: "Educación",
    readTime: "8 min",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "El Viaje de la Consciencia: De la Ignorancia al Recuerdo",
    excerpt: "Una reflexión sobre cómo la Energía KS facilita el viaje del alma hacia el recuerdo de su verdadera naturaleza divina.",
    author: "YOHEV",
    date: "20 de Enero, 2026",
    category: "Espiritualidad",
    readTime: "10 min",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "Coherencia Energética: La Base de la Sanación Real",
    excerpt: "Descubre cómo la coherencia entre cuerpo, mente y espíritu es la verdadera base para una sanación que perdura.",
    author: "YOHEV",
    date: "13 de Enero, 2026",
    category: "Sanación",
    readTime: "7 min",
    image: "/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "Los Centros Energéticos y la Activación de KS Healing",
    excerpt: "Aprende cómo los ejercicios de KS Healing activan tus centros energéticos para facilitar transformación integral.",
    author: "YOHEV",
    date: "6 de Enero, 2026",
    category: "Técnica",
    readTime: "9 min",
    image: "/images/blog-4.jpg",
  },
  {
    id: 5,
    title: "Frecuencia de Alta Vibración: Vivir desde la Coherencia",
    excerpt: "Explora qué significa vivir en una frecuencia de alta vibración y cómo KS Healing facilita este estado de ser.",
    author: "YOHEV",
    date: "30 de Diciembre, 2025",
    category: "Consciencia",
    readTime: "8 min",
    image: "/images/blog-5.jpg",
  },
  {
    id: 6,
    title: "El Toroide: Geometría Sagrada de la Energía Vital",
    excerpt: "Descubre la importancia del modelo toroidal en KS Healing y cómo refleja la estructura energética del universo.",
    author: "YOHEV",
    date: "23 de Diciembre, 2025",
    category: "Geometría Sagrada",
    readTime: "11 min",
    image: "/images/blog-6.jpg",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Blog KS Healing
            </h1>
            <p className="text-xl text-white/90">
              Artículos, reflexiones y enseñanzas sobre la Energía Crística y el camino de la transformación
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <p className="font-display text-2xl font-bold text-primary/50">{post.id}</p>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full gap-2">
                    Leer Artículo
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
              No te pierdas nuevos artículos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Suscríbete para recibir reflexiones, enseñanzas y actualizaciones sobre KS Healing
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
