import { CheckCircle, MapPin } from "lucide-react";

const highlights = [
  "Técnico matriculado por la Cámara Argentina de Calefacción, Aire Acondicionado y Refrigeración",
  "Atendemos todo Corrientes Capital y alrededores",
  "Presupuesto sin costo, sin compromiso",
  "Garantía en repuestos y mano de obra",
  "Trabajo prolijo, puntual y profesional",
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Visual block */}
        <div className="relative">
          <div className="gradient-hero rounded-3xl p-10 text-white shadow-2xl">
            <div className="text-6xl font-black text-white/20 leading-none select-none mb-2">GR</div>
            <h3 className="text-2xl font-bold mb-1">Gekko Refrigeración</h3>
            <div className="flex items-center gap-1.5 text-blue-200 text-sm mb-6">
              <MapPin size={14} />
              Corrientes Capital, Argentina
            </div>

            <div className="bg-white/15 rounded-2xl p-5 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-300 text-base mt-0.5">✓</span>
                <span>Técnico Matriculado · Trabajo habilitado</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-300 text-base mt-0.5">✓</span>
                <span>Equipos Split inverter, Split estándar y Ventana</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-300 text-base mt-0.5">✓</span>
                <span>Atención personalizada y rápida respuesta</span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/20 pt-5 text-xs text-blue-200 leading-relaxed">
              Matriculado por la Cámara Argentina de Calefacción,<br />
              Aire Acondicionado y Calefacción (CACAYR)
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg rotate-3">
            Matriculado ✓
          </div>
        </div>

        {/* Text content */}
        <div>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Sobre nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Profesionales en<br />refrigeración
          </h2>
          <div className="section-divider" style={{ margin: "0 0 1.5rem 0" }} />
          <p className="text-slate-600 leading-relaxed mb-7">
            Somos <strong>Gekko Refrigeración</strong>, tu servicio técnico de confianza en Corrientes Capital.
            Nos especializamos en instalación, mantenimiento y reparación de aires acondicionados,
            con la garantía de un trabajo profesional y matriculado.
          </p>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
