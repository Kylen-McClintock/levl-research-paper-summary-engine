import React, { useState } from 'react';
import {
  Gauge,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  TrendingDown,
} from 'lucide-react';
import calerieData from './data/calerieData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const CalerieWebpage: React.FC = () => {
  const [selectedClockId, setSelectedClockId] = useState<string>('dunedinpace');
  const activeClock =
    calerieData.speedometerVsOdometer.find((c) => c.id === selectedClockId) ||
    calerieData.speedometerVsOdometer[0];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/30 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${calerieData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {calerieData.titleBlock.journal} ({calerieData.titleBlock.year}) • DOI:{' '}
                {calerieData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${calerieData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {calerieData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{calerieData.titleBlock.nct} (2-Year Multicenter Phase 2 RCT)</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            CALERIE™ Phase 2 RCT:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              2 Years of Human Caloric Restriction
            </span>{' '}
            Slows the DunedinPACE Speedometer
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {calerieData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {calerieData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard paperId="calerie-pace" studyOverview={calerieData.studyOverview} />

        {/* Interactive Speedometer vs. Odometer Epigenetic Clock Comparator */}
        <section aria-labelledby="speedometer-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                Epigenetic Clock Architecture (n = 197 Blood EPIC Profiles)
              </span>
              <h2 id="speedometer-heading" className="text-3xl font-bold text-white">
                Dynamic &ldquo;Speedometer&rdquo; (DunedinPACE) vs. Static &ldquo;Odometer&rdquo; Clocks
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Click each clock below to understand why 3rd-generation longitudinal slope clocks
              capture 2-year human interventions while cross-sectional odometer clocks remain static.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="tablist">
            {calerieData.speedometerVsOdometer.map((clock) => {
              const isSelected = clock.id === selectedClockId;
              const isSignificant = clock.id === 'dunedinpace';
              return (
                <button
                  key={clock.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedClockId(clock.id)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                      {clock.generation}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{clock.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{clock.metaphor}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-xs">
                    <span>
                      12m: <strong className="text-white">d = {clock.effect12Mo}</strong>
                    </span>
                    <span>
                      24m: <strong className="text-white">d = {clock.effect24Mo}</strong>
                    </span>
                    <span
                      className={
                        isSignificant ? 'text-emerald-300 font-bold' : 'text-gray-500'
                      }
                    >
                      {clock.pVal.split(' ')[0]} {clock.pVal.split(' ')[1]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Clock Detail Box */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <Gauge className="w-4 h-4" aria-hidden="true" />
                <span>{activeClock.metaphor}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{activeClock.name}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-white">Training Architecture:</strong>{' '}
                {activeClock.trainingTarget}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-white">24-Month RCT Outcome:</strong>{' '}
                {activeClock.interpretation}
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5 flex flex-col justify-center space-y-4">
              <div>
                <div className="text-xs font-mono text-gray-400">12-Month ITT Effect Size</div>
                <div className="text-2xl font-black text-emerald-400">
                  d = {activeClock.effect12Mo}
                </div>
                <div className="text-[11px] font-mono text-gray-400">
                  95% CI: [{activeClock.ci12Mo}]
                </div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <div className="text-xs font-mono text-gray-400">24-Month ITT Effect Size</div>
                <div className="text-2xl font-black text-cyan-400">
                  d = {activeClock.effect24Mo}
                </div>
                <div className="text-[11px] font-mono text-gray-400">
                  95% CI: [{activeClock.ci24Mo}] • {activeClock.pVal}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doubly Labeled Water (DLW) Dose-Response Section */}
        <section aria-labelledby="dlw-dose-heading" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                Isotopic Doubly Labeled Water (DLW) Verification
              </span>
              <h2 id="dlw-dose-heading" className="text-3xl font-bold text-white">
                Strict Dose-Response: Greater Caloric Restriction Slows DunedinPACE Further
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              True caloric restriction was quantified via Doubly Labeled Water rather than food
              diaries. Inspect the progressive slowing of DunedinPACE from &lt;10% CR up to 20% TOT CR.
            </p>
          </div>

          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
            {calerieData.doseResponse.map((tier) => {
              // Proportional bar width: max |d| = 0.45 -> 100%
              const width12 = Math.min(100, Math.round((Math.abs(tier.d12Mo) / 0.45) * 100));
              const width24 = Math.min(100, Math.round((Math.abs(tier.d24Mo) / 0.45) * 100));

              return (
                <div
                  key={tier.tier}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-base font-bold text-white">{tier.tier}</span>
                      <span className="text-xs font-mono text-emerald-300 ml-3">
                        ({tier.achievedCR})
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {tier.paceReduction}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {tier.mortalityEquivalent}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                        <span>12-Month DunedinPACE Shift</span>
                        <span className="text-emerald-300 font-bold">
                          d = {tier.d12Mo.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                          style={{ width: `${width12}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                        <span>24-Month DunedinPACE Shift</span>
                        <span className="text-cyan-300 font-bold">
                          d = {tier.d24Mo.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                          style={{ width: `${width24}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400">{tier.note}</p>
                </div>
              );
            })}

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>CALERIE Trial Doubly Labeled Water Dose-Response on DunedinPACE</caption>
              <thead>
                <tr>
                  <th>Adherence Tier</th>
                  <th>Achieved CR</th>
                  <th>12-Month Cohen&apos;s d</th>
                  <th>24-Month Cohen&apos;s d</th>
                  <th>Pace Reduction</th>
                  <th>Mortality Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {calerieData.doseResponse.map((tier) => (
                  <tr key={tier.tier}>
                    <td>{tier.tier}</td>
                    <td>{tier.achievedCR}</td>
                    <td>{tier.d12Mo}</td>
                    <td>{tier.d24Mo}</td>
                    <td>{tier.paceReduction}</td>
                    <td>{tier.mortalityEquivalent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Methodological & Clinical Synthesis
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Waziry & Belsky (Nature Aging 2023)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calerieData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                  <TrendingDown className="w-4 h-4" aria-hidden="true" />
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
          paperId="calerie-pace"
          conclusions={calerieData.conclusions}
          protocolImplications={calerieData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
