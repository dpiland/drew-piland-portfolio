import { SdlcMap } from "@/components/case-study/SdlcMap";
import { misconception, cake, cakePunchline } from "@/data/sdlc101";

/**
 * The SDLC 101 page. Bespoke rather than rendered markdown, because the map
 * and the stage cards carry what the prose used to, and running both would
 * walk the reader through seven stages twice.
 */
export function SdlcCourse() {
  return (
    <div className="not-prose">
      {/* TLDR */}
      <section className="mb-14">
        <div className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 mb-4">
          Why this course existed
        </div>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            Reps knew our products. They didn&apos;t know the lifecycle those
            products lived inside. Customers don&apos;t buy point solutions,
            they buy solutions to a problem, and a rep can&apos;t locate a
            problem inside a lifecycle they can&apos;t picture. Before Unify,
            the rep&apos;s mental model stopped at Jenkins: CloudBees was
            &ldquo;the CI tool,&rdquo; full stop. That&apos;s an accurate
            description of one stage out of seven, and it&apos;s exactly the box
            the market had us filed under for a decade.
          </p>
          <p>
            Unify&apos;s launch was the occasion to widen that picture, so the
            course maps the full lifecycle, not just the stage CloudBees came
            from. The strategy behind the map was{" "}
            <strong className="text-white font-semibold">
              embrace, don&apos;t replace
            </strong>
            : focus the product claim on the one stage CloudBees actually
            excelled at, and everywhere else, embrace the tools already in place
            rather than pitch a rip and replace.
          </p>
          <p className="text-slate-300">
            A rep who can place a customer&apos;s stated pain onto one of these
            seven stages knows, in the same instant, whether CloudBees has a
            right to be in that conversation at all, and if so, whether
            it&apos;s a heritage claim, an embrace claim, or no claim at all.
          </p>
        </div>
      </section>

      {/* The map */}
      <SdlcMap />

      {/* Deploy vs Release */}
      <section className="mb-14">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.05] p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-400 mb-3">
            {misconception.heading}
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-5">
            {misconception.claim}
          </p>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            {misconception.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Cake */}
      <section>
        <div className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 mb-3">
          The closing analogy
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
          Baking a cake
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
          The seven-stage map, accurate as it is, isn&apos;t what a rep repeats
          back to a customer at 4pm on a Friday. A cake is.
        </p>

        <ol className="space-y-px mb-8">
          {cake.map(({ stage, text }) => (
            <li
              key={stage}
              className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-5 py-3.5 border-b border-slate-800/80"
            >
              <span className="text-sm font-semibold text-blue-400">
                {stage}
              </span>
              <span className="text-sm text-slate-400 leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 mb-3">
            The punchline reps kept
          </div>
          <p className="text-slate-300 leading-relaxed">{cakePunchline}</p>
          <p className="mt-4 text-lg font-semibold gradient-text">
            Embrace, don&apos;t replace.
          </p>
        </div>
      </section>
    </div>
  );
}
