import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for browsing and adding Maison Artisan leather goods to your bag.",
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24 bg-ivory-50">
      <div className="container-luxury max-w-3xl">
        <span className="section-label">Legal</span>
        <h1 className="font-display text-5xl text-charcoal-800 mb-8">Terms of Service</h1>
        <div className="space-y-6 text-charcoal-700/70 leading-relaxed">
          <p>
            Maison Artisan offers handmade leather goods for personal purchase. Prices shown on each piece are retail prices in US dollars.
          </p>
          <p>
            Adding a piece to your bag reserves nothing and creates no order. Checkout is not available yet, so no payment is taken and no item is dispatched from the bag alone.
          </p>
          <p>
            Descriptions, colors, and photographs are a guide. Vegetable-tanned leather varies slightly from hide to hide.
          </p>
          <p>
            For a question about a piece, use the{" "}
            <Link href="/contact" className="text-charcoal-800 underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
