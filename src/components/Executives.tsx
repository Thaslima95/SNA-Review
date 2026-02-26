import React, { useEffect, useState } from "react";
import { Mail, Copy, Linkedin } from "lucide-react";
import { useLocation } from "react-router-dom";

import thameem from "@/assets/executives/thameem-2.png";
import gavin from "@/assets/executives/gavin.jpg";
import sara from "@/assets/executives/sara.jpg";
import deepika from "@/assets/executives/deepika.jpg";
import ong from "@/assets/executives/ong.jpg";
import dinesh from "@/assets/executives/dinesh-2.png";
import jai from "@/assets/executives/jai-2.png";
import satish from "@/assets/executives/satish.jpg";
import jayabharathi from "@/assets/executives/jayabharathi.jpg";
import kevin from "@/assets/executives/kevin-2.png";

interface Executive {
  name: string;
  role: string;
  affiliation: string;
  img: string;
  email?: string;
  linkedin?: string;
}

const executives: Executive[] = [
  {
    name: "Prof. S. Thameem Dheen",
    role: "President",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: thameem,
    email: "antstd@nus.edu.sg",
  },
  {
    name: "Assoc. Prof. Gavin Dawe",
    role: "Vice President",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: gavin,
    email: "phcdgs@nus.edu.sg",
  },
  {
    name: "Dr. Sara Kashkouli Rahmanzadeh",
    role: "Secretary",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: sara,
    email: "antskr@nus.edu.sg",
  },
  {
    name: "Dr. Deepika Kandilya",
    role: "Treasurer",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: deepika,
    email: "antdk@nus.edu.sg",
  },
  {
    name: "Prof. Ong Wei Yi",
    role: "Council Member",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: ong,
    email: "antongwy@nus.edu.sg",
  },
  {
    name: "Assoc. Prof. Dinesh Kumar Srinivasan",
    role: "Council Member",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: dinesh,
    email: "antdine@nus.edu.sg",
  },
  {
    name: "Dr. Jai Polepalli",
    role: "Council Member",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: jai,
    email: "antjsp@nus.edu.sg",
  },
  {
    name: "Dr. Satish R. L.",
    role: "Council Member",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: satish,
    email: "antslr@nus.edu.sg",
  },
  {
    name: "Dr. K. Jayabharathi",
    role: "Auditor",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: jayabharathi,
    email: "antkj@nus.edu.sg",
  },
  {
    name: "Dr. Kevin Jayaraj",
    role: "Auditor",
    affiliation: "NUS Yong Loo Lin School of Medicine",
    img: kevin,
    email: "kevinjayaraj@nus.edu.sg",
  },
];

 const Executive = () => {
  const location = useLocation();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Smooth scroll + highlight when URL has hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          element.classList.add(
            "ring-4",
            "ring-[#991b1b]",
            "ring-offset-4",
            "transition-all",
            "duration-500"
          );

          setTimeout(() => {
            element.classList.remove(
              "ring-4",
              "ring-[#991b1b]",
              "ring-offset-4"
            );
          }, 3000);
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Banner */}
      <div className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAzNjEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(120%)",
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Executive Committee
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 font-light">
            The dedicated scientists and clinicians guiding the strategic direction
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec, idx) => {
              const slug = exec.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/\./g, "");

              return (
                <div
                  id={slug}
                  key={idx}
                  className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center p-8"
                >
                  {/* Image */}
                  <div className="mb-6">
                    <div className="w-48 h-56 overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-sm">
                      <img
                        src={exec.img}
                        alt={exec.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center flex flex-col flex-grow w-full">
                    <div className="h-20 flex items-start justify-center">
                      <h3 className="text-2xl font-serif font-bold leading-tight">
                        {exec.name}
                      </h3>
                    </div>

                    <p className="text-[#991b1b] font-semibold text-sm uppercase mt-2">
                      {exec.role}
                    </p>

                    <p className="text-slate-600 text-sm mt-3">
                      {exec.affiliation}
                    </p>

                    {/* Contact */}
                    {exec.email && (
                      <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-slate-600 relative">
                        <a
                          href={`mailto:${exec.email}`}
                          className="text-slate-400 hover:text-[#991b1b]"
                        >
                          <Mail size={18} strokeWidth={1.5} />
                        </a>

                        <span>{exec.email}</span>

                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(exec.email!);
                            setCopiedEmail(exec.email!);
                            setTimeout(() => setCopiedEmail(null), 2000);
                          }}
                          className="text-slate-400 hover:text-[#991b1b]"
                        >
                          <Copy size={18} strokeWidth={1.5} />
                        </button>

                        {copiedEmail === exec.email && (
                          <span className="absolute -top-10 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-md shadow-lg">
                            Copied
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Executive;
