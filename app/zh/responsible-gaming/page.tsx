import { ResponsibleView } from "@/components/views/ResponsibleView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("responsible", "zh");

export default function ZhResponsiblePage() {
  return <ResponsibleView locale="zh" />;
}
