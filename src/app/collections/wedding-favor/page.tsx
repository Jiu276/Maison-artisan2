import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Favor Bags �?Custom Handmade Wedding Packaging",
  description:
    "Beautifully handcrafted wedding favor bags, personalized with your names, date, and colors. Premium materials, artisan finishing, worldwide delivery.",
};

const images = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=900&q=85&fit=crop",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=85&fit=crop",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=85&fit=crop",
  "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=900&q=85&fit=crop",
];

const specs = [
  { label: "Material", value: "Italian textured paper, 200gsm" },
  { label: "Finishing", value: "Foil emboss, spot UV, satin ribbon" },
  { label: "Sizes Available", value: "S / M / L / Custom" },
  { label: "Colors", value: "Full custom color matching" },
  { label: "MOQ", value: "100 units" },
  { label: "Sample Time", value: "7�?0 business days" },
  { label: "Production Time", value: "20�?0 business days" },
  { label: "Shipping", value: "Worldwide · DHL / FedEx" },
];

const customOptions = [
  "Custom foil stamp (gold, silver, rose gold)",
  "Personalized names & wedding date",
  "Bespoke ribbon color & material",
  "Hand-tied bow finishing",
  "Custom tissue paper insert",
  "Monogram & crest embossing",
  "Matching thank-you cards",
];

export default function WeddingFavorPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 bg-ivory-100 border-b border-ivory-200">
        <div className="container-luxury flex items-center gap-3 text-xs text-charcoal-700/50 font-sans tracking-wide">
          <Link href="/" className="hover:text-charcoal-800 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-charcoal-800 transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-charcoal-800">Wedding Favor Bags</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left: Image Gallery */}
            <div className="space-y-3">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory-100">
                <Image
                  src={images[0]}
                  alt="Wedding favor bags handcrafted with satin ribbon"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Thumbnail row */}
              <div className="grid grid-cols-3 gap-3">
                {images.slice(1).map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden bg-ivory-100 cursor-pointer group">
                    <Image
                      src={src}
                      alt={`Wedding bag view ${i + 2}`}
                      fill
                      className="object-cover transition-opacity duration-200 group-hover:opacity-80"
                      sizes="200px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="lg:py-4">
              <div className="mb-2">
                <span className="text-[10px] tracking-widest3 uppercase text-gold-500 font-medium font-sans">
                  Wedding Collection
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl text-charcoal-800 mb-3 leading-tight">
                Wedding Favor Bags
              </h1>
              <p className="text-charcoal-700/50 text-sm tracking-widest uppercase mb-6 font-sans">
                Petite elegance for every guest
              </p>

              <div className="w-12 h-px bg-gold-400 mb-8" />

              <p className="text-charcoal-700/70 leading-relaxed mb-8 text-base">
                Small in size, infinite in meaning. Our wedding favor bags are handcrafted
                with the same care and attention as the most treasured gifts. Each one is
                a keepsake �?designed to be as beautiful as the moment they represent.
              </p>
              <p className="text-charcoal-700/70 leading-relaxed mb-10 text-base">
                Personalize with your names, wedding date, custom colors, and ribbon
                details. Available in multiple sizes to accommodate any favor gift.
              </p>

              {/* Specifications */}
              <div className="mb-10 border border-ivory-200">
                <div className="px-5 py-3 border-b border-ivory-200 bg-ivory-100">
                  <p className="text-[10px] tracking-widest uppercase font-medium text-charcoal-700/60">
                    Specifications
                  </p>
                </div>
                <div className="divide-y divide-ivory-200">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex px-5 py-3">
                      <span className="w-40 text-xs text-charcoal-700/40 font-sans uppercase tracking-wider shrink-0">
                        {spec.label}
                      </span>
                      <span className="text-sm text-charcoal-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization options */}
              <div className="mb-10">
                <p className="text-[10px] tracking-widest uppercase font-medium text-charcoal-700/60 mb-4">
                  Customization Available
                </p>
                <ul className="space-y-2">
                  {customOptions.map((opt) => (
                    <li key={opt} className="flex items-start gap-3 text-sm text-charcoal-700/70">
                      <Check size={14} className="text-gold-500 mt-0.5 shrink-0" />
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price note */}
              <div className="mb-8 p-4 bg-ivory-100 border-l-2 border-gold-400">
                <p className="text-xs text-charcoal-700/60 leading-relaxed">
                  <strong className="text-charcoal-800 font-medium">Pricing is custom.</strong>{" "}
                  Quotes are provided based on quantity, material selection, and customization
                  requirements. Request your quote below �?we respond within 24 hours.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?product=wedding-favor" className="btn-primary flex-1 justify-center">
                  Request a Quote
                </Link>
                <Link href="/custom" className="btn-outline flex-1 justify-center">
                  Custom Design Info
                </Link>
              </div>

              {/* Back */}
              <div className="mt-8">
                <Link href="/collections" className="flex items-center gap-2 text-xs text-charcoal-700/40 hover:text-charcoal-700 transition-colors duration-200 tracking-wider uppercase font-sans">
                  <ArrowLeft size={14} />
                  Back to Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury">
          <h2 className="font-display text-2xl text-charcoal-800 mb-8">You may also love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Bride Gift Bags",
                img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=80",
                href: "/collections/bride-gift",
              },
              {
                title: "Luxury Welcome Bags",
                img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80",
                href: "/collections/welcome-bag",
              },
              {
                title: "Luxury Gift Bags",
                img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80",
                href: "/collections/luxury-gift",
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group product-card">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="py-3">
                  <h3 className="font-display text-lg text-charcoal-800">{item.title}</h3>
                  <p className="text-[10px] tracking-widest uppercase text-gold-500 font-sans mt-1">Custom Available</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
