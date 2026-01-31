import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/retiro-momento-1.png",
    alt: "Círculo de meditación grupal",
    title: "Círculo de Meditación",
    description: "Momentos de profunda conexión durante las sesiones grupales de sanación",
  },
  {
    id: 2,
    src: "/images/retiro-momento-2.png",
    alt: "Transformación energética",
    title: "Transformación Energética",
    description: "Experiencias de sanación profunda y activación de chakras",
  },
  {
    id: 3,
    src: "/images/retiro-momento-3.png",
    alt: "Unidad y conexión",
    title: "Unidad y Conexión",
    description: "La fuerza de la comunidad en el viaje de transformación espiritual",
  },
  {
    id: 4,
    src: "/images/retiro-momento-4.png",
    alt: "Breakthrough espiritual",
    title: "Breakthrough Espiritual",
    description: "Momentos de iluminación y expansión de conciencia",
  },
];

export default function RetiroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Momentos de <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Vive a través de los ojos de nuestros participantes los momentos más sagrados de nuestros retiros
            </p>
          </div>

          {/* Main Gallery */}
          <div className="relative group">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  {currentImage.description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-4 mt-8 justify-center flex-wrap">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-24 h-24 object-cover"
                />
              </button>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex gap-2 mt-8 justify-center">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Sé parte de estos momentos transformadores
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Únete al Próximo Retiro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
