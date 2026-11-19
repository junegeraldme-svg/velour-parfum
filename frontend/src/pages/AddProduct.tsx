import { useState } from 'react';
import { createProduct } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    type: 'Eau de Parfum',
    notes: '',
    price: '',
    rating: '',
    image: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await createProduct({
        name: form.name,
        type: form.type,
        notes: form.notes,
        price: parseFloat(form.price),
        rating: parseFloat(form.rating),
        image: form.image,
      });
      navigate('/');
    } catch {
      setError('Failed to add product. Check that the backend is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Add New Fragrance</h1>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product name"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400"
          >
            <option>Eau de Parfum</option>
            <option>Eau de Toilette</option>
          </select>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Scent notes"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400"
          />

          <input
            name="price"
            type="number"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (e.g. 89.00)"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400"
          />

          <input
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={form.rating}
            onChange={handleChange}
            placeholder="Rating (e.g. 4.8)"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image path (e.g. /images/noir-oud.jpg)"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {submitting ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}