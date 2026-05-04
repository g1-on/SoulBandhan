import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf5] mandala-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden">
        {/* Decorative Borders */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="text-[#d4af37] text-sm font-black uppercase tracking-[0.3em] bg-[#8b0000]/5 px-6 py-2 rounded-full border border-[#d4af37]/20">
              Bharat Matrimony
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight font-serif text-[#58181a]">
            Where <span className="gold-text">Traditions</span> <br />
            Meet <span className="text-[#8b0000]">Love</span> <br />
            Across <span className="gold-text">India</span>
          </h1>
          
          <p className="text-[#2d1a12]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Discover your soulmate across all communities, cultures, and traditions. The most trusted heritage matrimony platform for every Indian home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Link href="/register" className="w-full sm:w-auto indian-gradient text-white font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full shadow-2xl shadow-[#8b0000]/30 hover:scale-105 transition-all border border-[#d4af37]/50 flex items-center justify-center">
              Create Your Profile
            </Link>
            <Link href="/search" className="w-full sm:w-auto bg-white text-[#8b0000] font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full hover:bg-[#fffdf5] transition-all border-2 border-[#d4af37]/30 shadow-lg flex items-center justify-center">
              Search All Communities
            </Link>
          </div>

          {/* Traditional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto p-1 border-2 border-[#d4af37]/20 rounded-[3rem] bg-white/50 backdrop-blur-md">
            {[
              { label: "Successful Unions", val: "50k+" },
              { label: "Active Members", val: "2M+" },
              { label: "Communities", val: "1000+" },
              { label: "Happy Families", val: "10k+" },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-4 rounded-[2.5rem] hover:bg-white transition-colors group">
                <div className="text-3xl font-black text-[#8b0000] mb-1 group-hover:scale-110 transition-transform">{stat.val}</div>
                <div className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Community Section */}
      <section className="py-24 bg-[#58181a] relative overflow-hidden">
        {/* Abstract Gold Paisley Pattern Placeholder */}
        <div className="absolute inset-0 opacity-10 mandala-bg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-serif">Matches from Every Corner</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <Link href={`/profile/${i}`} key={i} className="group traditional-card border-[#d4af37]/40 hover:border-[#d4af37] transition-all cursor-pointer">
                <div className="aspect-[4/5] relative bg-[#2d1a12] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#58181a] via-transparent to-transparent z-10" />
                  <div className="flex items-center justify-center h-full text-[#d4af37]/20 text-4xl font-black italic tracking-tighter uppercase">
                    Heritage Verified
                  </div>
                </div>
                
                <div className="p-8 relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-[#58181a] mb-1 font-serif">Priya Patel, 26</h3>
                      <p className="text-[#8b0000]/60 text-sm font-bold uppercase tracking-wide">Patel • Doctor • Mumbai</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-[#d4af37]/10 text-[#8b0000] px-3 py-1.5 rounded-full border border-[#d4af37]/20">Verified</span>
                    <span className="text-[9px] font-black uppercase tracking-widest bg-[#d4af37]/10 text-[#8b0000] px-3 py-1.5 rounded-full border border-[#d4af37]/20">Matches: 98%</span>
                  </div>
                  <div className="w-full py-4 rounded-full indian-gradient text-white text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-[#8b0000]/20 hover:shadow-xl transition-all text-center">
                    Send Interest
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-20 bg-white border-t-4 border-[#d4af37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-4 mb-10">
             <div className="w-14 h-14 bg-[#8b0000] rounded-full flex items-center justify-center border-2 border-[#d4af37]">
              <span className="text-[#d4af37] font-serif text-2xl font-bold">S</span>
            </div>
            <span className="text-3xl font-black tracking-tighter text-[#8b0000] font-serif">SoulBandhan</span>
            <p className="text-[#2d1a12]/60 text-sm font-medium italic">"Connecting Hearts Across India's Rich Heritage"</p>
          </div>
          
          <div className="flex justify-center gap-12 text-[#2d1a12] text-xs font-black uppercase tracking-widest mb-12">
            <Link href="#" className="hover:text-[#8b0000] transition-colors">About Us</Link>
            <Link href="#" className="hover:text-[#8b0000] transition-colors">Safety</Link>
            <Link href="#" className="hover:text-[#8b0000] transition-colors">Success Stories</Link>
            <Link href="#" className="hover:text-[#8b0000] transition-colors">Contact</Link>
          </div>
          
          <div className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">
            © 2024 SoulBandhan Matrimony Services Pvt. Ltd.
          </div>
        </div>
      </footer>
    </main>
  );
}
