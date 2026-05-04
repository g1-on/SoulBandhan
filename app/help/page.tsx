import Navbar from '@/components/Navbar';

const FAQS = [
  { q: "How do I verify my profile?", a: "Go to Dashboard > Account Settings > Verification and upload your Aadhaar or PAN card." },
  { q: "Is my data secure?", a: "Yes, we use military-grade encryption and only show your contact details to matches you approve." },
  { q: "How can I report a profile?", a: "Click the 'Report User' button on any profile page or contact our 24/7 support team." },
  { q: "What are the benefits of Premium?", a: "Premium users get unlimited views, priority matching, and a dedicated Relationship Manager." },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#fffdf5] mandala-bg pt-40 pb-20">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#58181a] font-serif mb-4">Support & <span className="gold-text">Guidance</span></h1>
          <p className="text-[#2d1a12]/60 text-sm font-black uppercase tracking-widest">We are here to help you find your soulmate.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="traditional-card p-10 bg-white">
            <div className="w-12 h-12 bg-[#8b0000]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#d4af37]/20">
              <svg className="w-6 h-6 text-[#8b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#58181a] mb-2 font-serif">Email Support</h3>
            <p className="text-[#2d1a12]/60 text-sm font-medium mb-4">Response time: Within 24 hours</p>
            <p className="text-[#8b0000] font-black tracking-widest text-sm uppercase">support@soulbound.com</p>
          </div>
          
          <div className="traditional-card p-10 bg-white">
            <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#d4af37]/20">
              <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#58181a] mb-2 font-serif">Call Us</h3>
            <p className="text-[#2d1a12]/60 text-sm font-medium mb-4">Monday to Saturday, 9 AM - 7 PM</p>
            <p className="text-[#8b0000] font-black tracking-widest text-sm uppercase">+91 1800-SoulBound</p>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-black text-[#58181a] font-serif mb-10 text-center uppercase tracking-widest underline decoration-[#d4af37] underline-offset-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-[#d4af37]/10 shadow-sm hover:border-[#d4af37]/30 transition-all">
                <h4 className="text-lg font-black text-[#8b0000] mb-3">{faq.q}</h4>
                <p className="text-[#2d1a12]/70 text-sm font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
