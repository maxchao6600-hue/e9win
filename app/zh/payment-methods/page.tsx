import { PaymentView } from "@/components/views/PaymentView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("payments", "zh");

export default function ZhPaymentMethodsPage() {
  return <PaymentView locale="zh" />;
}
