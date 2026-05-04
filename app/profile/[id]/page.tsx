import Navbar from '@/components/Navbar';
import Link from 'next/link';

const MOCK_PROFILES = {
  "1": { name: "Priya Patel", age: 26, location: "Mumbai", occupation: "Senior Doctor", community: "Patel", education: "MBBS, MD", height: "5'4\"", income: "25L+ PA", bio: "Seeking a life partner who values tradition and family. I am a professional doctor based in Mumbai, looking for someone well-settled and kind-hearted.", religion: "Hindu", motherTongue: "Gujarati" },
  "2": { name: "Rahul Verma", age: 30, location: "Delhi", occupation: "Tech Lead", community: "Kshatriya", education: "M.Tech, IIT", height: "5'11\"", income: "45L+ PA", bio: "Independent and family-oriented. I love traveling and exploring new cultures. Looking for someone who is career-driven yet grounded.", religion: "Hindu", motherTongue: "Hindi" },
  "3": { name: "Sanya Malhotra", age: 25, location: "Pune", occupation: "Fashion Designer", community: "Punjabi", education: "B.Des, NIFT", height: "5'6\"", income: "15L+ PA", bio: "Creative soul with a passion for traditional Indian wear. Family is my priority. Looking for a supportive partner.", religion: "Sikh", motherTongue: "Punjabi" },
};

export default function ProfilePage({ params }: { params: { id: string } }) {
  const profile = MOCK_PROFILES[params.id as keyof typeof MOCK_PROFILES] || MOCK_PROFILES["1"];

  return (
    <main className="min-h-screen bg-[#fffdf5] mandala-bg pt-32 pb-20">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/search" className="inline-flex items-center gap-2 text-[#8b0000] font-black uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Results
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Photos & Primary Action */}
          <div className="w-full lg:w-[450px] shrink-0">
            <div className="traditional-card mb-8">
              <div className="aspect-[3/4] bg-[#2d1a12] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#d4af37]/10 text-8xl font-black italic tracking-tighter uppercase select-none">
                  {profile.name.charAt(0)}
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-[#8b0000]/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full border border-[#d4af37]/30 uppercase tracking-[0.2em] shadow-2xl">
                    Verified Profile
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex-1 py-5 rounded-full indian-gradient text-white text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-[#8b0000]/20 hover:scale-105 transition-all">
                Send Interest
              </button>
              <button className="flex-1 py-5 rounded-full bg-white text-[#8b0000] text-xs font-black uppercase tracking-[0.2em] border-2 border-[#d4af37]/30 hover:bg-[#fffdf5] transition-all shadow-lg">
                Shortlist
              </button>
            </div>
          </div>

          {/* Right: Detailed Info */}
          <div className="flex-1 space-y-10">
            <div className="border-b-4 border-[#d4af37]/20 pb-8">
              <h1 className="text-4xl md:text-5xl font-black text-[#58181a] font-serif mb-2">{profile.name}</h1>
              <p className="text-[#d4af37] text-lg font-bold uppercase tracking-widest">{profile.community} • {profile.age} Years • {profile.location}</p>
            </div>

            <section>
              <h2 className="text-xl font-black text-[#8b0000] uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#d4af37]/50" />
                About Me
              </h2>
              <p className="text-[#2d1a12]/80 text-lg leading-relaxed font-medium bg-white p-8 rounded-[2rem] border border-[#d4af37]/10 shadow-sm">
                "{profile.bio}"
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-8 rounded-[2rem] border border-[#d4af37]/10 shadow-sm">
                <h3 className="text-sm font-black text-[#d4af37] uppercase tracking-widest mb-6">Personal Details</h3>
                <div className="space-y-4">
                  {[
                    { l: "Religion", v: profile.religion },
                    { l: "Community", v: profile.community },
                    { l: "Mother Tongue", v: profile.motherTongue },
                    { l: "Height", v: profile.height },
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between border-b border-[#d4af37]/10 pb-3">
                      <span className="text-[#2d1a12]/50 text-xs font-bold uppercase">{d.l}</span>
                      <span className="text-[#58181a] text-sm font-black">{d.v}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white p-8 rounded-[2rem] border border-[#d4af37]/10 shadow-sm">
                <h3 className="text-sm font-black text-[#d4af37] uppercase tracking-widest mb-6">Career & Education</h3>
                <div className="space-y-4">
                  {[
                    { l: "Education", v: profile.education },
                    { l: "Occupation", v: profile.occupation },
                    { l: "Annual Income", v: profile.income },
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between border-b border-[#d4af37]/10 pb-3">
                      <span className="text-[#2d1a12]/50 text-xs font-bold uppercase">{d.l}</span>
                      <span className="text-[#8b0000] text-sm font-black">{d.v}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Interest Section */}
            <div className="bg-[#58181a] p-10 rounded-[3rem] border-4 border-[#d4af37] text-center shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 mandala-bg" />
               <div className="relative z-10">
                 <h3 className="text-2xl font-black text-white font-serif mb-4">Interested in {profile.name.split(' ')[0]}?</h3>
                 <p className="text-[#f9e29c] text-sm font-bold uppercase tracking-widest mb-8">Click below to send a formal interest and start your journey.</p>
                 <button className="bg-[#d4af37] text-[#58181a] font-black uppercase tracking-[0.3em] px-12 py-5 rounded-full hover:bg-[#f9e29c] transition-all shadow-xl">
                   Express Interest
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
