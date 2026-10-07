import { GamesView, gamesMetadata } from "@/components/views/GamesView";

export const metadata = gamesMetadata("en");

export default function GamesPage() {
  return <GamesView locale="en" />;
}
