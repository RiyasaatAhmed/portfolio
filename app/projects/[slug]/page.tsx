import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/magicui/magic-card";

// Generate static params for all projects that have a slug
export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({
      slug: p.slug,
    }));
}

// Generate metadata for the project page
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.details?.tagline || project.description,
    keywords: project.details?.technologies || [],
    openGraph: {
      title: project.title,
      description: project.details?.tagline || project.description,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { details } = project;

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 grid-background overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient animate-gradient">
              {project.title}
            </h1>
            
            {details?.tagline && (
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                {details.tagline}
              </p>
            )}

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {project.liveUrl && (
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href={project.liveUrl} target="_blank">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto py-16 space-y-20">
        {/* Overview */}
        {details?.overview && (
          <section className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
            <p className="text-lg text-muted-foreground leading-loose">
              {details.overview}
            </p>
          </section>
        )}

        {/* Challenge & Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards">
          {details?.challenge && (
            <MagicCard className="p-8 border h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="p-3 bg-red-500/10 w-fit rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-semibold">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {details.challenge}
              </p>
            </MagicCard>
          )}
          
          {details?.solution && (
             <MagicCard className="p-8 border h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="p-3 bg-green-500/10 w-fit rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                {details.solution}
              </p>
            </MagicCard>
          )}
        </div>

        {/* Features & Tech Stack */}
        <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-backwards">
          {/* Key Features */}
          {details?.features && details.features.length > 0 && (
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {details.features.map((feature, idx) => (
                  <MagicCard key={idx} className="p-4 flex items-start gap-3 border shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mb-1" />
                    <span className="font-medium">{feature}</span>
                  </MagicCard>
                ))}
              </div>
            </div>
          )}

          {/* Sidebar: Tech Stack */}
          {details?.technologies && details.technologies.length > 0 && (
            <div className="space-y-6">
               <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
               <MagicCard className="p-6 border flex flex-wrap gap-2 shadow-sm">
                  {details.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm font-medium m-2">
                      {tech}
                    </Badge>
                  ))}
               </MagicCard>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
