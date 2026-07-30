import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Minimal sticky header for standalone case-study routes.
 *
 * The site's <Navigation /> is not reused here: its links are hash anchors
 * (#ai, #about) that do not resolve from a sub-route. This gives the page a
 * way home without touching the homepage nav.
 */
export function CaseHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white hover:text-blue-400 transition-colors"
        >
          Drew Piland
        </Link>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to portfolio
        </Link>
      </div>
    </header>
  );
}
