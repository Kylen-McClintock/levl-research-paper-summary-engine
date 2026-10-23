import { useState } from 'react';
import { Header } from './components/Header';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';
import data from './data/urolithinData.json';
import { ShieldCheck, Activity, CheckCircle, ArrowRight, Database, BatteryCharging, Apple, FlaskConical, Users } from 'lucide-react';
import { Footer } from './components/Footer';

export const UrolithinWebpage = () => {
  const [selectedSpeciesIdx, setSelectedSpeciesIdx] = useState<number>(1);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": data.titleBlock.headline,
    "author": [
      {
        "@type": "Person",
        "name": "Dongryeol Ryu"
      },
      {
        "@type": "Person",
        "name": "Johan Auwerx"
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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24 relative overflow-hidden">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-20 pb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href={`https://doi.org/${data.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 hover:bg-orange-500/20 transition-all"
            >
              <BatteryCharging className="w-4 h-4" /> {data.titleBlock.journal} ({data.titleBlock.year})
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
            Urolithin A &amp; Mitophagy<br />
            <span className="text-[28px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-300 font-medium tracking-tight">
              Selective Clearance of Aged Mitochondria
            </span>
          </h1>
          <p className="max-w-3xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>

          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-orange-400" /> Executive Summary
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              The gut-microbiome postbiotic <strong className="text-white font-semibold">Urolithin A</strong> activates <strong className="text-orange-300 font-semibold">PINK1/Parkin-dependent mitophagy</strong>, extending <em>C. elegans</em> median lifespan by <strong className="text-white font-semibold">+45.4%</strong> and increasing running endurance by <strong className="text-white font-semibold">+42%</strong> and grip strength by <strong className="text-white font-semibold">+57%</strong> in aged mice—findings subsequently validated in human randomized clinical trials.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-8">
            <span>Ryu, D. et al. (Auwerx Lab, EPFL)</span>
            <span>|</span>
            <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-orange-400 hover:underline">
              DOI: {data.titleBlock.doi}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Standardized Evidence & Study Scorecard */}
      <StudyScorecard paperId="urolithin" studyOverview={data.studyOverview} />

      {/* 3. What is Mitophagy? */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-2">
            Cellular Quality Control
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Replacing Defective Cellular Batteries</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.whatIsMitophagy.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col bg-white/[0.02] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <span className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm">
                  {data.whatIsMitophagy[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. The Gut Microbiome Bottleneck & Postbiotic Bypass */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-2">
            Metabotype A vs. Metabotype 0
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">The Gut Microbiome Conversion Bottleneck</h2>
          <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto">
            {data.mechanismDescription}
          </p>
        </div>

        <div className="relative bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 mb-10 pb-10 border-b border-white/10">
            {/* 1. Dietary Input */}
            <div className="flex flex-col items-center w-full md:w-1/4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-3">
                <Apple className="w-7 h-7 text-rose-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Pomegranate &amp; Walnuts</h4>
              <p className="text-xs text-[var(--levl-text-muted)] font-light">Dietary Ellagitannins (Punicalagins)</p>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <ArrowRight className="w-5 h-5 text-[var(--levl-text-muted)]" />
            </div>

            {/* 2. Gut Microbiome (The Bottleneck) */}
            <div className="flex flex-col items-center w-full md:w-2/4 text-center bg-orange-950/30 border border-orange-500/30 rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-3 border border-orange-500/40">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-base font-bold text-orange-300 mb-1.5">Gut Microbiome Conversion Ceiling</h4>
              <p className="text-xs text-gray-200 font-light mb-3 max-w-md">
                Requires specific gut flora (e.g., <em>Gordonibacter urolithinfaciens</em>) to cleave ellagic acid lactone rings. Only <strong>~30–40% of humans</strong> naturally synthesize meaningful Urolithin A from diet.
              </p>
              <span className="text-[11px] font-mono tracking-widest text-orange-300 bg-orange-500/20 border border-orange-500/30 px-3 py-1 rounded-full">
                60–70% OF ADULTS ARE LOW/NON-CONVERTERS
              </span>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <ArrowRight className="w-5 h-5 text-orange-500/60" />
            </div>

            {/* 3. Mitophagy Output */}
            <div className="flex flex-col items-center w-full md:w-1/4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                <BatteryCharging className="w-7 h-7 text-amber-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Urolithin A</h4>
              <p className="text-xs text-[var(--levl-text-muted)] font-light">PINK1/Parkin Mitophagy Activation</p>
            </div>
          </div>

          {/* 4-Step Breakdown Cards from data.gutBottleneck */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {data.gutBottleneck.map((stepObj, idx) => (
              <div key={idx} className="bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 block mb-1">
                    {stepObj.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2">{stepObj.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{stepObj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cross-Species & Human Clinical Translation Explorer */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
            From Nematodes to Human RCTs
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
            Conserved Efficacy Across Species &amp; Human Trials
          </h2>
          <p className="text-sm text-[var(--levl-text-secondary)] max-w-2xl mx-auto">
            Select a model system below to inspect the exact dosing regimen, primary endpoint, and mechanistic validation from the 2016 discovery study through subsequent double-blind human RCTs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {data.speciesTranslation.map((item, idx) => {
            const isSelected = selectedSpeciesIdx === idx;
            const isHuman = item.model.includes('Human');
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedSpeciesIdx(idx)}
                className={`text-left p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-orange-500/15 border-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.15)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`inline-flex items-center gap-1 text-[11px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                    isHuman
                      ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300'
                      : 'bg-orange-500/15 border-orange-500/30 text-orange-300'
                  }`}>
                    {isHuman ? <Users className="w-3 h-3" /> : <FlaskConical className="w-3 h-3" />}
                    {isHuman ? 'Human RCT' : 'Preclinical'}
                  </span>
                </div>
                <div className="text-sm font-bold text-white mb-1">{item.model}</div>
                <div className="text-xs text-gray-400 font-mono mb-3">{item.citation}</div>
                <div className="text-2xl font-black text-orange-300">{item.primaryMetric}</div>
                <div className="text-xs text-gray-300">{item.metricLabel}</div>
              </button>
            );
          })}
        </div>

        {data.speciesTranslation[selectedSpeciesIdx] && (
          <div className="bg-[var(--levl-panel-bg)] border border-orange-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">
                  {data.speciesTranslation[selectedSpeciesIdx].model}
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-orange-300">
                  Regimen: {data.speciesTranslation[selectedSpeciesIdx].dose}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {data.speciesTranslation[selectedSpeciesIdx].citation}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl">
                {data.speciesTranslation[selectedSpeciesIdx].details}
              </p>
            </div>
            <div className="shrink-0 bg-black/50 border border-white/10 rounded-xl p-4 text-center min-w-[180px]">
              <div className="text-2xl md:text-3xl font-black text-orange-400">
                {data.speciesTranslation[selectedSpeciesIdx].primaryMetric}
              </div>
              <div className="text-xs text-gray-300 mt-1">
                {data.speciesTranslation[selectedSpeciesIdx].metricLabel}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-orange-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">{finding.title}</h3>
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
        paperId="urolithin"
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
