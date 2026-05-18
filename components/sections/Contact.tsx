import { Mail, ExternalLink, Download } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* CTA card */}
        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 px-8 py-20 text-center overflow-hidden">
          {/* Bottom glow inside card */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(59, 130, 246, 0.14), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <SectionLabel>Let&apos;s Connect</SectionLabel>
            {/* EDIT: Customize headline and availability message */}
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mt-2 mb-4 leading-tight">
              Let&apos;s Build Something
              <br />
              Worth Talking About.
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              I&apos;m open to Senior Level Product Marketing and Alliance Marketing Manager positions.
              Let&apos;s see if there&apos;s a fit.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:jdpiland6@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-500 text-white font-medium px-6 py-3.5 rounded-full hover:bg-blue-400 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/drewpiland/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-full hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-white transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                View LinkedIn
              </a>
              {/* EDIT: Drop your resume.pdf into /public/ */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-full hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          {/* EDIT: Update year auto-updates; update name if needed */}
          <p>© {new Date().getFullYear()} Drew Piland</p>
          <div className="flex items-center gap-6">
            {/* EDIT: Replace with your real URLs */}
            <a
              href="https://www.linkedin.com/in/drewpiland/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jdpiland6@gmail.com"
              className="hover:text-slate-400 transition-colors"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              download
              className="hover:text-slate-400 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
