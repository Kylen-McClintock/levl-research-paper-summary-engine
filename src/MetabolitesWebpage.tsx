import { useState } from 'react';
import { Header } from './components/Header';
import data from './data/metabolitesData.json';
import {
  ShieldCheck,
  Target,
  Globe,
  Activity,
  ArrowRight,
  Zap,
  CheckCircle,
  Search,
  Beaker,
  Dna,
  HeartPulse,
  Users,
} from 'lucide-react';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const MetabolitesWebpage = () => {
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>('All');

  const filteredMetabolites =
    selectedTierFilter === 'All'
      ? data.topMetabolites
      : data.topMetabolites.filter((m) => m.tier === selectedTierFilter);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    headline: data.titleBlock.headline,
    author: [
      {
        '@type': 'Person',
        name: data.titleBlock.authors.split(' &')[0],
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: data.titleBlock.journal,
    },
    sameAs: `https://doi.org/${data.titleBlock.doi}`,
    abstract: data.keyTakeaway,
  };

  return (
    <div
      id="infographic"
      className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24"
    >
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Hero Cover */}
      <section className="relative w-full pt-28 pb-20 flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magenta opacity-10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <a
            href={`https://doi.org/${data.titleBlock.doi}`}
            target="_blank"
            rel="noreferrer"
            className="mb-6 px-4 py-1.5 rounded-full border border-cyan border-opacity-30 bg-cyan-500 bg-opacity-[0.05] text-cyan text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4" aria-hidden="true" /> {data.titleBlock.journal} Review ({data.titleBlock.year}) • PMID: {data.titleBlock.pmid}
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Lifespan-Extending <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan-400">
              Endogenous Metabolites
            </span>
          </h1>
          <div className="text-center">
            <span className="block text-magenta font-semibold tracking-widest uppercase text-xs mb-4">
              Key Takeaway
            </span>
            <p className="text-lg md:text-xl text-[var(--levl-text-secondary)] font-light max-w-2xl leading-relaxed mb-10">
              {data.keyTakeaway}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 border-t border-[var(--levl-border)] pt-8 w-full justify-center opacity-80">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span>
                <a
                  href={`https://doi.org/${data.titleBlock.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan hover:underline hover:text-cyan-400 transition-colors"
                >
                  DOI: {data.titleBlock.doi}
                </a>
              </span>
              <span>|</span>
              <span>
                <a
                  href={`https://pmc.ncbi.nlm.nih.gov/articles/${data.titleBlock.pmcid}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan hover:underline hover:text-cyan-400 transition-colors"
                >
                  {data.titleBlock.pmcid}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Study Scorecard */}
      <StudyScorecard paperId="metabolites" studyOverview={data.scorecardOverview} />

      {/* 2. Intro & Study Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-magenta">{data.whatIsClock[0]}</h2>
            <div className="space-y-6 text-[var(--levl-text-secondary)] font-light leading-relaxed">
              <p>{data.whatIsClock[1]}</p>
              <div>
                <strong className="block text-white mb-1">{data.whatIsClock[2]}</strong>
                <p>{data.whatIsClock[3]}</p>
              </div>
              <div>
                <strong className="block text-white mb-1">{data.whatIsClock[4]}</strong>
                <p>{data.whatIsClock[5]}</p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Search className="w-6 h-6 text-cyan" aria-hidden="true" />
              <h3 className="text-xl font-bold text-cyan tracking-wide uppercase">
                Review Architecture
              </h3>
            </div>
            <div className="space-y-6">
              {data.studyOverview.map((item, idx) => (
                <div
                  key={idx}
                  className="border-b border-[var(--levl-border)] border-opacity-30 pb-4 last:border-0 last:pb-0"
                >
                  <span className="block text-xs font-semibold tracking-widest text-[var(--levl-text-muted)] uppercase mb-1">
                    {item.label}
                  </span>
                  <span className="block text-sm text-white font-light">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Findings & Callout */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Mechanistic Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.keyFindings.map((finding, idx) => {
            let icon = <ShieldCheck aria-hidden="true" />;
            if (finding.title.includes('Multi-Pathway')) icon = <Target aria-hidden="true" />;
            if (finding.title.includes('Epigenetic')) icon = <Dna aria-hidden="true" />;
            if (finding.title.includes('Mammalian')) icon = <HeartPulse aria-hidden="true" />;
            if (finding.title.includes('Evolutionary')) icon = <Globe aria-hidden="true" />;
            return (
              <div
                key={idx}
                className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-6 hover:border-magenta hover:shadow-[0_0_20px_rgba(232,121,249,0.1)] transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-magenta bg-opacity-10 text-magenta">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold">{finding.title}</h3>
                </div>
                <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed">
                  {finding.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-magenta bg-opacity-[0.03] border border-magenta border-opacity-30 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(232,121,249,0.05)]">
          <p className="text-lg text-white font-light italic leading-relaxed max-w-3xl mx-auto">
            &ldquo;{data.findingsCallout}&rdquo;
          </p>
        </div>
      </section>

      {/* 4. Evidence Base & Mechanism */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-green uppercase mb-8 text-center">
            Review Scope &amp; Evidence Hierarchy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.reviewScope.map((scope, idx) => {
              let icon = <Globe aria-hidden="true" />;
              if (scope.title.includes('Human')) icon = <Users aria-hidden="true" />;
              if (scope.title.includes('Core')) icon = <Activity aria-hidden="true" />;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] p-6 rounded-xl hover:border-green transition-all"
                >
                  <div className="p-2 rounded-full bg-green-500 bg-opacity-10 text-green">
                    {icon}
                  </div>
                  <div>
                    <span className="block font-semibold">{scope.title}</span>
                    <span className="block text-xs text-[var(--levl-text-secondary)] mt-1">
                      {scope.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="text-sm font-semibold tracking-widest uppercase text-cyan text-center mb-12">
          The Metabolic&ndash;Epigenetic Bridge
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full text-center">
            <Beaker className="w-8 h-8 text-cyan mb-3" aria-hidden="true" />
            <span className="text-white font-semibold tracking-wide">Metabolic Flux</span>
            <span className="text-xs text-gray-400 mt-1">TCA, NAD+, Polyamines, Ketones</span>
          </div>
          <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0 shrink-0" aria-hidden="true" />
          <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full text-center">
            <Activity className="w-8 h-8 text-cyan mb-3" aria-hidden="true" />
            <span className="text-white font-semibold tracking-wide">Enzymatic Cofactors</span>
            <span className="text-xs text-gray-400 mt-1">Sirtuins, TET/JMJD, AMPK, EP300</span>
          </div>
          <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0 shrink-0" aria-hidden="true" />
          <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full text-center">
            <Target className="w-8 h-8 text-cyan mb-3" aria-hidden="true" />
            <span className="text-white font-semibold tracking-wide">Longevity Programs</span>
            <span className="text-xs text-gray-400 mt-1">Autophagy, Mitophagy &amp; Chromatin</span>
          </div>
        </div>
        <p className="text-center text-[var(--levl-text-secondary)] font-light text-sm mt-8 leading-relaxed max-w-2xl mx-auto">
          {data.mechanismDescription}
        </p>
      </section>

      {/* 5. Top 9 Geroprotective Metabolites (Interactive Tier Filter) */}
      <section className="w-full border-b border-[var(--levl-border)] border-opacity-40 bg-cyan-500 bg-opacity-[0.02] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-cyan">
              The 9 Core Endogenous Longevity Metabolites
            </h2>
            <p className="text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-8">
              Filter by highest validated evidence level across model organisms (Jiang &amp; Han, 2026).
            </p>

            {/* Filter Pills */}
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-black/50 border border-white/10">
              {['All', 'Mammalian Lifespan', 'Mammalian Healthspan', 'Invertebrate Lifespan'].map(
                (tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTierFilter(tier)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedTierFilter === tier
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tier === 'All' ? `All Metabolites (${data.topMetabolites.length})` : tier}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            {filteredMetabolites.map((met, idx) => (
              <div
                key={idx}
                className="group relative bg-[var(--levl-bg)] border border-[var(--levl-border)] rounded-2xl overflow-hidden hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-300"
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 border ${
                        met.tier === 'Mammalian Lifespan'
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : met.tier === 'Mammalian Healthspan'
                          ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                          : 'bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300'
                      }`}
                    >
                      {met.tier}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors">
                      {met.name}
                    </h3>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div>
                      <span className="block text-[10px] font-bold tracking-widest text-magenta uppercase mb-1">
                        Molecular Mechanism
                      </span>
                      <span className="block text-sm text-[var(--levl-text-secondary)] leading-relaxed">
                        {met.mechanism}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-widest text-cyan uppercase mb-1">
                        Validated Lifespan &amp; Healthspan Effect
                      </span>
                      <span className="block text-sm text-white font-light leading-relaxed">
                        {met.effect}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Translational Challenges */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-2xl font-bold mb-8 text-center text-red-400">
          Clinical &amp; Translational Nuances
        </h2>
        <div className="space-y-4 bg-red-500 bg-opacity-[0.03] border border-red-500 border-opacity-20 rounded-2xl p-8">
          {data.translationalChallenges.map((chal, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
              <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed text-sm">
                {chal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Protocol Recommendations */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
          <ShieldCheck className="w-8 h-8 text-green" aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Protocol Design Principles</h2>
        <p className="text-base font-light text-[var(--levl-text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
          How to combine endogenous metabolic cofactors into a coherent, multi-pathway longevity strategy.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
          {data.protocolRecommendations.map((rec, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-green hover:border-opacity-50 transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[var(--levl-text-secondary)] leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Standardized Conclusions & Related Research */}
      <ConclusionsSection
        paperId="metabolites"
        conclusions={data.structuredConclusions}
        protocolImplications="Endogenous metabolites act as the biochemical currency of longevity: Ca-AKG supports TET/JMJD epigenetic demethylation and restrains ATP synthase/mTOR, NAD+ precursors fuel Sirtuin-mediated nuclear-mitochondrial sync, Spermidine drives EP300/eIF5A autophagy, and Taurine supports mitochondrial tRNA fidelity."
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
