import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site, navLinks } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] border-t border-gold/10 pt-16 pb-7">
      <div className="container-brand">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="font-display text-gold text-xl tracking-[0.2em] uppercase mb-1">ZAARIB</div>
            <div className="font-body text-gold/35 text-[8px] tracking-[0.35em] uppercase mb-5">Fragrances</div>
            <p className="font-body text-cream/40 text-sm leading-7 max-w-[260px]">
              Premium perfumes, pure attars & custom fragrances for those who wear their identity as a scent.
            </p>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost-gold mt-5 text-[11px] inline-flex"
            >
              <MessageCircle size={13} /> WhatsApp Us
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="label mb-5">Explore</h3>
            <ul className="space-y-3.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-cream/50 text-[13px] hover:text-cream transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label mb-5">Services</h3>
            <ul className="space-y-3.5">
              {[
                { name: "Custom Fragrance", href: "/custom-fragrance" },
                { name: "Bulk Orders" },
                { name: "Corporate Gifting" },
                { name: "Free Consultation" }
              ].map((s) => (
                <li key={s.name}>
                  {s.href ? (
                    <Link href={s.href} className="font-body text-cream/50 text-[13px] hover:text-cream transition-colors">
                      {s.name}
                    </Link>
                  ) : (
                    <span className="font-body text-cream/50 text-[13px]">{s.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label mb-5">Contact</h3>
            <div className="space-y-4">
              {[
                { Icon: MapPin, text: site.address },
                { Icon: Phone, text: site.phone, href: `tel:${site.phoneRaw}` },
                { Icon: Mail, text: site.email, href: `mailto:${site.email}` },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Icon size={13} className="text-gold flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} className="font-body text-cream/55 text-[13px] leading-relaxed hover:text-cream transition-colors">{text}</a>
                  ) : (
                    <span className="font-body text-cream/55 text-[13px] leading-relaxed">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-rule mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-cream/25 text-xs">© {year} Zaarib Fragrances. All rights reserved.</p>
          <p className="font-body text-cream/25 text-xs">Bhubaneswar, Odisha, India</p>
        </div>
      </div>
    </footer>
  );
}
