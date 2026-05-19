import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – The Story Behind Zaarib Fragrances",
  description:
    "Learn the story behind Zaarib Fragrances — Bhubaneswar's finest perfume destination. Our passion for authentic Oud, pure Attars, and the art of perfumery.",
};

const MILESTONES = [
  { year: "2021", event: "Zaarib opens its first store at Royal Arcade, Bhubaneswar." },
  { year: "2022", event: "Launch of the Custom Fragrance Studio — first in Odisha." },
  { year: "2023", event: "Expanded to 100+ curated scents. Reached 500+ happy customers." },
  { year: "2024", event: "Achieved 5★ Google rating with 120+ verified reviews." },
  { year: "2025", event: "Direct sourcing partnerships with Kannauj attar makers & Gulf Oud traders." },
];

const VALUES = [
  { title: "Our Philosophy",  body: "Fragrance is personal. We treat every customer's scent journey as unique — guiding, never selling. Our experts listen first, recommend second, and never push." },
  { title: "Our Sourcing",    body: "We source directly from attar makers in Kannauj, Oud traders in the Gulf, and licensed importers for international fragrances. Quality is non-negotiable." },
  { title: "Our Community",   body: "Zaarib is more than a store. It's a growing community of fragrance lovers across Odisha — beginners and connoisseurs alike, all welcome." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-[72px] bg-ink">
      {/* Hero */}
      <section className="section">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">Our Story</div>
              <h1 className="font-display text-cream font-normal leading-[1.1] mb-7" style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)" }}>
                Born of Passion.<br />
                <em className="text-gold italic">Refined by Art.</em>
              </h1>
              {[
                "Zaarib Fragrances was born from a deep love for the ancient art of perfumery — the kind that transforms memory, emotion, and identity into something invisible yet unforgettable.",
                "Based in Bhubaneswar, we set out with a simple mission: bring the richness of Middle Eastern Oud, pure Indian Attars, and world-class luxury fragrances to Odisha — at honest prices, with expert guidance.",
                "Every bottle we carry is chosen with care. Every custom blend we create is made with pride. We don't just sell fragrances — we help you find your signature.",
              ].map((text, i) => (
                <p key={i} className="font-body text-cream/58 text-[15px] leading-[1.9] mb-4">{text}</p>
              ))}
              <Link href="/shop" className="btn-ghost-gold mt-4 inline-flex">
                Explore Our Fragrances <ArrowRight size={13} />
              </Link>
            </div>
            <div className="bg-ink-2 border border-gold/15 rounded-lg p-12 text-center">
              <div className="font-serif text-gold leading-none select-none pointer-events-none mb-3" style={{ fontSize: 100, opacity: 0.1 }}>ز</div>
              <div className="font-display text-cream text-3xl font-normal mb-2.5">Zaarib — زاریب</div>
              <div className="w-11 h-px bg-gold mx-auto mb-4" style={{ opacity: 0.45 }} />
              <p className="font-body text-cream/50 text-lg italic leading-relaxed mb-7">
                "One who adorns with fragrance"<br /><span className="text-sm">— Arabic origin</span>
              </p>
              <div className="bg-ink-3 border border-gold/10 rounded-md p-5">
                <div className="flex gap-0.5 justify-center mb-2">{[1,2,3,4,5].map((n) => <span key={n} className="text-gold text-base">★</span>)}</div>
                <div className="font-body text-cream text-2xl font-semibold">4.9 / 5.0</div>
                <div className="font-body text-cream/40 text-sm mt-1">Based on 120+ Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-ink-2">
        <div className="container-brand">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[["100+","Fragrances Stocked"],["500+","Happy Customers"],["3+","Years in Business"],["1","Custom Studio in Odisha"]].map(([v,l]) => (
              <div key={l} className="bg-ink-3 border border-gold/10 rounded-md p-6 text-center">
                <div className="font-display text-gold text-4xl font-normal">{v}</div>
                <div className="label mt-2.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-brand">
          <div className="text-center mb-14">
            <div className="label mb-3.5">What We Stand For</div>
            <h2 className="font-display text-cream font-normal" style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}>The Zaarib Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-ink-2 border border-gold/10 hover:border-gold/28 rounded-md p-8 transition-colors duration-300">
                <div className="w-9 h-0.5 bg-gold mb-5" style={{ opacity: 0.55 }} />
                <h3 className="font-display text-cream text-xl font-normal mb-3.5">{v.title}</h3>
                <p className="font-body text-cream/48 text-[13.5px] leading-[1.8]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-ink-2">
        <div className="container-brand max-w-[740px] mx-auto">
          <div className="text-center mb-12">
            <div className="label mb-3.5">Our Journey</div>
            <h2 className="font-display text-cream font-normal" style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}>Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[68px] w-px" style={{ background: "linear-gradient(180deg,transparent,rgba(201,168,76,0.22),rgba(201,168,76,0.22),transparent)" }} />
            {MILESTONES.map((m, i) => (
              <div key={i} className="flex gap-7 items-start mb-8 relative">
                <div className="font-display text-gold text-base font-medium w-14 text-right flex-shrink-0 pt-0.5">{m.year}</div>
                <div className="w-2.5 h-2.5 rounded-full border border-gold bg-ink-2 flex-shrink-0 mt-1.5 relative z-10" />
                <p className="font-body text-cream/65 text-[15px] leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gold/10 text-center">
        <div className="container-brand max-w-[580px] mx-auto">
          <h2 className="font-display text-cream font-normal mb-4" style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}>
            Come Experience It <em className="text-gold italic">In Person</em>
          </h2>
          <p className="font-body text-cream/45 text-[15px] leading-[1.85] mb-8">
            Walk in, smell freely, and let our team guide you. No pressure, no agenda — just an honest love for fragrance.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold">Get Directions</Link>
            <Link href="/shop" className="btn-outline">Browse Online</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
