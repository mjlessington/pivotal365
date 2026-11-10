import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces, Oswald } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/content";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-oswald", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], weight: ["300", "400"], variable: "--font-fraunces", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-dm-sans", display: "swap" });

const title = "Pivotal365 | Master the Art of the Quiet Pivot";
const description =
  "Pivotal365 is a year-long quiet pivot toward your best self, built on five stages: Identity, Vision, Structure, Adjustment and Reflection. Start with the Quiet Power Lifestyle Planner by Carlton Chapman.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  authors: [{ name: "Carlton Chapman" }],
  keywords: ["quiet power", "Pivotal365", "personal growth", "lifestyle planner", "goal setting", "identity", "Carlton Chapman", "mindset"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Pivotal365",
    title,
    description,
    url: "/",
    locale: "en_US",
    images: [{ url: "/bookCover.jpg", width: 1159, height: 1500, alt: "Pivotal365: The Quiet Power Lifestyle Planner by Carlton Chapman" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: "/bookCover.jpg", alt: "Pivotal365: The Quiet Power Lifestyle Planner by Carlton Chapman" }],
  },
};

export const viewport: Viewport = { themeColor: "#0A1220" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${fraunces.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Scroll reveals only hide content once JS is running, so no-JS visitors and crawlers see everything. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
