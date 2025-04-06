import Link from "next/link";
import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { Title } from "../title";
import { INTRO_VIDEO_URL } from "@/constants/urls";
import { Badge } from "../badge";
import { MAIN_STRENGTHS } from "@/constants/skills";
import { Container } from "../container";

export function About() {
  return (
    <Container id="about">
      <div className="max-w-3xl mx-auto text-center">
        <Title title="About Me" />
        <p className="text-lg text-muted-foreground mb-8">
          Frontend developer with 4+ years of remote experience delivering
          scalable, high-performance web applications for US and EU companies.
          Skilled in TypeScript, React, and Next.js, with a focus on clean,
          user-centric solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {MAIN_STRENGTHS.map((tech) => (
            <Badge key={tech} skill={tech} />
          ))}
        </div>
        <Button size="lg">
          <Link
            href={INTRO_VIDEO_URL}
            target="_blank"
            className="flex justify-center items-center"
          >
            <Video className="mr-2 h-4 w-4" />
            Intro Video
          </Link>
        </Button>
      </div>
    </Container>
  );
}
