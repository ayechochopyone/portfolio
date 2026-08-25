import { Bot, Cloud, Code2, Server, Wrench } from "lucide-react";

import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const icons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  "Cloud & AWS": Cloud,
  "AI & Automation": Bot,
  Other: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-10 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A practical toolkit spanning frontend, backend, cloud, and AI-assisted development."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.category] ?? Code2;
            return (
              <Reveal key={group.category} delay={index * 0.08}>
                <Card className="h-full gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{group.category}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
