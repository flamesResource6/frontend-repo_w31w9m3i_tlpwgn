import { motion } from 'framer-motion'

const menu = [
  { title: 'Zürcher Geschnetzeltes', desc: 'Kalbfleisch in Rahmsauce, Rösti', price: 'CHF 38' },
  { title: 'Raclette Variation', desc: 'Ausgewählte Käsesorten, Kartoffeln, Mixed Pickles', price: 'CHF 29' },
  { title: 'Forelle vom Bodensee', desc: 'Zitrusbutter, Kräuter, Mandelblättchen', price: 'CHF 34' },
  { title: 'Älplermagronen', desc: 'Hausgemacht, Apfelmus, Röstzwiebeln', price: 'CHF 24' },
  { title: 'Schokoladenmousse', desc: 'Dunkle Schokolade, Goldstaub', price: 'CHF 14' },
]

export default function MenuSection() {
  return (
    <section id="menu" className="bg-neutral-950 text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">Menü</h2>
        <p className="mt-2 text-gray-400">Schweizer Klassiker, modern interpretiert.</p>
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {menu.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-lg border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black hover:border-yellow-500/40 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
                <span className="text-yellow-400 font-semibold">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
