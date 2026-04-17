import type { ReactNode } from "react";

type StandardSectionProps = {
  title: string;
  explanation: ReactNode | ReactNode[];
  reflection: ReactNode | ReactNode[];
  reflectionTitle?: string;
  artifact?: ReactNode | ReactNode[];
  artifactPlaceholder?: ReactNode;
};

const defaultArtifactPlaceholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.";

function toBlocks(content: ReactNode | ReactNode[]) {
  return Array.isArray(content) ? content : [content];
}

function SectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="rounded-2xl border border-rose-200/80 bg-white p-6 text-center shadow-sm shadow-rose-900/5 sm:p-10"
    >
      <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-rose-400" aria-hidden />
      <h2
        id={`${id}-heading`}
        className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl"
      >
        {title}
      </h2>
      <div className="mx-auto mt-6 max-w-4xl space-y-4 text-left text-base leading-relaxed text-stone-700">
        {children}
      </div>
    </section>
  );
}

export function StandardSection({
  title,
  explanation,
  artifact,
  reflection,
  reflectionTitle = "Reflection",
  artifactPlaceholder = defaultArtifactPlaceholder,
}: StandardSectionProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10 border-b border-rose-200/90 pb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-rose-800/90">
          ISTE standard
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          {title}
        </h1>
      </header>

      <div className="space-y-8">
        <SectionCard id="explanation" title="Standard">
          {toBlocks(explanation).map((block, index) => (
            <div key={`explanation-${index}`}>{block}</div>
          ))}
        </SectionCard>

        {artifact ? (
          <SectionCard id="artifact" title="Artifact">
            <div
              className="rounded-xl border-2 border-dashed border-rose-300 bg-rose-50/80 px-5 py-8 text-left"
              role="region"
              aria-label="Artifact placeholder area"
            >
              <p className="text-sm leading-relaxed text-stone-700">{artifactPlaceholder}</p>
            </div>
            {toBlocks(artifact).map((block, index) => (
              <div key={`artifact-${index}`}>{block}</div>
            ))}
          </SectionCard>
        ) : null}

        <SectionCard id="reflection" title={reflectionTitle}>
          {toBlocks(reflection).map((block, index) => (
            <div key={`reflection-${index}`}>{block}</div>
          ))}
        </SectionCard>
      </div>
    </div>
  );
}
