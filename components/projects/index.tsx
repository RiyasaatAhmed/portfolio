import { Title } from "../title";
import { projects } from "@/constants/projects";
import { Project } from "./project";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background/50 grid-background">
      <div className="container mx-auto px-4">
        <Title title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project {...project} key={`project-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
