import { WithdrawalView } from "@/components/views/WithdrawalView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("withdrawal", "en");

export default function WithdrawalPage() {
  return <WithdrawalView locale="en" />;
}
