"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { 
  SiCplusplus, SiJavascript, SiHtml5, SiReact, 
  SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit, 
  SiGithub, SiPostman 
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
    desc: "Building highly interactive, component-driven frontend user interfaces with seamless state management.",
    category: "Frontend"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    desc: "Developing fast, scalable server-side networking applications and RESTful APIs.",
    category: "Backend"
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
    desc: "Structuring clean, robust backend routing and middleware logic for Node environments.",
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    desc: "Designing flexible NoSQL schemas and pipelines for high-volume application data.",
    category: "Database"
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    desc: "Writing dynamic, functional logic that powers both client-side and server-side environments.",
    category: "Language"
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    desc: "Mastering core Data Structures, Algorithms, and Object-Oriented Principles.",
    category: "Language"
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#007396",
    desc: "Applying object-oriented design and building cross-platform enterprise logic.",
    category: "Language"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    desc: "Structuring relational databases with complex queries and ACID compliance.",
    category: "Database"
  },
  {
    name: "HTML/CSS",
    icon: SiHtml5,
    color: "#E34F26",
    desc: "Crafting semantic, accessible structures paired with responsive modern styling.",
    category: "Frontend"
  },
  {
    name: "Git & GitHub",
    icon: SiGit,
    color: "#F05032",
    desc: "Managing version control, collaborative branching, and continuous integration workflows.",
    category: "Tools"
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    desc: "Testing, documenting, and debugging RESTful API endpoints for reliability.",
    category: "Tools"
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007ACC",
    desc: "My primary IDE tailored for productivity with extensions and debugging environments.",
    category: "Tools"
  }
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-primary pb-32">
      <div className="flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-4">
            Technology Ecosystem
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            Technical Arsenal
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A curated ecosystem of frameworks, languages, and tools that I leverage to build robust, scalable, and visually compelling full-stack applications.
          </p>
        </motion.div>

        {/* Grid of bobbing icons with tooltips */}
        <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-6 lg:gap-8">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            // Create a staggered bobbing delay
            const randomDelay = (idx % 4) * 0.5;

            return (
              <motion.div
                key={skill.name}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: randomDelay,
                }}
                className="relative group flex items-center justify-center cursor-default z-10"
              >
                {/* Tooltip Overlay */}
                <div className="pointer-events-none absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-card border border-border-subtle shadow-gold-glow rounded-2xl p-4 flex flex-col items-center text-center">
                     <h4 className="text-lg font-serif text-text-primary mb-1 whitespace-nowrap">{skill.name}</h4>
                     <span className="text-[10px] uppercase tracking-widest text-gold-primary mb-2">{skill.category}</span>
                     <p className="text-xs text-text-secondary leading-tight">{skill.desc}</p>
                     
                     {/* Triangle pointer */}
                     <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-card"></div>
                  </div>
                </div>

                {/* Icon Button */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border border-border-subtle group-hover:border-gold-primary group-hover:shadow-gold-glow group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                  <Icon 
                    size={40} 
                    className="opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:drop-shadow-lg transition-all duration-300"
                    style={{ color: skill.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}
