"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown } from "lucide-react";
import { SlideLeft, SlideRight } from "@/components/ui/Motion";
import GeckoIcon from "@/components/ui/GeckoIcon";
import { WA_URL, PHONE_DISPLAY, EMAIL, INSTAGRAM, INSTAGRAM_URL } from "@/lib/constants";
import { SECTION_PY, CONTAINER, LABEL_LIGHT, ICON_SM, BTN_LG } from "@/lib/design-tokens";

const SERVICE_OPTIONS = [
  "Instalación de aire acondicionado tipo Split",
  "Mantenimiento y limpieza",
  "Reparación de equipo Split",
  "Reparación de equipo tipo Ventana",
  "Carga de gas refrigerante",
  "Otro / Consulta general",
];

const CONTACTS = [
  { href: WA_URL(""), label: PHONE_DISPLAY, sub: "WhatsApp", dot: "bg-green-400", external: true },
  { href: `mailto:${EMAIL}`, label: EMAIL, sub: "Email", dot: "bg-slate-400", external: false },
  { href: INSTAGRAM_URL, label: `@${INSTAGRAM}`, sub: "Instagram", dot: "bg-pink-400", external: true },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", details: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hola Pablo! Te escribo desde tu página web",
      "",
      `*Nombre:* ${form.name}`,
      form.phone   ? `*Teléfono:* ${form.phone}`   : null,
      form.service ? `*Servicio:* ${form.service}` : null,
      form.details ? `*Detalles:* ${form.details}` : null,
    ].filter(Boolean).join("\n");
    window.open(WA_URL(lines), "_blank", "noopener,noreferrer");
  };

  const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 bg-white transition-all";

  return (
    <section id="contacto" className={`${SECTION_PY} bg-[#f0f9ff]`}>
      <div className={`${CONTAINER} grid md:grid-cols-2 gap-14 items-center relative z-10`}>

        <SlideLeft>
          <div>
            <span className={LABEL_LIGHT}>Contacto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3">
              ¿Hablamos?
            </h2>
            <p className="text-slate-500 text-sm mb-8 max-w-sm leading-relaxed">
              Contactanos por cualquier medio. Te respondemos en el día con presupuesto sin cargo.
            </p>
            <ul className="space-y-5">
              {CONTACTS.map(({ href, label, sub, dot, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 group"
                  >
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dot}`} />
                    <div>
                      <p className="text-xs text-slate-400">{sub}</p>
                      <p className="text-slate-700 font-medium text-sm group-hover:text-cyan-600 transition-colors">{label}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SlideLeft>

        <SlideRight>
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

            <div className="flex items-center gap-2.5 mb-6">
              <GeckoIcon size={28} />
              <h3 className="font-bold text-slate-900 text-lg">Solicitá tu presupuesto</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-slate-500 mb-1">
                  Nombre <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name" name="name" type="text" required aria-required="true"
                  value={form.name} onChange={handleChange} placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-500 mb-1">Teléfono</label>
                <input
                  id="contact-phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange} placeholder="Tu teléfono"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="block text-xs font-medium text-slate-500 mb-1">Servicio</label>
                <div className="relative">
                  <select
                    id="contact-service" name="service" value={form.service} onChange={handleChange}
                    className={`${inputClass} appearance-none pr-10 ${!form.service ? "text-slate-400" : ""}`}
                  >
                    <option value="">Seleccioná un servicio</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown size={ICON_SM} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-details" className="block text-xs font-medium text-slate-500 mb-1">Detalles</label>
                <textarea
                  id="contact-details" name="details" value={form.details} onChange={handleChange}
                  rows={3} placeholder="Detalles del equipo o problema..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`btn-whatsapp w-full flex items-center justify-center gap-2 text-white font-bold ${BTN_LG}`}
              >
                <Send size={ICON_SM} />
                Enviar por WhatsApp
              </motion.button>
              <p className="text-center text-xs text-slate-400">
                Se abre WhatsApp con el mensaje listo para enviar
              </p>
            </form>
          </div>
        </SlideRight>
      </div>
    </section>
  );
}
