import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqGroups } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN FAQ | Account, Games, Payments and Support",
  description: "Answers about E9WIN accounts, games, download, payments, promotions, agents, and support.",
  path: "/faq",
});

export default function FaqPage() {
  const entities = faqGroups.flatMap((group) => group.items);
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "FAQ" }]} />
      <h1>FAQ</h1>
      <p>Short answers drawn from the public E9WIN pages. Where a fact is not published, the answer says so.</p>
      {faqGroups.map((group) => (
        <section className="faq" key={group.id} aria-labelledby={group.id}>
          <h2 id={group.id}>{group.title}</h2>
          {group.items.map((item) => (
            <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
          ))}
        </section>
      ))}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: entities.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
