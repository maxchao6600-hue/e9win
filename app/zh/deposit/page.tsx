import { DepositView } from "@/components/views/DepositView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("deposit", "zh");

export default function ZhDepositPage() {
  return <DepositView locale="zh" />;
}
