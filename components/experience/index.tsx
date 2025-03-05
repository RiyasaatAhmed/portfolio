"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { experiences } from "../../constants/experiences";
import { Title } from "../title";
import { useState } from "react";
import { Button } from "../ui/button";

export function Experience() {
  const [showMore, setShowMore] = useState(true);
  return (
    <section
      id="experience"
      className="container py-20 mx-auto grid-background"
    >
      <Title title="Work Experience" />

      <div className="grid gap-8 md:gap-12 justify-center">
        {experiences
          ?.slice(0, showMore ? 2 : experiences.length)
          .map((experience, index) => (
            <Card
              key={index}
              className="p-6 w-4/5 m-auto md:w-[750px] shadow-2xl transition-shadow"
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
            </Card>
          ))}
        {showMore ? (
          <Button
            variant="outline"
            className="mx-auto"
            onClick={() => setShowMore(() => false)}
          >
            {"Show more"}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
