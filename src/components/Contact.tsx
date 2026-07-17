"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left Column: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-[2px] bg-gold-primary mb-8"></div>

          <p className="text-text-secondary leading-relaxed mb-12 max-w-md">
            I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-border-subtle bg-card flex items-center justify-center group-hover:border-gold-primary transition-colors duration-300 shadow-sm">
                <Mail className="text-gold-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:kavika.s2023cce@sece.ac.in" className="text-text-primary hover:text-gold-bright transition-colors">
                  kavika.s2023cce@sece.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-border-subtle bg-card flex items-center justify-center group-hover:border-gold-primary transition-colors duration-300 shadow-sm">
                <Phone className="text-gold-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+916381553457" className="text-text-primary hover:text-gold-bright transition-colors">
                  +91 6381553457
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-border-subtle bg-card flex items-center justify-center group-hover:border-gold-primary transition-colors duration-300 shadow-sm">
                <MapPin className="text-gold-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Location</p>
                <p className="text-text-primary">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card border border-border-subtle rounded-[2rem] p-8 md:p-10 shadow-gold-glow">

            {/* Status banners */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 mb-6 text-sm"
                >
                  <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 mb-6 text-sm"
                >
                  <XCircle size={18} /> Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-primary border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-gold-primary/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-primary border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-gold-primary/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="What's on your mind?"
                  className="w-full bg-primary border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-gold-primary/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-gold-primary text-primary font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold-bright transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === "loading" ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending…</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
