import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Libro KS Healing - Edición Física",
    precio: "$49.99",
    precioOriginal: "$59.99",
    descripcion: "Edición impresa del libro completo con portada premium y papel de calidad.",
    categoria: "Libros",
    rating: 5,
    resenas: 87,
    imagen: "📕",
    stock: "En stock",
  },
  {
    id: 2,
    nombre: "Libro KS Healing - Edición Digital",
    precio: "$29.99",
    descripcion: "Versión PDF del libro completo con códigos QR para acceso a videos.",
    categoria: "Libros",
    rating: 5,
    resenas: 156,
    imagen: "📱",
    stock: "Disponible",
  },
  {
    id: 3,
    nombre: "Bundle: Libro + Meditaciones",
    precio: "$69.99",
    precioOriginal: "$89.99",
    descripcion: "Libro completo + 7 meditaciones guiadas de Energía KS.",
    categoria: "Bundles",
    rating: 4.9,
    resenas: 42,
    imagen: "📦",
    stock: "En stock",
  },
  {
    id: 4,
    nombre: "Cristal Energizado KS Healing",
    precio: "$39.99",
    descripcion: "Cristal de cuarzo blanco energizado con Energía KS para amplificar tu práctica.",
    categoria: "Accesorios",
    rating: 4.8,
    resenas: 34,
    imagen: "💎",
    stock: "En stock",
  },
  {
    id: 5,
    nombre: "Meditación Ascendente - Pack Completo",
    precio: "$79.99",
    precioOriginal: "$99.99",
    descripcion: "12 meditaciones progresivas con guía completa para practicantes avanzados.",
    categoria: "Audio",
    rating: 4.9,
    resenas: 68,
    imagen: "🎵",
    stock: "Disponible",
  },
  {
    id: 6,
    nombre: "Tapete de Meditación KS Healing",
    precio: "$59.99",
    descripcion: "Tapete premium con símbolo de Energía KS para crear espacio sagrado.",
    categoria: "Accesorios",
    rating: 4.7,
    resenas: 28,
    imagen: "🧘",
    stock: "En stock",
  },
  {
    id: 7,
    nombre: "Vela Energizada KS Healing",
    precio: "$24.99",
    descripcion: "Vela aromática energizada con intención de coherencia y transformación.",
    categoria: "Accesorios",
    rating: 4.8,
    resenas: 45,
    imagen: "🕯️",
    stock: "En stock",
  },
  {
    id: 8,
    nombre: "Diario de Práctica KS Healing",
    precio: "$19.99",
    descripcion: "Diario estructurado para registrar tu práctica y transformación.",
    categoria: "Libros",
    rating: 4.6,
    resenas: 22,
    imagen: "📔",
    stock: "En stock",
  },
  {
    id: 9,
    nombre: "Certificado de Practicante",
    precio: "$1,999",
    descripcion: "Programa completo de certificación con 8 módulos, mentoría y transmisiones.",
    categoria: "Certificaciones",
    rating: 4.9,
    resenas: 156,
    imagen: "🎓",
    stock: "Abierto",
  },
];

export default function Tienda() {
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [carrito, setCarrito] = useState<typeof productos>([]);

  const categorias = ["Libros", "Audio", "Accesorios", "Bundles", "Certificaciones"];
  
  const productosFiltrados = filtroCategoria
    ? productos.filter((p) => p.categoria === filtroCategoria)
    : productos;

  const agregarAlCarrito = (producto: typeof productos[0]) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Tienda KS Healing
            </h1>
            <p className="text-xl text-white/90">
              Recursos, libros, meditaciones y accesorios para tu práctica
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Cart */}
      <section className="py-8 bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Categorías</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFiltroCategoria("")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    filtroCategoria === ""
                      ? "bg-primary text-white"
                      : "bg-background border border-border text-foreground hover:bg-primary/10"
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
                        ? "bg-primary text-white"
                        : "bg-background border border-border text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-right">
              <button className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-primary/10 transition-colors">
                <ShoppingCart size={20} />
                <span className="font-semibold">{carrito.length}</span>
              </button>
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
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center relative group">
                  <span className="text-6xl">{producto.imagen}</span>
                  <button className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                    <Heart size={20} className="text-primary" />
                  </button>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
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
                          className={i < Math.floor(producto.rating) ? "fill-secondary text-secondary" : "text-muted-foreground"}
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
                      <span className="text-2xl font-bold text-primary">
                        {producto.precio}
                      </span>
                      {producto.precioOriginal && (
                        <span className="text-sm text-muted-foreground line-through">
                          {producto.precioOriginal}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-green-600 font-semibold mt-1">
                      {producto.stock}
                    </p>
                  </div>

                  <Button
                    onClick={() => agregarAlCarrito(producto)}
                    className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
                  >
                    <ShoppingCart size={16} />
                    Agregar al Carrito
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctanos para solicitudes personalizadas, regalos corporativos o productos especiales.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Contactar Ventas
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
