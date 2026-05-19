"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cartStore";
import { formatPrice, discount } from "@/lib/utils";
import PerfumeBottle from "@/components/common/PerfumeBottle";

export default function ProductCard({ product: p }: { product: Product }) {
  const [hov, setHov] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const disc = discount(p.price, p.originalPrice);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: p.id,
      slug: p.slug,
      name: p.name,
      price: p.price,
      ml: p.sizes[0].ml,
      bottleColor: p.bottleColor,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.article
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={[
        "bg-ink-2 rounded-md overflow-hidden cursor-pointer transition-all duration-300",
        hov ? "border border-gold/35 shadow-[0_20px_60px_rgba(0,0,0,0.6)]" : "border border-gold/10",
      ].join(" ")}
    >
      <Link href={`/product/${p.slug}`} className="block">
        {/* Visual */}
        <div className="relative bg-gradient-to-b from-ink-3 to-[#0a0a0a] p-10 flex items-center justify-center min-h-[200px]">
          {/* Glow */}
          <motion.div
            animate={{ opacity: hov ? 0.5 : 0.15, scale: hov ? 1.2 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute w-28 h-28 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${p.bottleColor[0]}60, transparent)`, filter: "blur(28px)" }}
          />

          <motion.div animate={{ y: hov ? -6 : 0 }} transition={{ duration: 0.5 }}>
            <PerfumeBottle colors={p.bottleColor} height={140} glow={hov} />
          </motion.div>

          {/* Badges */}
          {p.badge && (
            <span className="absolute top-3 left-3 bg-gold/10 border border-gold/30 text-gold font-body text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full">
              {p.badge}
            </span>
          )}
          {disc >= 20 && (
            <span className="absolute top-3 right-3 bg-red-500/10 border border-red-500/25 text-red-400 font-body text-[10px] font-bold px-2.5 py-1 rounded-full">
              {disc}% OFF
            </span>
          )}
          {p.stockCount && p.stockCount <= 10 && (
            <span className="absolute bottom-3 left-3 font-body text-amber-400 text-[10px] tracking-[0.1em] uppercase">
              Only {p.stockCount} left
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="font-body text-gold/55 text-[10px] tracking-[0.28em] uppercase mb-1.5">
            {p.category} · {p.gender}
          </div>
          <h2 className="font-display text-cream text-xl font-normal mb-1 leading-snug">{p.name}</h2>
          <p className="font-body text-cream/45 text-[13px] italic mb-4 leading-relaxed">{p.tagline}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-body text-gold text-lg font-semibold">{formatPrice(p.price)}</span>
              <span className="font-body text-cream/25 text-xs line-through">{formatPrice(p.originalPrice)}</span>
            </div>
            <motion.div animate={{ color: hov ? "#C9A84C" : "rgba(237,224,200,0.3)" }} transition={{ duration: 0.2 }}>
              <ArrowRight size={15} />
            </motion.div>
          </div>
        </div>
      </Link>

      {/* Add to cart (reveals on hover) */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: hov ? 1 : 0, height: hov ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden px-5 pb-5"
      >
        <button
          onClick={handleAdd}
          className={[
            "w-full flex items-center justify-center gap-2 py-3 rounded-sm font-body text-[11px] tracking-[0.14em] uppercase font-bold transition-all",
            added
              ? "bg-green-500/10 border border-green-500/30 text-green-400"
              : "bg-gold text-ink hover:bg-gold-light",
          ].join(" ")}
        >
          <ShoppingBag size={13} />
          {added ? "Added!" : "Add to Cart"}
        </button>
      </motion.div>
    </motion.article>
  );
}
