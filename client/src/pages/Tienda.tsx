import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, ExternalLink, BookOpen, Zap } from "lucide-react";
import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "KS Healing - Edición Pasta Blanda",
    precio: "$24.99",
    descripcion: "Edición impresa del libro completo con portada de tapa blanda, papel de calidad premium y códigos QR funcionales.",
    categoria: "Libros",
    rating: 5,
    resenas: 87,
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/MrRNPEinRqrTZOhj.png",
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
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/DIwtEkxVYJefxHIS.jpg",
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
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/wTcABhDGePqFMEqs.png",
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
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/nGTwEzzpNKfmvssq.jpg",
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
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/vupSRnQDEVzOSrUx.png",
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
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/ZpJlBfWKHmLtpdxZ.jpg",
    stock: "Disponible",
    enlace: "https://a.co/d/2RWWKcJ",
  },
  {
    id: 7,
    nombre: "KS Healing - Certificación",
    precio: "Por definir",
    descripcion: "Programa de formación en la técnica de sanación energética KS Healing. Aprende a trabajar directamente con la Energía Keiouvos Stharef y convértete en practitioner certificado.",
    categoria: "Cursos",
    rating: 5,
    resenas: 42,
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/KzMWJULlZLjXxGFa.png",
    stock: "Disponible",
    enlace: "https://www.i3cdigital.com/offers/FQuDTjNV/checkout",
  },
  {
    id: 8,
    nombre: "Club del Retiro Sagrado",
    precio: "$500/mes",
    descripcion: "12 meses de transformación. Retiros mensuales en vivo con YOHEV. Acceso a grabaciones ilimitadas, comunidad de miembros y contenido exclusivo. Cada mes, una nueva oportunidad de evolucionar.",
    categoria: "Cursos",
    rating: 5,
    resenas: 156,
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/mEaEKxUPTCzmhtpD.jpg",
    stock: "Disponible",
    enlace: "/club-retiro-sagrado",
  },

  {
    id: 11,
    nombre: "Taller Gratuito KS Healing",
    precio: "Gratis",
    descripcion: "Taller introductorio gratuito donde YOHEV comparte los fundamentos de la Energía KS Healing. Perfecto para principiantes que desean explorar esta metodología de transformación.",
    categoria: "Gratuito",
    rating: 5,
    resenas: 234,
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/ApFIpMkfyrfGeKPH.png",
    stock: "Disponible",
    enlace: "/taller-ks-healing",
  },
];

export default function Tienda() {
  const [filtroCategoria, setFiltroCategoria] = useState("");

  const categorias = ["Libros", "Cursos", "Gratuito"];
  
  const productosFiltrados = filtroCategoria
    ? productos.filter((p) => p.categoria === filtroCategoria)
    : productos;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Nuestra <span className="text-primary">Tienda</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Accede a libros, cursos y programas de transformación diseñados para tu evolución espiritual
            </p>
            <p className="text-lg text-primary font-semibold">
              Libros • Cursos • Programas • Talleres Gratuitos
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Cart */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
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
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map((producto) => (
              <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                {/* Image Container */}
                <div className="relative w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden group">
                  <img 
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                          className={i < Math.floor(producto.rating) ? "fill-primary text-primary" : "text-muted-foreground"}
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
                    </div>
                    <p className="text-xs text-green-600 font-semibold mt-1">
                      {producto.stock}
                    </p>
                  </div>

                  {/* CTA Button */}
                  {producto.enlace.startsWith("http") ? (
                    <a
                      href={producto.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                        <ExternalLink size={16} />
                        {producto.categoria === "Libros" ? "Ver en Amazon" : "Inscribirse"}
                      </Button>
                    </a>
                  ) : (
                    <a href={producto.enlace} className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                        Más Información
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Listo para tu transformación?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada producto en nuestra tienda está diseñado con intención y energía para apoyar tu camino de evolución espiritual y sanación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/taller-ks-healing">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                Explorar Taller Gratuito
              </Button>
            </a>
            <a href="/ks-healing">
              <Button size="lg" variant="outline" className="gap-2">
                Ver Certificación
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
