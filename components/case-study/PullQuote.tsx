interface PullQuoteProps {
  children: React.ReactNode;
  /** Who said it, or where it came from. Omit for an unattributed claim. */
  cite?: string;
}

export function PullQuote({ children, cite }: PullQuoteProps) {
  return (
    <blockquote className="my-10 border-l-2 border-blue-500 pl-6 sm:pl-8">
      <p className="text-xl sm:text-2xl font-medium text-white leading-snug">
        {children}
      </p>
      {cite && (
        <footer className="mt-3 text-sm text-slate-500">{cite}</footer>
      )}
    </blockquote>
  );
}
