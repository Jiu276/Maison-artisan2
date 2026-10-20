import type { Metadata } from "next";
import Link from "next/link";
import CollectionsBrowser from "@/components/CollectionsBrowser";

export const metadata: Metadata = {
  title: "Shop Handmade Leather",
  description:
    "Shop Maison Artisan leather totes, crossbody bags, wallets, belts, and small goods. Retail prices, ready to add to your bag.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-charcoal-800">
        <div className="container-luxury text-center">
          <span className="section-label text-gold-400">The shop</span>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory-50 mb-4">
            Leather goods<br />
            <em className="text-gold-300">made to be carried</em>
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto my-6" />
          <p className="text-ivory-200/60 max-w-xl mx-auto text-base leading-relaxed">
            Eight pieces, cut from full-grain hides and finished by hand. Choose a color, choose a quantity, and add it to your bag.
          </p>
        </div>
      </section>

      <CollectionsBrowser />

      <section className="py-16 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl text-charcoal-800 mb-3">
            A question about a hide or a size?
          </h2>
          <p className="text-charcoal-700/60 mb-8 max-w-md mx-auto">
            Write to the studio. We answer as the people who cut the leather, not as a wholesale desk.
          </p>
          <Link href="/contact" className="btn-primary">
            Write to the studio
          </Link>
        </div>
      </section>
    </>
  );
}
