import {
  Blocks,
  Bot,
  Database,
  Gauge,
  Sparkles,
  Workflow,
} from "lucide-react";

import { aiHighlights, aiProject } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const highlightIcons = [Blocks, Database, Sparkles, Gauge, Bot, Workflow];

export function AiSection() {
  return (
    <section id="ai" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[36rem] -translate-y-1/2 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI-Assisted Development"
          title="Building faster with AI, thoughtfully"
          description="I use AI tools such as Claude and prompt engineering to strengthen my development workflow, from planning to implementation."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <Reveal>
            <Card className="relative h-full gap-6 overflow-hidden border-primary/25 bg-gradient-to-br from-card to-primary/5 p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-primary/20 blur-3xl"
              />
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Where AI fits into my workflow
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                I use Claude and prompt engineering to accelerate architectural planning,
                database schema design, and complex feature implementation, letting me
                move from idea to working code more efficiently while staying in control
                of the technical decisions.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
                {aiHighlights.map((item, index) => {
                  const Icon = highlightIcons[index % highlightIcons.length];
                  return (
                    <div
                      key={item}
                      className="flex flex-col items-start gap-2 rounded-xl border border-border/60 bg-background/40 p-3.5"
                    >
                      <Icon className="size-4 text-primary" />
                      <span className="text-xs font-medium leading-snug text-foreground">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="h-full gap-4 p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Bot className="size-5" />
                </div>
                <Badge variant="accent">AI Project</Badge>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{aiProject.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {aiProject.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {aiProject.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
