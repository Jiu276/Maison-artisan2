"use client";

import { CartProvider } from "@/context/CartContext";

/**
 * 包住全站需要浏览器状态的部分。
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
