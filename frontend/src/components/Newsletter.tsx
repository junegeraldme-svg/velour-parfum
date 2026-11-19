export default function Newsletter() {
  return (
    <section id="newsletter" className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-semibold text-neutral-900">Join the Velour Circle</h2>
      <p className="mt-3 text-neutral-500">Be the first to know about new fragrances and exclusive drops.</p>
      <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <input type="email" placeholder="Enter your email" className="border border-neutral-300 rounded-full px-5 py-3 w-full sm:w-80 focus:outline-none focus:border-amber-400" />
        <button type="submit" className="bg-black hover:bg-neutral-800 text-white font-semibold px-7 py-3 rounded-full transition-colors">
          Subscribe
        </button>
      </form>
    </section>
  );
}