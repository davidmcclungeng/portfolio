import { hero, profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="about" className="mx-auto max-w-[1040px] px-6 pb-4 pt-10 sm:pt-16 lg:px-10">
      <h1 className="font-heading text-[40px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-foreground sm:text-5xl lg:text-[56px]">
        <span className="sm:block">{hero.headline}</span>{" "}
        <span className="text-accent sm:block">{hero.headlineAccent}</span>
      </h1>
      <div className="mt-5 flex items-baseline gap-x-3 font-heading text-sm font-semibold uppercase tracking-[0.08em] sm:text-base">
        <p id="roles-label" className="shrink-0 whitespace-nowrap text-muted">
          {hero.rolesLabel}
        </p>
        {/* Stacked beside the label on small screens: a wrapped row would start lines with a divider */}
        <ul aria-labelledby="roles-label" className="flex flex-col gap-y-1 md:flex-row md:gap-x-3">
          {hero.roles.map((role, i) => (
            <li
              key={role}
              className={`text-accent-strong ${i === 0 ? "" : "md:border-l md:border-border-strong md:pl-3"}`}
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 max-w-[72ch] text-base leading-relaxed text-muted">
        {hero.intro}
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
