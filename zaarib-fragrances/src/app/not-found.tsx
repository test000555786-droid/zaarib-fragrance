import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
      <div className="absolute font-display text-gold pointer-events-none select-none" style={{ fontSize: "clamp(12rem,25vw,22rem)", opacity: 0.025, top: "50%", left: "50%", transform: "translate(-50%,-50%)", lineHeight: 1, whiteSpace: "nowrap" }}>
        404
      </div>
      <div className="text-center relative z-10">
        <div className="font-display text-gold text-lg tracking-[0.22em] uppercase mb-10" style={{ opacity: 0.6 }}>ZAARIB</div>
        <div className="label mb-4">Page Not Found · 404</div>
        <h1 className="font-display text-cream font-normal leading-[1.1] mb-4" style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)" }}>
          This Scent Has <em className="text-gold italic">Faded Away</em>
        </h1>
        <p className="font-body text-cream/45 text-[15px] leading-[1.85] max-w-[420px] mx-auto mb-8">
          The page you are looking for does not exist or may have been moved. Let us guide you back to something beautiful.
        </p>
        <div className="w-20 h-px mx-auto mb-8" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn-gold"><Home size={14} /> Back Home</Link>
          <Link href="/shop" className="btn-outline"><Search size={14} /> Browse Fragrances</Link>
          <Link href="/contact" className="btn-ghost-gold">Contact Us <ArrowRight size={13} /></Link>
        </div>
        <p className="font-body text-cream/20 text-sm mt-10">
          Need help? Call{" "}
          <a href="tel:+919876543210" className="text-gold/45">+91 98765 43210</a>
        </p>
      </div>
    </div>
  );
}
