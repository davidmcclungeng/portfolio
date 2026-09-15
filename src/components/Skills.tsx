import { skillGroups } from "@/lib/content";
import { Corners } from "./Corners";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section className="mx-auto max-w-[1040px] px-6 py-10 lg:px-10">
      <Reveal>
        <h2 className="section-title">Skills &amp; stack</h2>
        <hr className="rule" />
        <div className="grid gap-7 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="relative border border-border bg-background p-6">
              <Corners />
              <h3 className="font-heading text-xl font-semibold uppercase tracking-[0.02em]">
                {group.label}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {group.body}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {group.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center px-2.5 py-1 text-xs ${
                      i === 0
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
