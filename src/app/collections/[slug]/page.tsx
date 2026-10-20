import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import AddToCart from "@/components/AddToCart";
import ProductGallery from "@/components/ProductGallery";
import {
  formatPrice,
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/products";

type PageProps = {
  params: { slug: string };
};

/**
 * 为每件商品预生成静态页面。
 */
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

/**
 * 按商品名称生成页面标题。
 */
export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) {
    return { title: "Piece not found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <div className="pt-28 pb-6 bg-ivory-100 border-b border-ivory-200">
        <div className="container-luxury flex items-center gap-3 text-xs text-charcoal-700/50 font-sans tracking-wide">
          <Link href="/" className="hover:text-charcoal-800 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-charcoal-800 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal-800">{product.name}</span>
        </div>
      </div>

      <section className="py-16 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            <ProductGallery images={product.gallery} name={product.name} />

            <div className="lg:py-4">
              <span className="text-[10px] tracking-widest3 uppercase text-gold-500 font-medium font-sans">
                {product.category}
              </span>
              <h1 className="font-display text-4xl lg:text-5xl text-charcoal-800 mb-3 leading-tight mt-2">
                {product.name}
              </h1>
              <p className="text-charcoal-700/50 text-sm tracking-widest uppercase mb-4 font-sans">
                {product.tagline}
              </p>
              <p className="font-display text-3xl text-charcoal-800 mb-8">
                {formatPrice(product.price)}
              </p>

              <div className="w-12 h-px bg-gold-400 mb-8" />

              <p className="text-charcoal-700/70 leading-relaxed mb-6 text-base">
                {product.description}
              </p>
              <p className="text-charcoal-700/70 leading-relaxed mb-10 text-base">
                {product.story}
              </p>

              <AddToCart
                slug={product.slug}
                name={product.name}
                price={product.price}
                image={product.image}
                colors={product.colors}
              />

              <div className="mt-10 mb-10 border border-ivory-200">
                <div className="px-5 py-3 border-b border-ivory-200 bg-ivory-100">
                  <p className="text-[10px] tracking-widest uppercase font-medium text-charcoal-700/60">
                    Details
                  </p>
                </div>
                <div className="divide-y divide-ivory-200">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex px-5 py-3">
                      <span className="w-36 text-xs text-charcoal-700/40 font-sans uppercase tracking-wider shrink-0">
                        {spec.label}
                      </span>
                      <span className="text-sm text-charcoal-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 mb-8">
                {[
                  "Cut and stitched to order in small batches",
                  "Complimentary shipping on every piece",
                  "One year of complimentary stitch repairs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-700/70">
                    <Check size={14} className="text-gold-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/collections"
                className="flex items-center gap-2 text-xs text-charcoal-700/40 hover:text-charcoal-700 transition-colors duration-200 tracking-wider uppercase font-sans"
              >
                <ArrowLeft size={14} />
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury">
          <h2 className="font-display text-2xl text-charcoal-800 mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link key={item.slug} href={`/collections/${item.slug}`} className="group product-card">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="py-4">
                  <h3 className="font-display text-lg text-charcoal-800">{item.name}</h3>
                  <p className="text-sm text-charcoal-700/60 mt-1">{formatPrice(item.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
