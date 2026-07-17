"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    platform: "AWS",
    date: "April 11, 2026",
    category: "PROFESSIONAL CERTIFICATION",
    link: "https://drive.google.com/file/d/1OCoA2Ae5PoUw_9OHACMqiip5k1dtBHzX/view?usp=sharing",
    img: "/certs/aws-cloud-practitioner.jpg.png"
  },
  {
    title: "LinguaSkills Business Certification",
    platform: "Cambridge",
    date: "2026",
    category: "PROFESSIONAL CERTIFICATION",
    link: "https://drive.google.com/file/d/1bBLYADJ8VK3ZDb4mx0UdK0vHuibnvCuc/view?usp=sharing",
    img: "/certs/linguaskills.png"
  },
  {
    title: "Full-Stack Web Development",
    platform: "Udemy",
    date: "2025",
    category: "PROFESSIONAL CERTIFICATION",
    link: "https://drive.google.com/file/d/1V7es3nUl02rIYmEtnUhxnje_XSIayt7-/view?usp=sharing",
    img: "/certs/udemy-fullstack.png"
  },
  {
    title: "Mastering Data Structures & Algorithms",
    platform: "Udemy",
    date: "May 31, 2024",
    category: "PROFESSIONAL CERTIFICATION",
    link: "https://drive.google.com/file/d/1HP5ClaOSipFj0g1g6E6c0x3tFFxOFA68/view?usp=sharing",
    img: "/certs/udemy-dsa.png"
  },
  {
    title: "100 Days of Code: Complete Python",
    platform: "Udemy",
    date: "June 4, 2024",
    category: "PROFESSIONAL CERTIFICATION",
    link: "https://drive.google.com/file/d/1QKaROEcSNNL0lsT6vVDZuE-zYdEZIt8i/view?usp=sharing",
    img: "/certs/udemy-python.png"
  },
  {
    title: "Data Structures (Linked Lists)",
    platform: "CodeChef",
    date: "May 11, 2024",
    category: "PROFESSIONAL CERTIFICATION",
    link: "https://drive.google.com/file/d/14QupMcIj0nY23ZDJwWdk1i9lWm3fsaYV/view?usp=sharing",
    img: "/certs/codechef-linkedlists.jpg.png"
  },
  {
    title: "Python (Basic)",
    platform: "HackerRank",
    date: "August 22, 2024",
    category: "PROFESSIONAL CERTIFICATION",
    link: "https://drive.google.com/file/d/1zNH48L7uZYpLy1RJ-sYmSijAzAKjdaJd/view?usp=sharing",
    img: "/certs/hackerrank-python.jpg.png"
  },
  {
    title: "Modern Full Stack Internship",
    platform: "AlgoTutor Academy",
    date: "July 2025",
    category: "INTERNSHIP",
    link: "https://drive.google.com/file/d/1zNH48L7uZYpLy1RJ-sYmSijAzAKjdaJd/view?usp=sharing",
    img: "/certs/algotutor-internship.png"
  }
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-primary pt-12 pb-20">
      <div className="flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            Certifications
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-[2px] bg-gold-primary"></div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A collection of professional certifications and internship credentials that reflect my continuous growth as a developer.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          {certs.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              className="group bg-card hover:bg-card-hover border border-border-subtle hover:border-gold-primary/30 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-1"
            >
              {/* Thumbnail side (Left) */}
              <div className="sm:w-40 flex-shrink-0 flex items-center justify-center perspective-[1000px]">
                {cert.img ? (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border-subtle group-hover:border-gold-primary/50 transition-colors shadow-lg transform group-hover:-rotate-3 group-hover:scale-105 duration-500">
                    <Image src={cert.img!} alt={cert.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border-subtle group-hover:border-gold-primary/50 transition-colors shadow-lg bg-card-hover flex items-center justify-center transform group-hover:scale-105 duration-500">
                     <Award className="text-gold-primary" size={32} />
                  </div>
                )}
              </div>

              {/* Info side (Right) */}
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-gold-primary/10 text-gold-bright text-[10px] font-bold uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-border-subtle/50 text-text-secondary text-[10px] font-bold uppercase tracking-wider">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif text-text-primary mb-1 group-hover:text-gold-bright transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-secondary mb-6">
                  {cert.platform}
                </p>
                
                <div className="mt-auto pt-2">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gold-primary font-medium hover:text-gold-bright transition-colors group/btn"
                  >
                    View Details
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
