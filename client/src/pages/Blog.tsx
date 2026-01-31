import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Cómo la Energía KS Transforma tu Realidad",
    excerpt: "Descubre los tres pilares de la transformación a través de la Energía KS y cómo activar tu verdadero potencial.",
    author: "YOHEV",
    date: "15 de Enero, 2026",
    category: "Transformación",
    readTime: "8 min",
    image: "/images/blog-transformacion.png",
    slug: "article-1",
  },
  {
    id: 2,
    title: "Los 7 Chakras y el Chakra Timo: La Puerta al Corazón Energético",
    excerpt: "Explora el sistema de chakras y descubre el Chakra Timo, el centro de tu poder creativo y manifestación.",
    author: "YOHEV",
    date: "12 de Enero, 2026",
    category: "Energía",
    readTime: "10 min",
    image: "/images/blog-chakras.png",
    slug: "article-2",
  },
  {
    id: 3,
    title: "Entrelazamiento Cuántico y Consciencia: La Ciencia Detrás de KS Healing",
    excerpt: "Comprende cómo la física cuántica explica el funcionamiento de KS Healing y tu poder de crear realidad.",
    author: "YOHEV",
    date: "8 de Enero, 2026",
    category: "Ciencia",
    readTime: "12 min",
    image: "/images/blog-cuantica.png",
    slug: "article-3",
  },
  {
    id: 4,
    title: "Sintropía vs Entropía: Por Qué Tu Cuerpo Necesita Regeneración Energética",
    excerpt: "Descubre cómo la Energía KS activa procesos sintropicos que regeneran tu cuerpo y revierten el envejecimiento.",
    author: "YOHEV",
    date: "5 de Enero, 2026",
    category: "Sanación",
    readTime: "9 min",
    image: "/images/blog-sintropía.png",
    slug: "article-4",
  },
  {
    id: 5,
    title: "Testimonios Reales: Cómo KS Healing Cambió Vidas",
    excerpt: "Lee historias auténticas de transformación de profesionales que experimentaron el poder de KS Healing.",
    author: "YOHEV",
    date: "1 de Enero, 2026",
    category: "Testimonios",
    readTime: "10 min",
    image: "/images/blog-testimonios.png",
    slug: "article-5",
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
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
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
                  
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <Button variant="outline" className="w-full gap-2">
                        Leer Artículo
                        <ArrowRight size={16} />
                      </Button>
                    </a>
                  </Link>
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
