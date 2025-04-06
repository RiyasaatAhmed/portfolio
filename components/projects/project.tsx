import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon, Github } from "lucide-react";
import { MagicCard } from "../magicui/magic-card";

interface ProjectProps {
  thumbnail: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function Project(project: ProjectProps) {
  return (
    <MagicCard className="p-6 hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted rounded-lg mb-4">
        <Image
          src={project.thumbnail}
          alt="Profile Photo"
          width={350}
          height={200}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4 h-[100px]">
        {project.description}
      </p>

      <div className="flex justify-center align-middle gap-4">
        {project.githubUrl ? (
          <Link target="_blank" href={project.githubUrl}>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </Link>
        ) : null}

        {project?.liveUrl ? (
          <Link target="_blank" href={project.liveUrl}>
            <Button variant="outline">
              <LinkIcon className="mr-2 h-4 w-4" />
              View
            </Button>
          </Link>
        ) : null}
      </div>
    </MagicCard>
  );
}
