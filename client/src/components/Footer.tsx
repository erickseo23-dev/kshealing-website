import { Link } from "wouter";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/5 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-display text-lg font-bold">KS</span>
              </div>
              <span className="font-display text-lg font-bold text-primary">KS Healing</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Energía Crística para la Transformación. Un sistema de sanación energética que facilita el despertar de la consciencia humana.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/Dr.ErickGurrola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@drerickgurrola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://www.instagram.com/erickgurrolaoficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navegación Principal */}
          <div>
            <h3 className="font-display text-sm font-bold mb-4 text-foreground uppercase tracking-wide">Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/sobre-yohev"><a className="text-muted-foreground hover:text-primary transition-colors">Sobre YOHEV</a></Link></li>
              <li><Link href="/que-es-ks-healing"><a className="text-muted-foreground hover:text-primary transition-colors">¿Qué es KS Healing?</a></Link></li>
              <li><Link href="/el-libro"><a className="text-muted-foreground hover:text-primary transition-colors">El Libro</a></Link></li>
              <li><Link href="/blog"><a className="text-muted-foreground hover:text-primary transition-colors">Blog</a></Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-display text-sm font-bold mb-4 text-foreground uppercase tracking-wide">Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/eventos"><a className="text-muted-foreground hover:text-primary transition-colors">Eventos</a></Link></li>
              <li><Link href="/meditaciones"><a className="text-muted-foreground hover:text-primary transition-colors">Meditaciones</a></Link></li>
              <li><Link href="/directorio"><a className="text-muted-foreground hover:text-primary transition-colors">Directorio</a></Link></li>
              <li><Link href="/tienda"><a className="text-muted-foreground hover:text-primary transition-colors">Tienda</a></Link></li>
              <li><Link href="/testimonios"><a className="text-muted-foreground hover:text-primary transition-colors">Testimonios</a></Link></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-display text-sm font-bold mb-4 text-foreground uppercase tracking-wide">Recursos</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/recursos"><a className="text-muted-foreground hover:text-primary transition-colors">Centro de Recursos</a></Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Guía de Inicio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Certificación</a></li>
              <li><Link href="/portal-miembros"><a className="text-muted-foreground hover:text-primary transition-colors">Portal de Miembros</a></Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-sm font-bold mb-4 text-foreground uppercase tracking-wide">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <a href="mailto:contacto@kshealing.com" className="text-primary hover:text-primary/80 transition-colors">contacto@kshealing.com</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Teléfono</p>
                  <a href="tel:+1234567890" className="text-primary hover:text-primary/80 transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Latinoamérica</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Legal Links */}
            <div className="flex gap-6 text-sm justify-center md:justify-start">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; 2026 KS Healing Systems. Todos los derechos reservados.</p>
            </div>

            {/* Mission Statement */}
            <div className="text-right text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-2">
              <span>Hecho con</span>
              <Heart size={14} className="text-accent fill-accent" />
              <span>para la transformación</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground italic">
              "Sé un sol en la tierra. Recuerda quién eres y entonces sé." - YOHEV
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
