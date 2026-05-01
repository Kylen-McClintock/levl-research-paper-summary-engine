import data from './data/urolithinData.json';
import { ShieldCheck, Target, Activity, CheckCircle, ArrowRight, Database, BatteryCharging, Apple } from 'lucide-react';
import { Footer } from './components/Footer';

export const UrolithinWebpage = () => {
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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-orange-500 selection:text-white pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-orange-500 border-opacity-30 bg-orange-500 bg-opacity-[0.05] text-orange-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] transition-all cursor-pointer">
            <BatteryCharging className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Mitochondrial Rejuvenation<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-medium tracking-tight">And The Gut Microbiome</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-orange-400" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              The discovery of a microbiome-derived metabolite (Urolithin A) that triggers mitophagy, clearing dead mitochondria and extending lifespan across species.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-orange-400 hover:underline hover:text-orange-300 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is Mitophagy? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Replacing The Cellular Batteries</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {data.whatIsMitophagy.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full backdrop-blur-sm">
                  {data.whatIsMitophagy[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Gut Microbiome Bottleneck UI */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
         <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center">The Microbiome Bottleneck</h2>
         <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-16">{data.mechanismDescription}</p>
         
         <div className="relative bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-500 opacity-5 blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
               
               {/* 1. Dietary Input */}
               <div className="flex flex-col items-center w-full md:w-1/4 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                     <Apple className="w-8 h-8 text-rose-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Pomegranate</h4>
                  <p className="text-xs text-[var(--levl-text-muted)] font-light">Dietary Ellagitannins</p>
               </div>

               {/* Arrow */}
               <div className="hidden md:flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-[var(--levl-text-muted)]" />
               </div>

               {/* 2. Gut Microbiome (The Bottleneck) */}
               <div className="flex flex-col items-center w-full md:w-2/4 text-center bg-orange-900/10 border border-orange-500/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 border border-orange-500/40">
                     <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <h4 className="text-base font-bold text-orange-400 mb-2">The Gut Microbiome</h4>
                  <p className="text-xs text-white font-light mb-3">Only ~30% of humans have the specific bacteria needed to convert Ellagitannins into Urolithin A.</p>
                  <span className="text-[10px] font-mono tracking-widest text-orange-300 bg-orange-500/20 px-2 py-1 rounded">THE BOTTLENECK</span>
               </div>

               {/* Arrow */}
               <div className="hidden md:flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-orange-500/50" />
               </div>

               {/* 3. Mitophagy Output */}
               <div className="flex flex-col items-center w-full md:w-1/4 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                     <BatteryCharging className="w-8 h-8 text-amber-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Urolithin A</h4>
                  <p className="text-xs text-[var(--levl-text-muted)] font-light">Triggers Mitophagy</p>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-orange-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">{finding.title}</h3>
              </div>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Protocol Implications */}
      <section className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <div className="mb-24">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 text-center flex items-center justify-center gap-3">
            <Target className="w-6 h-6 text-orange-400" /> Protocol Implications
          </h2>
          <div className="bg-orange-900 bg-opacity-10 border border-orange-500 border-opacity-20 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-[0_0_40px_rgba(249,115,22,0.05)]">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-orange-500 font-bold mt-0.5">•</span>
                  <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed">{rec}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <div className="relative z-10">
         <Footer />
      </div>
    </div>
  );
};
