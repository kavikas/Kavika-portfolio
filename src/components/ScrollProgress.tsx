"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 right-0 w-1 bg-gold-primary origin-top z-50 rounded-b-full shadow-[0_0_10px_rgba(201,164,103,0.5)]"
      style={{ 
        scaleY: scrollYProgress,
        height: "100vh"
      }}
    />
  );
}
