export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="h-72 bg-gradient-to-br from-neutral-900 to-black rounded-2xl" />
      <div>
        <h2 className="text-3xl font-semibold text-neutral-900">Crafted for the Unforgettable</h2>
        <p className="mt-4 text-neutral-600">
          At Velour Parfum, every fragrance begins with rare ingredients and the hands of master
          perfumers. We don't just make scents — we craft signatures, the kind people remember
          long after you've left the room.
        </p>
        <a href="#" className="inline-block mt-6 text-sm font-semibold text-amber-600 hover:text-amber-700">
          Learn More →
        </a>
      </div>
    </section>
  );
}