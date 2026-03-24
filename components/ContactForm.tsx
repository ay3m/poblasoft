"use client";

import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { SlideLeft, SlideRight } from "@/components/ui/Motion";

const WA_NUMBER = "543794348893";

const SERVICE_OPTIONS = [
  "Instalación de aire acondicionado tipo Split",
  "Mantenimiento y limpieza",
  "Reparación de equipo Split",
  "Reparación de equipo tipo Ventana",
  "Carga de gas refrigerante",
  "Otro / Consulta general",
];

const CONTACTS = [
  {
    href: "https://wa.me/543794348893",
    label: "3794 348893",
    sub: "WhatsApp",
    dot: "bg-green-400",
    external: true,
  },
  {
    href: "mailto:gekko.refrigeracion@gmail.com",
    label: "gekko.refrigeracion@gmail.com",
    sub: "Email",
    dot: "bg-slate-400",
    external: false,
  },
  {
    href: "https://www.instagram.com/gekko_refrigeracion",
    label: "@gekko_refrigeracion",
    sub: "Instagram",
    dot: "bg-pink-400",
    external: true,
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", details: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hola Pablo! Te escribo desde tu página web 👋",
      "",
      `*Nombre:* ${form.name}`,
      form.phone    ? `*Teléfono:* ${form.phone}`         : null,
      form.service  ? `*Servicio:* ${form.service}`       : null,
      form.details  ? `*Detalles:* ${form.details}`       : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
  };

  const input = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 bg-white transition-all";

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <SlideLeft>
          <div>
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">Contacto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
              ¿Hablamos?
            </h2>
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
                      <p className="text-slate-700 font-medium text-sm group-hover:text-blue-600 transition-colors">{label}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SlideLeft>

        {/* Form */}
        <SlideRight>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <h3 className="font-bold text-slate-900 text-lg mb-6">Solicitá tu presupuesto</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name" type="text" required value={form.name} onChange={handleChange}
                placeholder="Tu nombre *"
                className={input}
              />
              <input
                name="phone" type="tel" value={form.phone} onChange={handleChange}
                placeholder="Tu teléfono"
                className={input}
              />
              <div className="relative">
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className={`${input} appearance-none pr-10 ${!form.service ? "text-slate-400" : ""}`}
                >
                  <option value="">Servicio requerido</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
              <textarea
                name="details" value={form.details} onChange={handleChange}
                rows={3} placeholder="Detalles del equipo o problema..."
                className={`${input} resize-none`}
              />
              <button
                type="submit"
                className="btn-whatsapp w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl shadow-md"
              >
                <Send size={17} />
                Enviar por WhatsApp
              </button>
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
