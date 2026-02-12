import React, { useState } from 'react';
import { Calendar, User, Building, FileText, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Type Definitions ---
interface Seminar {
  id: number;
  speaker: string;
  affiliation: string;
  title: string;
  abstract: string;
}

// --- Sample Data (Populated with provided archived content) ---
const seminarsData: Seminar[] = [
  {
    id: 1,
    speaker: "Assoc Prof Gavin S Dawe",
    affiliation: "Department of Pharmacology, YLL School of Medicine, NUHS",
    title: "A TAG on to novel functions of APP",
    abstract: "Proteolytic processing of amyloid beta precursor protein (APP) has been linked to the pathology of Alzheimer's disease (AD). Briefly, the ectodomain of APP is shed by alpha- or beta-secretase cleavage. The remaining membrane bound stub can then undergo regulated intramembrane proteolysis (RIP) by gamma-secretase. This cleavage can release amyloid beta (Abeta) from the stub left by beta-secretase cleavage but also releases the APP intracellular domain (AICD). While the release of Abeta can contribute to AD pathology, the physiological functions of APP are poorly understood. Comparing the proteolytic processing of APP to the ligand-dependent RIP of Notch, we investigated whether transient axonal glycoprotein 1 (TAG1), a member of the F3/Contactin family of glycophosphatidylinositol (GPI) linked proteins, could trigger APP cleavage and intracellular signalling via release of ACID. Our results suggest that APP is a receptor for TAG1. TAG1 interaction with APP triggers ligand-dependent cleavage of APP and release of ACID. In fetal murine neural stem cells, this TAG1-APP signalling process represses neurogenesis. The discovery that TAG1, which is expressed transiently along axons during development, interacts with APP led us to re-evaluate the axonal expression of APP. Recent findings on the axonal distribution of APP and interactions with ion channels will be discussed. These findings suggest novel functions of APP and may be of relevance to the pathophysiology of amyloid deposition in AD."
  },
  {
    id: 2,
    speaker: "Assoc Prof Charanjit Kaur",
    affiliation: "Department of Anatomy, YLL School of Medicine, NUHS",
    title: "Hypoxia induced cellular changes in the developing retina",
    abstract: "Clinical and experimental studies have established that hypoxia is an important factor underlying the genesis of retinopathy especially in infants born prematurely. Vascularization of the retina is incomplete in the premature birth resulting in widespread retinal hypoxia. Other factors such as compromised pulmonary function and cyanotic heart disease which result in hypoxia are also important aetiological factors in the development of retinopathy which could subsequently result in reduced visual acuity, retinal detachment and blindness. Although some of mechanisms implicated in the genesis of retinopathy have been identified, reports on cellular changes induced by hypoxia in the neural retina are lacking. Our recent investigations have shown that both neurons and glia in the retina are affected by hypoxia. A thorough understanding of how the different cell types respond to hypoxia is necessary for the development of new therapeutic interventions to prevent loss of vision."
  },
  {
    id: 3,
    speaker: "Dr Wai T Wong",
    affiliation: "Head, Unit on Neuron-Glia Interactions in Retinal Disease, National Eye Institute, NIH",
    title: "Microglia in retina",
    abstract: "Retinal microglia share many similarities with those found elsewhere in the CNS, but however, possess some distinguishing features in their morphology, distribution, and neighboring cells types that may relate to specialized functions. Unlike in the brain, ramified retinal microglia are arrayed in the inner retina in non-overlapping horizontal mosaic arrays with their processes are concentrated in the inner and outer plexiform layers in close proximity to retinal synapses. Interestingly, the outer retina, where photoreceptors and the retinal pigment epithelium (RPE) are located, is normally devoid of microglia coverage. Additionally, microglia are in proximity to, and interact with, specialized retinal cells types, such as Müller cells and RPE cells. We are interested in understanding the interactions that retinal microglia have with these specialized retinal cells in the endogenous functioning of the retina."
  },
  {
    id: 4,
    speaker: "Prof Geoffrey Raisman",
    affiliation: "Chair of Neural Regeneration at University College London, UK",
    title: "Repair of the Central Nervous System",
    abstract: "During development nerve fibres grow to their targets. When they are severed in the adult CNS they fail to regenerate their connections, leading to permanent disability, one of the most dramatic examples being seen after spinal cord injury. For decades now, the number of published experimental studies claiming methods to induce cut adult CNS fibers to regenerate must have run into many hundreds a year. And yet paraplegic patients remain confined to wheelchairs. This suggests that we are somehow looking in the wrong direction. I propose that the failure to regenerate is not an intrinsic property of adult neurons, and that the fault lies in the inability of the damaged site to provide pathways to allow regenerating fibres to regain their original targets and restore function."
  },
  {
    id: 5,
    speaker: "Prof Eng-Ang Ling",
    affiliation: "Professor, Department of Anatomy, NUS",
    title: "MICROGLIA: A \"Rising Star\" in Neuropathology",
    abstract: "Microglial cells , once considered not even to exist, are now linked to various neurological diseases and disorders including hypoxic periventricular white matter damage (PWMD), cerebral ischemia, traumatic brain injury (TBI) , Alzheimer's Disease etc as shown in the series of study by our group in the past four decades. Until the 1980s, interest in microglial research, had focused mainly on the identification, structure, origin and mode of formation of the cell type. In this connection, our seminal study in the postnatal rat brain had demonstrated experimentally that the embryonic form of microglia, namely, amoeboid microglia cells (AMC) are derived from circulating monocytes. With advancing age, the AMC evolve to become the adult microglia, ramified microglia which persist through the adulthood. Along with this, we have also shown that in the embryonic brain some yolk sac cells may give rise to pial macrophages which infiltrate the neuroepithelium to become AMC before vascularization. The characterization of microglia in the developing brain had opened a new vista for subsequent research on microglia. Thus, in the 1980s, a surge in studies was seen which demonstrated that microglia act as a neuropathology sensor responding to both acute and chronic stimuli. It became obvious then that microglia are implicated in various stages of neuroinflammation by releasing a plethora of related factors e.g. TNF-alpha, IL-1beta, chemokines, nitric oxide, reactive oxygen species etc. Targeting activated microglia by suppressing its activation in alleviating neuroflammation has since been considered as a potential therapeutic strategy. Despite the above, a few fundamental issues have remained to be resolved in microglial research. For example, the molecular mechanisms or genes which regulate the transformation of AMC into ramified microglia in the developing brain have remained to be unraveled. Differential gene expression in different states of microgilal activation needs to be investigated both in the developing brain and diseased models. There is only a modicum of information on the so-called \"cross talk\" between microglia and other glial cells e.g. astrocytes, oligodendrocytes or neural stem cells. All this would provide a fuller understanding of the roles of microglia in various neurodegenerative diseases which are expected to gain greater attention and recognition in the next decade."
  },
  {
    id: 6,
    speaker: "Ms Madhuvika Murugan",
    affiliation: "Graduate student, Department of Anatomy, NUS",
    title: "Hypoxia-induced oligodendrocyte death is mediated by N-methyl D-aspartate receptors expressed in amoeboid microglia via NF-kappaB signaling pathway",
    abstract: "The present study was focused on identifying the expression of N-methyl D-aspartate receptor (NMDAR) subunits on activated microglia and to determine their role in the pathogenesis of periventricular white matter damage (PWMD) in neonatal rats following hypoxia. The expression and functionality of NMDAR in primary microglial cultures was ascertained. Hypoxia induced the nuclear translocation of NF-kappaB which was suppressed by administration of MK801, an NMDAR antagonist. MK801 also down regulated the hypoxia-induced expression of tumor necrosis factor-alpha, interleukin-1beta, inducible nitric oxide synthase (iNOS) and nitric oxide (NO) production by microglia which may be mediated by the NF-kappaB signalling pathway. Hence microglial NMDAR might be a novel therapeutic target to ameliorate PWMD."
  },
  {
    id: 7,
    speaker: "Ms Guru Girijha R",
    affiliation: "Graduate student, Department of Anatomy, NUS",
    title: "Role of iron and iron regulatory proteins in hypoxic periventricular white matter damage in the neonatal brain",
    abstract: "In the present study, we examined the role of iron in causing periventricular white matter (PWM) damage following a hypoxic injury in the developing brain. Iron regulatory proteins and transferrin receptor which are involved in iron acquisition were found to be increased following hypoxia in oligodendrocytes in the PWM and Perls' iron staining showed an increase of intracellular iron in the oligodendrocytes. In primary oligodendroglial cultures' administration of deferoxamine reduced the ROS level and reduced the cell death. The present results suggest that excess iron might mediate oligodendrocyte death in PWM following hypoxia."
  },
  {
    id: 8,
    speaker: "Ms Sukanya Shyamasundar",
    affiliation: "Graduate student, Department of Anatomy, NUS",
    title: "Analysis of epigenetic factors in mouse embryonic neural stem cells exposed to different glucose concentrations",
    abstract: "Maternal diabetes induces patterning defects in the developing brain during embryogenesis. We hypothesize that maternal diabetes alters the epigenetic mechanisms (namely, histone modifications, DNA methylation and microRNA mediated) and expression of genes involved in various signalling pathways resulting in brain defects in embryos of diabetic mice. These findings would provide novel insights into how maternal hyper- or hypo-glycaemia influence the fate of stem cells during development and also ascertain possible therapeutic strategies to prevent functional disturbances in the brain of infants exposed to maternal glucotoxicity or glucose deprivation."
  },
  {
    id: 9,
    speaker: "Professor K Ranga R Krishnan",
    affiliation: "Dean, Duke-NUS Graduate Medical School, Singapore",
    title: "Broken Heart and Silent Strokes",
    abstract: "Subcortical vascular disease, which may include silent lacunar infarctions or hyperintense lesions, may hypothetically disrupt these circuits. Subcortical ischemic disease is common even in otherwise neurologically normal elderly patients, occurring in both periventricular and deep white matter and in subcortical gray matter nuclei. These vascular changes are an age-related phenomena, as greater lesion severity occurs with aging. Cerebrovascular risk factors, such as hypertension and diabetes, are also strongly linked to subcortical ischemic disease and disease progression, although metabolic factors and specific genetic factors may also contribute toward these findings. Subcortical lesions are more common in elderly depressed than healthy elderly control subjects and more common in late-onset than early-onset elderly depression. This difference has also been demonstrated in community populations with depressive symptoms, extending the finding beyond those meeting criteria for major depression. Subcortical lesions are associated with poor antidepressant outcomes and with persistence or worsening of depressive symptoms over time. Poorer depression course is also associated with greater increases in subcortical lesion volume over that time. There may also be a biological gradient, wherein lesions contributing to depression need to occur in specific regions. More recently we have related BDNF and AGTR to the development of lesions."
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
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
              {data.title}
            </h3>
          </div>
        </div>

        {/* Speaker Info */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 pb-6 border-b border-slate-100">
           <div className="flex items-start">
             <User className="w-5 h-5 text-[#991b1b] mr-3 shrink-0 mt-0.5" />
             <div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Speaker</span>
               <span className="text-slate-900 font-semibold text-lg">{data.speaker}</span>
             </div>
           </div>
           <div className="flex items-start flex-1">
             <Building className="w-5 h-5 text-slate-400 mr-3 shrink-0 mt-0.5" />
             <div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Affiliation</span>
               <span className="text-slate-700 font-medium">{data.affiliation}</span>
             </div>
           </div>
        </div>

        {/* Abstract Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between group py-3 px-4 rounded-lg transition-colors duration-300 ${isOpen ? 'bg-slate-50 text-[#991b1b]' : 'hover:bg-slate-50 text-slate-600'}`}
        >
           <div className="flex items-center font-bold">
             <FileText className={`w-4 h-4 mr-2 transition-colors ${isOpen ? 'text-[#991b1b]' : 'text-slate-400 group-hover:text-[#991b1b]'}`} />
             <span className={`uppercase tracking-wider text-sm transition-colors ${isOpen ? 'text-[#991b1b]' : 'text-slate-600 group-hover:text-[#991b1b]'}`}>
               {isOpen ? "Hide Abstract" : "Read Abstract"}
             </span>
           </div>
           <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
             <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-[#991b1b]' : 'text-slate-400 group-hover:text-[#991b1b]'}`} />
           </div>
        </button>

        {/* Expandable Abstract Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 bg-slate-50 p-6 rounded-lg rounded-t-none border-l-4 border-[#991b1b]">
                <p className="text-slate-700 font-serif leading-loose text-base md:text-lg">
                  {data.abstract}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
