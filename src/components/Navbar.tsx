"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/collections", label: "Shop" },
  { href: "/custom", label: "The Craft" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory-50/95 backdrop-blur-sm shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-display text-xl tracking-tight text-charcoal-800 leading-none group-hover:text-gold-500 transition-colors duration-300">
              Maison Artisan
            </span>
            <span className="text-[10px] tracking-widest3 uppercase text-gold-500 font-sans font-medium mt-0.5">
              Handcrafted Luxury
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link pb-0.5">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/cart" className="relative text-charcoal-800 hover:text-gold-500" aria-label="Shopping bag">
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 bg-gold-500 text-ivory-50 text-[10px] leading-4 text-center">
                  {count}
                </span>
              )}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Link href="/cart" className="relative p-2 text-charcoal-800" aria-label="Shopping bag">
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute top-0 right-0 min-w-4 h-4 px-1 bg-gold-500 text-ivory-50 text-[10px] leading-4 text-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="p-2 -mr-2 text-charcoal-800"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-ivory-50 flex flex-col transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container-luxury flex items-center justify-between py-6">
          <Link
            href="/"
            className="font-display text-xl tracking-tight text-charcoal-800"
            onClick={() => setMenuOpen(false)}
          >
            Maison Artisan
          </Link>
          <button
            className="p-2 -mr-2 text-charcoal-800"
            onClick={() => setMenuOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl text-charcoal-800 hover:text-gold-500 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="btn-primary mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Shopping bag{count > 0 ? ` (${count})` : ""}
          </Link>
        </nav>

        <div className="container-luxury pb-10">
          <p className="text-xs text-charcoal-700/40 tracking-widest uppercase text-center">
            hand-cut · saddle-stitched · made for you
          </p>
        </div>
      </div>
    </>
  );
}
