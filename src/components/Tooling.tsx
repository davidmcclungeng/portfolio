import { toolingCalls, toolingIntro, toolingRule } from "@/lib/content";
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
          {toolingCalls.map((call) => (
            <div
              key={call.what}
              className="relative flex flex-col items-start gap-2.5 border border-border bg-background p-6"
            >
              <Corners />
              <span
                className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.06em] ${
                  call.kept
                    ? "bg-accent/15 text-accent-strong"
                    : "border border-accent text-accent-strong"
                }`}
              >
                {call.verdict}
              </span>
              <h3 className="font-heading text-lg font-semibold uppercase tracking-[0.02em]">
                {call.what}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{call.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 border-l-2 border-accent pl-4 text-sm leading-relaxed">
          {toolingRule}
        </p>
      </Reveal>
    </section>
  );
}
