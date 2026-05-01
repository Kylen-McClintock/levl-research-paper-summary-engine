import data from './data/il11Data.json';
import { ShieldCheck, Target, Activity, Zap, CheckCircle, Flame, HeartPulse, Dna, ArrowRight } from 'lucide-react';

export const IL11Webpage = () => {
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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-rose-500 selection:text-white pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600 opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600 opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-rose-500 border-opacity-30 bg-rose-500 bg-opacity-[0.05] text-rose-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all cursor-pointer">
            <Zap className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Targeting the Master Switch<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-400 font-medium">IL-11 Inhibition Extends Lifespan</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-rose-400" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Targeting the pro-inflammatory cytokine IL-11 in aged mice reverses physical frailty, restores metabolic function, and extends median lifespan by 25%.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-rose-400 hover:underline hover:text-rose-300 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is IL-11? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">The Role of IL-11</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {data.whatIsIL11.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full">
                  {data.whatIsIL11[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Pathological Cascade */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
         <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center">The Pathological Cascade</h2>
         <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-16">{data.mechanismDescription}</p>
         
         <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {data.pathwaySteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center w-full md:w-1/4 relative group">
                 <div className="w-16 h-16 rounded-full bg-white bg-opacity-[0.03] border border-[var(--levl-border)] flex items-center justify-center mb-6 group-hover:border-rose-500 group-hover:bg-rose-500 group-hover:bg-opacity-10 transition-colors z-10 relative shadow-lg">
                    {i === 0 && <Activity className="w-6 h-6 text-rose-400" />}
                    {i === 1 && <Target className="w-6 h-6 text-rose-400" />}
                    {i === 2 && <Zap className="w-6 h-6 text-rose-400" />}
                    {i === 3 && <HeartPulse className="w-6 h-6 text-rose-400" />}
                 </div>
                 <h4 className="text-sm font-semibold text-white mb-2">{step.step.split('. ')[1]}</h4>
                 <p className="text-xs text-[var(--levl-text-muted)] font-light">{step.desc}</p>
                 
                 {/* Connectors */}
                 {i < data.pathwaySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-[var(--levl-border)] to-rose-500/50 z-0">
                       <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-rose-500/50 translate-x-1/2" />
                    </div>
                 )}
              </div>
            ))}
         </div>
      </section>

      {/* 4. Lifespan Extension Visualization */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Lifespan Extension Impact</h2>
        
        <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">
           {/* Glow behind chart */}
           <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-rose-500 opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

           <div className="relative z-10 flex flex-col gap-12">
             
             {/* Control Group */}
             <div className="relative w-full">
               <div className="flex justify-between text-xs text-[var(--levl-text-muted)] mb-2 font-mono uppercase tracking-widest">
                 <span>Wild Type (Control)</span>
                 <span>100% Lifespan</span>
               </div>
               <div className="w-full h-8 bg-white bg-opacity-5 rounded-r-lg border border-white border-opacity-10 flex items-center relative">
                  <div className="w-[75%] h-full bg-gradient-to-r from-[var(--levl-border)] to-gray-600 rounded-r-lg opacity-80" />
               </div>
             </div>

             {/* Anti-IL11 Group */}
             <div className="relative w-full">
               <div className="flex justify-between text-xs font-semibold text-rose-400 mb-2 font-mono uppercase tracking-widest">
                 <span className="flex items-center gap-2"><Target className="w-3 h-3" /> Anti-IL-11 Therapy</span>
                 <span className="text-white bg-rose-500 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(244,63,94,0.8)]">+25% Extension</span>
               </div>
               <div className="w-full h-8 bg-white bg-opacity-5 rounded-r-lg border border-white border-opacity-10 flex items-center relative">
                  {/* Base Lifespan */}
                  <div className="w-[75%] h-full bg-gradient-to-r from-violet-600 to-rose-500 rounded-r-lg shadow-[0_0_15px_rgba(244,63,94,0.5)] flex items-center justify-end pr-4">
                     {/* The Extension Block */}
                     <div className="absolute left-[75%] w-[25%] h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-r-lg shadow-[0_0_20px_rgba(244,63,94,0.8)] flex items-center justify-center border-l border-white/20">
                        <span className="text-white text-[10px] font-bold tracking-widest opacity-90">+ 25%</span>
                     </div>
                  </div>
               </div>
             </div>
             
             {/* Study Overviews */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--levl-border)]">
                {data.studyOverview.map((item, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-[10px] text-[var(--levl-text-muted)] uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="block text-sm text-white font-medium">{item.value}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* 5. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-white bg-opacity-[0.02] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-opacity-[0.04] transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-rose-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">{finding.title}</h3>
              </div>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Conclusions */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-24">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 text-center flex items-center justify-center gap-3">
            <Dna className="w-6 h-6 text-violet-400" /> Protocol Implications
          </h2>
          <div className="bg-violet-900 bg-opacity-10 border border-violet-500 border-opacity-20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-violet-400 font-bold mt-0.5">•</span>
                  <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed">{rec}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 mt-12 border-t border-[var(--levl-border)] border-opacity-40 flex flex-col md:flex-row items-center justify-between gap-6 opacity-80">
         <div className="flex gap-4 items-center">
            <div className="w-24">
               <img src="/src/assets/levl-logo.png" alt="LEVL Logo" className="w-full h-auto opacity-90 object-contain filter grayscale invert opacity-50" />
            </div>
            <p className="text-xs font-light text-[var(--levl-text-secondary)] max-w-xs">
              At LEVL, we translate cutting-edge longevity science into actionable strategies for real human health.
            </p>
         </div>
         <div className="text-xs text-center md:text-right font-light text-[var(--levl-text-muted)] max-w-sm">
           This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
         </div>
      </footer>
    </div>
  );
};
