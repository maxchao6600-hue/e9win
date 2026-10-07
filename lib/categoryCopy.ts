import type { GameCategory } from "@/lib/games";

export type CopySection = {
  title: string;
  paragraphs: string[];
  list?: string[];
  steps?: string[];
  note?: string;
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
    lead: "E9WIN Slots brings the public slot catalog together so you can recognise a title before you open the lobby. Each thumbnail is a real cover from that catalog.",
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
        title: "How to choose a slot",
        paragraphs: [
          "Start with the title and the studio under the cover. If you already know the name, search the games page instead of scrolling the grid.",
          "The paytable inside the lobby is where stake range and rules live. This website does not reprint them, and it does not publish RTP or volatility figures for any title.",
        ],
        note: "RTP is the long-run return a studio prints on its own paytable. Volatility describes how uneven results can feel. Neither number is stored in the E9WIN public catalog, so neither is quoted here.",
      },
      {
        title: "What the covers actually include",
        paragraphs: [
          "The public slot grid is Pragmatic Play and Lucky365 artwork. Playtech is named in the lobby description. A Playtech slot without a cover on this site is not treated as published artwork.",
          "Sea-themed covers such as Great Blue and Dolphin Reef are Lucky365 slots. They are not fishing games.",
        ],
      },
      {
        title: "Mobile slots",
        paragraphs: [
          "The same covers open in the phone browser. Stake controls and the paytable are inside the game after you sign in, in portrait or landscape depending on the title.",
          "An iPhone can use Safari’s Add to Home Screen. Android can use the portal download on the download page. There is no store listing for slots.",
        ],
      },
      {
        title: "Before you play",
        paragraphs: [
          "A promotion may limit which slots count. Read that card in the account. This page does not restate bonus values.",
          "Decide the amount you can lose before you open the cashier. Deposit limits, when the lobby offers them, are account tools described on the responsible gaming page.",
        ],
      },
      {
        title: "If a slot will not open",
        paragraphs: [
          "A cover on this site is not a running game. Sign in through the lobby, then launch the title from there. If the name is missing after sign-in, it is not in the catalog this page can confirm.",
        ],
        steps: [
          "Confirm you are on the slots category, not fishing.",
          "Search the exact title from the card.",
          "Open the paytable before the first stake.",
          "If the client fails to load, reload on a current browser and ask WhatsApp support with the game name, not your password.",
        ],
      },
    ],
    faq: [
      { q: "Which studios have covers on this page?", a: "Pragmatic Play and Lucky365. Other studios may exist in the lobby without a cover published here." },
      { q: "Can I read the paytable on this site?", a: "No. The paytable and stake range open with the game in the lobby." },
      { q: "Are these the only slots?", a: "They are the slots with artwork in the public catalog. The lobby can show more after you sign in." },
      { q: "Does E9WIN publish RTP?", a: "Game-specific rules and any RTP figure belong on the paytable inside the lobby." },
      { q: "Is Great Blue a fishing game?", a: "No. It is a Lucky365 slot in this catalog." },
    ],
    links: [
      { href: "/games", label: "E9WIN Games" },
      { href: "/guides/slots-guide", label: "E9WIN Slots Guide" },
      { href: "/promotions", label: "Promotions" },
      { href: "/deposit", label: "Deposit" },
    ],
  },
  "live-casino": {
    lead: "E9WIN Live Casino shows the live tables that have published covers: baccarat, roulette, sic bo, dragon tiger, and related titles from Evolution and Playtech.",
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
      {
        title: "Tables you can recognise from the covers",
        paragraphs: [
          "Evolution covers in the catalog include Lightning Baccarat, XXXtreme Lightning Baccarat, Dragon Tiger, Super Sic Bo, Bac Bo, Andar Bahar, Mega Ball, Crazy Coin Flip, Cash or Crash, Fan Tan, Gonzo's Treasure Map, and Gold Vault Roulette.",
          "Playtech covers include Baccarat, VIP Baccarat, Roulette, Quantum Roulette, Casino Hold'em, Casino Stud Poker, Teen Patti, and Big Bad Wolf. Blackjack is named in the category description. If a blackjack cover is absent, a specific blackjack table is not published here.",
        ],
      },
      {
        title: "How a live round is used",
        paragraphs: [
          "You join the table the studio is dealing, read the limits on that screen, and place a stake before the round closes. The result comes from that table, not from a number printed on this website.",
          "Side bets and chip sizes differ by title. Compare them on the table you opened, not against a different baccarat or roulette cover.",
        ],
      },
      {
        title: "Mobile live casino",
        paragraphs: [
          "The same covers are available in the mobile lobby. A live stream needs a stable connection. If the video stalls, leave the table before you assume a stake was accepted, then reload and check the open round.",
        ],
      },
      {
        title: "If the table does not match the cover",
        paragraphs: [
          "The cover is the catalog artwork. The live screen is the current table. If the name on the cover is not in the lobby after sign-in, do not guess a substitute table.",
        ],
      },
    ],
    faq: [
      { q: "Which live studios are in the grid?", a: "Evolution and Playtech titles that have covers in the catalog." },
      { q: "Is VIP Baccarat the membership programme?", a: "No. VIP Baccarat is a table name. Membership is described on the VIP page, without unpublished cash figures." },
      { q: "Are table limits printed here?", a: "Table limits are shown on the live table after you sign in." },
      { q: "Is blackjack in the cover grid?", a: "It is named in the category description. A cover is published only when the catalog has artwork for that title." },
    ],
    links: [
      { href: "/games", label: "E9WIN Games" },
      { href: "/guides/live-casino-guide", label: "E9WIN Live Casino Guide" },
      { href: "/vip", label: "E9WIN VIP" },
      { href: "/guides/how-to-login", label: "How to login" },
    ],
  },
  sports: {
    lead: "E9WIN Sports is the sportsbook plus live horse racing in the public catalog. Football, including the World Cup and the Premier League, is named for the sportsbook. Current markets and prices open after you sign in.",
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
      {
        title: "What a market is",
        paragraphs: [
          "A market is the question the sportsbook offers about an event. The price of that market is the odds. This website does not store either the fixture or the price, so it cannot tell you what is open today.",
          "Football is named, including the World Cup and the Premier League. That is a description of the sportsbook, not a list of matches.",
        ],
      },
      {
        title: "Horse racing in the catalog",
        paragraphs: [
          "Live horse racing is the sports title with artwork, credited to RCB in the catalog. The cover lets you recognise the product. The race list and any prices are on the sportsbook after you sign in.",
        ],
      },
      {
        title: "Mobile sportsbook",
        paragraphs: [
          "Use the same phone paths as the rest of the lobby: mobile web, an iPhone home-screen icon, or the Android portal download. Read the slip on the device you are using before you confirm a stake.",
        ],
      },
      {
        title: "Esports is a separate path",
        paragraphs: [
          "Esports sits with the sportsbook but has its own page. It has no cover art and no fixture list here. Open that category when you want esports rather than horse racing or the named football competitions.",
        ],
      },
    ],
    faq: [
      { q: "Why are there no odds on this page?", a: "Current markets and prices are shown in the sportsbook after you sign in." },
      { q: "Is horse racing the only sports product with a cover?", a: "Yes. It is the sports artwork in the public catalog." },
      { q: "Which football competitions are named?", a: "The public description names the World Cup and the Premier League. It does not list fixtures." },
      { q: "Where do I read a price?", a: "On the sportsbook after you sign in. The price on that screen is the one the lobby is offering." },
    ],
    links: [
      { href: "/games", label: "E9WIN Games" },
      { href: "/games/esports", label: "E9WIN Esports" },
      { href: "/guides/sports-guide", label: "E9WIN Sports Guide" },
      { href: "/responsible-gaming", label: "Responsible gaming" },
      { href: "/download", label: "Mobile access" },
    ],
  },
  lottery: {
    lead: "E9WIN 4D Lottery names four games: Magnum, Da Ma Cai, Toto, and Singapore. Number selection and draw information open in the lobby.",
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
      {
        title: "The four named games",
        paragraphs: [
          "Magnum, Da Ma Cai, Toto, and Singapore are the 4D names published with E9WIN. Pick one inside the lobby. This page does not rank them and does not publish a schedule.",
        ],
      },
      {
        title: "What this page will not show",
        paragraphs: [
          "Draw results, winning numbers, prize tables, and odds are not stored here. If you need a result, read it in the lobby or from the operator, not from a screenshot in a chat.",
        ],
        note: "Bet types and stakes are chosen on the 4D screen after you sign in. They are not reprinted as a universal table on this website.",
      },
      {
        title: "Mobile 4D",
        paragraphs: [
          "Number selection uses the same lobby as desktop. On a phone, check the game name and the digits before you confirm. A home-screen icon or the Android portal is only an access path, not a different set of draws.",
        ],
      },
      {
        title: "If you cannot find 4D",
        paragraphs: [
          "Open the lottery area after sign-in. The public URL for this topic is /games/4d. The older /games/lottery address shows the same page and uses the 4D canonical.",
        ],
      },
    ],
    faq: [
      { q: "Can I see today’s draw here?", a: "Draw details open in the lobby for the game you select." },
      { q: "Which games are named?", a: "Magnum, Da Ma Cai, Toto, and Singapore." },
      { q: "Are payout tables listed?", a: "Stake and bet type are on the lobby screen for the game you open." },
      { q: "Is /games/lottery a different product?", a: "No. It is the older address for this 4D page. The canonical URL is /games/4d." },
    ],
    links: [
      { href: "/guides/lottery-guide", label: "E9WIN 4D Guide" },
      { href: "/games", label: "E9WIN Games" },
      { href: "/guides/how-to-register", label: "How to register" },
    ],
  },
  fishing: {
    lead: "E9WIN Fishing is an arcade category in the lobby, beside slots and live tables. The current list opens after you sign in.",
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
          "Use the same access paths as the rest of the lobby: mobile web, an iPhone home-screen icon, or the Android portal download. Fishing does not have a separate app.",
        ],
      },
      {
        title: "How fishing play is different",
        paragraphs: [
          "A fishing title spends credit on shots inside a scene. Rooms, guns, and the cost of a shot are part of that game. This page does not publish a shared price list, because those figures are not in the public catalog.",
        ],
      },
      {
        title: "How to browse after you sign in",
        paragraphs: [
          "Register or log in, open the lobby, and choose Fishing. Read the stake on the title you opened before you fire. If the category is missing, ask support with your username rather than downloading a game file from another site.",
        ],
        steps: [
          "Ignore slot covers with water, fish, or dolphins. Those titles stay in slots.",
          "Open Fishing only from the lobby menu.",
          "Check the credit cost shown on that game.",
          "Stop when the amount you set aside is gone.",
        ],
      },
      {
        title: "Why the page looks empty of covers",
        paragraphs: [
          "An empty thumbnail grid is the accurate state. Inventing fishing artwork would describe games this site cannot show. The sign-in screen on the category image says the list opens in the lobby.",
        ],
      },
    ],
    faq: [
      { q: "Where are the fishing thumbnails?", a: "The fishing list opens in the lobby after you sign in." },
      { q: "Is Great Blue a fishing game?", a: "No. Great Blue is a Lucky365 slot." },
      { q: "Is Dolphin Reef fishing?", a: "No. Dolphin Reef is also a Lucky365 slot." },
      { q: "Can I see room prices here?", a: "The cost of a shot is shown inside the fishing title." },
    ],
    links: [
      { href: "/games", label: "E9WIN Games" },
      { href: "/games/slots", label: "E9WIN Slots" },
      { href: "/guides/fishing-guide", label: "E9WIN Fishing Guide" },
      { href: "/download", label: "Open the lobby" },
    ],
  },
  esports: {
    lead: "E9WIN Esports sits with the sportsbook. Current markets open after you sign in.",
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
      {
        title: "What you will not find here",
        paragraphs: [
          "Teams, fixtures, scores, and odds are not stored on this website. A social post or a chat message is not an E9WIN market.",
        ],
      },
      {
        title: "How to open esports",
        paragraphs: [
          "Use the sportsbook after you sign in and choose the esports path. Mobile web, an iPhone home-screen icon, and the Android portal all reach the same lobby. None of them adds a fixture list to this page.",
        ],
        steps: [
          "Create or open the account you will stake from.",
          "Open esports inside the sportsbook, not the horse-racing cover.",
          "Read the market name and whether betting is still open.",
          "Leave markets that are not on that screen.",
        ],
      },
      {
        title: "Keeping the session bounded",
        paragraphs: [
          "Esports markets can stay open across a match. Decide the stake before you open the slip. The responsible gaming page explains pausing and the account tools the lobby may offer.",
        ],
      },
    ],
    faq: [
      { q: "Which esports titles are listed?", a: "The lobby shows the markets that are open. This page keeps the written explanation." },
      { q: "Are odds shown on this page?", a: "Prices are on the sportsbook screen after you sign in." },
      { q: "Is esports the same page as sports?", a: "No. Sports has the horse-racing cover and the named football competitions. Esports is the separate market path." },
      { q: "Can I trust a score from a chat?", a: "Only the sportsbook screen you are signed into can show the market E9WIN is offering." },
    ],
    links: [
      { href: "/games", label: "E9WIN Games" },
      { href: "/games/sports", label: "E9WIN Sports" },
      { href: "/guides/esports-guide", label: "E9WIN Esports Guide" },
      { href: "/responsible-gaming", label: "Responsible gaming" },
    ],
  },
};
