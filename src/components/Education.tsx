import { education } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1040px] px-6 py-10 lg:px-10">
      <Reveal>
        <h2 className="section-title">Education</h2>
        <hr className="rule" />
        <table className="w-full border-collapse">
          <tbody>
            {education.map((item, i) => (
              <tr key={item.what}>
                <td
                  className={`w-[150px] whitespace-nowrap pt-3.5 pr-6 pb-3.5 align-top text-xs font-semibold uppercase tracking-[0.04em] text-muted ${
                    i === education.length - 1 ? "" : "border-b border-border/60"
                  }`}
                >
                  {item.when}
                </td>
                <td
                  className={`py-3.5 align-top text-sm ${
                    i === education.length - 1 ? "" : "border-b border-border/60"
                  }`}
                >
                  {item.what}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
