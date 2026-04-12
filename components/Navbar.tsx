"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedLink } from "@/components/ui/Motion";
import { WA_URL, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { BTN_LG, BTN_MD, ICON_SM, CONTAINER_NAV } from "@/lib/design-tokens";

const WA_MSG = "Hola Pablo, me contacto desde tu página web. Quisiera pedir un presupuesto.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 origin-left z-10"
        style={{ scaleX: scrollYProgress }}
      />

      <div className={CONTAINER_NAV + " flex items-center justify-between"}>
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/images/logo-nobg.png"
            alt="Gekko Refrigeración"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            Gekko <span className="text-gradient-ice">Refrigeración</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <Phone size={ICON_SM} />
            {PHONE_DISPLAY}
          </a>
          <AnimatedLink
            href={WA_URL(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-whatsapp text-white ${BTN_MD}`}
          >
            WhatsApp
          </AnimatedLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-[#0a1628]/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3 border-t border-white/5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-200 font-medium py-2 border-b border-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-slate-200 font-medium py-2"
              >
                <Phone size={ICON_SM} className="text-cyan-400" />
                {PHONE_DISPLAY}
              </a>
              <AnimatedLink
                href={WA_URL(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={`btn-whatsapp text-white text-center ${BTN_LG}`}
              >
                Contactar por WhatsApp
              </AnimatedLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
