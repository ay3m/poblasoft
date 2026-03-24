"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const WA_NUMBER = "543794348893";
const WA_MSG = "Hola Pablo, me contacto desde tu página web.";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <StaggerItem>
            <div>
              <h3 className="font-bold text-xl mb-2">
                Gekko <span className="text-blue-400">Refrigeración</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Servicio técnico de aires acondicionados en Corrientes Capital.
                Instalación, mantenimiento y reparación.
              </p>
              <p className="text-slate-500 text-xs">
                Matriculado por la Cámara Argentina de<br />Calefacción, Aire Acondicionado y Refrigeración
              </p>
            </div>
          </StaggerItem>

          {/* Links */}
          <StaggerItem>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">
                Servicios
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Instalación tipo Split matriculada
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Mantenimiento y limpieza
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Reparación Split y Ventana
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition-colors">
                    Presupuesto sin cargo
                  </a>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-green-400">●</span>
                    WhatsApp: 3794 348893
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+543794348893"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-blue-400">●</span>
                    Tel: +54 3794 348893
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:gekko.refrigeracion@gmail.com"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-slate-400">●</span>
                    gekko.refrigeracion@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/gekko_refrigeracion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-pink-400">●</span>
                    @gekko_refrigeracion
                  </a>
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="border-t border-slate-800 py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Gekko Refrigeración. Corrientes Capital, Argentina.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
