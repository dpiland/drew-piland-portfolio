import { rolePillars } from "@/data/unifyLaunch";

export function RolePillars() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {rolePillars.map(({ title, items }) => (
        <div
          key={title}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <div className="text-base font-semibold text-white mb-4">{title}</div>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span
                  className="shrink-0 mt-2 w-1 h-1 rounded-full bg-blue-400"
                  aria-hidden="true"
                />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
