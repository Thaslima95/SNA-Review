import React from "react";
import {
  Clock,
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Users,
  Zap,
  Medal,
  Star,
  Flag,
  UserCheck,
  ScrollText,
  Calendar,
} from "lucide-react";

export const History = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* 1. Page Banner */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        {/* Subtle Network Pattern Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1765046255517-412341954c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGFic3RyYWN0JTIwbmV1cmFsJTIwbmV0d29yayUyMGxpbmVzJTIwd2hpdGUlMjBiYWNrZ3JvdW5kJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAxODczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(120%)",
          }}
        ></div>

        {/* Decorative Gradients for Soft Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Our History
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Three decades of advancing neuroscience research,
            education, and collaboration in Singapore.
          </p>
        </div>
      </div>

      {/* 2. Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">
          About the Singapore Neuroscience Association
        </h2>
        <div className="prose prose-lg prose-slate mx-auto font-serif leading-loose text-slate-700">
          <p>
            The Singapore Neuroscience Association (SNA) was
            established quietly on 29 January 1988 by Dr
            Laurence Garey and Dr Tan Choon Kim, and was
            formally published in the Singapore Government
            Gazette on 9 September 1988.
          </p>
          <p>
            In 2013, SNA commemorated its Silver Jubilee,
            marking 25 years of service to the neuroscience
            community. Today, the association continues to serve
            as a pivotal platform for fostering dialogue,
            collaboration, and advancement in both basic and
            clinical neuroscience disciplines across Singapore.
          </p>
        </div>
      </section>

      {/* 3. Key Milestones Timeline Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center text-slate-900 tracking-tight">
            Key Milestones
          </h2>

          <div className="relative">
            {/* Vertical Center Line (Desktop) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 md:-translate-x-1/2"></div>

            <div className="space-y-16 md:space-y-24">
              <TimelineItem
                year="1988"
                title="Foundation of SNA"
                desc="Established on 29 January 1988 by Dr Laurence Garey and Dr Tan Choon Kim; formally published in the Singapore Government Gazette on 9 September 1988."
                alignment="right"
                icon={<Flag className="w-5 h-5 text-white" />}
              />
              <TimelineItem
                year="1991"
                title="Leadership Transition"
                desc="Dr Tan Choon Kim became the second President of SNA, continuing the vision of the founding members."
                alignment="left"
                icon={
                  <UserCheck className="w-5 h-5 text-white" />
                }
              />
              <TimelineItem
                year="1994"
                title="Third Presidency"
                desc="Professor Ling Eng Ang assumed the presidency as the third President, expanding the association's academic reach."
                alignment="right"
                icon={<Users className="w-5 h-5 text-white" />}
              />
              <TimelineItem
                year="1998"
                title="Fourth Presidency"
                desc="Leadership passed to Associate Professor Samuel S.W. Tay, steering the association into the new millennium."
                alignment="left"
                icon={
                  <UserCheck className="w-5 h-5 text-white" />
                }
              />
              <TimelineItem
                year="2009"
                title="Continued Leadership"
                desc="Professor S. Thameem Dheen succeeded as President of SNA, emphasizing international collaboration and research excellence."
                alignment="right"
                icon={<Award className="w-5 h-5 text-white" />}
              />
              <TimelineItem
                year="2011"
                title="Brain Bee Initiative"
                desc="SNA appointed Singapore Coordinator of the International Brain Bee Challenge and launched the National Brain Bee Challenge to inspire youth."
                alignment="left"
                icon={<Zap className="w-5 h-5 text-white" />}
              />
              <TimelineItem
                year="2013"
                title="Silver Jubilee"
                desc="SNA commemorated its 25th anniversary, celebrating a quarter-century of contributions to the neuroscience community."
                alignment="right"
                icon={<Medal className="w-5 h-5 text-white" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Highlights & Impact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">
          Highlights & Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <ImpactCard
            icon={<Users className="w-8 h-8 text-[#991b1b]" />}
            title="Advancing Neuroscience"
            items={[
              "Fostering dialogue and collaboration across basic and clinical disciplines",
              "Unifying Singapore’s neuroscience community",
            ]}
          />

          {/* Card 2 */}
          <ImpactCard
            icon={<Globe className="w-8 h-8 text-[#991b1b]" />}
            title="Global Engagement"
            items={[
              "Affiliated with International Brain Research Organization (IBRO)",
              "Affiliated with FAONS",
              "President serves on the Governing Councils of IBRO and FAONS",
            ]}
          />

          {/* Card 3 */}
          <ImpactCard
            icon={<Zap className="w-8 h-8 text-[#991b1b]" />}
            title="Brain Bee & Youth"
            items={[
              "Organizer of the Singapore Brain Bee Challenge",
              "Motivating high school students to pursue neuroscience",
              "Winners receive trophies, cash awards, and international travel fellowships",
            ]}
          />

          {/* Card 4: Supporting Excellence & Fellowships */}
          <ImpactCard
            icon={<Star className="w-8 h-8 text-[#991b1b]" />}
            title="Supporting Excellence & Fellowships"
            items={[
              "Travel fellowships for international conference participation",
              "Awarded multiple travel fellowships to deserving members for participation in international neuroscience conferences",
              "Support from private-sector donations",
              "Activities supported through donations from the private sector",
            ]}
          />

          {/* Card 5: Seminars & Conferences */}
          <ImpactCard
            icon={
              <BookOpen className="w-8 h-8 text-[#991b1b]" />
            }
            title="Seminars & Conferences"
            items={[
              "Organized numerous neuroscience seminars",
              "Hosted international and regional neuroscience conferences",
              "Events conducted independently and jointly with the Department of Anatomy and the Microscopy Society of Singapore",
            ]}
          />
        </div>
      </section>

      {/* 5. Awards & Honors Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
              <Medal className="w-8 h-8 text-[#991b1b]" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Awards & Honors
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              Recognizing excellence and leadership in
              neuroscience while maintaining clarity,
              completeness, and archival accuracy.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Lifetime Achievement Block */}
            <div className="p-8 md:p-12 border-b border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <h3 className="text-xl font-bold text-[#991b1b] mb-4 uppercase tracking-wide text-center relative z-10">
                Lifetime Achievement Awards
              </h3>
              <p className="text-slate-500 text-center mb-10 font-serif italic relative z-10 max-w-2xl mx-auto">
                Presented to the following individuals for
                outstanding and sustained contributions to
                neuroscience in Singapore
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 max-w-2xl mx-auto relative z-10">
                {[
                  "Professor Ling Eng Ang",
                  "Professor Barry Halliwell",
                  "Professor Peter Wong",
                  "Professor Soong Tuck Wah",
                  "Professor George Augustine",
                ].map((name) => (
                  <div
                    key={name}
                    className="flex items-center space-x-4 bg-slate-50 p-3 rounded-lg hover:bg-red-50/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#991b1b] shrink-0"></div>
                    <span className="text-lg text-slate-800 font-medium">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Awards Block */}
            <div className="p-8 md:p-12 bg-slate-50/50">
              <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">
                Distinguished Awards of the Singapore
                Neuroscience Association
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {[
                  "Distinguished Neuroscientist Award",
                  "Excellence in Neuroscience Research Award",
                  "Neuroscience Educator Award",
                  "Woman in Neuroscience Research Award",
                ].map((award) => (
                  <div
                    key={award}
                    className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm hover:shadow-md hover:border-red-100 transition-all"
                  >
                    <span className="text-slate-800 font-medium">
                      {award}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  desc: string;
  alignment: "left" | "right";
  icon: React.ReactNode;
}

const TimelineItem = ({
  year,
  title,
  desc,
  alignment,
  icon,
}: TimelineItemProps) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center md:justify-between group w-full`}
    >
      {/* 1. Date Side (Desktop only - opposite to content) */}
      <div
        className={`hidden md:flex w-[45%] ${alignment === "left" ? "justify-start order-2 pl-12" : "justify-end order-1 pr-12"}`}
      >
        <div className="flex items-center space-x-4">
          <span
            className={`text-5xl font-bold text-slate-400 group-hover:text-[#991b1b]/20 transition-colors duration-500`}
          >
            {year}
          </span>
        </div>
      </div>

      {/* 2. Center Node */}
      <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 order-2 md:order-none">
        <div className="w-10 h-10 rounded-full bg-[#991b1b] border-4 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* 3. Content Side */}
      <div
        className={`w-full md:w-[45%] pl-16 md:pl-0 ${alignment === "left" ? "md:pr-12 order-1 md:text-right" : "md:pl-12 order-3 md:text-left"}`}
      >
        <div
          className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden`}
        >
          {/* Mobile Year Badge */}
          <div className="md:hidden inline-block px-3 py-1 bg-red-50 text-[#991b1b] text-xs font-bold rounded-full mb-4">
            {year}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#991b1b] transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 font-serif leading-relaxed text-sm md:text-base">
            {desc}
          </p>

          {/* Decorative Corner accent */}
          <div
            className={`absolute top-0 w-2 h-full bg-[#991b1b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${alignment === "left" ? "right-0" : "left-0"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ImpactCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-red-50 transition-all duration-300 h-full flex flex-col">
      <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">
        {title}
      </h3>
      <ul className="space-y-4 flex-grow">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start text-slate-600 text-sm font-serif leading-relaxed"
          >
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-[#991b1b] rounded-full shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};