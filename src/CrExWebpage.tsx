import { useState } from 'react';
import { Header } from './components/Header';
import data from './data/crExData.json';
import {
  ShieldCheck,
  Target,
  Globe,
  Activity,
  Zap,
  CheckCircle,
  Search,
  Dna,
  FileText,
  Utensils,
  Footprints,
  Layers,
} from 'lucide-react';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const CrExWebpage = () => {
  const [selectedClockId, setSelectedClockId] = useState<string>('eml');
  const activeClock =
    data.clockBenchmarks.find((c) => c.id === selectedClockId) || data.clockBenchmarks[0];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    headline: data.titleBlock.headline,
    author: [
      {
        '@type': 'Person',
        name: data.titleBlock.authors.split(' et al.')[0],
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500 opacity-[0.07] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <a
            href={`https://doi.org/${data.titleBlock.doi}`}
            target="_blank"
            rel="noreferrer"
            className="mb-6 px-4 py-1.5 rounded-full border border-green border-opacity-30 bg-green-500 bg-opacity-[0.05] text-green text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4" aria-hidden="true" /> {data.titleBlock.journal} Study ({data.titleBlock.year}) • PMID: {data.titleBlock.pmid}
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Diet vs. Exercise <br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-medium">
              At the Multi-Omic Level
            </span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-green" aria-hidden="true" /> Key Takeaway
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              {data.keyTakeaway}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-2">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span>
                <a
                  href={`https://doi.org/${data.titleBlock.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green hover:underline hover:text-green-400 transition-colors"
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
                  className="text-green hover:underline hover:text-green-400 transition-colors"
                >
                  {data.titleBlock.pmcid}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Study Scorecard */}
      <StudyScorecard paperId="cr-ex" studyOverview={data.scorecardOverview} />

      {/* 2. Study Overview & Multi-Clock Interactive Visualization */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Search className="w-6 h-6 text-[var(--levl-text-secondary)]" aria-hidden="true" />
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">
            Two-Tier Cohort Design &amp; Biological Clocks
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {data.studyOverview.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] p-6 rounded-2xl text-center"
            >
              <span className="block text-xs font-semibold tracking-widest text-[var(--levl-text-muted)] uppercase mb-3">
                {item.label}
              </span>
              <span className="block text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Multi-Clock Comparison */}
        <div className="max-w-4xl mx-auto bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500 opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-[var(--levl-border)] pb-6 relative z-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 block mb-1">
                Interactive Clock &amp; Tissue Selector (Section 3.3 Sensitivity Analysis)
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{activeClock.name}</h3>
              <p className="text-xs text-[var(--levl-text-secondary)] font-light">
                {activeClock.tissue} — {activeClock.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedClockId('eml')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedClockId === 'eml'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Colon EML_AA (-4.91 yr)
              </button>
              <button
                onClick={() => setSelectedClockId('pheno')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedClockId === 'pheno'
                    ? 'bg-green-500/20 border-green-400 text-green-200'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Blood PhenoAA (-2.96 yr)
              </button>
              <button
                onClick={() => setSelectedClockId('horvath')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedClockId === 'horvath'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Colon Horvath (-2.25 yr)
              </button>
            </div>
          </div>

          {/* Aligned Bar Chart */}
          <div className="relative z-10 flex flex-col gap-6">
            {activeClock.bars.map((bar, idx) => {
              const maxAbs = 6.0;
              const widthPct = bar.value === 0 ? 2 : (Math.abs(bar.value) / maxAbs) * 100;

              let barStyle = 'bg-white/20 border-white/30';
              let badgeColor = 'text-gray-400 bg-white/5 border-white/10';
              if (bar.label.includes('Exercise')) {
                barStyle = bar.significant
                  ? 'bg-gradient-to-r from-cyan-800 via-cyan-500 to-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)] border-cyan-300/40'
                  : 'bg-cyan-500/30 border-cyan-400/30 opacity-60';
                badgeColor = bar.significant
                  ? 'text-cyan-300 bg-cyan-500/15 border-cyan-500/40'
                  : 'text-gray-400 bg-white/5 border-white/10';
              } else if (bar.label.includes('Calorie')) {
                barStyle = bar.significant
                  ? 'bg-gradient-to-r from-green-800 via-green-500 to-green-300 shadow-[0_0_25px_rgba(74,222,128,0.35)] border-green-300/40'
                  : 'bg-green-500/30 border-green-400/30 opacity-60';
                badgeColor = bar.significant
                  ? 'text-green-300 bg-green-500/15 border-green-500/40'
                  : 'text-gray-400 bg-white/5 border-white/10';
              }

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                    <span className="font-semibold text-white">{bar.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-white">
                        {bar.value === 0 ? '0.00 yr (Ref)' : `${bar.value} yr`}
                      </span>
                      <span className={`px-2 py-0.5 rounded border text-[11px] font-mono ${badgeColor}`}>
                        {bar.pVal}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-9 bg-black/50 rounded-xl border border-white/10 p-1 relative overflow-hidden flex items-center">
                    {/* Grid ticks at 25%, 50%, 75% (-1.5, -3.0, -4.5 yr) */}
                    <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                      <div className="border-r border-white/5" />
                      <div className="border-r border-white/5" />
                      <div className="border-r border-white/5" />
                      <div />
                    </div>

                    <div
                      className={`h-full rounded-lg border transition-all duration-500 flex items-center justify-end pr-3 ${barStyle}`}
                      style={{ width: `${Math.max(widthPct, 3)}%` }}
                    >
                      {Math.abs(bar.value) >= 1.5 && (
                        <span className="text-xs font-mono font-black text-slate-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
                          {bar.value} yr
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Axis Scale */}
            <div className="flex justify-between text-[11px] text-gray-400 font-mono pt-1 px-1">
              <span>0.0 yr (Western Diet)</span>
              <span>-1.5 yr</span>
              <span>-3.0 yr</span>
              <span>-4.5 yr</span>
              <span>-6.0 yr</span>
            </div>
          </div>

          <p className="text-xs text-gray-300 mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/10 leading-relaxed">
            <strong className="text-white">Study Note:</strong> {activeClock.footnote}
          </p>

          {/* Complete 3-Clock Summary Table */}
          <div className="mt-8 pt-6 border-t border-white/10 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 font-mono uppercase">
                  <th className="py-2 pr-4">Biological Aging Clock</th>
                  <th className="py-2 px-4">Tissue / Sample</th>
                  <th className="py-2 px-4">Calorie Restriction (CR)</th>
                  <th className="py-2 pl-4">Endurance Exercise (EX)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-white">PhenoAge Acceleration (PhenoAA)</td>
                  <td className="py-2.5 px-4">Venous Blood (n = 117)</td>
                  <td className="py-2.5 px-4 font-mono text-green-400 font-bold">-2.96 yr (p = 0.003)</td>
                  <td className="py-2.5 pl-4 font-mono text-gray-400">n.s. vs WD</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-white">Horvath Epigenetic Clock (DNAmAA)</td>
                  <td className="py-2.5 px-4">Colon Mucosa Biopsy</td>
                  <td className="py-2.5 px-4 font-mono text-gray-400">n.s. vs WD</td>
                  <td className="py-2.5 pl-4 font-mono text-cyan-400 font-bold">-2.25 yr (p = 0.04)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-semibold text-white">Epigenetic Mutation Load (EML_AA)</td>
                  <td className="py-2.5 px-4">Colon Mucosa Biopsy</td>
                  <td className="py-2.5 px-4 font-mono text-gray-400">n.s. vs WD</td>
                  <td className="py-2.5 pl-4 font-mono text-cyan-400 font-bold">-4.91 yr (p = 0.003)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. The "Vs" Layout */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold mb-14 text-center text-white">Parallel Pathways to Youth</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Calorie Restriction Pillar */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-green border-opacity-30 pb-4">
              <div className="w-14 h-14 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                <Utensils className="w-6 h-6 text-green" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-green">{data.comparison.cr.title}</h3>
            </div>

            <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:border-green hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all flex-1">
              <span className="block text-[10px] font-bold tracking-widest text-green uppercase mb-2">
                Primary Mechanism
              </span>
              <p className="text-[var(--levl-text-secondary)] font-light mb-8">
                {data.comparison.cr.primaryMechanism}
              </p>

              <span className="block text-[10px] font-bold tracking-widest text-green uppercase mb-2">
                Biomarkers Improved
              </span>
              <p className="text-white font-light leading-relaxed">
                {data.comparison.cr.biomarkersImproved}
              </p>
            </div>
          </div>

          {/* Endurance Exercise Pillar */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-cyan border-opacity-30 pb-4">
              <div className="w-14 h-14 rounded-full bg-cyan-500 bg-opacity-10 border border-cyan border-opacity-40 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.15)]">
                <Footprints className="w-6 h-6 text-cyan" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-cyan">{data.comparison.ex.title}</h3>
            </div>

            <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all flex-1">
              <span className="block text-[10px] font-bold tracking-widest text-cyan uppercase mb-2">
                Primary Mechanism
              </span>
              <p className="text-[var(--levl-text-secondary)] font-light mb-8">
                {data.comparison.ex.primaryMechanism}
              </p>

              <span className="block text-[10px] font-bold tracking-widest text-cyan uppercase mb-2">
                Biomarkers Improved
              </span>
              <p className="text-white font-light leading-relaxed">
                {data.comparison.ex.biomarkersImproved}
              </p>
            </div>
          </div>
        </div>

        {/* Shared Mechanisms: Molecular Venn Diagram */}
        <div className="mt-20 pt-14 border-t border-[var(--levl-border)] border-opacity-30 relative max-w-4xl mx-auto">
          <h3 className="text-center text-2xl font-bold mb-12 text-white tracking-wide">
            The Molecular Overlap
          </h3>

          <div className="relative h-[300px] md:h-[360px] flex items-center justify-center overflow-visible">
            <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full border border-green border-opacity-50 bg-green-500 bg-opacity-10 mix-blend-screen flex items-center shadow-[0_0_50px_rgba(34,197,94,0.15)] transition-transform hover:scale-105 hover:bg-opacity-20 z-10 -translate-x-[60px] md:-translate-x-[95px]">
              <div className="text-center absolute left-[15px] md:left-[28px] top-1/2 -translate-y-1/2 w-24 md:w-32">
                <span className="block text-green font-bold text-lg md:text-xl mb-1">
                  Calorie
                  <br />
                  Restriction
                </span>
                <span className="text-[10px] md:text-xs text-green opacity-80 leading-tight block">
                  Blood PhenoAge (-2.96 yr), Ether Lipids &amp; Microbiome
                </span>
              </div>
            </div>

            <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full border border-cyan border-opacity-50 bg-cyan-500 bg-opacity-10 mix-blend-screen flex items-center shadow-[0_0_50px_rgba(14,165,233,0.15)] transition-transform hover:scale-105 hover:bg-opacity-20 z-10 translate-x-[60px] md:translate-x-[95px]">
              <div className="text-center absolute right-[15px] md:right-[28px] top-1/2 -translate-y-1/2 w-24 md:w-32">
                <span className="block text-cyan font-bold text-lg md:text-xl mb-1">
                  Endurance
                  <br />
                  Exercise
                </span>
                <span className="text-[10px] md:text-xs text-cyan opacity-80 leading-tight block">
                  Colon DNAm (-2.25 yr) &amp; Epigenetic Mutation Load (-4.91 yr)
                </span>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-[120px] md:w-[150px] pointer-events-none">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-2 opacity-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" aria-hidden="true" />
              <span className="block text-white font-bold text-sm md:text-base mb-1.5 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
                Shared Youthful Features
              </span>
              <span className="text-[10px] md:text-xs text-white opacity-90 leading-tight block drop-shadow-[0_0_8px_rgba(0,0,0,1)]">
                Lower Oxidative Stress &amp; Basal Transcription Noise
              </span>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mt-6 relative z-30 bg-[var(--levl-bg)] p-4 rounded-xl border border-[var(--levl-border)] bg-opacity-80 backdrop-blur-sm">
            <p className="text-sm text-[var(--levl-text-secondary)] font-light italic leading-relaxed">
              &ldquo;{data.sharedMechanisms}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4. Multi-Omic Layers */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="text-center mb-14">
          <Layers className="w-10 h-10 text-[var(--levl-text-muted)] mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-bold mb-4">The 6-Layer Multi-Omic Assessment Model</h2>
          <p className="text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto">
            In the deep-phenotyped sub-cohort (n = 41), researchers integrated colon mucosa biopsies, plasma, and stool across six complementary molecular layers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.multiOmics.map((layer, idx) => {
            let icon = <Activity aria-hidden="true" />;
            if (layer.icon === 'Dna') icon = <Dna aria-hidden="true" />;
            if (layer.icon === 'FileText') icon = <FileText aria-hidden="true" />;
            if (layer.icon === 'Globe') icon = <Globe aria-hidden="true" />;
            return (
              <div
                key={idx}
                className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] p-6 rounded-2xl flex flex-col items-center text-center"
              >
                <div className="p-3 rounded-full bg-white bg-opacity-5 text-white mb-4">
                  {icon}
                </div>
                <h3 className="text-sm font-bold mb-2">{layer.title}</h3>
                <p className="text-xs text-[var(--levl-text-secondary)] font-light leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Protocol Recommendations */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
          <Target className="w-8 h-8 text-green" aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Actionable Protocol Strategy</h2>
        <p className="text-base font-light text-[var(--levl-text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
          How to combine the distinct molecular benefits of nutritional moderation and aerobic endurance training.
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
        paperId="cr-ex"
        conclusions={data.structuredConclusions}
        protocolImplications="Neither diet alone nor endurance training alone captures the complete longevity phenotype. Combining caloric/metabolic restraint (which lowers systemic blood PhenoAge and optimizes ether-lipid/bile-acid metabolism) with regular aerobic exercise (which suppresses colon tissue epigenetic mutation load by -4.91 years) provides orthogonal, non-redundant protection."
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
