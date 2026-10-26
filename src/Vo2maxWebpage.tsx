import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Award,
} from 'lucide-react';
import vo2maxData from './data/vo2maxData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const Vo2maxWebpage: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('elite');
  const activeTier =
    vo2maxData.fitnessTiers.find((t) => t.id === selectedTierId) || vo2maxData.fitnessTiers[4];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/35 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${vo2maxData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider hover:bg-blue-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {vo2maxData.titleBlock.journal} ({vo2maxData.titleBlock.year}) • DOI:{' '}
                {vo2maxData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${vo2maxData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {vo2maxData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>N = 122,007 Adults • 1.1M Person-Years</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            Cardiorespiratory Fitness (VO2max):{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              5.04x Survival Advantage
            </span>{' '}
            With No Upper Limit of Benefit
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {vo2maxData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {vo2maxData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard paperId="vo2max-mortality" studyOverview={vo2maxData.studyOverview} />

        {/* Interactive 5-Tier VO2max / Peak METs Survival Explorer */}
        <section aria-labelledby="vo2max-tiers-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
                5 Age- & Sex-Matched Peak MET Percentiles (N = 122,007)
              </span>
              <h2 id="vo2max-tiers-heading" className="text-3xl font-bold text-white">
                Dose-Dependent Mortality Reduction Across Every Fitness Tier
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Click any fitness percentile group below to inspect its adjusted mortality hazard
              ratio, example MET / VO2max thresholds, and marginal survival gain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3" role="tablist">
            {vo2maxData.fitnessTiers.map((t) => {
              const isSelected = t.id === selectedTierId;
              // Proportional bar width: max HR 5.04 -> 100%
              const riskWidth = Math.min(100, Math.round((t.hrVsElite / 5.04) * 100));
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedTierId(t.id)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-500/15 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.15)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs font-mono font-bold text-blue-300">
                        {t.hrVsElite.toFixed(2)}x Risk vs Elite
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{t.tier}</h3>
                    <p className="text-[11px] text-gray-400 mb-3">{t.percentile}</p>
                  </div>

                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        t.id === 'elite' || t.id === 'high' ? 'bg-emerald-400' : 'bg-blue-400'
                      }`}
                      style={{ width: `${riskWidth}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tier Detail Card */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span>
                  {activeTier.percentile} • {activeTier.sampleSize}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">{activeTier.tier}</h3>
              <p className="text-xs font-mono text-cyan-300">
                Benchmark (Age 50–59): {activeTier.exampleMet50Yr}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed pt-1">
                {activeTier.clinicalNote}
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5 flex flex-col justify-center space-y-4">
              <div>
                <div className="text-xs font-mono text-gray-400">
                  Mortality Hazard vs. Elite (≥97.7th)
                </div>
                <div className="text-3xl font-black text-blue-400">
                  {activeTier.hrVsElite.toFixed(2)}x
                </div>
                <div className="text-[11px] font-mono text-gray-400">
                  95% CI: [{activeTier.ciVsElite}]
                </div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <div className="text-xs font-mono text-gray-400">
                  Adjusted HR vs. Low Fitness (&lt;25th)
                </div>
                <div className="text-2xl font-black text-emerald-400">
                  HR = {activeTier.survivalVsLowHR.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VO2max Deficit vs. Traditional Clinical Risk Factors Ladder */}
        <section aria-labelledby="comorbidity-ladder-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
              Multivariable Cox Proportional Hazards Comparison
            </span>
            <h2 id="comorbidity-ladder-heading" className="text-3xl font-bold text-white">
              Low Fitness Carries Greater Mortality Risk Than Smoking, Diabetes, or CAD
            </h2>
          </div>

          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
            {vo2maxData.comorbidityComparison.map((item) => {
              const barWidth = Math.min(100, Math.round((item.hazardRatio / 5.04) * 100));
              const isFitness = item.category === 'Cardiorespiratory Fitness';
              return (
                <div
                  key={item.riskFactor}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                          isFitness
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-sm font-bold text-white">{item.riskFactor}</span>
                    </div>
                    <span className="text-xs font-mono text-gray-300">
                      Adjusted HR:{' '}
                      <strong className={isFitness ? 'text-blue-300' : 'text-rose-300'}>
                        {item.hazardRatio.toFixed(2)}
                      </strong>{' '}
                      (95% CI: {item.ci})
                    </span>
                  </div>

                  <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        isFitness ? 'bg-blue-400' : 'bg-rose-400'
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>Adjusted Mortality Hazard Ratios: Cardiorespiratory Fitness vs. Clinical Comorbidities</caption>
              <thead>
                <tr>
                  <th>Risk Factor or Fitness Comparison</th>
                  <th>Category</th>
                  <th>Adjusted Hazard Ratio</th>
                  <th>95% CI</th>
                </tr>
              </thead>
              <tbody>
                {vo2maxData.comorbidityComparison.map((item) => (
                  <tr key={item.riskFactor}>
                    <td>{item.riskFactor}</td>
                    <td>{item.category}</td>
                    <td>{item.hazardRatio}</td>
                    <td>{item.ci}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
              Clinical Epidemiology Insights
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Mandsager & Jaber (JAMA Network Open 2018)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vo2maxData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
                  <HeartPulse className="w-4 h-4" aria-hidden="true" />
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
          paperId="vo2max-mortality"
          conclusions={vo2maxData.conclusions}
          protocolImplications={vo2maxData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
