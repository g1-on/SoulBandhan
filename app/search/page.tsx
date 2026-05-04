import Navbar from '@/components/Navbar';
import Link from 'next/link';

const MOCK_PROFILES = [
  { id: 1, name: "Priya Patel", age: 26, location: "Mumbai", occupation: "Doctor", community: "Patel", education: "MBBS" },
  { id: 2, name: "Rahul Verma", age: 30, location: "Delhi", occupation: "Tech Lead", community: "Kshatriya", education: "M.Tech" },
  { id: 3, name: "Sanya Malhotra", age: 25, location: "Pune", occupation: "Designer", community: "Punjabi", education: "B.Des" },
  { id: 4, name: "Ishaan Khattar", age: 29, location: "Gurgaon", occupation: "Entrepreneur", community: "Arora", education: "MBA" },
  { id: 5, name: "Ananya Panday", age: 24, location: "Bangalore", occupation: "Marketing Exec", community: "Saraswat", education: "BMS" },
  { id: 6, name: "Vikrant Massey", age: 31, location: "Hyderabad", occupation: "Finance Manager", community: "Catholic", education: "CA" },
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#fffdf5] pt-32 pb-20 mandala-bg">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white border-2 border-[#d4af37]/30 rounded-[2.5rem] p-8 sticky top-32 shadow-xl shadow-[#8b0000]/5">
              <h3 className="text-2xl font-black mb-8 text-[#8b0000] font-serif">Refine Search</h3>
              
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-3 block">Age Preference</label>
                  <div className="flex gap-3">
                    <input type="text" placeholder="21" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000] transition-colors" />
                    <span className="text-[#8b0000] self-center font-bold">to</span>
                    <input type="text" placeholder="35" className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-3 block">Religion</label>
                  <select className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000] appearance-none cursor-pointer">
                    <option>All Religions</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Sikh</option>
                    <option>Christian</option>
                    <option>Jain</option>
                    <option>Parsi</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-3 block">Community / Caste</label>
                  <select className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000] appearance-none cursor-pointer">
                    <option>All Communities</option>
                    <option>Brahmin</option>
                    <option>Jat</option>
                    <option>Sunni</option>
                    <option>Catholic</option>
                    <option>Kayastha</option>
                    <option>Arora</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-3 block">Mother Tongue</label>
                  <select className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000] appearance-none cursor-pointer">
                    <option>Any Language</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                    <option>Punjabi</option>
                    <option>Bengali</option>
                    <option>Tamil</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black mb-3 block">Education Level</label>
                  <select className="w-full bg-[#fffdf5] border border-[#d4af37]/20 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#8b0000] appearance-none cursor-pointer">
                    <option>Any Education</option>
                    <option>Masters / Post Graduate</option>
                    <option>Bachelors / Graduate</option>
                    <option>Doctorate / PhD</option>
                  </select>
                </div>

                <button className="w-full indian-gradient text-white font-black uppercase tracking-[0.2em] py-4 rounded-full shadow-lg shadow-[#8b0000]/20 text-xs border border-[#d4af37]/30 hover:scale-105 transition-transform">
                  Search Matches
                </button>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <section className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-black text-[#58181a] font-serif">Recommended Matches</h2>
                <p className="text-[#d4af37] text-xs font-black uppercase tracking-widest mt-1">Based on your preferences • 245 Results</p>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-[#d4af37]/20 shadow-sm">
                <span className="text-[10px] font-black uppercase text-[#2d1a12]/50 tracking-wider">Sort by:</span>
                <select className="bg-transparent text-xs font-black outline-none cursor-pointer text-[#8b0000] uppercase tracking-wider">
                  <option>Newest First</option>
                  <option>Compatibility</option>
                  <option>Last Active</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {MOCK_PROFILES.map((profile) => (
                <div key={profile.id} className="group traditional-card hover:border-[#d4af37] transition-all cursor-pointer bg-white">
                  <div className="aspect-[3/4] bg-[#2d1a12] relative overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center text-[#d4af37]/10 text-6xl font-black italic tracking-tighter uppercase select-none">
                      {profile.name.charAt(0)}
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                       <div className="bg-[#8b0000]/80 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full border border-[#d4af37]/30 uppercase tracking-widest shadow-lg">
                        Trusted
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#58181a] to-transparent z-10">
                       <h3 className="font-serif font-black text-xl text-white">{profile.name}, {profile.age}</h3>
                       <p className="text-[#d4af37] text-xs font-bold uppercase tracking-wide">{profile.community} • {profile.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider border-b border-[#d4af37]/10 pb-2">
                        <span className="text-[#2d1a12]/50">Occupation</span>
                        <span className="text-[#8b0000]">{profile.occupation}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider border-b border-[#d4af37]/10 pb-2">
                        <span className="text-[#2d1a12]/50">Education</span>
                        <span className="text-[#8b0000]">{profile.education}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link href={`/profile/${profile.id}`} className="flex-1 py-3.5 rounded-full bg-[#fffdf5] hover:bg-white text-[10px] font-black uppercase tracking-widest text-[#8b0000] transition-all border-2 border-[#d4af37]/20 shadow-sm flex items-center justify-center">
                        View Details
                      </Link>
                      <button className="w-12 h-12 rounded-full indian-gradient flex items-center justify-center shrink-0 shadow-lg shadow-[#8b0000]/20 hover:scale-110 transition-transform border border-[#d4af37]/30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
