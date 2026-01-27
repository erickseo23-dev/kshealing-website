import { Link } from "wouter";
import { Facebook, Youtube, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/5 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-display text-lg font-bold">KS</span>
              </div>
              <span className="font-display text-lg font-bold text-primary">KS Healing</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Energía Crística para la Transformación
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold mb-4 text-foreground">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/sobre-yohev"><a className="text-muted-foreground hover:text-primary transition-colors">Sobre YOHEV</a></Link></li>
              <li><Link href="/que-es-ks-healing"><a className="text-muted-foreground hover:text-primary transition-colors">¿Qué es KS Healing?</a></Link></li>
              <li><Link href="/el-libro"><a className="text-muted-foreground hover:text-primary transition-colors">El Libro</a></Link></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-display text-sm font-bold mb-4 text-foreground">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cursos"><a className="text-muted-foreground hover:text-primary transition-colors">Cursos</a></Link></li>
              <li><Link href="/sesiones"><a className="text-muted-foreground hover:text-primary transition-colors">Sesiones KS</a></Link></li>
              <li><Link href="/directorio"><a className="text-muted-foreground hover:text-primary transition-colors">Directorio</a></Link></li>
              <li><Link href="/blog"><a className="text-muted-foreground hover:text-primary transition-colors">Blog</a></Link></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-display text-sm font-bold mb-4 text-foreground">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 KS Healing Systems. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
