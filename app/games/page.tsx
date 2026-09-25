import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopySections, FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { GameBrowser } from "@/components/games/GameBrowser";
import { categoryCopy } from "@/lib/categoryCopy";
import { categories, games } from "@/lib/games";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Games | Slots, Live Casino, Sports and More",
  description: "Browse E9WIN slots, live casino, sports, lottery, fishing, and esports. Search the catalog and open a title in the lobby.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Games" }]} />
      <h1>Games</h1>
      <p>Search the covers that are stored on this site, or open a category that only exists inside the lobby. Launching a title still happens after you sign in.</p>
      <GameBrowser />
      <div className="section prose">
        <section className="topic">
          <h2>Six ways in</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/games/${category.slug}`}>{category.title}</Link> — {categoryCopy[category.slug].lead}
              </li>
            ))}
          </ul>
        </section>
        <CopySections sections={[
          {
            title: "How to find a title",
            paragraphs: [
              "Use the search box when you know the name. Use a category filter when you only know the product type. Covers are square and the title is printed under the art so you are not relying on the illustration alone.",
            ],
          },
          {
            title: "How to start playing",
            paragraphs: [
              "Create an account, sign in through the lobby, and open the game from there. This website can show the cover and the studio. It cannot accept a stake.",
            ],
            list: [
              "Register with details that match your payout account.",
              "Deposit only after you have read the cashier instruction for that attempt.",
              "Open the paytable or the table limits before the first stake.",
            ],
          },
          {
            title: "Mobile",
            paragraphs: [
              "The same catalog is available in the phone browser. iPhone uses Add to Home Screen. Android uses the portal download. Neither path is an App Store or Google Play listing.",
            ],
          },
        ]} />
        <FaqBlock items={[
          { q: "Why do some categories have no thumbnails?", a: "Fishing, esports, and 4D do not have covers in the public catalog. Sports has live horse racing only." },
          { q: "Are the studios on the cards the full lobby?", a: "They are the studios on the published covers. The lobby can include more after you sign in." },
        ]} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/guides/games-guide", label: "Games guide" },
            { href: "/promotions", label: "Promotions" },
            { href: "/download", label: "Download" },
            { href: "/deposit", label: "Deposit" },
          ]} />
        </section>
      </div>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Why do some categories have no thumbnails?", acceptedAnswer: { "@type": "Answer", text: "Fishing, esports, and 4D do not have covers in the public catalog. Sports has live horse racing only." } },
          { "@type": "Question", name: "Are the studios on the cards the full lobby?", acceptedAnswer: { "@type": "Answer", text: "They are the studios on the published covers. The lobby can include more after you sign in." } },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: games.slice(0, 12).map((game, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: game.name,
          url: absoluteUrl(`/games/${game.category}`),
        })),
      }} />
    </div>
  );
}
