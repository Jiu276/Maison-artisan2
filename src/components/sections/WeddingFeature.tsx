"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const weddingItems = [
  {
    title: "Wedding Favor Bags",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=85&fit=crop",
    desc: "Delicate, personalized favor bags that guests will cherish long after the celebration ends.",
  },
  {
    title: "Bride Gift Bags",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=85&fit=crop",
    desc: "Luxurious gift bags for the bridal party - as beautiful as the moments they hold.",
  },
  {
    title: "Luxury Welcome Bags",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=85&fit=crop",
    desc: "First impressions matter. Welcome your guests with packaging that sets the tone for the entire event.",
  },
  {
    title: "Personalized Packaging",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=85&fit=crop",
    desc: "Monograms, custom printing, bespoke colors - your wedding aesthetic, down to the last detail.",
  },
];

export default function WeddingFeature() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100 overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Wedding Collection</span>
          <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 mb-4 leading-tight">
            Where every detail<br />
            <em>becomes a memory</em>
          </h2>
          <div className="divider-gold" />
          <p className="text-charcoal-700/60 text-base leading-relaxed">
            Our bridal collection is crafted with one intention: to make every
            element of your wedding as beautiful and intentional as your love story.
          </p>
        </div>

        {/* Full-width feature image */}
        <div className="relative h-64 sm:h-80 lg:h-[480px] mb-4 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=1600&q=85&fit=crop"
            alt="Luxury wedding table setting with handmade bags and floral arrangements"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory-100/80" />
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <p className="font-serif italic text-charcoal-800 text-xl lg:text-2xl text-balance">
              &ldquo;Packaging so beautiful, guests asked where to buy one.&rdquo;
            </p>
            <p className="text-xs tracking-widest uppercase text-charcoal-700/50 mt-2 font-sans">
              - Sarah M., Wedding Planner, New York
            </p>
          </div>
        </div>

        {/* 4-column product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {weddingItems.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative h-72 overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="img-overlay" />
              </div>
              <h3 className="font-display text-xl text-charcoal-800 mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal-700/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/collections/wedding" className="btn-primary group">
            Explore Wedding Collection
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
