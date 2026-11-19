import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Fragrances', href: '#products' },
  { label: 'Collections', href: '#categories' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#newsletter' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="text-xl tracking-widest font-semibold text-white">
          VELOUR <span className="text-amber-400">PARFUM</span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-neutral-300">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-amber-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm text-neutral-300 hover:text-amber-400 transition-colors">
            Sign In
          </Link>
          <a href="#products" className="bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            Shop Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" aria-label="Toggle menu">
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-4 space-y-4 text-neutral-300 text-sm">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block hover:text-amber-400" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <Link to="/login" className="block hover:text-amber-400" onClick={() => setIsOpen(false)}>
            Sign In
          </Link>
          <a href="#products" className="block text-center bg-amber-400 text-black font-semibold px-4 py-2 rounded-full" onClick={() => setIsOpen(false)}>
            Shop Now
          </a>
        </div>
      )}
    </header>
  );
}