import { Header } from './components/Header';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';
import data from './data/metformData.json';
import { ShieldCheck, Activity, CheckCircle, ArrowRight, BatteryWarning, Shield, TrendingDown, AlertTriangle } from 'lucide-react';
import { Footer } from './components/Footer';

export const MetforminWebpage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": data.titleBlock.headline,
    "author": [
      {
        "@type": "Person",
        "name": "Alejandro Martin-Montalvo"
      },
      {
        "@type": "Person",
        "name": "Rafael de Cabo"
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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-teal-500 selection:text-white pb-24 relative overflow-hidden">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-20 pb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href={`https://doi.org/${data.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 hover:bg-teal-500/20 transition-all"
            >
              <Shield className="w-4 h-4" /> {data.titleBlock.journal} ({data.titleBlock.year})
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
            Metformin &amp; Hormesis<br />
            <span className="text-[28px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-slate-300 font-medium tracking-tight">
              Complex I Stress, AMPK &amp; Biphasic Longevity
            </span>
          </h1>
          <p className="max-w-3xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>

          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-teal-400" /> Executive Summary
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Chronic low-dose metformin (<strong className="text-teal-300 font-semibold">0.1% w/w</strong>) mildly inhibits mitochondrial Complex I to activate <strong className="text-white font-semibold">AMPK</strong> and <strong className="text-white font-semibold">Nrf2/ARE</strong> antioxidant pathways, extending mean lifespan by <strong className="text-white font-semibold">+5.83%</strong> in male C57BL/6 mice—whereas a 10-fold higher dose (<strong className="text-rose-400 font-semibold">1.0% w/w</strong>) causes nephrotoxicity and shortens mean lifespan by <strong className="text-rose-400 font-semibold">−14.4%</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-8">
            <span>Martin-Montalvo, A. et al. (de Cabo Lab, NIA)</span>
            <span>|</span>
            <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
              DOI: {data.titleBlock.doi}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Standardized Evidence & Study Scorecard */}
      <StudyScorecard paperId="metformin" studyOverview={data.studyOverview} />

      {/* 3. What is Metformin? */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 block mb-2">
            From Galega officinalis to Geroprotection
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Historical Context &amp; Study Rationale</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.whatIsMetformin.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col bg-white/[0.02] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm">
                  {data.whatIsMetformin[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Biphasic Hormetic Dose Comparison (0.1% w/w vs 1.0% w/w) */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 block mb-2">
            Mitohormesis &amp; The Goldilocks Window
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
            Biphasic Dose Response: +5.83% Extension vs. −14.4% Toxicity
          </h2>
          <p className="text-sm text-[var(--levl-text-secondary)] max-w-2xl mx-auto">
            A critical finding of Martin-Montalvo et al. (2013) is that metformin exhibits a strict biphasic dose response in C57BL/6 mice: mild Complex I inhibition triggers adaptive longevity signaling, while 10× higher dosing overwhelms renal clearance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.biphasicDoseComparison.map((arm, idx) => {
            const isBeneficial = idx === 0;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 border ${
                  isBeneficial
                    ? 'bg-teal-950/20 border-teal-500/30 shadow-[0_0_35px_rgba(20,184,166,0.08)]'
                    : 'bg-rose-950/15 border-rose-500/30'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase px-2.5 py-0.5 rounded-full border mb-2 ${
                      isBeneficial
                        ? 'bg-teal-500/15 border-teal-500/30 text-teal-300'
                        : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                    }`}>
                      {isBeneficial ? <CheckCircle className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                      {arm.status}
                    </span>
                    <h3 className="text-xl font-bold text-white">{arm.dose}</h3>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-black ${isBeneficial ? 'text-teal-300' : 'text-rose-400'}`}>
                      {arm.lifespanEffect}
                    </div>
                    <div className="text-[11px] font-mono text-gray-400">{arm.stats}</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {arm.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-3 text-sm text-gray-200">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${isBeneficial ? 'bg-teal-400' : 'bg-rose-400'}`}></span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. The AMPK & Nrf2 Pathway UI */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4 text-center">The Complex I → AMPK / Nrf2 Axis</h2>
        <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-14">{data.mechanismDescription}</p>

        <div className="relative bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-full md:w-1/3 text-center">
              <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-600 flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-rose-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{data.ampkPathway.step1.title}</h4>
              <p className="text-xs text-[var(--levl-text-secondary)] font-light">{data.ampkPathway.step1.desc}</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <ArrowRight className="w-6 h-6 text-slate-500" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-full md:w-1/3 text-center bg-teal-950/30 border border-teal-500/30 rounded-2xl p-6">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mb-4 border border-teal-500/40">
                <BatteryWarning className="w-6 h-6 text-teal-300" />
              </div>
              <h4 className="text-base font-bold text-teal-300 mb-2">{data.ampkPathway.step2.title}</h4>
              <p className="text-xs text-white font-light mb-0">{data.ampkPathway.step2.desc}</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <ArrowRight className="w-6 h-6 text-slate-500" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-full md:w-1/3 text-center">
              <div className="w-20 h-20 rounded-2xl bg-indigo-900/20 border border-indigo-500/30 flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-indigo-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{data.ampkPathway.step3.title}</h4>
              <p className="text-xs text-[var(--levl-text-secondary)] font-light">{data.ampkPathway.step3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The TAME Trial Banner */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="bg-gradient-to-br from-slate-800/80 to-gray-900 border border-slate-600 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">{data.tameTrial.title}</h2>
          <h3 className="text-sm md:text-base font-mono text-teal-300 mb-6 tracking-widest uppercase">{data.tameTrial.subtitle}</h3>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-200 leading-relaxed font-light">
            {data.tameTrial.description}
          </p>
        </div>
      </section>

      {/* 7. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">Transformative Outcomes &amp; Replication Context</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-teal-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 transition-colors">{finding.title}</h3>
              </div>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Standardized Conclusions & Cross-Navigation */}
      <ConclusionsSection
        paperId="metformin"
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
