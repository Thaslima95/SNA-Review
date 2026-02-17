import React from "react";
import {
  Calendar,
  MapPin,
  Download,
  ExternalLink,
  Info,
  Sun,
  ShieldAlert,
  FileText,
  Globe,
  Mail,
  Users,
  Mic,
} from "lucide-react";
import posterImage from "@/assets/Poster1_SNA Symposium 2026-v7r.jpg";

// --- Type Definitions for Reusability ---
export interface CommitteeGroup {
  role: string;
  members: string[];
}

export interface Speaker {
  name: string;
  institution: string;
  country: string;
}

export interface SymposiumData {
  year: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  posterUrl: string;
  overview: React.ReactNode;
  registrationLink?: string;
  registrationStatus?: string; // e.g. "Registration details to be shared soon"
  flyerLink?: string;
  committee?: CommitteeGroup[];
  speakers?: Speaker[];
  conferenceInfo: {
    language: string;
    weather: string;
    visaInfo: string;
    visaLink?: string;
    safetyInfo: string;
    disclaimer: string;
  };
  venue: {
    name: string;
    address: string;
    mapLink: string;
  };
  contact: {
    email: string;
    address: string[];
  };
  closingQuote?: string;
}

// --- Default Example Data (Updated for 2026) ---
const defaultSymposiumData: SymposiumData = {
  year: "2026",
  title: "Neuroscience Across the Lifespan",
  subtitle:
    "Neurodevelopment, Longevity and Mental Health",
  date: "June 30 – July 1, 2026",
  location: "MD11, CRC Auditorium, NUS Medicine",
  posterUrl: posterImage,
  overview: (
  <>
    {/* Highlight Row */}
   {/* Highlight Row */}
<div className="mt-6 mb-8 space-y-4">

  <div className="flex flex-wrap items-center gap-4">
    <span className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold rounded-full">
      <span className="mr-2">📅</span>
      30 June–1 July 2026
    </span>

    <span className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
      <span className="mr-2">📍</span>
      MD11, CRC Auditorium, NUS Medicine
    </span>
  </div>

  <div>
    <span className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full">
      <span className="mr-2">💰</span>
      Academic Registration is Free
    </span>
  </div>

</div>


    <p className="mb-4">
      Join us at the{" "}
      <span className="font-semibold text-slate-900">
        Neuroscience Across the Lifespan Symposium
      </span>{" "}
      (30 June–1 July 2026, MD11, CRC Auditorium, NUS Medicine), organized by{" "}
      <span className="font-semibold">
        Singapore Neuroscience Association
      </span>{" "}
      and the Department of Anatomy, NUS Medicine.
    </p>

    <p className="mb-4">
      Across two days, the symposium will explore topics ranging from{" "}
      <span className="font-medium text-slate-900">
        neurodevelopment to aging and longevity
      </span>
      , bringing together local and international experts for enriching scientific exchange.
    </p>

    <p>
      Academic registration is{" "}
      <span className="font-semibold text-emerald-700">
        free
      </span>
      , and we welcome trainee and early-career abstracts for poster presentations, with selected submissions invited for short oral presentations in our{" "}
      <span className="font-semibold text-red-700">
        Young Scientist Oral Session
      </span>{" "}
      (poster and abstract details shall be shared to interested registrants). Queries can be submitted during registration at{" "}
    
<a
  href="https://bit.ly/snasymposium2026"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold text-red-600 underline decoration-2 underline-offset-4 hover:text-red-700"
>
  https://bit.ly/snasymposium2026
</a>


    </p>

    {/* Optional CTA Button (can keep or remove) */}
    <a
      href="https://bit.ly/snasymposium2026"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
    >
      Register Now
    </a>
  </>
),


  registrationLink: "https://bit.ly/snasymposium2026",
  // registrationStatus: "Registration details to be shared soon", // Removed to show button
  speakers: [
    {
      name: "Prof Long-Jun Wu",
      institution: "University of Texas Health Science Center",
      country: "USA",
    },
    {
      name: "A/Prof Priya Rajasethupathy",
      institution: "Rockefeller University",
      country: "USA",
    },
    {
      name: "Prof Kazunori Nakajima",
      institution: "Keio University School of Medicine",
      country: "Japan",
    },
    {
      name: "A/Prof Helen Zhou",
      institution: "NUS Medicine",
      country: "Singapore",
    },
    {
      name: "Prof Marie-Eve Tremblay",
      institution: "University of Victoria",
      country: "Canada",
    },
    {
      name: "Dr Leena Ali Ibrahim",
      institution:
        "King Abdullah University of Science and Technology (KAUST)",
      country: "Saudi Arabia",
    },
    {
      name: "Prof Anthony J Hannan",
      institution: "University of Melbourne",
      country: "Australia",
    },
    {
      name: "Dr Jai Polepalli",
      institution: "NUS Medicine",
      country: "Singapore",
    },
    {
      name: "Prof Anirban Basu",
      institution: "BRIC - National Brain Research Center",
      country: "India",
    },
    {
      name: "Dr John Chua",
      institution: "NUS Medicine",
      country: "Singapore",
    },
    {
      name: "A/Prof Suraiya A Ansari",
      institution: "UAE University",
      country: "UAE",
    },
    {
      name: "A/Prof Soham Chanda",
      institution: "Colorado State University",
      country: "USA",
    },
    {
      name: "A/Prof Shawn Je",
      institution: "Duke-NUS Medical School",
      country: "Singapore",
    },
    {
      name: "Dr Fu Yu",
      institution: "IMCB A*STAR, NUS",
      country: "Singapore",
    },
    {
      name: "A/Prof Christine Cheung",
      institution: "LKC Medicine, NTU",
      country: "Singapore",
    },
    {
      name: "Dr Aditya Nair",
      institution: "LKC Medicine, NTU",
      country: "Singapore",
    },
    
  ],

  committee: [
  {
    role: "Chairperson",
    members: ["Prof. S. Thameem Dheen"],
  },
  {
    role: "Scientific Committee Chair",
    members: ["Dr. Jai Polepalli","A/P Gavin Dawe","Prof Ong Wei Yi","A/P Dinesh Kumar"],
  },
  {
    role: "Organising Secretary",
    members: ["Dr. Sara Kashkouli Rahmanzadeh"],
  },
  {
    role: "Organising Team",
    members: [
      "Assoc. Prof. Gavin Dawe",
      "Prof. Ong Wei Yi",
      "Assoc. Prof. Dinesh Kumar Srinivasan",
      "Dr. Satish R. L.",
      "Dr. K. Jayabharathi",
      "Dr. Kevin Jayaraj",
    ],
  },
]

,
  conferenceInfo: {
    language:
      "The official language of the conference is English.",
    weather:
      "Singapore enjoys a tropical climate (25°C–31°C).",
    visaInfo: "Please check the ICA website for visa requirements.",
    visaLink: "https://www.ica.gov.sg",
    safetyInfo:
      "Singapore is a safe city; standard precautions apply.",
    disclaimer:
      "Organisers are not liable for personal injury, accidents or loss of property.",
  },
  venue: {
    name: "MD11, CRC Auditorium",
    address: "NUS Medicine, National University of Singapore",
    mapLink:
      "https://maps.google.com/?q=MD11+CRC+Auditorium+NUS",
  },
  contact: {
    email: "secretariat@neuroscience.sg",
    address: [
      "Singapore Neuroscience Association",
      "c/o Department of Anatomy",
      "Yong Loo Lin School of Medicine",
      "National University of Singapore",
    ],
  },
};

interface SymposiumTemplateProps {
  data?: SymposiumData;
}

export const SymposiumTemplate: React.FC<
  SymposiumTemplateProps
> = ({ data = defaultSymposiumData }) => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* 1. Page Banner (Matches Seminars) */}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Symposium
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
             Annual meeting of the Singapore Neuroscience Association
          </p>
        </div>
      </div>

      {/* 2. Symposium Details Section (Original Content) */}
      <div className="bg-white border-b border-slate-100 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            {/* Poster Image Placement - Uncropped / Fit */}
            <div className="w-full md:w-5/12 shrink-0">
              <div className="bg-white p-2 rounded-xl shadow-2xl border border-slate-100 transform hover:scale-[1.01] transition-transform duration-500">
                <div className="bg-white rounded-lg overflow-hidden relative">
                  {data.posterUrl ? (
                    <img
                      src={data.posterUrl}
                      alt={`SNA Symposium ${data.year} Poster`}
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64 text-slate-400 text-sm bg-slate-100">
                      Poster Image
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left ">
              <div className="inline-flex items-center space-x-2 bg-red-50 text-[#991b1b] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                <Calendar className="w-4 h-4" />
                <span>{data.date}</span>
              </div>

     <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.1] lg:whitespace-nowrap">
  {data.title}
</h1>




              <h2 className="text-xl md:text-2xl text-slate-600 font-light italic font-serif mb-8 border-l-4 border-[#991b1b] pl-6 md:ml-0 inline-block md:block text-left leading-normal">
                {data.subtitle}
              </h2>

              {data.location && (
                <div className="flex items-center justify-center md:justify-start text-slate-500 font-medium mb-10 text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-[#991b1b]" />
                  {data.location}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {data.registrationStatus ? (
                  <div className="inline-flex items-center justify-center bg-slate-100 text-slate-600 px-8 py-3 rounded-lg font-medium border border-slate-200">
                    <Info className="w-4 h-4 mr-2" />
                    {data.registrationStatus}
                  </div>
                ) : (
                  <a
                    href={data.registrationLink}
                    className="inline-flex items-center justify-center bg-[#991b1b] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#7f1d1d] transition-colors shadow-sm"
                  >
                    Register Now
                  </a>
                )}

                {data.flyerLink && (
                  <a
                    href={data.flyerLink}
                    className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:border-[#991b1b] hover:text-[#991b1b] bg-white transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Flyer
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT COLUMN (Main Content) */}
          <div className="lg:col-span-2 space-y-12">
            {/* 2. General Information / About */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <Info className="w-6 h-6 text-[#991b1b]" />
                <h3 className="text-2xl font-bold text-slate-900">
                  About the Symposium
                </h3>
              </div>
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-serif leading-loose">
                {data.overview}
              </div>
            </section>

            {/* Speakers Section */}
            {data.speakers && data.speakers.length > 0 && (
              <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-10">
                <div className="flex items-center space-x-3 mb-8">
                  <Mic className="w-6 h-6 text-[#991b1b]" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Speakers
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.speakers.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col p-4 rounded-lg  border border-slate-100 hover:border-red-100 transition-colors"
                    >
                      <strong className="text-slate-900 font-bold text-lg">
                        {speaker.name}
                      </strong>
                      <span className="text-slate-600 text-sm mt-1">
                        {speaker.institution}
                      </span>
                      <span className="text-[#991b1b] text-xs font-bold uppercase tracking-wide mt-2">
                        {speaker.country}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Organising Committee */}
            {data.committee && data.committee.length > 0 && (
              <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-10">
                <div className="flex items-center space-x-3 mb-8">
                  <Users className="w-6 h-6 text-[#991b1b]" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Organising Committee
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  {data.committee.map((group, index) => (
                    <div
                      key={index}
                      className="break-inside-avoid"
                    >
                      <h4 className="text-sm font-bold text-[#991b1b] uppercase tracking-wider mb-3 border-b border-red-100 pb-2">
                        {group.role}
                      </h4>
                      <ul className="space-y-2">
                        {group.members.map((member, mIdx) => (
                          <li
                            key={mIdx}
                            className="text-slate-700 font-medium text-sm md:text-base"
                          >
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. Conference Venue */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-[#991b1b]" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Conference Venue
                </h3>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {data.venue.name}
                </h4>
                <p className="text-slate-600 mb-6 whitespace-pre-line">
                  {data.venue.address}
                </p>
                <a
                  href={data.venue.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#991b1b] font-semibold hover:underline"
                >
                  View on Map{" "}
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </section>

            {/* Registration Info Block (Bottom) */}
            <section className="bg-red-50 rounded-xl border border-red-100 p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold text-[#991b1b] mb-4">
                Registration
              </h3>
              <p className="text-slate-700 text-lg font-medium">
                {data.registrationStatus ||
                  "Registration is now open."}
              </p>
              {!data.registrationStatus && (
                <a
                  href={data.registrationLink}
                  className="inline-block mt-6 bg-[#991b1b] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#7f1d1d] transition-colors shadow-sm"
                >
                  Register Now
                </a>
              )}
            </section>
          </div>

          {/* RIGHT COLUMN (Sidebar Info) */}
          <div className="lg:col-span-1 space-y-8">
            {/* 5. Conference Information / Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-[#991b1b]" />
                  Essential Information
                </h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Language */}
                <InfoBlock
                  icon={
                    <Globe className="w-4 h-4 text-slate-400" />
                  }
                  title="Language"
                  content={data.conferenceInfo.language}
                />

                {/* Weather */}
                <InfoBlock
                  icon={
                    <Sun className="w-4 h-4 text-slate-400" />
                  }
                  title="Weather"
                  content={data.conferenceInfo.weather}
                />

                {/* Visa */}
                <div className="border-l-2 border-slate-200 pl-4 py-1">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 flex items-center">
                    <FileText className="w-3 h-3 mr-2" /> Visa
                    Requirements
                  </h4>
                  <p className="text-sm text-slate-600 mb-2">
                    {data.conferenceInfo.visaInfo}
                  </p>
                  {data.conferenceInfo.visaLink && (
                    <a
                      href={data.conferenceInfo.visaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#991b1b] hover:underline flex items-center"
                    >
                      Check Requirements{" "}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>

                {/* Safety */}
                <InfoBlock
                  icon={
                    <ShieldAlert className="w-4 h-4 text-slate-400" />
                  }
                  title="Safety"
                  content={data.conferenceInfo.safetyInfo}
                />

                {/* Disclaimer */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Disclaimer:</strong>{" "}
                    {data.conferenceInfo.disclaimer}
                  </p>
                </div>
              </div>

              {/* Contact Widget in Sidebar */}
              <div className="bg-slate-900 p-6 mt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Mail className="w-5 h-5 text-red-400" />
                  <h3 className="text-white font-bold">
                    Contact
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  {data.contact.email}
                </p>
                <div className="text-slate-500 text-xs leading-relaxed">
                  {data.contact.address
                    .slice(0, 2)
                    .map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Footer / Closing Section */}
      {data.closingQuote && (
        <div className="bg-white border-t border-slate-100 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-xl md:text-2xl font-serif italic text-slate-500 leading-relaxed">
              "{data.closingQuote}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper Component for Sidebar Info
const InfoBlock = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="border-l-2 border-slate-200 pl-4 py-1">
    <div className="flex items-center mb-1">
      {icon}
      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-2">
        {title}
      </h4>
    </div>
    <p className="text-sm text-slate-600 leading-relaxed">
      {content}
    </p>
  </div>
);