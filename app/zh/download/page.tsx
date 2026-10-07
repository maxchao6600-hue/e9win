import { DownloadView, downloadMetadata } from "@/components/views/DownloadView";

export const metadata = downloadMetadata("zh");

export default function ZhDownloadPage() {
  return <DownloadView locale="zh" />;
}
