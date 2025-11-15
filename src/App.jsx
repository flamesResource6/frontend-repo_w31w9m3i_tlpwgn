import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Reservation from './components/Reservation'
import Location from './components/Location'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <MenuSection />
        <About />
        <Reservation />
        <Location />
        <footer className="border-t border-yellow-500/20 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} Restaurant Steinbock – Tägerwilen am See</p>
            <div className="flex items-center gap-4 text-yellow-400">
              <span>★★★★★</span>
              <span className="text-gray-400">5-Sterne-Erlebnis</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
