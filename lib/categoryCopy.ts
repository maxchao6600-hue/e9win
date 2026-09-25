import type { GameCategory } from "@/lib/games";

export type CopySection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type CopyFaq = { q: string; a: string };
export type CopyLink = { href: string; label: string };

export type CategoryPageCopy = {
  lead: string;
  sections: CopySection[];
  faq: CopyFaq[];
  links: CopyLink[];
};

export const categoryCopy: Record<GameCategory, CategoryPageCopy> = {
  slots: {
    lead: "The public slots list is a set of video slots you can recognise before you open the lobby. Each thumbnail is a real title from that catalog, not a symbol for the whole category.",
    sections: [
      {
        title: "What you can browse here",
        paragraphs: [
          "This page shows Pragmatic Play and Lucky365 slots that are stored with the site. Opening a game still happens in the player lobby, where the paytable and stake range are shown.",
          "The wider lobby description also names Playtech among slot studios. If a Playtech slot is not in the thumbnail grid, it is not published as a cover on this site.",
        ],
      },
      {
        title: "How a slot is presented",
        paragraphs: [
          "Covers are square artwork. The title and studio sit under the image so the name printed on the art is not the only label.",
          "Rules are not rewritten here. Volatility, features, and maximums belong on the game’s own paytable.",
        ],
        list: [
          "Use search on the games page when you already know a title.",
          "Use this category when you want the slot grid only.",
          "Check the stake range inside the game before the first spin.",
        ],
      },
      {
        title: "Mobile",
        paragraphs: [
          "The same catalog opens in the mobile browser. An iPhone can use Safari’s Add to Home Screen. Android can use the download on the download page, which goes to the player portal. There is no App Store or Google Play listing to follow.",
        ],
      },
      {
        title: "Before you play",
        paragraphs: [
          "A promotion may limit which slots count. Read that card in the account. This page does not restate bonus values.",
          "Set a budget on the responsible gaming page before you deposit. The cashier does not publish a guaranteed processing time.",
        ],
      },
    ],
    faq: [
      { q: "Which studios have covers on this page?", a: "Pragmatic Play and Lucky365. Other studios may exist in the lobby without a cover published here." },
      { q: "Can I read the paytable on this site?", a: "No. The paytable and stake range open with the game in the lobby." },
      { q: "Are these the only slots?", a: "They are the slots with artwork in the public catalog. The lobby can show more after you sign in." },
    ],
    links: [
      { href: "/games", label: "All games" },
      { href: "/guides/slots-guide", label: "Slots guide" },
      { href: "/promotions", label: "Promotions" },
      { href: "/deposit", label: "Deposit" },
    ],
  },
  "live-casino": {
    lead: "Live casino on this site means tables and game shows with published covers: baccarat, roulette, sic bo, dragon tiger, and related titles from Evolution and Playtech.",
    sections: [
      {
        title: "What the covers are",
        paragraphs: [
          "Each card is a live title, often shown with the presenter used on that game’s own artwork. The grid is a lobby of those titles, not a photograph of a physical table.",
          "Blackjack is named in the category description. If a blackjack cover is not in the grid, do not assume a specific table is published here.",
        ],
      },
      {
        title: "How a live table differs from a slot",
        paragraphs: [
          "A slot resolves on the game client. A live table follows the round the studio is dealing. Stake limits and side bets are on that table, and they can differ between baccarat, roulette, and sic bo.",
          "VIP Baccarat in the catalog is a Playtech table name. It is not the same thing as VIP membership.",
        ],
      },
      {
        title: "Getting to a table",
        paragraphs: [
          "Pick a cover, then continue in the lobby. The stream, the chip denominations, and the round timer are part of the table, not this page.",
        ],
        list: [
          "Sign in before you expect a seat or a bet to be accepted.",
          "Read the table limits before you commit a stake.",
          "Use the games guide if you are choosing between slots and live tables.",
        ],
      },
    ],
    faq: [
      { q: "Which live studios are in the grid?", a: "Evolution and Playtech titles that have covers in the catalog." },
      { q: "Is VIP Baccarat the membership programme?", a: "No. VIP Baccarat is a table name. Membership is described on the VIP page, without unpublished cash figures." },
    ],
    links: [
      { href: "/games", label: "All games" },
      { href: "/guides/live-casino-guide", label: "Live casino guide" },
      { href: "/vip", label: "VIP" },
      { href: "/guides/how-to-login", label: "How to login" },
    ],
  },
  sports: {
    lead: "Sports on E9WIN is the sportsbook plus one catalogued product: live horse racing. Football is named in the public description, including the World Cup and the Premier League. This page does not list fixtures or odds.",
    sections: [
      {
        title: "What is published",
        paragraphs: [
          "Live horse racing is the sports title with artwork in the catalog. Other markets, including football, are described as available and open after you sign in.",
          "No odds, scores, or kickoff times are stored on this website. If a number is not on the sportsbook screen, it is not a fact this page can repeat.",
        ],
      },
      {
        title: "How to use the sportsbook",
        paragraphs: [
          "Sign in, open sports, and read the market list the lobby shows that day. Market names and whether a bet is still open are decided there.",
        ],
        list: [
          "Horse racing is the event type you can preview from the thumbnail.",
          "Football markets are named, not fixture-listed, on the public site.",
          "Esports is a separate category that sits with the sportsbook.",
        ],
      },
      {
        title: "Responsible betting",
        paragraphs: [
          "A sportsbook can keep markets open for a long session. Decide the stake before you open the slip. Deposit limits, when the account offers them, are described on the responsible gaming page.",
        ],
      },
    ],
    faq: [
      { q: "Why are there no odds on this page?", a: "Odds change and are not published as a static list. Read them in the lobby." },
      { q: "Is horse racing the only sports product with a cover?", a: "Yes. It is the sports artwork in the public catalog." },
    ],
    links: [
      { href: "/games/esports", label: "Esports" },
      { href: "/guides/sports-guide", label: "Sports guide" },
      { href: "/responsible-gaming", label: "Responsible gaming" },
      { href: "/download", label: "Mobile access" },
    ],
  },
  lottery: {
    lead: "4D on E9WIN names four games: Magnum, Da Ma Cai, Toto, and Singapore. Number selection and draw information open in the lobby. This page does not publish results or prize tiers.",
    sections: [
      {
        title: "What 4D means here",
        paragraphs: [
          "4D is a numbers game. You choose digits, and the draw decides the outcome. The public site names the four games above and does not reprint their official result tables.",
        ],
      },
      {
        title: "What you do in the lobby",
        paragraphs: [
          "Sign in, open lottery, and pick the game. The bet types, the stake, and the draw time are on that screen. Do not rely on a number you remember from an old slip.",
        ],
        list: [
          "Magnum, Da Ma Cai, Toto, and Singapore are the named games.",
          "Results are not mirrored on this website.",
          "A promotion card, if one applies, states whether lottery counts.",
        ],
      },
      {
        title: "How this differs from slots",
        paragraphs: [
          "A slot uses a game client and a paytable. 4D uses a number selection and a draw. They are separate categories, with separate guides.",
        ],
      },
    ],
    faq: [
      { q: "Can I see today’s draw here?", a: "No. Draw details open in the lobby." },
      { q: "Which games are named?", a: "Magnum, Da Ma Cai, Toto, and Singapore." },
    ],
    links: [
      { href: "/guides/lottery-guide", label: "4D guide" },
      { href: "/games", label: "All games" },
      { href: "/guides/how-to-register", label: "How to register" },
    ],
  },
  fishing: {
    lead: "Fishing is an arcade category in the lobby, next to slots and live tables. This site does not publish fishing covers, so there is no thumbnail grid to browse.",
    sections: [
      {
        title: "Why there is no game grid",
        paragraphs: [
          "Slot covers such as Great Blue or Dolphin Reef are slots, not fishing games. They are not used as fishing artwork.",
          "The fishing list is shown after you sign in. Rules and stakes are on each game.",
        ],
      },
      {
        title: "What to expect",
        paragraphs: [
          "Arcade fishing is played in a shared or solo scene where shots spend credit. The exact guns, rooms, and costs are inside the title, not summarised as a universal ruleset here.",
        ],
        list: [
          "Open the lobby and choose Fishing.",
          "Read the stake before you fire.",
          "Do not treat a slot with a sea theme as a fishing game.",
        ],
      },
      {
        title: "Mobile",
        paragraphs: [
          "Use the same access paths as the rest of the lobby: mobile web, an iPhone home-screen icon, or the Android portal download.",
        ],
      },
    ],
    faq: [
      { q: "Where are the fishing thumbnails?", a: "They are not in the public catalog. The list opens after sign-in." },
      { q: "Is Great Blue a fishing game?", a: "No. Great Blue is a Lucky365 slot." },
    ],
    links: [
      { href: "/games/slots", label: "Slots" },
      { href: "/guides/fishing-guide", label: "Fishing guide" },
      { href: "/download", label: "Open the lobby" },
    ],
  },
  esports: {
    lead: "Esports markets are offered with the sportsbook. There is no public fixture list, no scores, and no esports cover art on this site.",
    sections: [
      {
        title: "What is published",
        paragraphs: [
          "The category exists so you can find esports separately from football and horse racing. The matches themselves are in the lobby after you sign in.",
        ],
      },
      {
        title: "How it relates to sports",
        paragraphs: [
          "Use the sports page for horse racing artwork and the football names that are already published. Use this page when you want the esports path and its limits: no odds are printed here.",
        ],
        list: [
          "Sign in and open esports from the sportsbook area.",
          "Read whether a market is still open on that screen.",
          "Ignore any score you did not see in the lobby.",
        ],
      },
    ],
    faq: [
      { q: "Which esports titles are listed?", a: "None are published as a static list. The lobby shows the markets that are open." },
      { q: "Are odds shown on this page?", a: "No." },
    ],
    links: [
      { href: "/games/sports", label: "Sports" },
      { href: "/guides/esports-guide", label: "Esports guide" },
      { href: "/responsible-gaming", label: "Responsible gaming" },
    ],
  },
};
