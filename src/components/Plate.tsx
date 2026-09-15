import { buildRecord, profile } from "@/lib/content";
import { Corners } from "./Corners";
import { Reveal } from "./Reveal";

export function Plate() {
  return (
    <section className="mx-auto max-w-[1040px] px-6 py-10 lg:px-10">
      <Reveal>
        <div className="plate">
          <Corners />
          <header className="flex flex-wrap border-b border-border">
            <span className="min-w-[16ch] flex-1 p-3 px-5 text-xs font-semibold uppercase tracking-[0.08em]">
              {profile.name}, build record
            </span>
            <span className="whitespace-nowrap border-l border-border p-3 px-5 text-xs uppercase tracking-[0.08em] text-muted">
              {profile.location}
            </span>
            <span className="whitespace-nowrap border-l border-border p-3 px-5 text-xs font-semibold uppercase tracking-[0.08em] text-accent-strong">
              {profile.status}
            </span>
          </header>

          {/* Desktop / tablet: full spec table */}
          <table className="hidden w-full table-fixed border-collapse md:table">
            <colgroup>
              <col className="w-[60px]" />
              <col className="w-[30%]" />
              <col className="w-[24%]" />
              <col />
            </colgroup>
            <thead>
              <tr>
                {["No.", "Built", "Detail", "Where"].map((h) => (
                  <th
                    key={h}
                    className="border-b border-border/60 px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.08em] text-muted first:pl-5"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {buildRecord.map((row, i) => {
                const isLast = i === buildRecord.length - 1;
                const rowBorder = isLast ? "" : "border-b border-border/60";
                return (
                  <tr key={row.num}>
                    <td
                      className={`${rowBorder} px-5 py-2.5 text-xs font-semibold tracking-[0.08em] text-accent-strong`}
                    >
                      {row.num}
                    </td>
                    <td className={`${rowBorder} py-2.5 pr-5`}>{row.built}</td>
                    <td
                      className={`${rowBorder} whitespace-nowrap py-2.5 pr-5 font-heading text-lg font-semibold`}
                    >
                      {row.value}
                    </td>
                    <td className={`${rowBorder} py-2.5 pr-5 text-sm text-muted`}>
                      {row.where}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Mobile: stacked record cards, the fixed 4-column table doesn't fit */}
          <div className="md:hidden">
            {buildRecord.map((row, i) => (
              <div
                key={row.num}
                className={`flex items-start gap-4 px-5 py-3 ${
                  i === buildRecord.length - 1 ? "" : "border-b border-border/60"
                }`}
              >
                <span className="pt-0.5 text-xs font-semibold tracking-[0.08em] text-accent-strong">
                  {row.num}
                </span>
                <div>
                  <p className="text-sm">{row.built}</p>
                  <p className="font-heading text-base font-semibold">
                    {row.value}
                  </p>
                  <p className="text-xs text-muted">{row.where}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="border-t border-border px-5 py-2.5 text-xs text-muted">
            I use Claude Code to write much of my code. My part is deciding
            what to build, reading what it writes and testing it.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
