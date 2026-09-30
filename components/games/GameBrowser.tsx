"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, categoryPath, games, type GameCategory } from "@/lib/games";

const PAGE = 12;

export function GameBrowser({ initialCategory = "all" }: { initialCategory?: GameCategory | "all" }) {
  const [category, setCategory] = useState<GameCategory | "all">(initialCategory);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return games.filter((game) => {
      const categoryOk = category === "all" || game.category === category;
      const text = `${game.name} ${game.provider}`.toLowerCase();
      return categoryOk && (q.length === 0 || text.includes(q));
    });
  }, [category, query]);

  const shown = filtered.slice(0, visible);
  const selected = categories.find((item) => item.slug === category);
  const selectedHasCovers = category === "all" || games.some((game) => game.category === category);

  return (
    <div>
      <p className="hub-note">Search matches the title and the studio printed on a cover. Category chips limit that same catalog. A title still opens in the lobby after you sign in, and the category pages explain 4D, fishing, and esports when this grid has no artwork.</p>
      <div className="filters">
        <input
          aria-label="Search games"
          placeholder="Search by name or studio"
          value={query}
          onChange={(event) => { setQuery(event.target.value); setVisible(PAGE); }}
        />
        <button type="button" className="chip" aria-pressed={category === "all"} onClick={() => { setCategory("all"); setVisible(PAGE); }}>All</button>
        {categories.map((item) => (
          <button key={item.slug} type="button" className="chip" aria-pressed={category === item.slug} onClick={() => { setCategory(item.slug); setVisible(PAGE); }}>
            {item.title}
          </button>
        ))}
      </div>
      <p className="hub-count" role="status">{selectedHasCovers ? `${shown.length} of ${filtered.length} catalog covers` : "No public covers in this category"}</p>
      {shown.length === 0 ? (
        <div className="empty">
          {selected && !selectedHasCovers ? (
            <>
              <p>{selected.title} is a lobby category. This site does not store a thumbnail for it, so the chip cannot show a cover.</p>
              <Link className="btn btn-line" href={categoryPath(selected.slug)}>Open {selected.title}</Link>
            </>
          ) : (
            <>
              <p>No cover title or studio matches that search.</p>
              <button type="button" className="btn btn-line" onClick={() => { setQuery(""); setCategory("all"); setVisible(PAGE); }}>Show the full catalog</button>
            </>
          )}
        </div>
      ) : (
        <div className="game-grid">
          {shown.map((game) => (
            <article className="game-card" key={game.id}>
              <img src={game.image} alt={`${game.name} by ${game.provider}`} width={320} height={320} />
              <div className="meta">
                <h3>{game.name}</h3>
                <p>{game.provider} · {categories.find((item) => item.slug === game.category)?.title}</p>
                <Link className="btn btn-line" href="/download">Open lobby</Link>
              </div>
            </article>
          ))}
        </div>
      )}
      {visible < filtered.length ? (
        <div className="cta-row" style={{ marginTop: 18 }}>
          <button className="btn btn-ghost" type="button" onClick={() => setVisible((count) => count + PAGE)}>Load more</button>
        </div>
      ) : null}
    </div>
  );
}
