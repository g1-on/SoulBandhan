import Navbar from '@/components/Navbar';

const PLANS = [
  { name: "Basic", price: "₹2,499", duration: "3 Months", features: ["10 Profile Views", "Interest Sending", "Basic Filters"], color: "bg-[#8b0000]/5", border: "border-[#8b0000]/10" },
  { name: "Gold", price: "₹4,999", duration: "6 Months", features: ["Unlimited Profile Views", "Interest Sending", "Advanced Search", "Priority Support"], color: "bg-[#d4af37]/10", border: "border-[#d4af37]/50", popular: true },
  { name: "Platinum", price: "₹8,999", duration: "12 Months", features: ["Everything in Gold", "Relationship Manager", "Profile Highlight", "Verification Badge"], color: "bg-[#58181a]", text: "text-white", border: "border-[#d4af37]" },
];

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#fffdf5] mandala-bg pt-40 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#58181a] font-serif mb-4">Choose Your <span className="gold-text">Vedic Journey</span></h1>
          <p className="text-[#2d1a12]/60 text-lg font-bold uppercase tracking-widest">Premium memberships for those who seek the perfect union.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <div key={i} className={`relative traditional-card ${plan.color} ${plan.border} p-10 flex flex-col items-center text-center ${plan.text || 'text-[#2d1a12]'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 indian-gradient text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full border border-[#d4af37] shadow-xl">
                  Most Preferred
                </div>
              )}
              
              <h3 className="text-2xl font-black uppercase tracking-widest mb-2 font-serif">{plan.name}</h3>
              <div className="text-4xl font-black mb-1">{plan.price}</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-8">{plan.duration}</div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm font-bold flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-5 rounded-full ${plan.name === 'Platinum' ? 'bg-[#d4af37] text-[#58181a]' : 'indian-gradient text-white'} text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all`}>
                Upgrade Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-[3rem] border-2 border-[#d4af37]/20 text-center shadow-xl">
          <h2 className="text-3xl font-black text-[#8b0000] font-serif mb-4">Trusted by Millions of Families</h2>
          <p className="text-[#2d1a12]/50 text-sm font-medium italic mb-8 max-w-2xl mx-auto">"SoulBound's premium services helped us find our daughter's match within our community with complete trust and ease."</p>
          <div className="flex justify-center gap-4">
             <div className="w-12 h-12 bg-[#8b0000]/10 rounded-full flex items-center justify-center border border-[#d4af37]/20">
               <span className="text-[#8b0000] font-bold">1M+</span>
             </div>
             <div className="w-12 h-12 bg-[#8b0000]/10 rounded-full flex items-center justify-center border border-[#d4af37]/20">
               <span className="text-[#8b0000] font-bold">4.8★</span>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
