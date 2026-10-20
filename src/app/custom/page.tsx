import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Craft",
  description:
    "How Maison Artisan cuts, stitches, and finishes leather goods for individual customers.",
};

const notes = [
  {
    title: "The hide",
    text: "Full-grain and bridle leather. We do not correct the surface with a thick coat of pigment. Scratches become part of the piece.",
  },
  {
    title: "The stitch",
    text: "Seams that carry weight are saddle-stitched in waxed linen. If a stitch breaks later, it can be redone. That repair is complimentary for a year.",
  },
  {
    title: "The edge",
    text: "Edges are sanded, painted, and burnished. This is the part you feel every time you pick the piece up.",
  },
  {
    title: "The order",
    text: "You choose from the shop. We do not ask for a minimum quantity, a logo, or a brand guideline.",
  },
];

export default function CraftPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-charcoal-800">
        <div className="container-luxury max-w-3xl">
          <span className="section-label text-gold-400">The craft</span>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory-50 leading-tight">
            How a piece<br />
            <em className="text-gold-300">is actually made</em>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-ivory-50">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-32">
            <Image
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1000&q=85&fit=crop"
              alt="Structured leather tote"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-10">
            {notes.map((note, index) => (
              <div key={note.title} className="border-t border-ivory-200 pt-6">
                <p className="text-[10px] tracking-widest uppercase text-gold-500 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display text-3xl text-charcoal-800 mb-3">{note.title}</h2>
                <p className="text-charcoal-700/70 leading-relaxed">{note.text}</p>
              </div>
            ))}
            <Link href="/collections" className="btn-primary">
              Choose a piece
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
