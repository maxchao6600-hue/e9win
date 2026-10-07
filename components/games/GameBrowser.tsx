"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, categoryPath, games, type GameCategory } from "@/lib/games";
import { localizePath, tx, type Locale } from "@/lib/i18n";

const PAGE = 12;

const labels: Record<GameCategory, [string, string]> = {
  slots: ["Slots", "老虎机"],
  "live-casino": ["Live Casino", "真人娱乐场"],
  sports: ["Sports", "体育"],
  lottery: ["4D Lottery", "4D"],
  fishing: ["Fishing", "捕鱼"],
  esports: ["Esports", "电竞"],
};

export function GameBrowser({ initialCategory = "all", locale = "en" }: { initialCategory?: GameCategory | "all"; locale?: Locale }) {
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
      <p className="hub-note">{tx(locale, "Search matches the title and the studio printed on a cover. Category chips limit that same catalog. A title still opens in the lobby after you sign in, and the category pages explain 4D, fishing, and esports when this grid has no artwork.", "搜索对照封面上的名称和工作室。分类按钮只筛选这份目录。登录后在大厅打开游戏。没有封面的 4D、捕鱼和电竞，请看对应分类页。")}</p>
      <div className="filters">
        <input
          aria-label={tx(locale, "Search games", "搜索游戏")}
          placeholder={tx(locale, "Search by name or studio", "按名称或工作室搜索")}
          value={query}
          onChange={(event) => { setQuery(event.target.value); setVisible(PAGE); }}
        />
        <button type="button" className="chip" aria-pressed={category === "all"} onClick={() => { setCategory("all"); setVisible(PAGE); }}>{tx(locale, "All", "全部")}</button>
        {categories.map((item) => (
          <button key={item.slug} type="button" className="chip" aria-pressed={category === item.slug} onClick={() => { setCategory(item.slug); setVisible(PAGE); }}>
            {tx(locale, labels[item.slug][0], labels[item.slug][1])}
          </button>
        ))}
      </div>
      <p className="hub-count" role="status">{selectedHasCovers ? tx(locale, `${shown.length} of ${filtered.length} catalog covers`, `显示 ${shown.length} / ${filtered.length} 个目录封面`) : tx(locale, "No public covers in this category", "这个分类没有公开封面")}</p>
      {shown.length === 0 ? (
        <div className="empty">
          {selected && !selectedHasCovers ? (
            <>
              <p>{tx(locale, `${selected.title} is a lobby category. This site does not store a thumbnail for it, so the chip cannot show a cover.`, `${tx(locale, labels[selected.slug][0], labels[selected.slug][1])} 是大厅里的分类。公开目录没有它的缩图，所以这里不显示封面。`)}</p>
              <Link className="btn btn-line" href={localizePath(categoryPath(selected.slug), locale)}>{tx(locale, `Open ${selected.title}`, `打开${tx(locale, labels[selected.slug][0], labels[selected.slug][1])}`)}</Link>
            </>
          ) : (
            <>
              <p>{tx(locale, "No cover title or studio matches that search.", "没有封面名称或工作室符合这次搜索。")}</p>
              <button type="button" className="btn btn-line" onClick={() => { setQuery(""); setCategory("all"); setVisible(PAGE); }}>{tx(locale, "Show the full catalog", "显示全部目录")}</button>
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
                <p>{game.provider} · {tx(locale, categories.find((item) => item.slug === game.category)?.title ?? "", categories.find((item) => item.slug === game.category) ? labels[game.category][1] : "")}</p>
                <Link className="btn btn-line" href={localizePath("/download", locale)}>{tx(locale, "Open lobby", "打开大厅")}</Link>
              </div>
            </article>
          ))}
        </div>
      )}
      {visible < filtered.length ? (
        <div className="cta-row" style={{ marginTop: 18 }}>
          <button className="btn btn-ghost" type="button" onClick={() => setVisible((count) => count + PAGE)}>{tx(locale, "Load more", "加载更多")}</button>
        </div>
      ) : null}
    </div>
  );
}
