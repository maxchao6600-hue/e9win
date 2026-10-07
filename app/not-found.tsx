import type { Metadata } from "next";
import { NotFoundView } from "@/components/layout/NotFoundView";

export const metadata: Metadata = {
  title: { absolute: "Page not found | E9WIN" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundView />;
}
