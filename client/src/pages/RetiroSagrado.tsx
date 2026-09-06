import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Heart, Zap, Users, Star, Leaf, Sparkles, Share2, Calendar, Clock, MapPin, ArrowRight, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { retiroSagradoTestimonials } from "@/lib/programTestimonials";
import { eventos } from "@/lib/events";
import { useState } from "react";
import { useCurrency } from "@/hooks/useCurrency";

// Retiro membership price map
const RETIRO_PRICES = { MXN: '~$500 MXN', EUR: '€29 EUR', USD: '$29 USD' };

export default function RetiroSagrado() {
  const { prices: { currency } } = useCurrency();
  const retiroPrice = RETIRO_PRICES[currency];

  const [selectedRetiro, setSelectedRetiro] = useState<any>(null);
  const [selectedRetiro2025, setSelectedRetiro2025] = useState<any>(null);

  const retiros2025 = [
    ...eventos.filter(e => [6, 7].includes(e.id)).map(e => ({ id: e.id + 100, nombre: e.title, img: e.imagen, descripcion: e.description })),
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



      {/* Retiro Sagrado 15 — Septiembre */}
      <section className="py-20 md:py-32 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/PWCWWXokMvvbuHAT.png)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4"><div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-8 px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/50"><span className="text-white font-bold text-2xl md:text-3xl">🌿 Retiro Sagrado 15 - CON YOHEV</span></div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">El Poder de <span className="text-yellow-300">Elegir</span></h1>
          <p className="text-lg text-white font-semibold mb-4">Facilitado directamente por YOHEV</p>
          <p className="text-xl text-white mb-6">Salir del automatismo y recuperar tu soberanía interna. Elecciones inconscientes, patrones repetidos y decisiones heredadas.</p>
          <p className="text-lg text-white mb-8 italic">Entre lo que has aprendido a repetir y lo que hoy deseas vivir, existe un espacio para elegir con conciencia.</p>
          <div className="inline-block mb-6 px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30"><span className="text-white font-semibold">📅 Domingo 13 de Septiembre | 8:00 AM - 12:00 PM CDMX / 3:00 - 7:00 PM España</span></div>
          <div className="mt-8 text-center"><a href="#enrollment"><Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Inscribirme a este Retiro</Button></a></div>
        </div></div>
      </section>
      <section className="py-16 md:py-24"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">🌿 ¿Quién Está Eligiendo en Tu Vida?</h2><p className="text-lg text-muted-foreground leading-relaxed mb-6">A veces creemos que elegimos, pero respondemos desde la costumbre, el miedo a decepcionar o las expectativas de otros. Repetimos formas de relacionarnos, postergamos decisiones y seguimos caminos que nunca nos detuvimos a cuestionar.</p><p className="text-lg text-muted-foreground leading-relaxed mb-6">Reconocer un patrón abre la posibilidad de responder de otra manera. La conciencia comienza cuando puedes preguntarte: ¿esto lo elijo hoy o lo estoy repitiendo?</p><p className="text-lg text-muted-foreground leading-relaxed mb-6">En este retiro exploraremos las elecciones inconscientes, los patrones repetidos y las decisiones heredadas. Un espacio de reflexión, meditación y práctica con Energía KS® para recuperar tu criterio y dar pasos más conscientes en tu vida.</p></div></div></section>
      <section className="py-16 md:py-24"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">🌿 Cuando Eliges en Automático</h2><ul className="space-y-4"><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Decir que sí cuando en realidad deseas decir que no.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Elegir para evitar el rechazo o la desaprobación.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Postergar decisiones por miedo a equivocarte.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Repetir vínculos o respuestas que ya no deseas sostener.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Confundir lo que quieres con lo que se espera de ti.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Seguir reglas familiares sin revisar si aún tienen sentido para ti.</span></li></ul><div className="mt-8"><p className="text-lg text-muted-foreground leading-relaxed mb-6">Observar estas respuestas sin juzgarte permite comprender de dónde vienen y explorar alternativas. Recuperar tu soberanía interna significa reconocer tu margen de acción y asumir tus decisiones con responsabilidad.</p></div><div className="mt-8 text-center"><a href="#enrollment"><Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Inscribirme a este Retiro</Button></a></div></div></div></section>
      <section className="py-16 md:py-24"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">🌿 Recuperar Tu Soberanía Interna</h2><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/PWCWWXokMvvbuHAT.png" alt="El Poder de Elegir — Retiro Sagrado 15" className="w-full h-auto rounded-2xl shadow-lg mb-10" /><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><Card className="p-8 border-primary/20 bg-primary/5"><h3 className="text-xl font-bold mb-4">Reconocer Tus Automatismos</h3><p className="text-lg text-muted-foreground leading-relaxed mb-6">Explorar las creencias, emociones y expectativas que influyen en tus decisiones. Distinguir una respuesta habitual de una elección que puedes revisar.</p></Card><Card className="p-8 border-primary/20 bg-primary/5"><h3 className="text-xl font-bold mb-4">Elegir con Conciencia</h3><p className="text-lg text-muted-foreground leading-relaxed mb-6">Escuchar lo que valoras, considerar tus posibilidades y responder con mayor claridad. Elegir también implica aceptar límites, consecuencias y la posibilidad de aprender.</p></Card></div></div></div></section>
      <section className="py-16 md:py-24"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">🌿 ¿Qué Vamos a Trabajar en Este Retiro?</h2><ul className="space-y-4"><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Identificar elecciones inconscientes y reconocer cuándo actúas por costumbre.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Explorar patrones repetidos en tus relaciones y decisiones cotidianas.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Reconocer decisiones heredadas y expectativas que has hecho propias.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Distinguir lo que deseas elegir de lo que haces por miedo o aprobación.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Acompañar la autoobservación con meditación y práctica de Energía KS®.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Definir un paso concreto para practicar una elección más consciente.</span></li></ul><div className="mt-8 p-6 bg-primary/5 rounded-lg"><p className="text-lg text-muted-foreground leading-relaxed mb-6">No puedes controlar todas las circunstancias. Puedes explorar cómo responder y qué decisiones están a tu alcance.</p></div><div className="mt-8 text-center"><a href="#enrollment"><Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Inscribirme a este Retiro</Button></a></div></div></div></section>
      <section className="py-16 md:py-24"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">🌿 Este Retiro es para Ti Si...</h2><ul className="space-y-4"><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Sientes que tomas decisiones para complacer a otros.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Te cuesta distinguir tus deseos de las expectativas ajenas.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Repites situaciones o relaciones que quisieras vivir de otra manera.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Postergas decisiones importantes por miedo a equivocarte.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Quieres cuestionar creencias y decisiones heredadas.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Deseas actuar con mayor claridad, presencia y responsabilidad.</span></li></ul><div className="mt-8"><p className="text-lg text-muted-foreground leading-relaxed mb-6">Puedes comenzar con una decisión cotidiana. Este espacio te invita a observarte con honestidad y a explorar posibilidades a tu propio ritmo.</p></div></div></div></section>
      <section className="py-16 md:py-24"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">🌱 ¿Qué Puedes Llevarte de Este Encuentro?</h2><ul className="space-y-4"><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Mayor claridad sobre lo que deseas y valoras.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Más facilidad para reconocer una respuesta automática.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Un espacio de pausa antes de decidir.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Más recursos para revisar patrones repetidos.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Mayor disposición para asumir tus decisiones sin castigarte.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Un paso concreto para llevar la conciencia a tu vida cotidiana.</span></li></ul><div className="mt-8"><p className="text-lg text-muted-foreground leading-relaxed mb-6">Cada proceso es personal. La invitación es practicar una forma de elegir más consciente, paso a paso.</p></div></div></div></section>
      <section className="py-16 md:py-24"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">🧘‍♀️ Estructura del Retiro (4 Horas)</h2><ul className="space-y-4"><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Reconocimiento de automatismos: observar cómo eliges en la vida cotidiana.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Exploración de patrones repetidos, creencias y decisiones heredadas.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Práctica con Energía KS® para acompañar la presencia y la autoobservación.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Reflexión sobre soberanía interna, posibilidades y responsabilidad personal.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Meditación para conectar con la presencia y explorar una elección consciente.</span></li><li className="flex gap-3 text-lg text-muted-foreground"><Check size={20} className="text-primary flex-shrink-0 mt-1" /><span>Integración: elegir un paso concreto para aplicar lo explorado.</span></li></ul></div></div></section>
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
                <p className="text-5xl font-bold text-white mb-2">{retiroPrice}</p>
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
              {eventos.filter((e: any) => e.tipo === "Retiro Sagrado" && e.estado !== "Realizado" && ![6, 7].includes(e.id)).slice(0, 12).map((retiro) => (
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
                A veces, una nueva dirección comienza con una pausa para escucharte.
              </p>
              <p className="text-2xl font-semibold text-foreground mb-8">
                Reconoce lo que repites. Recupera tu poder de elegir.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Si deseas dejar de decidir únicamente por costumbre, miedo o expectativas ajenas, te esperamos en El Poder de Elegir con YOHEV.
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
