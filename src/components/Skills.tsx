import { skillGroups } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1040px] px-6 py-10 lg:px-10">
      <Reveal>
        <h2 className="section-title">Skills &amp; stack</h2>
        <hr className="rule" />
        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`grid gap-3 py-4 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-6 ${
                i === skillGroups.length - 1 ? "" : "border-b border-border"
              }`}
            >
              <h3 className="font-heading text-lg font-semibold uppercase tracking-[0.02em]">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag, j) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center px-2.5 py-1 text-xs ${
                      j === 0
                        ? "bg-accent/15 text-accent-strong"
                        : "border border-accent text-accent-strong"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
