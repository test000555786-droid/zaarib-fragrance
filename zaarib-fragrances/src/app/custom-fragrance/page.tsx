import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Check } from "lucide-react";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Custom Fragrance Studio – Zaarib Fragrances",
  description: "The only fragrance studio in Bhubaneswar offering fully custom, bespoke fragrance creation. We blend your personality, lifestyle, and memory into a bottle.",
};

const STEPS = [
  { n: "01", title: "Consultation", desc: "Visit our store or WhatsApp us. Share your lifestyle, preferences, and the occasions you want to smell perfect for." },
  { n: "02", title: "Trial & Selection", desc: "We curate 8–12 base options aligned with your taste. You try, assess, and eliminate to find your perfect foundation." },
  { n: "03", title: "The Blend", desc: "Our master blender combines your chosen top, heart, and base notes into a formula that is uniquely, unmistakably you." },
  { n: "04", title: "Your Signature", desc: "Named by you, bottled and sealed. Your custom fragrance — exclusively yours. No one else on earth smells like you." },
];

export default function CustomFragrancePage() {
  return (
    <div className="min-h-screen pt-[72px] bg-ink">
      <div className="container-brand py-14">
        
        {/* Hero Section */}
        <div className="text-center max-w-[680px] mx-auto mb-20">
          <div className="label mb-4.5">Exclusive Bhubaneswar Service</div>
          <h1 className="font-display text-cream font-normal mb-4.5" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", lineHeight: 1.12 }}>
            Your Scent.<br />
            <em className="text-gold italic font-serif">Your Identity.</em>
          </h1>
          <p className="font-body text-cream/45 text-[15.5px] leading-relaxed">
            The only fragrance studio in Bhubaneswar offering fully custom, bespoke fragrance creation. We blend your personality, lifestyle, and memory into a bottle that is exclusively yours.
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative mb-20">
          {/* Connecting line */}
          <div className="absolute top-[30px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold via-gold to-gold opacity-20 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center relative px-3">
                <div className="w-[60px] h-[60px] rounded-full border border-gold flex items-center justify-center mx-auto mb-6 font-display text-gold text-lg bg-ink relative z-10 shadow-[0_0_24px_rgba(201,168,76,0.12)]">
                  {s.n}
                </div>
                <h3 className="font-display text-cream text-[1.3rem] mb-3 font-normal">{s.title}</h3>
                <p className="font-body text-cream/45 text-[13.5px] leading-[1.75]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features / Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            { t: "Note Families", items: ["Fresh & Citrus", "Floral & Romantic", "Woody & Earthy", "Oriental & Spicy", "Oud & Smoky", "Aquatic & Marine"] },
            { t: "Longevity Options", items: ["EDP Strength (8–12hrs)", "Attar Concentration (All Day)", "EDC Light (4–6hrs)", "Custom % Oil"] },
          ].map((sec, i) => (
            <div key={i} className="bg-ink-2 border border-gold/10 rounded-md p-9">
              <h3 className="font-display text-cream text-[1.4rem] mb-5 font-normal">{sec.t}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sec.items.map((it) => (
                  <div key={it} className="flex gap-2.5 items-center font-body text-cream/45 text-[13.5px]">
                    <Check size={13} className="text-gold flex-shrink-0" /> {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-10 md:p-16 bg-ink-2 rounded-lg border border-gold/10">
          <div className="label mb-4.5">Start Your Journey</div>
          <h2 className="font-display text-cream text-[2.6rem] mb-3.5 font-normal">Ready to Create?</h2>
          <p className="font-body text-cream/45 text-[15px] mb-9 leading-[1.8]">
            Starting from ₹1,499 · Walk-in or appointment · 30–60 minute session
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a 
              href={`https://wa.me/${site.whatsapp}?text=Hi!%20I'd%20like%20to%20create%20a%20custom%20fragrance%20at%20Zaarib.`} 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-9 py-4 rounded-sm font-body text-[12px] tracking-[0.14em] uppercase font-bold transition-all hover:bg-[#20B958]"
            >
              <MessageCircle size={15} /> Start via WhatsApp
            </a>
            <Link 
              href="/contact" 
              className="btn-outline px-8 py-4"
            >
              Book Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
