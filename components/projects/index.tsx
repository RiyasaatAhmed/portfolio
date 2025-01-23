import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-muted-foreground mb-4">
                A brief description of the project and the technologies used.
              </p>
              <Button variant="outline" className="w-full">
                View Project
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
