/**
 * Inline SVG marks for Creative Commons BY-NC (attribution + non-commercial).
 * Not the bitmap “license button” image — simple vector symbols only.
 */
export function CcLicenseSymbols({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-rose-950 ${className ?? ""}`}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="currentColor"
          fontFamily="system-ui, sans-serif"
        >
          CC
        </text>
      </svg>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="12" r="3.5" fill="currentColor" />
        <path
          fill="currentColor"
          d="M9 26c0-4 3.2-6.5 7-6.5s7 2.5 7 6.5v1H9v-1z"
        />
      </svg>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M7 24 L25 8"
        />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="currentColor"
          fontFamily="system-ui, sans-serif"
        >
          $
        </text>
      </svg>
    </span>
  );
}
