import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Design Service �?Maison Artisan",
  description:
    "Learn about our bespoke custom bag design process. From initial concept to worldwide delivery, we make the creation of your perfect handmade bags seamless.",
};

const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "MOQ varies by collection �?from 50 units for rigid gift boxes and wedding bags, to 200�?00 units for boutique shopping bags. We always discuss your specific needs and find the right solution.",
  },
  {
    q: "Can I order a sample before committing to full production?",
    a: "Absolutely. We strongly encourage it. A physical sample is the best way to confirm materials, finishing, and size before full production begins. Sample fees apply and are credited toward your order.",
  },
  {
    q: "How long does the entire process take?",
    a: "From first inquiry to delivery, most projects take 6�?0 weeks. This includes design confirmation (1�? weeks), sampling (1�? weeks), production (3�? weeks), and shipping (1�? weeks). Rush timelines are available for select projects.",
  },
  {
    q: "Do you work with Pantone color matching?",
    a: "Yes. We work with Pantone, RAL, and bespoke color specifications to ensure your bags match your brand identity precisely.",
  },
  {
    q: "Can I use my own logo files?",
    a: "Yes. We accept AI, EPS, PDF, and high-resolution PNG files. Our design team will prepare your artwork for production and send press-ready files for your approval.",
  },
  {
    q: "Do you offer sustainable / eco-friendly options?",
    a: "All of our paper options include FSC-certified choices. We use water-based inks, plant-based adhesives, and can produce fully compostable bags on request.",
  },
];

export default function CustomPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=85&fit=crop"
            alt="Custom design process at Maison Artisan"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-charcoal-900/10" />
        </div>
        <div className="relative z-10 container-luxury pb-16 lg:pb-24">
          <span className="section-label text-gold-400">Custom Design</span>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory-50 max-w-2xl leading-tight">
            Your vision,<br />
            <em className="text-gold-300">expertly realized</em>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-ivory-50">
        <div className="container-luxury max-w-3xl text-center">
          <p className="font-serif text-2xl text-charcoal-800 leading-relaxed italic mb-6">
            &ldquo;We don&apos;t offer templates. We offer conversations. Because the best
            packaging starts with understanding what you truly need.&rdquo;
          </p>
          <p className="text-xs tracking-widest uppercase text-gold-500 font-medium font-sans">
            �?Sophie Laroche, Creative Director
          </p>
        </div>
      </section>

      {/* What we can customize */}
      <section className="py-16 lg:py-20 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85&fit=crop"
                alt="Customization options at Maison Artisan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="section-label">What We Customize</span>
              <h2 className="font-display text-4xl text-charcoal-800 mb-6 leading-tight">
                Every element.<br />
                <em>Your way.</em>
              </h2>
              <p className="text-charcoal-700/60 mb-8 leading-relaxed">
                True customization means no compromises. From the weight of the paper to the
                texture of the ribbon, every element of your bag is yours to define.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Paper weight & texture",
                  "Custom dimensions & shapes",
                  "Foil stamping (gold, silver, rose gold)",
                  "Embossing & debossing",
                  "Full-color printing",
                  "Spot UV & matte varnish",
                  "Handle types & materials",
                  "Ribbon color & finish",
                  "Interior liner & tissue",
                  "Pantone color matching",
                  "Monograms & crests",
                  "Branded hang tags",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-charcoal-700/70">
                    <Check size={14} className="text-gold-500 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-ivory-50 border-t border-ivory-200">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="section-label">The Process</span>
            <h2 className="font-display text-4xl text-charcoal-800">Simple. Transparent. Collaborative.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { n: "01", title: "Inquiry", desc: "Submit your project brief. We review and respond within 24 hours." },
              { n: "02", title: "Design", desc: "Our team creates mockups and refinements until every detail is right." },
              { n: "03", title: "Sample", desc: "A physical sample is produced and shipped to you for tactile approval." },
              { n: "04", title: "Production", desc: "Full production begins with rigorous quality control at every stage." },
              { n: "05", title: "Delivery", desc: "Careful packaging and worldwide shipping with full tracking." },
            ].map((step) => (
              <div key={step.n} className="text-center group">
                <div className="w-14 h-14 border-2 border-ivory-200 group-hover:border-gold-400 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <span className="font-display text-xl text-charcoal-700/30 group-hover:text-gold-500 transition-colors duration-300">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-serif text-charcoal-800 font-medium mb-2">{step.title}</h3>
                <p className="text-xs text-charcoal-700/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-ivory-100 border-t border-ivory-200">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="section-label">Common Questions</span>
            <h2 className="font-display text-4xl text-charcoal-800">Frequently Asked</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-ivory-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6 cursor-pointer">
                <summary className="flex items-start justify-between gap-4 list-none">
                  <span className="font-serif text-charcoal-800 text-lg group-hover:text-gold-600 transition-colors">
                    {faq.q}
                  </span>
                  <span className="font-sans text-gold-400 text-xl leading-none shrink-0 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-charcoal-700/60 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-800">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl text-ivory-50 mb-4">
            Ready to begin?
          </h2>
          <p className="text-ivory-200/50 mb-8 max-w-sm mx-auto">
            Share your brief and we&apos;ll craft a proposal tailored to your exact needs.
          </p>
          <Link href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-400 group">
            Request Custom Design
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
