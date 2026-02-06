import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart, ExternalLink } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { SchemaProduct } from "@/components/SchemaProduct";

const productos = [
  {
    id: 1,
    nombre: "KS Healing - Edición Pasta Blanda",
    precio: "$24.99",
    descripcion: "Edición impresa del libro completo con portada de tapa blanda, papel de calidad premium y códigos QR funcionales.",
    categoria: "Libros",
    rating: 5,
    resenas: 87,
    imagen: "📕",
    stock: "En stock",
    enlace: "https://a.co/d/ini6U2Y",
  },
  {
    id: 2,
    nombre: "KS Healing - Edición Ebook Kindle",
    precio: "$9.99",
    descripcion: "Versión digital del libro completo con enlaces directos a los videos. Acceso inmediato, portátil y en tu dispositivo.",
    categoria: "Libros",
    rating: 5,
    resenas: 156,
    imagen: "📱",
    stock: "Disponible",
    enlace: "https://a.co/d/45jDr6p",
  },
  {
    id: 3,
    nombre: "Secretos de los Arcángeles - Pasta Blanda",
    precio: "$28.99",
    descripcion: "Obra de Claribel Puga que explora la sabiduría ancestral de los arcángeles y su influencia en la transformación personal.",
    categoria: "Libros",
    rating: 4.9,
    resenas: 64,
    imagen: "📘",
    stock: "En stock",
    enlace: "https://a.co/d/en9RPql",
  },
  {
    id: 4,
    nombre: "Secretos de los Arcángeles - Ebook Kindle",
    precio: "$12.99",
    descripcion: "Versión digital con acceso inmediato a la sabiduría de los arcángeles en tu dispositivo.",
    categoria: "Libros",
    rating: 4.9,
    resenas: 42,
    imagen: "📱",
    stock: "Disponible",
    enlace: "https://a.co/d/6Tg6XGj",
  },
  {
    id: 5,
    nombre: "Valentina en el Reino Astral - Pasta Blanda",
    precio: "$32.99",
    descripcion: "Obra conjunta de Claribel Puga y YOHEV que narra un viaje transformador a través de los reinos astrales.",
    categoria: "Libros",
    rating: 5,
    resenas: 78,
    imagen: "📙",
    stock: "En stock",
    enlace: "https://a.co/d/fJyOYVP",
  },
  {
    id: 6,
    nombre: "Valentina en el Reino Astral - Ebook Kindle",
    precio: "$14.99",
    descripcion: "Versión digital del viaje astral de Valentina con acceso inmediato en tu dispositivo.",
    categoria: "Libros",
    rating: 5,
    resenas: 55,
    imagen: "📱",
    stock: "Disponible",
    enlace: "https://a.co/d/2RWWKcJ",
  },
  {
    id: 7,
    nombre: "KS Healing - Certificación",
    precio: "Por definir",
    descripcion: "Programa de formación en la técnica de sanación energética KS Healing. Aprende a trabajar directamente con la Energía Keiouvos Stharef y conviértete en practitioner certificado.",
    categoria: "Cursos",
    rating: 5,
    resenas: 42,
    imagen: "🎓",
    stock: "Disponible",
    enlace: "https://kajabi.com",
  },
  {
    id: 8,
    nombre: "D.A.R.T. - Deep Archetypal Renewal Therapy",
    precio: "Por definir",
    descripcion: "Programa avanzado de transformación profunda que trabaja con arquetipos internos y renovación de patrones. Dirigido por YOHEV.",
    categoria: "Cursos",
    rating: 4.9,
    resenas: 28,
    imagen: "✨",
    stock: "Disponible",
    enlace: "https://kajabi.com",
  },
  {
    id: 9,
    nombre: "Genética Sagrada - Las 12 Capas del ADN",
    precio: "Por definir",
    descripcion: "Exploración profunda de las 12 dimensiones del ADN espiritual. Accede a la sabiduría ancestral de tu linaje y activa tu potencial multidimensional.",
    categoria: "Cursos",
    rating: 5,
    resenas: 35,
    imagen: "🧬",
    stock: "Disponible",
    enlace: "https://kajabi.com",
  },
  {
    id: 10,
    nombre: "Meditación Ascendente",
    precio: "Por definir",
    descripcion: "Método progresivo de expansión de consciencia. Desarrolla presencia, claridad interna y regulación emocional a través de la práctica continua guiada.",
    categoria: "Cursos",
    rating: 5,
    resenas: 89,
    imagen: "🧘",
    stock: "Disponible",
    enlace: "https://kajabi.com",
  },
];

export default function Tienda() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);
  const [carrito, setCarrito] = useState<typeof productos>([]);
  
  // Generar schemas para los primeros 3 productos destacados
  const productSchemas = productos.slice(0, 3).map(p => (
    <SchemaProduct
      key={p.id}
      name={p.nombre}
      description={p.descripcion}
      image={p.imagen}
      price={p.precio.replace('$', '').replace('Por definir', '0')}
      url={p.enlace}
      ratingValue={p.rating}
      ratingCount={p.resenas}
    />
  ));
  
  const seoContent = (
    <SEO
      title="Tienda KS Healing - Libros, Cursos y Programas"
      description="Compra libros, cursos, certificaciones y programas de KS Healing. Acceso a transmisiones de energía, meditaciones y recursos de transformación espiritual."
      keywords="tienda KS Healing, libros, cursos, certificación, energía crística, sanación energética, YOHEV"
      canonicalUrl="https://kshealing.com/tienda"
    />
  );

  const categorias = ["Todos", "Libros", "Cursos", "Gratuito"];
  
  const productosFiltrados = filtroCategoria
    ? productos.filter((p) => p.categoria === filtroCategoria)
    : productos;

  const agregarAlCarrito = (producto: typeof productos[0]) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      {productSchemas}
      {seoContent}
      <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Nuestros Libros
            </h1>
            <p className="text-xl text-white/90">
              Explora la sabiduría y transformación a través de nuestras publicaciones
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Cart */}
      <section className="py-8 bg-blue-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Categorías</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFiltroCategoria("")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    filtroCategoria === ""
                      ? "bg-blue-800 text-white"
                      : "bg-background border border-border text-foreground hover:bg-blue-100"
                  }`}
                >
                  Todos
                </button>
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFiltroCategoria(cat)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      filtroCategoria === cat
                        ? "bg-blue-800 text-white"
                        : "bg-background border border-border text-foreground hover:bg-blue-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map((producto) => (
              <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="bg-gradient-to-br from-blue-100 to-slate-100 h-48 flex items-center justify-center relative group">
                  <span className="text-6xl">{producto.imagen}</span>
                  <button className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                    <Heart size={20} className="text-blue-800" />
                  </button>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-2 py-1 rounded">
                      {producto.categoria}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {producto.nombre}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {producto.descripcion}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(producto.rating) ? "fill-blue-500 text-blue-500" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({producto.resenas})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-800">
                        {producto.precio}
                      </span>
                    </div>
                    <p className="text-xs text-green-600 font-semibold mt-1">
                      {producto.stock}
                    </p>
                  </div>

                  <a
                    href={producto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className="w-full bg-blue-800 hover:bg-blue-900 text-white gap-2"
                    >
                      <ExternalLink size={16} />
                      Ver en Amazon
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            ¿Buscas más?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre nuestros programas de formación, cursos y meditaciones guiadas en la sección de Cursos.
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
