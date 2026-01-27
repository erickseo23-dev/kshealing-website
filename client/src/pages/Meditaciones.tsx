import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Zap, Lock } from "lucide-react";
import { useState } from "react";

const meditaciones = [
  {
    id: 1,
    titulo: "Coherencia Energética - Nivel Básico",
    descripcion: "Meditación de 15 minutos para activar coherencia entre cuerpo, mente y espíritu.",
    duracion: "15 min",
    nivel: "Básico",
    energia: "Activación",
    precio: "Gratuito",
    acceso: "Libre",
    instructor: "YOHEV",
  },
  {
    id: 2,
    titulo: "Activación de Centros Energéticos",
    descripcion: "Meditación guiada de 20 minutos para despertar y activar tus centros energéticos.",
    duracion: "20 min",
    nivel: "Intermedio",
    energia: "Transformación",
    precio: "$9.99",
    acceso: "Premium",
    instructor: "YOHEV",
  },
  {
    id: 3,
    titulo: "Conexión con la Energía Crística",
    descripcion: "Viaje profundo de 30 minutos para conectar con la Energía KS y recibir transmisión directa.",
    duracion: "30 min",
    nivel: "Avanzado",
    energia: "Transmisión",
    precio: "$14.99",
    acceso: "Premium",
    instructor: "YOHEV",
  },
  {
    id: 4,
    titulo: "Meditación Ascendente - Fase 1",
    descripcion: "Primera fase de la meditación ascendente para practicantes certificados.",
    duracion: "25 min",
    nivel: "Intermedio",
    energia: "Ascensión",
    precio: "$12.99",
    acceso: "Certificados",
    instructor: "YOHEV",
  },
  {
    id: 5,
    titulo: "Sanación Profunda con KS Healing",
    descripcion: "Meditación de 35 minutos para facilitar sanación profunda a nivel celular y energético.",
    duracion: "35 min",
    nivel: "Avanzado",
    energia: "Sanación",
    precio: "$16.99",
    acceso: "Premium",
    instructor: "YOHEV",
  },
  {
    id: 6,
    titulo: "Coherencia Diaria - Rutina de 5 Minutos",
    descripcion: "Meditación rápida para mantener coherencia durante el día.",
    duracion: "5 min",
    nivel: "Básico",
    energia: "Mantenimiento",
    precio: "Gratuito",
    acceso: "Libre",
    instructor: "YOHEV",
  },
  {
    id: 7,
    titulo: "Meditación Ascendente - Fase 2",
    descripcion: "Segunda fase de la meditación ascendente para profundizar la práctica.",
    duracion: "30 min",
    nivel: "Avanzado",
    energia: "Ascensión",
    precio: "$14.99",
    acceso: "Certificados",
    instructor: "YOHEV",
  },
  {
    id: 8,
    titulo: "Visualización del Toroide Energético",
    descripcion: "Meditación guiada para visualizar y activar el campo toroidal de tu cuerpo.",
    duracion: "28 min",
    nivel: "Intermedio",
    energia: "Geometría Sagrada",
    precio: "$11.99",
    acceso: "Premium",
    instructor: "YOHEV",
  },
  {
    id: 9,
    titulo: "Transmisión Nocturna - Sueño Reparador",
    descripcion: "Meditación para dormir mientras recibes transmisión de Energía KS.",
    duracion: "45 min",
    nivel: "Básico",
    energia: "Regeneración",
    precio: "$9.99",
    acceso: "Premium",
    instructor: "YOHEV",
  },
];

export default function Meditaciones() {
  const [filtroNivel, setFiltroNivel] = useState("");
  const [filtroAcceso, setFiltroAcceso] = useState("");

  const niveles = ["Básico", "Intermedio", "Avanzado"];
  const accesos = ["Libre", "Premium", "Certificados"];

  const meditacionesFiltradas = meditaciones.filter((m) => {
    const nivelMatch = !filtroNivel || m.nivel === filtroNivel;
    const accesoMatch = !filtroAcceso || m.acceso === filtroAcceso;
    return nivelMatch && accesoMatch;
  });

  const getColorNivel = (nivel: string) => {
    switch (nivel) {
      case "Básico":
        return "bg-green-100 text-green-700";
      case "Intermedio":
        return "bg-blue-100 text-blue-700";
      case "Avanzado":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Meditaciones Guiadas
            </h1>
            <p className="text-xl text-white/90">
              Meditaciones con transmisión directa de Energía Crística para tu transformación
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Nivel</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFiltroNivel("")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    filtroNivel === ""
                      ? "bg-primary text-white"
                      : "bg-background border border-border text-foreground hover:bg-primary/10"
                  }`}
                >
                  Todos
                </button>
                {niveles.map((nivel) => (
                  <button
                    key={nivel}
                    onClick={() => setFiltroNivel(nivel)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      filtroNivel === nivel
                        ? "bg-primary text-white"
                        : "bg-background border border-border text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {nivel}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Acceso</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFiltroAcceso("")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    filtroAcceso === ""
                      ? "bg-primary text-white"
                      : "bg-background border border-border text-foreground hover:bg-primary/10"
                  }`}
                >
                  Todos
                </button>
                {accesos.map((acceso) => (
                  <button
                    key={acceso}
                    onClick={() => setFiltroAcceso(acceso)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      filtroAcceso === acceso
                        ? "bg-primary text-white"
                        : "bg-background border border-border text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {acceso}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meditations Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {meditacionesFiltradas.map((meditacion) => (
              <Card key={meditacion.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {meditacion.titulo}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {meditacion.descripcion}
                      </p>
                    </div>
                    {meditacion.acceso === "Certificados" && (
                      <Lock size={20} className="text-primary flex-shrink-0 ml-2" />
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getColorNivel(meditacion.nivel)}`}>
                      {meditacion.nivel}
                    </span>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {meditacion.energia}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Clock size={16} className="text-primary" />
                      <span>{meditacion.duracion}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Zap size={16} className="text-primary" />
                      <span>Instructor: {meditacion.instructor}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-primary">
                      {meditacion.precio}
                    </p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                    <Play size={16} />
                    {meditacion.acceso === "Libre" ? "Escuchar Ahora" : "Acceder"}
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
            Acceso Ilimitado
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtén acceso a todas las meditaciones con una membresía anual. Incluye nuevas meditaciones cada mes.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Obtener Membresía
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
