"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    label: "Sold direct",
    text: "You buy from the studio. There is no boutique markup and no wholesale desk.",
  },
  {
    icon: Award,
    label: "Inspected by hand",
    text: "Edges, stitches, and hardware are checked before a piece is packed.",
  },
  {
    icon: Leaf,
    label: "Hides, not paper",
    text: "Full-grain and bridle leather that can be conditioned and repaired.",
  },
];

export default function BrandStory() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50 overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images column */}
          <div className="lg:col-span-5 relative">
            {/* Tall primary image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=800&q=85&fit=crop"
                alt="Hands working a piece of leather"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            {/* Small accent image - offset bottom-right */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 w-36 h-36 lg:w-48 lg:h-48 overflow-hidden border-4 border-ivory-50 hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=85&fit=crop"
                alt="Black leather bag with a simple silhouette"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            {/* Quote accent */}
            <div className="absolute top-8 -left-4 lg:-left-8 max-w-[180px] bg-gold-500 p-5 hidden lg:block">
              <p className="font-serif italic text-ivory-50 text-sm leading-relaxed">
                &ldquo;One hide. One person. One piece.&rdquo;
              </p>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 lg:pl-8">
            <span className="section-label">Our Story</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 mb-6 leading-tight">
              Born from a love of<br />
              <em>beautiful things</em>
            </h2>
            <div className="space-y-5 text-charcoal-700/70 leading-relaxed mb-10">
              <p>
                Maison Artisan began as a studio making goods for other businesses. The work was careful, and the buyer was always a company. We changed that.
              </p>
              <p>
                The shop is now for the person who will carry the piece. Full-grain totes, a saddle crossbody, wallets, a belt, a journal cover. Prices are on the page. You add what you want.
              </p>
              <p>
                The leather is still cut by hand. The difference is who it is for: you, not a purchasing department.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.label} className="border-t border-ivory-200 pt-5">
                    <Icon size={20} className="text-gold-500 mb-3" />
                    <h4 className="font-serif text-charcoal-800 font-medium mb-1.5">{v.label}</h4>
                    <p className="text-xs text-charcoal-700/50 leading-relaxed">{v.text}</p>
                  </div>
                );
              })}
            </div>

            <Link href="/about" className="btn-ghost group">
              Read Our Full Story
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
