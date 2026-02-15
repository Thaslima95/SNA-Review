import React from "react";
import { FileText } from "lucide-react";

export const ResearchHighlights = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* ================= HERO BANNER ================= */}
      <div className="bg-gradient-to-br from-[#991b1b] via-[#7f1d1d] to-[#991b1b]">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 text-white rounded-full">
              Research Highlights
            </span>
            <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 text-white rounded-full">
              Featured Interview
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Professor Barry Halliwell
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl">
            A radical reformist of NUS Research landscape
          </p>

          <p className="text-white/80 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            An interview by Ms Shweta Jadhav and Ms Madhuvika Murugan
          </p>

        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Career Milestones */}
          <h3 className="text-xl font-semibold text-slate-900 mb-8">
            Career Milestones
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-20">

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <span className="text-sm font-semibold text-[#991b1b]">1970s</span>
              <p className="text-sm text-slate-600 mt-2">
                Prof Halliwell started his journey with free radicals research in 1970s and published a number of articles in internationally reputed journals.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <span className="text-sm font-semibold text-[#991b1b]">1974</span>
              <p className="text-sm text-slate-600 mt-2">
                Moved to King's College, London as an Assistant Professor to work in free radicals and antioxidants.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <span className="text-sm font-semibold text-[#991b1b]">1998</span>
              <p className="text-sm text-slate-600 mt-2">
                Went on sabbatical to the National University of Singapore (NUS) and remained in Singapore.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <span className="text-sm font-semibold text-[#991b1b]">Lifetime Achievement Award</span>
              <p className="text-sm text-slate-600 mt-2">
                Honoured by the Society for Free Radical Biology and Medicine in the USA.
              </p>
            </div>

          </div>

          {/* FULL ARTICLE CONTENT */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-10 space-y-8 text-slate-700 leading-relaxed text-justify">

            <p>
              Professor Barry Halliwell is a man who constantly transforms the research landscape at the National University of Singapore where he is rightly placed in the University Hall as the Deputy President for Research & Technology and as the Tan Chin Tuan Centennial Professor of Biochemistry. He has garnered international attention for his work in the field of Free Radical Biology in the 90s and at the right time, was spotted on the radar of NUS which has always been eyeing for top international talents. NUS's decision was right as he has already helped drive the development of the Life Sciences/Translational Medicine initiatives at NUS over the past ten years and is now driving initiatives in ageing research. In fact, Prof Halliwell started his journey with free radicals research in 1970s and published a number of articles in internationally reputed journals. Recently, he was honoured with the 'Lifetime Achievement Award' by the Society for Free Radical Biology and Medicine in the USA for overall sustained excellence in the field. His laboratory is also ranked number as 1 worldwide with the highest citation score in Free Radical Research. Despite his busy schedule, he readily accepted to meet us when approached him for this interview. Read on to know the story of a boy from a 'working class' background, who went on to become the number 1 scientist in free radical research.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Modest Beginnings...
            </h3>

            <p>
              Prof Halliwell was born in a small textile town, Preston in the North of England into a working class family. Although he came from a 'working class' background, he was fortunate to have parents who believed in quality education. When he was in school, he was always interested in both humanities and sciences but later chose Science as his career. He joined St Catherine's College at Oxford University to study biochemistry with a scholarship. His 4 year stint in St Catherine's gave him a deep grounding in Chemistry and shaped his future career as he states that "the Oxford course, unlike many Biochemistry courses today, had a deep grounding in Chemistry, which I have found enormously useful in the free radical field. Some knowledge of Chemistry helps one to challenge the alleged miraculous properties of certain 'antioxidants' by showing that they have no chemical basis." In his final year at St Catherine's, Prof Halliwell was exposed to Plant Biochemistry which he enjoyed so much and inspired him to do a D.Phil in the Botany School under the able supervision of Prof Vernon Butt and Prof Bob Whatley. He worked on photorespiration, the pathway that plants use to recycle 2-carbon compounds accidently sent into the wrong metabolic process when O2 instead of CO2 reacts in the first step of the Calvin cycle.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Early years in Research
            </h3>

            <p>
              In 1974, Prof Halliwell moved to King's College, London as an Assistant Professor with determination to work in the relatively unexplored field of free radicals and antioxidants. Prof Halliwell found London and its environs a very enriching place to conduct fundamental research in free radical biology along with his long-time colleague, Prof John Gutteridge. In the 1980s' during his academic career at King's College, Prof Halliwell spent a year long sabbatical at the University of California-Davis where he had a chance to interact and collaborate with Prof Carroll Cross and Prof Bruce Ames's groups on how air pollutants interact with human tissues to cause oxidative damage. As a result of this fruitful collaboration, the one-year sabbatical stretched into five years! Upon his return to London, Prof Halliwell continued to excel in research and climbed up the academic ladder to become a Professor. In 1998, Prof Halliwell went on another sabbatical to the National University of Singapore (NUS). This time he did not go back to London and is still in Singapore. "I am contemplating yet another sabbatical, probably a dangerous thing to do" quips Prof Halliwell.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Prof Halliwell and National University of Singapore
            </h3>

            <p>
              Prof Halliwell came to Singapore as a Visiting Professor in the Department of Biochemistry, Yong Loo Lin School of Medicine, National University of Singapore. He was awarded the prestigious Tan Chin Tuan Centennial Professorship in July 2006. Open to local and foreign academic staff of NUS, the Tan Chin Tuan Professorships at NUS are amongst the most prestigious professorships at the University and are bestowed upon academics that have demonstrated an exceptional level of achievement in their field of study, and made significant contributions to the academic policies and programmes of their university. "I believe Singapore is a remarkable place, dedicated to in- vestment in education and research, which has helped trans- form this small country with no natural resources into an economic powerhouse" says Prof Halliwell. Currently, Prof Halliwell"s laboratory is pursuing research in nutritional antioxidants, mechanisms of neurodegeneration, role of iron and zinc in atherosclerosis and mechanisms of ageing.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Neuroscience in Singapore
            </h3>

            <p>
              "I feel neuroscience is a key research area in Singapore due to the significant ageing population here" says Prof Halliwell. Free radical production increases during neuronal damage and ageing. Prof Halliwell states that translating free radical research into drug therapy is tough as animal models have very low predictive value. "Thus identification of free radical biomarkers in patients is the need of the hour" says Prof Halliwell. "My current passions are to find novel and interesting research areas relating top preventing dementia and understanding ageing as well as to develop NUS from a top 40 to a top 20 University".
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Advice to young scientists entering the field
            </h3>

            <p>
              According to Prof Halliwell picking a right lab for graduate studies or post-doc is very important. Apart from a main project which would help the student to get good publications, side projects related to the ongoing work should also be taken up. This would help the student broaden his/her horizons. "Equally important is attending and presenting one's work in International Conferences and learn from the suggestions/criticisms made by the international research community" says Prof Halliwell. Amongst these factors Prof Halliwell also feels it is important to interact with other students, post-docs and academics" who might be facing similar research problems and sometimes find a solution! "I have learnt a lot from everywhere I go. It's good to move around. Singapore is an excellent research environment and a great place to live, but free radicals tend to have a short life- time in one place and spark chain reactions. I hope to spark a few more things yet." With this, Prof Halliwell signs off.
            </p>

          </div>

          {/* Footer */}
          <div className="text-center border-t border-slate-200 pt-8 mt-16">
            <p className="text-sm text-slate-500 italic">
              A few selected and recent publications of SNA members:
              <br />
              Will be updated soon.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
