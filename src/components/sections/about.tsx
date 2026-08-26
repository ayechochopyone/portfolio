import { Bot, Code2, RefreshCw, Sparkles, Users } from "lucide-react";

import { aboutHighlights, siteConfig } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const icons = [Code2, Bot, Users, Sparkles, RefreshCw];

export function About() {
  return (
    <section id="about" className="relative py-10 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="About Me"
              title={`Hi, I'm ${siteConfig.name}`}
              //className="lg:top-28"
            />
            <Reveal delay={0.1} className="flex flex-col gap-4 text-muted-foreground ">
              <p className="text-base leading-relaxed sm:text-lg">
                I&apos;m a Software Engineer passionate about frontend development, modern
                web technologies, and AI-powered applications. I enjoy turning complex
                requirements into responsive, accessible, and user-friendly products.
              </p>
              <p className="text-base leading-relaxed sm:text-lg">
                Alongside frontend work, I&apos;ve built AI chatbot interfaces and explored
                how tools like Claude and prompt engineering can speed up architecture
                planning and feature development. I enjoy collaborating within small
                teams and continuously sharpening my craft.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <Card className="group h-full gap-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
