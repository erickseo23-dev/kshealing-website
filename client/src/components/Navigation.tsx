import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "¿QUÉ ES KS HEALING?", href: "/que-es-ks-healing" },
    { label: "SOBRE YOHEV", href: "/sobre-yohev" },
    { label: "EL LIBRO", href: "/el-libro" },
    { label: "BLOG", href: "/blog" },
    { label: "TESTIMONIOS", href: "/testimonios" },
    { label: "EVENTOS", href: "/eventos" },
    { label: "RECURSOS", href: "/recursos" },
    { label: "DIRECTORIO", href: "/directorio" },
    { label: "TIENDA", href: "/tienda" },
    { label: "MEDITACIONES", href: "/meditaciones" },
    { label: "PORTAL", href: "/portal-miembros" },
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="px-3 py-2 text-xs font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors whitespace-nowrap">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Comenzar
          </Button>
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
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur max-h-96 overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-2">
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
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
              Comenzar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
