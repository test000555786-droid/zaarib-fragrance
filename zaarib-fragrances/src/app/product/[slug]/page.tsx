import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct, getRelated } from "@/data/products";
import ProductDetail from "@/components/product/ProductDetail";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return { title: "Product Not Found" };
  return {
    title: `${p.name} – ${p.category} Perfume | Zaarib Fragrances`,
    description: `${p.name} by Zaarib Fragrances — ${p.tagline}. ${p.longevity} longevity. Shop in Bhubaneswar or order online.`,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const related = getRelated(params.slug, 3);
  return <ProductDetail product={product} related={related} />;
}
