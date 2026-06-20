import { useState } from 'react'
import { ERAS, EVENTS, FIGURES, COUNTRIES, THREADS, START_YEAR, END_YEAR } from './data'
import './App.css'

const YEAR_SPAN = END_YEAR - START_YEAR

// Notable conflicts shown as duration bands on the timeline
const CONFLICTS = [
  { id: 'c1',  name: 'Korean War',           years: [1950, 1953] },
  { id: 'c2',  name: 'Vietnam War',          years: [1955, 1975] },
  { id: 'c3',  name: 'Six-Day War',          years: [1967, 1967.2] },
  { id: 'c4',  name: 'Yom Kippur War',       years: [1973, 1973.1] },
  { id: 'c5',  name: 'Soviet-Afghan War',    years: [1979, 1989] },
  { id: 'c6',  name: 'Falklands War',        years: [1982, 1982.3] },
  { id: 'c7',  name: 'Gulf War',             years: [1991, 1991.2] },
  { id: 'c8',  name: 'Yugoslav Wars',        years: [1991, 2001] },
  { id: 'c9',  name: 'Afghanistan War',      years: [2001, 2021] },
  { id: 'c10', name: 'Iraq War',             years: [2003, 2011] },
  { id: 'c11', name: 'Syrian Civil War',     years: [2011, 2026] },
  { id: 'c12', name: 'Ukraine War',          years: [2022, 2026] },
]

function yearToPercent(year) {
  return ((year - START_YEAR) / YEAR_SPAN) * 100
}

function eraForYear(year) {
  return ERAS.find(e => year >= e.years[0] && year < e.years[1]) || ERAS[ERAS.length - 1]
}

function figureOverlapsEra(fig, eraId) {
  const era = ERAS.find(e => e.id === eraId)
  return era && fig.years[0] < era.years[1] && fig.years[1] > era.years[0]
}

export default function App() {
  const [activeEra, setActiveEra] = useState(null)
  const [selected, setSelected]   = useState(null)
  const [activeThread, setActiveThread] = useState(null)
  const [tab, setTab] = useState('events')

  const highlightIds = activeThread
    ? new Set(THREADS.find(t => t.id === activeThread)?.events || [])
    : null

  const threadEvents = activeThread
    ? EVENTS.filter(e => THREADS.find(t => t.id === activeThread)?.events.includes(e.id))
    : []

  const visibleEvents = activeEra
    ? EVENTS.filter(e => e.era === activeEra)
    : EVENTS

  const visibleFigures = FIGURES.filter(f => {
    if (!activeEra) return true
    return figureOverlapsEra(f, activeEra)
  })

  function handleSelect(item) {
    setSelected(selected?.id === item.id ? null : item)
  }

  // Build per-country sorted leader lists
  const countryFigures = Object.fromEntries(
    COUNTRIES.map(c => [
      c.id,
      FIGURES
        .filter(f => f.country === c.id)
        .sort((a, b) => a.years[0] - b.years[0])
    ])
  )

  return (
    <div className="app">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <div className="header-text">
            <div className="header-eyebrow mono">1945 — PRESENT</div>
            <h1>World History Explorer</h1>
            <p className="header-sub">Trade, conflict &amp; the forces that shaped the modern world</p>
          </div>
          <div className="era-pills">
            <button
              className={`era-pill ${!activeEra ? 'active' : ''}`}
              onClick={() => { setActiveEra(null); setSelected(null) }}
            >All Eras</button>
            {ERAS.map(era => (
              <button
                key={era.id}
                className={`era-pill ${activeEra === era.id ? 'active' : ''}`}
                style={activeEra === era.id ? { borderColor: era.color, color: era.color } : {}}
                onClick={() => { setActiveEra(era.id === activeEra ? null : era.id); setSelected(null) }}
              >
                <span className="era-pill-dot" style={{ background: era.color }} />
                {era.label}
                <span className="era-pill-years mono">{era.years[0]}–{era.years[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="timeline-scroll">
          <div className="timeline-container">

            {/* Era background bands */}
            <div className="tl-row">
              <div className="tl-label" />
              <div className="tl-track era-bands-track">
                {ERAS.map(era => (
                  <div
                    key={era.id}
                    className={`era-band ${activeEra === era.id ? 'active' : ''} ${activeEra && activeEra !== era.id ? 'dimmed' : ''}`}
                    style={{
                      left: `${yearToPercent(era.years[0])}%`,
                      width: `${yearToPercent(era.years[1]) - yearToPercent(era.years[0])}%`,
                      borderTopColor: era.color,
                    }}
                    onClick={() => { setActiveEra(era.id === activeEra ? null : era.id); setSelected(null) }}
                  >
                    <span className="era-band-label" style={{ color: era.color }}>{era.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Year axis */}
            <div className="tl-row">
              <div className="tl-label" />
              <div className="tl-track year-axis-track">
                {Array.from({ length: Math.ceil(YEAR_SPAN / 5) + 1 }, (_, i) => START_YEAR + i * 5).map(yr => (
                  <div key={yr} className="year-tick" style={{ left: `${yearToPercent(yr)}%` }}>
                    <div className="tick-line" />
                    <div className="tick-label mono">{yr}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Country leadership rows */}
            {COUNTRIES.map(country => {
              const leaders = countryFigures[country.id]
              return (
                <div key={country.id} className="tl-row country-tl-row">
                  <div className="tl-label country-label" style={{ color: country.colors[0] }}>
                    {country.label}
                  </div>
                  <div className="tl-track country-track">
                    {leaders.map((fig, i) => {
                      const left  = yearToPercent(fig.years[0])
                      const right = yearToPercent(fig.years[1])
                      const width = Math.max(right - left, 0.8)
                      const isSelected = selected?.id === fig.id
                      const dimmed = activeEra && !figureOverlapsEra(fig, activeEra)
                      return (
                        <button
                          key={fig.id}
                          className={`leader-bar ${isSelected ? 'selected' : ''} ${dimmed ? 'dimmed' : ''}`}
                          style={{
                            left: `${left}%`,
                            width: `calc(${width}% - 1px)`,
                            background: country.colors[i % 2],
                          }}
                          onClick={() => handleSelect({ ...fig, type: 'figure' })}
                          title={`${fig.name} · ${fig.years[0]}–${fig.years[1]}`}
                        >
                          <span className="leader-bar-name">{fig.short || fig.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {/* Conflicts row */}
            <div className="tl-row">
              <div className="tl-label track-section-label mono">CONFLICTS</div>
              <div className="tl-track conflicts-track">
                {CONFLICTS.map((conflict, i) => {
                  const left  = yearToPercent(conflict.years[0])
                  const width = Math.max(yearToPercent(conflict.years[1]) - left, 0.5)
                  const row   = i % 3
                  return (
                    <div
                      key={conflict.id}
                      className="conflict-bar"
                      style={{
                        left: `${left}%`,
                        width: `calc(${width}% - 1px)`,
                        top: `${row * 14}px`,
                      }}
                      title={`${conflict.name} (${Math.floor(conflict.years[0])}–${Math.floor(conflict.years[1])})`}
                    >
                      <span className="conflict-bar-name">{conflict.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Event dots row */}
            <div className="tl-row">
              <div className="tl-label track-section-label mono">EVENTS</div>
              <div className="tl-track dots-track">
                {EVENTS.map(ev => {
                  const dimmed = activeEra && ev.era !== activeEra
                  const threadDim = highlightIds && !highlightIds.has(ev.id)
                  const isSelected = selected?.id === ev.id
                  const threadHighlight = highlightIds && highlightIds.has(ev.id)
                  return (
                    <button
                      key={ev.id}
                      className={`event-dot ${ev.type} ${isSelected ? 'selected' : ''} ${dimmed ? 'dimmed' : ''} ${threadDim ? 'thread-dim' : ''} ${threadHighlight ? 'thread-highlight' : ''}`}
                      style={{ left: `${yearToPercent(ev.year)}%` }}
                      onClick={() => handleSelect({ ...ev, type: 'event' })}
                      title={`${ev.year}: ${ev.title}`}
                    >
                      <span className="dot-year mono">{ev.year}</span>
                      <span className="dot-label">{ev.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="tl-row timeline-legend-row">
              <div className="tl-label" />
              <div className="timeline-legend">
                <div className="legend-item"><span className="legend-dot trade" />Trade / Economics</div>
                <div className="legend-item"><span className="legend-dot conflict" />Conflict Event</div>
                <div className="legend-item"><span className="legend-conflict-bar" />Active Conflict</div>
                <div className="legend-item"><span className="legend-leader-bar" />Leader Tenure</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAIL PANEL */}
      {selected && (
        <section className="detail-panel">
          <div className="detail-inner">
            <button className="detail-close" onClick={() => setSelected(null)}>✕ Close</button>
            {selected.type === 'event' ? (
              <>
                <div className="detail-meta">
                  <span className={`detail-type-badge ${selected.type}`}>
                    {selected.type === 'conflict' ? 'Conflict' : 'Trade & Economics'}
                  </span>
                  <span className="detail-year mono">{selected.year}</span>
                  <span className="detail-era-tag" style={{ color: eraForYear(selected.year)?.color }}>
                    {eraForYear(selected.year)?.label}
                  </span>
                </div>
                <h2 className="detail-title">{selected.title}</h2>
                <p className="detail-body">{selected.detail}</p>
              </>
            ) : (
              <>
                <div className="detail-meta">
                  <span className="detail-type-badge figure-badge">
                    {COUNTRIES.find(c => c.id === selected.country)?.label || 'Key Figure'}
                  </span>
                  <span className="detail-year mono">{selected.years[0]}–{selected.years[1]}</span>
                  <span className="detail-era-tag" style={{ color: eraForYear((selected.years[0] + selected.years[1]) / 2)?.color }}>
                    {eraForYear((selected.years[0] + selected.years[1]) / 2)?.label}
                  </span>
                </div>
                <h2 className="detail-title">{selected.name}</h2>
                <div className="detail-role">{selected.role}</div>
                <p className="detail-body">{selected.detail}</p>
              </>
            )}
          </div>
        </section>
      )}

      {/* LONG THREADS */}
      <section className="threads-section">
        <div className="threads-inner">
          <h2 className="section-title">
            Long Threads
            <span className="section-sub"> — themes that run across eras</span>
          </h2>
          <p className="section-desc">Click a thread to highlight its events on the timeline</p>
          <div className="thread-grid">
            {THREADS.map(thread => (
              <button
                key={thread.id}
                className={`thread-card ${activeThread === thread.id ? 'active' : ''}`}
                style={activeThread === thread.id ? { borderColor: thread.color, background: `${thread.color}18` } : {}}
                onClick={() => setActiveThread(activeThread === thread.id ? null : thread.id)}
              >
                <div className="thread-dot" style={{ background: thread.color }} />
                <div className="thread-content">
                  <div className="thread-title" style={activeThread === thread.id ? { color: thread.color } : {}}>
                    {thread.title}
                  </div>
                  <div className="thread-summary">{thread.summary}</div>
                  {activeThread === thread.id && (
                    <div className="thread-events-list">
                      {threadEvents.map(ev => (
                        <button
                          key={ev.id}
                          className="thread-event-chip"
                          onClick={e => { e.stopPropagation(); handleSelect({ ...ev, type: 'event' }) }}
                        >
                          <span className={`chip-dot ${ev.type}`} />
                          <span className="chip-year mono">{ev.year}</span>
                          {ev.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT & FIGURE LISTS */}
      <section className="lists-section">
        <div className="lists-inner">
          <div className="list-tabs">
            <button className={`list-tab ${tab === 'events' ? 'active' : ''}`} onClick={() => setTab('events')}>
              Events ({visibleEvents.length})
            </button>
            <button className={`list-tab ${tab === 'figures' ? 'active' : ''}`} onClick={() => setTab('figures')}>
              Leaders ({visibleFigures.length})
            </button>
          </div>

          {tab === 'events' && (
            <div className="event-list">
              {visibleEvents.map(ev => (
                <button
                  key={ev.id}
                  className={`list-item ${selected?.id === ev.id ? 'selected' : ''}`}
                  onClick={() => handleSelect({ ...ev, type: 'event' })}
                >
                  <div className="list-item-left">
                    <span className={`list-dot ${ev.type}`} />
                    <span className="list-year mono">{ev.year}</span>
                  </div>
                  <div className="list-item-body">
                    <div className="list-item-title">{ev.title}</div>
                    <div className="list-item-preview">{ev.detail.slice(0, 140)}…</div>
                  </div>
                  <div className="list-item-era" style={{ color: ERAS.find(e => e.id === ev.era)?.color }}>
                    {ERAS.find(e => e.id === ev.era)?.label}
                  </div>
                </button>
              ))}
            </div>
          )}

          {tab === 'figures' && (
            <div className="figure-list">
              {visibleFigures.map(fig => {
                const country = COUNTRIES.find(c => c.id === fig.country)
                return (
                  <button
                    key={fig.id}
                    className={`list-item ${selected?.id === fig.id ? 'selected' : ''}`}
                    onClick={() => handleSelect({ ...fig, type: 'figure' })}
                  >
                    <div className="list-item-left">
                      <span className="list-bar" style={{ background: country?.colors[0] || '#4a6fa5' }} />
                      <span className="list-year mono">{fig.years[0]}–{fig.years[1]}</span>
                    </div>
                    <div className="list-item-body">
                      <div className="list-item-title">{fig.name}</div>
                      <div className="list-item-role">{fig.role}</div>
                      <div className="list-item-preview">{fig.detail.slice(0, 120)}…</div>
                    </div>
                    <div className="list-item-era" style={{ color: country?.colors[0] || '#4a6fa5' }}>
                      {country?.label || ''}
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>A post-WWII world history curriculum — trade, conflict &amp; geopolitics</p>
          <p className="footer-meta mono">sdono043.github.io/history-explorer</p>
        </div>
      </footer>
    </div>
  )
}
