import type { Metadata } from "next";
import { GuidesHub, guidesMetadata } from "@/components/views/GuidesHub";

export const metadata: Metadata = guidesMetadata("en");

export default function GuidesPage() {
  return <GuidesHub locale="en" />;
}
