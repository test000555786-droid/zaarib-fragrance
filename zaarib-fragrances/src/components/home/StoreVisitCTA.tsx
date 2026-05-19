import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { site } from "@/config/site";

export default function StoreVisitCTA() {
  return (
    <section className="py-20 bg-ink-2 border-t border-b border-gold/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
      <div className="container-brand relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left */}
          <div>
            <div className="label mb-5">Visit Us In Person</div>
            <h2 className="font-display text-cream font-normal leading-[1.15] mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Experience Fragrance{" "}
              <em className="text-gold italic">In Person</em>
            </h2>
            <p className="font-body text-cream/50 text-[15px] leading-[1.85] max-w-[520px] mb-7">
              The true magic of fragrance can only be felt on your skin. Come to our store at Royal Arcade, Raghunathpur, Bhubaneswar. Try anything for free, with zero pressure.
            </p>
            <div className="flex items-start gap-2.5 mb-8">
              <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-body text-cream/60 text-[15px]">{site.address}</span>
                <br />
                <span className="font-body text-cream/35 text-sm">{site.hours.weekday} · {site.hours.weekend}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${site.phoneRaw}`} className="btn-gold">
                <Phone size={14} /> Call Now
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold text-xs tracking-widest uppercase px-7 py-4 rounded-sm hover:bg-[#22c55e] transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <Link href="/contact" className="btn-outline">Get Directions</Link>
            </div>
          </div>

          {/* Right — trust card */}
          <div className="bg-ink-3 border border-gold/15 rounded-lg p-8 min-w-[260px]">
            <div className="flex items-center gap-2 mb-5 pb-5 border-b border-gold/10">
              <div className="flex gap-0.5">{[1,2,3,4,5].map((n) => <span key={n} className="text-gold text-base">★</span>)}</div>
              <div>
                <div className="font-body text-gold font-bold text-base leading-none">4.9</div>
                <div className="font-body text-cream/35 text-[11px] mt-0.5">120+ Google Reviews</div>
              </div>
            </div>
            {["✓ 100% Genuine Products", "✓ Free Try Before Buy", "✓ Expert Guidance", "✓ Custom Fragrance Studio", "✓ Free Shipping >₹1,999"].map((t) => (
              <div key={t} className="font-body text-cream/60 text-sm mb-3">{t}</div>
            ))}
            <div className="mt-5 pt-5 border-t border-gold/10">
              <p className="font-body text-cream/35 text-xs mb-3">Quick order from anywhere in India:</p>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-sm bg-[#25D366] text-white font-body font-semibold text-xs tracking-widest uppercase hover:bg-[#22c55e] transition-colors">
                <MessageCircle size={13} /> Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
