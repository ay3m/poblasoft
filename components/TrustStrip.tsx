import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Técnico Matriculado",
    desc: "Cámara Argentina de Calefacción y A/A",
  },
  {
    icon: Shield,
    title: "Garantía en Trabajos",
    desc: "Respaldamos cada servicio realizado",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    desc: "Atendemos consultas en el día",
  },
  {
    icon: ThumbsUp,
    title: "Presupuesto Gratis",
    desc: "Sin cargo ni compromiso",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-slate-900 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 text-white">
              <div className="bg-blue-600/30 rounded-xl p-2.5 shrink-0 mt-0.5">
                <Icon size={22} className="text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-sm leading-tight">{title}</p>
                <p className="text-slate-400 text-xs mt-0.5 leading-tight">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
