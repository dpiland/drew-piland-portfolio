import type { ElementType } from "react";

interface PillarCardProps {
  icon: ElementType;
  title: string;
  description: string;
  proofPoints: string[];
}

export function PillarCard({ icon: Icon, title, description, proofPoints }: PillarCardProps) {
  return (
    <div className="card-hover rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col gap-5">
      <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      <ul className="space-y-2 mt-auto">
        {proofPoints.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-slate-500">
            <span className="mt-2 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
