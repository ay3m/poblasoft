import { Phone, Star } from "lucide-react";

const WA_NUMBER = "543794348893";
const WA_MSG = "Hola Pablo, me contacto desde tu página web. Quisiera solicitar un presupuesto gratuito.";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="gradient-hero relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Snowflake pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ctext x='50%25' y='50%25' font-size='40' text-anchor='middle' dominant-baseline='central' fill='white'%3E❄%3C/text%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div className="text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            Técnico Matriculado · Corrientes Capital
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Servicio Técnico de<br />
            <span className="text-blue-200">Aires Acondicionados</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-md leading-relaxed">
            Instalación, mantenimiento y reparación profesional de equipos tipo Split y Ventana.
            Atendemos todo Corrientes Capital.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2.5 text-white font-bold px-7 py-4 rounded-full text-base shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="white">
                <path d="M16.003 0C7.17 0 0 7.17 0 16.003c0 2.83.74 5.49 2.03 7.8L0 32l8.43-2.01a16 16 0 0 0 7.573 1.924C24.836 31.914 32 24.744 32 16.003 32 7.17 24.836 0 16.003 0zm7.23 21.315c-.397-.198-2.347-1.158-2.71-1.29-.364-.13-.63-.197-.895.198-.265.394-1.03 1.29-1.26 1.555-.232.264-.464.296-.86.098-.397-.198-1.676-.618-3.192-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.174-.808.178-.177.396-.462.595-.693.198-.23.264-.395.396-.66.132-.263.066-.494-.033-.692-.1-.198-.895-2.156-1.226-2.95-.323-.773-.65-.668-.895-.68l-.762-.012c-.264 0-.694.1-1.057.494-.364.395-1.39 1.357-1.39 3.31 0 1.954 1.423 3.842 1.622 4.106.198.265 2.8 4.276 6.786 5.995.949.41 1.69.655 2.267.838.953.303 1.82.26 2.506.158.764-.114 2.347-.96 2.678-1.887.33-.928.33-1.724.232-1.888-.1-.165-.365-.264-.762-.462z" />
              </svg>
              Pedir Presupuesto Gratis
            </a>
            <a
              href="tel:+543794348893"
              className="flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-4 rounded-full text-base hover:bg-white/25 transition-colors"
            >
              <Phone size={18} />
              Llamar Ahora
            </a>
          </div>

          {/* Trust mini-badges */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-100">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Garantía en trabajos
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Respuesta en el día
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Presupuesto sin cargo
            </span>
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden md:flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-sm w-full">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="9" rx="2" />
                  <path d="M12 12v9" />
                  <path d="M8 17h8" />
                  <path d="M6 7h1" /><path d="M10 7h1" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">Gekko Refrigeración</h3>
              <p className="text-blue-200 text-sm mt-1">Corrientes Capital</p>
            </div>
            <div className="space-y-3 text-sm text-white/90">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <span className="text-green-300 text-lg">✓</span>
                Instalación tipo Split matriculada
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <span className="text-green-300 text-lg">✓</span>
                Mantenimiento y limpieza
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <span className="text-green-300 text-lg">✓</span>
                Reparación Split y Ventana
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-center text-white/70 text-xs">
                Matriculado por la Cámara Argentina de<br />Calefacción, Aire Acondicionado y Refrigeración
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
