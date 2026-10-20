import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maison Artisan - Handmade Leather Goods",
    template: "%s | Maison Artisan",
  },
  description:
    "Handmade leather bags, wallets, and small goods, sold directly to you. Full-grain hides, saddle-stitched, ready to add to your bag.",
  keywords: [
    "handmade leather tote",
    "leather crossbody bag",
    "leather wallet",
    "full grain leather goods",
    "vegetable tanned leather",
    "leather duffle",
    "artisan leather accessories",
  ],
  authors: [{ name: "Maison Artisan" }],
  creator: "Maison Artisan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maisonartisan.com",
    siteName: "Maison Artisan",
    title: "Maison Artisan - Handmade Leather Goods",
    description:
      "Handmade leather bags, wallets, and small goods, sold directly to you.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Artisan handmade leather goods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Artisan - Handmade Leather Goods",
    description:
      "Handmade leather bags, wallets, and small goods, sold directly to you.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className="font-sans bg-ivory-50 text-charcoal antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
