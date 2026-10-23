import { useState } from 'react';
import { Header } from './components/Header';
import data from './data/agingClocksData.json';
import {
  Brain,
  HeartPulse,
  Activity,
  Target,
  ShieldCheck,
  Globe,
  ArrowRight,
  Zap,
  CheckCircle,
  Users,
  Search,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { LineChart } from './components/LineChart';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const AgingClocksWebpage = () => {
  const [selectedOrganId, setSelectedOrganId] = useState<string>('brain');
  const [ageotypeMode, setAgeotypeMode] = useState<'aged' | 'youthful'>('aged');

  const selectedOrgan =
    data.organProfiles.find((o) => o.id === selectedOrganId) || data.organProfiles[0];

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
      name: 'Nature Aging',
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
            <Zap className="w-4 h-4" aria-hidden="true" /> Nature Aging Study (2026) • PMID: {data.titleBlock.pmid}
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Your Organs Are Aging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan-400">
              at Different Rates.
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
            <span className="text-sm font-semibold tracking-wide text-[var(--levl-text-secondary)] italic text-center max-w-2xl">
              &ldquo;{data.titleBlock.headline}&rdquo;
            </span>
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
      <StudyScorecard paperId="aging-clocks" studyOverview={data.scorecardOverview} />

      {/* 2. Intro & Study Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-magenta">
              What is an Organ-Specific Aging Clock?
            </h2>
            <div className="space-y-6 text-[var(--levl-text-secondary)] font-light leading-relaxed">
              <p>{data.whatIsClock[0]}</p>
              <div>
                <strong className="block text-white mb-1">{data.whatIsClock[1]}</strong>
                <p>{data.whatIsClock[2]}</p>
              </div>
              <div>
                <strong className="block text-white mb-1">{data.whatIsClock[3]}</strong>
                <p>{data.whatIsClock[4]}</p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Search className="w-6 h-6 text-cyan" aria-hidden="true" />
              <h3 className="text-xl font-bold text-cyan tracking-wide uppercase">
                Cohort & Assay Design
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

      {/* 3. Key Findings & Multi-Cohort Validation */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Findings & Global Validation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.keyFindings.map((finding, idx) => {
            let icon = <ShieldCheck aria-hidden="true" />;
            if (finding.title.includes('Predictive')) icon = <Target aria-hidden="true" />;
            if (finding.title.includes('Brain')) icon = <Brain aria-hidden="true" />;
            if (finding.title.includes('Cross-Ancestry')) icon = <Globe aria-hidden="true" />;
            if (finding.title.includes('Genetic')) icon = <Activity aria-hidden="true" />;
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

        {/* Multi-Cohort Validation */}
        <div className="bg-green-500 bg-opacity-[0.03] border border-green border-opacity-30 rounded-2xl p-8 text-center">
          <h3 className="text-sm font-semibold tracking-widest text-green uppercase mb-4">
            Multi-Cohort Cross-Ancestry Validation (n = 48,393)
          </h3>
          <p className="text-xs text-[var(--levl-text-secondary)] mb-8 max-w-2xl mx-auto">
            Trained in the UK Biobank (70:30 split) and externally validated in two independent cohorts from China and the United States using Olink Explore 3072 plasma proteomics (cross-cohort r = 0.98 and 0.93).
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-green-500 bg-opacity-10 px-6 py-3 rounded-full border border-green border-opacity-20">
              <Users className="w-5 h-5 text-green" aria-hidden="true" />
              <div className="text-left">
                <span className="block text-sm font-bold text-white">UK Biobank (Discovery)</span>
                <span className="block text-[11px] text-[var(--levl-text-secondary)]">
                  n = 43,616 (Ages 37–70)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-500 bg-opacity-10 px-6 py-3 rounded-full border border-green border-opacity-20">
              <Users className="w-5 h-5 text-green" aria-hidden="true" />
              <div className="text-left">
                <span className="block text-sm font-bold text-white">China Kadoorie Biobank (CKB)</span>
                <span className="block text-[11px] text-[var(--levl-text-secondary)]">
                  n = 3,977 (Ages 30–78, r = 0.98)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-500 bg-opacity-10 px-6 py-3 rounded-full border border-green border-opacity-20">
              <Users className="w-5 h-5 text-green" aria-hidden="true" />
              <div className="text-left">
                <span className="block text-sm font-bold text-white">US Nurses&apos; Health Study (NHS)</span>
                <span className="block text-[11px] text-[var(--levl-text-secondary)]">
                  n = 800 (30-Yr Follow-Up, r = 0.93)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Mechanism */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-cyan text-center mb-12">
          The Proteomic Clock Pipeline
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full text-center">
            <Activity className="w-8 h-8 text-cyan mb-3" aria-hidden="true" />
            <span className="text-white font-semibold tracking-wide">2,916 Plasma Proteins</span>
            <span className="text-xs text-gray-400 mt-1">418 Organ-Enriched (&ge;4x in GTEx)</span>
          </div>
          <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0 shrink-0" aria-hidden="true" />
          <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full text-center">
            <Brain className="w-8 h-8 text-cyan mb-3" aria-hidden="true" />
            <span className="text-white font-semibold tracking-wide">10 Organ + 1 Organismal Clocks</span>
            <span className="text-xs text-gray-400 mt-1">LightGBM + Boruta Selection</span>
          </div>
          <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0 shrink-0" aria-hidden="true" />
          <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full text-center">
            <Target className="w-8 h-8 text-cyan mb-3" aria-hidden="true" />
            <span className="text-white font-semibold tracking-wide">Organ Age Gap &amp; Ageotypes</span>
            <span className="text-xs text-gray-400 mt-1">&pm;1.5 SD Risk Stratification</span>
          </div>
        </div>
      </section>

      {/* 5. Disease-Specific Links & Interactive Organ Explorer */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Organ-Specific Disease Hazard Ratios</h2>
          <p className="text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto">
            Adjusted hazard ratios per 1-SD increase in organ age gap across the UK Biobank (n = 43,616), illustrating both organ-matched and cross-organ cardiometabolic risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Brain Card */}
          <div className="flex flex-col items-center justify-between p-8 rounded-2xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-500">
            <div className="flex flex-col items-center">
              <Brain className="w-12 h-12 text-cyan mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold tracking-wide text-white mb-6">Brain Aging</h3>
            </div>
            <div className="text-center w-full bg-cyan-500 bg-opacity-[0.05] p-6 rounded-xl border border-cyan border-opacity-20">
              <span className="block text-4xl font-bold text-white mb-1">1.88x</span>
              <span className="block text-sm text-cyan font-semibold tracking-widest uppercase mb-4">
                All-Cause Dementia Risk
              </span>
              <div className="w-12 h-px bg-cyan opacity-40 mx-auto mb-4" />
              <span className="block text-xs text-[var(--levl-text-secondary)] mb-1">
                All-Cause Mortality: <strong className="text-white">1.44x HR</strong> (Strongest Organ)
              </span>
              <span className="block text-xs text-[var(--levl-text-secondary)]">
                Multiple Sclerosis: <strong className="text-white">1.52x</strong> • Parkinson&apos;s: <strong className="text-white">1.30x</strong>
              </span>
            </div>
          </div>

          {/* Kidney Card (with paired T2D and CKD HRs from PMC12823432) */}
          <div className="flex flex-col items-center justify-between p-8 rounded-2xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-500">
            <div className="flex flex-col items-center">
              <Activity className="w-12 h-12 text-cyan mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold tracking-wide text-white mb-6">Kidney Aging</h3>
            </div>
            <div className="text-center w-full bg-cyan-500 bg-opacity-[0.05] p-6 rounded-xl border border-cyan border-opacity-20">
              <span className="block text-4xl font-bold text-white mb-1">2.08x</span>
              <span className="block text-sm text-cyan font-semibold tracking-widest uppercase mb-4">
                Type 2 Diabetes Risk
              </span>
              <div className="w-12 h-px bg-cyan opacity-40 mx-auto mb-4" />
              <span className="block text-xs text-[var(--levl-text-secondary)] mb-1">
                Chronic Kidney Disease (CKD): <strong className="text-white">1.78x HR</strong>
              </span>
              <span className="block text-xs text-[var(--levl-text-secondary)]">
                Explains 38% of multi-organ T2D risk &amp; 17% of CKD risk
              </span>
            </div>
          </div>

          {/* Intestine Card (with paired CKD and T2D HRs from PMC12823432) */}
          <div className="flex flex-col items-center justify-between p-8 rounded-2xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-500">
            <div className="flex flex-col items-center">
              <HeartPulse className="w-12 h-12 text-cyan mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold tracking-wide text-white mb-6">Intestine Aging</h3>
            </div>
            <div className="text-center w-full bg-cyan-500 bg-opacity-[0.05] p-6 rounded-xl border border-cyan border-opacity-20">
              <span className="block text-4xl font-bold text-white mb-1">1.93x</span>
              <span className="block text-sm text-cyan font-semibold tracking-widest uppercase mb-4">
                Chronic Kidney Disease Risk
              </span>
              <div className="w-12 h-px bg-cyan opacity-40 mx-auto mb-4" />
              <span className="block text-xs text-[var(--levl-text-secondary)] mb-1">
                Type 2 Diabetes (T2D): <strong className="text-white">1.54x HR</strong>
              </span>
              <span className="block text-xs text-[var(--levl-text-secondary)]">
                Top driver of combined physical &amp; neuropsychiatric multimorbidity
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Organ System Deep-Dive Explorer */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan block mb-1">
                Interactive Organ Clock Explorer
              </span>
              <h3 className="text-xl font-bold text-white">
                Inspect Organ-Specific Proteomic Signatures &amp; Disease Networks
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.organProfiles.map((org) => (
                <button
                  key={org.id}
                  onClick={() => setSelectedOrganId(org.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    selectedOrganId === org.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {org.name.replace(' Clock', '')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 bg-black/40 border border-cyan-500/20 rounded-xl p-6 text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
                {selectedOrgan.name}
              </span>
              <div className="text-5xl font-black text-cyan-400 mb-2">
                {selectedOrgan.primaryMetric}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                {selectedOrgan.primaryLabel}
              </div>
              <div className="text-xs text-gray-400 border-t border-white/10 pt-3">
                <strong className="text-gray-200">Proteomic Basis:</strong> {selectedOrgan.proteins}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-magenta mb-2">
                  Validated Clinical &amp; Epidemiological Associations
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedOrgan.secondaryMetrics.map((metric, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-gray-200 bg-white/[0.02] border border-white/5 p-3 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  Pathogenic &amp; Molecular Mechanism
                </span>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {selectedOrgan.mechanism}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Danger Zone & Super-Youthful Resilience (Moved LineCharts Here + Interactive Toggle) */}
      <section className="w-full border-y border-magenta border-opacity-20 bg-magenta bg-opacity-[0.02] py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-magenta mb-3">
                Extreme Multi-Organ Ageotypes (&pm;1.5 SD)
              </h2>
              <p className="text-2xl md:text-4xl font-bold leading-tight text-white mb-4">
                {ageotypeMode === 'aged' ? (
                  <>
                    Multiple extremely aged organs{' '}
                    <span className="text-magenta">compound mortality risk 7.8-fold.</span>
                  </>
                ) : (
                  <>
                    Multiple super-youthful organs{' '}
                    <span className="text-green">slash mortality by 60% and dementia by 75%.</span>
                  </>
                )}
              </p>
              <p className="text-sm text-[var(--levl-text-secondary)] max-w-2xl leading-relaxed mb-6">
                In the UK Biobank, 40% of participants had at least one extremely aged organ (&gt; +1.5 SD age gap) and 47% had at least one super-youthful organ (&lt; &minus;1.5 SD age gap). Toggle below to compare the exponential risk of multi-organ aging against the protective shield of multi-organ youthfulness.
              </p>

              {/* Interactive Toggle */}
              <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/15">
                <button
                  onClick={() => setAgeotypeMode('aged')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    ageotypeMode === 'aged'
                      ? 'bg-magenta text-black shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Extremely Aged Organs (&gt; +1.5 SD)</span>
                </button>
                <button
                  onClick={() => setAgeotypeMode('youthful')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    ageotypeMode === 'youthful'
                      ? 'bg-green text-black shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Super-Youthful Organs (&lt; &minus;1.5 SD)</span>
                </button>
              </div>
            </div>

            <div
              className={`flex-shrink-0 flex flex-col items-center justify-center w-56 h-56 rounded-full border relative transition-all duration-500 ${
                ageotypeMode === 'aged'
                  ? 'border-magenta/40 bg-magenta/5 shadow-[0_0_50px_rgba(232,121,249,0.15)]'
                  : 'border-green/40 bg-green/5 shadow-[0_0_50px_rgba(34,197,94,0.15)]'
              }`}
            >
              <span className="text-6xl font-bold text-white mb-1">
                {ageotypeMode === 'aged' ? '7.8x' : '-75%'}
              </span>
              <span
                className={`text-xs font-semibold tracking-wider uppercase ${
                  ageotypeMode === 'aged' ? 'text-magenta' : 'text-green'
                }`}
              >
                {ageotypeMode === 'aged' ? 'Mortality Risk' : 'Dementia Risk'}
              </span>
              <span className="text-xs text-[var(--levl-text-secondary)] mt-2 opacity-80">
                {ageotypeMode === 'aged' ? '(5+ Aged Organs)' : '(5+ Youthful Organs)'}
              </span>
            </div>
          </div>

          {/* Dose-Response Line Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[var(--levl-bg)] border border-[var(--levl-border)] rounded-2xl p-6 md:p-8 flex items-center justify-center">
              <div className="w-full">
                <LineChart
                  data={
                    ageotypeMode === 'aged'
                      ? data.mortalityLineChart
                      : data.youthfulMortalityLineChart
                  }
                />
              </div>
            </div>
            <div className="bg-[var(--levl-bg)] border border-[var(--levl-border)] rounded-2xl p-6 md:p-8 flex items-center justify-center">
              <div className="w-full">
                <LineChart
                  data={
                    ageotypeMode === 'aged'
                      ? data.dementiaLineChart
                      : data.youthfulDementiaLineChart
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Protocol Recommendations */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
          <ShieldCheck className="w-8 h-8 text-green" aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Actionable Longevity Protocol Strategy</h2>
        <p className="text-base font-light text-[var(--levl-text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
          Because organ aging is shaped by modifiable environmental and lifestyle determinants alongside genetics, organ-specific proteomic clocks enable targeted prevention before clinical disease manifests.
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
        paperId="aging-clocks"
        conclusions={data.structuredConclusions}
        protocolImplications="Whole-body biological age clocks can look reassuringly normal even when an individual organ—such as the brain, artery, or kidney—is aging rapidly. Combining systemic metabolic support with organ-targeted lifestyle interventions (restorative sleep, aerobic exercise, omega-3 intake, and glycemic/vascular control) helps preserve multi-organ youthfulness."
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
