import { contact, profile } from "@/lib/content";
import { Reveal } from "./Reveal";

// Show a profile link without its scheme, so the label can't drift from the URL
const linkLabel = (url: string) => url.replace(/^https?:\/\//, "");

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
            {contact.heading}
          </h2>
          <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed opacity-85">
            {contact.body} <br />
            {contact.cta}
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
              {linkLabel(profile.github)}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ borderColor: "transparent", color: "var(--close-fg)", paddingInline: 4 }}
            >
              {linkLabel(profile.linkedin)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
