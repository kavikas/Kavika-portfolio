"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const projects = [
  {
    title: "Hospital OPD Management System",
    year: "2026",
    tagline: "Full-Stack Hospital Outpatient & Administration Platform",
    desc: "Designed and developed a full-stack Hospital OPD Management System to streamline patient consultations, appointments, and hospital administration workflows. Built dedicated Patient, Doctor, and Admin modules with appointment scheduling, department management, doctor allocation, and real-time queue tracking using Socket.IO. Implemented secure RESTful APIs, role-based access control, and MongoDB database integration to ensure efficient healthcare data management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "REST APIs"],
    github: "https://github.com/kavikas",
    color: "from-blue-900/40 to-cyan-900/20",
    img: "/hospital-opd.png.png"
  },
  {
    title: "Queue Management System for Bank",
    year: "2025",
    tagline: "Real-Time Customer Flow & Token Management System",
    desc: "Designed and developed a full-stack Queue Management System to streamline customer flow and reduce waiting times in banking environments. Implemented automated token generation, queue position tracking, and customer management. Developed an admin dashboard to monitor queue status, view customer details, and manage service completion organizing customers based on a First-In-First-Out (FIFO) queue mechanism with real-time queue visibility.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/kavikas",
    color: "from-emerald-900/40 to-teal-900/20",
    img: "/bank-queue.png.png"
  },
  {
    title: "AI-Powered Health Monitoring",
    year: "2025",
    tagline: "Intelligent Vital Health Tracking & Chatbot Assistant",
    desc: "Designed a full-stack healthcare application enabling users to securely log and monitor vital health parameters (blood pressure, sugar, pulse, SpO2, temp). Implemented JWT-based authentication along with automated health-risk detection to identify abnormal vital readings. Built interactive data visualizations using React and Recharts to help users track health trends, and integrated an AI-powered health chatbot to provide health guidance and preventive care.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Recharts", "AI Chatbot"],
    github: "https://github.com/kavikas",
    color: "from-purple-900/40 to-fuchsia-900/20",
    img: "/ai-health.png.png"
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">
            Featured Projects
          </h2>
          <div className="w-24 h-[2px] bg-gold-primary mt-4"></div>
        </motion.div>
        
        <motion.a
          href="https://github.com/kavikas"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="px-6 py-3 rounded-full border border-gold-primary text-gold-primary font-medium hover:bg-gold-primary hover:text-primary transition-all duration-300 hover:scale-105"
        >
          View All Projects &rarr;
        </motion.a>
      </div>

      {/* Projects List */}
      <div className="space-y-24">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left Box: Mockup Preview */}
            <div className={`order-2 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative w-full aspect-[4/3] rounded-3xl bg-card border border-border-subtle overflow-hidden flex flex-col group hover:shadow-gold-glow hover:-translate-y-2 transition-all duration-500">
                {/* Browser bar */}
                <div className="h-10 bg-black/40 border-b border-border-subtle flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                {/* Mockup content */}
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                {/* Overlay highlight */}
                <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-gold-primary/30 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Right Box: Project Details */}
            <div className={`order-1 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start`}>
              <h4 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-4">
                Featured Project • {project.year}
              </h4>
              <h3 className="text-3xl lg:text-4xl font-serif text-text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 pb-4 border-b border-border-subtle w-full">
                {project.tagline}
              </p>
              
              <div className="bg-card w-full p-6 pb-2 rounded-2xl border border-border-subtle mb-6 relative">
                 <div className="absolute top-0 left-6 w-12 h-[1px] bg-gold-primary"></div>
                 <p className="text-text-secondary text-sm leading-relaxed mb-4">
                   {project.desc}
                 </p>
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.tech.map(tech => (
                     <span key={tech} className="px-3 py-1 bg-primary border border-border-subtle rounded-full text-xs text-text-primary/70">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>

              <div className="flex items-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-text-primary hover:text-gold-primary hover:border-gold-primary transition-all duration-300 hover:scale-105">
                  <SiGithub size={20} />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-text-primary hover:text-gold-primary hover:border-gold-primary transition-all duration-300 hover:scale-105">
                  <ExternalLink size={20} />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 h-12 rounded-full bg-gold-primary/10 border border-gold-primary text-gold-primary font-medium flex items-center justify-center hover:bg-gold-primary hover:text-primary transition-all duration-300 ml-2">
                  Project Details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
