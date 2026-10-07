import { DownloadView, downloadMetadata } from "@/components/views/DownloadView";

export const metadata = downloadMetadata("en");

export default function DownloadPage() {
  return <DownloadView locale="en" />;
}
