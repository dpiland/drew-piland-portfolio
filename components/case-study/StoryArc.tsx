import { storyArc } from "@/data/unifyLaunch";

/**
 * The story spine, straight from the source doc's structure diagram.
 * Doubles as jump nav when the page is screen-shared and narrated live.
 */
export function StoryArc() {
  return (
    <nav aria-label="Story arc" className="overflow-x-auto">
      <ol className="flex items-center gap-2 min-w-max">
        {storyArc.map(({ id, label }, i) => (
          <li key={id} className="flex items-center gap-2">
            <a
              href={`#${id}`}
              className="whitespace-nowrap rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-sm text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
            >
              {label}
            </a>
            {i < storyArc.length - 1 && (
              <span className="text-slate-700 text-sm" aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
