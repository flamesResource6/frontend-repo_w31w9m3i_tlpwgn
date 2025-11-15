import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-black text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-yellow-500/20 p-6 bg-neutral-900"
        >
          <h2 className="text-3xl font-bold text-yellow-400">Über uns</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Im Herzen von Tägerwilen am See zelebrieren wir die Schweizer Küche auf höchstem Niveau. Inspiriert vom majestätischen
            Steinbock verbinden wir Tradition und Moderne – mit erlesenen Zutaten, regionalen Produkten und einer Prise Gold.
          </p>
          <p className="mt-3 text-gray-400">
            Unser Haus wurde mehrfach ausgezeichnet und steht für Gastlichkeit, Eleganz und Perfektion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden border border-yellow-500/20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(234,179,8,0.2),rgba(0,0,0,0.2))]" />
          <img
            alt="Restaurant Innenraum"
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
