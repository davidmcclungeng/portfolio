import Image from "next/image";
import { projects } from "@/lib/content";
import { Corners } from "./Corners";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    // Full-width tinted band so the projects read as the main event; the cards
    // stay on the paper colour and stand off it
    <section id="projects" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1040px] px-6 py-14 lg:px-10">
        <Reveal>
          <h2 className="section-title">Projects</h2>
          <hr className="rule" />
          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.number}
                className={`relative flex flex-col gap-2.5 border border-border bg-background p-6 ${
                  project.wide ? "sm:col-span-2" : ""
                }`}
              >
                <Corners />
                {/* Drafting-plate label: role on the left, plate number on the right */}
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-heading text-xs font-semibold uppercase tracking-[0.06em] text-accent-strong">
                    {project.role}
                  </p>
                  <span
                    aria-hidden
                    className="font-heading text-xs font-semibold tracking-[0.08em] text-muted"
                  >
                    No. {project.number}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold uppercase leading-none tracking-[0.02em] sm:text-[28px]">
                  {project.title}
                </h3>

                {project.result && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {project.result.what}
                      {project.result.note && ` · ${project.result.note}`}
                    </p>
                    <p className="mt-0.5 font-heading text-xl font-semibold uppercase leading-tight tracking-[0.01em] sm:text-2xl">
                      {project.result.from}{" "}
                      {/* Arrow and outcome wrap together, never an arrow ending a line */}
                      <span className="whitespace-nowrap">
                        <span aria-hidden className="text-accent">→</span>
                        <span className="sr-only">to</span>{" "}
                        <span className="text-accent">{project.result.to}</span>
                      </span>
                    </p>
                  </div>
                )}

                {/* Wide cards put the screenshot and diagram side by side */}
                <div
                  className={
                    project.wide
                      ? "my-1 grid gap-4 md:grid-cols-[3fr_2fr] md:items-start"
                      : "contents"
                  }
                >
                  {project.image && (
                    <div className={`duotone border border-border ${project.wide ? "" : "my-1"}`}>
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}

                  {project.diagram && (
                    <div className={`border border-border px-5 py-4 ${project.wide ? "" : "my-1"}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                        {project.diagram.label}
                      </p>
                      <ol
                        aria-label={`${project.title} workflow, ${project.diagram.label.toLowerCase()}`}
                        className="mt-3 flex flex-col"
                      >
                        {project.diagram.steps.map((step, i) => (
                          <li
                            key={step}
                            className={`relative flex items-center gap-3 ${
                              i === 0
                                ? ""
                                : "pt-3 before:absolute before:left-4 before:top-0 before:h-3 before:w-px before:bg-accent"
                            }`}
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent bg-surface text-xs font-semibold tracking-[0.08em] text-accent-strong">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>

                <p
                  className={`flex-1 text-sm leading-relaxed text-muted ${
                    project.wide ? "max-w-[75ch]" : ""
                  }`}
                >
                  {project.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center bg-surface px-2.5 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
