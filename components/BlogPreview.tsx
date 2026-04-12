"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/Motion";
import { SECTION_PY, CONTAINER, HEADER_MB, LABEL_LIGHT, ICON_SM, CARD_PADDING } from "@/lib/design-tokens";
import { posts, formatDate } from "@/lib/blog-data";

export default function BlogPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section className={`${SECTION_PY} bg-white`}>
      <div className={CONTAINER}>
        <FadeUp>
          <div className={`text-center ${HEADER_MB}`}>
            <span className={LABEL_LIGHT}>Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Consejos para tu aire acondicionado
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {latest.map(({ slug, title, excerpt, date, readTime }) => (
            <StaggerItem key={slug}>
              <HoverCard className="h-full">
                <Link href={`/blog/${slug}`} className="block h-full">
                  <article className={`bg-slate-50 rounded-2xl border border-slate-100 ${CARD_PADDING} h-full flex flex-col group`}>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <time>{formatDate(date)}</time>
                      <span>·</span>
                      <span>{readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-cyan-600 transition-colors">
                      {title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{excerpt}</p>
                    <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer más <ArrowRight size={ICON_SM} />
                    </span>
                  </article>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors"
            >
              Ver todos los artículos <ArrowRight size={ICON_SM} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
