"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Lightbulb, Wrench, Code2, Target } from "lucide-react";

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies Explored", value: "10+" },
    { label: "Years of Learning", value: "3+" },
    { label: "Certifications Earned", value: "10+" },
  ];

  const philosophy = [
    {
      icon: <Target className="text-gold-primary" size={24} />,
      title: "Problem Solver",
      desc: "Turning complex real-world workflows into intuitive digital solutions.",
    },
    {
      icon: <Lightbulb className="text-gold-primary" size={24} />,
      title: "Continuous Learner",
      desc: "Constantly exploring new frameworks, languages, and best practices.",
    },
    {
      icon: <Wrench className="text-gold-primary" size={24} />,
      title: "Builder Mindset",
      desc: "Focused on creating full-stack products that deliver real value.",
    },
    {
      icon: <Code2 className="text-gold-primary" size={24} />,
      title: "Attention to Detail",
      desc: "Balancing functionality, performance, and clean design.",
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column Text */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-4">
            The Journey
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-8">
            About Me
          </h2>
          
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              I am a pre-final year Engineering student pursuing B.E. in Computer Science & Communication Engineering at Sri Eshwar College of Engineering, with a strong academic standing (CGPA 8.14). My passion lies in full-stack development, blending clean backend architecture with polished, high-performance React frontends.
            </p>
            <p>
              Over the years, I've cultivated a deep interest in solving real institutional, healthcare, and infrastructure-management problems. By leveraging modern technologies like Node.js, Express, MongoDB, and Next.js, I strive to build applications that not only look cinematic but perform flawlessly in robust production environments.
            </p>
          </div>
        </motion.div>

        {/* Right Column Content */}
        <div className="flex flex-col gap-12">
          
          {/* Stats Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-card hover:bg-card-hover border border-border-subtle hover:border-gold-primary/50 transition-all duration-300 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center group hover:-translate-y-1 hover:shadow-gold-glow"
              >
                <div className="text-3xl font-serif text-text-primary mb-2 group-hover:text-gold-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Philosophy Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-6 text-center lg:text-left">
              Developer Philosophy
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {philosophy.map((item, idx) => (
                 <div
                   key={idx}
                   className="bg-card hover:bg-card-hover border border-border-subtle hover:border-gold-primary/50 transition-all duration-300 rounded-3xl p-6 group hover:-translate-y-1 hover:shadow-gold-glow"
                 >
                   <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 border border-border-subtle group-hover:border-gold-primary/30">
                     {item.icon}
                   </div>
                   <h4 className="text-text-primary font-serif text-lg mb-2">{item.title}</h4>
                   <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
