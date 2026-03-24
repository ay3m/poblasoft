"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const WA_NUMBER = "543794348893";
const WA_MSG = "Hola Pablo, me contacto desde tu página web. Quisiera pedir un presupuesto.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo text */}
        <a href="#inicio" className="flex items-center gap-2">
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Gekko <span className={scrolled ? "text-blue-600" : "text-blue-200"}>Refrigeración</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:+543794348893`}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
            }`}
          >
            <Phone size={15} />
            3794 348893
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-white text-sm font-semibold px-5 py-2 rounded-full shadow"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded transition-colors ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 flex flex-col gap-3 border-t border-slate-100">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-700 font-medium py-2 border-b border-slate-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:+543794348893`}
            className="flex items-center gap-2 text-slate-700 font-medium py-2"
          >
            <Phone size={16} className="text-blue-600" />
            3794 348893
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-whatsapp text-white text-center font-semibold px-5 py-3 rounded-full"
          >
            Contactar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
