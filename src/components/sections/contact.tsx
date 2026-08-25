import { ArrowUpRight, Languages, Mail, MapPin, Phone } from "lucide-react";

import { languages, siteConfig } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-10 sm:py-18">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-primary/10 to-transparent"
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-medium tracking-wide text-primary uppercase">
            Contact
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s Build Something Great Together.
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            I&apos;m open to new opportunities and collaborations. Reach out and let&apos;s
            talk about how I can help.
          </p>
          <Button size="lg" asChild className="mt-8">
            <a href={`mailto:${siteConfig.email}`}>
              Say Hello
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {contactCards.map(({ icon: Icon, label, value, href }, index) => (
            <Reveal key={label} delay={index * 0.08}>
              <Card className="group h-full items-center gap-3 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="text-sm font-medium text-foreground hover:text-primary">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{value}</p>
                )}
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <Card className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Languages className="size-4" />
              <span className="text-xs font-medium tracking-wide uppercase">Languages</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang) => (
                <Badge key={lang.name} variant="outline">
                  {lang.name} — {lang.level}
                </Badge>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
