import { siteConfig } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p className="font-mono">
            <span className="text-primary">&lt;</span>
            {siteConfig.name}
            <span className="text-primary">/&gt;</span>
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
