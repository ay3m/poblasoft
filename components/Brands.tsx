"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { SECTION_PY_SM, CONTAINER } from "@/lib/design-tokens";

const brands = [
  { name: "Carrier", color: "#0055A5" },
  { name: "Samsung", color: "#1428A0" },
  { name: "LG", color: "#A50034" },
  { name: "BGH", color: "#003B71" },
  { name: "Surrey", color: "#E31937" },
  { name: "Midea", color: "#00A3E0" },
  { name: "Philco", color: "#1D1D1B" },
  { name: "Hitachi", color: "#E60012" },
  { name: "Daikin", color: "#00A0D2" },
  { name: "Electra", color: "#0066B3" },
  { name: "Atma", color: "#E30613" },
  { name: "TopHouse", color: "#333333" },
];

export default function Brands() {
  return (
    <section className={`${SECTION_PY_SM} bg-white border-t border-slate-100`}>
      <div className={CONTAINER}>
        <FadeUp>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-10">
            Trabajamos con todas las marcas
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {brands.map(({ name, color }) => (
            <StaggerItem key={name}>
              <div
                className="group flex items-center justify-center py-4 px-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all duration-300 cursor-default"
              >
                <span
                  className="font-bold text-sm text-slate-300 group-hover:text-current transition-colors duration-300"
                  style={{ "--tw-text-opacity": 1, color: undefined } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
