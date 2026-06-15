/**
 * Directorio de Practicantes KS Healing
 * Fuente de datos: Google Sheets (publicada como CSV)
 * Campos: nombre, ciudad, pais, nivel, foto, email, whatsapp, web, especialidad, anio_certificacion
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Mail, Globe, Search, Filter, MessageCircle, Award, Calendar, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

// ─── CONFIGURACIÓN GOOGLE SHEETS ────────────────────────────────────────────
// Reemplaza SHEET_ID con el ID de tu Google Sheet publicada como CSV
// Para publicar: Archivo → Compartir → Publicar en la web → CSV → Copiar URL
// El ID es la parte larga entre /d/ y /pub en la URL
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdVFKONw_zH36YmlHVLfJC3vxu3KUtWJOZxuX-NEUxkWlKbre2LCBsE6v-COzptc_NCu2Kf1xoCOte/pub?gid=0&single=true&output=csv";
// ─────────────────────────────────────────────────────────────────────────────

interface Practicante {
  nombre: string;
  ciudad: string;
  pais: string;
  nivel: string;
  foto: string;
  email: string;
  whatsapp: string;
  web: string;
  especialidad: string;
  anio_certificacion: string;
}

// Datos de ejemplo mientras se configura la Google Sheet
const DATOS_EJEMPLO: Practicante[] = [
  {
    nombre: "YOHEV (Dr. Erick Gurrola)",
    ciudad: "Tepic",
    pais: "México",
    nivel: "Maestro Fundador",
    foto: "",
    email: "yohev@kshealing.com",
    whatsapp: "+523113931660",
    web: "www.kshealing.com",
    especialidad: "Sesiones privadas, Retiros, Certificaciones",
    anio_certificacion: "2004",
  },
];

function parseCSV(csv: string): Practicante[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];
  // La primera fila son los encabezados
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/\s+/g, "_"));
  return lines.slice(1).map((line) => {
    // Manejo básico de CSV con comas dentro de comillas
    const values: string[] = [];
    let current = "";
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] || "";
    });
    return obj as unknown as Practicante;
  });
}

const NIVELES = [
  "Todos los niveles",
  "Maestro Fundador",
  "Master KS Healing",
  "Practicante Avanzado KS Healing",
  "Practicante KS Healing",
];

const NIVEL_COLORES: Record<string, string> = {
  "Maestro Fundador": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Master KS Healing": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "Practicante Avanzado KS Healing": "bg-sky-500/20 text-sky-300 border-sky-500/30",
  "Practicante KS Healing": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

function getIniciales(nombre: string) {
  return nombre
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Directorio() {
  const [practicantes, setPracticantes] = useState<Practicante[]>(DATOS_EJEMPLO);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [filtroNivel, setFiltroNivel] = useState("Todos los niveles");
  const [filtroPais, setFiltroPais] = useState("Todos los países");

  useEffect(() => {
    if (!SHEET_CSV_URL || SHEET_CSV_URL.includes("SHEET_ID")) {
      // Sheet no configurada aún, usar datos de ejemplo
      setCargando(false);
      return;
    }
    fetch(SHEET_CSV_URL)
      .then((res) => res.text())
      .then((csv) => {
        const datos = parseCSV(csv);
        if (datos.length > 0) setPracticantes(datos);
      })
      .catch(() => {
        // Si falla, mantener datos de ejemplo
      })
      .finally(() => setCargando(false));
  }, []);

  const paises = ["Todos los países", ...Array.from(new Set(practicantes.map((p) => p.pais).filter(Boolean)))];

  const filtrados = practicantes.filter((p) => {
    const q = busqueda.toLowerCase();
    const matchBusqueda =
      !busqueda ||
      p.nombre.toLowerCase().includes(q) ||
      p.ciudad.toLowerCase().includes(q) ||
      p.pais.toLowerCase().includes(q) ||
      p.especialidad.toLowerCase().includes(q);
    const matchNivel = filtroNivel === "Todos los niveles" || p.nivel === filtroNivel;
    const matchPais = filtroPais === "Todos los países" || p.pais === filtroPais;
    return matchBusqueda && matchNivel && matchPais;
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a0a0f" }}>
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #0f0a1a 50%, #0a0f0a 100%)",
        }}
      >
        {/* Decoración de fondo */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #6b3fa0 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium mb-6">
            <Award size={14} />
            Verificación Oficial KS Healing
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              background: "linear-gradient(135deg, #f0d080 0%, #c9a84c 50%, #f0d080 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Directorio de
            <br />
            Practicantes
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Encuentra un practicante certificado de KS Healing en tu país. Todos los perfiles han sido verificados por el Instituto.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/40">
            <span>{practicantes.length} practicantes certificados</span>
            <span>·</span>
            <span>{paises.length - 1} países</span>
          </div>
        </div>
      </section>

      {/* ── Filtros ── */}
      <section className="sticky top-0 z-20 py-4 border-b border-white/10 backdrop-blur-md" style={{ background: "rgba(10,10,15,0.95)" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            {/* Búsqueda */}
            <div className="relative flex-1 w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Buscar por nombre, ciudad, especialidad..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>
            {/* Filtro nivel */}
            <div className="relative">
              <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <select
                value={filtroNivel}
                onChange={(e) => setFiltroNivel(e.target.value)}
                className="pl-9 pr-8 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 appearance-none cursor-pointer"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {NIVELES.map((n) => (
                  <option key={n} value={n} style={{ background: "#0a0a0f" }}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            {/* Filtro país */}
            <div className="relative">
              <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <select
                value={filtroPais}
                onChange={(e) => setFiltroPais(e.target.value)}
                className="pl-9 pr-8 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 appearance-none cursor-pointer"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {paises.map((p) => (
                  <option key={p} value={p} style={{ background: "#0a0a0f" }}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid de practicantes ── */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          {cargando ? (
            <div className="flex justify-center items-center py-24">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin" />
            </div>
          ) : filtrados.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 text-lg">No se encontraron practicantes con esos criterios.</p>
              <button
                onClick={() => { setBusqueda(""); setFiltroNivel("Todos los niveles"); setFiltroPais("Todos los países"); }}
                className="mt-4 text-amber-400 text-sm hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              <p className="text-white/30 text-sm mb-8">{filtrados.length} practicante{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtrados.map((p, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Header con foto/iniciales */}
                    <div
                      className="relative h-28 flex items-end px-6 pb-4"
                      style={{
                        background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(107,63,160,0.15) 100%)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {/* Avatar */}
                      <div className="absolute bottom-0 translate-y-1/2 left-6">
                        {p.foto ? (
                          <img
                            src={p.foto}
                            alt={p.nombre}
                            className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-500/40"
                            style={{ background: "#1a1a2e" }}
                          />
                        ) : (
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold ring-2 ring-amber-500/40"
                            style={{
                              background: "linear-gradient(135deg, #c9a84c, #6b3fa0)",
                              color: "#fff",
                              fontFamily: "'Cormorant Garamond', serif",
                            }}
                          >
                            {getIniciales(p.nombre)}
                          </div>
                        )}
                      </div>
                      {/* Badge nivel */}
                      <div className="ml-auto">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${NIVEL_COLORES[p.nivel] || "bg-white/10 text-white/60 border-white/10"}`}
                        >
                          {p.nivel}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="pt-12 px-6 pb-6">
                      <h3
                        className="text-lg font-bold text-white mb-1 leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {p.nombre}
                      </h3>

                      {/* Ubicación */}
                      <div className="flex items-center gap-1.5 text-white/40 text-sm mb-3">
                        <MapPin size={12} />
                        <span>{p.ciudad}{p.ciudad && p.pais ? ", " : ""}{p.pais}</span>
                      </div>

                      {/* Especialidad */}
                      {p.especialidad && (
                        <p className="text-white/50 text-xs mb-4 leading-relaxed line-clamp-2">
                          {p.especialidad}
                        </p>
                      )}

                      {/* Año de certificación */}
                      {p.anio_certificacion && (
                        <div className="flex items-center gap-1.5 text-amber-400/60 text-xs mb-4">
                          <Calendar size={11} />
                          <span>Certificado en {p.anio_certificacion}</span>
                        </div>
                      )}

                      {/* Separador */}
                      <div className="border-t border-white/6 mb-4" />

                      {/* Contacto */}
                      <div className="space-y-2">
                        {p.email && (
                          <a
                            href={`mailto:${p.email}`}
                            className="flex items-center gap-2 text-xs text-white/40 hover:text-amber-400 transition-colors group/link"
                          >
                            <Mail size={13} className="flex-shrink-0" />
                            <span className="truncate">{p.email}</span>
                          </a>
                        )}
                        {p.whatsapp && (
                          <a
                            href={`https://wa.me/${p.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs text-white/40 hover:text-emerald-400 transition-colors"
                          >
                            <MessageCircle size={13} className="flex-shrink-0" />
                            <span>{p.whatsapp}</span>
                          </a>
                        )}
                        {p.web && (
                          <a
                            href={p.web.startsWith("http") ? p.web : `https://${p.web}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs text-white/40 hover:text-sky-400 transition-colors"
                          >
                            <Globe size={13} className="flex-shrink-0" />
                            <span className="truncate">{p.web}</span>
                            <ExternalLink size={10} className="flex-shrink-0 opacity-0 group-hover/link:opacity-100" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(107,63,160,0.08) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <Award size={32} className="text-amber-400 mx-auto mb-4 opacity-80" />
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              ¿Eres Practicante Certificado?
            </h2>
            <p className="text-white/50 mb-8 text-sm leading-relaxed">
              Si tienes una certificación activa de KS Healing, puedes solicitar aparecer en este directorio. Tu perfil será verificado por el equipo del Instituto antes de publicarse.
            </p>
            <a
              href="mailto:contacto@kshealing.com?subject=Solicitud%20de%20registro%20en%20Directorio%20de%20Practicantes"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                color: "#0a0a0f",
              }}
            >
              <Mail size={16} />
              Solicitar registro
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
