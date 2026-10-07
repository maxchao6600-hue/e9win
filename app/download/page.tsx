import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { guideScenes, pageScenes } from "@/lib/scenes";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description = "Open E9WIN on Android through the player portal, on iPhone with a Safari home-screen shortcut, or in a phone or desktop browser. A store listing is not part of this path.";

const baseMeta = pageMeta({
  title: "E9WIN Download | Android, iPhone and Mobile Web",
  description,
  path: "/download",
});

export const metadata: Metadata = {
  ...baseMeta,
  openGraph: {
    ...baseMeta.openGraph,
    images: [{ url: absoluteUrl(pageScenes.download.src), alt: pageScenes.download.alt }],
  },
  twitter: {
    ...baseMeta.twitter,
    images: [absoluteUrl(pageScenes.download.src)],
  },
};

const androidSteps = [
  "Open this download page.",
  "Use the player-portal link on the page. It goes to the portal address configured for this site.",
  "Follow the access instructions on that destination.",
  "If a file is offered, install it only when it came from that portal. If the phone shows a security warning, stop until you have confirmed the file came from the link on this page.",
  "Open the lobby.",
  "Sign in with the username from registration.",
  "Confirm the lobby loads. If the link does not open, contact support instead of using a file from another site.",
];

const iphoneSteps = [
  "Open Safari on the iPhone or iPad.",
  "Go to the E9WIN website.",
  "Tap Share.",
  "Tap Add to Home Screen.",
  "Confirm the shortcut.",
  "Open the new icon and sign in with your username.",
];

const faqs = [
  { q: "How do I access E9WIN on Android?", a: "Open this page and use the player-portal link. Follow the instructions on that destination. Install a file only if that portal provided it, then sign in at the lobby." },
  { q: "Does E9WIN have a Google Play app?", a: "A Google Play listing is not part of the documented path. Android access on this site is the player-portal link." },
  { q: "How do I access E9WIN on iPhone?", a: "Open the site in Safari. You can play in that tab, or use Share and Add to Home Screen. An App Store listing is not part of this path." },
  { q: "Can I add E9WIN to my iPhone home screen?", a: "Yes. In Safari, tap Share, then Add to Home Screen, and confirm. The icon opens the web lobby. The same Share steps are documented for iPad." },
  { q: "Can I use E9WIN without installing an app?", a: "Yes. The phone browser and a desktop browser open the lobby with no install. The iPhone home-screen icon is optional." },
  { q: "Can I play E9WIN through a mobile browser?", a: "Yes. Mobile web is a documented path. Sign in after the lobby opens. Game rules and the cashier are inside that lobby." },
  { q: "Can I use E9WIN on desktop?", a: "Yes. Windows, Mac, and Linux can use a current browser. There is no separate desktop program." },
  { q: "Which browser should I use?", a: "A current Chrome or Safari build is the practical pair named on this site. Keep a stable connection. A device compatibility list is not published." },
  { q: "What should I do if the download link does not open?", a: "Check the connection, reload the page, and try the other of those two browsers. If the player-portal link still fails, contact support. Do not switch to a download site that this page does not link." },
  { q: "What should I do if the Android installation does not start?", a: "Confirm you used the player-portal link on this page. Read any security warning and continue only if you recognise that source. This page does not ask you to turn security off for every app." },
  { q: "What should I do if the website does not load?", a: "Reload on a current browser and a stable connection. If other websites also fail, the connection is the first place to look. If only this site fails, try the other named browser and then contact support." },
  { q: "Can I access games from mobile?", a: "The public categories are the same ones linked from this site: slots, live casino, sports, 4D, fishing, and esports. A title still has to open in the lobby. This page does not claim every title runs on every phone." },
  { q: "Can I access promotions from mobile?", a: "Yes. The promotions page and the account card are the same information in the phone browser. This page does not add a mobile-only campaign." },
  { q: "Can I access payments from mobile?", a: "The cashier is inside the lobby on the phone and on desktop. Public method types include bank transfer, e-wallet, telco PIN, and USDT. Limits and timing stay on the cashier screen." },
];

const guideSlugs = [
  "how-to-download",
  "mobile-guide",
  "how-to-login",
  "security-guide",
  "deposit-guide",
  "withdrawal-guide",
  "account-guide",
] as const;

const methods = [
  {
    title: "Android",
    tag: "Player portal",
    text: "The Android action opens the player portal linked on this page. Follow the instructions there. Install a file only if that portal is the source.",
    href: siteConfig.playerPortal,
    label: "Open the player portal",
    external: true,
  },
  {
    title: "iPhone and iPad",
    tag: "Safari shortcut",
    text: "Safari can add a home-screen icon. The icon opens the web lobby. You can also stay in the Safari tab and skip the icon.",
    href: "#iphone",
    label: "Show the iPhone steps",
    external: false,
  },
  {
    title: "Mobile web",
    tag: "No install",
    text: "A current phone browser opens the same lobby. Sign in after it loads. No separate install is required for this path.",
    href: "#web",
    label: "Read mobile web",
    external: false,
  },
  {
    title: "Desktop browser",
    tag: "No desktop program",
    text: "Windows, Mac, and Linux use the browser lobby. There is no Windows or Mac application to install.",
    href: "#desktop",
    label: "Read desktop access",
    external: false,
  },
];

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

export default function DownloadPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Download" }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">Download hub</p>
          <h1>E9WIN Download &amp; Mobile Access</h1>
          <p>Use the access method that matches the device in front of you. Android goes through the player portal on this page. iPhone uses Safari. The phone and desktop browsers open the lobby with no install.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#access">Access E9WIN</Link>
            <Link className="btn btn-line" href="/guides/mobile-guide">E9WIN mobile guide</Link>
          </div>
        </div>
        <img src={pageScenes.download.src} alt={pageScenes.download.alt} width={1400} height={760} />
      </section>

      <section className="section prose">
        <h2>Access E9WIN on mobile and desktop</h2>
        <p>The lobby is a web destination. A phone and a computer can both open it, and the method changes with the device. Installation is required only when you choose the Android portal path and that destination offers a file.</p>
        <p>Stay on the links this website publishes. The Android button below is the player portal configured for the site. The iPhone steps stay inside Safari. A file from a search result, a chat, or another domain is a different source.</p>
        <p>After the lobby opens, sign in with the username you registered. This marketing site does not keep that play session. Password recovery stays in the lobby.</p>
      </section>

      <section className="section" id="access">
        <div className="section-head">
          <div>
            <p className="tag">Access methods</p>
            <h2>Ways to access E9WIN</h2>
            <p>Four documented paths. Pick the one for the device you are holding. None of them is a store listing.</p>
          </div>
        </div>
        <div className="access-grid">
          {methods.map((item) => (
            <article className="panel" key={item.title}>
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

      <VisualSplit src="/images/brand/scene-devices.webp" alt="A phone and a laptop on a dark marble desk" id="android">
        <h2>E9WIN on Android</h2>
        <p>Android access on this site is the player-portal link. The button opens that portal. What you do next is whatever that destination shows: an access screen, a file, or both. This page does not publish a package name, a version number, a file size, or a minimum Android version.</p>
        <p>Treat the portal as the source. If you install a file, it should be the file that portal gave you on this visit. An APK from a search result or a private message is not that link. A Google Play listing is not part of this path.</p>
        <h3>How to access E9WIN on Android</h3>
        <ol className="steps">
          {androidSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p><a href={siteConfig.playerPortal}>Open the player portal</a>. If it fails, use <Link href="/contact">contact</Link> or <a href={siteConfig.support.whatsapp}>WhatsApp</a>.</p>
      </VisualSplit>

      <section className="section prose" id="iphone">
        <h2>E9WIN on iPhone</h2>
        <p>iPhone and iPad use Safari. Add to Home Screen puts an icon on the home screen. That icon opens the web lobby. It does not install a separate app binary, and an App Store listing is not part of this path.</p>
        <h3>How to add E9WIN to your iPhone home screen</h3>
        <ol className="steps">
          {iphoneSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p>You can skip the icon and keep using the Safari tab. Other browsers on iPhone may not offer Add to Home Screen the same way, so start in Safari when you want the shortcut.</p>
      </section>

      <section className="section prose" id="web">
        <h2>Play E9WIN through mobile web</h2>
        <p>Mobile web means the lobby in the phone browser, with no install step. Open the site, wait for the lobby, and sign in. The web lobby is described as updating when you load it, so there is no separate patch to apply on the phone.</p>
        <p>From there you can open <Link href="/games">games</Link>, read <Link href="/promotions">promotions</Link>, and use <Link href="/login">login</Link> or <Link href="/register">register</Link> if you still need an account. The cashier and the game rules sit inside the lobby, not on this marketing page.</p>
      </section>

      <VisualSplit src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" reverse id="desktop">
        <h2>Access E9WIN on desktop</h2>
        <p>Windows, Mac, and Linux can open the lobby in a current browser. Browser access does not require a separate desktop program. There is no Windows application and no Mac application in the documented path.</p>
        <p>Use the same username you use on the phone. A desktop session and a phone session are the same account when the username matches.</p>
      </VisualSplit>

      <section className="section prose">
        <h2>Which E9WIN access method fits your device?</h2>
        <p>Match the device. This table does not rank the methods.</p>
        <div className="hub-table-wrap">
          <table className="hub-table">
            <caption>Access methods documented on this page.</caption>
            <thead>
              <tr>
                <th scope="col">Method</th>
                <th scope="col">Installation</th>
                <th scope="col">What you do next</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Android</th>
                <td>The player-portal link on this page. A file is installed only if that portal provides one.</td>
                <td>Open the portal, then the lobby, then sign in.</td>
              </tr>
              <tr>
                <th scope="row">iPhone and iPad</th>
                <td>No app. A Safari home-screen shortcut is optional.</td>
                <td>Play in Safari, or add the icon and open it.</td>
              </tr>
              <tr>
                <th scope="row">Mobile web</th>
                <td>None.</td>
                <td>Open the site in the phone browser and sign in.</td>
              </tr>
              <tr>
                <th scope="row">Desktop web</th>
                <td>None. No desktop program.</td>
                <td>Open the site in a browser on Windows, Mac, or Linux.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section prose">
        <h2>Browser and device guidance</h2>
        <p>A current Chrome or Safari build is the pair this site names. Keep the browser updated and use a stable connection. The site is served over HTTPS. A formal device list, a minimum OS version, and a supported-model chart are not published.</p>
        <ul>
          <li>Reload the page if the lobby looks stale. The web lobby updates when you load it.</li>
          <li>If one browser fails, try the other of Chrome or Safari.</li>
          <li>If the page fails on every site you open, check the connection before you change anything on this site.</li>
          <li>Clear the browser cache only when a reload still shows an old page. That is a browser step, not an account reset.</li>
        </ul>
      </section>

      <section className="section prose">
        <h2>Safe download and access practices</h2>
        <p>Use the links on this website. Before you install anything, look at the domain the button opened. The Android button is the player portal. A warning from the phone is a reason to check that source, not a reason to turn protection off for every install.</p>
        <ul>
          <li>Do not install an APK, or any other file, from a search result, a chat, or a mirror.</li>
          <li>Do not treat a store badge on another website as a listing this site has published.</li>
          <li>Keep the phone system and the browser updated.</li>
          <li>Send support a username. Do not send the password. Public channels are <a href={siteConfig.support.whatsapp}>WhatsApp</a> and <a href={siteConfig.support.facebook}>Facebook</a>, plus in-lobby chat after you sign in.</li>
        </ul>
        <p>This page does not certify the file, the phone, or the network. The <Link href="/guides/security-guide">security guide</Link> covers the account side of that habit.</p>
      </section>

      <section className="section prose">
        <h2>What to do after opening E9WIN</h2>
        <ol className="steps">
          <li>Wait until the lobby has loaded.</li>
          <li>Choose <Link href="/login">login</Link> and enter the username and password you created.</li>
          <li>Confirm you are in the account you meant to open. The same username should work from the phone shortcut, the Android portal, and the desktop browser.</li>
          <li>Then open <Link href="/games">games</Link>, <Link href="/promotions">promotions</Link>, <Link href="/vip">VIP</Link>, or the cashier, depending on what you came to do.</li>
        </ol>
        <p>New accounts start at <Link href="/register">register</Link>. If the password is rejected, use recovery inside the lobby. This page cannot see the password and will not ask you to type it here.</p>
      </section>

      <VisualSplit src="/images/brand/scene-slots.webp" alt="Gates of Olympus on a display in a dark private room">
        <h2>Play E9WIN games on mobile</h2>
        <p>Once the lobby is open, the game categories are the ones published on the games hub. Covers for slots and live tables can be reviewed on the phone. Sports, 4D, fishing, and esports open in the lobby as well. Stake rules stay inside the game.</p>
        <p>Nothing here says a specific title is certified for a specific handset. If a game does not load, try a reload and the other named browser, then ask support with the username and the game name.</p>
        <p>
          <Link href="/games">Games hub</Link>, <Link href="/games/slots">slots</Link>, <Link href="/games/live-casino">live casino</Link>, <Link href="/games/sports">sports</Link>, <Link href="/games/4d">4D</Link>, <Link href="/games/fishing">fishing</Link>, and           <Link href="/games/esports">esports</Link>.
        </p>
      </VisualSplit>

      <section className="section prose">
        <h2>Access E9WIN promotions on mobile</h2>
        <p>Promotion names on the <Link href="/promotions">promotions</Link> page are the same list in a phone browser. The account card, after you sign in, is where opt-in and any conditions are read. A membership notice, when the account has one, is in the lobby rewards area and is explained on the <Link href="/vip">VIP</Link> page.</p>
        <p>This download page does not add a mobile-only campaign, a mobile bonus, or a code.</p>
      </section>

      <VisualSplit src="/images/brand/scene-payments.webp" alt="A card and a phone on a dark cashier counter" reverse>
        <h2>Payments and account access on mobile</h2>
        <p>Deposit and withdrawal start in the lobby cashier, on the phone or on a desktop browser. The public pages describe method types that include bank transfer, e-wallet, telco PIN, and USDT. The screen you are paying on is the one that shows the account name, the reference, and any limit for that attempt.</p>
        <p>Read <Link href="/payment-methods">payment methods</Link>, <Link href="/deposit">deposit</Link>, and <Link href="/withdrawal">withdrawal</Link> before you move money. Those pages do not change because you opened them on a phone.</p>
      </VisualSplit>

      <section className="section prose">
        <h2>Use E9WIN without installing an app</h2>
        <p>The browser path is enough for a phone and for a computer. Open the site, sign in, and use the lobby. Windows, Mac, and Linux do not have a desktop program in this setup. On iPhone, the home-screen icon is optional; the Safari tab is the lobby.</p>
        <p>Android can use that same browser path. The player-portal link is there when you want the destination this page publishes for Android. You do not have to take that path to read games, promotions, or the cashier in the browser.</p>
      </section>

      <section className="section prose">
        <h2>E9WIN download and access troubleshooting</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>The download link does not open</h3>
            <p>Check the connection and reload this page. Try Chrome if you were in Safari, or Safari if you were in Chrome. Then try the player-portal button again. If it still fails, contact support. Leave other download sites alone.</p>
          </article>
          <article className="panel">
            <h3>Android installation does not start</h3>
            <p>Confirm the file, if one appeared, came from the player portal this page opened. Read a security warning and continue only when you recognise that source. Do not turn phone security off as a general step. Browser download permission is a phone setting; this page does not publish a click-path for it.</p>
          </article>
          <article className="panel">
            <h3>The iPhone shortcut does not appear</h3>
            <p>Use Safari, not a different iPhone browser. Tap Share, then Add to Home Screen, and confirm. If Share does not list that action, you are likely outside Safari. The Safari tab still opens the lobby without the icon.</p>
          </article>
          <article className="panel">
            <h3>The website does not load</h3>
            <p>Test the connection with another website. Update the browser or switch between Chrome and Safari. A reload picks up the web lobby. A device matrix is not published, so a model number will not produce a different install on this page.</p>
          </article>
          <article className="panel">
            <h3>Login does not work</h3>
            <p>Use the username from registration. Password recovery is in the lobby. This marketing site does not keep the session. See <Link href="/login">login</Link>, the <Link href="/faq">FAQ</Link>, and <Link href="/contact">contact</Link>. A response time is not promised.</p>
          </article>
        </div>
      </section>

      <FaqBlock items={faqs} title="E9WIN download and mobile FAQ" />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Mobile and download guides</h2>
            <p>Longer notes for the same access paths. Only routes that exist are linked.</p>
          </div>
          <Link className="cat-all" href="/guides">Guide hub</Link>
        </div>
        <div className="guide-grid">
          {guideSlugs.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            const scene = guideScenes[guide.category];
            return (
              <Link className="guide-card" href={`/guides/${guide.slug}`} key={guide.slug}>
                {scene ? <img src={scene.src} alt={scene.alt} width={640} height={360} loading="lazy" /> : null}
                <span className="guide-body">
                  <span className="tag">{guide.category}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section prose">
        <h2>Explore E9WIN</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>Play and offers</h3>
            <p>
              <Link href="/games">Games</Link>, <Link href="/promotions">promotions</Link>, <Link href="/vip">VIP</Link>, <Link href="/games/slots">slots</Link>, <Link href="/games/live-casino">live casino</Link>, <Link href="/games/sports">sports</Link>, <Link href="/games/4d">4D</Link>, <Link href="/games/fishing">fishing</Link>, and <Link href="/games/esports">esports</Link>.
            </p>
          </article>
          <article className="panel">
            <h3>Account and payments</h3>
            <p>
              <Link href="/login">Sign in</Link>, <Link href="/register">register</Link>, <Link href="/payment-methods">payment methods</Link>, <Link href="/deposit">deposit</Link>, and <Link href="/withdrawal">withdrawal</Link>.
            </p>
          </article>
          <article className="panel">
            <h3>Help</h3>
            <p>
              <Link href="/faq">FAQ</Link>, <Link href="/contact">contact</Link>, <Link href="/responsible-gaming">responsible gaming</Link>, <Link href="/agent">agent</Link>, and <Link href="/guides">guides</Link>.
            </p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/promotions/promo-welcome.webp" alt="A dark entrance lit with gold">
        <h2>Access E9WIN your way</h2>
        <p>Choose the method for the device you have, and use the links on this page to reach the lobby.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#access">Access E9WIN</Link>
          <Link className="btn btn-line" href="/games">Explore games</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "E9WIN Download & Mobile Access",
        url: absoluteUrl("/download"),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Download", item: absoluteUrl("/download") },
        ],
      }} />
      <JsonLd data={howTo("How to access E9WIN on Android", androidSteps)} />
      <JsonLd data={howTo("How to add E9WIN to your iPhone home screen", iphoneSteps)} />
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
