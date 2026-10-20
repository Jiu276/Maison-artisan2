import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story �?Maison Artisan",
  description:
    "The story behind Maison Artisan �?a luxury handmade bag studio born from a passion for beautiful craft, sustainable materials, and timeless design.",
};

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    text: "Founded in a small studio, Maison Artisan was born from a single conviction: that packaging could be as meaningful as the gift inside.",
  },
  {
    year: "2019",
    title: "First Boutique Collection",
    text: "Our debut bridal collection was commissioned for a luxury wedding in the English countryside �?and our reputation was set.",
  },
  {
    year: "2021",
    title: "International Expansion",
    text: "Reached clients across 20 countries. Our first partnership with a Paris flagship maison cemented our positioning in the luxury market.",
  },
  {
    year: "2023",
    title: "Sustainable Commitment",
    text: "Transitioned to 100% FSC-certified paper across all collections. Zero single-use plastics in our atelier and packaging.",
  },
  {
    year: "2025",
    title: "500+ Projects",
    text: "Today, we have completed over 500 custom projects �?from intimate weddings to global brand launches �?across 40+ countries.",
  },
];

const team = [
  {
    name: "Sophie Laroche",
    role: "Creative Director & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85&fit=crop",
    bio: "Trained in textile arts at the École Duperré in Paris, Sophie founded Maison Artisan to bring European craftsmanship to the world of luxury packaging.",
  },
  {
    name: "James Whitmore",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85&fit=crop",
    bio: "With 12 years in luxury brand identity, James translates each client's vision into meticulous design systems that translate perfectly to paper.",
  },
  {
    name: "Elena Moreau",
    role: "Client Experience Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85&fit=crop",
    bio: "Elena ensures that every touchpoint in your Maison Artisan experience �?from first inquiry to final delivery �?feels effortless and extraordinary.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1600&q=85&fit=crop"
            alt="Artisan workshop"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-charcoal-900/20" />
        </div>
        <div className="relative z-10 container-luxury pb-16 lg:pb-24">
          <span className="section-label text-gold-400">About Us</span>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory-50 max-w-2xl leading-tight">
            Crafting beauty,<br />
            <em className="text-gold-300">one bag at a time</em>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Our Philosophy</span>
              <h2 className="font-display text-4xl text-charcoal-800 mb-6 leading-tight">
                Handmade is not a limitation.<br />
                <em>It&apos;s our greatest advantage.</em>
              </h2>
              <div className="space-y-5 text-charcoal-700/70 leading-relaxed">
                <p>
                  In an era of automated production and disposable packaging, we made a
                  deliberate choice to go the other direction. Every bag that leaves our
                  atelier has been touched by human hands �?measured, folded, finished,
                  and inspected by artisans who take genuine pride in their work.
                </p>
                <p>
                  This isn&apos;t nostalgia. It&apos;s precision. Handcraft allows for
                  a level of customization, quality control, and material sensitivity
                  that no machine can replicate. It&apos;s why our clients �?from boutique
                  wedding planners to global luxury brands �?trust us repeatedly.
                </p>
                <p>
                  We believe that the packaging around a gift should speak before a word
                  is said. It should communicate care, quality, and intention. That belief
                  drives everything we make.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556742400-b5b7c512f1d7?w=800&q=85&fit=crop"
                  alt="Artisan crafting luxury bags by hand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 p-6 max-w-[200px] hidden lg:block">
                <p className="font-display text-4xl text-ivory-50 leading-none">100%</p>
                <p className="text-[10px] tracking-widest uppercase text-ivory-50/70 font-sans mt-1">
                  Handmade<br />in our atelier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="section-label">Our Journey</span>
            <h2 className="font-display text-4xl text-charcoal-800">The Maison Artisan Story</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-2 border-gold-400 flex items-center justify-center bg-ivory-100 z-10">
                    <span className="text-[10px] font-sans font-bold text-gold-500 tracking-wider">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="flex-1 w-px bg-ivory-200 my-2" />
                  )}
                </div>
                <div className="pb-4 flex-1">
                  <h3 className="font-display text-xl text-charcoal-800 mb-2">{m.title}</h3>
                  <p className="text-sm text-charcoal-700/60 leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-ivory-50">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="section-label">The People</span>
            <h2 className="font-display text-4xl text-charcoal-800">Meet our team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="img-overlay" />
                </div>
                <h3 className="font-display text-xl text-charcoal-800 mb-0.5">{member.name}</h3>
                <p className="text-[10px] tracking-widest uppercase text-gold-500 font-sans mb-3">{member.role}</p>
                <p className="text-sm text-charcoal-700/60 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-800">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl text-ivory-50 mb-4">
            Ready to begin your project?
          </h2>
          <p className="text-ivory-200/50 mb-8 max-w-md mx-auto">
            We&apos;d love to learn about your vision and explore how we can bring it to life.
          </p>
          <Link href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-400 group">
            Start a Conversation
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
