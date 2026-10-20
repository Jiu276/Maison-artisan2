"use client";

import Image from "next/image";
import { Leaf, Brush, Globe, Package, Star } from "lucide-react";

const features = [
  {
    icon: Brush,
    title: "Cut and stitched by hand",
    description:
      "Each piece is saddle-stitched with waxed linen. You can see the stitches. They are meant to be repaired, not replaced.",
  },
  {
    icon: Star,
    title: "A price, not a quote",
    description:
      "These are retail pieces. The number on the page is the number you pay. There is no minimum order and no proposal to wait for.",
  },
  {
    icon: Package,
    title: "Full-grain hides",
    description:
      "We use the top of the hide, vegetable-tanned where the piece should darken with use, and bridle leather where it should stay firm.",
  },
  {
    icon: Globe,
    title: "Ships to your door",
    description:
      "Complimentary shipping. A piece leaves the studio for you, not for a warehouse or a boutique buyer.",
  },
  {
    icon: Leaf,
    title: "Made to be kept",
    description:
      "Leather that can be conditioned and restitched will outlast a season. We offer a year of complimentary stitch repairs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-800 overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image column */}
          <div className="relative">
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=85&fit=crop"
                alt="Cognac leather tote with structured sides"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 lg:w-64 lg:h-64 border-4 border-charcoal-800 overflow-hidden hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=85&fit=crop"
                alt="Close view of a slim leather wallet"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
            {/* Stat badge */}
            <div className="absolute top-8 -right-6 lg:-right-10 bg-gold-500 px-6 py-5 hidden sm:block">
              <p className="font-display text-3xl text-ivory-50 leading-none">8+</p>
              <p className="text-[10px] tracking-widest uppercase text-ivory-200/80 font-sans mt-1">
                Years of<br />Excellence
              </p>
            </div>
          </div>

          {/* Right: content column */}
          <div>
            <span className="section-label text-gold-400">Why Maison Artisan</span>
            <h2 className="font-display text-4xl lg:text-5xl text-ivory-50 mb-6 leading-tight">
              The difference is in<br />
              <em className="text-gold-300">the details</em>
            </h2>
            <p className="text-ivory-200/60 mb-12 leading-relaxed max-w-md">
              We do not make packaging for other brands. We make leather goods you can buy, carry, and keep.
            </p>

            <div className="space-y-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-10 h-10 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300">
                      <Icon size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-serif text-ivory-50 text-lg mb-1 font-medium">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-ivory-200/50 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
