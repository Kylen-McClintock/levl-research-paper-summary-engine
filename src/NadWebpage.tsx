import data from './data/nadData.json';
import { ShieldCheck, Target, Activity, CheckCircle, Database, BatteryCharging, Zap, MessageSquareOff, MessageSquare, ZapOff } from 'lucide-react';
import { Footer } from './components/Footer';

export const NadWebpage = () => {
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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-cyan-500 border-opacity-30 bg-cyan-500 bg-opacity-[0.05] text-cyan-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all cursor-pointer">
            <Zap className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            The Communication<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 font-medium tracking-tight">Breakdown of Aging</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Declining NAD+ levels break the vital communication network between the nucleus and mitochondria, driving rapid cellular aging. Restoring NAD+ reverses it.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is NAD+? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">The Cellular Currency</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {data.whatIsNad.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full backdrop-blur-sm">
                  {data.whatIsNad[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Communication Breakdown UI */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
         <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center">Nuclear-Mitochondrial Connection</h2>
         <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-16">{data.mechanismDescription}</p>
         
         <div className="grid md:grid-cols-2 gap-8 relative">
            {/* The Barrier UI */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
               <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-full px-4 py-2 text-xs font-bold tracking-widest text-white mb-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
                  CELL WALL
               </div>
               <div className="w-[1px] h-32 bg-gradient-to-b from-[var(--levl-border)] to-transparent"></div>
            </div>

            {/* Youthful State (Left) */}
            <div className="bg-cyan-900 bg-opacity-10 border border-cyan-500 border-opacity-30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.1)] group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 opacity-20 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-30"></div>
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 border-b border-cyan-500 border-opacity-30 pb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                           <MessageSquare className="w-6 h-6 text-cyan-400"/> {data.communicationStates.youthful.title}
                        </h3>
                     </div>
                  </div>
                  
                  {/* Diagram */}
                  <div className="flex items-center justify-between mb-8 px-2">
                     <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-2">
                           <Database className="w-5 h-5 text-cyan-300" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-cyan-200">NUCLEUS</span>
                     </div>
                     
                     <div className="flex-1 flex items-center justify-center relative">
                        <div className="h-[2px] w-full bg-cyan-500/50 relative">
                           <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 bg-transparent text-[10px] text-cyan-300 font-bold tracking-widest">SIRT1 ON</div>
                        </div>
                     </div>
                     
                     <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-2">
                           <BatteryCharging className="w-5 h-5 text-cyan-300" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-cyan-200">MITOCHONDRIA</span>
                     </div>
                  </div>

                  <ul className="space-y-4">
                     {data.communicationStates.youthful.attributes.map((attr, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--levl-text-secondary)]">
                           <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
                           <span className="text-white">{attr}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Aged State (Right) */}
            <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 border-b border-[var(--levl-border)] pb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-gray-400 flex items-center gap-2">
                           <MessageSquareOff className="w-6 h-6 text-gray-500"/> {data.communicationStates.aged.title}
                        </h3>
                     </div>
                  </div>
                  
                  {/* Diagram */}
                  <div className="flex items-center justify-between mb-8 px-2 opacity-50">
                     <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center mb-2">
                           <Database className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-gray-400">NUCLEUS</span>
                     </div>
                     
                     <div className="flex-1 flex items-center justify-center relative px-2">
                        <div className="h-[2px] w-full border-t-2 border-dashed border-rose-500/50 relative">
                           <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 bg-transparent text-[10px] text-rose-400 font-bold tracking-widest">SIGNAL LOST</div>
                        </div>
                     </div>
                     
                     <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-600 flex items-center justify-center mb-2">
                           <ZapOff className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-gray-400">MITOCHONDRIA</span>
                     </div>
                  </div>

                  <ul className="space-y-4">
                     {data.communicationStates.aged.attributes.map((attr, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                           <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                           <span>{attr}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{finding.title}</h3>
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
            <Target className="w-6 h-6 text-cyan-400" /> Protocol Implications
          </h2>
          <div className="bg-cyan-900 bg-opacity-10 border border-cyan-500 border-opacity-20 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.05)]">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-cyan-500 font-bold mt-0.5">•</span>
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
