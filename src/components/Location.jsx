export default function Location() {
  return (
    <section id="location" className="bg-black text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">Lage</h2>
          <p className="mt-3 text-gray-300">Tägerwilen am See – idyllisch gelegen, perfekt erreichbar.</p>
          <div className="mt-6 space-y-2 text-gray-300">
            <p>Restaurant Steinbock</p>
            <p>Seestrasse 12</p>
            <p>8274 Tägerwilen</p>
            <p>Schweiz</p>
          </div>
          <div className="mt-6">
            <a href="#reservation" className="inline-block px-6 py-3 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">Tisch reservieren</a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-yellow-500/20 aspect-video">
          <iframe
            title="map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=T%C3%A4gerwilen&output=embed"
          />
        </div>
      </div>
    </section>
  )
}
