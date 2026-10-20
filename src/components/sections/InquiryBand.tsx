"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InquiryBand() {
  return (
    <section className="py-20 bg-gold-500">
      <div className="container-luxury flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <p className="text-[10px] tracking-widest3 uppercase text-ivory-50/60 font-sans mb-2">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-ivory-50 leading-tight">
            A bag, a wallet, a belt.<br />
            <em>Add the one you will actually carry.</em>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="/collections"
            className="btn-primary bg-charcoal-800 hover:bg-charcoal-700 border-0 group"
          >
            Shop the pieces
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/cart"
            className="btn-outline border-ivory-50/40 text-ivory-50 hover:bg-ivory-50 hover:text-gold-600"
          >
            Open your bag
          </Link>
        </div>
      </div>
    </section>
  );
}
