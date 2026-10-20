"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    id: "wedding",
    title: "Wedding Bags",
    subtitle: "Bridal & Celebration",
    description: "Designed for the most cherished moments - from bridal party gifts to luxury welcome bags.",
    material: "Handmade paper, satin ribbon, foil stamp",
    tag: "Wedding",
    href: "/collections/wedding",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=85&fit=crop",
    span: "lg:col-span-2 lg:row-span-2",
    imgHeight: "h-[500px] lg:h-full",
  },
  {
    id: "gift",
    title: "Luxury Gift Bags",
    subtitle: "Premium Gifting",
    description: "Elevate any gift with bags that become part of the experience.",
    material: "Rigid paper, velvet lining, gold hardware",
    tag: "Gift",
    href: "/collections/gift",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85&fit=crop",
    span: "lg:col-span-1",
    imgHeight: "h-64",
  },
  {
    id: "boutique",
    title: "Boutique Shopping Bags",
    subtitle: "Retail & Fashion",
    description: "Transform your shopping experience into a branded moment.",
    material: "Recycled kraft, rope handle, custom print",
    tag: "Retail",
    href: "/collections/boutique",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800&q=85&fit=crop",
    span: "lg:col-span-1",
    imgHeight: "h-64",
  },
  {
    id: "events",
    title: "Event Packaging",
    subtitle: "Corporate & Events",
    description: "Branded packaging that leaves a lasting impression at every event.",
    material: "Specialty paper, custom foil, varied sizes",
    tag: "Events",
    href: "/collections/events",
    image: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=800&q=85&fit=crop",
    span: "lg:col-span-1",
    imgHeight: "h-64",
  },
  {
    id: "brand",
    title: "Custom Brand Bags",
    subtitle: "Brand Identity",
    description: "Your brand, beautifully expressed through handcrafted packaging.",
    material: "Fully customizable materials & finishes",
    tag: "Brand",
    href: "/collections/brand",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=85&fit=crop",
    span: "lg:col-span-1",
    imgHeight: "h-64",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50">
      <div className="container-luxury">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <span className="section-label">Our Collections</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 max-w-lg leading-tight">
              Crafted for every <em>extraordinary</em> occasion
            </h2>
          </div>
          <div className="flex items-end gap-4">
            <p className="text-sm text-charcoal-700/60 max-w-xs leading-relaxed hidden lg:block">
              Each collection is thoughtfully designed and handcrafted to the highest standards of quality.
            </p>
            <Link href="/collections" className="btn-ghost shrink-0">
              All Collections <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              href={col.href}
              className={`product-card ${col.span} group`}
            >
              <div className={`relative overflow-hidden ${col.imgHeight}`}>
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="img-overlay" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-widest uppercase font-medium bg-ivory-50/90 text-charcoal-800 px-3 py-1.5">
                    {col.tag}
                  </span>
                </div>

                {/* Custom badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] tracking-widest uppercase font-medium bg-gold-500 text-ivory-50 px-3 py-1.5">
                    Custom Available
                  </span>
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] tracking-widest uppercase text-ivory-200/60 mb-1 font-sans">
                    {col.subtitle}
                  </p>
                  <h3 className="font-display text-2xl text-ivory-50 mb-2">{col.title}</h3>
                  <p className={`text-sm text-ivory-200/70 mb-3 leading-relaxed ${i === 0 ? "block" : "hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"}`}>
                    {col.description}
                  </p>
                  <p className="text-[11px] tracking-wider text-gold-300 uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {col.material}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center lg:hidden">
          <Link href="/collections" className="btn-outline">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
