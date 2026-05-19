"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Minus, Plus, Trash2, MessageCircle, ArrowRight } from "lucide-react";
import { useCart } from "@/store/cartStore";
import { site } from "@/config/site";
import { formatPrice } from "@/lib/utils";
import PerfumeBottle from "@/components/common/PerfumeBottle";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } = useCart();
  const sub = subtotal();
  const shipping = items.length > 0 ? (sub >= 1999 ? 0 : 99) : 0;
  const total = sub + shipping;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const waMsg = encodeURIComponent(
    "Hi! I would like to order from Zaarib Fragrances:\n\n" +
      items.map((i) => `- ${i.name} (${i.ml}ml) x${i.quantity} = ${formatPrice(i.price * i.quantity)}`).join("\n") +
      `\n\nTotal: ${formatPrice(total)}`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            key="panel"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[110] w-full max-w-[440px] bg-ink-2 border-l border-gold/15 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gold/10 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={17} className="text-gold" />
                <span className="font-display text-cream text-lg font-normal">Your Cart</span>
                {items.length > 0 && (
                  <span className="bg-gold/10 border border-gold/20 text-gold text-[10px] font-body font-bold px-2 py-0.5 rounded-full">
                    {items.length}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="text-cream/50 hover:text-cream transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Free shipping bar */}
            {sub > 0 && sub < 1999 && (
              <div className="px-7 py-3 bg-gold/5 border-b border-gold/8 flex-shrink-0">
                <p className="font-body text-cream/55 text-xs mb-1.5">
                  Add {formatPrice(1999 - sub)} more for <span className="text-gold">Free Shipping</span>
                </p>
                <div className="h-[3px] bg-gold/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full transition-all duration-500" style={{ width: `${(sub / 1999) * 100}%` }} />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-7 py-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag size={40} className="text-gold/20" />
                  <h3 className="font-display text-cream text-xl font-normal">Your cart is empty</h3>
                  <p className="font-body text-cream/50 text-sm max-w-[240px] leading-relaxed">
                    Explore our curated fragrances and find your signature scent.
                  </p>
                  <Link href="/shop" onClick={closeCart} className="btn-gold text-[11px] py-3 px-6 mt-2">
                    Browse Fragrances <ArrowRight size={12} />
                  </Link>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.ml}`}
                      layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex gap-4 pb-5 mb-5 border-b border-gold/8"
                    >
                      <div className="bg-ink-3 border border-gold/10 rounded p-2 flex items-center justify-center w-16 h-20 flex-shrink-0">
                        <PerfumeBottle colors={item.bottleColor} height={58} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-body text-gold/55 text-[10px] tracking-[0.2em] uppercase mb-1">{item.ml}ml</div>
                        <h4 className="font-display text-cream text-base font-normal mb-2 truncate">{item.name}</h4>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center border border-gold/15 rounded-sm overflow-hidden">
                            <button
                              onClick={() => updateQty(item.id, item.ml, item.quantity - 1)}
                              className="text-cream/60 hover:text-cream px-2.5 py-1.5 transition-colors"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="font-body text-cream text-sm min-w-[24px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQty(item.id, item.ml, item.quantity + 1)}
                              className="text-cream/60 hover:text-cream px-2.5 py-1.5 transition-colors"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                          <span className="font-body text-gold text-base font-semibold">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <button
                            onClick={() => removeItem(item.id, item.ml)}
                            className="text-cream/25 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gold/10 px-7 py-5 bg-ink-3 flex-shrink-0">
                <div className="flex justify-between mb-2 font-body text-sm">
                  <span className="text-cream/55">Subtotal</span>
                  <span className="text-cream">{formatPrice(sub)}</span>
                </div>
                <div className="flex justify-between mb-4 font-body text-sm">
                  <span className="text-cream/55">Shipping</span>
                  <span className={shipping === 0 ? "text-green-400" : "text-cream"}>
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="gold-rule mb-4" />
                <div className="flex justify-between items-center mb-5">
                  <span className="font-display text-cream text-lg">Total</span>
                  <span className="font-display text-gold text-2xl">{formatPrice(total)}</span>
                </div>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${waMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold w-full justify-center py-4 text-[11px] mb-2.5"
                >
                  <MessageCircle size={14} /> Order via WhatsApp
                </a>
                <p className="font-body text-cream/25 text-[10px] text-center leading-relaxed">
                  We confirm availability and payment within minutes.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
