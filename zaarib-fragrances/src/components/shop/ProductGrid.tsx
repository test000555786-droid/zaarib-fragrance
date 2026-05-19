"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product, Category, Gender } from "@/data/products";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  showFilters?: boolean;
}

const CATS = ["All", "Oud", "Attar", "Oriental", "Fresh", "Floral"] as const;
const GENDERS = ["All", "Men", "Women", "Unisex"] as const;

export default function ProductGrid({ products, showFilters = false }: Props) {
  const [cat, setCat] = useState<string>("All");
  const [gen, setGen] = useState<string>("All");

  const filtered = products.filter((p) => {
    const catOk = cat === "All" || p.category === cat;
    const genOk = gen === "All" || p.gender === gen;
    return catOk && genOk;
  });

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={[
                  "font-body text-[11px] tracking-[0.12em] uppercase px-5 py-2 rounded-full border transition-all duration-200",
                  cat === c
                    ? "bg-gold text-ink border-gold font-bold"
                    : "bg-transparent text-cream/55 border-cream/15 hover:border-cream/35",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {GENDERS.map((g) => (
              <button
                key={g}
                onClick={() => setGen(g)}
                className={[
                  "font-body text-[10.5px] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full border transition-all duration-200",
                  gen === g
                    ? "bg-gold/12 text-gold border-gold/35"
                    : "bg-transparent text-cream/45 border-cream/10",
                ].join(" ")}
              >
                {g}
              </button>
            ))}
          </div>
          <p className="font-body text-cream/30 text-xs text-center">
            Showing {filtered.length} fragrance{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-display text-cream text-xl mb-2">No matches found</p>
          <button
            onClick={() => { setCat("All"); setGen("All"); }}
            className="btn-ghost-gold text-[11px] mt-4"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <motion.div
          key={`${cat}-${gen}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
