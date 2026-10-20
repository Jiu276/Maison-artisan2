import Link from "next/link";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const footerLinks = [
  { label: "Our Story", href: "/about" },
  { label: "The Craft", href: "/custom" },
  { label: "Shopping Bag", href: "/cart" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-ivory-200">
      <div className="border-b border-ivory-200/10">
        <div className="container-luxury py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="section-label text-gold-400">The shop</span>
            <h2 className="font-display text-3xl lg:text-4xl text-ivory-50 text-balance">
              Leather, cut for one person.<br />
              <em>Yours, when you are ready.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/collections" className="btn-primary bg-gold-500 hover:bg-gold-400 border-gold-500">
              Shop the pieces
            </Link>
            <Link href="/cart" className="btn-outline border-ivory-200/30 text-ivory-100 hover:bg-ivory-100 hover:text-charcoal-900">
              View your bag
            </Link>
          </div>
        </div>
      </div>

      <div className="container-luxury py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="font-display text-2xl text-ivory-50 mb-1">Maison Artisan</div>
          <div className="text-[10px] tracking-widest3 uppercase text-gold-400 font-sans mb-6">
            Handcrafted Leather
          </div>
          <p className="text-sm text-ivory-200/60 leading-relaxed mb-6">
            Full-grain bags, wallets, and small goods, made in small batches and sold directly to you.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              className="w-9 h-9 border border-ivory-200/20 flex items-center justify-center text-ivory-200/60 hover:border-gold-400 hover:text-gold-400 transition-all duration-200"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={15} />
            </a>
            <a
              href="mailto:dioneysos@proton.me"
              className="w-9 h-9 border border-ivory-200/20 flex items-center justify-center text-ivory-200/60 hover:border-gold-400 hover:text-gold-400 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase font-medium text-ivory-50/80 mb-6">
            Pieces
          </h3>
          <ul className="space-y-3">
            {products.slice(0, 5).map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/collections/${product.slug}`}
                  className="text-sm text-ivory-200/50 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group"
                >
                  {product.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase font-medium text-ivory-50/80 mb-6">
            Atelier
          </h3>
          <ul className="space-y-3">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ivory-200/50 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group"
                >
                  {item.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase font-medium text-ivory-50/80 mb-6">
            Get in Touch
          </h3>
          <div className="space-y-4 text-sm text-ivory-200/50">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gold-400 mb-1">Email</p>
              <a href="mailto:dioneysos@proton.me" className="hover:text-ivory-100 transition-colors">
                dioneysos@proton.me
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gold-400 mb-1">Response Time</p>
              <p>Within 24 hours</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gold-400 mb-1">Studio Hours</p>
              <p>Mon - Fri, 9am - 6pm GMT+8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory-200/10">
        <div className="container-luxury py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/30">
          <p>© {new Date().getFullYear()} Maison Artisan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ivory-200/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ivory-200/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
