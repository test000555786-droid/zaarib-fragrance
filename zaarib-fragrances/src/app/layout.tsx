import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/layout/CartSidebar";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zaarib.in"),
  title: {
    template: "%s | Zaarib Fragrances",
    default: "Zaarib Fragrances – Premium Perfume Store in Bhubaneswar, Odisha",
  },
  description:
    "Zaarib Fragrances — Bhubaneswar's finest perfume destination. Premium Oud, pure Attars, designer fragrances & custom blends. Royal Arcade, Raghunathpur.",
  keywords: [
    "perfume store in Bhubaneswar",
    "best attar shop Odisha",
    "luxury perfumes India",
    "oud perfume Bhubaneswar",
    "custom fragrance Bhubaneswar",
    "Zaarib Fragrances",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zaarib.in",
    siteName: "Zaarib Fragrances",
    title: "Zaarib Fragrances – Premium Perfume Store Bhubaneswar",
    description:
      "Discover luxury Oud, Attars & custom fragrances at Bhubaneswar's finest perfume destination.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Zaarib Fragrances",
  url: "https://zaarib.in",
  telephone: "+91-98765-43210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Royal Arcade, Raghunathpur",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    postalCode: "751019",
    addressCountry: "IN",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="bg-ink text-cream antialiased">
        <Navbar />
        <CartSidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
