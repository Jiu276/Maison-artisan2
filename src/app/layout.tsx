import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "Maison Artisan - Luxury Custom Handmade Bags",
    template: "%s | Maison Artisan",
  },
  description:
    "Premium custom handmade bags crafted for weddings, luxury events, and global brands. Bespoke paper bags, gift packaging, and bridal collections made with the finest materials.",
  keywords: [
    "custom handmade bags",
    "custom wedding bags",
    "luxury gift bags",
    "personalized wedding favor bags",
    "custom paper bags wholesale",
    "branded packaging bags",
    "bespoke luxury packaging",
    "wedding favor packaging",
    "luxury gift packaging",
    "custom event bags",
  ],
  authors: [{ name: "Maison Artisan" }],
  creator: "Maison Artisan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maisonartisan.com",
    siteName: "Maison Artisan",
    title: "Maison Artisan - Luxury Custom Handmade Bags",
    description:
      "Premium custom handmade bags for weddings, luxury events, and global brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Artisan Luxury Handmade Bags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Artisan - Luxury Custom Handmade Bags",
    description:
      "Premium custom handmade bags for weddings, luxury events, and global brands.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
