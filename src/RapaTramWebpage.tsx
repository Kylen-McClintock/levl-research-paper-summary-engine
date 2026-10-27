import React, { useState } from 'react';
import {
  ExternalLink,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  Brain,
  ShieldAlert,
  Layers,
} from 'lucide-react';
import rapaTramData from './data/rapaTramData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const RapaTramWebpage: React.FC = () => {
  const [selectedArmId, setSelectedArmId] = useState<string>('combination');
  const activeArm =
    rapaTramData.arms.find((arm) => arm.id === selectedArmId) || rapaTramData.arms[3];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/30 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${rapaTramData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-semibold uppercase tracking-wider hover:bg-orange-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {rapaTramData.titleBlock.journal} ({rapaTramData.titleBlock.year}) • DOI:{' '}
                {rapaTramData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${rapaTramData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {rapaTramData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              <FlaskConical className="w-3.5 h-3.5" aria-hidden="true" />
              <span>n = 876 C3B6F1 Hybrid Mice (4 Arms)</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            Trametinib + Rapamycin:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400">
              +34.9% Additive Lifespan Extension
            </span>{' '}
            via Dual Ras–ERK & mTORC1 Blockade
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {rapaTramData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {rapaTramData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard
          paperId="rapamycin-trametinib"
          studyOverview={rapaTramData.studyOverview}
        />

        {/* Interactive 4-Arm Survival & Organ Protection Comparator */}
        <section aria-labelledby="survival-comparator-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">
                4-Arm Survival & Multi-Organ Comparator (n = 876 Mice from 6 Months)
              </span>
              <h2 id="survival-comparator-heading" className="text-3xl font-bold text-white">
                Monotherapy vs. Additive Dual-Branch Inhibition
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Compare sex-stratified median and maximum lifespan gains across all 4 arms and click
              any arm to inspect its brain 18F-FDG PET, tumor, and metabolic profile.
            </p>
          </div>

          {/* All-4-Arms Proportional Lifespan Chart */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" role="tablist">
              {rapaTramData.arms.map((arm) => {
                const isSelected = arm.id === selectedArmId;
                const femMedWidth = Math.min(100, Math.round((arm.femaleMedianGain / 36) * 100));
                const maleMedWidth = Math.min(100, Math.round((arm.maleMedianGain / 36) * 100));

                return (
                  <button
                    key={arm.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedArmId(arm.id)}
                    className={`text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-orange-500/15 border-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.15)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono text-gray-400">
                          {arm.sampleSize}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white mb-1">{arm.label}</h3>
                      <p className="text-xs text-gray-400 mb-4 leading-snug">{arm.regimen}</p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-white/10 w-full">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-300">♀ Female Median / Max</span>
                          <span className="font-mono font-bold text-orange-300">
                            +{arm.femaleMedianGain}% / +{arm.femaleMaxGain}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-400 rounded-full transition-all duration-300"
                            style={{ width: `${femMedWidth}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-300">♂ Male Median / Max</span>
                          <span className="font-mono font-bold text-amber-300">
                            +{arm.maleMedianGain}% / +{arm.maleMaxGain}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-400 rounded-full transition-all duration-300"
                            style={{ width: `${maleMedWidth}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Arm Deep-Dive Panel */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-1">
                  Survival Hazard Ratio
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  ♀ HR: {activeArm.femaleHR}
                </div>
                <div className="text-sm font-bold text-white">♂ HR: {activeArm.maleHR}</div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                  18F-FDG Brain PET Imaging (12→24 mo)
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{activeArm.brainPetChange}</p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                  24-Month Tumor & Spleen Pathology
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{activeArm.liverTumorRate}</p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                  Metabolic & Neuroglial Profile
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-1">
                  <strong className="text-white">GTT:</strong> {activeArm.glucoseEffect}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {activeArm.microgliaStatus}
                </p>
              </div>
            </div>

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>Trametinib and Rapamycin 4-Arm Mouse Lifespan Results</caption>
              <thead>
                <tr>
                  <th>Treatment Arm</th>
                  <th>Regimen</th>
                  <th>Female Median Lifespan Gain</th>
                  <th>Female Max Lifespan Gain</th>
                  <th>Male Median Lifespan Gain</th>
                  <th>Male Max Lifespan Gain</th>
                </tr>
              </thead>
              <tbody>
                {rapaTramData.arms.map((arm) => (
                  <tr key={arm.id}>
                    <td>{arm.label}</td>
                    <td>{arm.regimen}</td>
                    <td>+{arm.femaleMedianGain}%</td>
                    <td>+{arm.femaleMaxGain}%</td>
                    <td>+{arm.maleMedianGain}%</td>
                    <td>+{arm.maleMaxGain}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Biphasic Dose-Optimization Callout */}
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-1">
                Biphasic Dose Window: Sub-Oncology Microdosing (1.44 mg/kg) vs. High-Dose Toxicity
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {rapaTramData.doseOptimizationNote}
              </p>
            </div>
          </div>
        </section>

        {/* Multi-Tissue Transcriptomic & Brain PET Synergy */}
        <section aria-labelledby="transcriptomics-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">
              Emergent Combinatorial Biology
            </span>
            <h2 id="transcriptomics-heading" className="text-3xl font-bold text-white">
              Why Dual Ras–MEK–ERK + mTORC1 Blockade Outperforms Single Drugs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rapaTramData.transcriptomics.map((item) => (
              <div
                key={item.tissue}
                className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-2">
                  <Brain className="w-4 h-4" aria-hidden="true" />
                  <span>{item.tissue}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.finding}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">
              Quantitative Summary
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Gkioni & Partridge (Nature Aging 2025)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rapaTramData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-2">
                  <Layers className="w-4 h-4" aria-hidden="true" />
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
          paperId="rapamycin-trametinib"
          conclusions={rapaTramData.conclusions}
          protocolImplications={rapaTramData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
