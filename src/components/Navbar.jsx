import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Rocket, Phone, Briefcase, Info, Home } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/services', label: 'Services', icon: Rocket },
  { to: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Phone },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center shadow-lg shadow-blue-500/20">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">BlueWeb Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive ? 'text-white bg-white/10' : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive ? 'text-white bg-white/10' : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}