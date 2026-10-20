"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    label: "Made with Heart",
    text: "Every stitch, every fold, every ribbon - placed with intention.",
  },
  {
    icon: Award,
    label: "Uncompromising Quality",
    text: "We inspect every piece before it leaves our atelier.",
  },
  {
    icon: Leaf,
    label: "Sustainably Sourced",
    text: "FSC-certified paper, water-based inks, minimal waste.",
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
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=85&fit=crop"
                alt="Artisan workshop crafting luxury bags by hand"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            {/* Small accent image - offset bottom-right */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 w-36 h-36 lg:w-48 lg:h-48 overflow-hidden border-4 border-ivory-50 hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=85&fit=crop"
                alt="Natural sustainable materials"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            {/* Quote accent */}
            <div className="absolute top-8 -left-4 lg:-left-8 max-w-[180px] bg-gold-500 p-5 hidden lg:block">
              <p className="font-serif italic text-ivory-50 text-sm leading-relaxed">
                &ldquo;Handmade is not a limitation. It&apos;s our greatest advantage.&rdquo;
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
                Maison Artisan was founded on a simple conviction: that the packaging
                around a gift should be as thoughtful as the gift itself. In a world of
                mass production, we chose a different path - one where every bag is cut,
                folded, and finished by hand.
              </p>
              <p>
                Our atelier brings together traditional papercraft techniques and modern
                design sensibility to create packaging that elevates every occasion. From
                intimate weddings in the Cotswolds to flagship retail launches in Manhattan,
                our work has graced some of the world&apos;s most discerning events.
              </p>
              <p>
                We believe in the permanence of a beautiful object. Our bags aren&apos;t
                discarded - they&apos;re kept, repurposed, remembered. That&apos;s the
                Maison Artisan promise.
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
