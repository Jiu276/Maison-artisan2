"use client";

const steps = [
  {
    number: "01",
    title: "Choose a piece",
    description:
      "Open a tote, a wallet, or a small good. The price on the page is the retail price. Nothing is quoted and nothing is sold by the hundred.",
    detail: "One piece is enough",
  },
  {
    number: "02",
    title: "Pick a color",
    description:
      "Each piece is offered in the hides we actually have on the bench. Cognac, black, olive, tan. What you select is what we cut.",
    detail: "Shown on the product page",
  },
  {
    number: "03",
    title: "Add it to your bag",
    description:
      "Set a quantity and add it. The bag stays in this browser so you can keep looking. Checkout is the next step we have not opened yet.",
    detail: "Saved on this device",
  },
  {
    number: "04",
    title: "We cut and stitch",
    description:
      "When an order is placed, the hide is cut, the edges are burnished, and the seams are saddle-stitched. Small batches, not a production line.",
    detail: "Made after you order",
  },
  {
    number: "05",
    title: "It arrives at your door",
    description:
      "The piece is packed in tissue and a plain box, then shipped to you. Complimentary, with tracking.",
    detail: "5-8 business days",
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
            From the shop to the bench. You choose the piece. We cut it from a hide and send it to you.
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
              Buy one. Keep it for years.
            </h3>
            <p className="text-sm text-charcoal-700/60">
              There is no wholesale minimum. Shipping is included, and stitch repairs are complimentary for a year.
            </p>
          </div>
          <div className="flex gap-6 text-center shrink-0">
            {[
              { value: "1", label: "Piece minimum" },
              { value: "Free", label: "Shipping" },
              { value: "1 year", label: "Stitch repairs" },
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
