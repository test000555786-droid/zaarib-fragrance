"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  { name: "Priya Mohanty",   loc: "Bhubaneswar", rating: 5, text: "Absolutely amazing fragrances! The Oud Royale is my all-time favourite. Genuine products, incredibly long-lasting. The staff was knowledgeable and so helpful.", time: "2 weeks ago",   initials: "PM" },
  { name: "Rahul Das",       loc: "Cuttack",      rating: 5, text: "Best attar shop in Odisha without question. The custom fragrance service is a game-changer. They crafted my signature scent perfectly. Highly recommend!", time: "1 month ago",   initials: "RD" },
  { name: "Sneha Pattnaik",  loc: "Bhubaneswar", rating: 5, text: "Great selection at very fair prices. Friendly, patient staff — zero pressure selling. The Amber Noir is simply divine on my husband. Will absolutely come back!", time: "3 weeks ago",  initials: "SP" },
  { name: "Arijit Roy",      loc: "Kolkata",      rating: 5, text: "Came from Kolkata after a friend recommended Zaarib. Worth every kilometre. The Bakhoor Night fragrance is unlike anything I have ever experienced.", time: "1 month ago",   initials: "AR" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="section bg-ink" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container-brand">
        <div className="text-center mb-14">
          <div className="label mb-3.5">Google Reviews</div>
          <h2 className="font-display text-cream font-normal mb-4" style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}>
            What Our Customers Say
          </h2>
          <div className="inline-flex items-center gap-2.5 bg-ink-2 border border-gold/15 px-5 py-2.5 rounded-full">
            <div className="flex gap-0.5">{[1,2,3,4,5].map((n) => <Star key={n} size={13} fill="#C9A84C" color="#C9A84C" />)}</div>
            <span className="font-body text-gold text-sm font-semibold">4.9</span>
            <span className="font-body text-cream/45 text-sm">· 120+ verified reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              animate={{ borderColor: i === active ? "rgba(201,168,76,0.38)" : "rgba(201,168,76,0.1)" }}
              transition={{ duration: 0.4 }}
              className="bg-ink-2 rounded-md p-7"
            >
              <div className="flex gap-0.5 mb-4">{Array.from({length:r.rating}).map((_,j) => <Star key={j} size={13} fill="#C9A84C" color="#C9A84C" />)}</div>
              <blockquote className="font-body text-cream/80 text-[16.5px] italic leading-[1.72] mb-5">"{r.text}"</blockquote>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center font-body text-gold text-xs font-bold flex-shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-body text-cream text-sm font-medium">{r.name}</div>
                    <div className="font-body text-cream/35 text-xs mt-0.5">{r.loc}</div>
                  </div>
                </div>
                <div className="font-body text-cream/25 text-xs">{r.time}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3">
          <button onClick={() => setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length)}
            className="w-9 h-9 rounded-full border border-gold/20 hover:border-gold/45 flex items-center justify-center text-cream/50 hover:text-gold transition-all">
            <ChevronLeft size={15} />
          </button>
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === active ? 24 : 8, height: 8, background: i === active ? "#C9A84C" : "rgba(201,168,76,0.22)" }}
            />
          ))}
          <button onClick={() => setActive((a) => (a + 1) % REVIEWS.length)}
            className="w-9 h-9 rounded-full border border-gold/20 hover:border-gold/45 flex items-center justify-center text-cream/50 hover:text-gold transition-all">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
