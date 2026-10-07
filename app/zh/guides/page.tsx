import type { Metadata } from "next";
import { GuidesHub, guidesMetadata } from "@/components/views/GuidesHub";

export const metadata: Metadata = guidesMetadata("zh");

export default function ZhGuidesPage() {
  return <GuidesHub locale="zh" />;
}
