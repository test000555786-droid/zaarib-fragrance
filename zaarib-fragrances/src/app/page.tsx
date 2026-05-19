import type { Metadata } from "next";
import { products } from "@/data/products";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import WhyZaarib from "@/components/home/WhyZaarib";
import Testimonials from "@/components/home/Testimonials";
import StoreVisitCTA from "@/components/home/StoreVisitCTA";

export const metadata: Metadata = {
  title: "Zaarib Fragrances – Premium Perfume Store in Bhubaneswar, Odisha",
  description:
    "Discover luxury Oud, pure Attars & custom fragrances at Bhubaneswar's finest perfume destination. 100+ scents. 5★ Google rated. Royal Arcade, Raghunathpur.",
};

export default function HomePage() {
  const featured = products.filter((p) => p.badge).slice(0, 3);
  const display = featured.length >= 3 ? featured : products.slice(0, 3);

  return (
    <>
      <Hero products={[products[0], products[4], products[1]]} />
      <Categories />
      <FeaturedProducts products={display} />
      <WhyZaarib />
      <Testimonials />
      <StoreVisitCTA />
    </>
  );
}
