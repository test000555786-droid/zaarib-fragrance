interface Props {
  colors: [string, string];
  height?: number;
  glow?: boolean;
  name?: string;
}

export default function PerfumeBottle({ colors, height = 120, glow = false, name }: Props) {
  const [c1, c2] = colors;
  const w = Math.round(height * 0.55);

  return (
    <div className="relative inline-flex flex-col items-center">
      <svg width={w} height={height} viewBox="0 0 60 110" fill="none" aria-hidden>
        <rect x="27" y="1" width="6" height="5" rx="1.5" fill={c2} opacity="0.65" />
        <rect x="22" y="5" width="16" height="9" rx="2" fill={c1} opacity="0.9" />
        <rect x="22" y="5" width="16" height="3" rx="2" fill={c2} opacity="0.4" />
        <rect x="23.5" y="13" width="13" height="9" rx="1.5" fill={c2} opacity="0.7" />
        <rect x="15" y="21" width="30" height="4" rx="1" fill={c1} opacity="0.6" />
        <path d="M14 28 Q12 36 12 54 L12 82 Q12 95 30 95 Q48 95 48 82 L48 54 Q48 36 46 28 Z" fill={c1} opacity="0.8" />
        <path d="M14 28 Q12 36 12 54 L12 80 Q12 93 30 93 Q48 93 48 80 L48 54 Q48 36 46 28 Z" fill={c2} opacity="0.3" />
        <path d="M18 36 Q17 50 17 64 L17 80 Q17 88 22 91" stroke="rgba(255,255,255,0.14)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <rect x="17" y="46" width="26" height="28" rx="2" fill="rgba(255,255,255,0.055)" />
        <text x="30" y="62" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.2" fontFamily="Georgia,serif" letterSpacing="1.5">ZAARIB</text>
        <line x1="19" y1="67" x2="41" y2="67" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" />
        <text x="30" y="72" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="3.2" fontFamily="Arial" letterSpacing="0.5">FRAGRANCES</text>
        <ellipse cx="30" cy="95" rx="13" ry="2.5" fill="rgba(255,255,255,0.05)" />
      </svg>
      {glow && (
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
          style={{ width: w * 0.85, height: 16, background: `rgba(${hexRgb(c1)},0.22)`, filter: "blur(14px)" }}
        />
      )}
    </div>
  );
}

function hexRgb(hex: string) {
  const c = hex.replace("#", "");
  return [parseInt(c.slice(0,2),16), parseInt(c.slice(2,4),16), parseInt(c.slice(4,6),16)].join(",");
}
