import { useEffect, useRef, useState } from 'react'
import { REVOLUTIONARY_BATTLES } from './data'
import './BattleMap.css'

const LON_MIN = -83, LON_MAX = -68
const LAT_MIN = 31, LAT_MAX = 45
const LON_SPAN = LON_MAX - LON_MIN
const LAT_SPAN = LAT_MAX - LAT_MIN
const PLAY_INTERVAL_MS = 2400

// Projects lat/lon into the map's SVG coordinate space (viewBox 0 0 LON_SPAN LAT_SPAN)
function project(lat, lon) {
  return { x: lon - LON_MIN, y: LAT_MAX - lat }
}
// Same projection as a percentage, for the HTML label overlay
function projectPct(lat, lon) {
  return { x: ((lon - LON_MIN) / LON_SPAN) * 100, y: ((LAT_MAX - lat) / LAT_SPAN) * 100 }
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

const REGION_LABELS = [
  { label: 'MASSACHUSETTS', lat: 42.5, lon: -71.9 },
  { label: 'NEW YORK', lat: 43.3, lon: -76.0 },
  { label: 'NEW JERSEY', lat: 39.9, lon: -74.9 },
  { label: 'VIRGINIA', lat: 37.7, lon: -78.9 },
  { label: 'THE CAROLINAS', lat: 34.7, lon: -81.3 },
  { label: 'GEORGIA', lat: 32.2, lon: -82.2 },
]

const GRID_LATS = [32, 34, 36, 38, 40, 42, 44]
const GRID_LONS = [-82, -80, -78, -76, -74, -72, -70]

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
            {GRID_LONS.map(lon => {
              const { x } = project(40, lon)
              return <line key={`lon-${lon}`} x1={x} y1={0} x2={x} y2={LAT_SPAN} className="grid-line" />
            })}
            {GRID_LATS.map(lat => {
              const { y } = project(lat, -75)
              return <line key={`lat-${lat}`} x1={0} y1={y} x2={LON_SPAN} y2={y} className="grid-line" />
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

          <div className="battle-map-labels">
            {REGION_LABELS.map(r => {
              const { x, y } = projectPct(r.lat, r.lon)
              // Keep labels clear of the canvas edges so they never get clipped on narrow screens
              const safeX = clamp(x, 12, 88)
              const safeY = clamp(y, 6, 94)
              return (
                <span key={r.label} className="region-label mono" style={{ left: `${safeX}%`, top: `${safeY}%` }}>
                  {r.label}
                </span>
              )
            })}
          </div>
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
