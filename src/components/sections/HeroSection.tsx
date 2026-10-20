"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-charcoal-900">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1920&q=90&fit=crop"
          alt="Handmade full-grain leather bag"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-charcoal-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 via-transparent to-transparent" />
      </div>

      {/* Vertical brand marquee - decorative right side */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="h-16 w-px bg-ivory-200/20" />
        <span className="writing-vertical text-[10px] tracking-widest3 uppercase text-ivory-200/40 font-sans">
          Hand-cut · Est. 2018 · Sold direct
        </span>
        <div className="h-16 w-px bg-ivory-200/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container-luxury pb-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] tracking-widest3 uppercase text-gold-400 font-sans font-medium">
              Full-grain · Hand-stitched · For you
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ivory-50 mb-6 leading-[1.05]">
            Leather goods<br />
            <em className="text-gold-300">made by hand,</em><br />
            sold to you
          </h1>

          {/* Sub copy */}
          <p className="text-base lg:text-lg text-ivory-200/70 font-sans font-light max-w-xl mb-10 leading-relaxed">
            Totes, crossbody bags, wallets, and small goods in full-grain leather.
            Choose a color and add it to your bag. No wholesale minimum.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/collections" className="btn-primary group">
              Shop the pieces
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link href="/custom" className="btn-outline border-ivory-200/40 text-ivory-100 hover:bg-ivory-100 hover:text-charcoal-900">
              How they are made
            </Link>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 pt-10 border-t border-ivory-200/10 flex flex-wrap gap-10">
          {[
            { value: "8", label: "Pieces in the shop" },
            { value: "1", label: "Piece at a time" },
            { value: "100%", label: "Full-grain leather" },
            { value: "Free", label: "Shipping" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-ivory-50 leading-none mb-1">{stat.value}</p>
              <p className="text-[10px] tracking-widest uppercase text-ivory-200/40 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase text-ivory-200/30 font-sans">Scroll</span>
        <ArrowDown size={14} className="text-ivory-200/30" />
      </div>
    </section>
  );
}
