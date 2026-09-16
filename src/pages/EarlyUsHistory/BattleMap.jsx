import { useEffect, useRef, useState } from 'react'
import { REVOLUTIONARY_BATTLES } from './data'
import { STATE_OUTLINES } from './usStatesOutline'
import './BattleMap.css'

const LON_MIN = -83, LON_MAX = -68
const LAT_MIN = 31, LAT_MAX = 45
const LON_SPAN = LON_MAX - LON_MIN
const LAT_SPAN = LAT_MAX - LAT_MIN
const PLAY_INTERVAL_MS = 2400

// Projects lat/lon into the map's SVG coordinate space (viewBox 0 0 LON_SPAN LAT_SPAN) —
// the same projection used to pre-compute STATE_OUTLINES' paths and centroids.
function project(lat, lon) {
  return { x: lon - LON_MIN, y: LAT_MAX - lat }
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}
// A battle's plotted point, nudged by its optional mapOffset to separate markers
// that would otherwise sit on top of each other (e.g. Lexington & Bunker Hill).
function battlePoint(battle) {
  const { x, y } = project(battle.lat, battle.lon)
  const offset = battle.mapOffset || { dx: 0, dy: 0 }
  return { x: x + offset.dx, y: y + offset.dy }
}

// States where one of the mapped battles took place, for a slightly brighter label
const BATTLE_STATES = new Set(['MA', 'NY', 'NJ', 'VA', 'NC', 'SC', 'GA'])

export default function BattleMap() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timerRef = useRef(null)
  const lastIndex = REVOLUTIONARY_BATTLES.length - 1
  const battle = REVOLUTIONARY_BATTLES[index]

  useEffect(() => {
    if (!playing) return undefined
    timerRef.current = setTimeout(() => {
      setIndex(i => {
        if (i >= lastIndex) {
          setPlaying(false)
          return i
        }
        return i + 1
      })
    }, PLAY_INTERVAL_MS)
    return () => clearTimeout(timerRef.current)
  }, [playing, index, lastIndex])

  function goTo(i) {
    setPlaying(false)
    setIndex(Math.max(0, Math.min(lastIndex, i)))
  }

  function togglePlay() {
    if (!playing && index === lastIndex) setIndex(0)
    setPlaying(p => !p)
  }

  const visited = REVOLUTIONARY_BATTLES.slice(0, index + 1)
  const pathPoints = visited
    .map(b => { const { x, y } = battlePoint(b); return `${x},${y}` })
    .join(' ')

  const outcomeClass = battle.outcome.includes('American')
    ? 'win'
    : battle.outcome.includes('British')
      ? 'loss'
      : 'draw'

  return (
    <div className="battle-map">
      <div className="battle-map-controls">
        <button className="map-btn map-btn-play" onClick={togglePlay}>
          {playing ? '⏸ Pause' : index === lastIndex ? '↺ Replay Sequence' : '▶ Play Sequence'}
        </button>
        <button className="map-btn" onClick={() => goTo(index - 1)} disabled={index === 0}>‹ Prev</button>
        <button className="map-btn" onClick={() => goTo(index + 1)} disabled={index === lastIndex}>Next ›</button>
        <div className="map-progress mono">{index + 1} / {REVOLUTIONARY_BATTLES.length}</div>
      </div>

      <div className="battle-map-layout">
        <div className="battle-map-canvas">
          <svg viewBox={`0 0 ${LON_SPAN} ${LAT_SPAN}`} className="battle-map-svg">
            {STATE_OUTLINES.map(s => (
              <path key={s.name} d={s.d} className="state-outline" />
            ))}
            {STATE_OUTLINES.map(s => {
              // Keep labels clear of the canvas edges so they never get clipped on narrow screens
              const x = clamp(s.cx, 0.9, LON_SPAN - 0.9)
              const y = clamp(s.cy, 0.6, LAT_SPAN - 0.4)
              return (
                <text
                  key={s.name}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  className={`state-label mono ${BATTLE_STATES.has(s.abbrev) ? 'battle-state' : ''}`}
                >
                  {s.abbrev}
                </text>
              )
            })}

            {visited.length > 1 && <polyline points={pathPoints} className="battle-path" />}

            {REVOLUTIONARY_BATTLES.map((b, i) => {
              const { x, y } = battlePoint(b)
              const state = i < index ? 'visited' : i === index ? 'current' : 'upcoming'
              return (
                <g
                  key={b.id}
                  className={`battle-marker ${state}`}
                  transform={`translate(${x} ${y})`}
                  onClick={() => goTo(i)}
                >
                  <circle r={i === index ? 0.34 : 0.22} className="battle-marker-dot" />
                  <text y={-0.4} textAnchor="middle" className="battle-marker-num">{i + 1}</text>
                </g>
              )
            })}
          </svg>
        </div>

        <div className="battle-detail">
          <div className="battle-detail-head">
            <span className="battle-detail-num mono">Battle {index + 1} of {REVOLUTIONARY_BATTLES.length}</span>
            <span className="battle-detail-date mono">{battle.date}</span>
          </div>
          <h3 className="battle-detail-name">{battle.name}</h3>
          <div className="battle-detail-location">
            {battle.location} <span className={`battle-outcome ${outcomeClass}`}>{battle.outcome}</span>
          </div>
          <p className="battle-detail-summary">{battle.summary}</p>
        </div>
      </div>

      <div className="battle-scrubber">
        {REVOLUTIONARY_BATTLES.map((b, i) => (
          <button
            key={b.id}
            className={`battle-chip ${i === index ? 'active' : ''} ${i < index ? 'past' : ''}`}
            onClick={() => goTo(i)}
          >
            <span className="chip-num mono">{i + 1}</span>
            {b.name}
          </button>
        ))}
      </div>
    </div>
  )
}
