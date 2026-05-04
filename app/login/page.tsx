import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#fffdf5] mandala-bg flex items-center justify-center p-4">
      <Navbar />
      <div className="w-full max-w-md traditional-card p-10 bg-white">
        <h1 className="text-3xl font-black text-[#58181a] font-serif text-center mb-2">Login</h1>
        <p className="text-[#d4af37] text-xs font-black uppercase tracking-widest text-center mb-8">Welcome Back to SoulBound</p>
        
        <form className="space-y-6">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-2 block">Mobile or Email</label>
            <input type="text" placeholder="Enter your credentials" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000] transition-all" />
          </div>
          <button type="button" className="w-full indian-gradient text-white font-black uppercase tracking-[0.2em] py-4 rounded-full shadow-lg shadow-[#8b0000]/20 text-xs border border-[#d4af37]/30 hover:scale-[1.02] transition-transform">
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-[#2d1a12]/50 text-xs font-bold uppercase">New to SoulBound?</p>
          <Link href="/register" className="text-[#8b0000] text-xs font-black uppercase tracking-widest mt-2 block hover:underline">Register for Free</Link>
        </div>
      </div>
    </main>
  );
}
