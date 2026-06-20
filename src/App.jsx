import { useState, useRef } from 'react'
import { ERAS, EVENTS, FIGURES, THREADS, START_YEAR, END_YEAR } from './data'
import './App.css'

const YEAR_SPAN = END_YEAR - START_YEAR

function yearToPercent(year) {
  return ((year - START_YEAR) / YEAR_SPAN) * 100
}

function eraForYear(year) {
  return ERAS.find(e => year >= e.years[0] && year < e.years[1]) || ERAS[ERAS.length - 1]
}

export default function App() {
  const [activeEra, setActiveEra] = useState(null)
  const [selected, setSelected] = useState(null)
  const [activeThread, setActiveThread] = useState(null)
  const [tab, setTab] = useState('events')

  const visibleEvents = activeEra
    ? EVENTS.filter(e => e.era === activeEra)
    : EVENTS

  const visibleFigures = activeEra
    ? FIGURES.filter(f => f.era === activeEra)
    : FIGURES

  const threadEvents = activeThread
    ? EVENTS.filter(e => THREADS.find(t => t.id === activeThread)?.events.includes(e.id))
    : []

  const highlightIds = activeThread
    ? new Set(THREADS.find(t => t.id === activeThread)?.events || [])
    : null

  function handleSelect(item) {
    setSelected(selected?.id === item.id ? null : item)
  }

  return (
    <div className="app">
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

            {/* Era bands */}
            <div className="era-bands">
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
                  title={era.label}
                >
                  <span className="era-band-label" style={{ color: era.color }}>{era.label}</span>
                </div>
              ))}
            </div>

            {/* Year axis */}
            <div className="year-axis">
              {Array.from({ length: Math.ceil(YEAR_SPAN / 5) + 1 }, (_, i) => START_YEAR + i * 5).map(yr => (
                <div
                  key={yr}
                  className="year-tick"
                  style={{ left: `${yearToPercent(yr)}%` }}
                >
                  <div className="tick-line" />
                  <div className="tick-label mono">{yr}</div>
                </div>
              ))}
            </div>

            {/* Figure bars */}
            <div className="figure-bars-section">
              <div className="track-label mono">LEADERS</div>
              <div className="bars-canvas">
                {FIGURES.map((fig, i) => {
                  const left = yearToPercent(fig.years[0])
                  const width = yearToPercent(fig.years[1]) - left
                  const isSelected = selected?.id === fig.id
                  const dimmed = activeEra && fig.era !== activeEra
                  const threadDim = highlightIds && !highlightIds.has(fig.id)
                  return (
                    <button
                      key={fig.id}
                      className={`fig-bar ${isSelected ? 'selected' : ''} ${dimmed ? 'dimmed' : ''} ${threadDim ? 'thread-dim' : ''}`}
                      style={{
                        left: `${left}%`,
                        width: `${Math.max(width, 2)}%`,
                        background: fig.color,
                        top: `${(i % 5) * 24}px`,
                      }}
                      onClick={() => handleSelect({ ...fig, type: 'figure' })}
                      title={`${fig.name} (${fig.years[0]}–${fig.years[1]})`}
                    >
                      <span className="fig-bar-name">{fig.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Event dots */}
            <div className="event-dots-section">
              <div className="track-label mono">EVENTS</div>
              <div className="dots-canvas">
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
            <div className="timeline-legend">
              <div className="legend-item"><span className="legend-dot trade" />Trade / Economics</div>
              <div className="legend-item"><span className="legend-dot conflict" />Conflict / Power</div>
              <div className="legend-item"><span className="legend-bar" />Leader Tenure</div>
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
              <div className="detail-event">
                <div className="detail-meta">
                  <span className={`detail-type-badge ${selected.type_tag || selected.type}`}>
                    {selected.type === 'conflict' ? 'Conflict' : 'Trade & Economics'}
                  </span>
                  <span className="detail-year mono">{selected.year}</span>
                  <span className="detail-era-tag" style={{ color: eraForYear(selected.year)?.color }}>
                    {eraForYear(selected.year)?.label}
                  </span>
                </div>
                <h2 className="detail-title">{selected.title}</h2>
                <p className="detail-body">{selected.detail}</p>
              </div>
            ) : (
              <div className="detail-figure">
                <div className="detail-meta">
                  <span className="detail-type-badge figure-badge">Leader</span>
                  <span className="detail-year mono">{selected.years[0]}–{selected.years[1]}</span>
                  <span className="detail-era-tag" style={{ color: ERAS.find(e => e.id === selected.era)?.color }}>
                    {ERAS.find(e => e.id === selected.era)?.label}
                  </span>
                </div>
                <h2 className="detail-title">{selected.name}</h2>
                <div className="detail-role">{selected.role}</div>
                <p className="detail-body">{selected.detail}</p>
              </div>
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
          <p className="section-desc">Click a thread to highlight its events on the timeline above</p>
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
                  className={`list-item event-item ${selected?.id === ev.id ? 'selected' : ''}`}
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
              {visibleFigures.map(fig => (
                <button
                  key={fig.id}
                  className={`list-item figure-item ${selected?.id === fig.id ? 'selected' : ''}`}
                  onClick={() => handleSelect({ ...fig, type: 'figure' })}
                >
                  <div className="list-item-left">
                    <span className="list-bar" style={{ background: fig.color }} />
                    <span className="list-year mono">{fig.years[0]}–{fig.years[1]}</span>
                  </div>
                  <div className="list-item-body">
                    <div className="list-item-title">{fig.name}</div>
                    <div className="list-item-role">{fig.role}</div>
                    <div className="list-item-preview">{fig.detail.slice(0, 120)}…</div>
                  </div>
                  <div className="list-item-era" style={{ color: ERAS.find(e => e.id === fig.era)?.color }}>
                    {ERAS.find(e => e.id === fig.era)?.label}
                  </div>
                </button>
              ))}
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
