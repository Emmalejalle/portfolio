import { fingerprintBits } from "@/lib/fingerprint";

type FingerprintProps = {
  seed: string;
  cells?: number;
  className?: string;
  strokeWidth?: number;
};

// Motif « 10 PRINT » : chaque case est une diagonale dans un sens ou dans l'autre selon l'empreinte.
export function Fingerprint({ seed, cells = 8, className = "", strokeWidth = 0.18 }: FingerprintProps) {
  const bits = fingerprintBits(seed, cells * cells);
  const d = bits
    .map((bit, i) => {
      const x = i % cells;
      const y = Math.floor(i / cells);
      return bit ? `M${x} ${y}L${x + 1} ${y + 1}` : `M${x + 1} ${y}L${x} ${y + 1}`;
    })
    .join("");

  return (
    <svg
      viewBox={`0 0 ${cells} ${cells}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <path d={d} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
