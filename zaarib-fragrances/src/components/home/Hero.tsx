"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import PerfumeBottle from "@/components/common/PerfumeBottle";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
});

interface Props { products: Product[]; }

export default function Hero({ products }: Props) {
  const [left, center, right] = products;

  return (
    <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-[120px] pb-24 lg:pt-[92px] lg:pb-0">
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 65% at 65% 50%, rgba(201,168,76,0.055) 0%, transparent 72%)" }} />
      {/* Vertical deco lines */}
      {[{ right: "9%", opacity: 0.28, height: "65%", top: "17%" }, { right: "13%", opacity: 0.12, height: "80%", top: "10%" }].map((l, i) => (
        <div key={i} className="absolute w-px pointer-events-none" style={{ top: l.top, right: l.right, height: l.height, background: `linear-gradient(180deg,transparent,rgba(201,168,76,${l.opacity}),transparent)` }} />
      ))}

      <div className="container-brand w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — copy */}
          <div>
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-px bg-gold opacity-50" />
              <span className="label">Bhubaneswar's Finest Fragrance House</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.18)}
              className="font-display text-cream font-normal leading-[1.07] mb-6"
              style={{ fontSize: "clamp(2.75rem,5vw,5rem)" }}
            >
              Craft Your<br />
              <em className="text-gold italic">Signature</em><br />
              Scent
            </motion.h1>

            <motion.p {...fadeUp(0.28)} className="font-body text-cream/55 text-base leading-[1.85] max-w-[430px] mb-10 font-light">
              Premium Oud, pure Attars & custom fragrances for those who wear their identity. 100+ curated scents, handpicked for Odisha.
            </motion.p>

            <motion.div {...fadeUp(0.36)} className="flex flex-wrap gap-3.5 mb-14">
              <Link href="/shop" className="btn-gold">Shop Now <ArrowRight size={14} /></Link>
              <Link href="/contact" className="btn-outline">Visit Store</Link>
            </motion.div>

            <motion.div {...fadeUp(0.46)} className="flex gap-10">
              {[["100+","Curated Scents"],["5 ★","Google Rating"],["3+","Years of Trust"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="font-display text-gold text-3xl font-normal leading-none">{val}</div>
                  <div className="label mt-1.5">{lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — bottles */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }}
            className="hidden lg:flex items-end justify-center gap-4 relative pb-5"
          >
            {[
              { p: left,   scale: 0.88, opacity: 0.6, h: 135, translateY: 0 },
              { p: center, scale: 1.18, opacity: 1.0, h: 192, translateY: -30 },
              { p: right,  scale: 0.88, opacity: 0.6, h: 135, translateY: 0 },
            ].map(({ p, scale, opacity, h, translateY }, i) =>
              p ? (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  style={{ transform: `scale(${scale}) translateY(${translateY}px)`, opacity }}
                  className="flex flex-col items-center gap-3 transition-transform hover:scale-[1.05]"
                >
                  <motion.div
                    animate={{ y: i === 1 ? [0,-10,0] : 0 }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  >
                    <PerfumeBottle colors={p.bottleColor} height={h} glow={i === 1} />
                  </motion.div>
                  {i === 1 && (
                    <div className="text-center">
                      <div className="font-display text-cream text-sm">{p.name}</div>
                      <div className="font-body text-gold text-xs mt-0.5">{formatPrice(p.price)}</div>
                    </div>
                  )}
                </Link>
              ) : null
            )}
            {/* Ground glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ width: "55%", height: 28, background: "rgba(201,168,76,0.1)", filter: "blur(22px)" }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="label" style={{ opacity: 0.25 }}>Scroll</span>
        <motion.div
          animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8" style={{ background: "linear-gradient(180deg,rgba(201,168,76,0.4),transparent)" }}
        />
      </motion.div>
    </section>
  );
}
