import type { Metadata } from "next";
import { Mail, Clock, ShoppingBag } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Maison Artisan about a leather piece, a size, or an order in your bag.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "dioneysos@proton.me",
    sub: "Replies from the studio",
  },
  {
    icon: Clock,
    label: "Response",
    value: "Within 24 hours",
    sub: "Monday to Friday",
  },
  {
    icon: ShoppingBag,
    label: "Your bag",
    value: "Saved in this browser",
    sub: "Checkout is not open yet",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-ivory-100 border-b border-ivory-200">
        <div className="container-luxury max-w-3xl">
          <span className="section-label">Contact</span>
          <h1 className="font-display text-5xl lg:text-6xl text-charcoal-800 mb-4 leading-tight">
            Ask the people<br />
            <em className="text-gold-500">who cut the leather</em>
          </h1>
          <div className="w-12 h-px bg-gold-400 my-6" />
          <p className="text-charcoal-700/60 text-lg leading-relaxed max-w-xl">
            Size, hide, care, or a piece already in your bag. This is not a wholesale desk.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <aside className="lg:col-span-4">
              <div className="space-y-8">
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
            </aside>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
