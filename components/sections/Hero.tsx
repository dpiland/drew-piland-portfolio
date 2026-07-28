import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
    >
      {/* Radial glow behind headline */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.18), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-8 animate-fade-up">
          <span className="w-8 h-px bg-blue-400/40" />
          Principal &amp; Director Product Marketing
          <span className="w-8 h-px bg-blue-400/40" />
        </div>

        {/* Headline: short form of the candidate messaging house roof */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-6 animate-fade-up delay-100">
          I Build For The Rep,
          <br />
          Not <span className="gradient-text">The Deck.</span>
        </h1>

        {/* Sub-narrative: states the belief before the credentials */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 animate-fade-up delay-200">
          Most positioning dies somewhere between the launch deck and the live
          call. I&apos;ve spent 8+ years closing that gap: category narrative
          the executives sign off on, and the enablement systems that get 500
          reps carrying it. CI/CD, software delivery, security.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-blue-500 text-white font-medium px-6 py-3.5 rounded-full hover:bg-blue-400 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:gap-3"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          {/* EDIT: Drop your resume.pdf into /public/ to make this work */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-full hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-white transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium underline-offset-4 hover:underline"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, #020617, transparent)",
        }}
      />
    </section>
  );
}
