import data from './data/metabolitesData.json';
import { ShieldCheck, Target, Globe, Activity, ArrowRight, Zap, CheckCircle, Search, Beaker, Dna, HeartPulse, Users } from 'lucide-react';
import { Footer } from './components/Footer';

export const MetabolitesWebpage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": data.titleBlock.headline,
    "author": [
      {
        "@type": "Person",
        "name": data.titleBlock.authors.split(' &')[0]
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": data.titleBlock.journal
    },
    "sameAs": `https://doi.org/${data.titleBlock.doi}`,
    "abstract": data.keyTakeaway
  };

  return (
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magenta opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-cyan border-opacity-30 bg-cyan-500 bg-opacity-[0.05] text-cyan text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all cursor-pointer">
            <Zap className="w-4 h-4" /> {data.titleBlock.journal} Review ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Lifespan-Extending <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan-400">Endogenous Metabolites</span>
          </h1>
          <div className="text-center">
            <span className="block text-magenta font-semibold tracking-widest uppercase text-xs mb-4">Key Takeaway</span>
            <p className="text-lg md:text-xl text-[var(--levl-text-secondary)] font-light max-w-2xl leading-relaxed mb-10">
              {data.keyTakeaway}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 border-t border-[var(--levl-border)] pt-8 w-full justify-center opacity-80">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-cyan hover:underline hover:text-cyan-400 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro & Study Overview */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
             <h2 className="text-3xl font-bold mb-6 text-magenta">{data.whatIsClock[0]}</h2>
             <div className="space-y-6 text-[var(--levl-text-secondary)] font-light leading-relaxed">
               <p>{data.whatIsClock[1]}</p>
               <div>
                  <strong className="block text-white mb-1">{data.whatIsClock[2]}</strong>
                  <p>{data.whatIsClock[3]}</p>
               </div>
               <div>
                  <strong className="block text-white mb-1">{data.whatIsClock[4]}</strong>
                  <p>{data.whatIsClock[5]}</p>
               </div>
             </div>
          </div>
          <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8">
             <div className="flex items-center gap-3 mb-8">
                <Search className="w-6 h-6 text-cyan" />
                <h3 className="text-xl font-bold text-cyan tracking-wide uppercase">Study Overview</h3>
             </div>
             <div className="space-y-6">
                {data.studyOverview.map((item, idx) => (
                  <div key={idx} className="border-b border-[var(--levl-border)] border-opacity-30 pb-4 last:border-0 last:pb-0">
                     <span className="block text-xs font-semibold tracking-widest text-[var(--levl-text-muted)] uppercase mb-1">{item.label}</span>
                     <span className="block text-sm text-white font-light">{item.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. Key Findings & Callout */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           {data.keyFindings.map((finding, idx) => {
              let icon = <ShieldCheck />;
              if (finding.title.includes('Multi-Pathway')) icon = <Target />;
              if (finding.title.includes('Epigenetic')) icon = <Dna />;
              if (finding.title.includes('Biocompatibility')) icon = <HeartPulse />;
              if (finding.title.includes('Conserved')) icon = <Globe />;
              return (
                 <div key={idx} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-6 hover:border-magenta hover:shadow-[0_0_20px_rgba(232,121,249,0.1)] transition-all">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="p-3 rounded-full bg-magenta bg-opacity-10 text-magenta">{icon}</div>
                       <h3 className="text-lg font-semibold">{finding.title}</h3>
                    </div>
                    <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed">{finding.desc}</p>
                 </div>
              )
           })}
        </div>
        
        {/* Callout */}
        <div className="bg-magenta bg-opacity-[0.03] border border-magenta border-opacity-30 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(232,121,249,0.05)]">
           <p className="text-lg text-white font-light italic leading-relaxed max-w-3xl mx-auto">
             "{data.findingsCallout}"
           </p>
        </div>
      </section>

      {/* 4. Evidence Base & Mechanism */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="mb-24">
           <h2 className="text-sm font-semibold tracking-widest text-green uppercase mb-8 text-center">Review Scope & Evidence Base</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.reviewScope.map((scope, idx) => {
                let icon = <Globe />;
                if (scope.title.includes('Human')) icon = <Users />;
                if (scope.title.includes('Mechanistic')) icon = <Activity />;
                return (
                   <div key={idx} className="flex items-center gap-4 bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] p-6 rounded-xl hover:border-green transition-all">
                      <div className="p-2 rounded-full bg-green-500 bg-opacity-10 text-green">{icon}</div>
                      <div>
                         <span className="block font-semibold">{scope.title}</span>
                         <span className="block text-xs text-[var(--levl-text-secondary)] mt-1">{scope.desc}</span>
                      </div>
                   </div>
                )
              })}
           </div>
        </div>

        <h2 className="text-sm font-semibold tracking-widest uppercase text-cyan text-center mb-12">The Mechanism</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
           <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full">
              <Beaker className="w-8 h-8 text-cyan mb-3" />
              <span className="text-white font-semibold tracking-wide">Nutrients</span>
           </div>
           <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0" />
           <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full">
              <Activity className="w-8 h-8 text-cyan mb-3" />
              <span className="text-white font-semibold tracking-wide">Metabolites</span>
           </div>
           <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0" />
           <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full">
              <Target className="w-8 h-8 text-cyan mb-3" />
              <span className="text-white font-semibold tracking-wide">Lifespan</span>
           </div>
        </div>
        <p className="text-center text-[var(--levl-text-secondary)] font-light text-sm mt-8 leading-relaxed max-w-2xl mx-auto">
           {data.mechanismDescription}
        </p>
      </section>

      {/* 5. Top Geroprotective Metabolites */}
      <section className="w-full border-b border-[var(--levl-border)] border-opacity-40 bg-cyan-500 bg-opacity-[0.02] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-cyan">Top Geroprotective Metabolites</h2>
            <p className="text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto">
              Key endogenous molecules identified by the review as potent, multi-target modulators of longevity.
            </p>
          </div>
          
          <div className="space-y-4">
             {data.topMetabolites.map((met, idx) => (
                <div key={idx} className="group relative bg-[var(--levl-bg)] border border-[var(--levl-border)] rounded-2xl overflow-hidden hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-500">
                   <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="md:w-1/3 flex-shrink-0">
                         <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors">{met.name}</h3>
                      </div>
                      <div className="md:w-2/3 space-y-4">
                         <div>
                            <span className="block text-[10px] font-bold tracking-widest text-magenta uppercase mb-1">Mechanism</span>
                            <span className="block text-sm text-[var(--levl-text-secondary)]">{met.mechanism}</span>
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold tracking-widest text-cyan uppercase mb-1">Effect</span>
                            <span className="block text-sm text-white font-light">{met.effect}</span>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Translational Challenges */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-2xl font-bold mb-8 text-center text-red-400">Translational Challenges</h2>
        <div className="space-y-4 bg-red-500 bg-opacity-[0.03] border border-red-500 border-opacity-20 rounded-2xl p-8">
           {data.translationalChallenges.map((chal, idx) => (
             <div key={idx} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.8)]"></div>
                <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed">{chal}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 7. Conclusions & Protocol CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-24">
           <h2 className="text-2xl font-bold mb-8 text-center">Conclusions</h2>
           <div className="space-y-6 bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8">
              {data.conclusions.map((conc, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                   <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed">{conc}</p>
                </div>
              ))}
           </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 mb-8 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
             <ShieldCheck className="w-8 h-8 text-green" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Future Protocol Implication</h2>
          <p className="text-lg font-light text-[var(--levl-text-secondary)] leading-relaxed mb-12 max-w-2xl mx-auto">
             How to leverage these findings in a longevity protocol.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            {data.protocolRecommendations.map((rec, i) => (
               <div key={i} className="flex gap-4 p-6 rounded-xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-green hover:border-opacity-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--levl-text-secondary)] leading-relaxed">{rec}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
