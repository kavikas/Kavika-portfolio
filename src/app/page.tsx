import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <Navbar />
      
      <Hero />
      <About />
      <Profile />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      
      <Footer />
    </main>
  );
}
