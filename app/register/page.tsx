import { RegisterView } from "@/components/views/RegisterView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("register", "en");

export default function RegisterPage() {
  return <RegisterView locale="en" />;
}
