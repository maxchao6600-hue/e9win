import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(input.path);
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    robots: input.index === false ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      type: "website",
      images: [{ url: absoluteUrl("/images/brand/logo.png"), alt: "E9WIN" }],
    },
    twitter: {
      card: "summary",
      title: input.title,
      description: input.description,
    },
  };
}
