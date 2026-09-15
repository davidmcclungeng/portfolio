import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="about" className="mx-auto max-w-[1040px] px-6 pb-4 pt-16 lg:px-10">
      <Reveal>
        <h1 className="font-heading text-[40px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-foreground sm:text-5xl lg:text-[56px]">
          <span className="sm:block">Aspiring software developer,</span>{" "}
          <span className="text-accent sm:block">using AI to automate manual work.</span>
        </h1>
        <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted">
          I&apos;m studying for an MSc in AI in Business at Queen&apos;s
          University Belfast. I chose it to get ahead of where AI was heading.
          Then my internship at Tetra Tech put me on a software team for the
          first time, and I found out this is the work I want to do.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={profile.resumeUrl} download className="btn btn-primary">
            Download CV
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">
            {profile.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
