import Link from "next/link";
import type { CopyFaq, CopyLink, CopySection } from "@/lib/categoryCopy";

export function CopySections({ sections }: { sections: CopySection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section className="topic" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.list ? (
            <ul>
              {section.list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}

export function FaqBlock({ items, title = "FAQ" }: { items: CopyFaq[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <div className="faq topic">
      <h2>{title}</h2>
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedLinks({ links }: { links: CopyLink[] }) {
  return (
    <p className="link-row">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>{link.label}</Link>
      ))}
    </p>
  );
}
