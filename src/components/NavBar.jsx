import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NAV_LINKS = [
  { to: '/', label: 'World History', sub: '1945 – Present' },
  { to: '/early-us-history', label: 'Early United States History', sub: '1763 – 1865' },
]

export default function NavBar() {
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <div className="site-nav-brand mono">HISTORY EXPLORER</div>
        <div className="site-nav-links">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `site-nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
              <span className="site-nav-link-years mono">{link.sub}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
