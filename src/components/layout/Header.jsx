import { useState } from 'react'
import { useSectionSpy } from '../../hooks/useSectionSpy'
import { NAV_LINKS } from '../../constants/nav'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeHref = useSectionSpy()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="top">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Asmita Bidve, back to top" onClick={closeMenu}>
          AB<span>.</span>
        </a>
        <nav className={`nav${menuOpen ? ' open' : ''}`} id="nav" aria-label="Sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? 'true' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-expanded={menuOpen}
          aria-controls="nav"
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
