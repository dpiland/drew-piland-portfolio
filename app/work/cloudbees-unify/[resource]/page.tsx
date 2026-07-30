import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { workSamples, getWorkSample } from "@/data/workSamples";
import { renderWorkSample } from "@/lib/markdown";

// Static route params. Next 16 passes `params` as a Promise, so it is awaited.
export function generateStaticParams() {
  return workSamples.map(({ slug }) => ({ resource: slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ resource: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { resource } = await params;
  const sample = getWorkSample(resource);
  if (!sample) return {};

  const title = `${sample.title} | Drew Piland`;
  const url = `https://drewpiland.com/work/cloudbees-unify/${sample.slug}`;

  return {
    title,
    description: sample.blurb,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: sample.blurb,
      type: "article",
      url,
      siteName: "Drew Piland",
    },
    twitter: { card: "summary_large_image", title, description: sample.blurb },
  };
}

export default async function WorkSamplePage({ params }: Props) {
  const { resource } = await params;
  const sample = getWorkSample(resource);
  if (!sample) notFound();

  const html = renderWorkSample(sample.file);
  const others = workSamples.filter((s) => s.slug !== sample.slug);

  return (
    <>
      <CaseHeader />

      <main className="px-6 py-16">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/work/cloudbees-unify"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            CloudBees Unify launch
          </Link>

          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
            {sample.framework}
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
            {sample.title}
          </h1>

          <div
            className="prose-doc"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Sibling samples */}
          <div className="mt-16 pt-10 border-t border-slate-800">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-600 mb-5">
              Other work samples from this launch
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {others.map(({ slug, title, framework }) => (
                <Link
                  key={slug}
                  href={`/work/cloudbees-unify/${slug}`}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 card-hover"
                >
                  <div className="text-[11px] font-medium text-blue-400 mb-1.5">
                    {framework}
                  </div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
