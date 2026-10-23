import { useState } from 'react';
import { Header } from './components/Header';
import data from './data/rapamycinData.json';
import { Target, Activity, ShieldCheck, CheckCircle, Flame, Leaf } from 'lucide-react';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const RapamycinWebpage = () => {
  const [metricView, setMetricView] = useState<'remaining' | 'overall'>('remaining');

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
    abstract: data.conclusions.join(' '),
  };

  return (
    <div
      id="infographic"
      className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-indigo-500 selection:text-white pb-24 relative overflow-hidden"
    >
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Hero Cover */}
      <section className="relative w-full pt-28 pb-20 flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <a
            href={`https://doi.org/${data.titleBlock.doi}`}
            target="_blank"
            rel="noreferrer"
            className="mb-6 px-4 py-1.5 rounded-full border border-indigo-500 border-opacity-30 bg-indigo-500 bg-opacity-[0.05] text-indigo-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all cursor-pointer"
          >
            <Target className="w-4 h-4" aria-hidden="true" /> {data.titleBlock.journal} NIA ITP Study ({data.titleBlock.year}) • PMID: {data.titleBlock.pmid}
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            The Pharmacological
            <br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300 font-medium tracking-tight">
              Benchmark of Mammalian Longevity
            </span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-indigo-400" aria-hidden="true" /> Key Takeaway
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Initiating microencapsulated <strong className="text-white">Rapamycin</strong> at 600 days of age (~60 human years) across three independent NIA ITP laboratories inhibited <strong className="text-white">mTORC1</strong> to extend remaining life expectancy by <strong className="text-indigo-300">+38% in females</strong> and <strong className="text-indigo-300">+28% in males</strong> (and overall maximum lifespan by <strong className="text-white">+14% in females</strong> and <strong className="text-white">+9% in males</strong>).
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-2">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>Harrison, D.E., Strong, R., Sharp, Z.D., Miller, R.A. et al.</span>
              <span>|</span>
              <span>
                <a
                  href={`https://doi.org/${data.titleBlock.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors"
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
                  className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors"
                >
                  {data.titleBlock.pmcid}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Study Scorecard */}
      <StudyScorecard paperId="rapamycin" studyOverview={data.scorecardOverview} />

      {/* 2. What is mTOR? */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-14 text-center">
          The Master Nutrient-Sensing Switch (mTORC1 vs. mTORC2)
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.whatIsMtor.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 shrink-0" aria-hidden="true" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full backdrop-blur-sm">
                  {data.whatIsMtor[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Interactive Lifespan Metric Comparison + The Biological Seesaw */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        {/* Interactive Metric Comparison Card */}
        <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-1">
                Survival Metric Comparator (Started at 600 Days of Age)
              </span>
              <h3 className="text-2xl font-bold text-white">
                {metricView === 'remaining'
                  ? 'Remaining Life Expectancy From Treatment Onset (600 Days)'
                  : 'Overall Maximum Lifespan From Birth (90th Percentile Age)'}
              </h3>
            </div>
            <div className="inline-flex p-1 rounded-xl bg-black/50 border border-white/15 shrink-0">
              <button
                onClick={() => setMetricView('remaining')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  metricView === 'remaining'
                    ? 'bg-indigo-500 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Remaining Expectancy (+38% / +28%)
              </button>
              <button
                onClick={() => setMetricView('overall')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  metricView === 'overall'
                    ? 'bg-indigo-500 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Total Max Lifespan (+14% / +9%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                  Female UM-HET3 Mice (Pooled 3 Sites)
                </span>
                <span className="text-xs font-mono text-gray-400">p &lt; 0.0001</span>
              </div>
              <div className="text-5xl font-black text-indigo-400 mb-2">
                {metricView === 'remaining' ? '+38%' : '+14%'}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {metricView === 'remaining'
                  ? 'Increase in remaining life expectancy after initiating microencapsulated rapamycin at 600 days of age (~60 human years).'
                  : 'Increase in 90th-percentile overall maximum lifespan from birth (rising from 1,094 days in controls to 1,245 days in rapamycin-fed females).'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-violet-950/20 border border-violet-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-300">
                  Male UM-HET3 Mice (Pooled 3 Sites)
                </span>
                <span className="text-xs font-mono text-gray-400">p &lt; 0.0001</span>
              </div>
              <div className="text-5xl font-black text-violet-400 mb-2">
                {metricView === 'remaining' ? '+28%' : '+9%'}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {metricView === 'remaining'
                  ? 'Increase in remaining life expectancy after initiating microencapsulated rapamycin at 600 days of age (~60 human years).'
                  : 'Increase in 90th-percentile overall maximum lifespan from birth (rising from 1,078 days in controls to 1,179 days in rapamycin-fed males).'}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white mb-4 text-center">
          The Biological Seesaw
        </h2>
        <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-14">
          {data.mechanismDescription}
        </p>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-full px-4 py-2 text-xs font-bold tracking-widest text-white mb-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              mTORC1
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-gray-500 to-transparent" />
          </div>

          {/* mTOR ON (Left) */}
          <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500 opacity-5 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-10" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 border-b border-[var(--levl-border)] pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Flame className="w-6 h-6 text-rose-400" aria-hidden="true" /> {data.seesawStates.mtorOn.title}
                  </h3>
                  <span className="text-xs font-light text-[var(--levl-text-muted)] tracking-wider uppercase mt-1 block">
                    {data.seesawStates.mtorOn.subtitle}
                  </span>
                </div>
              </div>
              <ul className="space-y-4">
                {data.seesawStates.mtorOn.attributes.map((attr, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-[var(--levl-text-secondary)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    {attr}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* mTOR OFF (Right) */}
          <div className="bg-indigo-900 bg-opacity-10 border border-indigo-500 border-opacity-20 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.05)] group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-10 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 border-b border-indigo-500 border-opacity-20 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Leaf className="w-6 h-6 text-indigo-400" aria-hidden="true" /> {data.seesawStates.mtorOff.title}
                  </h3>
                  <span className="text-xs font-light text-[var(--levl-text-muted)] tracking-wider uppercase mt-1 block">
                    {data.seesawStates.mtorOff.subtitle}
                  </span>
                </div>
              </div>
              <ul className="space-y-4">
                {data.seesawStates.mtorOff.attributes.map((attr, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-[var(--levl-text-secondary)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <span className={i === 3 ? 'text-indigo-300 font-semibold' : ''}>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-14 text-center">
          Landmark NIA ITP Outcomes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div
              key={i}
              className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all group backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
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
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-8 relative z-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 text-center flex items-center justify-center gap-3">
            <Activity className="w-6 h-6 text-indigo-400" aria-hidden="true" /> Protocol &amp; Dosing Implications
          </h2>
          <div className="bg-indigo-900 bg-opacity-10 border border-indigo-500 border-opacity-20 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-[0_0_40px_rgba(99,102,241,0.05)]">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-indigo-400 font-bold mt-0.5">•</span>
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
      <div className="relative z-10">
        <ConclusionsSection
          paperId="rapamycin"
          conclusions={data.structuredConclusions}
          protocolImplications="In subsequent NIA ITP studies (Strong et al., 2016), combining rapamycin with metformin produced an additive +23% median lifespan extension in both male and female mice—underscoring the synergy between mTORC1 restraint and AMPK activation."
        />
      </div>

      {/* Global Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};
