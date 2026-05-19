import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductGrid from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop All Fragrances – Oud, Attars, Oriental & More",
  description:
    "Browse 100+ premium fragrances at Zaarib Fragrances, Bhubaneswar. Oud, Pure Attars, Oriental, Fresh & Floral perfumes. Genuine products, expert guidance.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-[72px] bg-ink">
      <div className="container-brand py-14">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="label mb-3.5">Browse</div>
          <h1 className="font-display text-cream font-normal mb-3.5" style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)" }}>
            The Collection
          </h1>
          <p className="font-body text-cream/45 text-sm max-w-[500px] mx-auto leading-7">
            Over 100 curated fragrances — Oud, Attars, Oriental, Fresh & Floral. Every product genuine, every price honest.
          </p>
        </div>
        <ProductGrid products={products} showFilters />
      </div>
    </div>
  );
}
