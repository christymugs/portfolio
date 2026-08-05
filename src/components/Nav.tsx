import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Work' },
]

const RESUME_URL =
  'https://docs.google.com/document/d/158prlZIDxY_40MHvJdaKA_QiJsSAwAsXnFSJejgcPh0/edit?usp=sharing'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 font-display font-semibold text-ink tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--color-accent)]" />
          Christy Mugomba
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border-strong px-4 py-1.5 text-sm text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base ${isActive ? 'text-accent' : 'text-ink-muted'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-base text-ink"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </nav>
      )}
    </header>
  )
}
