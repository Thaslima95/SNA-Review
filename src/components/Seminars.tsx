import React, { useState } from 'react';
import { User, Building, FileText, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import dawe from "@/assets/seminar_speakers/dawe.jpg";
import dawe2 from "@/assets/seminar_speakers/dawe-2.jpg";
import girijha from "@/assets/seminar_speakers/girijha.jpg";
import jeff from "@/assets/seminar_speakers/graisman.jpg";
import kaur from "@/assets/seminar_speakers/kaur.jpg";
import kaur2 from "@/assets/seminar_speakers/kaur-2.jpg";
import madu from "@/assets/seminar_speakers/madumika.jfif";

import ling from "@/assets/seminar_speakers/ling.png";
import ling2 from "@/assets/seminar_speakers/ling-2.jpg";
import ranga from "@/assets/seminar_speakers/ranga.jpg";
import ranga2 from "@/assets/seminar_speakers/ranga-2.webp";
import sukku from "@/assets/seminar_speakers/sukku.jpg";
import sukk2 from "@/assets/seminar_speakers/Sukanya-1.jpg";
import wong from "@/assets/seminar_speakers/wong.jpg";
import wong2 from "@/assets/seminar_speakers/wong-2.jfif";

// --- Type Definitions ---
interface Seminar {
  id: number;
  speaker: string;
  affiliation: string;
  title: string;
  abstract: string;
  imageUrl?: string;
}

// --- Sample Data (Populated with provided archived content) ---
const seminarsData: Seminar[] = [
  {
    id: 1,
    speaker: "Assoc Prof Gavin S Dawe",
    affiliation: "Department of Pharmacology, YLL School of Medicine, NUHS",
    title: "A TAG on to novel functions of APP",
    imageUrl: dawe2,
    abstract: "Proteolytic processing of amyloid beta precursor protein (APP) has been linked to the pathology of Alzheimer's disease (AD). Briefly, the ectodomain of APP is shed by alpha- or beta-secretase cleavage. The remaining membrane bound stub can then undergo regulated intramembrane proteolysis (RIP) by gamma-secretase.\n\nThis cleavage can release amyloid beta (Abeta) from the stub left by beta-secretase cleavage but also releases the APP intracellular domain (AICD). While the release of Abeta can contribute to AD pathology, the physiological functions of APP are poorly understood.\n\nComparing the proteolytic processing of APP to the ligand-dependent RIP of Notch, we investigated whether transient axonal glycoprotein 1 (TAG1), a member of the F3/Contactin family of glycophosphatidylinositol (GPI) linked proteins, could trigger APP cleavage and intracellular signalling via release of ACID.\n\nOur results suggest that APP is a receptor for TAG1. TAG1 interaction with APP triggers ligand-dependent cleavage of APP and release of ACID. In fetal murine neural stem cells, this TAG1-APP signalling process represses neurogenesis. The discovery that TAG1, which is expressed transiently along axons during development, interacts with APP led us to re-evaluate the axonal expression of APP.\n\nRecent findings on the axonal distribution of APP and interactions with ion channels will be discussed. These findings suggest novel functions of APP and may be of relevance to the pathophysiology of amyloid deposition in AD."
  },
  {
    id: 2,
    speaker: "Assoc Prof Charanjit Kaur",
    affiliation: "Department of Anatomy, YLL School of Medicine, NUHS",
    title: "Hypoxia induced cellular changes in the developing retina",
     imageUrl:kaur2 ,
    abstract: "Clinical and experimental studies have established that hypoxia is an important factor underlying the genesis of retinopathy especially in infants born prematurely. Vascularization of the retina is incomplete in the premature birth resulting in widespread retinal hypoxia.\n\nOther factors such as compromised pulmonary function and cyanotic heart disease which result in hypoxia are also important aetiological factors in the development of retinopathy which could subsequently result in reduced visual acuity, retinal detachment and blindness.\n\nAlthough some of mechanisms implicated in the genesis of retinopathy have been identified, reports on cellular changes induced by hypoxia in the neural retina are lacking. Our recent investigations have shown that both neurons and glia in the retina are affected by hypoxia.\n\nA thorough understanding of how the different cell types respond to hypoxia is necessary for the development of new therapeutic interventions to prevent loss of vision."
  },
  {
    id: 3,
    speaker: "Dr Wai T Wong",
    affiliation: "Head, Unit on Neuron-Glia Interactions in Retinal Disease, National Eye Institute, NIH",
    title: "Microglia in retina",
     imageUrl:wong2 ,
    abstract: "Retinal microglia share many similarities with those found elsewhere in the CNS, but however, possess some distinguishing features in their morphology, distribution, and neighboring cells types that may relate to specialized functions. Unlike in the brain, ramified retinal microglia are arrayed in the inner retina in non-overlapping horizontal mosaic arrays with their processes are concentrated in the inner and outer plexiform layers in close proximity to retinal synapses.\n\nInterestingly, the outer retina, where photoreceptors and the retinal pigment epithelium (RPE) are located, is normally devoid of microglia coverage. Additionally, microglia are in proximity to, and interact with, specialized retinal cells types, such as Müller cells and RPE cells.\n\nWe are interested in understanding the interactions that retinal microglia have with these specialized retinal cells in the endogenous functioning of the retina."
  },
  {
    id: 4,
    speaker: "Prof Geoffrey Raisman",
    affiliation: "Chair of Neural Regeneration at University College London, UK",
    title: "Repair of the Central Nervous System",
      imageUrl: jeff ,
    abstract: "During development nerve fibres grow to their targets. When they are severed in the adult CNS they fail to regenerate their connections, leading to permanent disability, one of the most dramatic examples being seen after spinal cord injury.\n\nFor decades now, the number of published experimental studies claiming methods to induce cut adult CNS fibers to regenerate must have run into many hundreds a year. And yet paraplegic patients remain confined to wheelchairs.\n\nThis suggests that we are somehow looking in the wrong direction. I propose that the failure to regenerate is not an intrinsic property of adult neurons, and that the fault lies in the inability of the damaged site to provide pathways to allow regenerating fibres to regain their original targets and restore function."
  },
  {
    id: 5,
    speaker: "Prof Eng-Ang Ling",
    affiliation: "Professor, Department of Anatomy, NUS",
    title: "MICROGLIA: A \"Rising Star\" in Neuropathology",
    imageUrl: ling2,
    abstract: "Microglial cells, once considered not even to exist, are now linked to various neurological diseases and disorders including hypoxic periventricular white matter damage (PWMD), cerebral ischemia, traumatic brain injury (TBI), Alzheimer's Disease etc as shown in the series of study by our group in the past four decades.\n\nUntil the 1980s, interest in microglial research, had focused mainly on the identification, structure, origin and mode of formation of the cell type. In this connection, our seminal study in the postnatal rat brain had demonstrated experimentally that the embryonic form of microglia, namely, amoeboid microglia cells (AMC) are derived from circulating monocytes.\n\nWith advancing age, the AMC evolve to become the adult microglia, ramified microglia which persist through the adulthood. Along with this, we have also shown that in the embryonic brain some yolk sac cells may give rise to pial macrophages which infiltrate the neuroepithelium to become AMC before vascularization.\n\nThe characterization of microglia in the developing brain had opened a new vista for subsequent research on microglia. Thus, in the 1980s, a surge in studies was seen which demonstrated that microglia act as a neuropathology sensor responding to both acute and chronic stimuli. It became obvious then that microglia are implicated in various stages of neuroinflammation by releasing a plethora of related factors e.g. TNF-alpha, IL-1beta, chemokines, nitric oxide, reactive oxygen species etc.\n\nTargeting activated microglia by suppressing its activation in alleviating neuroflammation has since been considered as a potential therapeutic strategy. Despite the above, a few fundamental issues have remained to be resolved in microglial research. For example, the molecular mechanisms or genes which regulate the transformation of AMC into ramified microglia in the developing brain have remained to be unraveled.\n\nDifferential gene expression in different states of microgilal activation needs to be investigated both in the developing brain and diseased models. There is only a modicum of information on the so-called \"cross talk\" between microglia and other glial cells e.g. astrocytes, oligodendrocytes or neural stem cells. All this would provide a fuller understanding of the roles of microglia in various neurodegenerative diseases which are expected to gain greater attention and recognition in the next decade."
  },
  {
    id: 6,
    speaker: "Ms Madhuvika Murugan",
    affiliation: "Graduate student, Department of Anatomy, NUS",
    title: "Hypoxia-induced oligodendrocyte death is mediated by N-methyl D-aspartate receptors expressed in amoeboid microglia via NF-kappaB signaling pathway",
    imageUrl: madu,
    abstract: "The present study was focused on identifying the expression of N-methyl D-aspartate receptor (NMDAR) subunits on activated microglia and to determine their role in the pathogenesis of periventricular white matter damage (PWMD) in neonatal rats following hypoxia. The expression and functionality of NMDAR in primary microglial cultures was ascertained.\n\nHypoxia induced the nuclear translocation of NF-kappaB which was suppressed by administration of MK801, an NMDAR antagonist. MK801 also down regulated the hypoxia-induced expression of tumor necrosis factor-alpha, interleukin-1beta, inducible nitric oxide synthase (iNOS) and nitric oxide (NO) production by microglia which may be mediated by the NF-kappaB signalling pathway.\n\nHence microglial NMDAR might be a novel therapeutic target to ameliorate PWMD."
  },
  {
    id: 7,
    speaker: "Ms Guru Girijha R",
    affiliation: "Graduate student, Department of Anatomy, NUS",
    title: "Role of iron and iron regulatory proteins in hypoxic periventricular white matter damage in the neonatal brain",
    imageUrl: girijha,
    abstract: "In the present study, we examined the role of iron in causing periventricular white matter (PWM) damage following a hypoxic injury in the developing brain. Iron regulatory proteins and transferrin receptor which are involved in iron acquisition were found to be increased following hypoxia in oligodendrocytes in the PWM and Perls' iron staining showed an increase of intracellular iron in the oligodendrocytes.\n\nIn primary oligodendroglial cultures' administration of deferoxamine reduced the ROS level and reduced the cell death. The present results suggest that excess iron might mediate oligodendrocyte death in PWM following hypoxia."
  },
  {
    id: 8,
    speaker: "Ms Sukanya Shyamasundar",
    affiliation: "Graduate student, Department of Anatomy, NUS",
    title: "Analysis of epigenetic factors in mouse embryonic neural stem cells exposed to different glucose concentrations",
    imageUrl: sukk2,
    abstract: "Maternal diabetes induces patterning defects in the developing brain during embryogenesis. We hypothesize that maternal diabetes alters the epigenetic mechanisms (namely, histone modifications, DNA methylation and microRNA mediated) and expression of genes involved in various signalling pathways resulting in brain defects in embryos of diabetic mice.\n\nThese findings would provide novel insights into how maternal hyper- or hypo-glycaemia influence the fate of stem cells during development and also ascertain possible therapeutic strategies to prevent functional disturbances in the brain of infants exposed to maternal glucotoxicity or glucose deprivation."
  },
  {
    id: 9,
    speaker: "Professor K Ranga R Krishnan",
    affiliation: "Dean, Duke-NUS Graduate Medical School, Singapore",
    title: "Broken Heart and Silent Strokes",
      imageUrl: ranga2,
    abstract: "Subcortical vascular disease, which may include silent lacunar infarctions or hyperintense lesions, may hypothetically disrupt these circuits. Subcortical ischemic disease is common even in otherwise neurologically normal elderly patients, occurring in both periventricular and deep white matter and in subcortical gray matter nuclei. These vascular changes are an age-related phenomena, as greater lesion severity occurs with aging.\n\nCerebrovascular risk factors, such as hypertension and diabetes, are also strongly linked to subcortical ischemic disease and disease progression, although metabolic factors and specific genetic factors may also contribute toward these findings. Subcortical lesions are more common in elderly depressed than healthy elderly control subjects and more common in late-onset than early-onset elderly depression.\n\nThis difference has also been demonstrated in community populations with depressive symptoms, extending the finding beyond those meeting criteria for major depression. Subcortical lesions are associated with poor antidepressant outcomes and with persistence or worsening of depressive symptoms over time. Poorer depression course is also associated with greater increases in subcortical lesion volume over that time.\n\nThere may also be a biological gradient, wherein lesions contributing to depression need to occur in specific regions. More recently we have related BDNF and AGTR to the development of lesions."
  }
];

export const Seminars = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Seminars
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
            Connecting our community through expert-led discussions on the latest frontiers in neuroscience.
          </p>
        </div>
      </div>

      {/* 2. Seminars List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {seminarsData.map((seminar) => (
            <SeminarCard key={seminar.id} data={seminar} />
          ))}
        </div>
      </div>

    </div>
  );
};

// --- Reusable Seminar Card Component (Accordion Style) ---
const SeminarCard = ({ data }: { data: Seminar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const paragraphs = data.abstract.split('\n\n');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="p-8 md:p-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">
              {data.title}
            </h3>
          </div>
        </div>

        {/* Speaker Info */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-10 pb-10 border-b border-slate-100">
           <div className="flex items-center">
            <div className="w-20 h-20 mr-5 shrink-0 rounded-full overflow-hidden border-2 border-[#991b1b]/10 shadow-sm relative bg-slate-100">
  {data.imageUrl ? (
    <ImageWithFallback
      src={data.imageUrl}
      alt={data.speaker}
      className="w-full h-full object-cover object-top"
    />
  ) : (
    <User className="w-8 h-8 text-[#991b1b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  )}
</div>
             <div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Speaker</span>
               <span className="text-slate-900 font-bold text-xl">{data.speaker}</span>
             </div>
           </div>
           <div className="flex items-start flex-1 mt-2 sm:mt-0">
             <Building className="w-6 h-6 text-slate-400 mr-4 shrink-0 mt-1" />
             <div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Affiliation</span>
               <span className="text-slate-700 font-medium text-lg leading-snug">{data.affiliation}</span>
             </div>
           </div>
        </div>

        {/* Abstract Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between group py-5 px-8 rounded-xl transition-all duration-300 border border-slate-100 ${
            isOpen 
              ? 'bg-slate-50 border-b-0 rounded-b-none text-[#991b1b]' 
              : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-[#991b1b] hover:border-red-100 shadow-sm'
          }`}
        >
           <div className="flex items-center font-bold">
             <FileText className={`w-5 h-5 mr-3 transition-colors duration-300 ${isOpen ? 'text-[#991b1b]' : 'text-slate-400 group-hover:text-[#991b1b]'}`} />
             <span className="uppercase tracking-widest text-sm">
               {isOpen ? "Hide Abstract" : "Read Abstract"}
             </span>
           </div>
           <div className={`transform transition-transform duration-500 ease-spring ${isOpen ? 'rotate-180' : ''}`}>
             <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-[#991b1b]' : 'text-slate-400 group-hover:text-[#991b1b]'}`} />
           </div>
        </button>

        {/* Expandable Abstract Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth spring-like ease
              className="overflow-hidden"
            >
              <div className="bg-slate-50/60 p-8 md:p-12 lg:p-14 rounded-b-xl border border-t-0 border-slate-100 border-l-[6px] border-l-[#991b1b] relative shadow-[inset_0_4px_6px_-2px_rgba(0,0,0,0.02)]">
                <div className="max-w-prose mx-auto md:mx-0">
                  {paragraphs.map((paragraph, index) => (
                    <p 
                      key={index} 
                      className={`
                        text-slate-700 font-serif text-lg md:text-xl leading-[2.2] tracking-wide text-justify md:text-left
                        ${index === 0 
                          ? 'first-letter:text-7xl first-letter:font-bold first-letter:text-[#991b1b] first-letter:mr-5 first-letter:float-left first-letter:leading-[0.75] first-letter:mt-3 first-letter:font-sans' 
                          : 'mt-8'
                        }
                      `}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
