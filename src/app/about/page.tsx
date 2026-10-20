import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Maison Artisan now sells handmade leather goods directly to the person who will carry them.",
};

const milestones = [
  {
    year: "2018",
    title: "The bench",
    text: "The studio opened to cut leather for other companies. The buyer was always a business.",
  },
  {
    year: "2021",
    title: "A shop of our own",
    text: "We stopped waiting for purchase orders and started finishing pieces with a retail price on them.",
  },
  {
    year: "2024",
    title: "Eight pieces",
    text: "Totes, a crossbody, a duffle, wallets, a belt, a journal, and a pouch. Enough to choose, not a catalogue of hundreds.",
  },
  {
    year: "Now",
    title: "Sold to you",
    text: "You pick a color, add the piece to your bag, and we cut it. One person, one hide, one order.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-charcoal-800">
        <div className="container-luxury max-w-3xl">
          <span className="section-label text-gold-400">Our story</span>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory-50 leading-tight">
            From the bench<br />
            <em className="text-gold-300">to your hands</em>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-ivory-50">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1000&q=85&fit=crop"
              alt="A black leather bag from the shop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-5 text-charcoal-700/70 leading-relaxed">
            <p>
              Maison Artisan spent its first years making goods that left the studio in cartons, headed for someone else&apos;s brand. The leather was good. The customer never met us.
            </p>
            <p>
              The shop you are in now is the correction. The same hides, the same saddle stitch, and a price you can see before you write to anyone. Add a piece to your bag when you want it.
            </p>
            <p>
              We still work slowly. A weekend duffle is not a next-day object. What changed is who it is for.
            </p>
            <Link href="/collections" className="btn-ghost">
              Shop the pieces
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury max-w-3xl">
          <span className="section-label">Timeline</span>
          <div className="space-y-10">
            {milestones.map((item) => (
              <div key={item.year} className="grid grid-cols-12 gap-6">
                <p className="col-span-3 font-display text-2xl text-gold-500">{item.year}</p>
                <div className="col-span-9">
                  <h2 className="font-display text-2xl text-charcoal-800 mb-2">{item.title}</h2>
                  <p className="text-charcoal-700/70 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
