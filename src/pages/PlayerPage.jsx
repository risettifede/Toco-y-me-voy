import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Field from '../components/Field'
import AnimatedArrow from '../components/AnimatedArrow'
import { PLAYERS, PLAYERS_LIST, LINE_COLORS, SITUATIONS, SITUATION_COLORS } from '../data/players'

export default function PlayerPage() {
  const { nombre } = useParams()
  const navigate   = useNavigate()

  const [activeSit, setActiveSit] = useState(null)
  // Incrementing key forces React to remount the arrows group → restarts CSS animation
  const [arrowKey, setArrowKey]   = useState(0)

  const player = PLAYERS[nombre]

  if (!player) {
    return (
      <div className="page not-found">
        <p>Jugador no encontrado</p>
        <button className="back-btn" onClick={() => navigate('/')}>← Volver</button>
      </div>
    )
  }

  const handleSit = (id) => {
    setActiveSit(id)
    setArrowKey(k => k + 1)
  }

  const playerColor  = LINE_COLORS[player.line]
  const currentSit   = activeSit ? player.situations[activeSit] : null
  const sitColor     = activeSit ? SITUATION_COLORS[activeSit] : null

  // Show own position + all starters on the field
  const dotsToShow = PLAYERS_LIST.filter(p => p.starter || p.id === player.id)

  return (
    <div className="page player-page">
      {/* ── Header ─────────────────────────────────────── */}
      <header className="player-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Plantel</button>
        <div className="player-info">
          <h1 className="player-name-title">{player.name}</h1>
          <p className="player-role-label">{player.role}</p>
        </div>
        <span
          className="player-line-dot"
          style={{ background: playerColor }}
        />
      </header>

      {/* ── Situation buttons ───────────────────────────── */}
      <div className="sit-grid">
        {SITUATIONS.map(sit => {
          const isActive = activeSit === sit.id
          const c = SITUATION_COLORS[sit.id]
          return (
            <button
              key={sit.id}
              className={`sit-btn${isActive ? ' sit-btn--active' : ''}`}
              style={{
                '--sc': c,
                borderColor: isActive ? c : 'transparent',
              }}
              onClick={() => handleSit(sit.id)}
            >
              <span className="sit-emoji">{sit.emoji}</span>
              <span className="sit-label">{sit.label}</span>
            </button>
          )
        })}
      </div>

      {/* ── Field ──────────────────────────────────────── */}
      <div className="field-wrapper">
        <Field>
          {/* All player dots */}
          {dotsToShow.map(p => {
            const isMe = p.id === player.id
            const col  = LINE_COLORS[p.line]
            const r    = isMe ? 10 : 6

            return (
              <g key={p.id}>
                {/* Pulse ring for active player */}
                {isMe && (
                  <circle
                    cx={p.position.x}
                    cy={p.position.y}
                    r={r + 5}
                    fill={col}
                    opacity="0"
                    className="pulse-ring"
                  />
                )}

                <circle
                  cx={p.position.x}
                  cy={p.position.y}
                  r={r}
                  fill={col}
                  opacity={isMe ? 1 : 0.4}
                />

                {isMe && (
                  <>
                    <circle
                      cx={p.position.x}
                      cy={p.position.y}
                      r={r * 0.38}
                      fill="rgba(255,255,255,0.6)"
                    />
                    <text
                      x={p.position.x}
                      y={p.position.y - r - 5}
                      textAnchor="middle"
                      fontFamily="Rajdhani, sans-serif"
                      fontWeight="700"
                      fontSize="10"
                      fill="white"
                      stroke="#0d1117"
                      strokeWidth="3"
                      paintOrder="stroke"
                    >
                      {p.name}
                    </text>
                  </>
                )}
              </g>
            )
          })}

          {/* Animated arrows — remounted on key change */}
          {currentSit && (
            <g key={arrowKey}>
              {currentSit.arrows.map((arrow, i) => (
                <AnimatedArrow
                  key={i}
                  d={arrow.d}
                  color={arrow.color}
                  delay={i * 0.18}
                />
              ))}
            </g>
          )}
        </Field>
      </div>

      {/* ── Description ────────────────────────────────── */}
      {currentSit ? (
        <div
          className="sit-description"
          style={{ borderLeftColor: sitColor }}
        >
          <div className="sit-description-label" style={{ color: sitColor }}>
            {SITUATIONS.find(s => s.id === activeSit)?.emoji}{' '}
            {SITUATIONS.find(s => s.id === activeSit)?.label}
          </div>
          <p>{currentSit.description}</p>
        </div>
      ) : (
        <div className="sit-hint">
          Seleccioná una situación para ver tus instrucciones
        </div>
      )}
    </div>
  )
}
