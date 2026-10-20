"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import type { ProductColor } from "@/data/products";
import { useCart } from "@/context/CartContext";

type AddToCartProps = {
  slug: string;
  name: string;
  price: number;
  image: string;
  colors: ProductColor[];
};

/**
 * 商品页上的颜色、数量和加入购物袋。
 */
export default function AddToCart({
  slug,
  name,
  price,
  image,
  colors,
}: AddToCartProps) {
  const { addItem } = useCart();
  const [color, setColor] = useState(colors[0]?.name ?? "Default");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({ slug, name, price, color, image, quantity });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div>
      <p className="text-[10px] tracking-widest uppercase font-medium text-charcoal-700/60 mb-3">
        Color
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {colors.map((option) => {
          const selected = option.name === color;
          return (
            <button
              key={option.name}
              type="button"
              onClick={() => setColor(option.name)}
              className={`flex items-center gap-2 border px-3 py-2 text-xs tracking-wider uppercase transition-colors ${
                selected
                  ? "border-charcoal-800 text-charcoal-800"
                  : "border-ivory-200 text-charcoal-700/60 hover:border-charcoal-700"
              }`}
              aria-pressed={selected}
            >
              <span
                className="inline-block h-3 w-3 border border-charcoal-800/20"
                style={{ backgroundColor: option.hex }}
              />
              {option.name}
            </button>
          );
        })}
      </div>

      <p className="text-[10px] tracking-widest uppercase font-medium text-charcoal-700/60 mb-3">
        Quantity
      </p>
      <div className="flex items-center border border-ivory-200 w-fit mb-8">
        <button
          type="button"
          className="px-4 py-3 text-charcoal-800 hover:text-gold-500"
          onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        <span className="w-10 text-center text-sm">{quantity}</span>
        <button
          type="button"
          className="px-4 py-3 text-charcoal-800 hover:text-gold-500"
          onClick={() => setQuantity((value) => Math.min(9, value + 1))}
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>

      <button type="button" onClick={handleAdd} className="btn-primary w-full justify-center">
        {added ? <Check size={16} /> : <ShoppingBag size={16} />}
        {added ? "Added to bag" : "Add to bag"}
      </button>
      <p className="mt-4 text-xs text-charcoal-700/50 leading-relaxed">
        Your bag is saved in this browser. Checkout and payment are not open yet.
      </p>
    </div>
  );
}
