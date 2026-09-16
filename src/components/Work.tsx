import Image from "next/image";
import { projects } from "@/lib/content";
import { Corners } from "./Corners";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="projects" className="mx-auto max-w-[1040px] px-6 py-10 lg:px-10">
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
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.06em] text-accent-strong">
                {project.role}
              </p>
              <h3 className="font-heading text-lg font-semibold uppercase tracking-[0.02em]">
                {project.title}
              </h3>

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
    </section>
  );
}
