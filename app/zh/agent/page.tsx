import type { Metadata } from "next";
import { AgentView } from "@/components/views/AgentView";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { pageScenes } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

function agentMetadata(locale: Locale): Metadata {
  const description = tx(
    locale,
    "Read how the E9WIN agent path works: downline players, the profile Share link, and how to ask support for setup. Commission rates are not published on this page.",
    "了解 E9WIN 代理路径如何运作：下线玩家、个人资料里的分享链接，以及如何向客服申请开通。佣金比例不在本页公布。",
  );
  const base = pageMeta({
    title: tx(locale, "E9WIN Agent Program | Partnership Information and Application Guide", "E9WIN 代理计划 | 合作说明与申请"),
    description,
    path: localizePath("/agent", locale),
    locale,
  });
  const alt = tx(locale, pageScenes.agent.alt, "俯瞰游戏楼层的廊台书桌");
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ url: absoluteUrl(pageScenes.agent.src), alt }] },
    twitter: { ...base.twitter, images: [absoluteUrl(pageScenes.agent.src)] },
  };
}

export const metadata: Metadata = agentMetadata("zh");

export default function ZhAgentPage() {
  return <AgentView locale="zh" />;
}
