"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingBag, MessageCircle, Clock, Wind, Check, Minus, Plus, Heart, Star } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cartStore";
import { site } from "@/config/site";
import { formatPrice, discount } from "@/lib/utils";
import PerfumeBottle from "@/components/common/PerfumeBottle";
import ProductCard from "@/components/shop/ProductCard";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetail({ product: p, related }: Props) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCart();

  const size = p.sizes[sizeIdx];
  const origForSize = Math.round(p.originalPrice * (size.price / p.price));
  const disc = discount(size.price, origForSize);

  const waMsg = encodeURIComponent(
    `Hi! I would like to order "${p.name}" (${size.ml}ml) from Zaarib Fragrances. Please confirm availability.`
  );

  function handleAdd() {
    for (let i = 0; i < qty; i++) {
      addItem({ id: p.id, slug: p.slug, name: p.name, price: size.price, ml: size.ml, bottleColor: p.bottleColor });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen pt-[72px] bg-ink">
      <div className="container-brand py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-12 font-body text-xs text-cream/40">
          <Link href="/" className="hover:text-cream transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/shop" className="hover:text-cream transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-gold">{p.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-gradient-to-b from-ink-3 to-[#0a0a0a] border border-gold/15 rounded-lg p-20 flex flex-col items-center relative mb-3 min-h-[420px]">
              {/* Glow */}
              <div className="absolute w-56 h-56 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${p.bottleColor[0]}30, transparent)`, filter: "blur(50px)" }} />

              <motion.div animate={{ y: [0,-10,0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="relative z-10">
                <PerfumeBottle colors={p.bottleColor} height={260} glow name={p.name} />
              </motion.div>

              {p.badge && (
                <span className="absolute top-4 left-4 bg-gold/10 border border-gold/30 text-gold font-body text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              {disc > 0 && (
                <span className="absolute top-4 right-4 bg-red-500/10 border border-red-500/25 text-red-400 font-body text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {disc}% OFF
                </span>
              )}
            </div>
            {/* Thumbs */}
            <div className="grid grid-cols-3 gap-3">
              {[0,1,2].map((i) => (
                <button key={i} className={["bg-ink-2 border rounded p-3 flex justify-center transition-colors", i === 0 ? "border-gold/45" : "border-gold/10 hover:border-gold/25"].join(" ")}>
                  <PerfumeBottle colors={p.bottleColor} height={56} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            {p.badge && (
              <span className="bg-gold/10 border border-gold/30 text-gold font-body text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full mb-4 inline-block">
                {p.badge}
              </span>
            )}
            <div className="font-body text-gold/55 text-[10.5px] tracking-[0.26em] uppercase mt-4 mb-2">
              {p.category} · {p.gender}
            </div>
            <h1 className="font-display text-cream font-normal leading-[1.08] mb-2" style={{ fontSize: "clamp(2.25rem,4vw,3.25rem)" }}>
              {p.name}
            </h1>
            <p className="font-body text-cream/50 text-lg italic mb-4">{p.tagline}</p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-5">
              {[1,2,3,4,5].map((n) => <Star key={n} size={13} fill="#C9A84C" color="#C9A84C" />)}
              <span className="font-body text-gold text-sm font-semibold">4.9</span>
              <span className="font-body text-cream/45 text-sm">· 15 reviews</span>
            </div>

            <p className="font-body text-cream/60 text-[15px] leading-[1.9] mb-7">{p.description}</p>

            <div className="gold-rule mb-7" />

            {/* Notes */}
            <div className="mb-7">
              <h3 className="label mb-4">Fragrance Notes</h3>
              {([["Top Notes", p.notes.top], ["Heart Notes", p.notes.middle], ["Base Notes", p.notes.base]] as [string, string[]][]).map(([lbl, notes]) => (
                <div key={lbl} className="flex gap-4 items-start mb-3">
                  <span className="font-body text-cream/35 text-[11px] w-20 flex-shrink-0 pt-1">{lbl}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {notes.map((n) => (
                      <span key={n} className="font-body text-cream text-[12.5px] bg-gold/7 border border-gold/18 px-3 py-1 rounded-full">{n}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="gold-rule mb-6" />

            {/* Specs */}
            <div className="flex gap-8 mb-6">
              {([["Longevity", p.longevity, Clock], ["Projection", p.projection, Wind]] as [string, string, any][]).map(([lbl, val, Icon]) => (
                <div key={lbl}>
                  <div className="flex items-center gap-1.5 text-gold/45 mb-1.5">
                    <Icon size={12} />
                    <span className="font-body text-[10px] tracking-[0.22em] uppercase">{lbl}</span>
                  </div>
                  <div className="font-display text-cream text-base">{val}</div>
                </div>
              ))}
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="label mb-3">Select Size</h3>
              <div className="flex gap-2.5">
                {p.sizes.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSizeIdx(i)}
                    className={[
                      "border rounded py-2.5 px-4 font-body text-sm transition-all",
                      sizeIdx === i ? "bg-gold/12 border-gold/50 text-gold" : "bg-transparent border-cream/15 text-cream/55 hover:border-cream/35",
                    ].join(" ")}
                  >
                    {s.ml}ml
                    <span className={["block text-[11px] mt-0.5", sizeIdx === i ? "text-gold" : "text-cream/30"].join(" ")}>{formatPrice(s.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-7">
              <span className="font-display text-gold font-normal" style={{ fontSize: "2.5rem", lineHeight: 1 }}>{formatPrice(size.price)}</span>
              <span className="font-body text-cream/25 text-xl line-through">{formatPrice(origForSize)}</span>
              {disc > 0 && <span className="font-body text-green-400 text-xs bg-green-400/8 border border-green-400/18 px-2.5 py-1 rounded-full font-semibold">{disc}% saved</span>}
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 items-center mb-3">
              <div className="flex items-center border border-gold/20 rounded-sm overflow-hidden flex-shrink-0">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-cream/60 hover:text-cream px-4 py-3.5 transition-colors"><Minus size={13} /></button>
                <span className="font-body text-cream text-sm min-w-[32px] text-center">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="text-cream/60 hover:text-cream px-4 py-3.5 transition-colors"><Plus size={13} /></button>
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleAdd}
                className={["flex-1 flex items-center justify-center gap-2 py-4 rounded-sm font-body text-[12px] tracking-[0.16em] uppercase font-bold transition-all", added ? "bg-green-500/10 border border-green-500/30 text-green-400" : "bg-gold text-ink hover:bg-gold-light"].join(" ")}
              >
                {added ? <><Check size={14} /> Added!</> : <><ShoppingBag size={14} /> Add to Cart</>}
              </motion.button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={["flex items-center justify-center w-12 h-12 border rounded-sm transition-all", wishlisted ? "border-red-400/35 bg-red-400/5" : "border-cream/18 hover:border-cream/35"].join(" ")}
              >
                <Heart size={15} fill={wishlisted ? "#EF4444" : "none"} color={wishlisted ? "#EF4444" : "rgba(237,224,200,0.55)"} />
              </button>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${waMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-sm font-body text-[12px] tracking-[0.14em] uppercase font-semibold bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors mb-5"
            >
              <MessageCircle size={14} /> Order via WhatsApp
            </a>

            {/* Trust */}
            <div className="flex flex-wrap gap-3 p-4 bg-gold/4 border border-gold/10 rounded">
              {["100% Genuine", "Free Shipping >₹1,999", "7-Day Returns", "Expert Guided"].map((t) => (
                <span key={t} className="font-body text-cream/45 text-[11px]">✓ {t}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section>
            <div className="flex justify-between items-end mb-7">
              <div>
                <div className="label mb-2">You May Also Like</div>
                <h2 className="font-display text-cream text-2xl font-normal">Related Fragrances</h2>
              </div>
              <Link href="/shop" className="btn-ghost-gold text-[11px]">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => <ProductCard key={r.id} product={r} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
