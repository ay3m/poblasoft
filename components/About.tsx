"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const steps = [
  {
    num: "01",
    title: "Contactanos",
    desc: "Escribinos por WhatsApp o llamanos. Te respondemos el mismo día.",
  },
  {
    num: "02",
    title: "Diagnóstico",
    desc: "Vamos a tu domicilio, revisamos el equipo y te damos un presupuesto sin cargo.",
  },
  {
    num: "03",
    title: "Trabajo garantizado",
    desc: "Realizamos el servicio con materiales de calidad. Todo el trabajo tiene garantía.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24" style={{ background: "linear-gradient(180deg,#f0f7ff 0%,#ffffff 100%)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">Cómo trabajamos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Simple y sin vueltas
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          <StaggerContainer className="contents">
            {steps.map(({ num, title, desc }) => (
              <StaggerItem key={num}>
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-white font-black text-xl mb-5 shadow-lg relative z-10">
                    {num}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-xs mt-12">
          Técnico Matriculado · Cámara Argentina de Calefacción, Aire Acondicionado y Refrigeración
        </p>
      </div>
    </section>
  );
}
