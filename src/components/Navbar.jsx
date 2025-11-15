import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center ring-2 ring-yellow-500/40">
              {/* Simple Steinbock (ibex) horn logo using SVG */}
              <svg viewBox="0 0 64 64" className="h-6 w-6 text-black" fill="currentColor" aria-hidden>
                <path d="M40 10c6 0 10 4 10 10 0 2-1 4-2 6 0 0 6 6 6 14 0 8-6 14-14 14-9 0-15-7-15-16 0-7 4-12 10-14-3 3-4 6-4 10 0 6 4 10 9 10s9-4 9-9c0-8-9-11-9-11 2-2 4-4 4-8 0-3-1-6-4-6-4 0-7 4-7 9H23c0-10 8-19 17-19z"/>
              </svg>
            </div>
            <span className="text-yellow-400 font-semibold tracking-wide uppercase">Restaurant Steinbock</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('home')} className="text-gray-200 hover:text-yellow-400 transition">Home</button>
            <button onClick={() => scrollTo('menu')} className="text-gray-200 hover:text-yellow-400 transition">Menü</button>
            <button onClick={() => scrollTo('about')} className="text-gray-200 hover:text-yellow-400 transition">Über uns</button>
            <button onClick={() => scrollTo('reservation')} className="text-gray-200 hover:text-yellow-400 transition">Reservation</button>
            <button onClick={() => scrollTo('location')} className="text-gray-200 hover:text-yellow-400 transition">Lage</button>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-yellow-400">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-yellow-500/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'menu', label: 'Menü' },
              { id: 'about', label: 'Über uns' },
              { id: 'reservation', label: 'Reservation' },
              { id: 'location', label: 'Lage' },
            ].map((i) => (
              <button key={i.id} onClick={() => scrollTo(i.id)} className="block w-full text-left text-gray-200 hover:text-yellow-400 py-2">
                {i.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
