import { Header } from './components/Header';
import data from './data/pf4Data.json';
import {
  ShieldCheck,
  Target,
  Activity,
  Zap,
  CheckCircle,
  Brain,
  Droplet,
  ArrowRight,
  Dna,
  ExternalLink,
} from 'lucide-react';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const Pf4Webpage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    headline: data.titleBlock.headline,
    author: [
      {
        '@type': 'Person',
        name: 'Schroer, A.B., Park, C., Leiter, O.',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: data.titleBlock.journal,
    },
    sameAs: `https://doi.org/${data.titleBlock.doi}`,
    abstract: data.conclusions.join(' '),
  };

  return (
    <div
      id="infographic"
      className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-rose-600 selection:text-white pb-24"
    >
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Hero Cover */}
      <section className="relative w-full pt-28 pb-20 flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <a
            href={`https://doi.org/${data.titleBlock.doi}`}
            target="_blank"
            rel="noreferrer"
            className="mb-6 px-4 py-1.5 rounded-full border border-red-500 border-opacity-30 bg-red-500 bg-opacity-[0.05] text-red-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4" aria-hidden="true" /> {data.titleBlock.journal} Triad ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            The Unified Messenger
            <br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-medium">
              Of Systemic Brain Rejuvenation (PF4)
            </span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-red-400" aria-hidden="true" /> Key Takeaway
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Three simultaneous August 2023 Nature Portfolio studies proved that <strong className="text-white">Young Blood</strong>, <strong className="text-white">Klotho</strong>, and <strong className="text-white">Aerobic Exercise</strong> all converge on a single platelet-secreted cytokine—<strong className="text-white">Platelet Factor 4 (PF4/CXCL4)</strong>—which signals via <strong className="text-white">CXCR3</strong> to calm neuroinflammation, boost hippocampal neurogenesis, and restore youthful cognition.
            </p>
          </div>

          {/* Companion Papers Triad Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full text-left">
            {data.titleBlock.companionPapers.map((cp, idx) => (
              <a
                key={idx}
                href={`https://doi.org/${cp.doi}`}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-red-500/40 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-red-400 mb-1">
                  <span>{cp.journal}</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <div className="text-xs font-bold text-white mb-1">{cp.focus}</div>
                <div className="text-[11px] text-gray-400">{cp.authors}</div>
                <div className="text-[10px] font-mono text-gray-500 mt-1">
                  DOI: {cp.doi} • PMID: {cp.pmid}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized Study Scorecard */}
      <StudyScorecard paperId="pf4" studyOverview={data.scorecardOverview} />

      {/* 2. What is PF4? */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40 relative">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-14 text-center">
          The Master Messenger (CXCL4 / PF4)
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.whatIsPF4.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-3 flex items-center gap-2">
                  <Droplet className="w-4 h-4" aria-hidden="true" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full">
                  {data.whatIsPF4[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Convergence of Rejuvenation */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4 text-center">
          The Convergence of Rejuvenation
        </h2>
        <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-14">
          {data.mechanismDescription}
        </p>

        <div className="relative bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-10 blur-[60px] pointer-events-none" />

          {/* The 3 Pillars (Left) */}
          <div className="flex flex-col gap-5 w-full md:w-2/5 relative z-10">
            {data.pathways.map((pathway, i) => (
              <div
                key={i}
                className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-4 relative group"
              >
                <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  {i === 0 && <Droplet className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />}
                  {i === 1 && <Dna className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />}
                  {i === 2 && <Activity className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />}
                  <span>{pathway.name}</span>
                </h3>
                <p className="text-xs text-[var(--levl-text-muted)] font-light leading-relaxed">
                  {pathway.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Node (PF4 -> CXCR3) */}
          <div className="flex flex-col items-center justify-center relative z-10 w-full md:w-1/4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-rose-700 shadow-[0_0_30px_rgba(225,29,72,0.6)] flex flex-col items-center justify-center mb-3 border-2 border-white border-opacity-20 relative">
              <span className="text-xl font-bold text-white tracking-widest">PF4</span>
              <span className="text-[10px] font-mono text-rose-100">CXCL4</span>
            </div>
            <span className="text-xs text-red-300 font-mono uppercase tracking-widest text-center">
              Via CXCR3 Receptor
            </span>
            <span className="text-[11px] text-gray-400 text-center mt-1">
              (Peripheral Immune-Brain Axis)
            </span>
          </div>

          <div className="hidden md:flex items-center justify-center relative z-10">
            <ArrowRight className="w-8 h-8 text-red-400 opacity-80" aria-hidden="true" />
          </div>

          {/* End Node (Brain Rejuvenation) */}
          <div className="flex flex-col items-center justify-center relative z-10 w-full md:w-1/3 bg-white bg-opacity-[0.02] border border-[var(--levl-border)] p-6 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-cyan-900 bg-opacity-30 border border-cyan-500 border-opacity-30 flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-cyan-400" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-white mb-3">Hippocampal Rescue</h3>
            <ul className="space-y-2 text-xs text-[var(--levl-text-secondary)] font-light text-center">
              <li>&darr; Microglial TNF-&alpha; &amp; Complement</li>
              <li>&uarr; Dentate Gyrus Neurogenesis</li>
              <li>&uarr; CREB &amp; GluN2B Synaptic LTP</li>
              <li>&uarr; Spatial Learning &amp; Memory</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-14 text-center">
          Breakthrough Findings Across the Triad
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-[0.02] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-opacity-[0.04] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                  {finding.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Protocol Implications */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 text-center flex items-center justify-center gap-3">
            <Target className="w-6 h-6 text-red-400" aria-hidden="true" /> Protocol Implications
          </h2>
          <div className="bg-red-900 bg-opacity-10 border border-red-500 border-opacity-20 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed">
                    {rec}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Standardized Conclusions & Related Research */}
      <ConclusionsSection
        paperId="pf4"
        conclusions={data.structuredConclusions}
        protocolImplications="Because endurance exercise naturally stimulates platelets to release CXCL4/PF4 and upregulates circulating Klotho, consistent aerobic training directly engages the same peripheral CXCR3–hippocampal neurogenesis axis discovered in young-blood parabiosis."
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
