import { Wrench, Settings, Zap } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Instalación Matriculada",
    subtitle: "Aires Acondicionados tipo Split",
    desc: "Instalación profesional y habilitada de equipos Split, asegurando el cumplimiento de normas técnicas y de seguridad vigentes.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Settings,
    title: "Mantenimiento",
    subtitle: "Limpieza y control general",
    desc: "Servicio preventivo para mantener tu equipo en óptimas condiciones: limpieza de filtros, revisión de gas, control eléctrico y mecánico.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Wrench,
    title: "Reparación",
    subtitle: "Equipos tipo Split y Ventana",
    desc: "Diagnóstico y reparación de fallas en equipos Split y de Ventana. Repuestos de calidad y garantía en la mano de obra.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Lo que hacemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Nuestros Servicios
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Brindamos soluciones completas para tu equipo de aire acondicionado en Corrientes Capital.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, subtitle, desc, color, bg }) => (
            <div
              key={title}
              className="service-card bg-white rounded-2xl border border-slate-100 p-7 shadow-sm"
            >
              <div className={`${bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
                <Icon size={28} className={color} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight">{title}</h3>
              <p className={`${color} font-medium text-sm mt-0.5 mb-3`}>{subtitle}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom brand logos area */}
        <div className="mt-14 pt-10 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm font-medium mb-5">
            Reparamos todas las marcas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-500 font-semibold text-sm">
            {["Samsung", "LG", "Carrier", "Daikin", "Midea", "BGH", "Gree", "Electrolux"].map((b) => (
              <span
                key={b}
                className="bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
