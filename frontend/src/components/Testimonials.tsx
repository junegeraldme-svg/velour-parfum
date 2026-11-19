const testimonials = [
  { name: 'Sofia R.', rating: 5, comment: "Noir Oud is unlike anything I've worn. I get compliments every single time." },
  { name: 'Marco D.', rating: 5, comment: 'Midnight Vetiver has become my signature scent. Worth every peso.' },
  { name: 'Ana L.', rating: 4, comment: 'Velvet Rose is soft but still noticeable. Lasts all day too.' },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-neutral-900">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neutral-300" />
                <div>
                  <p className="font-semibold text-sm text-neutral-900">{t.name}</p>
                  <p className="text-amber-500 text-xs">{'★'.repeat(t.rating)}</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600">"{t.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}