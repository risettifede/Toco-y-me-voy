import { useNavigate } from 'react-router-dom'
import Field from '../components/Field'
import { PLAYERS_LIST, LINE_COLORS } from '../data/players'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="page home-page">
      <header className="home-header">
        <span className="home-badge">⚽</span>
        <h1 className="home-title">Holding 7</h1>
        <p className="home-sub">Pizarrón táctico</p>
      </header>

      <div className="field-wrapper">
        <Field>
          {PLAYERS_LIST.map(player => {
            const { x, y } = player.position
            const color = LINE_COLORS[player.line]
            const r = player.starter ? 10 : 8

            return (
              <g
                key={player.id}
                onClick={() => navigate(`/jugador/${player.id}`)}
                style={{ cursor: 'pointer' }}
                className="home-dot"
              >
                {/* Hit area */}
                <circle cx={x} cy={y} r={r + 8} fill="transparent" />

                {/* Outer ring */}
                <circle
                  cx={x} cy={y} r={r + 2}
                  fill="none"
                  stroke={color}
                  strokeWidth="1"
                  opacity={player.starter ? 0.5 : 0.3}
                />

                {/* Dot */}
                <circle
                  cx={x} cy={y} r={r}
                  fill={color}
                  opacity={player.starter ? 0.92 : 0.6}
                />

                {/* Jersey number area — inner white dot */}
                <circle cx={x} cy={y} r={r * 0.38} fill="rgba(255,255,255,0.55)" />

                {/* Name label — stroke trick for readable text on grass */}
                <text
                  x={x}
                  y={y - r - 5}
                  textAnchor="middle"
                  fontFamily="Rajdhani, sans-serif"
                  fontWeight="700"
                  fontSize={player.starter ? '10' : '9'}
                  fill="white"
                  stroke="#0d1117"
                  strokeWidth="3"
                  paintOrder="stroke"
                >
                  {player.name}
                </text>
              </g>
            )
          })}
        </Field>
      </div>

      <p className="home-hint">Tocá tu nombre para ver las jugadas</p>

      <div className="legend">
        {[
          { label: 'Arquero',       color: '#eab308' },
          { label: 'Defensores',    color: '#60a5fa' },
          { label: 'Mediocampistas', color: '#fb923c' },
          { label: 'Delanteros',    color: '#f87171' },
        ].map(({ label, color }) => (
          <div key={label} className="legend-item">
            <span className="legend-dot" style={{ background: color }} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
