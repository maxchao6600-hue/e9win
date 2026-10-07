import { ContactView } from "@/components/views/ContactView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("contact", "en");

export default function ContactPage() {
  return <ContactView locale="en" />;
}
