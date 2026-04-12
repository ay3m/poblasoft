"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { WA_URL, PHONE_NUMBER, PHONE_DISPLAY, EMAIL, INSTAGRAM_URL } from "@/lib/constants";
import { CONTAINER_NAV, ICON_SM } from "@/lib/design-tokens";

const WA_MSG = "Hola Pablo, me contacto desde tu página web.";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white border-t border-white/5">
      <div className={`${CONTAINER_NAV} py-12`}>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <StaggerItem>
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Image src="/images/gecko-icon.png" alt="Gekko Refrigeración" width={36} height={36} className="rounded-full" />
                <h3 className="font-bold text-lg">
                  Gekko <span className="text-gradient-ice">Refrigeración</span>
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Servicio técnico de aires acondicionados en Corrientes Capital.
              </p>
              <p className="text-slate-600 text-xs">
                Matriculado por la Cámara Argentina de Calefacción, Aire Acondicionado y Refrigeración
              </p>
            </div>
          </StaggerItem>

          {/* Services */}
          <StaggerItem>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-500 mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Instalación tipo Split</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Mantenimiento y limpieza</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Reparación Split y Ventana</a></li>
                <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Presupuesto sin cargo</a></li>
              </ul>
            </div>
          </StaggerItem>

          {/* Horario + Contact */}
          <StaggerItem>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-500 mb-4">Horario de atención</h4>
              <div className="flex items-start gap-2 mb-4">
                <Clock size={ICON_SM} className="text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-400 space-y-1">
                  <p>Lunes a Viernes: <span className="text-slate-300">8:00 - 12:00 / 16:00 - 20:00</span></p>
                  <p>Sábados: <span className="text-slate-300">8:00 - 12:00</span></p>
                  <p className="text-xs text-slate-500 mt-1">Urgencias: consultar por WhatsApp</p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-500 mb-4">Contacto</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href={WA_URL(WA_MSG)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <span className="text-green-400">●</span> WhatsApp: {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-400">●</span> Tel: {PHONE_NUMBER}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <span className="text-slate-500">●</span> {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <span className="text-pink-400">●</span> @gekko_refrigeracion
                  </a>
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className={`${CONTAINER_NAV} flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-600`}>
          <p>&copy; {new Date().getFullYear()} Gekko Refrigeración. Corrientes Capital, Argentina.</p>
          <div className="flex gap-4">
            <a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a>
            <span>Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
