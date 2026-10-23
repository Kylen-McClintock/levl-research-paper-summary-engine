import { Header } from './components/Header';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';
import data from './data/senolyticsData.json';
import { ShieldCheck, Target, Activity, CheckCircle, Skull, Zap, Play, Pause, FlaskConical, ArrowRight } from 'lucide-react';
import { Footer } from './components/Footer';

export const SenolyticsWebpage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": data.titleBlock.headline,
    "author": [
      {
        "@type": "Person",
        "name": "Ming Xu"
      },
      {
        "@type": "Person",
        "name": "James L. Kirkland"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": data.titleBlock.journal
    },
    "sameAs": `https://doi.org/${data.titleBlock.doi}`,
    "abstract": data.conclusions.map((c) => c.content).join(" ")
  };

  return (
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-yellow-500 selection:text-black pb-24 relative overflow-hidden">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-20 pb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href={`https://doi.org/${data.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 hover:bg-yellow-500/20 transition-all"
            >
              <FlaskConical className="w-4 h-4" /> {data.titleBlock.journal} ({data.titleBlock.year})
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${data.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-300 text-xs font-mono hover:text-white hover:border-white/30 transition-all"
            >
              PMID: {data.titleBlock.pmid}
            </a>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Dasatinib + Quercetin<br />
            <span className="text-[28px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 font-medium tracking-tight">
              Late-Life Senolytic Therapy
            </span>
          </h1>
          <p className="max-w-3xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>

          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-yellow-500" /> Executive Summary
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Transplanting just <strong className="text-white font-semibold">0.5–1 × 10⁶ senescent cells (~1 in 10,000 host cells)</strong> into young mice induces systemic frailty via SASP spread, while intermittent oral <strong className="text-yellow-400 font-semibold">Dasatinib (5 mg/kg) + Quercetin (50 mg/kg)</strong> initiated at 24–27 months extends <strong className="text-white font-semibold">post-treatment survival by +36%</strong> without prolonging late-life morbidity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-8">
            <span>Xu, M. et al. (Kirkland Lab, Mayo Clinic)</span>
            <span>|</span>
            <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-yellow-500 hover:underline">
              DOI: {data.titleBlock.doi}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Standardized Evidence & Study Scorecard */}
      <StudyScorecard paperId="senolytics" studyOverview={data.studyOverview} />

      {/* 3. Three Experimental Arms Breakdown */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 block mb-2">
            Causal Proof &amp; Clinical Translation
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Three-Pillar Experimental Architecture</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.experimentalArms.map((arm, idx) => (
            <div key={idx} className="bg-[var(--levl-panel-bg)] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-yellow-400">
                    {arm.title}
                  </span>
                </div>
                <div className="text-xs font-mono text-gray-400 mb-4 pb-3 border-b border-white/10">
                  {arm.cohort}
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-black text-yellow-400 block">{arm.metric}</span>
                  <span className="text-xs text-gray-300 font-medium">{arm.metricLabel}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                  {arm.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. What are Senolytics & SCAP Networks? */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">Disabling Senescent Cell Anti-Apoptotic Pathways (SCAPs)</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.whatAreSenolytics.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col bg-[var(--levl-panel-bg)] p-6 rounded-2xl border border-[var(--levl-border)]">
                <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase mb-4 flex items-center gap-2 border-b border-[var(--levl-border)] pb-4">
                  <Target className="w-4 h-4" /> Mechanism {(i / 2) + 1}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{item}</h4>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm">
                  {data.whatAreSenolytics[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. The Hit-and-Run Protocol UI */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4 text-center">{data.hitAndRunProtocol.title}</h2>
        <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-14">{data.hitAndRunProtocol.description}</p>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-full p-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <ArrowRight className="w-6 h-6 text-yellow-500" />
            </div>
          </div>

          {/* The Hit (Left) */}
          <div className="bg-yellow-950/20 border border-yellow-500/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.08)]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 border-b border-yellow-500/30 pb-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Play className="w-6 h-6 text-yellow-500" /> {data.hitAndRunProtocol.hit.title}
                </h3>
              </div>

              <div className="flex items-center justify-center gap-6 mb-6 py-4">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 bg-rose-500/20 border-2 border-rose-500/50 rounded-full flex items-center justify-center">
                    <Skull className="w-8 h-8 text-rose-500" />
                  </div>
                  <Zap className="absolute -top-2 -right-2 w-10 h-10 text-yellow-400" />
                </div>
              </div>

              <p className="text-sm text-gray-200 font-light leading-relaxed">
                {data.hitAndRunProtocol.hit.desc}
              </p>
            </div>
          </div>

          {/* The Run (Right) */}
          <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 border-b border-[var(--levl-border)] pb-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Pause className="w-6 h-6 text-emerald-400" /> {data.hitAndRunProtocol.run.title}
                </h3>
              </div>

              <div className="flex items-center justify-center gap-6 mb-6 py-4">
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center">
                      <Activity className="w-5 h-5 text-emerald-400" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-200 font-light leading-relaxed">
                {data.hitAndRunProtocol.run.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-yellow-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-yellow-500 shrink-0" />
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">{finding.title}</h3>
              </div>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Standardized Conclusions & Cross-Navigation */}
      <ConclusionsSection
        paperId="senolytics"
        conclusions={data.conclusions}
        protocolImplications={data.protocolImplications}
      />

      {/* Global Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};
