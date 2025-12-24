import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Recommendations } from "@/components/recommendations";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Recommendations Section */}
      <Recommendations />

      {/* Projects */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
