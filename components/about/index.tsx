import Link from "next/link";
import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { Title } from "../title";
import { INTRO_VIDEO_URL } from "@/constants/urls";
import { Badge } from "../badge";
import { MAIN_STRENGTHS } from "@/constants/skills";
import { Container } from "../container";
import { TypeScriptIcon } from "../icons/typescript";
import { ReactIcon } from "../icons/react";
import { NextJsIcon } from "../icons/nextjs";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  TypeScript: <TypeScriptIcon className="h-5 w-5" />,
  "React.js": <ReactIcon className="h-5 w-5" />,
  "Next.js": <NextJsIcon className="h-5 w-5" />,
};

export function About() {
  return (
    <Container id="about">
      <div className="max-w-3xl mx-auto text-center">
        <Title title="About Me" />
        <p className="text-lg text-muted-foreground mb-8">
          Frontend Developer with 5+ years of remote experience delivering
          scalable, high-performance applications for US and EU companies. I
          specialize in TypeScript, React, and Next.js building clean,
          intuitive, and user-centric interfaces with a strong emphasis on
          performance and maintainability.
          <br />
          <br />
          Beyond the frontend, I’m comfortable working with Python, FastAPI,
          Supabase, and LLM-powered systems. I design effective prompts, build
          intelligent AI workflows, and apply strong context-engineering
          principles to get the most out of modern coding agents. Leveraging
          tools like Cursor, I convert ideas into production-ready code with
          exceptional speed and precision through optimized rules and
          command-driven workflows.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {MAIN_STRENGTHS.map((tech) => (
            <Badge key={tech} skill={tech} icon={SKILL_ICONS[tech]} />
          ))}
        </div>
        <Button size="lg" asChild>
          <Link
            href={INTRO_VIDEO_URL}
            target="_blank"
            className="flex justify-center items-center"
            aria-label="Watch Intro Video"
          >
            <Video className="mr-2 h-4 w-4" />
            Intro Video
          </Link>
        </Button>
      </div>
    </Container>
  );
}
