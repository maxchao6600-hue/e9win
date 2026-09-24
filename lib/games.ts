export type GameCategory =
  | "slots"
  | "live-casino"
  | "sports"
  | "lottery"
  | "fishing"
  | "esports";

export type Game = {
  id: string;
  name: string;
  provider: string;
  category: GameCategory;
  image: string;
  featured?: boolean;
};

export const categories: {
  slug: GameCategory;
  title: string;
  short: string;
  description: string;
  image: string | null;
}[] = [
  {
    slug: "slots",
    title: "Slots",
    short: "Video slots from studios in the E9WIN lobby.",
    description:
      "Slots in the lobby include titles from Pragmatic Play, Playtech, Lucky365, and other studios in the catalog.",
    image: "/images/games/gates-of-olympus.webp",
  },
  {
    slug: "live-casino",
    title: "Live Casino",
    short: "Baccarat, roulette, blackjack, and sic bo with live tables.",
    description:
      "Live tables include baccarat, roulette, sic bo, dragon tiger, and game shows from Evolution and Playtech.",
    image: "/images/games/lightning-baccarat.webp",
  },
  {
    slug: "sports",
    title: "Sports",
    short: "Sports betting, including football and horse racing.",
    description:
      "Sports markets include football events such as the World Cup and the Premier League, plus live horse racing in the catalog.",
    image: "/images/games/horse-racing.webp",
  },
  {
    slug: "lottery",
    title: "Lottery",
    short: "4D games including Magnum, Da Ma Cai, Toto, and Singapore.",
    description:
      "4D lottery covers Magnum, Da Ma Cai, Toto, and Singapore. Draw details open in the lobby.",
    image: null,
  },
  {
    slug: "fishing",
    title: "Fishing",
    short: "Arcade fishing games in the Malaysia lobby.",
    description:
      "Fishing games sit in the lobby next to slots and live tables. The current list opens after you sign in.",
    image: null,
  },
  {
    slug: "esports",
    title: "Esports",
    short: "Esports markets offered with the sportsbook.",
    description:
      "Esports markets are offered with the sportsbook and open after you sign in.",
    image: null,
  },
];

export const games: Game[] = [
  { id: "gates-of-olympus", name: "Gates of Olympus", provider: "Pragmatic Play", category: "slots", image: "/images/games/gates-of-olympus.webp", featured: true },
  { id: "gates-of-olympus-1000", name: "Gates of Olympus 1000", provider: "Pragmatic Play", category: "slots", image: "/images/games/gates-of-olympus-1000.webp", featured: true },
  { id: "starlight-princess", name: "Starlight Princess", provider: "Pragmatic Play", category: "slots", image: "/images/games/starlight-princess.webp", featured: true },
  { id: "sweet-bonanza", name: "Sweet Bonanza", provider: "Pragmatic Play", category: "slots", image: "/images/games/sweet-bonanza.webp", featured: true },
  { id: "sugar-rush", name: "Sugar Rush", provider: "Pragmatic Play", category: "slots", image: "/images/games/sugar-rush.webp", featured: true },
  { id: "the-dog-house", name: "The Dog House", provider: "Pragmatic Play", category: "slots", image: "/images/games/the-dog-house.webp" },
  { id: "fruit-party", name: "Fruit Party", provider: "Pragmatic Play", category: "slots", image: "/images/games/fruit-party.webp" },
  { id: "aztec-gems", name: "Aztec Gems", provider: "Pragmatic Play", category: "slots", image: "/images/games/aztec-gems.webp" },
  { id: "madame-destiny", name: "Madame Destiny", provider: "Pragmatic Play", category: "slots", image: "/images/games/madame-destiny.webp" },
  { id: "5-lions-megaways", name: "5 Lions Megaways", provider: "Pragmatic Play", category: "slots", image: "/images/games/5-lions-megaways.webp", featured: true },
  { id: "gates-of-gatot-kaca", name: "Gates of Gatot Kaca", provider: "Pragmatic Play", category: "slots", image: "/images/games/gates-of-gatot-kaca.webp" },
  { id: "mahjong-wins", name: "Mahjong Wins", provider: "Pragmatic Play", category: "slots", image: "/images/games/mahjong-wins.webp", featured: true },
  { id: "wild-west-gold", name: "Wild West Gold", provider: "Pragmatic Play", category: "slots", image: "/images/games/wild-west-gold.webp" },
  { id: "cleocatra", name: "Cleocatra", provider: "Pragmatic Play", category: "slots", image: "/images/games/cleocatra.webp" },
  { id: "candy-blitz", name: "Candy Blitz", provider: "Pragmatic Play", category: "slots", image: "/images/games/candy-blitz.webp" },
  { id: "great-blue", name: "Great Blue", provider: "Lucky365", category: "slots", image: "/images/games/great-blue.webp", featured: true },
  { id: "zeus", name: "Zeus", provider: "Lucky365", category: "slots", image: "/images/games/zeus.webp" },
  { id: "dolphin-reef", name: "Dolphin Reef", provider: "Lucky365", category: "slots", image: "/images/games/dolphin-reef.webp" },
  { id: "egypt-queen", name: "Egypt Queen", provider: "Lucky365", category: "slots", image: "/images/games/egypt-queen.webp" },
  { id: "big-money", name: "Big Money", provider: "Lucky365", category: "slots", image: "/images/games/big-money.webp" },
  { id: "god-of-wealth", name: "God of Wealth", provider: "Lucky365", category: "slots", image: "/images/games/god-of-wealth.webp" },
  { id: "lightning-baccarat", name: "Lightning Baccarat", provider: "Evolution", category: "live-casino", image: "/images/games/lightning-baccarat.webp", featured: true },
  { id: "xxxtreme-lightning-baccarat", name: "XXXtreme Lightning Baccarat", provider: "Evolution", category: "live-casino", image: "/images/games/xxxtreme-lightning-baccarat.webp" },
  { id: "crazy-coin-flip", name: "Crazy Coin Flip", provider: "Evolution", category: "live-casino", image: "/images/games/crazy-coin-flip.webp", featured: true },
  { id: "mega-ball", name: "Mega Ball", provider: "Evolution", category: "live-casino", image: "/images/games/mega-ball.webp" },
  { id: "dragon-tiger", name: "Dragon Tiger", provider: "Evolution", category: "live-casino", image: "/images/games/dragon-tiger.webp" },
  { id: "bac-bo", name: "Bac Bo", provider: "Evolution", category: "live-casino", image: "/images/games/bac-bo.webp" },
  { id: "super-sic-bo", name: "Super Sic Bo", provider: "Evolution", category: "live-casino", image: "/images/games/super-sic-bo.webp" },
  { id: "andar-bahar", name: "Andar Bahar", provider: "Evolution", category: "live-casino", image: "/images/games/andar-bahar.webp" },
  { id: "cash-or-crash", name: "Cash or Crash", provider: "Evolution", category: "live-casino", image: "/images/games/cash-or-crash.webp" },
  { id: "fan-tan", name: "Fan Tan", provider: "Evolution", category: "live-casino", image: "/images/games/fan-tan.webp" },
  { id: "gonzos-treasure-map", name: "Gonzo's Treasure Map", provider: "Evolution", category: "live-casino", image: "/images/games/gonzos-treasure-map.webp" },
  { id: "gold-vault-roulette", name: "Gold Vault Roulette", provider: "Evolution", category: "live-casino", image: "/images/games/gold-vault-roulette.webp" },
  { id: "pt-baccarat", name: "Baccarat", provider: "Playtech", category: "live-casino", image: "/images/games/pt-baccarat.webp", featured: true },
  { id: "pt-vip-baccarat", name: "VIP Baccarat", provider: "Playtech", category: "live-casino", image: "/images/games/pt-vip-baccarat.webp" },
  { id: "pt-roulette", name: "Roulette", provider: "Playtech", category: "live-casino", image: "/images/games/pt-roulette.webp" },
  { id: "pt-quantum-roulette", name: "Quantum Roulette", provider: "Playtech", category: "live-casino", image: "/images/games/pt-quantum-roulette.webp" },
  { id: "pt-holdem", name: "Casino Hold'em", provider: "Playtech", category: "live-casino", image: "/images/games/pt-holdem.webp" },
  { id: "pt-stud", name: "Casino Stud Poker", provider: "Playtech", category: "live-casino", image: "/images/games/pt-stud.webp" },
  { id: "pt-teen-patti", name: "Teen Patti", provider: "Playtech", category: "live-casino", image: "/images/games/pt-teen-patti.webp" },
  { id: "pt-big-bad-wolf", name: "Big Bad Wolf", provider: "Playtech", category: "live-casino", image: "/images/games/pt-big-bad-wolf.webp" },
  { id: "horse-racing", name: "Live Horse Racing", provider: "RCB", category: "sports", image: "/images/games/horse-racing.webp", featured: true },
];

export function gamesByCategory(category: GameCategory) {
  return games.filter((game) => game.category === category);
}

export function featuredGames() {
  return games.filter((game) => game.featured);
}

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
