"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

const contactLinks = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Location", href: "#contact" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 opacity-60 blur-[120px] animate-glow"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute right-[8%] top-[28%] hidden h-40 w-40 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm sm:block"
        style={{ animationDelay: "-2s" }}
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute left-[6%] top-[55%] hidden h-24 w-24 rounded-full border border-border bg-card/50 backdrop-blur-sm md:block"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground shadow-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          Available for new opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient bg-[length:200%_auto] animate-[shine_6s_linear_infinite]">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-lg font-medium text-primary sm:text-xl"
        >
          {siteConfig.role}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-2xl font-medium text-balance text-foreground/90 sm:text-3xl"
        >
          {siteConfig.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {siteConfig.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex items-center gap-3"
        >
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
            >
              <Icon className="size-4.5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
