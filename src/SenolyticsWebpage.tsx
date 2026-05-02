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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-yellow-500 selection:text-black pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-yellow-500 border-opacity-30 bg-yellow-500 bg-opacity-[0.05] text-yellow-500 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(234,179,8,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] transition-all cursor-pointer">
            <FlaskConical className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Small-Molecule<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 font-medium tracking-tight">Senolytic Therapy</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-yellow-500" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              The discovery that a cheap, orally available cocktail of Dasatinib and Quercetin can hunt down and destroy toxic zombie cells to extend lifespan.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-yellow-500 hover:underline hover:text-yellow-400 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What are Senolytics? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Hunting Zombie Cells</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.whatAreSenolytics.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col bg-[var(--levl-panel-bg)] p-6 rounded-xl border border-[var(--levl-border)]">
                <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase mb-4 flex items-center gap-2 border-b border-[var(--levl-border)] pb-4">
                  <Target className="w-4 h-4" /> Pillar {(i/2)+1}
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

      {/* 3. The Hit-and-Run Protocol UI */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
         <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center">{data.hitAndRunProtocol.title}</h2>
         <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-16">{data.hitAndRunProtocol.description}</p>
         
         <div className="grid md:grid-cols-2 gap-8 relative">
            {/* The Arrow / Divider */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
               <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-full p-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <ArrowRight className="w-6 h-6 text-yellow-500" />
               </div>
            </div>

            {/* The Hit (Left) */}
            <div className="bg-yellow-900 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.1)] group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-20 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-30"></div>
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 border-b border-yellow-500 border-opacity-30 pb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                           <Play className="w-6 h-6 text-yellow-500"/> {data.hitAndRunProtocol.hit.title}
                        </h3>
                     </div>
                  </div>
                  
                  {/* Diagram */}
                  <div className="flex items-center justify-center gap-6 mb-8 py-4">
                     {/* Zombie Cell Getting Destroyed */}
                     <div className="relative w-20 h-20">
                        <div className="absolute inset-0 bg-rose-500/20 border-2 border-rose-500/50 rounded-full flex items-center justify-center animate-pulse">
                           <Skull className="w-8 h-8 text-rose-500" />
                        </div>
                        {/* Lightning bolt hitting it */}
                        <Zap className="absolute -top-2 -right-2 w-10 h-10 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                     </div>
                  </div>

                  <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed">
                     {data.hitAndRunProtocol.hit.desc}
                  </p>
               </div>
            </div>

            {/* The Run (Right) */}
            <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-5 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-10"></div>
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 border-b border-[var(--levl-border)] pb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                           <Pause className="w-6 h-6 text-emerald-400"/> {data.hitAndRunProtocol.run.title}
                        </h3>
                     </div>
                  </div>
                  
                  {/* Diagram */}
                  <div className="flex items-center justify-center gap-6 mb-8 py-4">
                     {/* Healthy Cells Remaining */}
                     <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center">
                              <Activity className="w-5 h-5 text-emerald-400" />
                           </div>
                        ))}
                     </div>
                  </div>

                  <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed">
                     {data.hitAndRunProtocol.run.desc}
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">Transformative Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-yellow-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">{finding.title}</h3>
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
            <Target className="w-6 h-6 text-yellow-500" /> Protocol Implications
          </h2>
          <div className="bg-yellow-900 bg-opacity-10 border border-yellow-500 border-opacity-20 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-[0_0_40px_rgba(234,179,8,0.05)]">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-yellow-500 font-bold mt-0.5">•</span>
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
