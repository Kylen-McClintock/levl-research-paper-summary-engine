import { Header } from './components/Header';
import data from './data/carTData.json';
import {
  ShieldCheck,
  Target,
  Activity,
  Zap,
  CheckCircle,
  Crosshair,
  Shield,
  Syringe,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const CarTWebpage = () => {
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
      className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-amber-500 selection:text-white pb-24"
    >
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Hero Cover */}
      <section className="relative w-full pt-28 pb-20 flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <a
            href={`https://doi.org/${data.titleBlock.doi}`}
            target="_blank"
            rel="noreferrer"
            className="mb-6 px-4 py-1.5 rounded-full border border-amber-500 border-opacity-30 bg-amber-500 bg-opacity-[0.05] text-amber-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" /> {data.titleBlock.journal} Study ({data.titleBlock.year}) • PMID: {data.titleBlock.pmid}
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Hunting Zombie Cells
            <br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 font-medium">
              Living uPAR-Targeted Senolytic CAR T-Cells
            </span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" aria-hidden="true" /> Key Takeaway
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              A single low-dose infusion of uPAR-targeted CAR T-cells clears senescent cells across the pancreas, adipose tissue, and liver—reversing age- and diet-induced insulin resistance and persisting as memory T-cells for over a year to prophylactically prevent future metabolic decline.
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
                  className="text-amber-400 hover:underline hover:text-amber-300 transition-colors"
                >
                  Nature Aging (2024): {data.titleBlock.doi}
                </a>
              </span>
              <span>|</span>
              <span>
                <a
                  href={`https://doi.org/${data.titleBlock.companionDoi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:underline hover:text-amber-300 transition-colors"
                >
                  Nature (2020): {data.titleBlock.companionDoi}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Study Scorecard */}
      <StudyScorecard paperId="car-t" studyOverview={data.scorecardOverview} />

      {/* 2. What are CAR T-Cells? */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40 relative">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-14 text-center">
          The &ldquo;Living Senolytic Drug&rdquo;
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.whatIsCART.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" aria-hidden="true" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full">
                  {data.whatIsCART[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Senolytic Hunt (Pathway) */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4 text-center">
          The uPAR Senolytic Surveillance Loop
        </h2>
        <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-14">
          {data.mechanismDescription}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {data.pathwaySteps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center w-full md:w-1/4 relative group"
            >
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-[0.03] border border-[var(--levl-border)] flex items-center justify-center mb-5 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:bg-opacity-10 transition-colors z-10 relative shadow-lg">
                {i === 0 && <Target className="w-6 h-6 text-amber-400" aria-hidden="true" />}
                {i === 1 && <Syringe className="w-6 h-6 text-amber-400" aria-hidden="true" />}
                {i === 2 && <Crosshair className="w-6 h-6 text-amber-400" aria-hidden="true" />}
                {i === 3 && <Sparkles className="w-6 h-6 text-amber-400" aria-hidden="true" />}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{step.step.split('. ')[1]}</h3>
              <p className="text-xs text-[var(--levl-text-muted)] font-light leading-relaxed">
                {step.desc}
              </p>

              {i < data.pathwaySteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[62%] w-[76%] h-[1px] bg-gradient-to-r from-[var(--levl-border)] to-amber-500/50 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-amber-500/50 translate-x-1/2" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Prophylactic Timeline Visualization */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
          Small-Molecule Re-Dosing vs. Single-Infusion Living Prophylaxis
        </h2>

        <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500 opacity-10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-12">
            {/* Traditional Small-Molecule Approach */}
            <div className="relative w-full">
              <div className="flex justify-between text-xs text-[var(--levl-text-muted)] mb-2 font-mono uppercase tracking-widest">
                <span>Small-Molecule Senolytics (Short Half-Life)</span>
                <span className="text-rose-400 font-semibold">Requires Repeated Pulsed Dosing</span>
              </div>
              <div className="w-full h-9 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 flex items-center relative overflow-hidden">
                <div className="w-[40%] h-full bg-gradient-to-r from-gray-700 to-gray-600 border-r border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-gray-200 uppercase tracking-wider">Youth</span>
                </div>
                <div className="w-[30%] h-full bg-gradient-to-r from-gray-600 to-rose-900/90 border-r border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-rose-200 uppercase tracking-wider">
                    Senescent Accumulation
                  </span>
                </div>
                <div className="w-[30%] h-full bg-gradient-to-r from-rose-900 to-amber-900 flex items-center justify-center">
                  <span className="text-[10px] text-amber-200 uppercase tracking-wider flex items-center gap-1">
                    <Syringe className="w-3 h-3" aria-hidden="true" /> Pulsed Cycles
                  </span>
                </div>
              </div>
            </div>

            {/* Prophylactic CAR T-Cell Approach */}
            <div className="relative w-full">
              <div className="flex justify-between text-xs font-semibold text-amber-400 mb-2 font-mono uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" aria-hidden="true" /> uPAR CAR T-Cell Prophylaxis (Amor et al., 2024)
                </span>
                <span className="text-slate-950 font-bold bg-amber-400 px-2.5 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.8)]">
                  Single Infusion &rarr; &gt;1 Year Memory Surveillance
                </span>
              </div>
              <div className="w-full h-9 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 flex items-center relative">
                <div
                  className="absolute left-[38%] -top-2.5 w-7 h-14 bg-amber-300 rounded-md shadow-[0_0_15px_rgba(245,158,11,0.9)] z-20 flex items-center justify-center border border-black/20"
                  title="Single Low-Dose Infusion (0.5M uPAR CAR T-cells)"
                >
                  <Zap className="w-4 h-4 text-slate-950" aria-hidden="true" />
                </div>

                <div className="w-[40%] h-full bg-gradient-to-r from-amber-700 to-amber-500 rounded-l-lg z-10" />

                <div className="w-[60%] h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-r-lg shadow-[0_0_20px_rgba(250,204,21,0.35)] flex items-center justify-center z-10">
                  <span className="text-slate-950 text-[11px] font-black tracking-wider uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> Continuous Memory T-Cell Senolysis
                  </span>
                </div>
              </div>
            </div>

            {/* Study Overviews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-8 border-t border-[var(--levl-border)]">
              {data.studyOverview.map((item, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="block text-[10px] text-amber-400 uppercase tracking-widest font-bold mb-1">
                    {item.label}
                  </span>
                  <span className="block text-xs text-gray-200 leading-relaxed">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-14 text-center">
          Transformative Preclinical Outcomes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-[0.02] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-opacity-[0.04] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
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

      {/* 6. Protocol Implications */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 text-center flex items-center justify-center gap-3">
            <Syringe className="w-6 h-6 text-amber-400" aria-hidden="true" /> Translational &amp; Biomarker Insights
          </h2>
          <div className="bg-amber-900 bg-opacity-10 border border-amber-500 border-opacity-20 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
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
        paperId="car-t"
        conclusions={data.structuredConclusions}
        protocolImplications="By proving that immune surveillance of uPAR+ senescent cells prevents age- and diet-induced metabolic decline, Amor et al. validate both cellular senotherapeutics and soluble uPAR (suPAR) blood tracking—while reinforcing why endogenous immune competence (NK and T-cell health) is essential for clearing senescent cells naturally."
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
