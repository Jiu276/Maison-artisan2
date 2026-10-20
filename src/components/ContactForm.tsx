"use client";

import { useState, useRef } from "react";
import { Upload, CheckCircle, Send } from "lucide-react";

const projectTypes = [
  "Wedding Favor Bags",
  "Bride / Bridal Party Bags",
  "Luxury Welcome Bags",
  "Luxury Gift Bags",
  "Boutique Shopping Bags",
  "Corporate Gift Packaging",
  "Event Packaging",
  "Brand Custom Bags",
  "Wholesale Inquiry",
  "Other / Fully Bespoke",
];

const quantityRanges = [
  "50-100 units",
  "100-300 units",
  "300-500 units",
  "500-1,000 units",
  "1,000-5,000 units",
  "5,000+ units",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-gold-500/10 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-gold-500" />
        </div>
        <h2 className="font-display text-3xl text-charcoal-800 mb-3">
          Thank you for reaching out
        </h2>
        <div className="w-10 h-px bg-gold-400 mx-auto mb-5" />
        <p className="text-charcoal-700/60 max-w-md leading-relaxed text-base">
          We&apos;ve received your inquiry and will respond within 24 hours with
          a tailored proposal for your project. We look forward to creating something
          beautiful together.
        </p>
        <p className="mt-6 text-xs tracking-widest uppercase text-gold-500 font-sans font-medium">
          Maison Artisan Studio
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Personal info */}
      <div>
        <p className="text-[10px] tracking-widest3 uppercase font-medium text-charcoal-700/40 mb-6">
          01 - Your Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className="form-label">Your Name *</label>
            <input required type="text" placeholder="Alexandra Whitfield" className="form-input" />
          </div>
          <div>
            <label className="form-label">Company / Studio</label>
            <input type="text" placeholder="The Ashworth Agency" className="form-input" />
          </div>
          <div>
            <label className="form-label">Email Address *</label>
            <input required type="email" placeholder="hello@yourbrand.com" className="form-input" />
          </div>
          <div>
            <label className="form-label">Country</label>
            <input type="text" placeholder="United States" className="form-input" />
          </div>
        </div>
      </div>

      {/* Project info */}
      <div>
        <p className="text-[10px] tracking-widest3 uppercase font-medium text-charcoal-700/40 mb-6">
          02 - Project Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className="form-label">Project Type *</label>
            <select required className="form-input bg-transparent cursor-pointer appearance-none">
              <option value="" disabled>Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label">Estimated Quantity</label>
            <select className="form-input bg-transparent cursor-pointer appearance-none">
              <option value="" disabled>Select quantity range</option>
              {quantityRanges.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label">Event / Delivery Date</label>
            <input type="date" className="form-input" />
          </div>
          <div>
            <label className="form-label">Budget Range (Optional)</label>
            <input type="text" placeholder="e.g. USD 2,000 - 5,000" className="form-input" />
          </div>
        </div>
      </div>

      {/* Custom requirements */}
      <div>
        <p className="text-[10px] tracking-widest3 uppercase font-medium text-charcoal-700/40 mb-6">
          03 - Customization &amp; Vision
        </p>
        <div className="space-y-8">
          <div>
            <label className="form-label">Tell us about your project *</label>
            <textarea
              required
              rows={5}
              placeholder="Describe your vision - the occasion, your aesthetic, preferred materials, colors, any existing brand guidelines, or references you love. The more detail you share, the better we can serve you."
              className="form-input resize-none"
            />
          </div>

          {/* File upload */}
          <div>
            <label className="form-label">Upload Design Files / References (Optional)</label>
            <div
              className="mt-1 border border-dashed border-charcoal-700/20 p-8 text-center cursor-pointer hover:border-gold-400 transition-colors duration-200 group"
              onClick={() => fileRef.current?.click()}
            >
              <Upload size={20} className="mx-auto mb-3 text-charcoal-700/30 group-hover:text-gold-400 transition-colors" />
              <p className="text-sm text-charcoal-700/50 group-hover:text-charcoal-700 transition-colors">
                {fileName ? (
                  <span className="text-gold-500 font-medium">{fileName}</span>
                ) : (
                  <>
                    Drop files here or <span className="text-charcoal-800 underline">browse</span>
                  </>
                )}
              </p>
              <p className="text-[10px] text-charcoal-700/30 mt-1 tracking-wide">
                PDF, AI, PNG, JPG · Max 20MB
              </p>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.ai,.png,.jpg,.jpeg"
                className="hidden"
                onChange={handleFile}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button type="submit" className="btn-primary group w-full sm:w-auto justify-center sm:justify-start">
          Send Inquiry
          <Send size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
        <p className="mt-4 text-xs text-charcoal-700/40 leading-relaxed">
          We respect your privacy. Your information is used solely to respond to your inquiry
          and will never be shared with third parties.
          Expect our response within 24 business hours.
        </p>
      </div>
    </form>
  );
}
