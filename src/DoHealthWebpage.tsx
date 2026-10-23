import React, { useState } from 'react';
import {
  Activity,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Dna,
  HeartPulse,
  Flame,
  Dumbbell,
} from 'lucide-react';
import doHealthData from './data/doHealthData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const DoHealthWebpage: React.FC = () => {
  const [selectedArmId, setSelectedArmId] = useState<string>('triple_combo');
  const activeArm =
    doHealthData.interventions.find((arm) => arm.id === selectedArmId) ||
    doHealthData.interventions[3];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/30 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${doHealthData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider hover:bg-cyan-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {doHealthData.titleBlock.journal} ({doHealthData.titleBlock.year}) • DOI:{' '}
                {doHealthData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${doHealthData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {doHealthData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{doHealthData.titleBlock.nct} (2×2×2 Factorial RCT)</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            DO-HEALTH Trial:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Omega-3, Vitamin D & Exercise
            </span>{' '}
            Additively Slow Epigenetic Aging
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {doHealthData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {doHealthData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard paperId="do-health" studyOverview={doHealthData.studyOverview} />

        {/* Interactive 2x2x2 Factorial Intervention & Epigenetic Clock Explorer */}
        <section aria-labelledby="factorial-explorer-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
                Interactive 2×2×2 Factorial Bio-Age Explorer (n = 777, 36 Months)
              </span>
              <h2 id="factorial-explorer-heading" className="text-3xl font-bold text-white">
                Individual vs. Additive Slowing of Next-Gen DNAm Clocks
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Select a randomized treatment regimen below to inspect standardized effect sizes
              (Cohen&apos;s <span className="font-mono text-gray-200">d</span>), 95% confidence
              intervals, and GrimAge plasma protein surrogates.
            </p>
          </div>

          {/* Regimen Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" role="tablist">
            {doHealthData.interventions.map((arm) => {
              const isSelected = arm.id === selectedArmId;
              return (
                <button
                  key={arm.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedArmId(arm.id)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300">
                      {arm.badge}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                  </div>
                  <div className="text-base font-bold text-white mb-1">{arm.label}</div>
                  <div className="text-xs text-gray-400 leading-snug">{arm.dose}</div>
                </button>
              );
            })}
          </div>

          {/* Active Regimen Detail Card */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                  <Dna className="w-4 h-4" aria-hidden="true" />
                  <span>{activeArm.dose}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{activeArm.label}</h3>
                <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
                  {activeArm.summary}
                </p>
              </div>
              <div className="shrink-0 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center min-w-[180px]">
                <div className="text-3xl font-black text-cyan-300">
                  {activeArm.clocks[0].monthsSaved} mo
                </div>
                <div className="text-xs text-gray-300 font-medium mt-1">
                  PC-PhenoAge Shift (3 Yr)
                </div>
                <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                  d = {activeArm.clocks[0].cohensD} ({activeArm.clocks[0].ci})
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: 4 Primary Epigenetic Clocks */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>Primary Next-Generation Epigenetic Clocks (3-Year Effect)</span>
                </h4>

                <div className="space-y-4">
                  {activeArm.clocks.map((c) => {
                    // Proportional bar width: max |d| = 0.40 -> 100%
                    const widthPct = Math.min(100, Math.round((Math.abs(c.cohensD) / 0.4) * 100));
                    return (
                      <div
                        key={c.clock}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/10"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div>
                            <span className="font-bold text-white text-sm">{c.clock}</span>
                            <span className="text-xs text-gray-400 ml-2">({c.generation})</span>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                              c.significant
                                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                : 'bg-white/5 text-gray-400 border border-white/10'
                            }`}
                          >
                            d = {c.cohensD.toFixed(2)} ({c.monthsSaved} mo)
                          </span>
                        </div>

                        <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden my-2">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              c.significant ? 'bg-cyan-400' : 'bg-gray-500'
                            }`}
                            style={{ width: `${widthPct}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                          <span>95% CI: [{c.ci}]</span>
                          <span>
                            {c.significant ? 'Statistically Significant (p < 0.05)' : 'Non-significant trend'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: GrimAge Plasma Protein Surrogates */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>GrimAge Plasma Protein DNAm Surrogates (SASP / Fibrosis)</span>
                </h4>

                <div className="space-y-3">
                  {activeArm.proteins.map((p) => {
                    const widthPct = Math.min(100, Math.round((Math.abs(p.cohensD) / 0.6) * 100));
                    return (
                      <div
                        key={p.name}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-bold text-white text-sm">{p.name}</span>
                          <span
                            className={`text-xs font-mono font-semibold ${
                              p.significant ? 'text-emerald-300' : 'text-gray-400'
                            }`}
                          >
                            d = {p.cohensD.toFixed(2)} {p.significant ? '★' : ''}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mb-2">{p.role}</p>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              p.significant ? 'bg-emerald-400' : 'bg-gray-600'
                            }`}
                            style={{ width: `${widthPct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>DO-HEALTH Epigenetic Clock Effect Sizes for {activeArm.label}</caption>
              <thead>
                <tr>
                  <th>Clock</th>
                  <th>Generation</th>
                  <th>Cohen&apos;s d</th>
                  <th>95% CI</th>
                  <th>Months Saved over 3 Years</th>
                </tr>
              </thead>
              <tbody>
                {activeArm.clocks.map((c) => (
                  <tr key={c.clock}>
                    <td>{c.clock}</td>
                    <td>{c.generation}</td>
                    <td>{c.cohensD}</td>
                    <td>{c.ci}</td>
                    <td>{c.monthsSaved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Full DO-HEALTH Clinical Outcomes Concordance */}
        <section aria-labelledby="clinical-outcomes-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Clinical Translation Across Parent DO-HEALTH Cohort (N = 2,157)
            </span>
            <h2 id="clinical-outcomes-heading" className="text-3xl font-bold text-white">
              How Months of Epigenetic Slowing Translate Into Hard Clinical Endpoints
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {doHealthData.clinicalOutcomes.map((item) => (
              <div
                key={item.endpoint}
                className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <HeartPulse className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                    <span className="text-[11px] font-mono text-gray-400">{item.arm}</span>
                  </div>
                  <div className="text-4xl font-black text-emerald-400 mb-2">{item.reduction}</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.endpoint}</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
              Mechanistic & Biomarker Insights
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Core Findings from the 3-Year DO-HEALTH Epigenetic Study
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doHealthData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Dumbbell className="w-4 h-4" aria-hidden="true" />
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
          paperId="do-health"
          conclusions={doHealthData.conclusions}
          protocolImplications={doHealthData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
