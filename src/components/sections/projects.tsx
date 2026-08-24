import { Check, FolderGit2 } from "lucide-react";

import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="A selection of real projects spanning AI chatbots, HR systems, and e-learning platforms."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <Card className="h-full gap-5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FolderGit2 className="size-5" />
                  </div>
                  <Badge variant="accent">Case Study</Badge>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {project.highlights.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="size-3.5 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
