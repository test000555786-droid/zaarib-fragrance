"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CATS = [
  { name: "Oud & Bakhoor",     desc: "Royal Arabian woods",         count: 8,  icon: "✦", href: "/shop?cat=Oud"     },
  { name: "Pure Attars",       desc: "Alcohol-free natural oils",   count: 12, icon: "◈", href: "/shop?cat=Attar"   },
  { name: "Designer Inspired", desc: "Luxury dupes, real quality",  count: 15, icon: "◆", href: "/shop?cat=Fresh"   },
  { name: "Custom Blends",     desc: "Your signature scent",        count: 0,  icon: "⬡", href: "/contact"          },
];

export default function Categories() {
  return (
    <section className="section bg-ink-2">
      <div className="container-brand">
        <div className="text-center mb-14">
          <div className="label mb-3.5">Explore</div>
          <h2 className="font-display text-cream font-normal" style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}>
            Our Collections
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATS.map((cat, i) => <CatCard key={i} cat={cat} />)}
        </div>
      </div>
    </section>
  );
}

function CatCard({ cat }: { cat: typeof CATS[number] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={cat.href}>
      <motion.div
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={["bg-ink-3 rounded-md p-9 cursor-pointer transition-all duration-300",
          hov ? "border border-gold/38" : "border border-gold/10"].join(" ")}
      >
        <motion.div
          animate={{ opacity: hov ? 0.6 : 0.25 }}
          className="font-serif text-gold text-4xl mb-5 leading-none"
          aria-hidden
        >
          {cat.icon}
        </motion.div>
        <h3 className="font-display text-cream text-[1.15rem] font-normal mb-2">{cat.name}</h3>
        <p className="font-body text-cream/50 text-[13px] mb-4 leading-relaxed">{cat.desc}</p>
        <div className={["flex items-center gap-1 font-body text-[11.5px] transition-colors duration-300",
          hov ? "text-gold" : "text-gold/50"].join(" ")}>
          {cat.count > 0 ? `${cat.count} Fragrances` : "Create Yours"}
          <ArrowRight size={12} />
        </div>
      </motion.div>
    </Link>
  );
}
