import { DepositView } from "@/components/views/DepositView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("deposit", "en");

export default function DepositPage() {
  return <DepositView locale="en" />;
}
