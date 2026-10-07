import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug } from "@/lib/content";
import { presentGuide } from "@/lib/i18n/zhGuides";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { guideScenes, pageScenes } from "@/lib/scenes";
import { absoluteUrl, siteConfig } from "@/lib/site";

const enDescription = "Open E9WIN on Android through the player portal, on iPhone with a Safari home-screen shortcut, or in a phone or desktop browser. A store listing is not part of this path.";
const zhDescription = "可通过 Android 玩家门户、iPhone Safari 主屏幕快捷方式，或手机与桌面浏览器打开 E9WIN。这条路径不包括应用商店上架。";

const zhAlt: Record<string, string> = {
  "A phone and a laptop on a dark marble desk": "深色大理石桌上的手机和笔记本电脑",
  "A quiet desk beside a night window": "夜窗旁安静的书桌",
  "Gates of Olympus on a display in a dark private room": "昏暗私人房间屏幕上的 Gates of Olympus",
  "A card and a phone on a dark cashier counter": "深色收银台柜台上的卡片和手机",
  "A dark entrance lit with gold": "金色灯光下的深色入口",
  "A dark entrance lit with gold, used as the welcome campaign still": "金色灯光下的深色入口，用作欢迎活动画面",
};

function sceneAlt(locale: Locale, alt: string) {
  return tx(locale, alt, zhAlt[alt] ?? alt);
}

const guideSlugs = [
  "how-to-download",
  "mobile-guide",
  "how-to-login",
  "security-guide",
  "deposit-guide",
  "withdrawal-guide",
  "account-guide",
] as const;

function howTo(name: string, steps: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
  };
}

export function downloadMetadata(locale: Locale): Metadata {
  const description = tx(locale, enDescription, zhDescription);
  const path = localizePath("/download", locale);
  const title = tx(locale, "E9WIN Download | Android, iPhone and Mobile Web", "E9WIN 下载 | 手机访问与浏览器大厅");
  const baseMeta = pageMeta({ title, description, path, locale });
  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      images: [{ url: absoluteUrl(pageScenes.download.src), alt: sceneAlt(locale, pageScenes.download.alt) }],
    },
    twitter: {
      ...baseMeta.twitter,
      images: [absoluteUrl(pageScenes.download.src)],
    },
  };
}

export function DownloadView({ locale }: { locale: Locale }) {
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const href = (path: string) => localizePath(path, locale);
  const description = t(enDescription, zhDescription);
  const pagePath = href("/download");

  const androidSteps = [
    t("Open this download page.", "打开这个下载页。"),
    t("Use the player-portal link on the page. It goes to the portal address configured for this site.", "使用本页上的玩家门户链接。它会前往为本站配置的门户地址。"),
    t("Follow the access instructions on that destination.", "按该处的访问说明操作。"),
    t("If a file is offered, install it only when it came from that portal. If the phone shows a security warning, stop until you have confirmed the file came from the link on this page.", "如果提供了文件，只在它来自该门户时安装。如果手机显示安全警告，先停下来，确认文件来自本页的链接。"),
    t("Open the lobby.", "打开大厅。"),
    t("Sign in with the username from registration.", "用注册时的用户名登录。"),
    t("Confirm the lobby loads. If the link does not open, contact support instead of using a file from another site.", "确认大厅已加载。如果链接打不开，联系客服，不要使用其他网站的文件。"),
  ];

  const iphoneSteps = [
    t("Open Safari on the iPhone or iPad.", "在 iPhone 或 iPad 上打开 Safari。"),
    t("Go to the E9WIN website.", "前往 E9WIN 网站。"),
    t("Tap Share.", "点分享。"),
    t("Tap Add to Home Screen.", "点加入主屏幕。"),
    t("Confirm the shortcut.", "确认快捷方式。"),
    t("Open the new icon and sign in with your username.", "打开新图标，并用你的用户名登录。"),
  ];

  const faqs = [
    { q: t("How do I access E9WIN on Android?", "如何在 Android 上访问 E9WIN？"), a: t("Open this page and use the player-portal link. Follow the instructions on that destination. Install a file only if that portal provided it, then sign in at the lobby.", "打开本页并使用玩家门户链接。按该处的说明操作。只安装该门户提供的文件，然后在大厅登录。") },
    { q: t("Does E9WIN have a Google Play app?", "E9WIN 有 Google Play 应用吗？"), a: t("A Google Play listing is not part of the documented path. Android access on this site is the player-portal link.", "已说明的路径里没有 Google Play 上架。本站的 Android 访问是玩家门户链接。") },
    { q: t("How do I access E9WIN on iPhone?", "如何在 iPhone 上访问 E9WIN？"), a: t("Open the site in Safari. You can play in that tab, or use Share and Add to Home Screen. An App Store listing is not part of this path.", "用 Safari 打开网站。可以在该分页里玩，或使用分享并加入主屏幕。App Store 上架不属于这条路径。") },
    { q: t("Can I add E9WIN to my iPhone home screen?", "可以把 E9WIN 加到 iPhone 主屏幕吗？"), a: t("Yes. In Safari, tap Share, then Add to Home Screen, and confirm. The icon opens the web lobby. The same Share steps are documented for iPad.", "可以。在 Safari 里点分享，再点加入主屏幕，然后确认。图标打开的是网页大厅。iPad 也是同样的分享步骤。") },
    { q: t("Can I use E9WIN without installing an app?", "可以不安装应用就使用 E9WIN 吗？"), a: t("Yes. The phone browser and a desktop browser open the lobby with no install. The iPhone home-screen icon is optional.", "可以。手机浏览器和桌面浏览器都能打开大厅，不必安装。iPhone 主屏幕图标是可选的。") },
    { q: t("Can I play E9WIN through a mobile browser?", "可以通过手机浏览器玩 E9WIN 吗？"), a: t("Yes. Mobile web is a documented path. Sign in after the lobby opens. Game rules and the cashier are inside that lobby.", "可以。手机网页是已说明的路径。大厅打开后登录。游戏规则和收银台都在该大厅里。") },
    { q: t("Can I use E9WIN on desktop?", "可以在桌面使用 E9WIN 吗？"), a: t("Yes. Windows, Mac, and Linux can use a current browser. There is no separate desktop program.", "可以。Windows、Mac 和 Linux 可以使用较新的浏览器。没有单独的桌面程序。") },
    { q: t("Which browser should I use?", "应该使用哪个浏览器？"), a: t("A current Chrome or Safari build is the practical pair named on this site. Keep a stable connection. A device compatibility list is not published.", "本站点名的实用组合是较新的 Chrome 或 Safari。保持网络稳定。没有公布设备兼容清单。") },
    { q: t("What should I do if the download link does not open?", "下载链接打不开时怎么办？"), a: t("Check the connection, reload the page, and try the other of those two browsers. If the player-portal link still fails, contact support. Do not switch to a download site that this page does not link.", "检查网络，重新加载页面，并换用 Chrome 或 Safari 中的另一个。如果玩家门户链接仍然失败，联系客服。不要改去本页没有链接的下载站。") },
    { q: t("What should I do if the Android installation does not start?", "Android 安装没有开始时怎么办？"), a: t("Confirm you used the player-portal link on this page. Read any security warning and continue only if you recognise that source. This page does not ask you to turn security off for every app.", "确认你使用的是本页的玩家门户链接。阅读安全警告，只在你认出该来源时继续。本页不要求你为所有应用关闭安全设置。") },
    { q: t("What should I do if the website does not load?", "网站加载不了时怎么办？"), a: t("Reload on a current browser and a stable connection. If other websites also fail, the connection is the first place to look. If only this site fails, try the other named browser and then contact support.", "在较新的浏览器和稳定网络上重新加载。如果其他网站也打不开，先检查网络。如果只有本站失败，换用另一个已点名的浏览器，然后联系客服。") },
    { q: t("Can I access games from mobile?", "可以在手机上访问游戏吗？"), a: t("The public categories are the same ones linked from this site: slots, live casino, sports, 4D, fishing, and esports. A title still has to open in the lobby. This page does not claim every title runs on every phone.", "公开分类与本站链接的相同：老虎机、真人娱乐场、体育、4D、捕鱼和电竞。具体游戏仍要在大厅里打开。本页不声称每一款都能在每一部手机上运行。") },
    { q: t("Can I access promotions from mobile?", "可以在手机上查看优惠吗？"), a: t("Yes. The promotions page and the account card are the same information in the phone browser. This page does not add a mobile-only campaign.", "可以。优惠页和账户卡片在手机浏览器里是同一份信息。本页不另加仅限手机的活动。") },
    { q: t("Can I access payments from mobile?", "可以在手机上进行支付吗？"), a: t("The cashier is inside the lobby on the phone and on desktop. Public method types include bank transfer, e-wallet, telco PIN, and USDT. Limits and timing stay on the cashier screen.", "收银台在手机和桌面的大厅里。公开的方式类型包括银行转账、电子钱包、电信 PIN 和 USDT。限额和时间会显示在收银台画面上。") },
  ];

  const methods = [
    {
      key: "android",
      title: t("Android", "Android"),
      tag: t("Player portal", "玩家门户"),
      text: t("The Android action opens the player portal linked on this page. Follow the instructions there. Install a file only if that portal is the source.", "Android 操作会打开本页链接的玩家门户。按那里的说明操作。只在该门户是来源时安装文件。"),
      href: siteConfig.playerPortal,
      label: t("Open the player portal", "打开玩家门户"),
      external: true,
    },
    {
      key: "iphone",
      title: t("iPhone and iPad", "iPhone 和 iPad"),
      tag: t("Safari shortcut", "Safari 快捷方式"),
      text: t("Safari can add a home-screen icon. The icon opens the web lobby. You can also stay in the Safari tab and skip the icon.", "Safari 可以加入主屏幕图标。图标打开网页大厅。你也可以留在 Safari 分页，不放图标。"),
      href: "#iphone",
      label: t("Show the iPhone steps", "查看 iPhone 步骤"),
      external: false,
    },
    {
      key: "web",
      title: t("Mobile web", "手机网页"),
      tag: t("No install", "不必安装"),
      text: t("A current phone browser opens the same lobby. Sign in after it loads. No separate install is required for this path.", "较新的手机浏览器会打开同一个大厅。加载后登录。这条路径不需要单独安装。"),
      href: "#web",
      label: t("Read mobile web", "阅读手机网页"),
      external: false,
    },
    {
      key: "desktop",
      title: t("Desktop browser", "桌面浏览器"),
      tag: t("No desktop program", "没有桌面程序"),
      text: t("Windows, Mac, and Linux use the browser lobby. There is no Windows or Mac application to install.", "Windows、Mac 和 Linux 使用浏览器大厅。没有要安装的 Windows 或 Mac 应用程序。"),
      href: "#desktop",
      label: t("Read desktop access", "阅读桌面访问"),
      external: false,
    },
  ];

  const androidName = t("How to access E9WIN on Android", "如何在 Android 上访问 E9WIN");
  const iphoneName = t("How to add E9WIN to your iPhone home screen", "如何把 E9WIN 加入 iPhone 主屏幕");

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Download", "下载") }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">{t("Download hub", "下载")}</p>
          <h1>{t("E9WIN Download & Mobile Access", "E9WIN 下载与手机访问")}</h1>
          <p>{t("Use the access method that matches the device in front of you. Android goes through the player portal on this page. iPhone uses Safari. The phone and desktop browsers open the lobby with no install.", "按你眼前的设备选择访问方式。Android 走本页的玩家门户。iPhone 使用 Safari。手机和桌面浏览器打开大厅，不必安装。")}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#access">{t("Access E9WIN", "访问 E9WIN")}</Link>
            <Link className="btn btn-line" href={href("/guides/mobile-guide")}>{t("E9WIN mobile guide", "E9WIN 手机指南")}</Link>
          </div>
        </div>
        <img src={pageScenes.download.src} alt={sceneAlt(locale, pageScenes.download.alt)} width={1400} height={760} />
      </section>

      <section className="section prose">
        <h2>{t("Access E9WIN on mobile and desktop", "在手机和桌面上访问 E9WIN")}</h2>
        <p>{t("The lobby is a web destination. A phone and a computer can both open it, and the method changes with the device. Installation is required only when you choose the Android portal path and that destination offers a file.", "大厅是网页目的地。手机和电脑都可以打开，方式随设备而变。只有当你选择 Android 门户路径、且该处提供文件时，才需要安装。")}</p>
        <p>{t("Stay on the links this website publishes. The Android button below is the player portal configured for the site. The iPhone steps stay inside Safari. A file from a search result, a chat, or another domain is a different source.", "请留在本网站公布的链接上。下方的 Android 按钮是为本站配置的玩家门户。iPhone 步骤留在 Safari 里。来自搜索结果、聊天或其他域名的文件是另一个来源。")}</p>
        <p>{t("After the lobby opens, sign in with the username you registered. This marketing site does not keep that play session. Password recovery stays in the lobby.", "大厅打开后，用你注册的用户名登录。这个说明网站不保存该次游戏登录。找回密码留在大厅里。")}</p>
      </section>

      <section className="section" id="access">
        <div className="section-head">
          <div>
            <p className="tag">{t("Access methods", "访问方式")}</p>
            <h2>{t("Ways to access E9WIN", "访问 E9WIN 的方式")}</h2>
            <p>{t("Four documented paths. Pick the one for the device you are holding. None of them is a store listing.", "四条已说明的路径。按你手上的设备选择。它们都不是应用商店上架。")}</p>
          </div>
        </div>
        <div className="access-grid">
          {methods.map((item) => (
            <article className="panel" key={item.key}>
              <p className="tag">{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.external ? (
                <a className="btn btn-primary" href={item.href}>{item.label}</a>
              ) : (
                <Link className="btn btn-line" href={item.href}>{item.label}</Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <VisualSplit src="/images/brand/scene-devices.webp" alt={sceneAlt(locale, "A phone and a laptop on a dark marble desk")} id="android">
        <h2>{t("E9WIN on Android", "Android 上的 E9WIN")}</h2>
        <p>{t("Android access on this site is the player-portal link. The button opens that portal. What you do next is whatever that destination shows: an access screen, a file, or both. This page does not publish a package name, a version number, a file size, or a minimum Android version.", "本站的 Android 访问是玩家门户链接。按钮会打开该门户。接下来做什么，以该处显示的为准：访问画面、文件，或两者都有。本页不公布包名、版本号、文件大小或最低 Android 版本。")}</p>
        <p>{t("Treat the portal as the source. If you install a file, it should be the file that portal gave you on this visit. An APK from a search result or a private message is not that link. A Google Play listing is not part of this path.", "把门户当作来源。如果要安装文件，它应当是该门户在这次访问中给你的文件。搜索结果或私信里的 APK 不是这个链接。Google Play 上架不属于这条路径。")}</p>
        <h3>{t("How to access E9WIN on Android", "如何在 Android 上访问 E9WIN")}</h3>
        <ol className="steps">
          {androidSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p><a href={siteConfig.playerPortal}>{t("Open the player portal", "打开玩家门户")}</a>{t(". If it fails, use ", "。如果打不开，使用")}<Link href={href("/contact")}>{t("contact", "联系客服")}</Link>{t(" or ", "或 ")}<a href={siteConfig.support.whatsapp}>WhatsApp</a>.</p>
      </VisualSplit>

      <section className="section prose" id="iphone">
        <h2>{t("E9WIN on iPhone", "iPhone 上的 E9WIN")}</h2>
        <p>{t("iPhone and iPad use Safari. Add to Home Screen puts an icon on the home screen. That icon opens the web lobby. It does not install a separate app binary, and an App Store listing is not part of this path.", "iPhone 和 iPad 使用 Safari。加入主屏幕会在主屏幕放一个图标。该图标打开网页大厅。它不安装单独的应用文件，App Store 上架也不属于这条路径。")}</p>
        <h3>{t("How to add E9WIN to your iPhone home screen", "如何把 E9WIN 加入 iPhone 主屏幕")}</h3>
        <ol className="steps">
          {iphoneSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p>{t("You can skip the icon and keep using the Safari tab. Other browsers on iPhone may not offer Add to Home Screen the same way, so start in Safari when you want the shortcut.", "你可以不放图标，继续使用 Safari 分页。iPhone 上的其他浏览器可能不会用同样的方式提供加入主屏幕，所以要快捷方式时请从 Safari 开始。")}</p>
      </section>

      <section className="section prose" id="web">
        <h2>{t("Play E9WIN through mobile web", "通过手机网页玩 E9WIN")}</h2>
        <p>{t("Mobile web means the lobby in the phone browser, with no install step. Open the site, wait for the lobby, and sign in. The web lobby is described as updating when you load it, so there is no separate patch to apply on the phone.", "手机网页是指在手机浏览器里打开大厅，没有安装步骤。打开网站，等待大厅，然后登录。网页大厅在你加载时更新，所以手机上没有单独的补丁要安装。")}</p>
        <p>{t("From there you can open ", "之后可以打开")}<Link href={href("/games")}>{t("games", "游戏")}</Link>{t(", read ", "，阅读")}<Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>{t(", and use ", "，并在还需要账户时使用")}<Link href={href("/login")}>{t("login", "登录")}</Link>{t(" or ", "或")}<Link href={href("/register")}>{t("register", "注册")}</Link>{t(" if you still need an account. The cashier and the game rules sit inside the lobby, not on this marketing page.", "。收银台和游戏规则在大厅里，不在这个说明页上。")}</p>
      </section>

      <VisualSplit src="/images/brand/scene-account.webp" alt={sceneAlt(locale, "A quiet desk beside a night window")} reverse id="desktop">
        <h2>{t("Access E9WIN on desktop", "在桌面访问 E9WIN")}</h2>
        <p>{t("Windows, Mac, and Linux can open the lobby in a current browser. Browser access does not require a separate desktop program. There is no Windows application and no Mac application in the documented path.", "Windows、Mac 和 Linux 可以用较新的浏览器打开大厅。浏览器访问不需要单独的桌面程序。已说明的路径里没有 Windows 应用程序，也没有 Mac 应用程序。")}</p>
        <p>{t("Use the same username you use on the phone. A desktop session and a phone session are the same account when the username matches.", "使用和手机上相同的用户名。用户名一致时，桌面登录和手机登录是同一个账户。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Which E9WIN access method fits your device?", "哪种 E9WIN 访问方式适合你的设备？")}</h2>
        <p>{t("Match the device. This table does not rank the methods.", "按设备对应。这个表不为这些方式排名。")}</p>
        <div className="hub-table-wrap">
          <table className="hub-table">
            <caption>{t("Access methods documented on this page.", "本页说明的访问方式。")}</caption>
            <thead>
              <tr>
                <th scope="col">{t("Method", "方式")}</th>
                <th scope="col">{t("Installation", "安装")}</th>
                <th scope="col">{t("What you do next", "接下来做什么")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{t("Android", "Android")}</th>
                <td>{t("The player-portal link on this page. A file is installed only if that portal provides one.", "本页的玩家门户链接。只有该门户提供文件时才安装。")}</td>
                <td>{t("Open the portal, then the lobby, then sign in.", "打开门户，然后打开大厅，再登录。")}</td>
              </tr>
              <tr>
                <th scope="row">{t("iPhone and iPad", "iPhone 和 iPad")}</th>
                <td>{t("No app. A Safari home-screen shortcut is optional.", "没有应用。Safari 主屏幕快捷方式是可选的。")}</td>
                <td>{t("Play in Safari, or add the icon and open it.", "在 Safari 里玩，或加入图标后再打开。")}</td>
              </tr>
              <tr>
                <th scope="row">{t("Mobile web", "手机网页")}</th>
                <td>{t("None.", "无。")}</td>
                <td>{t("Open the site in the phone browser and sign in.", "在手机浏览器中打开网站并登录。")}</td>
              </tr>
              <tr>
                <th scope="row">{t("Desktop web", "桌面网页")}</th>
                <td>{t("None. No desktop program.", "无。没有桌面程序。")}</td>
                <td>{t("Open the site in a browser on Windows, Mac, or Linux.", "在 Windows、Mac 或 Linux 的浏览器中打开网站。")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Browser and device guidance", "浏览器与设备说明")}</h2>
        <p>{t("A current Chrome or Safari build is the pair this site names. Keep the browser updated and use a stable connection. The site is served over HTTPS. A formal device list, a minimum OS version, and a supported-model chart are not published.", "本站点名的是较新的 Chrome 或 Safari。保持浏览器更新，并使用稳定网络。网站通过 HTTPS 提供。正式的设备清单、最低系统版本和支持机型表没有公布。")}</p>
        <ul>
          <li>{t("Reload the page if the lobby looks stale. The web lobby updates when you load it.", "如果大厅看起来是旧的，重新加载页面。网页大厅在你加载时更新。")}</li>
          <li>{t("If one browser fails, try the other of Chrome or Safari.", "如果一个浏览器失败，换用 Chrome 或 Safari 中的另一个。")}</li>
          <li>{t("If the page fails on every site you open, check the connection before you change anything on this site.", "如果每个网站都打不开，先检查网络，再改动本站的任何设置。")}</li>
          <li>{t("Clear the browser cache only when a reload still shows an old page. That is a browser step, not an account reset.", "只有重新加载仍显示旧页面时，才清除浏览器缓存。这是浏览器步骤，不是账户重置。")}</li>
        </ul>
      </section>

      <section className="section prose">
        <h2>{t("Safe download and access practices", "安全下载与访问习惯")}</h2>
        <p>{t("Use the links on this website. Before you install anything, look at the domain the button opened. The Android button is the player portal. A warning from the phone is a reason to check that source, not a reason to turn protection off for every install.", "使用本网站上的链接。安装任何内容之前，先看按钮打开的域名。Android 按钮是玩家门户。手机的警告是用来核对来源的，不是让你为每次安装关闭保护。")}</p>
        <ul>
          <li>{t("Do not install an APK, or any other file, from a search result, a chat, or a mirror.", "不要安装来自搜索结果、聊天或镜像站的 APK 或其他文件。")}</li>
          <li>{t("Do not treat a store badge on another website as a listing this site has published.", "不要把其他网站上的商店标志当成本站已公布的上架。")}</li>
          <li>{t("Keep the phone system and the browser updated.", "保持手机系统和浏览器更新。")}</li>
          <li>{t("Send support a username. Do not send the password. Public channels are ", "向客服发送用户名。不要发送密码。公开渠道是 ")}<a href={siteConfig.support.whatsapp}>WhatsApp</a>{t(" and ", " 和 ")}<a href={siteConfig.support.facebook}>Facebook</a>{t(", plus in-lobby chat after you sign in.", "，以及登录后的大厅内聊天。")}</li>
        </ul>
        <p>{t("This page does not certify the file, the phone, or the network. The ", "本页不认证文件、手机或网络。")}<Link href={href("/guides/security-guide")}>{t("security guide", "安全指南")}</Link>{t(" covers the account side of that habit.", "说明的是账户这一侧的习惯。")}</p>
      </section>

      <section className="section prose">
        <h2>{t("What to do after opening E9WIN", "打开 E9WIN 之后做什么")}</h2>
        <ol className="steps">
          <li>{t("Wait until the lobby has loaded.", "等到大厅加载完成。")}</li>
          <li>{t("Choose ", "选择")}<Link href={href("/login")}>{t("login", "登录")}</Link>{t(" and enter the username and password you created.", "，输入你建立的用户名和密码。")}</li>
          <li>{t("Confirm you are in the account you meant to open. The same username should work from the phone shortcut, the Android portal, and the desktop browser.", "确认你进入的是想打开的账户。同一个用户名应能用于手机快捷方式、Android 门户和桌面浏览器。")}</li>
          <li>{t("Then open ", "然后按你来这里要做的事，打开")}<Link href={href("/games")}>{t("games", "游戏")}</Link>{t(", ", "、")}<Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>{t(", ", "、")}<Link href={href("/vip")}>VIP</Link>{t(", or the cashier, depending on what you came to do.", "或收银台。")}</li>
        </ol>
        <p>{t("New accounts start at ", "新账户从")}<Link href={href("/register")}>{t("register", "注册")}</Link>{t(". If the password is rejected, use recovery inside the lobby. This page cannot see the password and will not ask you to type it here.", "开始。如果密码被拒绝，使用大厅里的找回步骤。本页看不到密码，也不会要求你在这里输入。")}</p>
      </section>

      <VisualSplit src="/images/brand/scene-slots.webp" alt={sceneAlt(locale, "Gates of Olympus on a display in a dark private room")}>
        <h2>{t("Play E9WIN games on mobile", "在手机上玩 E9WIN 游戏")}</h2>
        <p>{t("Once the lobby is open, the game categories are the ones published on the games hub. Covers for slots and live tables can be reviewed on the phone. Sports, 4D, fishing, and esports open in the lobby as well. Stake rules stay inside the game.", "大厅打开后，游戏分类就是游戏页公布的那些。老虎机和真人桌的封面可以在手机上查看。体育、4D、捕鱼和电竞也在大厅里打开。投注规则留在游戏里。")}</p>
        <p>{t("Nothing here says a specific title is certified for a specific handset. If a game does not load, try a reload and the other named browser, then ask support with the username and the game name.", "这里没有说某一款已针对某一部手机认证。如果游戏加载不了，先重新加载并换用另一个已点名的浏览器，再用用户名和游戏名称询问客服。")}</p>
        <p>
          <Link href={href("/games")}>{t("Games hub", "游戏")}</Link>{t(", ", "、")}<Link href={href("/games/slots")}>{t("slots", "老虎机")}</Link>{t(", ", "、")}<Link href={href("/games/live-casino")}>{t("live casino", "真人娱乐场")}</Link>{t(", ", "、")}<Link href={href("/games/sports")}>{t("sports", "体育")}</Link>{t(", ", "、")}<Link href={href("/games/4d")}>4D</Link>{t(", ", "、")}<Link href={href("/games/fishing")}>{t("fishing", "捕鱼")}</Link>{t(", and ", "和")}<Link href={href("/games/esports")}>{t("esports", "电竞")}</Link>{t(".", "。")}
        </p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Access E9WIN promotions on mobile", "在手机上查看 E9WIN 优惠")}</h2>
        <p>{t("Promotion names on the ", "优惠名称在")}<Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>{t(" page are the same list in a phone browser. The account card, after you sign in, is where opt-in and any conditions are read. A membership notice, when the account has one, is in the lobby rewards area and is explained on the ", "页上，手机浏览器里是同一份列表。登录后，选择参加和任何条件都在账户卡片上阅读。账户若有会员通知，会在大厅奖励区，并在 ")}<Link href={href("/vip")}>VIP</Link>{t(" page.", " 页说明。")}</p>
        <p>{t("This download page does not add a mobile-only campaign, a mobile bonus, or a code.", "这个下载页不另加仅限手机的活动、手机奖金或代码。")}</p>
      </section>

      <VisualSplit src="/images/brand/scene-payments.webp" alt={sceneAlt(locale, "A card and a phone on a dark cashier counter")} reverse>
        <h2>{t("Payments and account access on mobile", "手机上的支付与账户访问")}</h2>
        <p>{t("Deposit and withdrawal start in the lobby cashier, on the phone or on a desktop browser. The public pages describe method types that include bank transfer, e-wallet, telco PIN, and USDT. The screen you are paying on is the one that shows the account name, the reference, and any limit for that attempt.", "存款和提款从大厅收银台开始，手机或桌面浏览器都是如此。公开页面说明的方式类型包括银行转账、电子钱包、电信 PIN 和 USDT。你正在付款的画面，才会显示该次的户名、参考号和任何限额。")}</p>
        <p>{t("Read ", "先阅读")}<Link href={href("/payment-methods")}>{t("payment methods", "支付方式")}</Link>{t(", ", "、")}<Link href={href("/deposit")}>{t("deposit", "存款")}</Link>{t(", and ", "和")}<Link href={href("/withdrawal")}>{t("withdrawal", "提款")}</Link>{t(" before you move money. Those pages do not change because you opened them on a phone.", "，再移动资金。这些页面不会因为你在手机上打开而改变。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Use E9WIN without installing an app", "不安装应用使用 E9WIN")}</h2>
        <p>{t("The browser path is enough for a phone and for a computer. Open the site, sign in, and use the lobby. Windows, Mac, and Linux do not have a desktop program in this setup. On iPhone, the home-screen icon is optional; the Safari tab is the lobby.", "浏览器路径对手机和电脑都够用。打开网站，登录，使用大厅。在这套说明里，Windows、Mac 和 Linux 没有桌面程序。在 iPhone 上，主屏幕图标是可选的；Safari 分页就是大厅。")}</p>
        <p>{t("Android can use that same browser path. The player-portal link is there when you want the destination this page publishes for Android. You do not have to take that path to read games, promotions, or the cashier in the browser.", "Android 也可以走同一条浏览器路径。当你需要本页为 Android 公布的目的地时，玩家门户链接在这里。要在浏览器里看游戏、优惠或收银台，不必走那条路径。")}</p>
      </section>

      <section className="section prose">
        <h2>{t("E9WIN download and access troubleshooting", "E9WIN 下载与访问排查")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("The download link does not open", "下载链接打不开")}</h3>
            <p>{t("Check the connection and reload this page. Try Chrome if you were in Safari, or Safari if you were in Chrome. Then try the player-portal button again. If it still fails, contact support. Leave other download sites alone.", "检查网络并重新加载本页。如果在 Safari，就试 Chrome；如果在 Chrome，就试 Safari。然后再试一次玩家门户按钮。如果仍然失败，联系客服。不要去其他下载站。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Android installation does not start", "Android 安装没有开始")}</h3>
            <p>{t("Confirm the file, if one appeared, came from the player portal this page opened. Read a security warning and continue only when you recognise that source. Do not turn phone security off as a general step. Browser download permission is a phone setting; this page does not publish a click-path for it.", "如果出现了文件，确认它来自本页打开的玩家门户。阅读安全警告，只在你认出该来源时继续。不要把关闭手机安全设置当成通用步骤。浏览器下载权限是手机设置；本页不公布它的点击路径。")}</p>
          </article>
          <article className="panel">
            <h3>{t("The iPhone shortcut does not appear", "iPhone 快捷方式没有出现")}</h3>
            <p>{t("Use Safari, not a different iPhone browser. Tap Share, then Add to Home Screen, and confirm. If Share does not list that action, you are likely outside Safari. The Safari tab still opens the lobby without the icon.", "使用 Safari，不要用其他 iPhone 浏览器。点分享，再点加入主屏幕，然后确认。如果分享里没有这项操作，你很可能不在 Safari 里。没有图标时，Safari 分页仍然可以打开大厅。")}</p>
          </article>
          <article className="panel">
            <h3>{t("The website does not load", "网站加载不了")}</h3>
            <p>{t("Test the connection with another website. Update the browser or switch between Chrome and Safari. A reload picks up the web lobby. A device matrix is not published, so a model number will not produce a different install on this page.", "用另一个网站测试网络。更新浏览器，或在 Chrome 和 Safari 之间切换。重新加载会拿到网页大厅。没有公布设备对照表，所以型号不会让本页给出另一种安装。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Login does not work", "登录不行")}</h3>
            <p>{t("Use the username from registration. Password recovery is in the lobby. This marketing site does not keep the session. See ", "使用注册时的用户名。找回密码在大厅里。这个说明网站不保存登录状态。请看")}<Link href={href("/login")}>{t("login", "登录")}</Link>{t(", the ", "、")}<Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>{t(", and ", "和")}<Link href={href("/contact")}>{t("contact", "联系客服")}</Link>{t(". A response time is not promised.", "。没有承诺回复时间。")}</p>
          </article>
        </div>
      </section>

      <FaqBlock items={faqs} title={t("E9WIN download and mobile FAQ", "E9WIN 下载与手机常见问题")} />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t("Mobile and download guides", "手机与下载指南")}</h2>
            <p>{t("Longer notes for the same access paths. Only routes that exist are linked.", "同一条访问路径的更长说明。只链接实际存在的页面。")}</p>
          </div>
          <Link className="cat-all" href={href("/guides")}>{t("Guide hub", "指南")}</Link>
        </div>
        <div className="guide-grid">
          {guideSlugs.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            const text = presentGuide(guide, locale);
            const scene = guideScenes[guide.category];
            return (
              <Link className="guide-card" href={href(`/guides/${guide.slug}`)} key={guide.slug}>
                {scene ? <img src={scene.src} alt={sceneAlt(locale, scene.alt)} width={640} height={360} loading="lazy" /> : null}
                <span className="guide-body">
                  <span className="tag">{text.categoryLabel}</span>
                  <h3>{text.title}</h3>
                  <p>{text.excerpt}</p>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Explore E9WIN", "继续了解 E9WIN")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("Play and offers", "游戏与优惠")}</h3>
            <p>
              <Link href={href("/games")}>{t("Games", "游戏")}</Link>{t(", ", "、")}<Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>{t(", ", "、")}<Link href={href("/vip")}>VIP</Link>{t(", ", "、")}<Link href={href("/games/slots")}>{t("slots", "老虎机")}</Link>{t(", ", "、")}<Link href={href("/games/live-casino")}>{t("live casino", "真人娱乐场")}</Link>{t(", ", "、")}<Link href={href("/games/sports")}>{t("sports", "体育")}</Link>{t(", ", "、")}<Link href={href("/games/4d")}>4D</Link>{t(", ", "、")}<Link href={href("/games/fishing")}>{t("fishing", "捕鱼")}</Link>{t(", and ", "和")}<Link href={href("/games/esports")}>{t("esports", "电竞")}</Link>{t(".", "。")}
            </p>
          </article>
          <article className="panel">
            <h3>{t("Account and payments", "账户与支付")}</h3>
            <p>
              <Link href={href("/login")}>{t("Sign in", "登录")}</Link>{t(", ", "、")}<Link href={href("/register")}>{t("register", "注册")}</Link>{t(", ", "、")}<Link href={href("/payment-methods")}>{t("payment methods", "支付方式")}</Link>{t(", ", "、")}<Link href={href("/deposit")}>{t("deposit", "存款")}</Link>{t(", and ", "和")}<Link href={href("/withdrawal")}>{t("withdrawal", "提款")}</Link>{t(".", "。")}
            </p>
          </article>
          <article className="panel">
            <h3>{t("Help", "帮助")}</h3>
            <p>
              <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>{t(", ", "、")}<Link href={href("/contact")}>{t("contact", "联系客服")}</Link>{t(", ", "、")}<Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>{t(", ", "、")}<Link href={href("/agent")}>{t("agent", "代理")}</Link>{t(", and ", "和")}<Link href={href("/guides")}>{t("guides", "指南")}</Link>{t(".", "。")}
            </p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/promotions/promo-welcome.webp" alt={sceneAlt(locale, "A dark entrance lit with gold")}>
        <h2>{t("Access E9WIN your way", "按你的方式访问 E9WIN")}</h2>
        <p>{t("Choose the method for the device you have, and use the links on this page to reach the lobby.", "按你现有的设备选择方式，并用本页的链接进入大厅。")}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#access">{t("Access E9WIN", "访问 E9WIN")}</Link>
          <Link className="btn btn-line" href={href("/games")}>{t("Explore games", "查看游戏")}</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: t("E9WIN Download & Mobile Access", "E9WIN 下载与手机访问"),
        url: absoluteUrl(pagePath),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: t("Download", "下载"), item: absoluteUrl(pagePath) },
        ],
      }} />
      <JsonLd data={howTo(androidName, androidSteps)} />
      <JsonLd data={howTo(iphoneName, iphoneSteps)} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
