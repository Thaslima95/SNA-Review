import React from 'react';
import { FileText, Calendar, Award, Quote, BookOpen, Clock, MapPin } from 'lucide-react';

export const ResearchHighlights = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* 1. Page Banner */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAzNjEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(120%)",
          }}
        ></div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 drop-shadow-sm">
            Research Highlights
          </h1>
          <div className="w-24 h-1.5 bg-[#991b1b] mx-auto mb-8 rounded-full shadow-sm"></div>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
            Showcasing groundbreaking neuroscientific research and discoveries from our community.
          </p>
        </div>
      </div>

      <section id="research-highlights" className="py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Article Header */}
          <div className="mb-14 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#991b1b] uppercase bg-red-50 rounded-full border border-red-100">
              Featured Interview
            </div>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Professor Barry Halliwell
            </h2>
            <h3 className="text-2xl md:text-3xl font-serif text-slate-500 italic mb-8 leading-snug">
              “A radical reformist of the NUS Research landscape”
            </h3>
            
            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-200">
              <div className="flex items-center text-slate-700 text-sm font-semibold">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3 text-slate-400">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wide font-normal">Interview By</span>
                  Ms Shweta Jadhav & Ms Madhavika Murugan
                </div>
              </div>
              <div className="hidden md:block w-px h-10 bg-slate-200"></div>
              <div className="flex items-center text-slate-700 text-sm font-medium">
                <Clock className="w-4 h-4 mr-2 text-[#991b1b]" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Career Milestones Grid */}
          <div className="mb-16">
            <h4 className="flex items-center text-sm font-bold text-slate-900 mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#991b1b] rounded-full mr-3"></span>
              Career Milestones
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MilestoneCard 
                year="1970s"
                title="The Beginning"
                icon={<BookOpen className="w-5 h-5" />}
                text="Started journey with free radicals research, publishing articles in internationally reputed journals."
              />
              <MilestoneCard 
                year="1974"
                title="King's College"
                icon={<MapPin className="w-5 h-5" />}
                text="Moved to London as an Assistant Professor to pioneer work in free radicals and antioxidants."
              />
              <MilestoneCard 
                year="1998"
                title="Singapore"
                icon={<Calendar className="w-5 h-5" />}
                text="Sabbatical at the National University of Singapore (NUS), leading to a permanent shift."
              />
              <MilestoneCard 
                year="Awarded"
                title="Lifetime Achievement"
                icon={<Award className="w-5 h-5" />}
                text="Honoured by the Society for Free Radical Biology and Medicine (USA) for sustained excellence."
                isHighlight
              />
            </div>
          </div>

          {/* Main Article Content */}
                {/* Main Article Content */}
          <article className="bg-white p-8 md:p-16 lg:p-20 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-50 to-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto relative z-10">
              
              {/* Drop Cap Intro Paragraph */}
              <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose text-slate-600 
                first-letter:text-7xl first-letter:font-bold first-letter:text-[#991b1b] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:font-sans">
                <p className="lead text-2xl text-slate-800 font-medium tracking-tight mb-12">
                  Professor Barry Halliwell is a man who constantly transforms the research landscape at the National University of Singapore where he is rightly placed in the University Hall as the Deputy President for Research & Technology and as the Tan Chin Tuan Centennial Professor.
                </p>
                
                <p className="mb-12">
                  He has garnered international attention for his work in the field of Free Radical Biology in the 90s and at the right time, was spotted on the radar of NUS which has always been eyeing for top international talents. NUS's decision was right as he has already helped drive the development of the Life Sciences/Translational Medicine initiatives at NUS over the past ten years and is now driving initiatives in ageing research. In fact, Prof Halliwell started his journey with free radicals research in 1970s and published a number of articles in internationally reputed journals. Recently, he was honoured with the 'Lifetime Achievement Award' by the Society for Free Radical Biology and Medicine in the USA for overall sustained excellence in the field. His laboratory is also ranked number 1 worldwide with the highest citation score in Free Radical Research. Despite his busy schedule, he readily accepted to meet us when approached him for this interview. Read on to know the story of a boy from a 'working class' background, who went on to become the number 1 scientist in free radical research.
                </p>
              </div>

              {/* Decorative Divider */}
              <div className="w-16 h-1 bg-red-50 mx-auto my-12 rounded-full"></div>

              {/* Section 1 */}
              <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose text-slate-600">
                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-6 flex items-center tracking-tight">
                  <span className="w-1.5 h-8 bg-[#991b1b] rounded-full mr-4"></span>
                  Modest Beginnings...
                </h3>
                <p className="mb-8">
                  Prof Halliwell was born in a small textile town, Preston in the North of England into a working class family. Although he came from a 'working class' background, he was fortunate to have parents who believed in quality education. When he was in school, he was always interested in both humanities and sciences but later chose Science as his career. He joined St Catherine's College at Oxford University to study Biochemistry with a scholarship. His 4 year stint in St Catherine's gave him a deep grounding in Chemistry and shaped his future career as he states:
                </p>
                
                <blockquote className="border-l-4 border-[#991b1b] pl-6 py-2 my-10 bg-slate-50/50 rounded-r-xl not-italic relative">
                   <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#991b1b] fill-current opacity-20 transform -scale-x-100" />
                   <p className="text-xl text-slate-800 font-medium italic leading-relaxed">
                    “The Oxford course, unlike many Biochemistry courses today, had a deep grounding in Chemistry, which I have found enormously useful in the free radical field. Some knowledge of Chemistry helps one to challenge the alleged miraculous properties of certain 'antioxidants' by showing that they have no chemical basis.”
                  </p>
                </blockquote>

                <p className="mb-12">
                  In his final year at St Catherine's, Prof Halliwell was exposed to Plant Biochemistry which he enjoyed so much and inspired him to do a D.Phil in the Botany School under the able supervision of Prof Vernon Butt and Prof Bob Whatley. He worked on photorespiration, the pathway that plants use to recycle 2-carbon compounds accidently sent into the wrong metabolic process when O2 instead of CO2 reacts in the first step of the Calvin cycle.
                </p>
              </div>

              {/* Section 2 */}
              <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose text-slate-600">
                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-6 flex items-center tracking-tight">
                  <span className="w-1.5 h-8 bg-[#991b1b] rounded-full mr-4"></span>
                  Early years in Research
                </h3>
                <p className="mb-8">
                  In 1974, Prof Halliwell moved to King's College, London as an Assistant Professor with determination to work in the relatively unexplored field of free radicals and antioxidants. Prof Halliwell found London and its environs a very enriching place to conduct fundamental research in free radical biology along with his long-time colleague, Prof John Gutteridge. In the 1980s' during his academic career at King's College, Prof Halliwell spent a year long sabbatical at the University of California-Davis where he had a chance to interact and collaborate with Prof Carroll Cross and Prof Bruce Ames's groups on how air pollutants interact with human tissues to cause oxidative damage. As a result of this fruitful collaboration, the one-year sabbatical stretched into five years! Upon his return to London, Prof Halliwell continued to excel in research and climbed up the academic ladder to become a Professor. In 1998, Prof Halliwell went on another sabbatical to the National University of Singapore (NUS). This time he did not go back to London and is still in Singapore! 
                  <span className="block mt-6 p-4 bg-red-50 text-[#991b1b] font-medium text-lg border-l-2 border-[#991b1b] rounded-r-lg">
                    “I am contemplating yet another sabbatical, probably a dangerous thing to do,” quips Prof Halliwell.
                  </span>
                </p>
              </div>

              {/* Decorative Divider */}
              <div className="w-16 h-1 bg-red-50 mx-auto my-12 rounded-full"></div>

              {/* Section 3 */}
              <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose text-slate-600">
                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-6 flex items-center tracking-tight">
                  <span className="w-1.5 h-8 bg-[#991b1b] rounded-full mr-4"></span>
                  Prof Halliwell and National University of Singapore
                </h3>
                <p className="mb-8">
                  Prof Halliwell came to Singapore as a Visiting Professor in the Department of Biochemistry, Yong Loo Lin School of Medicine, National University of Singapore. He was awarded the prestigious Tan Chin Tuan Centennial Professorship in July 2006. Open to local and foreign academic staff of NUS, the Tan Chin Tuan Professorships at NUS are amongst the most prestigious professorships at the University and are bestowed upon academics that have demonstrated an exceptional level of achievement in their field of study and made significant contributions to the academic policies and programmes of their university.
                </p>
                
                <blockquote className="border-l-4 border-[#991b1b] pl-6 py-2 my-10 bg-slate-50/50 rounded-r-xl not-italic relative">
                   <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#991b1b] fill-current opacity-20 transform -scale-x-100" />
                   <p className="text-xl text-slate-800 font-medium italic leading-relaxed">
                    “I believe Singapore is a remarkable place, dedicated to investment in education and research, which has helped transform this small country with no natural resources into an economic powerhouse”
                  </p>
                </blockquote>
                
                <p className="mb-12">
                   says Prof Halliwell. Currently, Prof Halliwell's laboratory is pursuing research in nutritional antioxidants, mechanisms of neurodegeneration, role of iron and zinc in atherosclerosis and mechanisms of ageing.
                </p>
              </div>

              {/* Section 4 */}
              <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose text-slate-600">
                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-6 flex items-center tracking-tight">
                  <span className="w-1.5 h-8 bg-[#991b1b] rounded-full mr-4"></span>
                  Neuroscience in Singapore
                </h3>
                <p className="mb-8">
                  “I feel neuroscience is a key research area in Singapore due to the significant ageing population here” says Prof Halliwell. Free radical production increases during neuronal damage and ageing. Prof Halliwell states that translating free radical research into drug therapy is tough as animal models have very low predictive value. “Thus identification of free radical biomarkers in patients is the need of the hour” says Prof Halliwell. 
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#991b1b]">
                  <p className="font-medium text-slate-800 text-lg leading-relaxed mb-0">
                    “My current passions are to find novel and interesting research areas relating top preventing dementia and understanding ageing as well as to develop NUS from a top 40 to a top 20 University”.
                  </p>
                </div>
              </div>

              {/* Decorative Divider */}
              <div className="w-16 h-1 bg-red-50 mx-auto my-12 rounded-full"></div>

              {/* Section 5 */}
              <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose text-slate-600">
                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-6 flex items-center tracking-tight">
                  <span className="w-1.5 h-8 bg-[#991b1b] rounded-full mr-4"></span>
                  Advice to young scientists entering the field
                </h3>
                <p className="mb-12">
                  According to Prof Halliwell picking a right lab for graduate studies or post-doc is very important. Apart from a main project which would help the student to get good publications, side projects related to the ongoing work should also be taken up. This would help the student broaden his/her horizons. “Equally important is attending and presenting one's work in International Conferences and learning from the suggestions/criticisms made by the international research community” says Prof Halliwell. Amongst these factors Prof Halliwell also feels it is important to interact with other students, post-docs and academics' who might be facing similar research problems and sometimes find a solution!
                </p>
                
                <div className="bg-[#991b1b] text-white p-10 md:p-12 rounded-2xl relative overflow-hidden shadow-xl shadow-red-900/20 not-prose">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-black opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                  
                  <Quote className="w-12 h-12 text-white/30 mb-6" />
                  <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 relative z-10 text-white/95">
                    “I have learnt a lot from everywhere I go. It's good to move around. Singapore is an excellent research environment and a great place to live, but free radicals tend to have a short life-time in one place and spark chain reactions. I hope to spark a few more things yet.”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-white/50"></div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white/80">Prof. Barry Halliwell</div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Footer Note */}
                   <div className="mt-16 text-center border-t border-slate-200 pt-8">
            <p className="text-slate-400 font-serif text-sm">
              Note: A few selected and recent publications of SNA members will be updated soon.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

const MilestoneCard = ({ 
  year, 
  title,
  icon,
  text, 
  isHighlight = false 
}: { 
  year: string; 
  title: string;
  icon: React.ReactNode;
  text: string; 
  isHighlight?: boolean 
}) => (
  <div className={`p-6 rounded-xl border-2 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
    isHighlight 
      ? 'bg-[#991b1b] border-[#991b1b] text-white shadow-lg shadow-red-900/20' 
      : 'bg-white border-slate-100 hover:border-red-100 hover:shadow-lg hover:shadow-slate-200/50'
  }`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${
        isHighlight ? 'bg-white/20 text-white' : 'bg-red-50 text-[#991b1b]'
      }`}>
        {year}
      </div>
      <div className={isHighlight ? 'text-white/80' : 'text-[#991b1b]'}>
        {icon}
      </div>
    </div>
    
    <h5 className={`text-lg font-bold mb-2 ${
      isHighlight ? 'text-white' : 'text-slate-900'
    }`}>
      {title}
    </h5>
    
    <p className={`font-serif text-sm leading-relaxed flex-grow ${
      isHighlight ? 'text-white/90' : 'text-slate-600'
    }`}>
      {text}
    </p>
  </div>
);
