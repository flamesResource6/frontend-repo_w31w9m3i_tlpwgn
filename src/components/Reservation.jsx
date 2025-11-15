import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 2 })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here we would call a backend endpoint; for now, just simulate success
    setTimeout(() => setSent(true), 600)
  }

  return (
    <section id="reservation" className="bg-neutral-950 text-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-400">Reservation</h2>
        <p className="mt-2 text-gray-400">Wir freuen uns auf Ihren Besuch.</p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full bg-black/40 border border-yellow-500/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">E-Mail</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-black/40 border border-yellow-500/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Datum</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full bg-black/40 border border-yellow-500/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Zeit</label>
              <input type="time" name="time" value={form.time} onChange={handleChange} className="w-full bg-black/40 border border-yellow-500/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Gäste</label>
              <input type="number" min="1" max="12" name="guests" value={form.guests} onChange={handleChange} className="w-full bg-black/40 border border-yellow-500/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-400 transition">Anfrage senden</button>
            </div>
          </form>
        ) : (
          <div className="mt-8 p-6 rounded border border-yellow-500/30 bg-black/40 text-center">
            <p className="text-lg text-yellow-300">Vielen Dank! Wir melden uns umgehend zur Bestätigung.</p>
          </div>
        )}
      </div>
    </section>
  )
}
