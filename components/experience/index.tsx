"use client";

import Link from "next/link";
import { experiences } from "../../constants/experiences";
import { Title } from "../title";
import { Container } from "../container";
import { MagicCard } from "../magicui/magic-card";

export function Experience() {
  return (
    <Container id="experience">
      <Title title="Work Experience" />

      <div className="grid gap-8 md:gap-12 justify-center">
        {experiences.map((experience, index) => (
          <MagicCard
            key={index}
            className="p-6 w-full sm:w-4/5 m-auto md:w-[750px] shadow-2xl transition-shadow"
          >
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <Link
                  href={experience.url}
                  target="_blank"
                  className="text-muted-foreground underline"
                >
                  {experience.company}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {experience.duration}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground list-none">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MagicCard>
        ))}
      </div>
    </Container>
  );
}
