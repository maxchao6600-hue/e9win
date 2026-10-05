import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { guideScenes, pageScenes } from "@/lib/scenes";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description = "Read how the E9WIN agent path works: downline players, the profile Share link, and how to ask support for setup. Commission rates are not published on this page.";

const baseMeta = pageMeta({
  title: "E9WIN Agent Program | Partnership Information and Application Guide",
  description,
  path: "/agent",
});

export const metadata: Metadata = {
  ...baseMeta,
  openGraph: {
    ...baseMeta.openGraph,
    images: [{ url: absoluteUrl(pageScenes.agent.src), alt: pageScenes.agent.alt }],
  },
  twitter: {
    ...baseMeta.twitter,
    images: [absoluteUrl(pageScenes.agent.src)],
  },
};

const faqs = [
  { q: "What is the E9WIN Agent Program?", a: "It is the path for people who introduce players and work with a downline. Players who register through the referral are that downline. Commission follows their play. The rate is confirmed in setup, not on this page." },
  { q: "What does an E9WIN Agent do?", a: "An agent introduces the platform with the referral link from their own profile, after support has enabled the path. Account problems, passwords, and cashier requests stay with official support." },
  { q: "Who can apply to become an E9WIN Agent?", a: "The published description is for people who introduce players and work with a downline. It is not a job offer. Suitability and the commercial terms are confirmed when you ask support for setup." },
  { q: "How do I apply?", a: "Open a player account if you need one, then message WhatsApp or Facebook and ask for agent setup. There is no public application form and no published application fee." },
  { q: "What should I prepare before applying?", a: "Have the username you will use, a way for support to reply, and a clear note about where you would share a link. A list of questions about the rate and the downline steps is more useful than a guessed figure." },
  { q: "Does E9WIN guarantee agent approval?", a: "No. Support enables the path. This page cannot approve an account, and it does not promise a reply time." },
  { q: "Where can I find current agent terms?", a: "In the setup support sends after you ask. This page does not print a rate, a payout calendar, a minimum, or a contract." },
  { q: "Does E9WIN publish commission rates?", a: "No. The rate is confirmed during agent setup. A percentage on another website is not the setup." },
  { q: "How does referral tracking work?", a: "After the path is enabled, sign in and copy the link under Share in the profile. Friends register through that link. This website does not show a referral count." },
  { q: "Is there an agent dashboard?", a: "Not on this website. There is no public commission balance, player count, or downline chart. Ask support what reporting the setup includes." },
  { q: "Can agents promote E9WIN games?", a: "Yes, by pointing people at the public games pages and the lobby. Agent setup does not publish a different game list or a commission by title." },
  { q: "Can agents promote E9WIN promotions?", a: "Use the current promotions page and the account card. Do not invent a bonus to recruit someone. The player invite campaign has its own card and is separate from the agent rate." },
  { q: "Are agents automatically VIP members?", a: "No. VIP is a membership label read in the rewards area. Agent setup does not publish VIP status, and a referral does not publish VIP eligibility." },
  { q: "Who should I contact about an agent-related issue?", a: "WhatsApp or the Facebook page, or the contact page. Send a username. Do not send a password. In-lobby chat is available after you sign in." },
];

const guideSlugs = [
  "how-to-register",
  "account-guide",
  "security-guide",
  "promotions-guide",
  "mobile-guide",
  "deposit-guide",
  "withdrawal-guide",
  "responsible-gaming-guide",
] as const;

const duties = [
  { title: "Introduce the platform", text: "Share the referral link from your profile after support has enabled the path. Point people at the public pages on this website for games, promotions, download, and support." },
  { title: "Keep the description current", text: "A bonus, a rate, or a rule you remember from an older message is not the current card or the current setup. Read the page or the message again before you repeat it." },
  { title: "Leave accounts to support", text: "Do not collect passwords, bank details, or recovery codes. Do not process a withdrawal for someone else. Those requests go to WhatsApp, Facebook, or in-lobby chat." },
];

export default function AgentPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Agent" }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">Partnership hub</p>
          <h1>E9WIN Agent Program</h1>
          <p>This page explains the agent path: introducing players, working with a downline, and asking support for setup. The commission rate is confirmed in that setup. It is not printed here, and income is not guaranteed.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#apply">Become an E9WIN Agent</Link>
            <Link className="btn btn-line" href="/contact">Contact support</Link>
          </div>
        </div>
        <img src={pageScenes.agent.src} alt={pageScenes.agent.alt} width={1280} height={720} />
      </section>

      <section className="section prose" id="program">
        <h2>E9WIN Agent Program</h2>
        <p>An agent path is a way for a person with an audience to introduce players to a gaming site and work with the accounts that join through them. On this site that group is called a downline. Commission follows downline play. The rate is part of agent setup, not part of this public page.</p>
        <p>The page is here so you can see the steps that are actually published: open an account if you need one, ask support, then use the Share link in the profile after the path is enabled. It is not a job listing and it does not quote income.</p>
        <p>Read the commercial terms in the setup message before you start sharing a link. A rate, a payout rule, or a minimum that is not in that message is not something this website has published. There is no published application fee.</p>
      </section>

      <section className="section prose">
        <h2>What does an E9WIN Agent do?</h2>
        <p>The practical work is introduction. You tell people about the platform and, once support has enabled the path, you give them the referral link from your profile. Friends register through that link. Those registrations are the downline the setup talks about.</p>
        <div className="topic-grid">
          {duties.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p>An agent does not replace official support. Login help, deposits, withdrawals, and promotion cards stay on the official channels and in the lobby.</p>
      </section>

      <section className="section prose">
        <h2>Who can consider becoming an E9WIN Agent?</h2>
        <p>The published description fits someone who will introduce players and then work with a downline. People who already publish to an audience sometimes look at that kind of path: site owners, community admins, and people who post about games. Interest is not the same as approval.</p>
        <p>This is not a job offer. Support confirms whether the path can be enabled on your account and what the current terms are. Read those terms before you treat the path as open.</p>
      </section>

      <section className="section prose" id="journey">
        <h2>How the E9WIN Agent journey works</h2>
        <p>The steps below are the ones this site describes. Approval is not automatic. Nothing here starts the path by itself.</p>
        <ol className="steps">
          <li>Read this page, including the point that the rate is not published here.</li>
          <li>Open a player account if you do not already have one. Use one account.</li>
          <li>Message WhatsApp or Facebook and ask for agent setup.</li>
          <li>Read the terms support sends. That message is where the rate is confirmed.</li>
          <li>After support enables the path, sign in and copy the link under Share in the profile.</li>
          <li>Friends register through that link.</li>
          <li>Top-up and withdrawal for the network use the same cashier as a player account.</li>
          <li>Send account-specific problems to official support. Do not collect passwords.</li>
        </ol>
      </section>

      <section className="section prose">
        <h2>E9WIN Agent responsibilities</h2>
        <ul>
          <li>Use the referral link from your own profile after the path is enabled. Do not build a second account to test it.</li>
          <li>Describe games, promotions, and access the way the public pages describe them. Do not add a bonus that is not on a current card.</li>
          <li>Do not present yourself as official support, and do not ask a player for a password, a bank login, or a recovery code.</li>
          <li>Send deposits, withdrawals, and missing credits to WhatsApp, Facebook, or in-lobby chat, with a username.</li>
          <li>Keep the share on channels you control. A link posted as someone else is a different problem.</li>
        </ul>
        <p>There is no separate agent app. The profile Share area is in the same lobby you open in a phone browser, from an iPhone home-screen icon, or from the Android portal on the <Link href="/download">download</Link> page.</p>
      </section>

      <section className="section prose">
        <h2>Understanding agent eligibility</h2>
        <p>No turnover target, referral minimum, or deposit threshold is published for agent setup. Do not treat a number from another site as the rule.</p>
        <p>What you can confirm with support, because those are the points this site does publish:</p>
        <ul>
          <li>You are asking from the account you will actually use. One account. A second profile made to test the referral is called out as the wrong move.</li>
          <li>There is no published application fee and no public form that quotes a rate.</li>
          <li>The commercial terms, including the rate, arrive in the setup, not on this page.</li>
          <li>Promotion claims you want to repeat must match a current card. Inventing a bonus is outside the published responsibility.</li>
        </ul>
      </section>

      <section className="section prose" id="apply">
        <h2>How to apply for the E9WIN Agent Program</h2>
        <p>Application is a support request. This website has no agent form and no approval button.</p>
        <ol className="steps">
          <li>Finish reading the journey above.</li>
          <li>Register if you do not have a player account yet.</li>
          <li>Contact support and ask for agent setup. Public channels are WhatsApp and Facebook.</li>
          <li>Send a username and your questions. Do not send a password.</li>
          <li>Wait for the setup message and read the rate there before you share a link.</li>
          <li>Start sharing only after support says the path is enabled, using the Share link in the profile.</li>
        </ol>
        <div className="cta-row">
          <a className="btn btn-primary" href={siteConfig.support.whatsapp}>Message WhatsApp</a>
          <a className="btn btn-line" href={siteConfig.support.facebook}>Facebook</a>
          <Link className="btn btn-line" href="/contact">Contact page</Link>
        </div>
      </section>

      <section className="section prose">
        <h2>Information to prepare before becoming an agent</h2>
        <p>Support has not published a mandatory document list. These are the details that make the first message easier to answer. Bring what you have. Do not invent figures to look complete.</p>
        <ul>
          <li>The username on the account you want used for the path.</li>
          <li>A contact method where you can read the reply.</li>
          <li>Where you would share the link, such as a site or a social account you already run.</li>
          <li>Questions you want answered in setup: the rate, what counts as downline play, and how top-up for the network works in the cashier.</li>
        </ul>
      </section>

      <section className="section prose">
        <h2>How agent promotion and referral works</h2>
        <p>The published chain is short. Support enables the path. You copy the link under Share in the profile. A friend registers through that link. That registration is how this site describes a downline player. Commission follows their play, on the rate in the setup.</p>
        <p>Someone who registers without that link is not described here as your downline. This page does not promise that every visit is attributed.</p>
        <p>The promotions list also names a player invite campaign. After login, the same profile share area can provide a referral link for that campaign, and the reward on the invite card stays on the card. Agent commission is the setup support confirms. Do not treat the invite card as the agent rate, or the agent rate as a public bonus.</p>
      </section>

      <section className="section prose">
        <h2>Agent tracking and account management</h2>
        <p>Tracking on the public site is the Share link in the lobby profile, and only after support has enabled the path. The link is not printed on this page. If you cannot see Share, sign in to the lobby first.</p>
        <p>This website does not include an agent dashboard. It does not show a commission balance, a player count, a conversion figure, or a payout history. If the setup includes reporting, support is the place to ask what that reporting shows. Network top-up and withdrawal use the same cashier flow as a player account.</p>
      </section>

      <section className="section prose">
        <h2>E9WIN Agent support</h2>
        <p>Ask on <a href={siteConfig.support.whatsapp}>WhatsApp</a> or the <a href={siteConfig.support.facebook}>Facebook page</a>. The <Link href="/contact">contact</Link> page lists those channels. After you sign in, the lobby also refers players to live chat. No public email address or phone number is listed. A reply time is not published.</p>
        <p>Those channels are the right place for an application, a question about the rate, a missing Share link, and a player who cannot sign in or cannot see a deposit. Send the username. Leave the password out. The <Link href="/faq">FAQ</Link> covers the shorter public answers.</p>
      </section>

      <section className="section prose">
        <h2>Promoting E9WIN games</h2>
        <p>Agents use the same public catalog as everyone else. Setup does not publish a private game list, a different stake rule, or a commission attached to one title. Covers, categories, and the lobby are the sources. Point people at the games hub and let the game show its own rules.</p>
        <p>
          <Link href="/games">Games hub</Link>, <Link href="/games/slots">slots</Link>, <Link href="/games/live-casino">live casino</Link>, <Link href="/games/sports">sports</Link>, <Link href="/games/4d">4D</Link>, <Link href="/games/fishing">fishing</Link>, and <Link href="/games/esports">esports</Link>.
        </p>
      </section>

      <section className="section prose">
        <h2>Agents and E9WIN promotions</h2>
        <p>If you mention an offer, use the current <Link href="/promotions">promotions</Link> page and then the account card. Cards change, and a closed window is not a live percentage. Do not tell a recruit that a bonus exists unless that card is the one you are looking at.</p>
        <p>The player invite campaign is one of those cards. Its reward stays on the card. It is not an agent commission table, and this page does not add an agent-only promotion.</p>
      </section>

      <section className="section prose">
        <h2>Agents and E9WIN VIP</h2>
        <p>Agent setup and VIP membership are different labels. VIP is explained on the <Link href="/vip">VIP</Link> page: a notice in the rewards area, with no public level ladder and no cash figure. Asking for agent setup does not publish VIP status. A friend who registers through your link is not described as a VIP member because of that registration.</p>
      </section>

      <section className="section prose">
        <h2>Responsible E9WIN promotion</h2>
        <p>The trust rules that are already implied by the account pages are the ones to follow when you talk about the platform.</p>
        <ul>
          <li>Do not guarantee a win, a profit, or an income. Earnings are not guaranteed, and game results are not promised on this website.</li>
          <li>Do not invent a bonus, a rate, or a limited-time claim.</li>
          <li>Do not impersonate support, and do not ask for a password or a payout password.</li>
          <li>Use links from this website and from the Share control in your profile. A download file from another domain is not the Android path on the download page.</li>
          <li>Players should be 18 or older. The <Link href="/responsible-gaming">responsible gaming</Link> page is the place that says to set a budget before a deposit. Repeat that, rather than a line about recovering losses.</li>
        </ul>
      </section>

      <section className="section prose">
        <h2>Agent application and partnership troubleshooting</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>I do not know where to start</h3>
            <p>Read the journey on this page, open an account if you need one, and message WhatsApp or Facebook to ask for agent setup. There is no other public form.</p>
          </article>
          <article className="panel">
            <h3>I cannot find a commission rate</h3>
            <p>A rate is not published here. It is confirmed in the setup support sends. Do not copy a percentage from a chat that is not that setup.</p>
          </article>
          <article className="panel">
            <h3>I asked and have not heard back</h3>
            <p>Check that you used WhatsApp or the Facebook page, and that the username was in the message. Follow up on the same channel. A response time is not promised, and this page cannot see the queue.</p>
          </article>
          <article className="panel">
            <h3>I am not sure a promotion is still valid</h3>
            <p>Open the promotions page and the account card. If the card is missing, do not repeat the offer. Agent setup does not refresh a closed campaign.</p>
          </article>
          <article className="panel">
            <h3>A referred player has an account problem</h3>
            <p>Send them to official support with their own username. Do not take their password or move the payout to your account to “fix” it.</p>
          </article>
          <article className="panel">
            <h3>I cannot see agent information</h3>
            <p>This page is the public explanation. The Share link appears in the lobby after you sign in, and only once support has enabled the path. If it is missing, ask support. There is no dashboard on this site to open instead.</p>
          </article>
        </div>
      </section>

      <FaqBlock items={faqs} title="E9WIN Agent FAQ" />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Agent and partnership guides</h2>
            <p>Account, promotion, and payment notes that sit beside a setup request. Only routes that exist are linked.</p>
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
        <h2>Explore more on E9WIN</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>Play and offers</h3>
            <p>
              <Link href="/games">Games</Link>, <Link href="/promotions">promotions</Link>, <Link href="/vip">VIP</Link>, <Link href="/download">download</Link>, <Link href="/games/slots">slots</Link>, <Link href="/games/live-casino">live casino</Link>, <Link href="/games/sports">sports</Link>, <Link href="/games/4d">4D</Link>, <Link href="/games/fishing">fishing</Link>, and <Link href="/games/esports">esports</Link>.
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
              <Link href="/faq">FAQ</Link>, <Link href="/contact">contact</Link>, <Link href="/responsible-gaming">responsible gaming</Link>, and <Link href="/guides">guides</Link>.
            </p>
          </article>
        </div>
      </section>

      <section className="section hub-cta">
        <h2>Interested in becoming an E9WIN Agent?</h2>
        <p>Ask support for setup, then read the rate in that reply before you share a link.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/contact">Contact E9WIN</Link>
          <Link className="btn btn-line" href="#program">Explore agent information</Link>
        </div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "E9WIN Agent Program",
        url: absoluteUrl("/agent"),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Agent", item: absoluteUrl("/agent") },
        ],
      }} />
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
