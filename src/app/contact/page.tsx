import type { Metadata } from "next";
import { Mail, Clock, Globe, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Request Quote - Maison Artisan",
  description:
    "Request a custom quote for handmade bags, luxury packaging, and branded gift bags. We respond within 24 hours with a tailored proposal.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "dioneysos@proton.me",
    sub: "For general inquiries",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    sub: "Monday to Friday",
  },
  {
    icon: Globe,
    label: "Serving",
    value: "Worldwide",
    sub: "40+ countries delivered",
  },
  {
    icon: MessageCircle,
    label: "Languages",
    value: "English · French",
    sub: "Native proficiency",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-ivory-100 border-b border-ivory-200">
        <div className="container-luxury max-w-3xl">
          <span className="section-label">Get in Touch</span>
          <h1 className="font-display text-5xl lg:text-6xl text-charcoal-800 mb-4 leading-tight">
            Let&apos;s create<br />
            <em className="text-gold-500">something beautiful</em>
          </h1>
          <div className="w-12 h-px bg-gold-400 my-6" />
          <p className="text-charcoal-700/60 text-lg leading-relaxed max-w-xl">
            Whether you have a complete brief or just an early idea, we&apos;re here to guide you.
            Share your vision and we&apos;ll respond with a tailored proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                {/* Contact info */}
                <div className="space-y-8 mb-12">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex gap-4">
                        <div className="w-9 h-9 border border-ivory-200 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-gold-500" />
                        </div>
                        <div>
                          <p className="text-[10px] tracking-widest uppercase text-charcoal-700/40 font-sans mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-charcoal-800">{item.value}</p>
                          <p className="text-xs text-charcoal-700/40">{item.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* What to expect */}
                <div className="border border-ivory-200 p-6 bg-ivory-100">
                  <h3 className="font-serif text-charcoal-800 font-medium mb-4">
                    What happens next?
                  </h3>
                  <ol className="space-y-4">
                    {[
                      "We review your inquiry and project scope",
                      "Our team crafts a personalized proposal",
                      "We schedule a consultation call if needed",
                      "Design & sampling begins upon your approval",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-charcoal-700/60">
                        <span className="font-display text-gold-400 leading-none text-lg shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* B2B note */}
                <div className="mt-6 p-5 bg-charcoal-800">
                  <p className="text-[10px] tracking-widest uppercase text-gold-400 font-sans mb-2">
                    B2B &amp; Wholesale
                  </p>
                  <p className="text-sm text-ivory-200/70 leading-relaxed">
                    We work with boutiques, event agencies, luxury brands, and corporate
                    procurement teams. Dedicated account management available for orders
                    above 1,000 units.
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
