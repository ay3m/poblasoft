"use client";

import { Zap, Settings, Wrench } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const services = [
  {
    icon: Zap,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Instalación",
    sub: "Aires tipo Split · Matriculada",
    desc: "Instalación habilitada y segura de equipos Split, cumpliendo todas las normas técnicas vigentes.",
  },
  {
    icon: Settings,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    title: "Mantenimiento",
    sub: "Limpieza · Control general",
    desc: "Limpieza de filtros, revisión de gas y control eléctrico para mantener tu equipo en óptimas condiciones.",
  },
  {
    icon: Wrench,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Reparación",
    sub: "Split y Ventana",
    desc: "Diagnóstico y reparación de fallas con repuestos de calidad y garantía en mano de obra.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">Servicios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              ¿Qué necesitás?
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, color, bg, title, sub, desc }) => (
            <StaggerItem key={title}>
              <div className="service-card bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
                <div className={`${bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                  <Icon size={24} className={color} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                <p className={`${color} text-xs font-semibold mt-0.5 mb-3`}>{sub}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
