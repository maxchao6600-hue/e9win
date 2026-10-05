import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { guideBySlug, guides } from "@/lib/content";
import { guideDepth } from "@/lib/guideDepth";
import { hubForSlug } from "@/lib/guideHub";
import { guideScenes } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return { title: "Guide" };
  const path = `/guides/${guide.slug}`;
  return {
    title: { absolute: `${guide.title} | E9WIN Guides` },
    description: guide.excerpt,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { title: guide.title, description: guide.excerpt, url: absoluteUrl(path), type: "article" },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();
  const depth = guideDepth[guide.slug];
  const scene = guideScenes[guide.category];
  const hub = hubForSlug(guide.slug);
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[
        { href: "/", label: "Home" },
        { href: "/guides", label: "Guides" },
        ...(hub ? [{ href: `/guides#${hub.id}`, label: hub.title }] : []),
        { label: guide.title },
      ]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{guide.category}</p>
          <h1>{guide.title}</h1>
          <p>{guide.excerpt}</p>
        </div>
        {scene ? <img src={scene.src} alt={scene.alt} width={1600} height={760} /> : null}
      </section>
      {depth ? (
        <section className="topic">
          <h2>What this guide covers</h2>
          <ul>{depth.covers.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      ) : null}
      <VisualSplit
        src={guide.category === "Download" ? "/images/brand/scene-slots.webp" : guide.category === "Payments" ? "/images/brand/scene-account.webp" : "/images/brand/scene-devices.webp"}
        alt={guide.category === "Download" ? "Gates of Olympus on a display in a dark private room" : guide.category === "Payments" ? "A quiet desk beside a night window" : "A phone and a laptop on a dark marble desk"}
        reverse
      >
        <h2>Steps</h2>
        <ol className="steps">{guide.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      </VisualSplit>
      {depth ? (
        <>
          <section className="topic">
            <h2>Important notes</h2>
            {depth.notes.map((item) => <p key={item}>{item}</p>)}
          </section>
          <section className="topic">
            <h2>Common mistakes</h2>
            <ul>{depth.mistakes.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="topic">
            <h2>Troubleshooting</h2>
            {depth.trouble.map((item) => <p key={item.q}><strong>{item.q}</strong> {item.a}</p>)}
          </section>
          <FaqBlock items={depth.faq} />
        </>
      ) : null}
      <p><Link className="btn btn-primary" href="/register">Open the lobby</Link></p>
      <h2>Related</h2>
      <p>{guide.related.map((link, index) => (
        <span key={link.href}>{index > 0 ? " · " : null}<Link href={link.href}>{link.label}</Link></span>
      ))}</p>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        dateModified: guide.updatedAt,
        author: { "@type": "Organization", name: "E9WIN" },
        mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
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
    </div>
  );
}
