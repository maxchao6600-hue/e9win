import { PaymentView } from "@/components/views/PaymentView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("payments", "en");

export default function PaymentMethodsPage() {
  return <PaymentView locale="en" />;
}
