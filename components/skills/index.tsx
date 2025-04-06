import { IconCloud } from "./icon-cloud";
import { Title } from "../title";
import { Container } from "../container";
import { MagicCard } from "../magicui/magic-card";
import { SKILLS } from "../../constants/skills";

export function Skills() {
  return (
    <Container className="grid-background">
      <Title title="Skills" />
      <div className="flex flex-col-reverse gap-8 sm:flex-col">
        <SkillList />
        <IconCloud />
      </div>
    </Container>
  );
}

function SkillList() {
  return (
    <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-8">
      {SKILLS.map((category) => (
        <MagicCard key={category.title} className="max-w-[400px]">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium bg-black/10  dark:bg-white/10 rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
}
