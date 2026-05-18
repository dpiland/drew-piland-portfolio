interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
      {children}
    </span>
  );
}
