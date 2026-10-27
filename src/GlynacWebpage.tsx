import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  FlaskConical,
  Zap,
} from 'lucide-react';
import glynacData from './data/glynacData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const GlynacWebpage: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('redox_gsh');
  const activeDomain =
    glynacData.biomarkerDomains.find((d) => d.id === selectedDomainId) ||
    glynacData.biomarkerDomains[0];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/35 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${glynacData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {glynacData.titleBlock.journal} ({glynacData.titleBlock.year}) • DOI:{' '}
                {glynacData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${glynacData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {glynacData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{glynacData.titleBlock.nct} (16-Wk Double-Blind Placebo RCT)</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            GlyNAC Human RCT:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              +164% Muscle GSH & -72% Oxidative Stress
            </span>{' '}
            Restore Mitochondrial & Physical Function
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {glynacData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {glynacData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard paperId="glynac-rct" studyOverview={glynacData.studyOverview} />

        {/* Interactive 16-Week Human RCT Biomarker Explorer */}
        <section aria-labelledby="glynac-domains-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                16-Week Randomized Placebo-Controlled Trial Outcomes (Ages 61–80 vs. 21–40)
              </span>
              <h2 id="glynac-domains-heading" className="text-3xl font-bold text-white">
                Baseline Older Adults vs. 16-Week GlyNAC vs. Young Adult Benchmarks
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Select a physiological domain below to compare older adults before and after 16 weeks
              of GlyNAC against young adult (21–40 yr) reference levels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" role="tablist">
            {glynacData.biomarkerDomains.map((d) => {
              const isSelected = d.id === selectedDomainId;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedDomainId(d.id)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-emerald-300">{d.badge}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </div>
                  <h3 className="text-sm font-bold text-white">{d.domain}</h3>
                </button>
              );
            })}
          </div>

          {/* Active Domain Metrics Comparison */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="pb-4 border-b border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                {activeDomain.badge}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{activeDomain.domain}</h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                {activeDomain.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {activeDomain.metrics.map((m) => {
                const barWidth = Math.min(100, Math.round((Math.abs(m.changePct) / 165) * 100));
                return (
                  <div
                    key={m.label}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white mb-3">{m.label}</h4>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between text-gray-400">
                          <span>Older Baseline (0 Wk):</span>
                          <span className="text-rose-300">{m.baselineOA}</span>
                        </div>
                        <div className="flex justify-between text-white font-bold">
                          <span>Older + GlyNAC (16 Wk):</span>
                          <span className="text-emerald-300">{m.week16GlyNAC}</span>
                        </div>
                        <div className="flex justify-between text-gray-400 pt-1 border-t border-white/5">
                          <span>Young Control (21–40 yr):</span>
                          <span className="text-cyan-300">{m.youngControl}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-emerald-400 mb-1">
                        <span>16-Week Magnitude</span>
                        <span>
                          {m.changePct > 0 ? `+${m.changePct}%` : `${m.changePct}%`} (p &lt; 0.001)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>GlyNAC 16-Week Randomized Clinical Trial Biomarker Outcomes</caption>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Biomarker</th>
                  <th>Older Adult Baseline</th>
                  <th>16-Week GlyNAC</th>
                  <th>Young Adult Control</th>
                </tr>
              </thead>
              <tbody>
                {glynacData.biomarkerDomains.flatMap((d) =>
                  d.metrics.map((m) => (
                    <tr key={`${d.id}-${m.label}`}>
                      <td>{d.domain}</td>
                      <td>{m.label}</td>
                      <td>{m.baselineOA}</td>
                      <td>{m.week16GlyNAC}</td>
                      <td>{m.youngControl}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Companion Mammalian Lifespan Proof Callout */}
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-4">
            <FlaskConical
              className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-1">
                Companion Mammalian Lifespan Proof (+24.2% Lifespan Extension in Mice)
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {glynacData.companionLifespanNote}
              </p>
            </div>
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Redox & Bioenergetic Mechanisms
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Kumar & Sekhar (Journals of Gerontology 2023)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glynacData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                  <Zap className="w-4 h-4" aria-hidden="true" />
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
          paperId="glynac-rct"
          conclusions={glynacData.conclusions}
          protocolImplications={glynacData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
