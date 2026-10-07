import { AboutView } from "@/components/views/AboutView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("about", "en");

export default function AboutPage() {
  return <AboutView locale="en" />;
}
