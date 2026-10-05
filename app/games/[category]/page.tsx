import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GameBrowser } from "@/components/games/GameBrowser";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { categoryCopy } from "@/lib/categoryCopy";
import { categories, categoryFromParam, categoryPath, gamesByCategory, type GameCategory } from "@/lib/games";
import { pageMeta } from "@/lib/seo";
import { categoryScenes, pageScenes, type Scene } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ category: category.slug === "lottery" ? "4d" : category.slug })),
    { category: "lottery" },
  ];
}

export function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  return params.then(({ category }) => {
    const item = categoryFromParam(category);
    if (!item) return { title: "Games" };
    const title = item.slug === "lottery" ? "E9WIN 4D Lottery | Magnum, Da Ma Cai, Toto, Singapore" : `E9WIN ${item.title} | ${item.title} in the lobby`;
    const scene = categoryScenes[item.slug];
    const meta = pageMeta({ title, description: item.description, path: categoryPath(item.slug) });
    if (!scene) return meta;
    return {
      ...meta,
      openGraph: { ...meta.openGraph, images: [{ url: absoluteUrl(scene.src), alt: scene.alt }] },
      twitter: { ...meta.twitter, images: [absoluteUrl(scene.src)] },
    };
  });
}

function scenesFor(slug: GameCategory): Scene[] {
  const scene = categoryScenes[slug];
  const category = categories.find((item) => item.slug === slug);
  const scenes: Scene[] = [scene, pageScenes.download, { src: "/images/brand/scene-payments.webp", alt: "A card and a phone on a dark cashier counter" }, { src: "/images/brand/scene-account.webp", alt: "A quiet desk beside a night window" }];
  if (category?.image) {
    scenes.splice(1, 0, { src: category.image, alt: `${category.title} artwork from the public E9WIN catalog` });
  }
  return scenes;
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = categoryFromParam(category);
  if (!item) notFound();
  const list = gamesByCategory(item.slug);
  const copy = categoryCopy[item.slug];
  const scene = categoryScenes[item.slug];
  const label = item.slug === "lottery" ? "4D Lottery" : item.title;
  const path = categoryPath(item.slug);
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/games", label: "Games" }, { href: path, label }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Games</p>
          <h1>{label}</h1>
          <p>{copy.lead}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/register">Register to play</Link>
            <Link className="btn btn-line" href="/games">All games</Link>
          </div>
        </div>
        {scene ? <img src={scene.src} alt={scene.alt} width={1600} height={760} /> : null}
      </section>

      <section className="section" aria-labelledby="catalog-heading">
        <div className="section-head">
          <div>
            <h2 id="catalog-heading">{list.length > 0 ? "Titles with public covers" : "Where this category opens"}</h2>
            <p>{list.length > 0 ? "These covers are stored with the site. The stake screen opens in the lobby after you sign in." : "This category is part of the lobby. Markets and titles are shown after you sign in, so there is no thumbnail grid here."}</p>
          </div>
        </div>
        {list.length > 0 ? <GameBrowser initialCategory={item.slug} /> : (
          <div className="empty">
            <p>Open the category in the player lobby. This page explains the product. It does not reprint odds, draws, or a title list that is not stored here.</p>
            <Link className="btn btn-primary" href="/download">Continue in the lobby</Link>
          </div>
        )}
      </section>

      <AnchoredSections sections={copy.sections} scenes={scenesFor(item.slug)} />

      <FaqBlock items={copy.faq} title={`${label} FAQ`} />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Related pages</h2>
            <p>The nearest category, the guide, and the account tasks around this product.</p>
          </div>
        </div>
        <div className="topic-grid">
          <article className="panel">
            <h3>Other categories</h3>
            <RelatedLinks links={categories.filter((entry) => entry.slug !== item.slug).map((entry) => ({ href: categoryPath(entry.slug), label: entry.slug === "lottery" ? "4D Lottery" : entry.title }))} />
          </article>
          <article className="panel">
            <h3>Guides and account</h3>
            <RelatedLinks links={[...copy.links, { href: "/download", label: "Download" }, { href: "/faq", label: "FAQ" }, { href: "/contact", label: "Contact" }]} />
          </article>
        </div>
      </section>

      <section className="section hub-cta">
        <h2>Open {label} in the lobby</h2>
        <p>Use this page to understand the category. Sign in when you are ready to play. Rules and stake limits stay on the game screen.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/register">Register</Link>
          <Link className="btn btn-line" href="/promotions">Promotions</Link>
          <Link className="btn btn-ghost" href="/guides">Guides</Link>
        </div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: label,
        description: item.description,
        url: absoluteUrl(path),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: copy.faq.map((entry) => ({
          "@type": "Question",
          name: entry.q,
          acceptedAnswer: { "@type": "Answer", text: entry.a },
        })),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Games", item: absoluteUrl("/games") },
          { "@type": "ListItem", position: 3, name: label, item: absoluteUrl(path) },
        ],
      }} />
    </div>
  );
}
