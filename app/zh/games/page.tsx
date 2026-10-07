import { GamesView, gamesMetadata } from "@/components/views/GamesView";

export const metadata = gamesMetadata("zh");

export default function ZhGamesPage() {
  return <GamesView locale="zh" />;
}
