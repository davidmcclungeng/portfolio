import { toolingCards, toolingIntro } from "@/lib/content";
import { Corners } from "./Corners";
import { Reveal } from "./Reveal";

export function Tooling() {
  return (
    <section id="tooling" className="mx-auto max-w-[1040px] px-6 py-10 lg:px-10">
      <Reveal>
        <h2 className="section-title">How I work with AI</h2>
        <hr className="rule" />
        <p className="mb-7 max-w-[68ch] text-sm leading-relaxed text-muted">
          {toolingIntro}
        </p>
        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">
          {toolingCards.map((card) => (
            <div
              key={card.title}
              className="relative flex flex-col items-start gap-2.5 border border-border bg-background p-6"
            >
              <Corners />
              <span className="inline-flex items-center bg-accent/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-accent-strong">
                {card.label}
              </span>
              <h3 className="font-heading text-lg font-semibold uppercase tracking-[0.02em]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{card.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
