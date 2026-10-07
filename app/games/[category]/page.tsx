import type { Metadata } from "next";
import { CategoryArticle, categoryMetadata } from "@/components/views/CategoryArticle";
import { categories } from "@/lib/games";

export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ category: category.slug === "lottery" ? "4d" : category.slug })),
    { category: "lottery" },
  ];
}

export function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  return params.then(({ category }) => categoryMetadata(category, "en"));
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  return <CategoryArticle params={params} locale="en" />;
}
