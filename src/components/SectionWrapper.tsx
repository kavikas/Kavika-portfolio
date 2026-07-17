"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-24 w-full ${className}`}>
      {/* Top Divider with gradient line */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent"></div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
        className="max-w-7xl mx-auto px-6 lg:px-12 w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
