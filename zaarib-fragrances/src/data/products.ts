export type Category = "Oud" | "Attar" | "Oriental" | "Fresh" | "Floral";
export type Gender = "Men" | "Women" | "Unisex";

export interface ProductSize { ml: number; price: number; }

export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  gender: Gender;
  price: number;
  originalPrice: number;
  sizes: ProductSize[];
  badge?: string;
  inStock: boolean;
  stockCount?: number;
  bottleColor: [string, string];
  notes: { top: string[]; middle: string[]; base: string[] };
  longevity: string;
  projection: string;
  season: string[];
  occasion: string[];
  createdAt: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "oud-royale",
    name: "Oud Royale",
    tagline: "The Scent of Kings",
    description:
      "A regal composition rooted in the finest wild agarwood from Cambodia. Opens with saffron-kissed warmth, settles into rose wood, and dries to amber musk that clings for hours. The fragrance of royalty.",
    category: "Oud",
    gender: "Unisex",
    price: 2499,
    originalPrice: 3200,
    sizes: [{ ml: 30, price: 1699 }, { ml: 50, price: 2499 }, { ml: 100, price: 4299 }],
    badge: "Best Seller",
    inStock: true,
    stockCount: 14,
    bottleColor: ["#8B4513", "#3D1A06"],
    notes: { top: ["Bergamot", "Saffron"], middle: ["Oud Wood", "Rose"], base: ["Amber", "Musk", "Sandalwood"] },
    longevity: "8–12 hours",
    projection: "Strong",
    season: ["Fall", "Winter"],
    occasion: ["Evening", "Formal"],
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    slug: "amber-noir",
    name: "Amber Noir",
    tagline: "Dark. Warm. Mysterious.",
    description:
      "Bold black pepper and cardamom open into a rich amber heart with labdanum. The base is deep vetiver and benzoin resin that lingers long after you have left the room.",
    category: "Oriental",
    gender: "Men",
    price: 1899,
    originalPrice: 2400,
    sizes: [{ ml: 30, price: 1899 }, { ml: 50, price: 2799 }],
    badge: "New Arrival",
    inStock: true,
    stockCount: 22,
    bottleColor: ["#B8860B", "#5A3E00"],
    notes: { top: ["Black Pepper", "Cardamom"], middle: ["Amber", "Labdanum"], base: ["Vetiver", "Benzoin"] },
    longevity: "10–14 hours",
    projection: "Strong",
    season: ["Fall", "Winter"],
    occasion: ["Evening", "Date Night"],
    createdAt: "2024-06-01",
  },
  {
    id: 3,
    slug: "gulabi-attar",
    name: "Gulabi Attar",
    tagline: "Pure Rose from Kannauj",
    description:
      "Steam-distilled pure rose attar from the flower fields of Kannauj. No alcohol. No synthetics. Just the pure, unadulterated soul of a rose on sandalwood base.",
    category: "Attar",
    gender: "Women",
    price: 999,
    originalPrice: 1400,
    sizes: [{ ml: 6, price: 599 }, { ml: 12, price: 999 }, { ml: 24, price: 1799 }],
    badge: "Pure Attar",
    inStock: true,
    stockCount: 35,
    bottleColor: ["#C2185B", "#6A0F35"],
    notes: { top: ["Rose Absolute"], middle: ["Jasmine", "Neroli"], base: ["Sandalwood", "Musk"] },
    longevity: "6–8 hours",
    projection: "Moderate",
    season: ["Spring", "Summer"],
    occasion: ["Daily", "Prayer", "Gifting"],
    createdAt: "2024-01-15",
  },
  {
    id: 4,
    slug: "white-musk",
    name: "White Musk",
    tagline: "Clean. Ethereal. Addictive.",
    description:
      "White tea and citrus open to a heart of iris and sheer musk, drying to cashmere wood. Wear it alone or layer beneath any oud for extra skin-close depth.",
    category: "Fresh",
    gender: "Unisex",
    price: 1299,
    originalPrice: 1800,
    sizes: [{ ml: 30, price: 899 }, { ml: 50, price: 1299 }, { ml: 100, price: 2199 }],
    badge: "Customer Fav",
    inStock: true,
    stockCount: 41,
    bottleColor: ["#8A8A8A", "#404040"],
    notes: { top: ["White Tea", "Bergamot"], middle: ["White Musk", "Iris"], base: ["Cashmere Wood", "Cedar"] },
    longevity: "6–10 hours",
    projection: "Moderate",
    season: ["Spring", "Summer"],
    occasion: ["Daily", "Office"],
    createdAt: "2024-02-01",
  },
  {
    id: 5,
    slug: "bakhoor-night",
    name: "Bakhoor Night",
    tagline: "Arabian Nights in a Bottle",
    description:
      "Dark opening of pure oud smoke and incense, evolving through agarwood and rose, settling into an amber-vanilla base that stays with you through the night. Transformative.",
    category: "Oud",
    gender: "Unisex",
    price: 3499,
    originalPrice: 4500,
    sizes: [{ ml: 50, price: 3499 }, { ml: 100, price: 5999 }],
    badge: "Luxury",
    inStock: true,
    stockCount: 8,
    bottleColor: ["#6D3B3B", "#2A1515"],
    notes: { top: ["Oud Smoke", "Incense"], middle: ["Agarwood", "Rose"], base: ["Amber", "Vanilla", "Musk"] },
    longevity: "12–16 hours",
    projection: "Intense",
    season: ["Fall", "Winter"],
    occasion: ["Special Occasion", "Weddings"],
    createdAt: "2024-03-01",
  },
  {
    id: 6,
    slug: "jasmine-breeze",
    name: "Jasmine Breeze",
    tagline: "Summer in a Bottle",
    description:
      "Lemon and green apple open into a luminous jasmine heart, sheer and natural. The base is soft sandalwood and musk — a gentle floral veil for all day.",
    category: "Floral",
    gender: "Women",
    price: 1499,
    originalPrice: 2000,
    sizes: [{ ml: 30, price: 999 }, { ml: 50, price: 1499 }, { ml: 100, price: 2499 }],
    inStock: true,
    stockCount: 28,
    bottleColor: ["#5A8A3A", "#2A4A18"],
    notes: { top: ["Lemon", "Green Apple"], middle: ["Jasmine", "Peony"], base: ["Sandalwood", "Soft Musk"] },
    longevity: "5–7 hours",
    projection: "Light",
    season: ["Spring", "Summer"],
    occasion: ["Daily", "Work", "Casual"],
    createdAt: "2024-04-01",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slug: string, n = 3) {
  const p = getProduct(slug);
  if (!p) return products.slice(0, n);
  return products.filter((x) => x.slug !== slug && x.category === p.category)
    .concat(products.filter((x) => x.slug !== slug))
    .slice(0, n);
}
