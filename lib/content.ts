export const payments = [
  { id: "maybank", name: "Maybank", image: "/images/payment/maybank.png" },
  { id: "cimb", name: "CIMB", image: "/images/payment/cimb.png" },
  { id: "public-bank", name: "Public Bank", image: "/images/payment/public-bank.png" },
  { id: "rhb", name: "RHB", image: "/images/payment/rhb.png" },
  { id: "hong-leong", name: "Hong Leong", image: "/images/payment/hong-leong.png" },
  { id: "ambank", name: "AmBank", image: "/images/payment/ambank.png" },
  { id: "bsn", name: "BSN", image: "/images/payment/bsn.png" },
  { id: "tng", name: "Touch 'n Go", image: "/images/payment/tng.png" },
  { id: "boost", name: "Boost", image: "/images/payment/boost.png" },
  { id: "grabpay", name: "GrabPay", image: "/images/payment/grabpay.png" },
  { id: "spay", name: "ShopeePay", image: "/images/payment/spay.png" },
  { id: "usdt", name: "USDT", image: "/images/payment/usdt.png" },
] as const;

export const depositMethods = [
  {
    title: "Instant transfer",
    text: "Move funds from a supported Malaysian bank with the instant transfer option inside the cashier.",
  },
  {
    title: "E-wallet",
    text: "Touch 'n Go, Boost, GrabPay, and ShopeePay logos are published with E9WIN bank payments.",
  },
  {
    title: "Bank transfer",
    text: "Manual transfer is listed for Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, and BSN.",
  },
  {
    title: "Telco PIN",
    text: "The cashier tutorial includes a telco PIN deposit path. The accepted pins are shown in the cashier.",
  },
  {
    title: "Crypto",
    text: "USDT is shown among the payment marks. Use the crypto cashier for the wallet address and network.",
  },
  {
    title: "Credit to a friend",
    text: "E9WIN also documents a transfer of credit between player accounts.",
  },
] as const;

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  updatedAt: string;
  steps: string[];
  related: { href: string; label: string }[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-register",
    title: "How to register",
    excerpt: "Create an E9WIN account with the details the registration form asks for.",
    category: "Account",
    updatedAt: "2026-09-25",
    steps: [
      "Open Register on this site or the player portal linked from e9win.net.",
      "Enter your name, mobile number, email, date of birth, username, and password.",
      "Use details that match the bank or e-wallet you will withdraw to.",
      "Read the terms and privacy notes, then submit the form.",
      "Complete any verification the lobby asks for before the first withdrawal.",
    ],
    related: [
      { href: "/register", label: "Register" },
      { href: "/guides/how-to-login", label: "How to login" },
    ],
  },
  {
    slug: "how-to-login",
    title: "How to login",
    excerpt: "Sign in with the username and password from registration.",
    category: "Account",
    updatedAt: "2026-09-25",
    steps: [
      "Open Login and enter the username and password you created.",
      "If the password is rejected, use the recovery option inside the player lobby.",
      "On a phone, you can also open the mobile web lobby or the installed app.",
      "This marketing site does not store a session. Play continues in the player lobby.",
    ],
    related: [
      { href: "/login", label: "Login" },
      { href: "/download", label: "Download" },
    ],
  },
  {
    slug: "how-to-download",
    title: "How to download E9WIN",
    excerpt: "Use the Android download, add the site to an iPhone home screen, or stay on mobile web.",
    category: "Download",
    updatedAt: "2026-09-25",
    steps: [
      "Android: use the download action published on the E9WIN download page. It opens the player portal.",
      "iPhone and iPad: open the mobile site in Safari, then use Share and Add to Home Screen.",
      "Any phone: the web lobby works in the browser without an install.",
      "Keep the device updated and only install from the link on the official download page.",
    ],
    related: [
      { href: "/download", label: "Download page" },
      { href: "/guides/mobile-guide", label: "Mobile guide" },
    ],
  },
  {
    slug: "deposit-guide",
    title: "Deposit guide",
    excerpt: "How deposits are started with bank transfer, e-wallet, telco PIN, or USDT.",
    category: "Payments",
    updatedAt: "2026-09-25",
    steps: [
      "Sign in and open the cashier or Top Up section.",
      "Choose instant transfer, e-wallet, bank transfer, telco PIN, or crypto.",
      "Follow the account name, reference, or wallet address shown on screen.",
      "Wait for the cashier to credit the wallet. Timing depends on the method.",
      "If the credit does not appear, contact support with the receipt and username.",
    ],
    related: [
      { href: "/deposit", label: "Deposit" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "withdrawal-guide",
    title: "Withdrawal guide",
    excerpt: "Request a withdrawal to a bank or e-wallet that matches your account.",
    category: "Payments",
    updatedAt: "2026-09-25",
    steps: [
      "Sign in and open Withdrawal.",
      "Choose a bank transfer or e-wallet that matches the name on the account.",
      "Enter an amount within the limits shown in the cashier.",
      "Confirm the request. Processing time is not fixed and depends on the method and any checks.",
      "Watch the account notification for the result.",
    ],
    related: [
      { href: "/withdrawal", label: "Withdrawal" },
      { href: "/responsible-gaming", label: "Responsible gaming" },
    ],
  },
  {
    slug: "games-guide",
    title: "Games guide",
    excerpt: "Find slots, live tables, sports, lottery, fishing, and esports.",
    category: "Games",
    updatedAt: "2026-09-25",
    steps: [
      "Open Games and filter by category or search a title.",
      "Slots and live casino titles below are taken from the public E9WIN catalog.",
      "Sports, lottery, fishing, and esports open inside the player lobby.",
      "Game rules and stake limits are shown on the table or slot before you play.",
    ],
    related: [
      { href: "/games", label: "Games" },
      { href: "/games/slots", label: "Slots" },
    ],
  },
  {
    slug: "mobile-guide",
    title: "Mobile guide",
    excerpt: "Play in the browser, from the home screen, or with the Android download.",
    category: "Download",
    updatedAt: "2026-09-25",
    steps: [
      "Mobile web needs no install and updates when you reload.",
      "iOS uses Add to Home Screen so the lobby opens like an app.",
      "Android can use the download published on the download page.",
      "Use a current version of Chrome or Safari and a stable connection.",
    ],
    related: [
      { href: "/download", label: "Download" },
      { href: "/guides/how-to-login", label: "How to login" },
    ],
  },
  {
    slug: "account-guide",
    title: "Account guide",
    excerpt: "Keep login details, bank details, and verification in one place.",
    category: "Account",
    updatedAt: "2026-09-25",
    steps: [
      "Use one account. Shared or duplicate accounts can block withdrawals.",
      "Add a phone number and bank details when the lobby asks, before you request a payout.",
      "Referral links, when available, are under the share area of the profile.",
      "For agent or downline setup, use the agent page and contact support.",
    ],
    related: [
      { href: "/agent", label: "Agent" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const promotions = [
  {
    id: "welcome",
    title: "Welcome campaigns",
    description:
      "New players are invited to opt in to welcome campaigns for slots, live casino, and sports. The live terms, including any turnover, are shown on the offer before you claim it.",
    category: "Welcome",
  },
  {
    id: "daily",
    title: "Daily and extra slot campaigns",
    description:
      "The promotions desk publishes daily and extra slot campaigns. Check the current card in your account. Older campaign windows on the public site have closed.",
    category: "Slots",
  },
  {
    id: "rebate",
    title: "Rebate",
    description:
      "A rebate campaign has been published for eligible play. The rate and the products that count are stated on the offer, not assumed here.",
    category: "Rebate",
  },
  {
    id: "birthday",
    title: "Birthday reward",
    description:
      "A birthday reward has been offered to verified members. Eligibility is confirmed in the account after your profile date of birth is saved.",
    category: "Rewards",
  },
  {
    id: "referral",
    title: "Invite friends",
    description:
      "After login, the profile share area can provide a referral link. Friends register through that link. Reward details are on the current invite campaign.",
    category: "Referral",
  },
  {
    id: "missions",
    title: "Daily mission and redeem code",
    description:
      "The promotions index also lists daily missions and redeem codes. Codes and missions are entered inside the lobby when a campaign is active.",
    category: "Missions",
  },
] as const;

export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "account",
    title: "Account",
    items: [
      {
        q: "How do I open an E9WIN account?",
        a: "Use the register form, then continue in the player portal. Provide a real name, mobile number, and login you can verify later.",
      },
      {
        q: "How do I sign in?",
        a: "Enter the username and password from registration. This website does not keep you logged in. Play happens in the lobby.",
      },
      {
        q: "What if I forget the password?",
        a: "Use the recovery step inside the player lobby, or message support on WhatsApp with the username. Do not send the password in chat.",
      },
    ],
  },
  {
    id: "games",
    title: "Games",
    items: [
      {
        q: "Which games are on E9WIN?",
        a: "The public catalog includes slots and live tables from Pragmatic Play, Evolution, Playtech, and Lucky365, plus sports, 4D lottery, fishing, and esports.",
      },
      {
        q: "Can I play on a phone?",
        a: "Yes. Use mobile web, add the site to the iPhone home screen, or download on Android from the official download link.",
      },
    ],
  },
  {
    id: "download",
    title: "Download",
    items: [
      {
        q: "Is there an official App Store or Google Play listing?",
        a: "The E9WIN download page publishes an Android download and an iOS add-to-home-screen guide. It does not link to an Apple or Google store listing, so this site does not claim one.",
      },
      {
        q: "Do I have to install an app?",
        a: "No. The web version runs in the browser on Windows, Mac, Linux, iOS, and Android.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    items: [
      {
        q: "Which payment methods are shown?",
        a: "Published marks include Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, BSN, Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT. The cashier also lists instant transfer, telco PIN, and bank transfer.",
      },
      {
        q: "How long does a withdrawal take?",
        a: "The platform does not publish a guaranteed time. It depends on the method and any account checks. Confirm the status in the withdrawal history.",
      },
    ],
  },
  {
    id: "promotions",
    title: "Promotions",
    items: [
      {
        q: "Where are the current bonus figures?",
        a: "Campaign cards inside the account show the amount, minimum, turnover, and end date. Figures from late 2024 on the public promotion page are not treated as live offers here.",
      },
      {
        q: "How do I claim a promotion?",
        a: "Open the promotion in the lobby and follow the opt-in on that card. Some offers ask for a verified phone number and bank details first.",
      },
    ],
  },
  {
    id: "agent",
    title: "Agent",
    items: [
      {
        q: "How do I become an agent?",
        a: "Contact support and ask for the agent application. The public page describes downline commission without stating a rate.",
      },
      {
        q: "Where is the referral link?",
        a: "After login, open the profile and look under Share. That is where E9WIN tells members to copy a referral link.",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    items: [
      {
        q: "How do I reach support?",
        a: "WhatsApp and the Facebook page are the published public channels. The lobby also refers players to live chat when they are signed in.",
      },
      {
        q: "Is there a published email or phone number?",
        a: "The public pages mention mail and telephone in general, but they do not print an address or number. This site does not invent one.",
      },
    ],
  },
];
