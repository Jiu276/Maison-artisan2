import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Maison Artisan handles the information you share while shopping.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24 bg-ivory-50">
      <div className="container-luxury max-w-3xl">
        <span className="section-label">Legal</span>
        <h1 className="font-display text-5xl text-charcoal-800 mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-charcoal-700/70 leading-relaxed">
          <p>
            Maison Artisan sells handmade leather goods directly to individual customers. This page explains what we keep when you browse the shop or write to us.
          </p>
          <p>
            The shopping bag lives only in your browser. We do not send that list to a server, and we do not take payment on this site yet.
          </p>
          <p>
            If you use the contact form, we receive the name, email, and message you type so we can reply. We do not sell that information.
          </p>
          <p>
            Questions about this policy can be sent to{" "}
            <a className="text-charcoal-800 underline" href="mailto:dioneysos@proton.me">
              dioneysos@proton.me
            </a>
            . You can return to the{" "}
            <Link href="/collections" className="text-charcoal-800 underline">
              shop
            </Link>{" "}
            at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
