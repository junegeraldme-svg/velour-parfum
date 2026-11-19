export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white tracking-widest font-semibold">
          VELOUR <span className="text-amber-400">PARFUM</span>
        </div>
        <p className="text-sm">© 2026 Velour Parfum. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-amber-400">Privacy</a>
          <a href="#" className="hover:text-amber-400">Terms</a>
          <a href="#" className="hover:text-amber-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}