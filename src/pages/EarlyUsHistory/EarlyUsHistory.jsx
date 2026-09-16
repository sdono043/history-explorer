import { useState } from 'react'
import { ERAS, EVENTS, PRESIDENTS, WARS, START_YEAR, END_YEAR, partyFor } from './data'
import BattleMap from './BattleMap'
import './EarlyUsHistory.css'

const YEAR_SPAN = END_YEAR - START_YEAR

function yearToPercent(year) {
  return ((year - START_YEAR) / YEAR_SPAN) * 100
}

function eraForYear(year) {
  return ERAS.find(e => year >= e.years[0] && year < e.years[1]) || ERAS[ERAS.length - 1]
}

const EVENT_TYPE_LABEL = {
  protest: 'Unrest & Protest',
  battle: 'Battle',
  political: 'Political & Founding',
}

export default function EarlyUsHistory() {
  const [activeEra, setActiveEra] = useState(null)
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('events')

  const visibleEvents = activeEra ? EVENTS.filter(e => e.era === activeEra) : EVENTS
  const visiblePresidents = PRESIDENTS.filter(p => {
    if (!activeEra) return true
    const era = ERAS.find(e => e.id === activeEra)
    return era && p.years[0] < era.years[1] && p.years[1] > era.years[0]
  })

  function handleSelect(item) {
    setSelected(selected?.id === item.id ? null : item)
  }

  return (
    <div className="eus-app">
      {/* HEADER */}
      <header className="eus-site-header">
        <div className="eus-header-inner">
          <div className="eus-header-text">
            <div className="eus-header-eyebrow mono">1763 — 1865</div>
            <h1>Early United States History</h1>
            <p className="eus-header-sub">From colonial unrest through the Revolutionary War to Lincoln's presidency</p>
          </div>
          <div className="eus-era-pills">
            <button
              className={`eus-era-pill ${!activeEra ? 'active' : ''}`}
              onClick={() => { setActiveEra(null); setSelected(null) }}
            >All Eras</button>
            {ERAS.map(era => (
              <button
                key={era.id}
                className={`eus-era-pill ${activeEra === era.id ? 'active' : ''}`}
                style={activeEra === era.id ? { borderColor: era.color, color: era.color } : {}}
                onClick={() => { setActiveEra(era.id === activeEra ? null : era.id); setSelected(null) }}
              >
                <span className="eus-era-pill-dot" style={{ background: era.color }} />
                {era.label}
                <span className="eus-era-pill-years mono">{era.years[0]}–{era.years[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* TIMELINE */}
      <section className="eus-timeline-section">
        <div className="eus-timeline-scroll">
          <div className="eus-timeline-container">

            {/* Era background bands */}
            <div className="eus-tl-row">
              <div className="eus-tl-label" />
              <div className="eus-tl-track eus-era-bands-track">
                {ERAS.map(era => (
                  <div
                    key={era.id}
                    className={`eus-era-band ${activeEra === era.id ? 'active' : ''} ${activeEra && activeEra !== era.id ? 'dimmed' : ''}`}
                    style={{
                      left: `${yearToPercent(era.years[0])}%`,
                      width: `${yearToPercent(era.years[1]) - yearToPercent(era.years[0])}%`,
                      borderTopColor: era.color,
                    }}
                    onClick={() => { setActiveEra(era.id === activeEra ? null : era.id); setSelected(null) }}
                  >
                    <span className="eus-era-band-label" style={{ color: era.color }}>{era.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Year axis */}
            <div className="eus-tl-row">
              <div className="eus-tl-label" />
              <div className="eus-tl-track eus-year-axis-track">
                {Array.from({ length: Math.ceil(YEAR_SPAN / 10) + 1 }, (_, i) => START_YEAR + i * 10)
                  .filter(yr => yr <= END_YEAR)
                  .map(yr => (
                    <div key={yr} className="eus-year-tick" style={{ left: `${yearToPercent(yr)}%` }}>
                      <div className="eus-tick-line" />
                      <div className="eus-tick-label mono">{yr}</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Presidents row */}
            <div className="eus-tl-row eus-president-tl-row">
              <div className="eus-tl-label eus-track-section-label mono">PRESIDENTS</div>
              <div className="eus-tl-track eus-president-track">
                {PRESIDENTS.map((pres, i) => {
                  const left = yearToPercent(pres.years[0])
                  const right = yearToPercent(pres.years[1])
                  const duration = pres.years[1] - pres.years[0]
                  const width = Math.max(right - left, 0.9)
                  const party = partyFor(pres.party)
                  const isSelected = selected?.id === pres.id
                  const era = ERAS.find(e => e.id === activeEra)
                  const dimmed = activeEra && !(era && pres.years[0] < era.years[1] && pres.years[1] > era.years[0])
                  return (
                    <button
                      key={pres.id}
                      className={`eus-leader-bar ${isSelected ? 'selected' : ''} ${dimmed ? 'dimmed' : ''}`}
                      style={{
                        left: `${left}%`,
                        width: `calc(${width}% - 1px)`,
                        background: i % 2 === 0 ? party.color : `${party.color}cc`,
                        // Very short terms (e.g. W.H. Harrison's 31 days) get clamped up to the
                        // minimum width above and can end up spatially overlapping a neighboring
                        // bar that starts at the same year — keep short terms on top so they stay
                        // clickable instead of being fully covered by that neighbor.
                        zIndex: Math.max(1, Math.round(10 - duration)),
                      }}
                      onClick={() => handleSelect({ ...pres, kind: 'president' })}
                      title={`${pres.name} · ${pres.years[0]}–${pres.years[1]}`}
                    >
                      <span className="eus-leader-bar-name">{pres.short}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Wars row */}
            <div className="eus-tl-row">
              <div className="eus-tl-label eus-track-section-label mono">WARS</div>
              <div className="eus-tl-track eus-wars-track">
                {WARS.map((war, i) => {
                  const left = yearToPercent(war.years[0])
                  const width = Math.max(yearToPercent(war.years[1]) - left, 0.5)
                  const row = i % 2
                  return (
                    <div
                      key={war.id}
                      className="eus-war-bar"
                      style={{ left: `${left}%`, width: `calc(${width}% - 1px)`, top: `${row * 15}px` }}
                      title={`${war.name} (${war.years[0]}–${war.years[1]})`}
                    >
                      <span className="eus-war-bar-name">{war.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Event dots row */}
            <div className="eus-tl-row">
              <div className="eus-tl-label eus-track-section-label mono">EVENTS</div>
              <div className="eus-tl-track eus-dots-track">
                {EVENTS.map(ev => {
                  const dimmed = activeEra && ev.era !== activeEra
                  const isSelected = selected?.id === ev.id
                  return (
                    <button
                      key={ev.id}
                      className={`eus-event-dot ${ev.type} ${isSelected ? 'selected' : ''} ${dimmed ? 'dimmed' : ''}`}
                      style={{ left: `${yearToPercent(ev.year)}%` }}
                      onClick={() => handleSelect({ ...ev, kind: 'event' })}
                      title={`${ev.year}: ${ev.title}`}
                    >
                      <span className="eus-dot-year mono">{ev.year}</span>
                      <span className="eus-dot-label">{ev.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="eus-tl-row eus-timeline-legend-row">
              <div className="eus-tl-label" />
              <div className="eus-timeline-legend">
                <div className="eus-legend-item"><span className="eus-legend-dot protest" />Unrest / Protest</div>
                <div className="eus-legend-item"><span className="eus-legend-dot battle" />Battle</div>
                <div className="eus-legend-item"><span className="eus-legend-dot political" />Political / Founding</div>
                <div className="eus-legend-item"><span className="eus-legend-war-bar" />War</div>
                <div className="eus-legend-item"><span className="eus-legend-leader-bar" />Presidential Term</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAIL PANEL */}
      {selected && (
        <section className="eus-detail-panel">
          <div className="eus-detail-inner">
            <button className="eus-detail-close" onClick={() => setSelected(null)}>✕ Close</button>
            {selected.kind === 'event' ? (
              <>
                <div className="eus-detail-meta">
                  <span className={`eus-detail-type-badge ${selected.type}`}>{EVENT_TYPE_LABEL[selected.type]}</span>
                  <span className="eus-detail-year mono">{selected.year}</span>
                  <span className="eus-detail-era-tag" style={{ color: eraForYear(selected.year)?.color }}>
                    {eraForYear(selected.year)?.label}
                  </span>
                </div>
                <h2 className="eus-detail-title">{selected.title}</h2>
                <p className="eus-detail-body">{selected.detail}</p>
              </>
            ) : (
              <>
                <div className="eus-detail-meta">
                  <span className="eus-detail-type-badge president-badge" style={{ borderColor: partyFor(selected.party).color, color: partyFor(selected.party).color }}>
                    {partyFor(selected.party).label}
                  </span>
                  <span className="eus-detail-year mono">{selected.years[0]}–{selected.years[1]}</span>
                  <span className="eus-detail-era-tag" style={{ color: eraForYear(selected.years[0])?.color }}>
                    {eraForYear(selected.years[0])?.label}
                  </span>
                </div>
                <h2 className="eus-detail-title">#{selected.order} {selected.name}</h2>
                <div className="eus-detail-role">U.S. President</div>
                <p className="eus-detail-body">{selected.detail}</p>
              </>
            )}
          </div>
        </section>
      )}

      {/* BATTLE MAP */}
      <section className="eus-map-section">
        <div className="eus-map-inner">
          <h2 className="eus-section-title">
            The Revolutionary War, Battle by Battle
            <span className="eus-section-sub"> — 1775 – 1781</span>
          </h2>
          <p className="eus-section-desc">Step or play through the war's major battles in chronological order</p>
          <BattleMap />
        </div>
      </section>

      {/* EVENT & PRESIDENT LISTS */}
      <section className="eus-lists-section">
        <div className="eus-lists-inner">
          <div className="eus-list-tabs">
            <button className={`eus-list-tab ${tab === 'events' ? 'active' : ''}`} onClick={() => setTab('events')}>
              Events ({visibleEvents.length})
            </button>
            <button className={`eus-list-tab ${tab === 'presidents' ? 'active' : ''}`} onClick={() => setTab('presidents')}>
              Presidents ({visiblePresidents.length})
            </button>
          </div>

          {tab === 'events' && (
            <div className="eus-event-list">
              {visibleEvents.map(ev => (
                <button
                  key={ev.id}
                  className={`eus-list-item ${selected?.id === ev.id ? 'selected' : ''}`}
                  onClick={() => handleSelect({ ...ev, kind: 'event' })}
                >
                  <div className="eus-list-item-left">
                    <span className={`eus-list-dot ${ev.type}`} />
                    <span className="eus-list-year mono">{ev.year}</span>
                  </div>
                  <div className="eus-list-item-body">
                    <div className="eus-list-item-title">{ev.title}</div>
                    <div className="eus-list-item-preview">{ev.detail.slice(0, 140)}…</div>
                  </div>
                  <div className="eus-list-item-era" style={{ color: ERAS.find(e => e.id === ev.era)?.color }}>
                    {ERAS.find(e => e.id === ev.era)?.label}
                  </div>
                </button>
              ))}
            </div>
          )}

          {tab === 'presidents' && (
            <div className="eus-figure-list">
              {visiblePresidents.map(pres => {
                const party = partyFor(pres.party)
                return (
                  <button
                    key={pres.id}
                    className={`eus-list-item ${selected?.id === pres.id ? 'selected' : ''}`}
                    onClick={() => handleSelect({ ...pres, kind: 'president' })}
                  >
                    <div className="eus-list-item-left">
                      <span className="eus-list-bar" style={{ background: party.color }} />
                      <span className="eus-list-year mono">{pres.years[0]}–{pres.years[1]}</span>
                    </div>
                    <div className="eus-list-item-body">
                      <div className="eus-list-item-title">#{pres.order} {pres.name}</div>
                      <div className="eus-list-item-role">{party.label}</div>
                      <div className="eus-list-item-preview">{pres.detail.slice(0, 120)}…</div>
                    </div>
                    <div className="eus-list-item-era" style={{ color: party.color }}>{party.label}</div>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <footer className="eus-site-footer">
        <div className="eus-footer-inner">
          <p>From colonial unrest to the Civil War — the founding of the United States</p>
          <p className="eus-footer-meta mono">sdono043.github.io/history-explorer</p>
        </div>
      </footer>
    </div>
  )
}
