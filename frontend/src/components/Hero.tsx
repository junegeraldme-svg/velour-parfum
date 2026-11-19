export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">New Arrival</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          A Scent That Speaks
          <br className="hidden md:block" /> Before You Do
        </h1>
        <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
          Discover signature fragrances crafted for those who leave a lasting impression —
          bold, timeless, unforgettable.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-7 py-3 rounded-full transition-colors">
            Shop Fragrances
          </a>
          <a href="#categories" className="border border-neutral-600 hover:border-amber-400 text-white font-semibold px-7 py-3 rounded-full transition-colors">
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}