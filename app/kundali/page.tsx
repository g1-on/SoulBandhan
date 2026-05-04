import Navbar from '@/components/Navbar';

export default function KundaliPage() {
  return (
    <main className="min-h-screen bg-[#fffdf5] mandala-bg pt-40 pb-20">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#d4af37] text-2xl">🕉️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#58181a] font-serif mb-4">वैदिक <span className="gold-text">ज्योतिष</span> मिलान</h1>
          <p className="text-[#2d1a12]/60 text-lg font-bold uppercase tracking-widest italic">"सनातन धर्म के अनुसार अष्टकूट गुण मिलान और दोष विश्लेषण"</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Boy's Details */}
          <div className="bg-white border-2 border-[#d4af37]/30 rounded-[3rem] p-10 shadow-xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8b0000]/5 rounded-full blur-2xl" />
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-[#8b0000]/10 rounded-full flex items-center justify-center border border-[#d4af37]/20">
                 <span className="text-[#8b0000] font-black">♂</span>
               </div>
               <h2 className="text-2xl font-black text-[#58181a] font-serif">वर का विवरण (Boy)</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-2 block">जन्म तिथि</label>
                 <input type="date" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000]" />
               </div>
               <div>
                 <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-2 block">जन्म समय</label>
                 <input type="time" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000]" />
               </div>
               <div className="md:col-span-2">
                 <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-2 block">जन्म स्थान</label>
                 <input type="text" placeholder="शहर, राज्य" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000]" />
               </div>
             </div>
          </div>

          {/* Girl's Details */}
          <div className="bg-white border-2 border-[#d4af37]/30 rounded-[3rem] p-10 shadow-xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff0080]/5 rounded-full blur-2xl" />
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-[#ff0080]/10 rounded-full flex items-center justify-center border border-[#d4af37]/20">
                 <span className="text-[#ff0080] font-black">♀</span>
               </div>
               <h2 className="text-2xl font-black text-[#58181a] font-serif">वधू का विवरण (Girl)</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-2 block">जन्म तिथि</label>
                 <input type="date" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000]" />
               </div>
               <div>
                 <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-2 block">जन्म समय</label>
                 <input type="time" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000]" />
               </div>
               <div className="md:col-span-2">
                 <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-2 block">जन्म स्थान</label>
                 <input type="text" placeholder="शहर, राज्य" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000]" />
               </div>
             </div>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <button className="indian-gradient text-white font-black uppercase tracking-[0.4em] px-16 py-6 rounded-full shadow-2xl shadow-[#8b0000]/30 hover:scale-105 transition-all border-2 border-[#d4af37]">
            ज्योतिषीय गणना शुरू करें
          </button>
        </div>

        {/* Deep Jyotish Results Section */}
        <div className="space-y-12">
          {/* Gun Milan Score */}
          <section className="bg-[#58181a] rounded-[4rem] p-12 border-4 border-[#d4af37] shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 mandala-bg" />
             <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
               <div className="text-center md:text-left">
                 <h3 className="text-3xl font-black text-white font-serif mb-4">अष्टकूट गुण मिलान</h3>
                 <p className="text-[#f9e29c] text-sm font-bold uppercase tracking-widest mb-6 italic">"36 गुणों में से प्राप्त अंक"</p>
                 <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-black text-xs uppercase tracking-widest">
                   निर्णय: उत्तम विवाह संबंध
                 </div>
               </div>
               
               <div className="flex justify-center">
                 <div className="w-56 h-56 rounded-full border-8 border-[#d4af37] flex flex-col items-center justify-center bg-[#8b0000] shadow-2xl relative">
                    <div className="absolute -top-4 bg-[#d4af37] text-[#58181a] px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">कुल गुण</div>
                    <span className="text-7xl font-black text-white">31.5</span>
                    <span className="text-[#d4af37] font-black text-2xl">/ 36</span>
                 </div>
               </div>

               <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 space-y-4">
                 {[
                   { n: "भकूट (Love)", s: "7/7" },
                   { n: "नाड़ी (Health)", s: "8/8" },
                   { n: "ग्रहमैत्री (Friendship)", s: "5/5" },
                   { n: "गण (Nature)", s: "6/6" },
                   { n: "योनि (Intimacy)", s: "4/4" },
                 ].map((item, idx) => (
                   <div key={idx} className="flex justify-between items-center text-white border-b border-white/5 pb-2">
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{item.n}</span>
                     <span className="text-sm font-black text-[#d4af37]">{item.s}</span>
                   </div>
                 ))}
               </div>
             </div>
          </section>

          {/* Dosh & Nakshatra Analysis */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white border-2 border-[#d4af37]/20 rounded-[3rem] p-10 shadow-xl">
               <h3 className="text-xl font-black text-[#8b0000] font-serif mb-6 flex items-center gap-3 underline decoration-[#d4af37]">
                 नक्षत्र और राशि विवरण
               </h3>
               <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-4">
                   <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">वर (Boy)</p>
                   <div className="text-sm font-black text-[#58181a]">नक्षत्र: रोहिणी</div>
                   <div className="text-sm font-black text-[#58181a]">राशि: वृषभ</div>
                   <div className="text-sm font-black text-[#58181a]">चरण: द्वितीय</div>
                 </div>
                 <div className="space-y-4">
                   <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">वधू (Girl)</p>
                   <div className="text-sm font-black text-[#58181a]">नक्षत्र: पुष्य</div>
                   <div className="text-sm font-black text-[#58181a]">राशि: कर्क</div>
                   <div className="text-sm font-black text-[#58181a]">चरण: प्रथम</div>
                 </div>
               </div>
             </div>

             <div className="bg-white border-2 border-[#d4af37]/20 rounded-[3rem] p-10 shadow-xl">
               <h3 className="text-xl font-black text-[#8b0000] font-serif mb-6 flex items-center gap-3 underline decoration-[#d4af37]">
                 मांगलिक दोष विश्लेषण
               </h3>
               <div className="space-y-6">
                 <div className="flex justify-between items-center bg-[#8b0000]/5 p-4 rounded-2xl border border-[#d4af37]/10">
                   <span className="text-sm font-bold text-[#58181a]">वर का मांगलिक प्रभाव:</span>
                   <span className="text-xs font-black text-green-600 uppercase tracking-widest">दोष मुक्त</span>
                 </div>
                 <div className="flex justify-between items-center bg-[#8b0000]/5 p-4 rounded-2xl border border-[#d4af37]/10">
                   <span className="text-sm font-bold text-[#58181a]">वधू का मांगलिक प्रभाव:</span>
                   <span className="text-xs font-black text-green-600 uppercase tracking-widest">दोष मुक्त</span>
                 </div>
                 <p className="text-[10px] text-[#2d1a12]/50 italic text-center font-medium">
                   "दोनों कुंडलियाँ मांगलिक दोष से मुक्त हैं, जो सुखद वैवाहिक जीवन का संकेत है।"
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
