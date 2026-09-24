import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug, guides } from "@/lib/content";
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
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/guides", label: "Guides" }, { label: guide.title }]} />
      <p className="tag">{guide.category}</p>
      <h1>{guide.title}</h1>
      <p>{guide.excerpt}</p>
      <ol className="steps">{guide.steps.map((step) => <li key={step}>{step}</li>)}</ol>
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
    </div>
  );
}
