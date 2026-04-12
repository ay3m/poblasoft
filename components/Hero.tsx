"use client";

import { useRef } from "react";
import { Phone } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { FadeIn, FadeUp, StaggerContainer, StaggerItem, AnimatedLink } from "@/components/ui/Motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { WA_URL, PHONE_NUMBER } from "@/lib/constants";
import { BTN_LG, ICON_SM } from "@/lib/design-tokens";

const WA_MSG = "Hola Pablo, me contacto desde tu página web. Quisiera solicitar un presupuesto gratuito.";

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="white">
    <path d="M16.003 0C7.17 0 0 7.17 0 16.003c0 2.83.74 5.49 2.03 7.8L0 32l8.43-2.01a16 16 0 0 0 7.573 1.924C24.836 31.914 32 24.744 32 16.003 32 7.17 24.836 0 16.003 0zm7.23 21.315c-.397-.198-2.347-1.158-2.71-1.29-.364-.13-.63-.197-.895.198-.265.394-1.03 1.29-1.26 1.555-.232.264-.464.296-.86.098-.397-.198-1.676-.618-3.192-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.174-.808.178-.177.396-.462.595-.693.198-.23.264-.395.396-.66.132-.263.066-.494-.033-.692-.1-.198-.895-2.156-1.226-2.95-.323-.773-.65-.668-.895-.68l-.762-.012c-.264 0-.694.1-1.057.494-.364.395-1.39 1.357-1.39 3.31 0 1.954 1.423 3.842 1.622 4.106.198.265 2.8 4.276 6.786 5.995.949.41 1.69.655 2.267.838.953.303 1.82.26 2.506.158.764-.114 2.347-.96 2.678-1.887.33-.928.33-1.724.232-1.888-.1-.165-.365-.264-.762-.462z" />
  </svg>
);

const stats = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 24, suffix: "hs", label: "Respuesta garantizada" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #020617 0%, #0c4a6e 55%, #0e7490 100%)",
      }}
    >
      {/* Subtle radial accents */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(6,182,212,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 75% 25%, rgba(56,189,248,0.08) 0%, transparent 50%)",
      }} />

      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 w-full relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 text-sm font-medium text-white/80">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Corrientes Capital · Técnico Matriculado
              </div>
            </FadeIn>

            <FadeUp delay={0.08}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-5">
                Tu aire acondicionado,<br />
                <span className="text-gradient-ice">en manos expertas.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="text-lg text-slate-300/90 mb-10 max-w-lg mx-auto lg:mx-0">
                Instalación, mantenimiento y reparación de equipos Split y Ventana en Corrientes Capital.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <AnimatedLink
                  href={WA_URL(WA_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-whatsapp flex items-center justify-center gap-2.5 text-white ${BTN_LG} shadow-lg`}
                >
                  {WA_ICON}
                  Pedir presupuesto gratis
                </AnimatedLink>
                <AnimatedLink
                  href={`tel:${PHONE_NUMBER}`}
                  className={`flex items-center justify-center gap-2 glass text-white ${BTN_LG} hover:bg-white/10`}
                >
                  <Phone size={ICON_SM} />
                  Llamar ahora
                </AnimatedLink>
              </div>
            </FadeUp>

            {/* Stats */}
            <StaggerContainer className="mt-14 flex gap-10 justify-center lg:justify-start" delay={0.35}>
              {stats.map(({ value, suffix, label }) => (
                <StaggerItem key={label}>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      <AnimatedCounter target={value} suffix={suffix} />
                    </p>
                    <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider font-medium">{label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right — Image with VISIBLE split AC */}
          <div className="hidden lg:block">
            <FadeIn delay={0.3}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <Image
                  src="/images/hero-interior.jpg"
                  alt="Living moderno con aire acondicionado split instalado"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}
