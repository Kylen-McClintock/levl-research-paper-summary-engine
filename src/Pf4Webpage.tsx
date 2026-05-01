import data from './data/pf4Data.json';
import { ShieldCheck, Target, Activity, Zap, CheckCircle, Brain, Droplet, ArrowRight, Dna } from 'lucide-react';
import { Footer } from './components/Footer';

export const Pf4Webpage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": data.titleBlock.headline,
    "author": [
      {
        "@type": "Person",
        "name": data.titleBlock.authors.split(' et al.')[0]
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": data.titleBlock.journal
    },
    "sameAs": `https://doi.org/${data.titleBlock.doi}`,
    "abstract": data.conclusions.join(" ")
  };

  return (
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-rose-600 selection:text-white pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-red-500 border-opacity-30 bg-red-500 bg-opacity-[0.05] text-red-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all cursor-pointer">
            <Zap className="w-4 h-4" /> {data.titleBlock.journal} Studies ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            The Unified Theory<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-medium">Of Systemic Rejuvenation</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-red-400" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Three independent longevity interventions—Young Blood, Klotho, and Exercise—all converge on a single blood factor (PF4) to reverse brain aging.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-red-400 hover:underline hover:text-red-300 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is PF4? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">The Master Messenger</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {data.whatIsPF4.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-3 flex items-center gap-2">
                  <Droplet className="w-4 h-4" /> {item}
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
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center">The Convergence of Rejuvenation</h2>
        <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-16">{data.mechanismDescription}</p>
        
        <div className="relative bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
           {/* Background Funnel Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-10 blur-[60px] pointer-events-none"></div>

           {/* The 3 Pillars (Left) */}
           <div className="flex flex-col gap-6 w-full md:w-1/3 relative z-10">
              {data.pathways.map((pathway, i) => (
                 <div key={i} className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-4 relative group">
                    <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                       {i === 0 && <Droplet className="w-4 h-4 text-red-400" />}
                       {i === 1 && <Dna className="w-4 h-4 text-red-400" />}
                       {i === 2 && <Activity className="w-4 h-4 text-red-400" />}
                       {pathway.name}
                    </h4>
                    <p className="text-xs text-[var(--levl-text-muted)] font-light">{pathway.desc}</p>
                    
                    {/* Visual connection to center */}
                    <div className="hidden md:block absolute top-1/2 right-0 translate-x-full w-12 h-[1px] bg-gradient-to-r from-red-500 to-transparent z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 </div>
              ))}
           </div>

           {/* Center Node (PF4) */}
           <div className="flex flex-col items-center justify-center relative z-10 w-full md:w-1/3">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-rose-700 shadow-[0_0_30px_rgba(225,29,72,0.6)] flex items-center justify-center mb-4 border-2 border-white border-opacity-20 relative">
                 <div className="absolute inset-0 rounded-full border border-red-300 animate-ping opacity-20"></div>
                 <span className="text-xl font-bold text-white tracking-widest">PF4</span>
              </div>
              <span className="text-xs text-red-300 font-mono uppercase tracking-widest text-center">Platelet Factor 4</span>
           </div>

           {/* Arrow to Right */}
           <div className="hidden md:flex items-center justify-center relative z-10">
              <ArrowRight className="w-8 h-8 text-red-400 opacity-80" />
           </div>

           {/* End Node (Brain Rejuvenation) */}
           <div className="flex flex-col items-center justify-center relative z-10 w-full md:w-1/3 bg-white bg-opacity-[0.02] border border-[var(--levl-border)] p-6 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-cyan-900 bg-opacity-30 border border-cyan-500 border-opacity-30 flex items-center justify-center mb-4">
                 <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">Cognitive Rescue</h4>
              <ul className="space-y-2 text-xs text-[var(--levl-text-secondary)] font-light text-center">
                 <li>↓ Neuroinflammation</li>
                 <li>↑ Hippocampal Neurogenesis</li>
                 <li>↑ Youthful Memory</li>
              </ul>
           </div>
        </div>
      </section>

      {/* 4. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-white bg-opacity-[0.02] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-opacity-[0.04] transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">{finding.title}</h3>
              </div>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Conclusions */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-24">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 text-center flex items-center justify-center gap-3">
            <Target className="w-6 h-6 text-red-400" /> Protocol Implications
          </h2>
          <div className="bg-red-900 bg-opacity-10 border border-red-500 border-opacity-20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed">{rec}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
