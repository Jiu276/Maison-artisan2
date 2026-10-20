"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

/**
 * 购物袋页面：改数量、移除，并显示小计。
 */
export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <>
      <section className="pt-36 pb-12 bg-ivory-100 border-b border-ivory-200">
        <div className="container-luxury">
          <span className="section-label">Your bag</span>
          <h1 className="font-display text-5xl text-charcoal-800">Shopping bag</h1>
        </div>
      </section>

      <section className="py-16 bg-ivory-50">
        <div className="container-luxury">
          {items.length === 0 ? (
            <div className="max-w-lg py-16">
              <p className="text-charcoal-700/70 mb-8 leading-relaxed">
                Your bag is empty. The pieces in the shop are ready to add, one color and one quantity at a time.
              </p>
              <Link href="/collections" className="btn-primary">
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <ul className="lg:col-span-8 divide-y divide-ivory-200 border-y border-ivory-200">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-5 py-6">
                    <Link href={`/collections/${item.slug}`} className="relative w-28 h-36 shrink-0 bg-ivory-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link href={`/collections/${item.slug}`} className="font-display text-2xl text-charcoal-800 hover:text-gold-600">
                            {item.name}
                          </Link>
                          <p className="text-xs tracking-widest uppercase text-charcoal-700/50 mt-1">
                            {item.color}
                          </p>
                        </div>
                        <p className="text-sm text-charcoal-800">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex items-center border border-ivory-200">
                          <button
                            type="button"
                            className="px-3 py-2"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Decrease ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            className="px-3 py-2"
                            onClick={() => updateQuantity(item.id, Math.min(9, item.quantity + 1))}
                            aria-label={`Increase ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs tracking-widest uppercase text-charcoal-700/40 hover:text-charcoal-800 inline-flex items-center gap-2"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="lg:col-span-4">
                <div className="border border-ivory-200 p-6 bg-ivory-100 lg:sticky lg:top-32">
                  <h2 className="font-display text-2xl text-charcoal-800 mb-6">Summary</h2>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-charcoal-700/60">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-6">
                    <span className="text-charcoal-700/60">Shipping</span>
                    <span>Complimentary</span>
                  </div>
                  <div className="flex justify-between border-t border-ivory-200 pt-4 mb-6">
                    <span className="text-xs tracking-widest uppercase">Total</span>
                    <span className="font-display text-2xl">{formatPrice(subtotal)}</span>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="btn-primary w-full justify-center opacity-50 cursor-not-allowed"
                  >
                    Checkout coming later
                  </button>
                  <p className="text-xs text-charcoal-700/50 mt-4 leading-relaxed">
                    You can keep adding pieces. Payment is not part of this shop yet, and nothing will be charged.
                  </p>
                  <Link href="/collections" className="btn-ghost mt-6">
                    Continue shopping
                  </Link>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
