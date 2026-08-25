import { Briefcase, Building2, GraduationCap } from "lucide-react";

import { education, experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Experience() {
  return (
    <section id="experience" className="relative py-10 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="The companies I've worked with, my role, and my general responsibilities."
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

                <Card className="gap-5 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{job.company}</h3>
                      <span className="text-sm font-medium text-primary">{job.period}</span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{job.role}</p>
                  </div>

                  {job.companyOverview ? (
                    <div className="flex gap-2.5 rounded-xl border border-border/60 bg-secondary/40 p-4">
                      <Building2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                      <p className="text-sm leading-relaxed text-muted-foreground">{job.companyOverview}</p>
                    </div>
                  ) : null}

                  <Separator />

                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-xs font-semibold tracking-wide text-foreground uppercase">
                      My Role
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {job.responsibilities.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
