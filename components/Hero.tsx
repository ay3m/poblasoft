"use client";

import { Phone } from "lucide-react";
import { FadeIn, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const WA_NUMBER = "543794348893";
const WA_MSG = "Hola Pablo, me contacto desde tu página web. Quisiera solicitar un presupuesto gratuito.";

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="white">
    <path d="M16.003 0C7.17 0 0 7.17 0 16.003c0 2.83.74 5.49 2.03 7.8L0 32l8.43-2.01a16 16 0 0 0 7.573 1.924C24.836 31.914 32 24.744 32 16.003 32 7.17 24.836 0 16.003 0zm7.23 21.315c-.397-.198-2.347-1.158-2.71-1.29-.364-.13-.63-.197-.895.198-.265.394-1.03 1.29-1.26 1.555-.232.264-.464.296-.86.098-.397-.198-1.676-.618-3.192-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.174-.808.178-.177.396-.462.595-.693.198-.23.264-.395.396-.66.132-.263.066-.494-.033-.692-.1-.198-.895-2.156-1.226-2.95-.323-.773-.65-.668-.895-.68l-.762-.012c-.264 0-.694.1-1.057.494-.364.395-1.39 1.357-1.39 3.31 0 1.954 1.423 3.842 1.622 4.106.198.265 2.8 4.276 6.786 5.995.949.41 1.69.655 2.267.838.953.303 1.82.26 2.506.158.764-.114 2.347-.96 2.678-1.887.33-.928.33-1.724.232-1.888-.1-.165-.365-.264-.762-.462z" />
  </svg>
);

const stats = [
  { value: "Split & Ventana", label: "Equipos" },
  { value: "Matriculado", label: "Técnico certificado" },
  { value: "Gratis", label: "Presupuesto" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="gradient-hero relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-white/90">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Corrientes Capital · Técnico Matriculado
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Tu aire acondicionado,<br />
            <span className="text-blue-200">en manos expertas.</span>
          </h1>
        </FadeUp>

        {/* Subtitle — one line */}
        <FadeUp delay={0.2}>
          <p className="text-lg text-blue-100/80 mb-10 max-w-lg mx-auto">
            Instalación, mantenimiento y reparación en Corrientes Capital.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base shadow-xl"
            >
              {WA_ICON}
              Pedir presupuesto gratis
            </a>
            <a
              href="tel:+543794348893"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/25 transition-colors"
            >
              <Phone size={17} />
              Llamar ahora
            </a>
          </div>
        </FadeUp>

        {/* Stats row */}
        <StaggerContainer
          className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto"
          delay={0.4}
        >
          {stats.map(({ value, label }) => (
            <StaggerItem key={label}>
              <div className="text-center">
                <p className="text-white font-bold text-lg leading-tight">{value}</p>
                <p className="text-blue-200/70 text-xs mt-0.5">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
