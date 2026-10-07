import type { Metadata } from "next";
import { VipView } from "@/components/views/VipView";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { pageScenes } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

function vipMetadata(locale: Locale): Metadata {
  const description = tx(
    locale,
    "Learn how E9WIN describes VIP membership, where to check a notice in your account, and how that label differs from the VIP Baccarat table. Levels and cash figures are not published here.",
    "了解 E9WIN 如何说明 VIP会员、在账户哪里查看通知，以及这个名称和 VIP Baccarat 桌有何不同。等级和现金数字不在这里公布。",
  );
  const base = pageMeta({
    title: tx(locale, "E9WIN VIP | Membership Information", "E9WIN VIP | VIP会员说明"),
    description,
    path: localizePath("/vip", locale),
    locale,
  });
  const alt = tx(locale, pageScenes.vip.alt, "丝绒座椅与金色灯光的私人休息室");
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ url: absoluteUrl(pageScenes.vip.src), alt }] },
    twitter: { ...base.twitter, images: [absoluteUrl(pageScenes.vip.src)] },
  };
}

export const metadata: Metadata = vipMetadata("en");

export default function VipPage() {
  return <VipView locale="en" />;
}
