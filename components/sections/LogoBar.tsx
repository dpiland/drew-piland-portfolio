import { experienceLogos, brandLogos, type Logo } from "@/data/logos";

const ICON_COLOR = "94a3b8"; // slate-400 hex, no #

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.slug) {
    return (
      <div className="flex items-center justify-center opacity-50 hover:opacity-75 transition-opacity duration-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${logo.slug}/${ICON_COLOR}`}
          alt={logo.name}
          title={logo.name}
          className={`${logo.tall ? "h-8" : "h-6"} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div
      title={logo.name}
      className="opacity-40 hover:opacity-65 transition-opacity duration-200 text-slate-400 text-sm font-semibold tracking-wide whitespace-nowrap"
    >
      {logo.name}
    </div>
  );
}

function LogoRow({ label, logos }: { label: string; logos: Logo[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs font-medium text-slate-600 uppercase tracking-widest">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {logos.map((logo) => (
          <LogoItem key={logo.name} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function LogoBar() {
  return (
    <section className="py-14 px-6 border-t border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <LogoRow label="Experience at" logos={experienceLogos} />
        <LogoRow label="Brands worked with" logos={brandLogos} />
      </div>
    </section>
  );
}
