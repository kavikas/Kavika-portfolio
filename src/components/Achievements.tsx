"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Trophy, Code2, Star } from "lucide-react";

const codingAchievements = [
  {
    title: "700+ Problems Solved",
    subtitle: "Div 4 Rank 902",
    platform: "CodeChef",
    category: "COMPETITIVE CODING",
    link: "https://www.codechef.com/users/kavikas2023cce",
    icon: <Code2 size={28} />,
    accentColor: "from-amber-600/20 to-amber-800/10",
    borderAccent: "hover:border-amber-500/40",
    stat: "700+",
    statLabel: "Problems",
  },
  {
    title: "180+ Problems Solved",
    subtitle: "Rating 1500",
    platform: "LeetCode",
    category: "COMPETITIVE CODING",
    link: "https://leetcode.com/u/Ns8NgYzqUw/",
    icon: <Code2 size={28} />,
    accentColor: "from-yellow-600/20 to-yellow-900/10",
    borderAccent: "hover:border-yellow-500/40",
    stat: "1500",
    statLabel: "Rating",
  },
  {
    title: "C++ (Gold), Java & Python (Bronze)",
    subtitle: "Multi-language badges",
    platform: "HackerRank",
    category: "COMPETITIVE CODING",
    link: "https://www.hackerrank.com/profile/kavika_s2023cce",
    icon: <Star size={28} />,
    accentColor: "from-emerald-600/20 to-emerald-900/10",
    borderAccent: "hover:border-emerald-500/40",
    stat: "Gold",
    statLabel: "C++ Rank",
  },
];

const awards = [
  {
    title: "Mini Project Expo — 3rd Prize",
    platform: "Sri Eshwar College",
    date: "2024",
    category: "ACHIEVEMENT",
    description: "Awarded 3rd prize at the college-level Mini Project Expo for developing an innovative technical project.",
    icon: <Trophy size={28} />,
  },
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-primary pt-12 pb-32">
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
            Achievements
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-[2px] bg-gold-primary"></div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Competitive coding milestones, platform rankings, and recognition that demonstrate my problem-solving dedication and technical excellence.
          </p>
        </motion.div>

        {/* Competitive Coding Cards */}
        <div className="w-full mb-16">
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Competitive Coding
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {codingAchievements.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group bg-card ${item.borderAccent} border border-border-subtle rounded-3xl p-6 flex flex-col gap-5 transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-1 cursor-pointer`}
              >
                {/* Icon + Stat Row */}
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accentColor} border border-border-subtle flex items-center justify-center text-gold-primary`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-text-primary font-serif leading-none">
                      {item.stat}
                    </p>
                    <p className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                      {item.statLabel}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-gold-primary/10 text-gold-bright text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-serif text-text-primary mt-2 mb-0.5 group-hover:text-gold-bright transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted">{item.subtitle}</p>
                </div>

                {/* Platform + Link */}
                <div className="mt-auto flex items-center justify-between border-t border-border-subtle pt-4">
                  <span className="text-sm font-medium text-text-secondary">{item.platform}</span>
                  <ExternalLink size={14} className="text-gold-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Awards Row */}
        <div className="w-full">
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Awards & Recognition
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-card hover:bg-card-hover border border-border-subtle hover:border-gold-primary/30 rounded-3xl p-6 flex gap-5 transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-primary/20 to-gold-primary/5 border border-border-subtle flex items-center justify-center text-gold-primary flex-shrink-0">
                  {award.icon}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-gold-primary/10 text-gold-bright text-[10px] font-bold uppercase tracking-wider">
                      {award.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-border-subtle/50 text-text-secondary text-[10px] font-bold uppercase tracking-wider">
                      {award.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif text-text-primary mb-1 group-hover:text-gold-bright transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs text-text-muted mb-1">{award.platform}</p>
                  {award.description && (
                    <p className="text-sm text-text-secondary leading-relaxed">{award.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
