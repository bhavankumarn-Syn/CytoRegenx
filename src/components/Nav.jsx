import { useState, useEffect } from 'react'
import HelixLogo from './HelixLogo.jsx'
import logo from '../images/cyto_logo.png'

const NAV_LINKS = [
  { href: '#specialties', label: 'What We Do' },
  { href: '#conditions', label: 'Conditions' },
  { href: '#lab', label: 'Our Lab' },
  { href: '#clinical', label: 'Clinical Applications' },
  { href: '#compare', label: 'PL vs PRP' },
  { href: '#invest', label: 'Investors' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Close on Escape, and when the viewport grows back to desktop
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onResize() {
      if (window.innerWidth > 980) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <nav className="main">
      <div className="nav-inner">
        <a href="#" className="logo" aria-label="CytoRegenX home">
          {/* <HelixLogo variant="nav" />
          <span>
            Cyto<em>R</em>egen<em>X</em>
          </span> */}
          <img src={logo} style={{maxWidth : '240px'}} />
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="cx-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`} id="cx-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
