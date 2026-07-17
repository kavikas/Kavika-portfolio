"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background massive text */}
      {/* <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0 overflow-hidden leading-none select-none mt-10">
        <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-serif font-bold text-text-primary/5 whitespace-nowrap">
          PORT<span className="text-stroke">FOLIO</span>
        </h1>
      </div> */}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 h-[calc(100vh-80px)] min-h-[600px] flex items-center"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 mt-8 lg:mt-0">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
               className="relative w-64 h-80 md:w-80 md:h-[28rem] xl:w-[26rem] xl:h-[34rem] rounded-[2rem] overflow-hidden border border-border-subtle shadow-gold-glow"
             >
                {/* Fallback color if image is missing */}
                <div className="absolute inset-0 bg-card"></div>
                <Image 
                  src="/profile-photo.jpg" 
                  alt="Kavika S Portrait" 
                  fill 
                  className="object-cover relative z-10"
                  priority
                />
             </motion.div>
          </div>

          {/* Right Column: Hero Information */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-gold-primary font-serif tracking-[0.3em] uppercase text-sm md:text-base mb-2">
                Kavika S
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif text-text-primary font-bold">
                Portfolio
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-md flex flex-col items-center lg:items-start">
              <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-4">
                Full Stack Developer
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                What excites me about software development is turning ideas into practical solutions that people can actually use.
I enjoy building applications that solve real-world problems and create meaningful impact through technology.
              </p>
              
              <div className="w-12 h-[1px] bg-gold-primary mb-8 hidden lg:block"></div>
              
              <a href="#projects" className="inline-block px-8 py-4 rounded-full bg-gold-primary/10 border border-gold-primary text-gold-primary font-semibold hover:bg-gold-primary hover:text-primary transition-all duration-300 hover:scale-105">
                VIEW PROJECTS
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 text-text-muted text-[10px] sm:text-xs tracking-widest uppercase flex gap-4">
              <span>Presented by Kavika S</span>
              <span>•</span>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
