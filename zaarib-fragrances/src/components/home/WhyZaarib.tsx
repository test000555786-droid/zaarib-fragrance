"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: "✦", title: "100% Genuine",     desc: "Every product sourced directly — no imitations, no shortcuts. We stake our reputation on authenticity." },
  { icon: "◈", title: "Long Lasting",     desc: "High-concentration oils and attars designed for all-day performance. Our Oud attars last 12–16 hours." },
  { icon: "◆", title: "Expert Guidance",  desc: "Our trained staff helps you discover your perfect scent with zero pressure. We listen first." },
  { icon: "⬡", title: "Custom Blends",    desc: "The only bespoke fragrance studio in Bhubaneswar. Your personality, bottled from scratch." },
];

export default function WhyZaarib() {
  return (
    <section className="section bg-ink-2">
      <div className="container-brand">
        <div className="text-center mb-14">
          <div className="label mb-3.5">Our Promise</div>
          <h2 className="font-display text-cream font-normal" style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}>
            Why Choose Zaarib?
          </h2>
          <p className="font-body text-cream/45 text-sm mt-4 max-w-[500px] mx-auto leading-7">
            We built Zaarib on three unbreakable pillars: authenticity, expertise, and an obsessive love for fragrance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => <FeatureCard key={i} feat={f} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feat }: { feat: typeof FEATURES[number] }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={["bg-ink-3 rounded-md p-8 text-center transition-all duration-300",
        hov ? "border border-gold/32" : "border border-gold/10"].join(" ")}
    >
      <motion.div animate={{ opacity: hov ? 0.65 : 0.28 }} className="font-serif text-gold text-3xl mb-5 leading-none" aria-hidden>
        {feat.icon}
      </motion.div>
      <h3 className="font-display text-cream text-[1.1rem] font-normal mb-3">{feat.title}</h3>
      <p className="font-body text-cream/48 text-[13.5px] leading-[1.75]">{feat.desc}</p>
    </motion.div>
  );
}
