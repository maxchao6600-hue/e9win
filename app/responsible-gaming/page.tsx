import { ResponsibleView } from "@/components/views/ResponsibleView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("responsible", "en");

export default function ResponsiblePage() {
  return <ResponsibleView locale="en" />;
}
