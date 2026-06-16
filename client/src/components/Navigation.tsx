import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Users, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "¿QUÉ ES KS HEALING?", href: "/que-es-ks-healing" },
    { label: "SOBRE YOHEV", href: "/sobre-yohev" },
    { label: "CURSOS Y PROGRAMAS", href: "/cursos" },
    { label: "EL LIBRO", href: "/el-libro" },
    { label: "BLOG", href: "/blog" },
    { label: "TESTIMONIOS", href: "/testimonios" },
    { label: "EVENTOS", href: "/eventos" },
  ];

  const contactItems = [
    { label: "Contáctanos", href: "/contacto", icon: Mail },
    { label: "Directorio de Practicantes", href: "/directorio", icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-display text-lg font-bold">KS</span>
            </div>
            <span className="font-display text-xl font-bold text-primary hidden sm:inline">KS Healing</span>
          </a>
        </Link>

        {/* Desktop Navigation — sin overflow para que el dropdown sea visible */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="px-3 py-2 text-xs font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors whitespace-nowrap">
                {item.label}
              </a>
            </Link>
          ))}

          {/* Dropdown CONTACTO */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setContactOpen((v) => !v)}
              className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors whitespace-nowrap"
            >
              CONTACTO
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${contactOpen ? "rotate-180" : ""}`}
              />
            </button>

            {contactOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-56 rounded-lg shadow-2xl z-[9999]"
                style={{
                  background: "linear-gradient(135deg, #0f0f1a, #1a1a2e)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.href}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all text-left first:rounded-t-lg last:rounded-b-lg"
                      style={{ color: "rgba(255,255,255,0.8)", background: "transparent" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.12)";
                        (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                      }}
                      onClick={() => {
                        setContactOpen(false);
                        navigate(item.href);
                      }}
                    >
                      <Icon size={15} style={{ color: "#c9a84c", flexShrink: 0 }} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://cursos.institutoascendant.com/library" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Area de Alumnos
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-primary/10 rounded-md transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}

            {/* Contacto en móvil */}
            <div className="pt-2">
              <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                Contacto
              </p>
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.href}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors text-left"
                    onClick={() => {
                      setIsOpen(false);
                      navigate(item.href);
                    }}
                  >
                    <Icon size={15} style={{ color: "#c9a84c" }} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <a href="https://cursos.institutoascendant.com/library" target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Area de Alumnos
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
