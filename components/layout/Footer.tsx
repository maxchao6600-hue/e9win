"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localizePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const locale = localeFromPath(usePathname() || "/");
  const href = (path: string) => localizePath(path, locale);
  const zh = locale === "zh";
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/brand/logo.png" alt="E9WIN" width={132} height={40} />
          <p>{zh ? "面向马来西亚的 E9WIN 游戏平台，涵盖老虎机、真人娱乐场、体育、4D 与手机访问。" : "Malaysia online gaming for slots, live casino, sports, lottery, and mobile play."}</p>
          <p>{zh ? "仅限 18 岁及以上。请使用可承受损失的金额娱乐。" : "18+ only. Play with money you can afford to lose."}</p>
        </div>
        <div>
          <h2>{zh ? "游戏" : "Games"}</h2>
          <Link href={href("/games")}>{zh ? "全部游戏" : "All games"}</Link>
          <Link href={href("/games/slots")}>{zh ? "老虎机" : "Slots"}</Link>
          <Link href={href("/games/live-casino")}>{zh ? "真人娱乐场" : "Live casino"}</Link>
          <Link href={href("/games/sports")}>{zh ? "体育" : "Sports"}</Link>
          <Link href={href("/games/4d")}>{zh ? "4D" : "4D lottery"}</Link>
          <Link href={href("/games/fishing")}>{zh ? "捕鱼" : "Fishing"}</Link>
          <Link href={href("/games/esports")}>{zh ? "电竞" : "Esports"}</Link>
        </div>
        <div>
          <h2>{zh ? "信息" : "Information"}</h2>
          <Link href={href("/promotions")}>{zh ? "优惠" : "Promotions"}</Link>
          <Link href={href("/vip")}>{zh ? "VIP会员" : "VIP"}</Link>
          <Link href={href("/download")}>{zh ? "下载" : "Download"}</Link>
          <Link href={href("/agent")}>{zh ? "代理" : "Agent"}</Link>
          <Link href={href("/guides")}>{zh ? "指南" : "Guides"}</Link>
          <Link href={href("/about")}>{zh ? "关于" : "About"}</Link>
        </div>
        <div>
          <h2>{zh ? "客服" : "Support"}</h2>
          <Link href={href("/faq")}>{zh ? "常见问题" : "FAQ"}</Link>
          <Link href={href("/contact")}>{zh ? "联系客服" : "Contact"}</Link>
          <Link href={href("/payment-methods")}>{zh ? "支付方式" : "Payment methods"}</Link>
          <Link href={href("/deposit")}>{zh ? "存款" : "Deposit"}</Link>
          <Link href={href("/withdrawal")}>{zh ? "提款" : "Withdrawal"}</Link>
          <a href={siteConfig.support.whatsapp} rel="noopener noreferrer">WhatsApp</a>
          <a href={siteConfig.support.facebook} rel="noopener noreferrer">Facebook</a>
        </div>
        <div>
          <h2>{zh ? "条款" : "Legal"}</h2>
          <Link href={href("/responsible-gaming")}>{zh ? "理性娱乐" : "Responsible gaming"}</Link>
          <Link href={href("/privacy")}>{zh ? "隐私" : "Privacy"}</Link>
          <Link href={href("/terms")}>{zh ? "使用条款" : "Terms"}</Link>
        </div>
      </div>
      <div className="container legal">
        <span>© {new Date().getFullYear()} E9WIN</span>
        <span>{zh ? "公开客服渠道为 WhatsApp 与 Facebook。这里没有公布其他联系方式。" : "Public support: WhatsApp and Facebook. No other contact is published here."}</span>
      </div>
    </footer>
  );
}
