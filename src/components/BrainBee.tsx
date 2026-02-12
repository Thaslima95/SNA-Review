import React from "react";
import {
  Brain,
  Globe,
  Calendar,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Star,
  Building,
  Search,
  Flag,
} from "lucide-react";

export const BrainBee = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* 1. Page Banner */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-red-50 via-white to-slate-50">
        {/* Subtle Network Pattern Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1765046255517-412341954c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGFic3RyYWN0JTIwbmV1cmFsJTIwbmV0d29yayUyMGxpbmVzJTIwd2hpdGUlMjBiYWNrZ3JvdW5kJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzNTUxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(120%)",
          }}
        ></div>

        {/* Decorative Gradients for Soft Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Brain Bee
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Inspiring the Next Generation of Neuroscientists
          </p>
        </div>
      </div>

      {/* 2. Key Facts Highlight (Below Hero) */}
      <div className="relative z-20 -mt-12 mb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FactCard
              icon={<Users className="w-5 h-5 text-[#991b1b]" />}
              label="Ages 14–19"
              sublabel="Target Age Group"
            />
            <FactCard
              icon={<Globe className="w-5 h-5 text-[#991b1b]" />}
              label="150+ Coordinators"
              sublabel="Worldwide Network"
            />
            <FactCard
              icon={<Award className="w-5 h-5 text-[#991b1b]" />}
              label="Global Competition"
              sublabel="Prestigious Platform"
            />
            <FactCard
              icon={<Search className="w-5 h-5 text-[#991b1b]" />}
              label="Neuroscience Focus"
              sublabel="Medicine & Research"
            />
          </div>
        </div>
      </div>

      {/* 3. Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* About the International Brain Bee */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
             <div className="shrink-0 p-4 bg-red-50 rounded-xl">
                 <Globe className="w-8 h-8 text-[#991b1b]" />
             </div>
             <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900">
                    About the International Brain Bee
                </h2>
                <div className="prose prose-lg prose-slate text-slate-600 font-serif leading-loose max-w-2xl">
                    <p>
                    The International Brain Bee (IBB) is a prestigious, non-profit
                    neuroscience competition that introduces students aged 14–19 to
                    the wonders of the human brain. Designed to spark curiosity and
                    inspire future careers in neuroscience, medicine, and biomedical
                    research, the Brain Bee has grown into a globally recognised
                    platform, with over 150 national coordinators worldwide.
                    </p>
                </div>
             </div>
          </div>
        </section>

        {/* Singapore Brain Bee & SNA Role */}
        <section className="bg-white rounded-2xl border-l-4 border-[#991b1b] shadow-sm p-8 md:p-12 overflow-hidden relative">
           {/* Decorative bg */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-50"></div>

           <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
             <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center">
                    <Flag className="w-8 h-8 text-[#991b1b] mr-3" />
                    Singapore Brain Bee and the Role of SNA
                </h2>
                <div className="prose prose-lg prose-slate text-slate-600 font-serif leading-loose max-w-2xl">
                    <p>
                    The Singapore Neuroscience Association (SNA) is honoured to once
                    again serve as the National Coordinator of the International
                    Brain Bee in Singapore. Over the years, SNA has successfully
                    organised the Singapore Brain Bee Challenge, establishing it as
                    a landmark event for pre-university students with a passion
                    for neuroscience and the brain.
                    </p>
                </div>
             </div>
             
             {/* Key Stats Vertical Column */}
             <div className="flex flex-row md:flex-col gap-4 shrink-0 min-w-[200px]">
                 <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex-1 text-center md:text-left">
                    <div className="text-4xl font-bold text-[#991b1b] mb-1">120</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Students</div>
                 </div>
                 <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex-1 text-center md:text-left">
                    <div className="text-4xl font-bold text-[#991b1b] mb-1">10</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Schools</div>
                 </div>
                 <div className="text-xs text-slate-400 text-center md:text-left mt-2 italic px-1">
                    *Participation in the most recent competition
                 </div>
             </div>
           </div>
        </section>
      </div>

      {/* 4. Brain Bee 2026 Programme */}
      <section className="py-24 mt-12 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#991b1b] text-white font-bold text-sm mb-6 shadow-md">
                <Calendar className="w-4 h-4 mr-2" />
                Coming in May 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Singapore National Brain Bee Challenge 2026
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
                Building on this success, SNA will organise the Singapore National Brain Bee Challenge 2026, featuring a series of engaging educational events throughout May 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {/* Step 1 */}
             <ProgrammeCard 
                step="01"
                icon={<BookOpen className="w-6 h-6 text-white" />}
                title="Orientation Session"
                description="Introducing students to the fundamentals of the brain and neuroscience."
             />
             {/* Step 2 */}
             <ProgrammeCard 
                step="02"
                icon={<GraduationCap className="w-6 h-6 text-white" />}
                title="Expert-Led Lectures"
                description={
                    <span>
                        Delivered by distinguished educators from the <strong className="text-slate-900 font-bold">Yong Loo Lin School of Medicine, NUS</strong>.
                    </span>
                }
             />
             {/* Step 3 */}
             <ProgrammeCard 
                step="03"
                icon={<Brain className="w-6 h-6 text-white" />}
                title="Advanced Concepts"
                description="Covering brain structure, function, and cutting-edge neuroscience concepts."
             />
          </div>
        </div>
      </section>

      {/* 5. Participation Invitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-slate-100 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden ring-1 ring-slate-200 shadow-sm">
             <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-60"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-100 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-60"></div>
             
             <Building className="w-12 h-12 text-[#991b1b] mx-auto mb-6" />
             
             <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
                Join the Challenge
             </h2>

             <h3 className="text-xl md:text-2xl font-serif text-slate-700 leading-snug max-w-3xl mx-auto italic">
                “Students from all participating schools are warmly invited to attend these sessions.”
             </h3>
        </div>
      </section>

      {/* 6. Organising Committee */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Brain Bee 2026 Organising Committee
                </h2>
                <div className="w-16 h-1 bg-slate-200 mx-auto rounded-full"></div>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CommitteeCard 
                    name="Professor S. T. Dheen"
                    role="National Coordinator"
                    subRole="President, SNA"
                    dept="Department of Anatomy, Yong Loo Lin School of Medicine, NUS"
                />
                 <CommitteeCard 
                    name="Dr Sara Kashkouli Rahmanzadeh"
                    role="Local Coordinator"
                    subRole="Honorary Secretary, SNA"
                    dept="Department of Anatomy, Yong Loo Lin School of Medicine, NUS"
                />
                 <CommitteeCard 
                    name="Dr Deepika Kandilya"
                    role="Organising Secretary"
                    subRole="Honorary Treasurer, SNA"
                    dept="Department of Anatomy, Yong Loo Lin School of Medicine, NUS"
                />
            </div>
        </div>
      </section>

      {/* 7. Closing Statement */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="mb-8 flex justify-center">
                 <Star className="w-8 h-8 text-[#991b1b] opacity-80" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-normal font-serif italic">
                “Together, we look forward to nurturing the next generation of neuroscience enthusiasts and future biomedical leaders through Brain Bee 2026.”
             </h2>
        </div>
      </section>
    </div>
  );
};

const FactCard = ({ icon, label, sublabel }: { icon: React.ReactNode; label: string; sublabel: string }) => (
    <div className="bg-white p-5 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center space-x-4 hover:border-red-100 transition-colors h-full">
        <div className="p-3 bg-red-50 rounded-lg shrink-0 text-[#991b1b]">
            {icon}
        </div>
        <div>
            <div className="font-bold text-slate-900 leading-tight text-sm md:text-base">{label}</div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">{sublabel}</div>
        </div>
    </div>
);

const ProgrammeCard = ({ step, icon, title, description }: { step: string; icon: React.ReactNode; title: string; description: React.ReactNode }) => (
    <div className="bg-slate-50 rounded-2xl p-8 relative overflow-hidden group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 h-full flex flex-col">
        <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-slate-300 select-none">
            {step}
        </div>
        <div className="w-12 h-12 bg-[#991b1b] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform shrink-0">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed font-serif text-sm flex-grow">
            {description}
        </p>
    </div>
);

const CommitteeCard = ({ name, role, subRole, dept }: { name: string; role: string; subRole: string; dept: string }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col h-full text-center items-center">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 mx-auto group">
            <Users className="w-10 h-10 text-slate-400 group-hover:text-[#991b1b] transition-colors" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3">{name}</h3>
        
        <div className="mb-4 flex flex-col items-center gap-2">
            <span className="inline-block px-4 py-1.5 bg-[#991b1b] text-white text-sm font-bold rounded-full tracking-wide shadow-sm">
                {role}
            </span>
            <div className="text-slate-500 text-sm font-medium mt-1">{subRole}</div>
        </div>
        
        <div className="w-12 h-px bg-slate-100 mx-auto mb-4 mt-auto"></div>
        <p className="text-slate-500 text-xs leading-relaxed">{dept}</p>
    </div>
);
