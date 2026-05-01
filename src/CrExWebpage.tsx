import data from './data/crExData.json';
import { ShieldCheck, Target, Globe, Activity, Zap, CheckCircle, Search, Dna, FileText, Utensils, Footprints, Layers } from 'lucide-react';

export const CrExWebpage = () => {
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
    "abstract": data.keyTakeaway
  };

  return (
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500 opacity-[0.07] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-green border-opacity-30 bg-green-500 bg-opacity-[0.05] text-green text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all cursor-pointer">
            <Zap className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Diet vs. Exercise <br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-medium">At the Molecular Level</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-green" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              {data.keyTakeaway}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-green hover:underline hover:text-green-400 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Study Overview */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="flex items-center justify-center gap-3 mb-12">
            <Search className="w-6 h-6 text-[var(--levl-text-secondary)]" />
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">Study Overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {data.studyOverview.map((item, idx) => (
              <div key={idx} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] p-6 rounded-2xl text-center">
                  <span className="block text-xs font-semibold tracking-widest text-[var(--levl-text-muted)] uppercase mb-3">{item.label}</span>
                  <span className="block text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed">{item.value}</span>
              </div>
            ))}
        </div>

        {/* Chart Visualization */}
        <div className="max-w-4xl mx-auto bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <h3 className="text-center font-bold text-lg mb-8 uppercase tracking-widest text-[var(--levl-text-secondary)]">
            PhenoAge Biological Age Reduction
          </h3>
          <div className="flex flex-col gap-6">
            {data.chartData.map((bar, idx) => {
               // Calculate width percentage relative to max value (5.1)
               const maxAbs = 5.1;
               const widthPct = bar.value === 0 ? 2 : Math.abs(bar.value) / maxAbs * 100;
               let barColor = "bg-[var(--levl-border)]";
               if (bar.label === "Endurance Exercise") barColor = "bg-cyan-500 shadow-[0_0_15px_rgba(14,165,233,0.4)]";
               if (bar.label === "Calorie Restriction") barColor = "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]";
               
               return (
                 <div key={idx} className="flex items-center gap-4">
                   <div className="w-48 text-right text-sm font-semibold text-[var(--levl-text-secondary)] tracking-wide">
                     {bar.label}
                   </div>
                   <div className="flex-1 bg-white bg-opacity-5 h-8 rounded overflow-hidden flex items-center relative">
                      <div 
                        className={`h-full ${barColor} transition-all duration-1000 ease-out`}
                        style={{ width: `${widthPct}%` }}
                      ></div>
                   </div>
                   <div className="w-16 text-left font-mono font-bold text-white">
                     {bar.value < 0 ? `${bar.value} yr` : '-'}
                   </div>
                 </div>
               );
            })}
          </div>
          <p className="text-center text-[10px] text-[var(--levl-text-muted)] mt-6 italic">
            *Data reflects the average reduction in PhenoAge biomarkers compared to chronological age.
          </p>
        </div>
      </section>

      {/* 3. The "Vs" Layout */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold mb-16 text-center text-white">Parallel Pathways to Youth</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Calorie Restriction Pillar */}
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4 border-b border-green border-opacity-30 pb-4">
                <div className="w-14 h-14 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                   <Utensils className="w-6 h-6 text-green" />
                </div>
                <h3 className="text-2xl font-bold text-green">{data.comparison.cr.title}</h3>
             </div>
             
             <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:border-green hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all">
                <span className="block text-[10px] font-bold tracking-widest text-green uppercase mb-2">Primary Mechanism</span>
                <p className="text-[var(--levl-text-secondary)] font-light mb-8">{data.comparison.cr.primaryMechanism}</p>
                
                <span className="block text-[10px] font-bold tracking-widest text-green uppercase mb-2">Biomarkers Improved</span>
                <p className="text-white font-light leading-relaxed">{data.comparison.cr.biomarkersImproved}</p>
             </div>
          </div>

          {/* Endurance Exercise Pillar */}
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4 border-b border-cyan border-opacity-30 pb-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500 bg-opacity-10 border border-cyan border-opacity-40 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.15)]">
                   <Footprints className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-cyan">{data.comparison.ex.title}</h3>
             </div>
             
             <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all">
                <span className="block text-[10px] font-bold tracking-widest text-cyan uppercase mb-2">Primary Mechanism</span>
                <p className="text-[var(--levl-text-secondary)] font-light mb-8">{data.comparison.ex.primaryMechanism}</p>
                
                <span className="block text-[10px] font-bold tracking-widest text-cyan uppercase mb-2">Biomarkers Improved</span>
                <p className="text-white font-light leading-relaxed">{data.comparison.ex.biomarkersImproved}</p>
             </div>
          </div>

        </div>

        {/* Shared Mechanisms */}
        <div className="mt-16 bg-white bg-opacity-[0.02] border border-white border-opacity-10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
           <span className="block text-xs font-semibold tracking-widest text-[var(--levl-text-muted)] uppercase mb-4">Shared Downstream Effects</span>
           <p className="text-lg text-[var(--levl-text-secondary)] font-light italic leading-relaxed">
             "{data.sharedMechanisms}"
           </p>
        </div>
      </section>

      {/* 4. Multi-Omic Layers */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="text-center mb-16">
          <Layers className="w-10 h-10 text-[var(--levl-text-muted)] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">The Multi-Omic Assessment Model</h2>
          <p className="text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto">
            The study utilized four distinct layers of biological data to accurately map physiological age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {data.multiOmics.map((layer, idx) => {
              let icon = <Activity />;
              if (layer.icon === 'Dna') icon = <Dna />;
              if (layer.icon === 'FileText') icon = <FileText />;
              if (layer.icon === 'Globe') icon = <Globe />;
              return (
                 <div key={idx} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] p-6 rounded-2xl flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-white bg-opacity-5 text-white mb-4">{icon}</div>
                    <h3 className="text-sm font-bold mb-2">{layer.title}</h3>
                    <p className="text-xs text-[var(--levl-text-secondary)] font-light leading-relaxed">{layer.desc}</p>
                 </div>
              )
           })}
        </div>
      </section>

      {/* 5. Conclusions & Protocol CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-24">
           <h2 className="text-2xl font-bold mb-8 text-center">Conclusions</h2>
           <div className="space-y-6 bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8">
              {data.conclusions.map((conc, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 mt-2 flex-shrink-0"></div>
                   <p className="text-[var(--levl-text-secondary)] font-light leading-relaxed">{conc}</p>
                </div>
              ))}
           </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 mb-8 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
             <Target className="w-8 h-8 text-green" />
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
