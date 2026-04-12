"use client";

import { Star } from "lucide-react";
import { FadeUp, StaggerContainerSlow, StaggerItem, HoverCard } from "@/components/ui/Motion";
import { SECTION_PY, CONTAINER, HEADER_MB, LABEL_DARK, ICON_SM, CARD_PADDING } from "@/lib/design-tokens";

const testimonials = [
  {
    name: "María G.",
    location: "Bº Cacique Canindeyú",
    text: "Excelente servicio. Pablo vino el mismo día que lo llamé, instaló el split en menos de 3 horas y dejó todo impecable. Muy profesional.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    location: "Centro",
    text: "Muy profesional y honesto. Me diagnosticó el problema del aire en 10 minutos y la reparación fue rápida. Lo recomiendo totalmente.",
    stars: 5,
  },
  {
    name: "Ana L.",
    location: "Bº Aldana",
    text: "El mejor técnico que encontré en Corrientes. Precio justo, puntual y con garantía. Ya le derivé varios conocidos.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className={`${SECTION_PY} bg-[#020617] relative overflow-hidden`}>
      <div className={`${CONTAINER} relative z-10`}>
        <FadeUp>
          <div className={`text-center ${HEADER_MB}`}>
            <span className={LABEL_DARK}>Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </FadeUp>

        <StaggerContainerSlow className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, text, stars }) => (
            <StaggerItem key={name}>
              <HoverCard className="h-full">
                <div className={`glass-card rounded-2xl ${CARD_PADDING} h-full flex flex-col`}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} size={ICON_SM} className="text-cyan-400 fill-cyan-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">{text}</p>

                  <div className="border-t border-white/5 pt-4">
                    <p className="text-white font-semibold text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{location}</p>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainerSlow>
      </div>
    </section>
  );
}
