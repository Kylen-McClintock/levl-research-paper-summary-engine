import React, { useState } from 'react';
import {
  Activity,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  GitBranch,
  ShieldAlert,
  Microscope,
} from 'lucide-react';
import spermidineData from './data/spermidineData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const SpermidineWebpage: React.FC = () => {
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>('humans');
  const activeSpecies =
    spermidineData.speciesEvidence.find((s) => s.id === selectedSpeciesId) ||
    spermidineData.speciesEvidence[0];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-950/35 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${spermidineData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider hover:bg-teal-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {spermidineData.titleBlock.journal} ({spermidineData.titleBlock.year}) • DOI:{' '}
                {spermidineData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${spermidineData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {spermidineData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Microscope className="w-3.5 h-3.5" aria-hidden="true" />
              <span>4 Human Fasting Cohorts + Yeast, Worms, Flies & Mice</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            Spermidine & Fasting Autophagy:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">
              The eIF5A → TFEB Polyamine Switch
            </span>
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {spermidineData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {spermidineData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard
          paperId="spermidine-fasting"
          studyOverview={spermidineData.studyOverview}
        />

        {/* 4-Step Polyamine-Hypusination-TFEB Signaling Cascade */}
        <section aria-labelledby="pathway-cascade-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-2">
              Conserved Biochemical Mechanism
            </span>
            <h2 id="pathway-cascade-heading" className="text-3xl font-bold text-white">
              The 4-Step Spermidine → eIF5A Hypusination → TFEB Autophagy Axis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {spermidineData.pathwaySteps.map((s) => (
              <div
                key={s.step}
                className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                      STEP {s.step}
                    </span>
                    <GitBranch className="w-4 h-4 text-teal-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{s.node}</h3>
                  <p className="text-xs font-mono text-cyan-300 mb-3">{s.enzymeOrTarget}</p>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">{s.detail}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-start gap-2 text-[11px] text-rose-300">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{s.inhibitor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Cross-Species & Human Fasting Cohort Explorer */}
        <section aria-labelledby="species-fasting-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-2">
                Phylogenetic & Human Clinical Validation
              </span>
              <h2 id="species-fasting-heading" className="text-3xl font-bold text-white">
                Fasting-Induced Spermidine Surge & Loss-of-Function Blockade
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Select an organism or human cohort below to inspect what happens when polyamine
              synthesis is pharmacologically (DFMO/GC7) or genetically blocked during fasting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="tablist">
            {spermidineData.speciesEvidence.map((item) => {
              const isSelected = item.id === selectedSpeciesId;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedSpeciesId(item.id)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-500/15 border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.15)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-lg font-black text-teal-300">
                      {item.spermidineChange}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.organism}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2">{item.protocol}</p>
                </button>
              );
            })}
          </div>

          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-1">
                Fasting Protocol & Surge
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{activeSpecies.organism}</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                {activeSpecies.protocol}
              </p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30">
                Endogenous Spermidine: {activeSpecies.spermidineChange}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                Intact Polyamine Axis (Normal Fasting)
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {activeSpecies.autophagyEffect}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-300 mb-2">
                Polyamine / Hypusination Blockade (DFMO / GC7 / KO)
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {activeSpecies.blockadeResult}
              </p>
            </div>

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>Cross-Species Spermidine Surge and Blockade Results During Fasting</caption>
              <thead>
                <tr>
                  <th>Organism</th>
                  <th>Protocol</th>
                  <th>Spermidine Change</th>
                  <th>Autophagy Effect</th>
                  <th>Blockade Outcome</th>
                </tr>
              </thead>
              <tbody>
                {spermidineData.speciesEvidence.map((item) => (
                  <tr key={item.id}>
                    <td>{item.organism}</td>
                    <td>{item.protocol}</td>
                    <td>{item.spermidineChange}</td>
                    <td>{item.autophagyEffect}</td>
                    <td>{item.blockadeResult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-2">
              Mechanistic & Clinical Synthesis
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Hofer, Kroemer & Madeo (Nature Cell Biology 2024)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spermidineData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-teal-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2">
                  <Activity className="w-4 h-4" aria-hidden="true" />
                  <span>FINDING 0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{finding.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{finding.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Standardized Conclusions & Related Research */}
        <ConclusionsSection
          paperId="spermidine-fasting"
          conclusions={spermidineData.conclusions}
          protocolImplications={spermidineData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
