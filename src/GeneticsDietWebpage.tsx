import React, { useState } from 'react';
import {
  ExternalLink,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  Dna,
  Scale,
} from 'lucide-react';
import geneticsDietData from './data/geneticsDietData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const GeneticsDietWebpage: React.FC = () => {
  const [selectedArmId, setSelectedArmId] = useState<string>('cr_20');
  const activeArm =
    geneticsDietData.dietArms.find((a) => a.id === selectedArmId) ||
    geneticsDietData.dietArms[3];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/30 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${geneticsDietData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider hover:bg-amber-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {geneticsDietData.titleBlock.journal} ({geneticsDietData.titleBlock.year}) • DOI:{' '}
                {geneticsDietData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${geneticsDietData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {geneticsDietData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <FlaskConical className="w-3.5 h-3.5" aria-hidden="true" />
              <span>n = 960 Genetically Diverse Mice (5 Diet Regimens)</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            Genetics vs. Caloric Restriction & Fasting:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-emerald-400">
              Why Resilience Beats Weight Loss
            </span>
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {geneticsDietData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {geneticsDietData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard
          paperId="genetics-diet-dr"
          studyOverview={geneticsDietData.studyOverview}
        />

        {/* Interactive 5-Arm CR vs. IF Comparator */}
        <section aria-labelledby="diet-arms-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                5-Arm Lifelong Dietary Intervention Comparator (n = 960 DO Mice)
              </span>
              <h2 id="diet-arms-heading" className="text-3xl font-bold text-white">
                Graded Caloric Restriction (20% / 40%) vs. Intermittent Fasting (1D / 2D)
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Select any feeding regimen below to compare median and 90th-percentile survival
              against lean mass, immune repertoire, and erythroid (RDW) trade-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3" role="tablist">
            {geneticsDietData.dietArms.map((arm) => {
              const isSelected = arm.id === selectedArmId;
              // Proportional bar width: 35 months = 100%
              const barWidth = Math.min(100, Math.round((arm.medianMonths / 35) * 100));
              return (
                <button
                  key={arm.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedArmId(arm.id)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.15)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs font-mono font-bold text-amber-300">
                        +{arm.lifespanGainPct}% Lifespan
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{arm.label}</h3>
                    <p className="text-[11px] text-gray-400 mb-3">
                      Median: <strong className="text-white">{arm.medianMonths} mo</strong>
                    </p>
                  </div>

                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-300"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Arm Deep Dive */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                  {activeArm.protocol}
                </div>
                <h3 className="text-2xl font-bold text-white">{activeArm.label}</h3>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  Net Calorie Reduction: {activeArm.netCalorieReduction}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-black text-amber-300">
                    {activeArm.medianMonths} mo
                  </div>
                  <div className="text-[11px] text-gray-300">
                    Median (+{activeArm.lifespanGainPct}%)
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-black text-white">{activeArm.max90Months} mo</div>
                  <div className="text-[11px] text-gray-400">90th Percentile Survival</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1.5">
                  DEXA Body Composition
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeArm.bodyComposition}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1.5">
                  Metabolic & RQ Flexibility
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeArm.metabolicEffect}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1.5">
                  Immune & Erythroid (RDW) Profile
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeArm.immuneHematology}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-1.5">
                  Physiological Trade-Offs
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{activeArm.tradeOffs}</p>
              </div>
            </div>

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>5-Arm Dietary Restriction and Intermittent Fasting Lifespan Results</caption>
              <thead>
                <tr>
                  <th>Regimen</th>
                  <th>Protocol</th>
                  <th>Median Lifespan (Months)</th>
                  <th>90th Percentile Lifespan (Months)</th>
                  <th>Median Gain (%)</th>
                </tr>
              </thead>
              <tbody>
                {geneticsDietData.dietArms.map((a) => (
                  <tr key={a.id}>
                    <td>{a.label}</td>
                    <td>{a.protocol}</td>
                    <td>{a.medianMonths}</td>
                    <td>{a.max90Months}</td>
                    <td>+{a.lifespanGainPct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Genetics vs. Diet Variance Decomposition */}
        <section aria-labelledby="variance-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
              Heritability vs. Intervention Variance Decomposition
            </span>
            <h2 id="variance-heading" className="text-3xl font-bold text-white">
              Genetics Explains ~3x More Lifespan Variation Than Diet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {geneticsDietData.varianceBreakdown.map((v) => (
              <div
                key={v.factor}
                className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Dna className="w-5 h-5 text-amber-400" aria-hidden="true" />
                    <span className="text-3xl font-black text-amber-400">{v.variancePct}%</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{v.factor}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">{v.description}</p>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: `${v.variancePct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
              Core Scientific Discoveries
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Di Francesco & Churchill (Nature 2024)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {geneticsDietData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                  <Scale className="w-4 h-4" aria-hidden="true" />
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
          paperId="genetics-diet-dr"
          conclusions={geneticsDietData.conclusions}
          protocolImplications={geneticsDietData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
