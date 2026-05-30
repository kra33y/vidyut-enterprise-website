import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: [
    "Earthing Electrode Supplier",
    "Chemical Earthing Electrode",
    "Copper Bonded Earthing Electrode",
    "Earthing Material Supplier",
    "Lightning Arrestor Supplier",
    "ESE Lightning Arrestor",
    "Earthing Contractor",
    "Industrial Electrical Supplier",
    "Earthing Products India",
    "Lightning Protection System"
  ],
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
