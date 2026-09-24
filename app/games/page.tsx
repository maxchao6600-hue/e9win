import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GameBrowser } from "@/components/games/GameBrowser";
import { games } from "@/lib/games";
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
      <p>Search the curated catalog. Thumbnails are stored on this site. Launching a title happens in the player lobby.</p>
      <GameBrowser />
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
