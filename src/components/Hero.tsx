import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="about" className="mx-auto max-w-[1040px] px-6 pb-4 pt-16 lg:px-10">
      <h1 className="font-heading text-[40px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-foreground sm:text-5xl lg:text-[56px]">
        <span className="sm:block">Aspiring software developer,</span>{" "}
        <span className="text-accent sm:block">using AI to automate manual work.</span>
      </h1>
      <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted">
        I have just completed an MSc in Artificial Intelligence in Business at
        Queen&apos;s University Belfast, and hope to graduate in December
        2026. My summer internship with Tetra Tech&apos;s Data &amp; AI team
        opened my eyes to software development and AI automation. I&apos;m now looking for
        my first role in the field, while building my skills through
        certifications and working on my own software projects in my free
        time.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href={profile.resumeUrl} download className="btn btn-primary">
          Download CV
        </a>
        <a href={`mailto:${profile.email}`} className="btn btn-ghost">
          {profile.email}
        </a>
      </div>
    </section>
  );
}
