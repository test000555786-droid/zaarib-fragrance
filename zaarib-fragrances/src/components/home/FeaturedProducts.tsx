import Link from "next/link";
import type { Product } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="section bg-ink">
      <div className="container-brand">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="label mb-3">Handpicked</div>
            <h2 className="font-display text-cream font-normal" style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}>
              Featured Fragrances
            </h2>
          </div>
          <Link href="/shop" className="btn-ghost-gold hidden sm:inline-flex">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-11 p-7 bg-ink-2 border border-gold/10 rounded-md flex flex-col sm:flex-row justify-between items-center gap-5">
          <div>
            <div className="font-display text-cream text-xl font-normal mb-1">100+ Fragrances Available In-Store</div>
            <p className="font-body text-cream/45 text-sm">Only a curated selection is listed online. Visit us for the complete experience.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/shop" className="btn-gold text-[11px] py-3">Shop All</Link>
            <Link href="/contact" className="btn-outline text-[11px] py-3">Directions</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
