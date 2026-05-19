"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "@/store/cartStore";
import { navLinks, site } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openCart, totalItems, isOpen } = useCart();
  const count = totalItems();

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "bg-ink/95 backdrop-blur-xl border-b border-gold/10"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-brand relative flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <div className="font-display text-gold text-xl tracking-[0.22em] font-semibold uppercase leading-none">
              ZAARIB
            </div>
            <div className="font-body text-gold/35 text-[8px] tracking-[0.38em] uppercase mt-0.5">
              Fragrances
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "font-body text-[11.5px] tracking-[0.14em] uppercase transition-colors duration-200",
                  pathname === href
                    ? "text-gold border-b border-gold pb-0.5 font-semibold"
                    : "text-cream/70 hover:text-cream",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 relative z-10">
            <a
              href={`tel:${site.phoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 text-cream/60 hover:text-cream text-xs font-body transition-colors border border-gold/10 hover:border-gold/25 px-3 py-2 rounded-sm"
            >
              <Phone size={12} /> Call
            </a>

            <button
              onClick={openCart}
              className="relative flex items-center justify-center border border-gold/10 hover:border-gold/30 text-cream/70 hover:text-cream w-10 h-10 rounded-sm transition-all"
              aria-label="Open cart"
            >
              <ShoppingBag size={16} />
              {mounted && count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-ink text-[9px] font-bold font-body w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            <Link href="/contact" className="hidden lg:flex btn-gold py-2.5 px-5 text-[11px]">
              Visit Store
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-cream"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-xl flex flex-col p-8 pt-24">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-display text-cream text-3xl font-normal py-5 border-b border-gold/8 hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a href={`tel:${site.phoneRaw}`} className="btn-outline w-full justify-center">
              <Phone size={14} /> {site.phone}
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} className="btn-gold w-full justify-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
