// Root layout: wraps every page in the site. This is where the <html> and
// <body> tags live, where the fonts and Header/Footer are set up once for
// all pages, and where the default page title / description / social
// preview text (metadata below) comes from.
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

// next/font/google downloads and self-hosts these fonts at build time, so
// the browser doesn't have to fetch them from Google separately.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

// `metadata` here is the SITE-WIDE default (page title, description, and
// what shows up when this link is shared on LinkedIn/Twitter/etc). Individual
// pages can override just the `title` by exporting their own `metadata`
// (see app/about/page.tsx for an example).
export const metadata: Metadata = {
  // metadataBase turns the relative image path from app/opengraph-image.tsx
  // into a full URL (https://samantharodrigo.com/opengraph-image) when
  // social platforms fetch it.
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Growth PM building financial products that unlock opportunity for underserved communities across emerging markets.",
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Growth PM building financial products that unlock opportunity for underserved communities across emerging markets.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Growth PM building financial products that unlock opportunity for underserved communities across emerging markets.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        {/* `children` is whichever page.tsx matches the current URL
            (app/page.tsx for "/", app/about/page.tsx for "/about", etc). */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
