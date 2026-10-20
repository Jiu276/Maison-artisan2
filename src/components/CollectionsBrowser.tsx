"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, products, type Product } from "@/data/products";

const categories = ["All", "Bags", "Small Leather Goods", "Accessories"] as const;

/**
 * 商店列表，可按皮具类别筛选。
 */
export default function CollectionsBrowser() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const visible = useMemo(
    () =>
      category === "All"
        ? products
        : products.filter((product) => product.category === category),
    [category]
  );

  return (
    <>
      <section className="bg-ivory-100 border-b border-ivory-200">
        <div className="container-luxury py-5 flex items-center gap-6 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`text-xs tracking-widest uppercase font-medium whitespace-nowrap pb-2 border-b-2 transition-all duration-200 ${
                item === category
                  ? "border-gold-400 text-charcoal-800"
                  : "border-transparent text-charcoal-700/50 hover:text-charcoal-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * 商店里的单张商品卡片。
 */
function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/collections/${product.slug}`} className="group product-card">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] tracking-widest uppercase font-medium bg-ivory-50/90 text-charcoal-800 px-3 py-1.5">
            {product.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-8 h-8 bg-ivory-50 flex items-center justify-center">
            <ArrowUpRight size={16} className="text-charcoal-800" />
          </span>
        </div>
      </div>
      <div className="p-5 bg-ivory-50 border border-ivory-200 border-t-0">
        <p className="text-[10px] tracking-widest uppercase text-charcoal-700/40 mb-1 font-sans">
          {product.tagline}
        </p>
        <h3 className="font-display text-xl text-charcoal-800 mb-2">{product.name}</h3>
        <p className="text-xs text-charcoal-700/50 mb-4 leading-relaxed">{product.material}</p>
        <p className="text-sm text-charcoal-800">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
