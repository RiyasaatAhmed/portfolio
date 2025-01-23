"use client";

import { Card } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    duration: "January 2022 - Present",
    description: [
      "Designed and implemented scalable systems using microservices architecture",
      "Led a team of 5 developers in delivering critical projects",
      "Built systems handling 100,000+ monthly active users",
    ],
  },
  {
    title: "Software Engineer",
    company: "Digital Solutions Ltd.",
    duration: "June 2020 - December 2021",
    description: [
      "Developed and maintained multiple full-stack applications",
      "Reduced application load time by 40% through optimization",
      "Collaborated with cross-functional teams to deliver features",
    ],
  },
  // Add more experiences as needed
];

export function Experience() {
  return (
    <section
      id="experience"
      className="container py-20 mx-auto grid-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Work Experience
      </h2>

      <div className="grid gap-8 md:gap-12 justify-center">
        {experiences.map((experience, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-muted-foreground">{experience.company}</p>
                <p className="text-sm text-muted-foreground">
                  {experience.duration}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
