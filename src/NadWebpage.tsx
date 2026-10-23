import { Header } from './components/Header';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';
import data from './data/nadData.json';
import { ShieldCheck, Activity, CheckCircle, Database, BatteryCharging, Zap, MessageSquareOff, MessageSquare, ZapOff, ArrowRight } from 'lucide-react';
import { Footer } from './components/Footer';

export const NadWebpage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": data.titleBlock.headline,
    "author": [
      {
        "@type": "Person",
        "name": "Ana P. Gomes"
      },
      {
        "@type": "Person",
        "name": "David A. Sinclair"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-20 pb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href={`https://doi.org/${data.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 hover:bg-cyan-500/20 transition-all"
            >
              <Zap className="w-4 h-4" /> {data.titleBlock.journal} ({data.titleBlock.year})
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
            NAD+ &amp; Pseudohypoxia<br />
            <span className="text-[28px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 font-medium tracking-tight">
              The Nuclear–Mitochondrial Sync Axis
            </span>
          </h1>
          <p className="max-w-3xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            &ldquo;{data.titleBlock.headline}&rdquo;
          </p>

          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Executive Summary
            </span>
            <p className="text-base md:text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Declining nuclear <strong className="text-white font-semibold">NAD+</strong> inactivates <strong className="text-cyan-300 font-semibold">SIRT1</strong>, stabilizing <strong className="text-white font-semibold">HIF-1α</strong> under normoxia (&ldquo;pseudohypoxia&rdquo;) to sequester <strong className="text-white font-semibold">c-Myc</strong> and silence <strong className="text-white font-semibold">TFAM</strong>-driven mitochondrial OXPHOS genes. Restoring NAD+ with <strong className="text-cyan-300 font-semibold">NMN for 7 days</strong> reverses this signaling block in 22-month-old mice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-8">
            <span>Gomes, A.P. et al. (Sinclair Lab, Harvard Medical School)</span>
            <span>|</span>
            <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
              DOI: {data.titleBlock.doi}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Standardized Evidence & Study Scorecard */}
      <StudyScorecard paperId="nad" studyOverview={data.studyOverview} />

      {/* 3. What is NAD+? */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
            Bioenergetic &amp; Epigenetic Coenzyme
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Biphasic Mitochondrial Aging &amp; Nuclear NAD+</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.whatIsNad.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col bg-white/[0.02] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm">
                  {data.whatIsNad[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. The Pseudohypoxic Molecular Cascade (NAD+ -> SIRT1 -> pVHL -> HIF-1a -> c-Myc -> TFAM) */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[var(--levl-border)]/40 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
            PGC-1α/β-Independent Signaling Pathway
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            The Pseudohypoxic Molecular Cascade
          </h2>
          <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto">
            {data.mechanismDescription}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {data.pseudohypoxiaCascade.map((item, idx) => (
            <div key={idx} className="bg-[var(--levl-panel-bg)] border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                    {item.step}
                  </span>
                  {idx < 3 && <ArrowRight className="w-4 h-4 text-gray-500 hidden lg:block" />}
                </div>
                <div className="text-sm font-mono font-bold text-white bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-3 py-1.5 mb-3">
                  {item.molecule}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Intracellular Comparison: Youthful / NMN-Restored vs. Aged Pseudohypoxic State */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Center Comparison Pill (replaces inaccurate 'CELL WALL' label) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="bg-[var(--levl-panel-bg)] border border-cyan-500/40 rounded-full px-4 py-2 text-[11px] font-mono font-bold tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] whitespace-nowrap">
              7-DAY NMN SHIFT
            </div>
          </div>

          {/* Youthful / Restored State (Left) */}
          <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.08)]">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 border-b border-cyan-500/30 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{data.communicationStates.youthful.title}</span>
                </h3>
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  {data.communicationStates.youthful.badge}
                </span>
              </div>

              {/* Intracellular Organelle Diagram */}
              <div className="flex items-center justify-between mb-8 px-2 bg-black/30 rounded-2xl p-4 border border-cyan-500/20">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-1.5">
                    <Database className="w-5 h-5 text-cyan-300" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-200">NUCLEUS</span>
                  <span className="text-[10px] text-gray-400">c-Myc → TFAM</span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-3">
                  <span className="text-[10px] text-cyan-300 font-mono font-bold tracking-wider mb-1">
                    SIRT1 ON • HIF-1α DEGRADED
                  </span>
                  <div className="h-[2px] w-full bg-cyan-400/70"></div>
                  <span className="text-[10px] text-gray-300 font-mono mt-1">
                    Intact TFAM Signal
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-1.5">
                    <BatteryCharging className="w-5 h-5 text-cyan-300" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-200">MITOCHONDRIA</span>
                  <span className="text-[10px] text-gray-400">13 mtDNA OXPHOS</span>
                </div>
              </div>

              <ul className="space-y-3.5">
                {data.communicationStates.youthful.attributes.map((attr, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Aged Pseudohypoxic State (Right) */}
          <div className="bg-[var(--levl-panel-bg)] border border-rose-500/25 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-gray-200 flex items-center gap-2">
                  <MessageSquareOff className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{data.communicationStates.aged.title}</span>
                </h3>
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300">
                  {data.communicationStates.aged.badge}
                </span>
              </div>

              {/* Intracellular Organelle Diagram */}
              <div className="flex items-center justify-between mb-8 px-2 bg-black/30 rounded-2xl p-4 border border-rose-500/20">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center mb-1.5">
                    <Database className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-300">NUCLEUS</span>
                  <span className="text-[10px] text-rose-300">HIF-1α ⊣ c-Myc</span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-3">
                  <span className="text-[10px] text-rose-400 font-mono font-bold tracking-wider mb-1">
                    PSEUDOHYPOXIA BLOCK
                  </span>
                  <div className="h-[2px] w-full border-t-2 border-dashed border-rose-500/60"></div>
                  <span className="text-[10px] text-gray-400 font-mono mt-1">
                    TFAM Repressed
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-600 flex items-center justify-center mb-1.5">
                    <ZapOff className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-300">MITOCHONDRIA</span>
                  <span className="text-[10px] text-rose-300">OXPHOS Depleted</span>
                </div>
              </div>

              <ul className="space-y-3.5">
                {data.communicationStates.aged.attributes.map((attr, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></div>
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{finding.title}</h3>
              </div>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Standardized Conclusions & Cross-Navigation */}
      <ConclusionsSection
        paperId="nad"
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
