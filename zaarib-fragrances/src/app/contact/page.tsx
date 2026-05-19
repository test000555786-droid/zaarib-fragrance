"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Check, ArrowRight } from "lucide-react";
import { site } from "@/config/site";

const INTERESTS = ["General Inquiry","Custom Fragrance","Oud & Attars","Gifting","Visit Store","Wholesale"];

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", interest:"General Inquiry", message:"" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    
    const text = `Hi Zaarib Fragrances,

I am interested in: ${form.interest}

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'N/A'}

Message:
${form.message}`;

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  const Field = ({ name, label, type = "text", ph = "" }: { name: keyof typeof form; label: string; type?: string; ph?: string }) => (
    <div className="mb-5">
      <label htmlFor={name} className="block font-body text-cream/38 text-[10.5px] tracking-[0.22em] uppercase mb-2">{label}</label>
      <input
        id={name} type={type} placeholder={ph} value={form[name]}
        onChange={(e) => { setForm((f) => ({ ...f, [name]: e.target.value })); if (errors[name]) setErrors((er) => ({ ...er, [name]: "" })); }}
        className="input-field"
        style={{ borderColor: errors[name] ? "rgba(239,68,68,0.4)" : undefined }}
      />
      {errors[name] && <p className="font-body text-red-400 text-xs mt-1.5">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen pt-[72px] bg-ink">
      <div className="container-brand py-14">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="label mb-3.5">Find Us</div>
          <h1 className="font-display text-cream font-normal" style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)" }}>
            Visit or Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="flex flex-col gap-5">
            <div className="bg-ink-2 border border-gold/12 rounded-lg p-9">
              <h2 className="font-display text-cream text-2xl font-normal mb-7">Store Details</h2>
              {[
                { Icon: MapPin, label: "Address", text: site.address, href: site.mapUrl },
                { Icon: Phone, label: "Phone", text: site.phone, href: `tel:${site.phoneRaw}` },
                { Icon: MessageCircle, label: "WhatsApp", text: site.phone, href: `https://wa.me/${site.whatsapp}` },
                { Icon: Mail, label: "Email", text: site.email, href: `mailto:${site.email}` },
              ].map(({ Icon, label, text, href }, i) => (
                <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex gap-3.5 items-start mb-5 text-cream/58 hover:text-cream transition-colors group">
                  <Icon size={13} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-body text-[10px] tracking-[0.18em] uppercase text-cream/28 mb-0.5">{label}</div>
                    <span className="font-body text-[15px] leading-relaxed">{text}</span>
                  </div>
                </a>
              ))}
              <div className="gold-rule my-6" />
              <div>
                <div className="flex items-center gap-1.5 mb-3.5">
                  <Clock size={12} className="text-gold" />
                  <span className="label">Store Hours</span>
                </div>
                {[site.hours.weekday, site.hours.weekend].map((h, i) => {
                  const [days, time] = h.split(": ");
                  return (
                    <div key={i} className="flex justify-between mb-2.5">
                      <span className="font-body text-cream/50 text-[15px]">{days}</span>
                      <span className="font-body text-cream text-[15px]">{time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map embed */}
            <div className="bg-ink-2 border border-gold/12 rounded-lg overflow-hidden relative min-h-[260px]">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent("Royal Arcade Shop No G 11 Raghunathpur Nandankanan Road Bhubaneswar Raghunathpur 754005, Bhubaneswar, Odisha 751024, Zaarib Fragrances")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(110%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a href={`tel:${site.phoneRaw}`} className="btn-gold justify-center"><Phone size={13} /> Call Now</a>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-semibold text-xs tracking-widest uppercase py-4 rounded-sm hover:bg-[#22c55e] transition-colors">
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-ink-2 border border-gold/12 rounded-lg p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="success" initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                  className="flex flex-col items-center justify-center min-h-[480px] text-center gap-5">
                  <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:"spring", stiffness:200, delay:0.1 }}
                    className="w-16 h-16 rounded-full border border-gold flex items-center justify-center" style={{ boxShadow:"0 0 28px rgba(201,168,76,0.12)" }}>
                    <Check size={24} className="text-gold" />
                  </motion.div>
                  <h3 className="font-display text-cream text-2xl font-normal">Message Received!</h3>
                  <p className="font-body text-cream/50 text-sm leading-relaxed max-w-[280px]">We will get back to you within 2 hours during store hours.</p>
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-2 bg-[#25D366] text-white font-body font-semibold text-xs tracking-widest uppercase px-7 py-3.5 rounded-sm hover:bg-[#22c55e] transition-colors">
                    <MessageCircle size={13} /> Open WhatsApp
                  </a>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity:1 }} exit={{ opacity:0 }}>
                  <h2 className="font-display text-cream text-2xl font-normal mb-7">Send a Message</h2>

                  {/* Interest selector */}
                  <div className="mb-5">
                    <div className="font-body text-cream/38 text-[10.5px] tracking-[0.22em] uppercase mb-2.5">I'm interested in</div>
                    <div className="flex flex-wrap gap-2">
                      {INTERESTS.map((opt) => (
                        <button key={opt} onClick={() => setForm((f) => ({ ...f, interest: opt }))}
                          className={["font-body text-[11.5px] px-3.5 py-1.5 rounded-full border transition-all duration-200",
                            form.interest === opt ? "bg-gold/12 border-gold/40 text-gold" : "bg-transparent border-cream/12 text-cream/45 hover:border-cream/28"].join(" ")}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Field name="name"    label="Full Name"          ph="Your name" />
                  <Field name="email"   label="Email Address" type="email" ph="you@example.com" />
                  <Field name="phone"   label="Phone / WhatsApp" type="tel" ph="+91 00000 00000" />

                  <div className="mb-6">
                    <label htmlFor="message" className="block font-body text-cream/38 text-[10.5px] tracking-[0.22em] uppercase mb-2">Message</label>
                    <textarea id="message" rows={4}
                      placeholder="Tell us what you're looking for..."
                      value={form.message}
                      onChange={(e) => { setForm((f) => ({ ...f, message: e.target.value })); if (errors.message) setErrors((er) => ({ ...er, message: "" })); }}
                      className="input-field resize-y"
                      style={{ borderColor: errors.message ? "rgba(239,68,68,0.4)" : undefined }}
                    />
                    {errors.message && <p className="font-body text-red-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  <motion.button whileTap={{ scale:0.98 }} onClick={handleSubmit}
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-semibold text-xs tracking-widest uppercase w-full py-4 rounded-sm hover:bg-[#22c55e] transition-colors">
                    <MessageCircle size={15} /> Send via WhatsApp
                  </motion.button>
                  <p className="font-body text-cream/25 text-xs text-center mt-4">
                    Or reach us via{" "}
                    <a href={`https://wa.me/${site.whatsapp}`} className="text-[#25D366]">WhatsApp</a> for instant reply.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
