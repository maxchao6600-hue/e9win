import { WithdrawalView } from "@/components/views/WithdrawalView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("withdrawal", "zh");

export default function ZhWithdrawalPage() {
  return <WithdrawalView locale="zh" />;
}
