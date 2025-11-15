import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black to-neutral-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(234,179,8,0.1),transparent_40%)]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Steinbock – Schweizer Küche auf 5-Sterne-Niveau
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          In Tägerwilen am See. Goldene Eleganz, schwarze Raffinesse – ein kulinarisches Erlebnis inspiriert vom Steinbock.
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#reservation" className="px-6 py-3 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">Tisch reservieren</a>
          <a href="#menu" className="px-6 py-3 rounded-md border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition">Menü ansehen</a>
        </div>
      </div>
      <div className="absolute bottom-6 w-full flex justify-center">
        <span className="text-yellow-500/80 text-sm">Scrollen</span>
      </div>
    </section>
  )
}
