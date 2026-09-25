import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GameBrowser } from "@/components/games/GameBrowser";
import { CopySections, FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { categoryCopy } from "@/lib/categoryCopy";
import { categories, categoryBySlug, gamesByCategory } from "@/lib/games";
import { pageMeta } from "@/lib/seo";
import { categoryScenes } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  return params.then(({ category }) => {
    const item = categoryBySlug(category);
    if (!item) return { title: "Games" };
    const title = `E9WIN ${item.title} | ${item.title} in the lobby`;
    return pageMeta({ title, description: item.description, path: `/games/${item.slug}` });
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = categoryBySlug(category);
  if (!item) notFound();
  const list = gamesByCategory(item.slug);
  const copy = categoryCopy[item.slug];
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/games", label: "Games" }, { label: item.title }]} />
      <h1>{item.title}</h1>
      <p>{copy.lead}</p>
      {categoryScenes[item.slug] ? (
        <figure className="scene-banner">
          <img src={categoryScenes[item.slug].src} alt={categoryScenes[item.slug].alt} width={1280} height={720} />
        </figure>
      ) : null}
      {list.length > 0 ? <GameBrowser initialCategory={item.slug} /> : (
        <div className="empty">
          <p>This category is part of the E9WIN lobby. Individual markets and titles are shown after you sign in, so there is no thumbnail grid here.</p>
          <Link className="btn btn-primary" href="/download">Continue in the lobby</Link>
        </div>
      )}
      <div className="section prose">
        <CopySections sections={copy.sections} />
        <FaqBlock items={copy.faq} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={copy.links} />
        </section>
      </div>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: copy.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Games", item: absoluteUrl("/games") },
          { "@type": "ListItem", position: 3, name: item.title, item: absoluteUrl(`/games/${item.slug}`) },
        ],
      }} />
    </div>
  );
}
