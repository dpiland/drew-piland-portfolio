import { ExternalLink, Play, Video } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { talks } from "@/data/talks";

const typeColors: Record<string, string> = {
  "Conference Talk": "bg-blue-500/15 text-blue-400",
  "Ignite Talk":     "bg-violet-500/15 text-violet-400",
  "Platform Demo":   "bg-cyan-500/15 text-cyan-400",
};

export function Talks() {
  return (
    <section id="talks" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Public Work</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Talks &amp; Thought Leadership
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            On stage and on camera — translating complex topics for technical and business audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {talks.map((talk) => (
            <a
              key={talk.id}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              {talk.platform === "youtube" && talk.videoId ? (
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`}
                    alt={talk.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 group-hover:bg-white/20 group-hover:scale-110">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  {/* Event badge on thumbnail */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                      <Video className="w-3 h-3 text-red-400" />
                      {talk.event}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 text-xs text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded-full">
                    {talk.year}
                  </div>
                </div>
              ) : (
                /* LinkedIn card — branded placeholder */
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#0a66c2] to-[#004182] flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-16 h-16 opacity-20 fill-white">
                    <path d="M8.5 14h5v17h-5V14zm2.5-7.8c1.6 0 2.9 1.3 2.9 2.9S12.6 12 11 12s-2.9-1.3-2.9-2.9S9.4 6.2 11 6.2zM17 14h4.8v2.3h.1c.7-1.3 2.3-2.7 4.8-2.7 5.1 0 6 3.4 6 7.7V31h-5v-8.8c0-2.1 0-4.8-2.9-4.8-2.9 0-3.4 2.3-3.4 4.6V31H17V14z"/>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-slate-950/70 backdrop-blur-sm text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                      LinkedIn
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 text-xs text-slate-300 bg-slate-950/70 px-2 py-0.5 rounded-full">
                    {talk.year}
                  </div>
                </div>
              )}

              {/* Card body */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[talk.type] ?? "bg-slate-700 text-slate-300"}`}>
                  {talk.type}
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {talk.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {talk.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors mt-1">
                  {talk.platform === "youtube" ? "Watch Recording" : "View Post"}
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
