import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const sans = Outfit({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "E9WIN | Malaysia Online Gaming", template: "%s | E9WIN" },
  description: siteConfig.description,
  icons: { icon: siteConfig.favicon },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    sameAs: [siteConfig.support.facebook],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
  return (
    <html lang="en-MY">
      <body className={sans.variable}>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={[org, website]} />
      </body>
    </html>
  );
}
