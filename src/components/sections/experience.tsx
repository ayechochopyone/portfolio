import { Briefcase, GraduationCap } from "lucide-react";

import { education, experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="A track record of hands-on frontend, backend, and AI feature delivery."
          align="center"
          className="mb-16"
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-6"
          />

          <ol className="flex flex-col gap-10">
            {experience.map((job, index) => (
              <Reveal as="li" key={job.company} delay={index * 0.1} className="relative pl-12 sm:pl-20">
                <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_4px_var(--background)] sm:size-12">
                  <Briefcase className="size-4 sm:size-5" />
                </span>

                <Card className="gap-3 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                    <span className="text-sm font-medium text-primary">{job.period}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                  <ul className="mt-2 flex flex-col gap-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}

            <Reveal as="li" delay={experience.length * 0.1} className="relative pl-12 sm:pl-20">
              <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-[0_0_0_4px_var(--background)] sm:size-12">
                <GraduationCap className="size-4 sm:size-5" />
              </span>
              <Card className="gap-2 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
                  <span className="text-sm font-medium text-primary">{education.period}</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{education.school}</p>
              </Card>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  );
}
