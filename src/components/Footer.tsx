import { SiGithub, SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Profile", href: "#profile" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/kavika-s-673b632a2", label: "LinkedIn" },
    { icon: SiGithub, href: "https://github.com/kavikas", label: "GitHub" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/Ns8NgYzqUw/", label: "LeetCode" },
    { icon: SiCodechef, href: "https://www.codechef.com/users/kavikas2023cce", label: "CodeChef" },
    { icon: SiHackerrank, href: "https://www.hackerrank.com/profile/kavika_s2023cce", label: "HackerRank" },
    { icon: Mail, href: "mailto:kavika.s2023cce@sece.ac.in", label: "Email" },
  ];

  return (
    <footer className="bg-card w-full py-12 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand / Name */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="text-2xl font-serif text-text-primary hover:text-gold-primary transition-colors">
            KS
          </Link>
          <p className="text-xs text-text-muted mt-2">
            © {currentYear} Kavika S. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex items-center gap-6">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm text-text-secondary hover:text-gold-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-10 h-10 rounded-full bg-primary border border-border-subtle flex items-center justify-center text-text-secondary hover:text-gold-primary hover:border-gold-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}
