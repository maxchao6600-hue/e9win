import { TermsView } from "@/components/views/TermsView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("terms", "en");

export default function TermsPage() {
  return <TermsView locale="en" />;
}
