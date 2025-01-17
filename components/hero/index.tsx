import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold bg-clip-text text-primary animate-gradient">
            Creative Developer & Designer
          </h1>
          <p className="text-xl text-muted-foreground">
            Crafting beautiful digital experiences with modern technologies
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </div>
          <div className="flex justify-center gap-4 pt-8">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
          <div className="animate-bounce mt-16">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
