"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { SECTION_PY, CONTAINER, HEADER_MB, LABEL_LIGHT, ICON_SM } from "@/lib/design-tokens";

const faqs = [
  {
    q: "¿Qué tipos de equipos trabajan?",
    a: "Trabajamos con equipos tipo Split y Ventana de todas las marcas: Carrier, Samsung, LG, BGH, Surrey, Midea, Philco y Hitachi, entre otras.",
  },
  {
    q: "¿La instalación tiene garantía?",
    a: "Sí. Todos nuestros trabajos tienen garantía en mano de obra y materiales. Somos técnicos matriculados por la Cámara Argentina de Calefacción.",
  },
  {
    q: "¿Trabajan los fines de semana?",
    a: "Atendemos de lunes a sábados. Para urgencias, contactanos por WhatsApp y coordinamos lo antes posible.",
  },
  {
    q: "¿Qué zonas de Corrientes cubren?",
    a: "Cubrimos toda Corrientes Capital y alrededores: Centro, Bº Aldana, Bº Cacique Canindeyú, Bº Libertad, Bº Norte, Bº Sur, Bº Yapeyú y más.",
  },
  {
    q: "¿El presupuesto tiene algún costo?",
    a: "No, el presupuesto es completamente sin cargo. Nos acercamos a tu domicilio, evaluamos el equipo y te damos un precio cerrado antes de empezar.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={ICON_SM} className="text-slate-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={`${SECTION_PY} bg-white`}>
      <div className={CONTAINER}>
        <FadeUp>
          <div className={`text-center ${HEADER_MB}`}>
            <span className={LABEL_LIGHT}>Preguntas Frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Todo lo que necesitás saber
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="max-w-2xl mx-auto">
          {faqs.map(({ q, a }) => (
            <StaggerItem key={q}>
              <FAQItem q={q} a={a} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
