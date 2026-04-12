"use client";

import { Zap, Settings, Wrench } from "lucide-react";
import { FadeUp, StaggerContainerSlow, StaggerItem } from "@/components/ui/Motion";
import Tilt3D from "@/components/ui/Tilt3D";
import { SECTION_PY, CONTAINER, HEADER_MB, LABEL_LIGHT, ICON_LG, CARD_PADDING } from "@/lib/design-tokens";

const services = [
  {
    icon: Zap,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
    title: "Instalación",
    sub: "Aires tipo Split · Matriculada",
    desc: "Instalación habilitada y segura de equipos Split, cumpliendo todas las normas técnicas vigentes. Trabajo prolijo y garantizado.",
  },
  {
    icon: Settings,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
    title: "Mantenimiento",
    sub: "Limpieza · Control general",
    desc: "Limpieza de filtros, revisión de gas y control eléctrico para mantener tu equipo en óptimas condiciones todo el año.",
  },
  {
    icon: Wrench,
    gradient: "from-indigo-500/20 to-cyan-500/20",
    iconColor: "text-indigo-400",
    title: "Reparación",
    sub: "Split y Ventana",
    desc: "Diagnóstico y reparación de fallas con repuestos de calidad y garantía en mano de obra. Todas las marcas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className={`${SECTION_PY} bg-[#f0f9ff]`}>
      <div className={CONTAINER}>
        <FadeUp>
          <div className={`text-center ${HEADER_MB}`}>
            <span className={LABEL_LIGHT}>Servicios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              ¿Qué necesitás?
            </h2>
          </div>
        </FadeUp>

        <StaggerContainerSlow className="grid md:grid-cols-3 gap-6 relative z-10">
          {services.map(({ icon: Icon, gradient, iconColor, title, sub, desc }) => (
            <StaggerItem key={title}>
              <Tilt3D className="h-full" intensity={6}>
                <div className={`bg-white rounded-2xl border border-slate-200/80 ${CARD_PADDING} relative overflow-hidden group h-full`}>
                  {/* Gradient reveal on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50 border border-slate-200/60 flex items-center justify-center mb-5 group-hover:border-cyan-200/50 transition-colors">
                      <Icon size={ICON_LG} className={iconColor} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                    <p className="text-cyan-600 text-xs font-semibold mt-0.5 mb-3 uppercase tracking-wider">{sub}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Tilt3D>
            </StaggerItem>
          ))}
        </StaggerContainerSlow>
      </div>
    </section>
  );
}
