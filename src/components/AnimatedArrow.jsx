// Draws an SVG path with a stroke-dashoffset drawing animation.
// The `animKey` prop must change to restart the animation.
export default function AnimatedArrow({ d, color, delay = 0 }) {
  const markerId = `arrow-${color.replace('#', '')}`

  return (
    <path
      d={d}
      stroke={color}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd={`url(#${markerId})`}
      style={{
        strokeDasharray: 800,
        strokeDashoffset: 800,
        animation: `drawArrow 0.75s cubic-bezier(0.4,0,0.2,1) ${delay}s forwards`,
      }}
    />
  )
}
