"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InquiryBand() {
  return (
    <section className="py-20 bg-gold-500">
      <div className="container-luxury flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <p className="text-[10px] tracking-widest3 uppercase text-ivory-50/60 font-sans mb-2">
            B2B · Wholesale · Corporate
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-ivory-50 leading-tight">
            Sourcing for business?<br />
            <em>Let&apos;s create something extraordinary.</em>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="/contact?type=wholesale"
            className="btn-primary bg-charcoal-800 hover:bg-charcoal-700 border-0 group"
          >
            Wholesale Inquiry
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact?type=corporate"
            className="btn-outline border-ivory-50/40 text-ivory-50 hover:bg-ivory-50 hover:text-gold-600"
          >
            Corporate Gifting
          </Link>
        </div>
      </div>
    </section>
  );
}
