import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GameBrowser } from "@/components/games/GameBrowser";
import { categories, categoryBySlug, gamesByCategory, type GameCategory } from "@/lib/games";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  return params.then(({ category }) => {
    const item = categoryBySlug(category);
    if (!item) return { title: "Games" };
    const path = `/games/${item.slug}`;
    const title = `E9WIN ${item.title}`;
    return {
      title,
      description: item.description,
      alternates: { canonical: absoluteUrl(path) },
      openGraph: { title, description: item.description, url: absoluteUrl(path) },
    };
  });
}

const faqs: Partial<Record<GameCategory, { q: string; a: string }[]>> = {
  slots: [
    { q: "Which slot studios are in this list?", a: "The thumbnails here are Pragmatic Play and Lucky365 titles that appear in the public E9WIN catalog." },
    { q: "Do slot rules change?", a: "Each game shows its own paytable and stake range inside the lobby." },
  ],
  "live-casino": [
    { q: "Which live games are listed?", a: "Baccarat, roulette, sic bo, dragon tiger, and game shows from Evolution and Playtech." },
  ],
  lottery: [
    { q: "Which 4D games are named?", a: "Magnum, Da Ma Cai, Toto, and Singapore are named on the E9WIN lottery page." },
  ],
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = categoryBySlug(category);
  if (!item) notFound();
  const list = gamesByCategory(item.slug);
  const questions = faqs[item.slug] ?? [];
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/games", label: "Games" }, { label: item.title }]} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {list.length > 0 ? <GameBrowser initialCategory={item.slug} /> : (
        <div className="empty">
          <p>This category is part of the E9WIN lobby. Individual markets and titles are shown after you sign in, so there is no thumbnail grid here.</p>
          <Link className="btn btn-primary" href="/download">Continue in the lobby</Link>
        </div>
      )}
      <div className="section prose">
        <h2>Related guides</h2>
        <p><Link href="/guides/games-guide">Games guide</Link> · <Link href="/guides/how-to-register">How to register</Link> · <Link href="/deposit">Deposit</Link></p>
        {questions.length > 0 ? (
          <div className="faq">
            <h2>Questions</h2>
            {questions.map((question) => (
              <details key={question.q}><summary>{question.q}</summary><p>{question.a}</p></details>
            ))}
          </div>
        ) : null}
      </div>
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
