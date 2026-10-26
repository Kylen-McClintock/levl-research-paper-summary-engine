import React, { useState } from 'react';
import {
  Activity,
  ExternalLink,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import taurineData from './data/taurineData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const TaurineWebpage: React.FC = () => {
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>('mice');
  const activeSpecies =
    taurineData.speciesModels.find((s) => s.id === selectedSpeciesId) ||
    taurineData.speciesModels[0];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-rose-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/30 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${taurineData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider hover:bg-rose-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {taurineData.titleBlock.journal} ({taurineData.titleBlock.year}) • DOI:{' '}
                {taurineData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${taurineData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {taurineData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              <FlaskConical className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Worms • Mice • Rhesus Monkeys • 11,966 Humans</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            Taurine Deficiency as a Driver of Aging:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400">
              +10–12% Mouse Lifespan & Primate Rejuvenation
            </span>
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {taurineData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {taurineData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard paperId="taurine-aging" studyOverview={taurineData.studyOverview} />

        {/* Interactive Cross-Species Longevity & Healthspan Explorer */}
        <section aria-labelledby="species-explorer-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400 block mb-2">
                Cross-Species Experimental & Human Validation
              </span>
              <h2 id="species-explorer-heading" className="text-3xl font-bold text-white">
                From Nematodes and Mice to Rhesus Monkeys and 11,966 Humans
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Select an organism below to inspect the dosing regimen, primary quantitative
              endpoint, and organ-system outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="tablist">
            {taurineData.speciesModels.map((s) => {
              const isSelected = s.id === selectedSpeciesId;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedSpeciesId(s.id)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-rose-500/15 border-rose-400 shadow-[0_0_25px_rgba(244,63,94,0.15)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xl font-black text-rose-400">{s.primaryMetric}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />}
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{s.species}</h3>
                    <p className="text-xs text-gray-400 mb-3 leading-snug">{s.metricLabel}</p>
                  </div>

                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-rose-400 rounded-full transition-all duration-300"
                      style={{ width: `${s.barPct}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Species Detail Panel */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-1">
                  {activeSpecies.onsetAge}
                </div>
                <h3 className="text-2xl font-bold text-white">{activeSpecies.species}</h3>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  Protocol: {activeSpecies.dose}
                </p>
              </div>
              <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-black text-rose-300">
                  {activeSpecies.primaryMetric}
                </div>
                <div className="text-[11px] text-gray-300">{activeSpecies.metricLabel}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeSpecies.findings.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3"
                >
                  <ShieldCheck
                    className="w-4 h-4 text-rose-400 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-gray-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>Cross-Species Taurine Longevity and Healthspan Summary</caption>
              <thead>
                <tr>
                  <th>Species</th>
                  <th>Onset Age</th>
                  <th>Dose</th>
                  <th>Primary Metric</th>
                  <th>Endpoint Label</th>
                </tr>
              </thead>
              <tbody>
                {taurineData.speciesModels.map((s) => (
                  <tr key={s.id}>
                    <td>{s.species}</td>
                    <td>{s.onsetAge}</td>
                    <td>{s.dose}</td>
                    <td>{s.primaryMetric}</td>
                    <td>{s.metricLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Hallmarks of Aging Impacted by Taurine */}
        <section aria-labelledby="hallmarks-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 block mb-2">
              Cellular & Molecular Mechanisms
            </span>
            <h2 id="hallmarks-heading" className="text-3xl font-bold text-white">
              How Taurine Reverses Key Hallmarks of Aging
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taurineData.hallmarksImpacted.map((h) => (
              <div
                key={h.hallmark}
                className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-2">
                  <Zap className="w-4 h-4" aria-hidden="true" />
                  <span>MECHANISM OF ACTION</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{h.hallmark}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{h.mechanism}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 block mb-2">
              Quantitative Synthesis
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Singh & Yadav (Science 2023)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taurineData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-rose-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-2">
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
          paperId="taurine-aging"
          conclusions={taurineData.conclusions}
          protocolImplications={taurineData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
