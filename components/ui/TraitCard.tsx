import type { ElementType } from "react";

interface TraitCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

export function TraitCard({ icon: Icon, title, description }: TraitCardProps) {
  return (
    <div className="card-hover rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col gap-4">
      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
