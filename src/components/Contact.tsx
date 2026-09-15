import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border"
      style={{ background: "var(--close-bg)", color: "var(--close-fg)" }}
    >
      <div className="mx-auto max-w-[1040px] px-6 py-14 lg:px-10">
        <Reveal>
          <h2 className="font-heading text-4xl font-semibold uppercase leading-none tracking-[0.01em] sm:text-5xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed opacity-85">
            I&apos;m looking for a graduate software or AI role. <br/>Email is the
            best way to reach me.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn"
              style={{ background: "var(--close-fg)", borderColor: "var(--close-fg)", color: "var(--close-bg)" }}
            >
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ borderColor: "transparent", color: "var(--close-fg)", paddingInline: 4 }}
            >
              github.com/davidmcclungeng
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ borderColor: "transparent", color: "var(--close-fg)", paddingInline: 4 }}
            >
              linkedin.com/in/davidmcclung25
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
