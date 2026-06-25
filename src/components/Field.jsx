// SVG field — viewBox "0 0 300 440"
// Attack direction: top (rival goal) / Defense: bottom (own goal)

const ARROW_COLORS = ['22c55e', 'ef4444', 'eab308', '3b82f6']

export default function Field({ children }) {
  return (
    <svg
      viewBox="0 0 300 440"
      className="field-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {ARROW_COLORS.map(hex => (
          <marker
            key={hex}
            id={`arrow-${hex}`}
            markerWidth="5"
            markerHeight="4"
            refX="4.5"
            refY="2"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M 0 0 L 5 2 L 0 4 Z" fill={`#${hex}`} />
          </marker>
        ))}
      </defs>

      {/* Background */}
      <rect width="300" height="440" fill="#0d1117" />

      {/* Grass stripes */}
      {Array.from({ length: 9 }, (_, i) => (
        <rect
          key={i}
          x="15" y={15 + i * 45.6}
          width="270" height="45.6"
          fill={i % 2 === 0 ? '#16381a' : '#194020'}
        />
      ))}

      {/* Field border */}
      <rect x="15" y="15" width="270" height="410" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

      {/* Center line */}
      <line x1="15" y1="220" x2="285" y2="220" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />

      {/* Center circle */}
      <circle cx="150" cy="220" r="32" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
      <circle cx="150" cy="220" r="2"  fill="rgba(255,255,255,0.6)" />

      {/* ── Own area (bottom) ─────────────────────────────── */}
      {/* Penalty box */}
      <rect x="65" y="355" width="170" height="70" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      {/* Goal area */}
      <rect x="108" y="400" width="84" height="25" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      {/* Penalty spot */}
      <circle cx="150" cy="375" r="1.5" fill="rgba(255,255,255,0.55)" />
      {/* Goal */}
      <rect x="114" y="425" width="72" height="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

      {/* ── Rival area (top) ──────────────────────────────── */}
      <rect x="65" y="15"  width="170" height="70" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      <rect x="108" y="15" width="84"  height="25" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      <circle cx="150" cy="65" r="1.5" fill="rgba(255,255,255,0.55)" />
      <rect x="114" y="5"  width="72"  height="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

      {/* Children: dots + arrows */}
      {children}
    </svg>
  )
}
