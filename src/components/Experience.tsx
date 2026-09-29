import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1040px] px-6 py-10 lg:px-10">
      <Reveal>
        <h2 className="section-title">Experience</h2>
        <hr className="rule" />
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <div
              key={item.role}
              className={`grid gap-6 py-[18px] sm:grid-cols-[180px_1fr] ${
                i === experience.length - 1 ? "" : "border-b border-border"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
                {item.when}
              </p>
              <div>
                <h3 className="font-heading text-lg font-semibold uppercase">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
