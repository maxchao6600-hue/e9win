import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GameBrowser } from "@/components/games/GameBrowser";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { presentCategory, zhCategoryDescriptions, zhCategoryH1, zhCategoryTitles } from "@/lib/i18n/zhCategories";
import { categories, categoryFromParam, categoryPath, gamesByCategory, type GameCategory } from "@/lib/games";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { categoryScenes, pageScenes, type Scene } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

const categoryTitles: Record<GameCategory, string> = {
  slots: "E9WIN Slots | Online Slots and Game Catalog",
  "live-casino": "E9WIN Live Casino | Baccarat, Roulette and Live Tables",
  sports: "E9WIN Sports | Sportsbook and Sports Betting",
  lottery: "E9WIN 4D Lottery | Magnum, Da Ma Cai, Toto and Singapore",
  fishing: "E9WIN Fishing | Fishing Games in the E9WIN Lobby",
  esports: "E9WIN Esports | Esports Markets in the E9WIN Lobby",
};

const zhNames: Record<GameCategory, string> = {
  slots: "老虎机",
  "live-casino": "真人娱乐场",
  sports: "体育",
  lottery: "4D",
  fishing: "捕鱼",
  esports: "电竞",
};

const zhAlt: Record<string, string> = {
  "/images/brand/scene-slots.webp": "昏暗房间里屏幕上的 Gates of Olympus",
  "/images/brand/scene-live.webp": "Playtech 百家乐画面，荷官手持纸牌",
  "/images/brand/scene-sports.webp": "夜场灯光下的一只旧足球",
  "/images/brand/scene-lottery.webp": "暖光下空着的黄铜摇奖笼",
  "/images/brand/scene-fishing.webp": "金光水柱旁游过的锦鲤",
  "/images/brand/scene-esports.webp": "暖金色灯光下放在键盘上的双手",
  "/images/brand/scene-devices.webp": "深色大理石桌上的手机和笔记本电脑",
  "/images/brand/scene-payments.webp": "深色收银台柜台上的卡和手机",
  "/images/brand/scene-account.webp": "夜窗旁安静的书桌",
};

function localizeScene(scene: Scene, locale: Locale): Scene {
  if (locale === "en") return scene;
  return { ...scene, alt: zhAlt[scene.src] ?? scene.alt };
}

function scenesFor(slug: GameCategory, locale: Locale): Scene[] {
  const scene = categoryScenes[slug];
  const category = categories.find((item) => item.slug === slug);
  const scenes: Scene[] = [
    localizeScene(scene, locale),
    localizeScene(pageScenes.download, locale),
    localizeScene({ src: "/images/brand/scene-payments.webp", alt: "A card and a phone on a dark cashier counter" }, locale),
    localizeScene({ src: "/images/brand/scene-account.webp", alt: "A quiet desk beside a night window" }, locale),
  ];
  if (category?.image) {
    scenes.splice(1, 0, {
      src: category.image,
      alt: tx(locale, `${category.title} artwork from the public E9WIN catalog`, `E9WIN 公开目录中的${zhNames[slug]}画面`),
    });
  }
  return scenes;
}

export function categoryMetadata(param: string, locale: Locale): Metadata {
  const item = categoryFromParam(param);
  if (!item) return { title: "Games" };
  const title = locale === "zh" ? zhCategoryTitles[item.slug] : categoryTitles[item.slug];
  const description = locale === "zh" ? zhCategoryDescriptions[item.slug] : item.description;
  const path = localizePath(categoryPath(item.slug), locale);
  const scene = categoryScenes[item.slug];
  const meta = pageMeta({ title, description, path, locale });
  if (!scene) return meta;
  const image = localizeScene(scene, locale);
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images: [{ url: absoluteUrl(image.src), alt: image.alt }] },
    twitter: { ...meta.twitter, images: [absoluteUrl(image.src)] },
  };
}

export async function CategoryArticle({ params, locale }: { params: Promise<{ category: string }>; locale: Locale }) {
  const { category } = await params;
  const item = categoryFromParam(category);
  if (!item) notFound();
  const list = gamesByCategory(item.slug);
  const copy = presentCategory(item.slug, locale);
  const scene = categoryScenes[item.slug];
  const label = item.slug === "lottery" ? "4D Lottery" : item.title;
  const h1 = locale === "zh" ? zhCategoryH1[item.slug] : `E9WIN ${label}`;
  const crumb = locale === "zh" ? zhNames[item.slug] : label;
  const href = (path: string) => localizePath(path, locale);
  const path = href(categoryPath(item.slug));
  const links = copy.links.map((link) => ({ ...link, href: href(link.href) }));
  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: tx(locale, "Home", "首页") }, { href: href("/games"), label: tx(locale, "Games", "游戏") }, { href: path, label: crumb }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{tx(locale, "Games", "游戏")}</p>
          <h1>{h1}</h1>
          <p>{copy.lead}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={href("/register")}>{tx(locale, "Register to play", "注册后开始")}</Link>
            <Link className="btn btn-line" href={href("/games")}>{tx(locale, "E9WIN Games", "E9WIN 游戏")}</Link>
          </div>
        </div>
        {scene ? <img src={scene.src} alt={localizeScene(scene, locale).alt} width={1600} height={760} /> : null}
      </section>

      <section className="section" aria-labelledby="catalog-heading">
        <div className="section-head">
          <div>
            <h2 id="catalog-heading">{list.length > 0 ? tx(locale, "Titles with public covers", "有公开封面的游戏") : tx(locale, "Where this category opens", "这个分类在哪里打开")}</h2>
            <p>{list.length > 0 ? tx(locale, "These covers are stored with the site. The stake screen opens in the lobby after you sign in.", "这些封面保存在本站。登录后，投注画面在大厅里打开。") : tx(locale, "This category is part of the lobby. Markets and titles are shown after you sign in, so there is no thumbnail grid here.", "这个分类属于大厅。盘口和游戏在登录后显示，所以这里没有缩图格子。")}</p>
          </div>
        </div>
        {list.length > 0 ? <GameBrowser initialCategory={item.slug} locale={locale} /> : (
          <div className="empty">
            <p>{tx(locale, "Open this category in the player lobby. The page explains the product. Current markets, draws, and any title list that lives in the lobby stay on that screen.", "请在玩家大厅打开这个分类。本页说明产品。当前盘口、开奖，以及大厅里的游戏列表都留在那个画面上。")}</p>
            <Link className="btn btn-primary" href={href("/download")}>{tx(locale, "Continue in the lobby", "前往大厅")}</Link>
          </div>
        )}
      </section>

      <AnchoredSections sections={copy.sections} scenes={scenesFor(item.slug, locale)} />

      <FaqBlock items={copy.faq} title={tx(locale, `${label} FAQ`, `${zhNames[item.slug]}常见问题`)} />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{tx(locale, "Related pages", "相关页面")}</h2>
            <p>{tx(locale, "The nearest category, the guide, and the account tasks around this product.", "邻近的分类、指南，以及这个产品周围的账户操作。")}</p>
          </div>
        </div>
        <div className="topic-grid">
          <article className="panel">
            <h3>{tx(locale, "Other categories", "其他分类")}</h3>
            <RelatedLinks links={categories.filter((entry) => entry.slug !== item.slug).map((entry) => ({
              href: href(categoryPath(entry.slug)),
              label: locale === "zh" ? zhNames[entry.slug] : entry.slug === "lottery" ? "4D Lottery" : entry.title,
            }))} />
          </article>
          <article className="panel">
            <h3>{tx(locale, "Guides and account", "指南与账户")}</h3>
            <RelatedLinks links={[
              ...links,
              ...(copy.links.some((link) => link.href === "/download") ? [] : [{ href: href("/download"), label: tx(locale, "E9WIN Download", "E9WIN 下载") }]),
              { href: href("/faq"), label: tx(locale, "E9WIN FAQ", "E9WIN 常见问题") },
              { href: href("/contact"), label: tx(locale, "Contact", "联系客服") },
            ]} />
          </article>
        </div>
      </section>

      <section className="section hub-cta">
        <h2>{tx(locale, `Open ${label} in the lobby`, `在大厅打开${zhNames[item.slug]}`)}</h2>
        <p>{tx(locale, "Use this page to understand the category. Sign in when you are ready to play. Rules and stake limits stay on the game screen.", "用本页了解这个分类。准备好再登录。规则和投注限额留在游戏画面上。")}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href={href("/register")}>{tx(locale, "Register", "注册")}</Link>
          <Link className="btn btn-line" href={href("/promotions")}>{tx(locale, "E9WIN Promotions", "E9WIN 优惠")}</Link>
          <Link className="btn btn-ghost" href={href("/guides")}>{tx(locale, "E9WIN Guides", "E9WIN 指南")}</Link>
        </div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: h1,
        inLanguage: locale === "zh" ? "zh-MY" : "en-MY",
        description: locale === "zh" ? zhCategoryDescriptions[item.slug] : item.description,
        url: absoluteUrl(path),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: copy.faq.map((entry) => ({
          "@type": "Question",
          name: entry.q,
          acceptedAnswer: { "@type": "Answer", text: entry.a },
        })),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: tx(locale, "Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: tx(locale, "Games", "游戏"), item: absoluteUrl(href("/games")) },
          { "@type": "ListItem", position: 3, name: crumb, item: absoluteUrl(path) },
        ],
      }} />
    </div>
  );
}
