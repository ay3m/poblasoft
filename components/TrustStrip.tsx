"use client";

import { Shield, Clock, Award, ThumbsUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const items = [
  { icon: Award,    label: "Técnico Matriculado" },
  { icon: Shield,   label: "Garantía incluida" },
  { icon: Clock,    label: "Respuesta en el día" },
  { icon: ThumbsUp, label: "Presupuesto sin cargo" },
];

export default function TrustStrip() {
  return (
    <FadeIn>
      <section className="bg-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-blue-600/25 rounded-xl p-2.5 shrink-0">
                    <Icon size={20} className="text-blue-300" />
                  </div>
                  <p className="font-semibold text-sm leading-tight">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </FadeIn>
  );
}
