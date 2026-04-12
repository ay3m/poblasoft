"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedLink } from "@/components/ui/Motion";
import { WA_URL, PHONE_DISPLAY } from "@/lib/constants";
import { Phone } from "lucide-react";
import { ICON_SM } from "@/lib/design-tokens";

const WA_MSG = "Hola Pablo, me contacto desde tu página web. Quisiera solicitar un presupuesto gratuito.";

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="white">
    <path d="M16.003 0C7.17 0 0 7.17 0 16.003c0 2.83.74 5.49 2.03 7.8L0 32l8.43-2.01a16 16 0 0 0 7.573 1.924C24.836 31.914 32 24.744 32 16.003 32 7.17 24.836 0 16.003 0zm7.23 21.315c-.397-.198-2.347-1.158-2.71-1.29-.364-.13-.63-.197-.895.198-.265.394-1.03 1.29-1.26 1.555-.232.264-.464.296-.86.098-.397-.198-1.676-.618-3.192-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.174-.808.178-.177.396-.462.595-.693.198-.23.264-.395.396-.66.132-.263.066-.494-.033-.692-.1-.198-.895-2.156-1.226-2.95-.323-.773-.65-.668-.895-.68l-.762-.012c-.264 0-.694.1-1.057.494-.364.395-1.39 1.357-1.39 3.31 0 1.954 1.423 3.842 1.622 4.106.198.265 2.8 4.276 6.786 5.995.949.41 1.69.655 2.267.838.953.303 1.82.26 2.506.158.764-.114 2.347-.96 2.678-1.887.33-.928.33-1.724.232-1.888-.1-.165-.365-.264-.762-.462z" />
  </svg>
);

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [600, 800], [0, 1]);
  const translateY = useTransform(scrollY, [600, 800], [20, 0]);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="bg-[#0a1628]/90 backdrop-blur-lg border-t border-white/10 pointer-events-auto"
        style={{ y: translateY }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-white font-semibold text-sm">¿Necesitás un técnico?</p>
            <p className="text-slate-400 text-xs">Presupuesto gratis · Respuesta en el día</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <AnimatedLink
              href={WA_URL(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2 text-white font-semibold px-6 py-2.5 rounded-full text-sm flex-1 sm:flex-none"
            >
              {WA_ICON}
              Pedir presupuesto
            </AnimatedLink>
            <a
              href="tel:+543794348893"
              className="flex items-center justify-center gap-1.5 text-slate-300 hover:text-white font-medium text-sm transition-colors px-4 py-2.5 rounded-full border border-white/10 hover:border-white/20"
            >
              <Phone size={ICON_SM} />
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
              <span className="sm:hidden">Llamar</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
