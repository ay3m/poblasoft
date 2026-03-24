import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gekko Refrigeración | Servicio Técnico de Aires Acondicionados en Corrientes",
  description:
    "Instalación, mantenimiento y reparación de aires acondicionados tipo Split y Ventana en Corrientes Capital. Técnico matriculado por la Cámara Argentina de Calefacción.",
  keywords:
    "servicio técnico aires acondicionados Corrientes, instalación split Corrientes, reparación aire acondicionado Corrientes, Gekko Refrigeración",
  openGraph: {
    title: "Gekko Refrigeración | Servicio Técnico en Corrientes",
    description: "Instalación, mantenimiento y reparación de aires acondicionados. Técnico matriculado.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
