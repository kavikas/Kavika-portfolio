"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import { SiCodechef, SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Profile() {
  return (
    <SectionWrapper id="profile">
      <div className="flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-4">
            Profile
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            Professional Overview
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive look at my academic foundation, hands-on industry experience, and continuous problem-solving ventures.
          </p>
        </motion.div>

        {/* Two Column Layout for Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-8">
          
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card hover:bg-card-hover border border-border-subtle rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-gold-glow flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary border border-border-subtle flex items-center justify-center mb-8">
               <GraduationCap className="text-gold-primary" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-text-primary mb-2">Education</h3>
            
            <div className="mt-6 flex flex-col gap-6 flex-1">
              {/* College */}
              <div>
                <h4 className="text-lg font-medium text-text-primary">Sri Eshwar College of Engineering</h4>
                <p className="text-sm text-text-secondary mb-2">B.E. Computer Science & Communication Engineering</p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gold-primary/10 text-gold-bright text-xs font-bold rounded-full">
                    Current CGPA — 8.14
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    2023 – 2027
                  </span>
                </div>
              </div>

              <div className="h-px w-full bg-border-subtle my-2"></div>
              
              {/* Schooling */}
              <div>
                <h5 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-bold">Academic Highlights</h5>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-primary border border-border-subtle rounded-xl p-4">
                    <div className="text-sm text-text-secondary mb-1">Higher Secondary (HSC)</div>
                    <div className="text-xl font-serif text-text-primary">81%</div>
                  </div>
                  <div className="flex-1 bg-primary border border-border-subtle rounded-xl p-4">
                    <div className="text-sm text-text-secondary mb-1">Secondary (SSLC)</div>
                    <div className="text-xl font-serif text-text-primary">Pass</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Internship Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card hover:bg-card-hover border border-border-subtle rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-gold-glow flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary border border-border-subtle flex items-center justify-center mb-8">
               <Briefcase className="text-gold-primary" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-text-primary mb-2">Internship Experience</h3>
            
            <div className="mt-6 flex flex-col gap-8 flex-1">
              
              {/* Internship 1 */}
              <div className="relative pl-6 border-l w-full border-gold-primary/30">
                <div className="absolute w-3 h-3 bg-gold-primary rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-medium text-text-primary">Modern Full Stack Development Intern</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gold-primary">AlgoTutor Academy</span>
                  <span className="text-xs text-text-muted">• Jul 2025</span>
                </div>
                <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
                  <li>Built modern web applications using React.js and Next.js</li>
                  <li>Worked closely with NoSQL databases for data management</li>
                  <li>Enhanced skills in API integration and modern workflows</li>
                </ul>
              </div>

              {/* Internship 2 */}
              <div className="relative pl-6 border-l w-full border-border-subtle">
                <div className="absolute w-3 h-3 bg-border-subtle rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-medium text-text-primary">Full Stack Development Intern</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-text-secondary">Better Tomorrow</span>
                  <span className="text-xs text-text-muted">• Jan 2025</span>
                </div>
                <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
                  <li>Hands-on training in MERN Full Stack Development</li>
                  <li>Built dynamic web applications using MongoDB, Express, React, Node</li>
                  <li>Strengthened skills in full-stack implementation and REST APIs</li>
                </ul>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Coding Profiles Strip */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <a href="https://www.codechef.com/users/kavikas2023cce" target="_blank" rel="noopener noreferrer" className="group bg-card hover:bg-[#5B4638]/20 border border-border-subtle hover:border-[#5B4638] rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300">
            <SiCodechef size={32} className="text-[#5B4638] mb-4 group-hover:scale-110 transition-transform" />
            <h5 className="font-serif text-lg text-text-primary mb-1">CodeChef</h5>
            <p className="text-xs text-text-secondary">700+ Problems Solved · Gold Badge</p>
          </a>
          
          <a href="https://leetcode.com/u/Ns8NgYzqUw/" target="_blank" rel="noopener noreferrer" className="group bg-card hover:bg-[#FFA116]/20 border border-border-subtle hover:border-[#FFA116] rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300">
            <SiLeetcode size={32} className="text-[#FFA116] mb-4 group-hover:scale-110 transition-transform" />
            <h5 className="font-serif text-lg text-text-primary mb-1">LeetCode</h5>
            <p className="text-xs text-text-secondary">180+ Problems Solved · Rating 1500</p>
          </a>

          <a href="https://www.hackerrank.com/profile/kavika_s2023cce" target="_blank" rel="noopener noreferrer" className="group bg-card hover:bg-[#00EA64]/10 border border-border-subtle hover:border-[#00EA64]/50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300">
            <SiHackerrank size={32} className="text-[#00EA64] mb-4 group-hover:scale-110 transition-transform" />
            <h5 className="font-serif text-lg text-text-primary mb-1">HackerRank</h5>
            <p className="text-xs text-text-secondary">C++ Gold · Java & Python Bronze</p>
          </a>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
