import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#8b0000] rounded-full flex items-center justify-center shadow-lg border-2 border-[#d4af37]">
              <span className="text-[#d4af37] font-serif text-2xl font-bold italic">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#8b0000] leading-none font-serif">SoulBandhan</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#d4af37]">India's Premium Matrimony</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-bold text-[#2d1a12] hover:text-[#8b0000] transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/search" className="text-sm font-bold text-[#2d1a12] hover:text-[#8b0000] transition-colors uppercase tracking-widest">Search</Link>
            <Link href="/premium" className="text-sm font-bold text-[#2d1a12] hover:text-[#8b0000] transition-colors uppercase tracking-widest">Premium</Link>
            <Link href="/kundali" className="text-sm font-bold text-[#2d1a12] hover:text-[#8b0000] transition-colors uppercase tracking-widest">Kundali</Link>
            <Link href="/help" className="text-sm font-bold text-[#2d1a12] hover:text-[#8b0000] transition-colors uppercase tracking-widest">Help</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-[#8b0000] hover:text-[#58181a] transition-colors uppercase tracking-widest">
              Login
            </Link>
            <Link href="/register" className="indian-gradient text-white text-[10px] font-black uppercase tracking-[0.15em] px-6 py-3 rounded-full shadow-xl shadow-[#8b0000]/20 hover:scale-105 transition-transform border border-[#d4af37]/50 flex items-center justify-center">
              Register Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
