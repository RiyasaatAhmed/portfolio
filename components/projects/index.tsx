import { Title } from "../title";
import { projects } from "@/constants/projects";
import { Project } from "./project";
import { Container } from "../container";

export function Projects() {
  return (
    <Container id="projects" className="py-20">
      <Title title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project {...project} key={`project-${index}`} />
        ))}
      </div>
    </Container>
  );
}
