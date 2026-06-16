import { Link } from "wouter";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(to bottom, #0a0a14, #0d0d1a)", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a84c, #a07830)" }}>
                <span className="font-bold text-lg" style={{ color: "#0a0a14" }}>KS</span>
              </div>
              <span className="font-bold text-lg" style={{ color: "#c9a84c", fontFamily: "'Cormorant Garamond', serif" }}>KS Healing</span>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Energía Crística para la Transformación. Un sistema de sanación energética que facilita el despertar de la consciencia humana.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/Dr.ErickGurrola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@drerickgurrola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://www.instagram.com/erickgurrolaoficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navegación Principal */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: "#c9a84c", fontFamily: "'Cormorant Garamond', serif" }}>Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/sobre-yohev" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">Sobre YOHEV</Link></li>
              <li><Link href="/que-es-ks-healing" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">¿Qué es KS Healing?</Link></li>
              <li><Link href="/el-libro" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">El Libro</Link></li>
              <li><Link href="/blog" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: "#c9a84c", fontFamily: "'Cormorant Garamond', serif" }}>Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/eventos" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">Eventos</Link></li>
              <li><Link href="/testimonios" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">Testimonios</Link></li>
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: "#c9a84c", fontFamily: "'Cormorant Garamond', serif" }}>Programas</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/cursos" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">Cursos</Link></li>
              <li><Link href="/blog" style={{ color: "rgba(255,255,255,0.65)" }} className="hover:text-amber-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: "#c9a84c", fontFamily: "'Cormorant Garamond', serif" }}>Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Mail size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
                <div>
                  <p style={{ color: "rgba(255,255,255,0.45)" }}>Email</p>
                  <a href="mailto:contacto@kshealing.com" className="hover:opacity-80 transition-opacity" style={{ color: "#c9a84c" }}>contacto@kshealing.com</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
                <div>
                  <p style={{ color: "rgba(255,255,255,0.45)" }}>Teléfono</p>
                  <a href="tel:+523113931660" className="hover:opacity-80 transition-opacity" style={{ color: "#c9a84c" }}>+52 (311) 393-1660</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
                <div>
                  <p style={{ color: "rgba(255,255,255,0.45)" }}>Ubicación</p>
                  <p style={{ color: "rgba(255,255,255,0.65)" }}>Tepic, Nay. Méx.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Legal Links */}
            <div className="flex gap-6 text-sm justify-center md:justify-start">
              <Link href="/politica-privacidad" className="hover:text-amber-400 transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>Política de Privacidad</Link>
              <Link href="/terminos-servicio" className="hover:text-amber-400 transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>Términos de Servicio</Link>
              <Link href="/politica-cookies" className="hover:text-amber-400 transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>Cookies</Link>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p>&copy; 2026 KS Healing Systems. Todos los derechos reservados.</p>
            </div>

            {/* Mission Statement */}
            <div className="text-right text-sm flex items-center justify-center md:justify-end gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              <span>Hecho con</span>
              <Heart size={14} className="text-accent fill-accent" />
              <span>para la transformación</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-sm italic" style={{ color: "rgba(201,168,76,0.7)" }}>
              "Sé un sol en la tierra. Recuerda quién eres y entonces sé." - YOHEV
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
