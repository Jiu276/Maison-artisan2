"use client";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Tell us about your project - the occasion, brand identity, desired materials, quantities, and any inspiration images. Our team listens carefully to understand every nuance of your vision.",
    detail: "via inquiry form or email",
  },
  {
    number: "02",
    title: "Design Confirmation",
    description:
      "Our design team creates detailed technical drawings and digital mockups. We refine together until every element feels exactly right - from typography to texture.",
    detail: "2-4 business days",
  },
  {
    number: "03",
    title: "Sample Production",
    description:
      "Before full production, we handcraft a physical sample and ship it to you for approval. Touch it. Feel it. Confirm it's perfect.",
    detail: "7-10 business days",
  },
  {
    number: "04",
    title: "Mass Production",
    description:
      "Upon sample approval, our artisans begin full production with rigorous quality control at every stage. No shortcuts. No compromises.",
    detail: "15-25 business days",
  },
  {
    number: "05",
    title: "Worldwide Delivery",
    description:
      "Your order is carefully packaged and dispatched with full tracking. We ship to boutiques, event venues, warehouses, and residences across the globe.",
    detail: "DHL / FedEx / Sea freight",
  },
];

export default function CustomProcess() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50 border-t border-ivory-200">
      <div className="container-luxury">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-end">
          <div>
            <span className="section-label">The Process</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 leading-tight">
              From concept to<br />
              <em>creation</em>
            </h2>
          </div>
          <p className="text-charcoal-700/60 leading-relaxed max-w-md lg:text-right lg:ml-auto">
            Our bespoke process is designed to be seamless and transparent.
            You&apos;ll always know where your order stands, and you&apos;ll always love the result.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting vertical line */}
          <div className="hidden lg:block absolute left-[2.75rem] top-0 bottom-0 w-px bg-ivory-200" />

          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="flex gap-8 lg:gap-16 group"
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-[5.5rem] h-[5.5rem] flex items-center justify-center border-2 border-ivory-200 group-hover:border-gold-400 bg-ivory-50 transition-all duration-300 z-10">
                    <span className="font-display text-2xl text-charcoal-700/30 group-hover:text-gold-500 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step content */}
                <div className={`pb-16 flex-1 ${idx === steps.length - 1 ? "pb-0" : ""}`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-charcoal-800 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-charcoal-700/60 leading-relaxed mb-3 max-w-xl">
                        {step.description}
                      </p>
                      <span className="text-[10px] tracking-widest uppercase text-gold-500 font-sans font-medium">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOQ note */}
        <div className="mt-16 p-8 border border-ivory-200 bg-ivory-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-charcoal-800 text-lg font-medium mb-1">
              Flexible minimum order quantities
            </h3>
            <p className="text-sm text-charcoal-700/60">
              We work with boutique studios and global enterprises alike. Starting from as low as 50 units for select collections.
            </p>
          </div>
          <div className="flex gap-6 text-center shrink-0">
            {[
              { value: "50+", label: "Min. Order" },
              { value: "30", label: "Day Lead Time" },
              { value: "Free", label: "Design Consult" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-2xl text-charcoal-800">{item.value}</p>
                <p className="text-[10px] tracking-widest uppercase text-charcoal-700/40 font-sans">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
