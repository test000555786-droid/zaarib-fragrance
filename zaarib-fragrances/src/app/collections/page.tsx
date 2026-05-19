import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export const metadata: Metadata = {
  title: "Our Collections – Zaarib Fragrances",
  description: "Explore curated collections of premium Oud, Attars, Designer inspired fragrances, and Custom Blends in Bhubaneswar.",
};

const CATS = [
  { name: "Oud & Bakhoor", desc: "Royal Arabian woods", filter: "Oud", icon: "✦" },
  { name: "Pure Attars", desc: "Alcohol-free natural oils", filter: "Attar", icon: "◈" },
  { name: "Designer Inspired", desc: "Luxury dupes, real quality", filter: "Fresh", icon: "◆" },
  { name: "Floral Discoveries", desc: "Joyful and feminine", filter: "Floral", icon: "⬡" },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-[72px] bg-ink">
      <div className="container-brand py-14">
        <div className="text-center mb-16">
          <div className="label mb-3.5">Curated For You</div>
          <h1 className="font-display text-cream font-normal mb-3.5" style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)" }}>
            Collections
          </h1>
        </div>

        {CATS.map((cat, i) => {
          const categoryProducts = products.filter(p => p.category === cat.filter).slice(0, 3);
          
          if (categoryProducts.length === 0) return null;

          return (
            <div key={i} className="mb-20">
              <div className="flex justify-between items-end mb-7">
                <div>
                  <div className="font-serif text-gold text-2xl mb-2 opacity-50">{cat.icon}</div>
                  <h2 className="font-display text-cream text-[2.1rem] font-normal">{cat.name}</h2>
                  <p className="font-body text-cream/45 text-[13.5px] mt-1.5">{cat.desc}</p>
                </div>
                <Link 
                  href={`/shop`} 
                  className="hidden sm:flex items-center gap-1.5 text-gold font-body text-[11px] tracking-[0.12em] uppercase border border-gold/15 hover:border-gold/35 px-5 py-2.5 rounded-sm transition-all"
                >
                  View All <ArrowRight size={12} />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
              
              {i < CATS.length - 1 && (
                <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
