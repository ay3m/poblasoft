import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { posts, formatDate } from "@/lib/blog-data";
import { ICON_SM } from "@/lib/design-tokens";

export const metadata = {
  title: "Blog | Gekko Refrigeración — Consejos sobre aires acondicionados",
  description: "Artículos y guías sobre mantenimiento, reparación e instalación de aires acondicionados en Corrientes.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#020617] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-1 text-slate-400 text-sm hover:text-cyan-400 transition-colors mb-6">
            <ArrowLeft size={ICON_SM} /> Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Blog</h1>
          <p className="text-slate-400 mt-3 text-lg">Consejos para mantener tu aire acondicionado en óptimas condiciones.</p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {posts.map(({ slug, title, excerpt, date, readTime }) => (
            <Link key={slug} href={`/blog/${slug}`} className="block group">
              <article className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <time>{formatDate(date)}</time>
                  <span>·</span>
                  <span>{readTime}</span>
                </div>
                <h2 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-cyan-600 transition-colors">{title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{excerpt}</p>
                <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer artículo <ArrowRight size={ICON_SM} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
