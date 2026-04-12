"use client";

import Image from "next/image";
import { MessageCircle, Search, ShieldCheck } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Motion";
import { SECTION_PY, CONTAINER, HEADER_MB, LABEL_LIGHT, ICON_SM, ICON_LG } from "@/lib/design-tokens";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Contactanos",
    desc: "Escribinos por WhatsApp o llamanos. Te respondemos el mismo día.",
  },
  {
    num: "02",
    icon: Search,
    title: "Diagnóstico",
    desc: "Vamos a tu domicilio, revisamos el equipo y te damos un presupuesto sin cargo.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Trabajo garantizado",
    desc: "Realizamos el servicio con materiales de calidad. Todo el trabajo tiene garantía.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className={`${SECTION_PY} bg-gradient-to-b from-[#f0f9ff] to-white`}>
      <div className={CONTAINER}>
        <FadeUp>
          <div className={`text-center ${HEADER_MB}`}>
            <span className={LABEL_LIGHT}>Cómo trabajamos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Simple y sin vueltas
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <SlideLeft>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-tech.jpg"
                alt="Técnicos trabajando en equipos de aire acondicionado"
                width={600}
                height={400}
                className="object-cover w-full h-[320px] lg:h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 via-transparent to-transparent" />
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="space-y-8">
              {steps.map(({ num, icon: Icon, title, desc }) => (
                <div key={num} className="flex gap-4 items-start group">
                  <div className="shrink-0 relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c4a6e] to-[#0e7490] flex items-center justify-center shadow-lg shadow-cyan-900/20 group-hover:shadow-cyan-500/20 transition-shadow">
                      <Icon size={ICON_LG - 4} className="text-cyan-300" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-cyan-400 text-[#0a1628] text-[10px] font-bold flex items-center justify-center">
                      {num}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-slate-900 text-base mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideRight>
        </div>

        <FadeUp delay={0.2}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-xs text-slate-500">
              <ShieldCheck size={ICON_SM} className="text-cyan-500" />
              Técnico Matriculado · Cámara Argentina de Calefacción, Aire Acondicionado y Refrigeración
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
