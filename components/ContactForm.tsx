"use client";
import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";

const WA_NUMBER = "543794348893";

const SERVICE_OPTIONS = [
  "Instalación de aire acondicionado tipo Split",
  "Mantenimiento y limpieza de equipo",
  "Reparación de equipo Split",
  "Reparación de equipo tipo Ventana",
  "Carga de gas refrigerante",
  "Otro / Consulta general",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = [
      `Hola Pablo! Me comunico desde tu página web 👋`,
      ``,
      `*Nombre:* ${form.name}`,
      form.phone ? `*Teléfono:* ${form.phone}` : null,
      form.service ? `*Servicio requerido:* ${form.service}` : null,
      form.details ? `*Detalles:* ${form.details}` : null,
      ``,
      `Quedo a la espera, gracias!`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputBase =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 bg-white transition-all";

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left info */}
        <div>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            ¿Necesitás un servicio?<br />
            <span className="text-blue-600">Escribinos hoy</span>
          </h2>
          <div className="section-divider" style={{ margin: "0 0 1.5rem 0" }} />
          <p className="text-slate-500 leading-relaxed mb-8">
            Completá el formulario y te enviamos un mensaje directo a WhatsApp con tu consulta.
            Respondemos en el día.
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="https://wa.me/543794348893"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="#25D366">
                  <path d="M16.003 0C7.17 0 0 7.17 0 16.003c0 2.83.74 5.49 2.03 7.8L0 32l8.43-2.01a16 16 0 0 0 7.573 1.924C24.836 31.914 32 24.744 32 16.003 32 7.17 24.836 0 16.003 0zm7.23 21.315c-.397-.198-2.347-1.158-2.71-1.29-.364-.13-.63-.197-.895.198-.265.394-1.03 1.29-1.26 1.555-.232.264-.464.296-.86.098-.397-.198-1.676-.618-3.192-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.174-.808.178-.177.396-.462.595-.693.198-.23.264-.395.396-.66.132-.263.066-.494-.033-.692-.1-.198-.895-2.156-1.226-2.95-.323-.773-.65-.668-.895-.68l-.762-.012c-.264 0-.694.1-1.057.494-.364.395-1.39 1.357-1.39 3.31 0 1.954 1.423 3.842 1.622 4.106.198.265 2.8 4.276 6.786 5.995.949.41 1.69.655 2.267.838.953.303 1.82.26 2.506.158.764-.114 2.347-.96 2.678-1.887.33-.928.33-1.724.232-1.888-.1-.165-.365-.264-.762-.462z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-800">WhatsApp</p>
                <p className="text-slate-500">3794 348893</p>
              </div>
            </a>

            <a
              href="tel:+543794348893"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-.78a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Teléfono</p>
                <p className="text-slate-500">+54 3794 348893</p>
              </div>
            </a>

            <a
              href="mailto:gekko.refrigeracion@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Email</p>
                <p className="text-slate-500">gekko.refrigeracion@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/gekko_refrigeracion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Instagram</p>
                <p className="text-slate-500">@gekko_refrigeracion</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
          <h3 className="font-bold text-slate-900 text-lg mb-1">
            Solicitá tu presupuesto
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            Completá y te contactamos por WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Tu nombre *
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ej: María García"
                className={inputBase}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Tu teléfono
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Ej: 3794 123456"
                className={inputBase}
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Servicio requerido
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${inputBase} appearance-none pr-10`}
              >
                <option value="">Seleccioná un servicio...</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-[38px] text-slate-400 pointer-events-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Detalles adicionales
              </label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                rows={3}
                placeholder="Contanos más sobre el equipo o el problema..."
                className={`${inputBase} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="btn-whatsapp w-full flex items-center justify-center gap-2.5 text-white font-bold py-4 rounded-xl text-base shadow-md mt-2"
            >
              <Send size={18} />
              Enviar por WhatsApp
            </button>

            <p className="text-center text-xs text-slate-400">
              Te abrirá WhatsApp con el mensaje listo para enviar
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
