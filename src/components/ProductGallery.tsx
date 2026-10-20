"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

/**
 * 商品大图和可切换的缩略图。
 */
export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory-100">
        <Image
          src={current}
          alt={name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`relative aspect-square overflow-hidden bg-ivory-100 border ${
              index === active ? "border-charcoal-800" : "border-transparent"
            }`}
            aria-label={`Show image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${name} view ${index + 1}`}
              fill
              className="object-cover"
              sizes="160px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
