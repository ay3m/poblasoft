"use client";

import { Shield, Clock, Award, ThumbsUp } from "lucide-react";
import { FadeIn, StaggerContainerFast, StaggerItem, HoverCard } from "@/components/ui/Motion";
import { SECTION_PY_SM, CONTAINER, ICON_MD } from "@/lib/design-tokens";

const items = [
  { icon: Award,    label: "Técnico Matriculado" },
  { icon: Shield,   label: "Garantía incluida" },
  { icon: Clock,    label: "Respuesta en el día" },
  { icon: ThumbsUp, label: "Presupuesto sin cargo" },
];

export default function TrustStrip() {
  return (
    <FadeIn>
      <section className={`bg-[#020617] ${SECTION_PY_SM}`}>
        <div className={CONTAINER}>
          <StaggerContainerFast className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <HoverCard className="h-full">
                  <div className="glass-card rounded-xl p-4 flex items-center gap-3 h-full">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <Icon size={ICON_MD} className="text-cyan-400" />
                    </div>
                    <p className="font-semibold text-sm text-white/90 leading-tight">{label}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainerFast>
        </div>
      </section>
    </FadeIn>
  );
}
