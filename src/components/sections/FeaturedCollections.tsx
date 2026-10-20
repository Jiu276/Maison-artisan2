"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const spans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
];

const heights = ["h-[500px] lg:h-full", "h-64", "h-64", "h-64", "h-64"];

/**
 * 首页精选五件皮具，全部链到真实商品页。
 */
export default function FeaturedCollections() {
  const featured = products.slice(0, 5);

  return (
    <section className="py-24 lg:py-32 bg-ivory-50">
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <span className="section-label">The pieces</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 max-w-lg leading-tight">
              Leather you can <em>order today</em>
            </h2>
          </div>
          <div className="flex items-end gap-4">
            <p className="text-sm text-charcoal-700/60 max-w-xs leading-relaxed hidden lg:block">
              Bags, wallets, and small goods. Each one has a price, a color, and a place in your bag.
            </p>
            <Link href="/collections" className="btn-ghost shrink-0">
              Shop all <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {featured.map((product, index) => (
            <Link
              key={product.slug}
              href={`/collections/${product.slug}`}
              className={`product-card ${spans[index]} group`}
            >
              <div className={`relative overflow-hidden ${heights[index]}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="img-overlay" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-widest uppercase font-medium bg-ivory-50/90 text-charcoal-800 px-3 py-1.5">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] tracking-widest uppercase font-medium bg-gold-500 text-ivory-50 px-3 py-1.5">
                    ${product.price}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] tracking-widest uppercase text-ivory-200/60 mb-1 font-sans">
                    {product.tagline}
                  </p>
                  <h3 className="font-display text-2xl text-ivory-50 mb-2">{product.name}</h3>
                  <p className={`text-sm text-ivory-200/70 mb-3 leading-relaxed ${index === 0 ? "block" : "hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"}`}>
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <Link href="/collections" className="btn-outline">
            View the shop
          </Link>
        </div>
      </div>
    </section>
  );
}
