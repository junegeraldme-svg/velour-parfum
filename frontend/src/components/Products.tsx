import { useEffect, useState } from 'react';
import { getProducts, type Product } from '../services/api';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError('Could not load products. Is the backend running?'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="products" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold text-neutral-900">Signature Fragrances</h2>
        <p className="mt-3 text-neutral-500">Each bottle, a story worth wearing.</p>
      </div>

      {loading && <p className="text-center text-neutral-500">Loading fragrances...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!loading && !error && products.length === 0 && (
        <p className="text-center text-neutral-500">No products yet. Add one from the Admin page.</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-56 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-neutral-900">{product.name}</h3>
                  <p className="text-xs text-neutral-500">{product.type}</p>
                </div>
                <span className="text-amber-500 text-sm">★ {product.rating}</span>
              </div>
              <p className="text-sm text-neutral-500 mt-3">{product.notes}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-semibold text-neutral-900">${Number(product.price).toFixed(2)}</span>
                <div className="flex gap-2">
                  <button className="text-xs font-medium border border-neutral-300 hover:border-amber-400 px-3 py-2 rounded-full transition-colors">
                    View
                  </button>
                  <button className="text-xs font-semibold bg-black hover:bg-neutral-800 text-white px-3 py-2 rounded-full transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}