const categories = [
  { name: 'Eau de Parfum', description: 'Rich, long-lasting fragrances' },
  { name: 'Eau de Toilette', description: 'Lighter, everyday scents' },
  { name: 'Gift Sets', description: 'Curated fragrance collections' },
  { name: 'Travel Size', description: 'Your scent, wherever you go' },
  { name: 'For Him', description: 'Bold, distinctive fragrances' },
  { name: 'For Her', description: 'Elegant, timeless scents' },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-neutral-900">Shop By Category</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-amber-400 transition-colors">
              <h3 className="font-semibold text-neutral-900">{category.name}</h3>
              <p className="text-sm text-neutral-500 mt-2">{category.description}</p>
              <a href="#" className="inline-block mt-4 text-sm font-semibold text-amber-600 hover:text-amber-700">
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}