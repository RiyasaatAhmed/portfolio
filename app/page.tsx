import { Github, Mail, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
