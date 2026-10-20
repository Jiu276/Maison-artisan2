import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collections - Luxury Custom Handmade Bags",
  description:
    "Browse our full range of handcrafted custom bags: wedding favor bags, luxury gift bags, boutique shopping bags, event packaging, and brand custom collections.",
};

const allProducts = [
  {
    id: "wedding-favor",
    category: "Wedding",
    title: "Wedding Favor Bags",
    subtitle: "Petite elegance for every guest",
    material: "Italian textured paper · Satin ribbon · Foil emboss",
    moq: "100 units",
    lead: "20-30 days",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=700&q=85&fit=crop",
    href: "/collections/wedding-favor",
  },
  {
    id: "bride-gift",
    category: "Wedding",
    title: "Bride Gift Bags",
    subtitle: "A moment she'll never forget",
    material: "Heavy rigid board · Velvet liner · Gold ribbon",
    moq: "50 units",
    lead: "25-35 days",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=85&fit=crop",
    href: "/collections/bride-gift",
  },
  {
    id: "welcome-bag",
    category: "Wedding",
    title: "Luxury Welcome Bags",
    subtitle: "First impressions, perfected",
    material: "Kraft laminated · Twisted cord handle · Custom print",
    moq: "100 units",
    lead: "20-30 days",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=85&fit=crop",
    href: "/collections/welcome-bag",
  },
  {
    id: "luxury-gift",
    category: "Gift",
    title: "Luxury Gift Bags",
    subtitle: "The premium unboxing experience",
    material: "Gloss laminated · Rigid base · Grosgrain ribbon",
    moq: "100 units",
    lead: "18-28 days",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=700&q=85&fit=crop",
    href: "/collections/luxury-gift",
  },
  {
    id: "boutique-bag",
    category: "Boutique",
    title: "Boutique Shopping Bags",
    subtitle: "Carry your brand with pride",
    material: "Recycled kraft · Rope handle · Spot UV print",
    moq: "200 units",
    lead: "15-25 days",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=700&q=85&fit=crop",
    href: "/collections/boutique-bag",
  },
  {
    id: "event-bag",
    category: "Events",
    title: "Event Packaging",
    subtitle: "Branded moments, lasting impact",
    material: "Specialty paper · Custom size · Various finishes",
    moq: "500 units",
    lead: "20-30 days",
    image: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=700&q=85&fit=crop",
    href: "/collections/event-bag",
  },
  {
    id: "brand-bag",
    category: "Brand",
    title: "Custom Brand Bags",
    subtitle: "Fully bespoke brand expression",
    material: "Fully customizable · Any size · All finishes",
    moq: "From 50 units",
    lead: "25-40 days",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=85&fit=crop",
    href: "/collections/brand-bag",
  },
  {
    id: "ribbon-box",
    category: "Gift",
    title: "Ribbon Gift Boxes",
    subtitle: "The art of the reveal",
    material: "Rigid board · Matte laminate · Hand-tied ribbon",
    moq: "50 units",
    lead: "20-25 days",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=700&q=85&fit=crop",
    href: "/collections/ribbon-box",
  },
  {
    id: "paper-tote",
    category: "Boutique",
    title: "Artisan Paper Totes",
    subtitle: "Substance meets sophistication",
    material: "100% recycled paper · Cotton rope · Eco ink",
    moq: "300 units",
    lead: "15-20 days",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=85&fit=crop",
    href: "/collections/paper-tote",
  },
];

const categories = ["All", "Wedding", "Gift", "Boutique", "Events", "Brand"];

export default function CollectionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-16 bg-charcoal-800">
        <div className="container-luxury text-center">
          <span className="section-label text-gold-400">Our Collections</span>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory-50 mb-4">
            Handcrafted for<br />
            <em className="text-gold-300">Every Occasion</em>
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto my-6" />
          <p className="text-ivory-200/60 max-w-xl mx-auto text-base leading-relaxed">
            Every bag in our collection begins as a blank canvas - yours to personalize,
            brand, and bring to life. Browse our range, or request something entirely bespoke.
          </p>
        </div>
      </section>

      {/* Filter (visual only) */}
      <section className="bg-ivory-100 border-b border-ivory-200">
        <div className="container-luxury py-5 flex items-center gap-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-xs tracking-widest uppercase font-medium whitespace-nowrap pb-2 border-b-2 transition-all duration-200 ${
                cat === "All"
                  ? "border-gold-400 text-charcoal-800"
                  : "border-transparent text-charcoal-700/50 hover:text-charcoal-800 hover:border-charcoal-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-20 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group product-card"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-300" />
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

                {/* Info */}
                <div className="p-5 bg-ivory-50 border border-ivory-200 border-t-0">
                  <p className="text-[10px] tracking-widest uppercase text-charcoal-700/40 mb-1 font-sans">{product.subtitle}</p>
                  <h3 className="font-display text-xl text-charcoal-800 mb-2">{product.title}</h3>
                  <p className="text-xs text-charcoal-700/50 mb-4 leading-relaxed">{product.material}</p>
                  <div className="flex items-center justify-between text-[10px] tracking-wider uppercase">
                    <span className="text-charcoal-700/40">MOQ: <span className="text-charcoal-800 font-medium">{product.moq}</span></span>
                    <span className="text-gold-500 font-medium">{product.lead}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-16 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl text-charcoal-800 mb-3">
            Don&apos;t see exactly what you need?
          </h2>
          <p className="text-charcoal-700/60 mb-8 max-w-md mx-auto">
            We specialize in fully bespoke creations. Share your idea - no concept is too unique or ambitious.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Bespoke Design
          </Link>
        </div>
      </section>
    </>
  );
}
