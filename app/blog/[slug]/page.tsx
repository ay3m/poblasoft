import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts, getPost, formatDate } from "@/lib/blog-data";
import { WA_URL } from "@/lib/constants";
import { ICON_SM } from "@/lib/design-tokens";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: `${post.title} | Gekko Refrigeración`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#020617] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-slate-400 text-sm hover:text-cyan-400 transition-colors mb-6">
            <ArrowLeft size={ICON_SM} /> Volver al blog
          </Link>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <article>
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">{line.replace("## ", "")}</h2>;
            if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold text-slate-900 mt-8 mb-3">{line.replace("### ", "")}</h3>;
            if (line.startsWith("- **")) {
              const match = line.match(/- \*\*(.+?)\*\*\s*—?\s*(.*)/);
              if (match) return <li key={i} className="text-slate-600 text-sm mb-1.5 ml-4 list-disc"><strong className="text-slate-800">{match[1]}</strong>{match[2] ? ` — ${match[2]}` : ""}</li>;
            }
            if (line.startsWith("- ")) return <li key={i} className="text-slate-600 text-sm mb-1.5 ml-4 list-disc">{line.replace("- ", "")}</li>;
            if (line.match(/^\d+\. /)) return <li key={i} className="text-slate-600 text-sm mb-1.5 ml-4 list-decimal">{line.replace(/^\d+\.\s/, "")}</li>;
            if (line.trim() === "") return <div key={i} className="h-3" />;
            const parts = line.split(/\*\*(.*?)\*\*/g);
            if (parts.length > 1) {
              return (
                <p key={i} className="text-slate-600 text-[15px] leading-relaxed mb-2">
                  {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-slate-800">{part}</strong> : part)}
                </p>
              );
            }
            return <p key={i} className="text-slate-600 text-[15px] leading-relaxed mb-2">{line}</p>;
          })}
        </article>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#f0f9ff] border border-cyan-100 text-center">
          <h3 className="font-bold text-slate-900 text-lg mb-2">¿Necesitás un técnico?</h3>
          <p className="text-slate-500 text-sm mb-5">Presupuesto sin cargo · Respuesta en el día</p>
          <a
            href={WA_URL("Hola Pablo, leí un artículo en tu blog y me gustaría consultar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full text-base"
          >
            Pedir presupuesto por WhatsApp
          </a>
        </div>

        {/* More articles */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Más artículos</h3>
          <div className="space-y-3">
            {posts.filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block text-cyan-600 hover:text-cyan-700 text-sm font-medium transition-colors">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
