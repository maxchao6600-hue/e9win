export type Depth = {
  covers: string[];
  notes: string[];
  mistakes: string[];
  trouble: { q: string; a: string }[];
  faq: { q: string; a: string }[];
};

export const guideDepth: Record<string, Depth> = {
  "how-to-register": {
    covers: ["Which fields the form asks for", "Why the payout name matters", "What this website does not store"],
    notes: [
      "The register form on this site checks the fields in the browser and then sends you toward the player lobby. It does not create a session here.",
      "Use a mobile number and a bank or e-wallet name you can verify later. A mismatch is a common reason a withdrawal waits.",
    ],
    mistakes: [
      "Opening a second account because the first login failed.",
      "Using a nickname that does not match the bank account.",
    ],
    trouble: [
      { q: "The form will not submit.", a: "Fill every required field with a real mobile number and a password you can retype. The page explains the missing field in the browser." },
    ],
    faq: [
      { q: "Is registration finished on this website?", a: "No. This site validates the form. The player lobby is where the account continues." },
    ],
  },
  "how-to-login": {
    covers: ["Where the password lives", "What to do if it is rejected", "Phone versus this website"],
    notes: ["This marketing site does not keep you signed in. After a successful check, play continues in the lobby."],
    mistakes: ["Sending the password to WhatsApp support. Send the username only."],
    trouble: [
      { q: "The password is rejected.", a: "Use the recovery step inside the player lobby, or message support with the username." },
    ],
    faq: [
      { q: "Can I stay logged in on e9winonline.com?", a: "No. The public site does not store a play session." },
    ],
  },
  "how-to-download": {
    covers: ["Android portal download", "iPhone home screen", "Browser lobby"],
    notes: [
      "There is no App Store or Google Play listing to install.",
      "The Android action opens the player portal linked from the download page. Do not use a file from another site.",
    ],
    mistakes: ["Searching a store for an E9WIN app.", "Installing an APK that did not come from the portal link."],
    trouble: [
      { q: "iPhone has no install button.", a: "Use Safari, then Share, then Add to Home Screen. That is the documented iOS path." },
    ],
    faq: [
      { q: "Does the web lobby need a patch?", a: "Reload the page. The public description says the web lobby updates when you load it." },
    ],
  },
  "deposit-guide": {
    covers: ["Instant transfer", "E-wallet", "Bank transfer", "Telco PIN", "USDT", "Credit to a friend"],
    notes: [
      "Copy the account, reference, or wallet address from the cashier at the time you pay. An old screenshot can point at a retired instruction.",
      "No minimum, maximum, or processing time is published as a guarantee on this site.",
    ],
    mistakes: ["Paying a number from a chat that is not on the cashier.", "Choosing the wrong USDT network."],
    trouble: [
      { q: "The wallet did not update.", a: "Keep the receipt and message support with the username. Timing depends on the method." },
    ],
    faq: [
      { q: "Which banks are shown?", a: "Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, and BSN, plus Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT." },
    ],
  },
  "withdrawal-guide": {
    covers: ["Matching the account name", "Where limits appear", "Promotion turnover"],
    notes: [
      "Withdraw to a bank or e-wallet in the same name as the profile.",
      "An active promotion can block a withdrawal until the card’s requirement is met. The amount is on the card, not here.",
    ],
    mistakes: ["Asking for a payout to someone else’s account.", "Assuming a fixed number of hours."],
    trouble: [
      { q: "The button is unavailable.", a: "Check for an unfinished promotion requirement or a missing bank profile, then ask support with the username." },
    ],
    faq: [
      { q: "Is friend credit a withdrawal?", a: "No. Credit to a friend is a separate cashier action." },
    ],
  },
  "games-guide": {
    covers: ["Covers versus sign-in lists", "Where rules live"],
    notes: ["Slots and live tables have public covers. Sports beyond horse racing, 4D results, fishing, and esports open after sign-in."],
    mistakes: ["Treating a slot thumbnail as a fishing game."],
    trouble: [{ q: "A category has no grid.", a: "Fishing, esports, and 4D do not publish thumbnail grids. Use the lobby." }],
    faq: [{ q: "Where do I start?", a: "Use the games page search for a known title, or open the category that matches the product." }],
  },
  "mobile-guide": {
    covers: ["Browser", "Home screen", "Android portal"],
    notes: ["A current phone browser is enough for the web lobby. E9WIN does not publish a device list."],
    mistakes: ["Expecting a desktop installer. The web version does not need one."],
    trouble: [{ q: "The lobby is slow.", a: "Use a stable connection and reload. This site does not publish a bandwidth requirement." }],
    faq: [{ q: "Which browsers are named?", a: "The mobile guide names a current Chrome or Safari. Other browsers are not certified here." }],
  },
  "account-guide": {
    covers: ["One account", "Profile details", "Referral link", "Agent path"],
    notes: ["Referral links, when available, are under Share in the profile after login. Commission rates are not printed."],
    mistakes: ["Sharing a login.", "Sending a password to support."],
    trouble: [{ q: "I cannot find Share.", a: "Sign in to the lobby first. The link is not on this public website." }],
    faq: [{ q: "Who handles agent setup?", a: "WhatsApp or Facebook support, after you ask. There is no published application fee." }],
  },
  "slots-guide": {
    covers: ["Public covers", "Paytables", "Promotions that name slots"],
    notes: ["Playtech is named in the lobby description. Only Pragmatic Play and Lucky365 slots have covers on this site."],
    mistakes: ["Assuming every slot in the world is in the thumbnail grid."],
    trouble: [{ q: "The art and the title disagree.", a: "Trust the title and studio printed under the image, then confirm inside the game." }],
    faq: [{ q: "Is there a demo mode?", a: "This site does not publish a demo switch. The lobby shows what that game offers." }],
  },
  "live-casino-guide": {
    covers: ["Evolution and Playtech covers", "Table limits", "VIP Baccarat versus membership"],
    notes: ["The round is dealt in the studio. This page cannot tell you the current shoe or the wheel result."],
    mistakes: ["Joining VIP membership because you opened VIP Baccarat."],
    trouble: [{ q: "The stream will not start.", a: "Check the connection and sign in again. Device requirements are not published." }],
    faq: [{ q: "Which games have covers?", a: "The live grid lists the Evolution and Playtech titles stored in the catalog, including baccarat, roulette, sic bo, and dragon tiger." }],
  },
  "sports-guide": {
    covers: ["Horse racing cover", "Named football competitions", "No odds archive"],
    notes: ["World Cup and Premier League are names in the public description, not a fixture list."],
    mistakes: ["Betting from a screenshot of an old price."],
    trouble: [{ q: "I cannot see a match.", a: "The sportsbook shows what is open after you sign in. This site does not mirror it." }],
    faq: [{ q: "Where is esports?", a: "It has its own category and guide. It is offered with the sportsbook." }],
  },
  "lottery-guide": {
    covers: ["Four named games", "No results table"],
    notes: ["Magnum, Da Ma Cai, Toto, and Singapore are the names to look for in the lobby."],
    mistakes: ["Copying a result from social media into a new slip without checking the lobby."],
    trouble: [{ q: "I need a past draw.", a: "Use the draw information inside the lottery game. It is not hosted here." }],
    faq: [{ q: "Are prize amounts listed?", a: "No." }],
  },
  "fishing-guide": {
    covers: ["No public covers", "Slots that are not fishing"],
    notes: ["Great Blue and Dolphin Reef stay in the slots category."],
    mistakes: ["Opening a slot because the art shows water."],
    trouble: [{ q: "The fishing page looks empty.", a: "That is expected. Sign in to see the title list." }],
    faq: [{ q: "Is there a universal fishing rule?", a: "No. Each game shows its own stake and rules." }],
  },
  "esports-guide": {
    covers: ["No fixture list", "Sportsbook placement"],
    notes: ["Scores and odds are not stored on this website."],
    mistakes: ["Using a controller icon or a random tournament poster as if it were an E9WIN market."],
    trouble: [{ q: "Which game is on tonight?", a: "Only the lobby can answer that." }],
    faq: [{ q: "Is esports the same page as sports?", a: "No. Sports has the horse-racing cover and the football names. Esports is the market path without that artwork." }],
  },
  "promotions-guide": {
    covers: ["Titles versus amounts", "Closed windows", "Where to opt in"],
    notes: ["Welcome, daily slots, rebate, birthday, referral, and missions are the published names. Rates are on the account card."],
    mistakes: ["Quoting a 2024 percentage as if it were live."],
    trouble: [{ q: "The homepage slider and the account disagree.", a: "The account card is the offer. The public page explains the type of campaign and points you there." }],
    faq: [{ q: "Do birthday and missions have banners?", a: "They are listed in writing. They are not in the homepage slider." }],
  },
  "responsible-gaming-guide": {
    covers: ["Budget first", "Account tools that are only described", "Where to ask for help"],
    notes: ["E9WIN is for adults 18 and over. Deposit limits and self-exclusion are described as account tools if the lobby offers them."],
    mistakes: ["Chasing a loss with a new deposit in the same session."],
    trouble: [{ q: "I cannot find a limit switch on this website.", a: "Look in the lobby account tools, or ask WhatsApp support. This page does not toggle the account." }],
    faq: [{ q: "Does this page give medical advice?", a: "No. It explains how to pause and where to ask. Use a counselling service you trust." }],
  },
};
