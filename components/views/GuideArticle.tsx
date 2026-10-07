import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { guideBySlug } from "@/lib/content";
import { guideDepth } from "@/lib/guideDepth";
import { presentGuide } from "@/lib/i18n/zhGuides";
import { presentDepth } from "@/lib/i18n/zhDepth";
import { hubForSlug } from "@/lib/guideHub";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { sceneAlt } from "@/lib/i18n/sceneAlt";
import { guideStepVisuals, guideVisuals } from "@/lib/guideVisuals";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const hubTitle: Record<string, string> = {
  "getting-started": "入门",
  games: "游戏",
  mobile: "手机",
  payments: "支付",
  promotions: "优惠",
  account: "账户",
  "responsible-gaming": "理性娱乐",
};

export function guideMetadata(slug: string, locale: Locale): Metadata {
  const guide = guideBySlug(slug);
  if (!guide) return { title: "Guide" };
  const text = presentGuide(guide, locale);
  const path = localizePath(`/guides/${guide.slug}`, locale);
  return pageMeta({
    title: locale === "zh" ? `${text.title}` : `${guide.title} | E9WIN Guides`,
    description: text.excerpt,
    path,
    locale,
    ogType: "article",
  });
}

export async function GuideArticle({ params, locale }: { params: Promise<{ slug: string }>; locale: Locale }) {
  const { slug } = await params;
  const source = guideBySlug(slug);
  if (!source) notFound();
  const guide = presentGuide(source, locale);
  const depth = presentDepth(guideDepth[source.slug], locale, source.slug);
  const scene = guideVisuals[source.slug];
  const stepsScene = guideStepVisuals[source.slug] ?? scene;
  const hub = hubForSlug(source.slug);
  const href = (path: string) => localizePath(path, locale);
  const path = href(`/guides/${source.slug}`);
  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[
        { href: href("/"), label: tx(locale, "Home", "首页") },
        { href: href("/guides"), label: tx(locale, "Guides", "指南") },
        ...(hub ? [{ href: `${href("/guides")}#${hub.id}`, label: tx(locale, hub.title, hubTitle[hub.id] ?? hub.title) }] : []),
        { label: guide.title },
      ]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{guide.categoryLabel}</p>
          <h1>{guide.title}</h1>
          <p>{guide.excerpt}</p>
        </div>
        {scene ? <img src={scene.src} alt={sceneAlt(scene.alt, locale)} width={1600} height={900} style={{ objectPosition: scene.position }} /> : null}
      </section>
      {depth ? (
        <section className="topic">
          <h2>{tx(locale, "What this guide covers", "本指南涵盖")}</h2>
          <ul>{depth.covers.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      ) : null}
      <VisualSplit src={stepsScene.src} alt={sceneAlt(stepsScene.alt, locale)} position={stepsScene.position} reverse>
        <h2>{tx(locale, "Steps", "步骤")}</h2>
        <ol className="steps">{guide.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      </VisualSplit>
      {depth ? (
        <>
          <section className="topic">
            <h2>{tx(locale, "Important notes", "需要知道的事")}</h2>
            {depth.notes.map((item) => <p key={item}>{item}</p>)}
          </section>
          <section className="topic">
            <h2>{tx(locale, "Common mistakes", "常见误会")}</h2>
            <ul>{depth.mistakes.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="topic">
            <h2>{tx(locale, "Troubleshooting", "遇到问题时")}</h2>
            {depth.trouble.map((item) => <p key={item.q}><strong>{item.q}</strong> {item.a}</p>)}
          </section>
          <FaqBlock items={depth.faq} title={tx(locale, "FAQ", "常见问题")} />
        </>
      ) : null}
      <p><Link className="btn btn-primary" href={href("/register")}>{tx(locale, "Open the lobby", "打开大厅")}</Link></p>
      <h2>{tx(locale, "Related", "相关页面")}</h2>
      <p>{guide.related.map((link, index) => (
        <span key={link.href}>{index > 0 ? " · " : null}<Link href={link.href}>{link.label}</Link></span>
      ))}</p>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        inLanguage: locale === "zh" ? "zh-MY" : "en-MY",
        dateModified: source.updatedAt,
        author: { "@type": "Organization", name: "E9WIN" },
        mainEntityOfPage: absoluteUrl(path),
      }} />
      {depth ? (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: depth.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }} />
      ) : null}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: tx(locale, "Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: tx(locale, "Guides", "指南"), item: absoluteUrl(href("/guides")) },
          { "@type": "ListItem", position: 3, name: guide.title, item: absoluteUrl(path) },
        ],
      }} />
    </div>
  );
}
