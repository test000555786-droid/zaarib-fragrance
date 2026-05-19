import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Gift, Package, Users, ArrowRight } from "lucide-react";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services – Zaarib Fragrances",
  description: "Explore our bespoke services: Bulk Orders, Corporate Gifting, and Free Consultations at Zaarib Fragrances.",
};

const SERVICES = [
  {
    id: "bulk-orders",
    title: "Bulk Orders",
    icon: Package,
    desc: "Whether you need custom scents for weddings, events, or retail distribution, we offer premium bulk manufacturing with uncompromising quality. Our expert perfumers work closely with you to scale up production while maintaining the exact scent profile and longevity of the original blend.",
    features: ["Event Giveaways & Weddings", "Retail & White Labeling", "Customizable Bottle Sizes", "Wholesale Pricing"],
  },
  {
    id: "corporate-gifting",
    title: "Corporate Gifting",
    icon: Gift,
    desc: "Leave a lasting impression with our luxury corporate gifting solutions. We curate exclusive gift boxes featuring our premium Oud, Attars, and EDPs, perfectly tailored to your brand identity. Elevate your corporate relationships with the gift of a signature scent.",
    features: ["Custom Branded Packaging", "Curated Scent Selection", "Personalized Notes", "Premium Presentation Boxes"],
  },
  {
    id: "consultation",
    title: "Free Consultation",
    icon: Users,
    desc: "Not sure which fragrance suits you or your brand? Book a free consultation with our master perfumers. We'll guide you through our extensive collection of notes, help you understand fragrance families, and assist you in finding or creating the perfect scent.",
    features: ["One-on-One Expert Guidance", "Scent Profile Analysis", "Walk-in or Virtual Sessions", "No Purchase Obligation"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-[72px] bg-ink">
      <div className="container-brand py-14">
        
        {/* Hero Section */}
        <div className="text-center max-w-[680px] mx-auto mb-20">
          <div className="label mb-4.5">Zaarib Exclusive</div>
          <h1 className="font-display text-cream font-normal mb-4.5" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", lineHeight: 1.12 }}>
            Our Premium<br />
            <em className="text-gold italic font-serif">Services</em>
          </h1>
          <p className="font-body text-cream/45 text-[15.5px] leading-relaxed">
            Beyond our curated collections, we offer specialized services tailored to your unique needs. From corporate gifting to bulk orders, experience the luxury of Zaarib on a grander scale.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20 mb-20">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.id} id={s.id} className="scroll-mt-[100px] bg-ink-2 border border-gold/10 rounded-md p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -mr-10 -mt-10 pointer-events-none transition-opacity group-hover:bg-gold/10" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10">
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center bg-ink shadow-[0_0_15px_rgba(201,168,76,0.08)]">
                        <Icon size={20} className="text-gold" />
                      </div>
                      <h2 className="font-display text-cream text-[2rem] font-normal">{s.title}</h2>
                    </div>
                    
                    <p className="font-body text-cream/55 text-[14.5px] leading-[1.8] mb-8 max-w-[90%]">
                      {s.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {s.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                          <span className="font-body text-cream/60 text-[13.5px]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-4 flex flex-col justify-center h-full gap-4 md:border-l md:border-gold/10 md:pl-10 md:py-4">
                    <a 
                      href={`https://wa.me/${site.whatsapp}?text=Hi!%20I'd%20like%20to%20inquire%20about%20your%20${s.title}%20service.`} 
                      target="_blank" rel="noopener noreferrer"
                      className="btn-gold w-full justify-center text-[12px] py-4"
                    >
                      <MessageCircle size={15} /> Inquire via WhatsApp
                    </a>
                    <Link href="/contact" className="btn-outline w-full justify-center text-[12px] py-4">
                      Contact Us <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Fragrance CTA */}
        <div className="text-center p-10 md:p-16 bg-ink border border-gold/20 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <div className="label mb-4.5">Looking for something else?</div>
            <h2 className="font-display text-cream text-[2.2rem] mb-4 font-normal">Custom Fragrance Studio</h2>
            <p className="font-body text-cream/45 text-[15px] mb-8 max-w-[500px] mx-auto leading-[1.8]">
              We also offer fully custom, bespoke fragrance creation. We blend your personality, lifestyle, and memory into a bottle that is exclusively yours.
            </p>
            <Link href="/custom-fragrance" className="btn-gold inline-flex px-8 py-3.5">
              Explore Custom Fragrance <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
