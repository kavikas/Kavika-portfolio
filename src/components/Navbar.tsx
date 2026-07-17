"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Profile", href: "#profile" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/80 backdrop-blur-md border-b border-border-subtle py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-serif text-text-primary hover:text-gold-primary transition-colors"
        >
          KS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-gold-bright transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gold-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1Cp5I_Q2z3R041lxnJX31a9n7WwIW1UE3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-gold-primary text-gold-primary text-sm font-medium hover:bg-gold-primary hover:text-primary transition-all hover:scale-105"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 min-h-screen bg-primary/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-6 right-6 text-text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif text-text-primary hover:text-gold-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1Cp5I_Q2z3R041lxnJX31a9n7WwIW1UE3/view?usp=sharing"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 mt-4 rounded-full border border-gold-primary text-gold-primary text-lg font-medium hover:bg-gold-primary hover:text-primary transition-all"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
