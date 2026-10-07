import { HomeView, homeMetadata } from "@/components/views/HomeView";

export const metadata = homeMetadata("zh");

export default function ZhHomePage() {
  return <HomeView locale="zh" />;
}
