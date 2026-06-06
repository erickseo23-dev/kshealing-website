import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Heart, Zap, Users, Star, Leaf, Sparkles, Share2, Calendar, Clock, MapPin, ArrowRight, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { retiroSagradoTestimonials } from "@/lib/programTestimonials";
import { eventos } from "@/lib/events";
import { useState } from "react";

export default function RetiroSagrado() {
  const [selectedRetiro, setSelectedRetiro] = useState<any>(null);
  const [selectedRetiro2025, setSelectedRetiro2025] = useState<any>(null);

  const retiros2025 = [
    {
      id: 1,
      nombre: "Volver al Silencio",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/volver-al-silencio-retreat-PuewyS8Gpa6YtbfmvseMkE.webp",
      descripcion: "Un retiro para aquietar el ruido interno, soltar la sobreestimulación y regresar al centro. Un espacio de pausa consciente donde el silencio se convierte en guía y claridad."
    },
    {
      id: 2,
      nombre: "Limpia tu Energía",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/limpia-tu-energia-retreat-A9GW8vQgUo2qD4nmhPYrsF.webp",
      descripcion: "Un encuentro para liberar cargas emocionales, mentales y energéticas acumuladas. Ideal para quienes sienten cansancio profundo, saturación interna o desgaste invisible."
    },
    {
      id: 3,
      nombre: "Códigos de Luz",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/codigos-de-luz-retreat-ebnmh9NgnWnaUy9kMrvNFT.webp",
      descripcion: "Un retiro de reconexión con el orden interno y la información sutil de equilibrio. Permite recordar estados de coherencia profunda y alineación más allá del esfuerzo mental."
    },
    {
      id: 4,
      nombre: "Recupera tu Centro",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/recupera-tu-centro-retreat-4wMjWfdk6UUNUy6HzdC7wV.webp",
      descripcion: "Diseñado para volver al eje interno cuando la vida, el estrés o las emociones desbalancean. Un espacio para reencontrarte contigo y restablecer estabilidad en medio del movimiento."
    },
    {
      id: 5,
      nombre: "Sana y Cierra Ciclos",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/sana-y-cierra-ciclos-retreat-AzfonYAaWTyWcdEyeML7xr.webp",
      descripcion: "Un retiro para cerrar procesos abiertos, relaciones y etapas inconclusas sin arrastre. Ayuda a liberar lo que ya cumplió su función y recuperar energía para el presente."
    },
    {
      id: 6,
      nombre: "Claves Internas para el Bienestar Verdadero",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/claves-internas-bienestar-retreat-NqGqEYKMbZsi7Vkcs8eHeo.webp",
      descripcion: "Un encuentro de comprensión profunda sobre lo que realmente sostiene el bienestar. Integra regulación emocional, coherencia mental, presencia corporal y orden energético."
    },
    {
      id: 7,
      nombre: "Presencia Viva",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/presencia-viva-retreat-jSoYc9AvwbYg8BDm4zgGKM.webp",
      descripcion: "Un retiro de profunda presencia y consciencia. Aprende a estar completamente presente en cada momento, disolviendo distracciones y conectando con tu esencia más pura. Acceso completo a la grabación disponible para ver en cualquier momento dentro de tu membresía."
    },
    {
      id: 8,
      nombre: "La Arquitectura del Amor",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/arquitectura-del-amor-couple-EddrtjoJULaDsnKrapS9u8.webp",
      descripcion: "Un retiro que explora la estructura fundamental del amor en todas sus dimensiones. Descubre cómo el amor construye, sana y transforma. Acceso completo a la grabación disponible para ver en cualquier momento dentro de tu membresía."
    },
    {
      id: 9,
      nombre: "Reinicio Energético Profundo",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/reinicio-energetico-retreat-j5cWC2a8g4Uszh94JgpFdt.webp",
      descripcion: "Un retiro de renovación y reset energético. Limpia patrones antiguos, restablece tu energía vital y comienza de nuevo con claridad y poder. Acceso completo a la grabación disponible para ver en cualquier momento dentro de tu membresía."
    },
    {
      id: 10,
      nombre: "El Niño que Habita en Ti",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/man-transformation-freedom-bsbHWNgDrMLmYA9CjnzihM.webp",
      descripcion: "Sanar la raíz emocional sin revivir el dolor. El niño interior como estructura viva que sigue organizando decisiones y vínculos."
    },
    {
      id: 11,
      nombre: "El Vínculo Materno",
      img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/aEmOStczwGCLviCw.png",
      descripcion: "La primera relación que modeló tu forma de amar y recibir. Sanar el vínculo sin rechazarlo ni idealizarlo. Un espacio para comprender cómo ese vínculo ayudó a formar tu estructura emocional y comenzar a reordenarla desde un lugar más consciente y amoroso."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />



      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/JgAVzSzhxZNnKDAE.png)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-8 px-8 py-4 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-lg">
                <span className="text-white font-bold text-2xl md:text-3xl">🌿 Retiro Sagrado 12 - CON YOHEV</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                La Fuerza <span className="text-yellow-300">Paterna</span>
              </h1>
              <p className="text-lg text-white font-semibold mb-4 drop-shadow">
                Facilitado directamente por YOHEV
              </p>
              <p className="text-xl text-white mb-6 drop-shadow">
                Autoridad, dirección y sostén interno. Cómo la figura paterna afecta tus decisiones, éxito y autoridad personal
              </p>
              <p className="text-lg text-white mb-8 italic drop-shadow">
                "La energía paterna representa dirección, protección, límites, autoridad, sostener y ser sostenido."
              </p>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white font-semibold">📅 Sábado 7 de Junio | 10:00 AM - 2:00 PM CDMX / 5:00 - 9:00 PM España</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#enrollment">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Inscribirme a este Retiro
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border-2 border-primary/30 bg-gradient-to-br from-background via-primary/5 to-accent/5 shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                🌿 <span className="text-primary">La Figura Paterna Sigue Operando en Tu Vida Adulta</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  La relación con el padre no termina en la infancia. Sigue viva en la forma en que tomas decisiones, en cómo ejerces autoridad, en tu relación con el éxito, en cómo te posicionas frente a los demás y en la manera en que te sientes sostenido… o no.
                </p>
                <p className="mt-6">
                  <span className="font-semibold text-foreground">Aun cuando una persona ya es adulta, el vínculo paterno sigue organizando silenciosamente el sistema interno de dirección, seguridad y autoridad.</span>
                </p>
                <p className="font-semibold text-foreground mt-6">
                  Este retiro no es para juzgar al papá. Tampoco para idealizarlo. Es un espacio para comprender cómo ese vínculo ayudó a formar tu estructura interna… y comenzar a reordenarla desde un lugar más consciente y libre.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Maternal Bond */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/JgAVzSzhxZNnKDAE.png" 
                alt="La Fuerza Paterna" 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-video"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                🌿 El Padre es Más que una <span className="text-primary">Figura</span>
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  La energía paterna representa:
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Dirección</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Protección</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Límites</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Autoridad</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Sostén</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Confianza</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Permiso interno para crecer</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed font-semibold text-foreground mt-6">
                  Cuando ese vínculo fue confuso, ausente, rígido o contradictorio, muchas personas desarrollan patrones que limitan su dirección, autoridad y capacidad de avanzar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Listo para sanar tu vínculo paterno?</h3>
            <p className="text-muted-foreground mb-6">Descubre cómo transformar tu relación con la energía paterna y recuperar tu autoridad y dirección interna.</p>
            <a href="#enrollment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <ArrowRight size={18} />
                Inscribirme a este Retiro
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Maternal Bond */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            🌿 ¿Por Qué Sanar el Vínculo Paterno Ahora?
          </h2>
            <div className="mb-12">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/JgAVzSzhxZNnKDAE.png" alt="Sanación del Vínculo Paterno" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Card className="relative p-8 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 group-hover:shadow-2xl transition-all duration-300 group-hover:border-primary/40">
                <Heart size={32} className="text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-4">Mayor Claridad y Dirección</h3>
                <p className="text-muted-foreground">
                  Más seguridad interna. Menos bloqueos ante el éxito. Mayor capacidad de tomar decisiones con firmeza. Relación más sana con la autoridad.
                </p>
              </Card>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Card className="relative p-8 border-2 border-accent/20 bg-gradient-to-br from-background to-accent/5 group-hover:shadow-2xl transition-all duration-300 group-hover:border-accent/40">
                <Sparkles size={32} className="text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-4">Autoridad Personal Recuperada</h3>
                <p className="text-muted-foreground">
                  Menos necesidad de aprobación externa. Más confianza en tu propio criterio. No porque olvides el pasado, sino porque dejas de estar gobernado por él.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Work */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              🌿 ¿Qué Vamos a Trabajar en Este Retiro?
            </h2>
            <div className="mb-12">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/JgAVzSzhxZNnKDAE.png" alt="La Fuerza Paterna" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Comprender cómo el vínculo paterno sigue influyendo en tu vida adulta",
                "Identificar patrones relacionados con autoridad, dirección y éxito",
                "Reconocer lealtades invisibles y mandatos heredados del padre",
                "Liberar bloqueos internos vinculados a la figura paterna",
                "Reordenar la relación interna con la energía paterna",
                "Recuperar tu autoridad personal sin necesidad de confrontación"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground font-semibold text-center">
                No se trata de revivir el pasado. Se trata de dejar de seguir viviéndolo inconscientemente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-primary/20 border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">🌿 Sana tu Vínculo Paterno</h3>
            <p className="text-muted-foreground text-lg mb-8">Un retiro diseñado para comprender y reordenar tu relación con la energía paterna. Sin juzgar, sin idealizar. Solo comprender y transformar.</p>
            <a href="#enrollment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <ArrowRight size={18} />
                Inscribirme a este Retiro
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Who is This For */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              🌿 Este Retiro es para Ti Si...
            </h2>
            <div className="mb-12">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/JgAVzSzhxZNnKDAE.png" alt="Este Retiro es para Ti" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Te cuesta ejercer autoridad o tomar decisiones con firmeza",
                "Tienes una relación complicada con el éxito o el dinero",
                "Buscas aprobación externa constantemente",
                "Sientes bloqueos ante figuras de autoridad",
                "Hay heridas no resueltas con papá",
                "O simplemente quieres comprenderte más profundamente"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <Star size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground text-center">
                <span className="font-semibold">No importa si tu padre estuvo presente, ausente, amoroso, exigente o contradictorio.</span> El trabajo ocurre dentro de ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Can Change */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              🌱 ¿Qué Puede Cambiar Después?
            </h2>
            <div className="mb-12">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/JgAVzSzhxZNnKDAE.png" alt="Cambios Posibles" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Mayor seguridad interna",
                "Más claridad para tomar decisiones",
                "Relación más sana con la autoridad",
                "Menos bloqueos ante el éxito",
                "Mayor confianza en tu propio criterio",
                "Más capacidad de sostener y ser sostenido",
                "Relaciones con figuras de autoridad más conscientes"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg">
                  <Sparkles size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-background rounded-lg border border-primary/20">
              <p className="text-foreground text-center">
                No porque olvides el pasado,<br />
                sino porque <span className="font-semibold">dejas de estar gobernado por él.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retiro Structure */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              🧘‍♀️ Estructura del Retiro (4 Horas)
            </h2>
            <div className="mb-12">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/JgAVzSzhxZNnKDAE.png" alt="Estructura del Retiro" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <Card className="p-12 border-border/50 bg-gradient-to-br from-background to-primary/10">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>El padre como estructura interna de dirección y autoridad</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Cómo el vínculo paterno moldea decisiones, éxito y autoridad personal</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Exploración de seguridad y límites internos</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Sanación de ausencia o rigidez paterna</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Liberación de mandatos y lealtades invisibles al linaje paterno</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Reordenamiento interno del vínculo paterno</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Meditación central: "Recuperar la Dirección Interna"</span>
                </li>
                <li className="flex gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Sellado de tu autoridad personal</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-6 text-center">
              ¿Cómo Accedes al Retiro?
            </h2>
            <p className="text-center text-lg text-white/90 mb-12">
              Accede a este retiro a través de tu membresía al Club del Retiro Sagrado:
            </p>
            <div className="flex justify-center mb-12">
              {/* Club Membership */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-white/40 transition-all max-w-md">

                <p className="text-white/80 mb-4 font-semibold">Acceso Completo</p>
                <h3 className="text-2xl font-bold text-white mb-2">Membresía al Club del Retiro Sagrado</h3>
                <p className="text-white/70 text-sm mb-4">Perfecto si quieres acceso continuo</p>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Este retiro en vivo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Todos los retiros futuros</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span>
                    <span>Grabaciones anteriores</span>
                  </li>
                </ul>
                <p className="text-5xl font-bold text-white mb-2">$29 USD <span className="text-2xl">(~500 MXN)</span></p>
                <p className="text-white/70 text-sm mb-6">por mes • Cancela cuando quieras</p>
                <a href="https://cursos.institutoascendant.com/offers/GdzCo9uE/checkout" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                    Inscribirse Ahora
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
                <p className="text-white/70 text-sm mt-6 border-t border-white/20 pt-4">
                  Un espacio continuo de transformacion, no eventos aislados.
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm mb-4">
                ¿Quieres acceso a todos los retiros del Club?
              </p>
              <Link href="/club-retiro-sagrado" className="text-white hover:text-white/80 underline inline-block font-semibold">
                Conocer el Club del Retiro Sagrado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retiros Disponibles Section - Same as Club */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Retiros que ya están disponibles en tu membresía
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Haz click en cualquier retiro para ver más detalles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retiros2025.map((retiro) => (
                <Card 
                  key={retiro.id} 
                  className="overflow-hidden border-border/50 bg-primary/5 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedRetiro2025(retiro)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={retiro.img} 
                      alt={retiro.nombre}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm mb-2">{retiro.nombre}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {retiro.descripcion}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {selectedRetiro2025 && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedRetiro2025(null)}>
                <Card className="max-w-2xl w-full bg-background border-border/50 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <img 
                      src={selectedRetiro2025.img} 
                      alt={selectedRetiro2025.nombre}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedRetiro2025(null)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {selectedRetiro2025.nombre}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {selectedRetiro2025.descripcion}
                    </p>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                      <p className="text-foreground font-semibold flex items-center gap-2">
                        <Check size={20} className="text-primary" />
                        Este retiro ya está disponible en tu membresía
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Accede a la grabación completa desde tu plataforma de miembro
                      </p>
                    </div>

                    <div className="border-t border-border/30 pt-6">
                      <a href="https://www.i3cdigital.com/products/club-de-retiro-sagrado" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                          Acceder a Mi Membresía
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Próximos Retiros Section - Same as Club */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Próximos Retiros con YOHEV
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Haz click en cualquier retiro para ver más detalles
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventos.filter((e: any) => e.tipo === "Retiro Sagrado" && e.estado !== "Realizado").slice(0, 12).map((retiro) => (
                <Card 
                  key={retiro.id} 
                  className="overflow-hidden border-border/50 bg-background hover:shadow-lg transition-all cursor-pointer relative"
                  onClick={() => setSelectedRetiro(retiro)}
                >
                  {retiro.estado === "Ya Disponible" && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      YA DISPONIBLE
                    </div>
                  )}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={retiro.imagen} 
                      alt={retiro.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-primary font-semibold mb-1">
                      {retiro.fecha}
                    </p>
                    <h3 className="font-semibold text-foreground text-sm mb-2">{retiro.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {retiro.description || 'Un encuentro profundo de transformación y sanación.'}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {selectedRetiro && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedRetiro(null)}>
                <Card className="max-w-2xl w-full bg-background border-border/50 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <img 
                      src={selectedRetiro.imagen} 
                      alt={selectedRetiro.title}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedRetiro(null)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {selectedRetiro.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {selectedRetiro.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start gap-3">
                        <Calendar size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Fecha</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.fecha}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Horario</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.horario}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Modalidad</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.modalidad}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">Participantes</p>
                          <p className="font-semibold text-foreground">{selectedRetiro.participantes}</p>
                        </div>
                      </div>
                    </div>

                    {selectedRetiro.incluye && selectedRetiro.incluye.length > 0 && (
                      <div className="mb-8">
                        <h3 className="font-semibold text-foreground mb-4 text-lg">Incluye:</h3>
                        <ul className="space-y-2">
                          {selectedRetiro.incluye.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <Check size={18} className="text-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="border-t border-border/30 pt-6">
                      <a href="#pricing">
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                          Unirse al Club para Acceder
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Una Idea Final */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Una Idea Final
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                No necesitas más análisis.<br />
                No necesitas más razón.
              </p>
              <p className="text-2xl font-semibold text-foreground mb-8">
                Necesitas sanar la raíz.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Si sientes que la figura paterna sigue organizando tus decisiones y límites, este espacio es para ti.
              </p>
            <a href="#enrollment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Inscribirme a este Retiro
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
