import type { Metadata } from "next";
import { GuideArticle, guideMetadata } from "@/components/views/GuideArticle";
import { guides } from "@/lib/content";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return guideMetadata(slug, "en");
}

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  return <GuideArticle params={params} locale="en" />;
}
