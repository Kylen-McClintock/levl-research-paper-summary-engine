import data from './data/crExData.json';
import { ShieldCheck, Target, Globe, Activity, Zap, CheckCircle, Search, Dna, FileText, Utensils, Footprints, Layers } from 'lucide-react';
import { Footer } from './components/Footer';

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
        <div className="max-w-4xl mx-auto bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500 opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-12 border-b border-[var(--levl-border)] pb-6 relative z-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Biological Age Reduction</h3>
              <p className="text-sm text-[var(--levl-text-secondary)] font-light">PhenoAge variation vs. Chronological Age</p>
            </div>
            <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold">
               <div className="flex items-center gap-2 text-cyan-400"><div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div> Exercise</div>
               <div className="flex items-center gap-2 text-green-400"><div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div> Diet</div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-10">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 left-[180px] right-[60px] pointer-events-none">
              <div className="w-full h-full border-l border-r border-[var(--levl-border)] border-opacity-30 relative flex justify-between">
                <div className="w-px h-full bg-[var(--levl-border)] bg-opacity-30"></div>
                <div className="w-px h-full bg-[var(--levl-border)] bg-opacity-30"></div>
                <div className="w-px h-full bg-[var(--levl-border)] bg-opacity-30"></div>
                <div className="w-px h-full bg-[var(--levl-border)] bg-opacity-30"></div>
              </div>
              <div className="flex justify-between text-[10px] text-[var(--levl-text-muted)] font-mono mt-2 absolute w-full -bottom-6">
                <span>0 yr</span>
                <span>-1.5 yr</span>
                <span>-3.0 yr</span>
                <span>-4.5 yr</span>
                <span>-6.0 yr</span>
              </div>
            </div>

            {data.chartData.map((bar, idx) => {
               const maxAbs = 6.0; // scale to 6.0 for grid alignment
               const widthPct = bar.value === 0 ? 0 : Math.abs(bar.value) / maxAbs * 100;
               
               let gradient = "from-[#2A2A2A] to-[#3A3A3A]";
               let shadow = "shadow-none";
               if (bar.label === "Endurance Exercise") {
                 gradient = "from-cyan-900 via-cyan-500 to-cyan-300";
                 shadow = "shadow-[0_0_25px_rgba(34,211,238,0.4)]";
               }
               if (bar.label === "Calorie Restriction") {
                 gradient = "from-green-900 via-green-500 to-green-300";
                 shadow = "shadow-[0_0_25px_rgba(74,222,128,0.4)]";
               }
               
               return (
                 <div key={idx} className="flex items-center gap-6 relative z-10">
                   <div className="w-[160px] text-right text-sm font-semibold text-[var(--levl-text-secondary)] tracking-wide flex-shrink-0">
                     {bar.label}
                   </div>
                   
                   <div className="flex-1 h-12 relative flex items-center pr-[60px]">
                      {/* Empty track */}
                      <div className="absolute inset-y-2 left-0 right-[60px] bg-black bg-opacity-40 rounded-r-full border border-[var(--levl-border)] border-opacity-50"></div>
                      
                      {/* Fill bar */}
                      <div 
                        className={`h-8 rounded-r-full bg-gradient-to-r ${gradient} ${shadow} relative flex items-center justify-end pr-4 transition-all duration-1000 ease-out border border-white border-opacity-20`}
                        style={{ width: `${widthPct}%` }}
                      >
                         {bar.value < 0 && (
                           <span className="text-black font-bold font-mono text-xs mix-blend-overlay">
                             {bar.value} yr
                           </span>
                         )}
                      </div>
                   </div>
                 </div>
               );
            })}
          </div>
          <p className="text-center text-[10px] text-[var(--levl-text-muted)] mt-16 italic opacity-60">
            *Data represents the mean reduction in multi-omic biological age (PhenoAge) across test groups.
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

        {/* Shared Mechanisms: Molecular Venn Diagram */}
        <div className="mt-24 pt-16 border-t border-[var(--levl-border)] border-opacity-30 relative max-w-4xl mx-auto">
          <h3 className="text-center text-2xl font-bold mb-16 text-white tracking-wide">The Molecular Overlap</h3>
          
          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-visible">
            {/* Left Circle (Green - Diet) */}
            <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full border border-green border-opacity-50 bg-green-500 bg-opacity-10 mix-blend-screen flex items-center shadow-[0_0_50px_rgba(34,197,94,0.15)] transition-transform hover:scale-105 hover:bg-opacity-20 z-10 -translate-x-[60px] md:-translate-x-[100px]">
              <div className="text-center absolute left-[15px] md:left-[30px] top-1/2 -translate-y-1/2 w-24 md:w-32">
                <span className="block text-green font-bold text-lg md:text-xl mb-1">Calorie<br/>Restriction</span>
                <span className="text-[10px] md:text-xs text-green opacity-80 leading-tight block">Microbiome & Metabolism</span>
              </div>
            </div>
            
            {/* Right Circle (Cyan - Exercise) */}
            <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full border border-cyan border-opacity-50 bg-cyan-500 bg-opacity-10 mix-blend-screen flex items-center shadow-[0_0_50px_rgba(14,165,233,0.15)] transition-transform hover:scale-105 hover:bg-opacity-20 z-10 translate-x-[60px] md:translate-x-[100px]">
              <div className="text-center absolute right-[15px] md:right-[30px] top-1/2 -translate-y-1/2 w-24 md:w-32">
                <span className="block text-cyan font-bold text-lg md:text-xl mb-1">Endurance<br/>Exercise</span>
                <span className="text-[10px] md:text-xs text-cyan opacity-80 leading-tight block">Epigenetics & Tissue</span>
              </div>
            </div>
            
            {/* Center Overlap Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-[120px] md:w-[160px] pointer-events-none">
               <Zap className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-2 opacity-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
               <span className="block text-white font-bold text-sm md:text-base mb-2 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">Shared Pathways</span>
               <span className="text-[10px] md:text-xs text-white opacity-90 leading-tight block drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Oxidative Stress Reduction & Basal Transcription</span>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto mt-8 relative z-30 bg-[var(--levl-bg)] p-4 rounded-xl border border-[var(--levl-border)] bg-opacity-80 backdrop-blur-sm">
             <p className="text-sm text-[var(--levl-text-secondary)] font-light italic leading-relaxed">
               "{data.sharedMechanisms}"
             </p>
          </div>
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

      {/* 4.5. Trajectory Line Chart */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
           <h3 className="text-xl font-bold text-white mb-2 text-center">Biological Age Trajectory</h3>
           <p className="text-sm text-[var(--levl-text-secondary)] font-light text-center mb-10">Divergence of physiological aging from chronological aging over time.</p>
           
           <div className="relative w-full h-[300px] mb-6">
             {/* Y-Axis Label */}
             <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-[var(--levl-text-muted)] tracking-widest uppercase font-semibold">Biological Age</div>
             
             {/* X-Axis Label */}
             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[var(--levl-text-muted)] tracking-widest uppercase font-semibold">Chronological Age</div>
             
             {/* SVG Chart */}
             <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300" preserveAspectRatio="none">
               {/* Grid Lines */}
               <line x1="0" y1="300" x2="800" y2="300" stroke="var(--levl-border)" strokeWidth="1" />
               <line x1="0" y1="0" x2="0" y2="300" stroke="var(--levl-border)" strokeWidth="1" />
               <line x1="0" y1="150" x2="800" y2="150" stroke="var(--levl-border)" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
               <line x1="400" y1="0" x2="400" y2="300" stroke="var(--levl-border)" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
               
               {/* Western Diet (Control) - 1:1 ratio slope */}
               <path d="M 0 300 L 800 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeDasharray="10,5" />
               
               {/* Calorie Restriction Line (Green) */}
               <path d="M 0 300 Q 400 220 800 130" fill="none" stroke="#22c55e" strokeWidth="4" className="drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
               
               {/* Endurance Exercise Line (Cyan) */}
               <path d="M 0 300 Q 400 230 800 145" fill="none" stroke="#0ea5e9" strokeWidth="4" className="drop-shadow-[0_0_15px_rgba(14,165,233,0.6)]" />

               {/* Data Points at end */}
               <circle cx="800" cy="50" r="6" fill="#333" stroke="white" strokeWidth="2" />
               <circle cx="800" cy="130" r="6" fill="#22c55e" stroke="white" strokeWidth="2" className="drop-shadow-[0_0_10px_rgba(34,197,94,1)]" />
               <circle cx="800" cy="145" r="6" fill="#0ea5e9" stroke="white" strokeWidth="2" className="drop-shadow-[0_0_10px_rgba(14,165,233,1)]" />
             </svg>
             
             {/* Legend */}
             <div className="absolute top-4 left-6 flex flex-col gap-3 bg-[var(--levl-bg)] border border-[var(--levl-border)] p-4 rounded-xl bg-opacity-80 backdrop-blur-md">
                <div className="flex items-center gap-3 text-xs text-white">
                  <div className="w-4 h-1 bg-white opacity-30"></div> Sedentary (Western Diet)
                </div>
                <div className="flex items-center gap-3 text-xs text-green-400 font-semibold">
                  <div className="w-4 h-1 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div> Calorie Restriction
                </div>
                <div className="flex items-center gap-3 text-xs text-cyan-400 font-semibold">
                  <div className="w-4 h-1 bg-cyan-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div> Endurance Exercise
                </div>
             </div>
             
             {/* Callout Label */}
             <div className="hidden md:block absolute right-[-20px] top-[138px] translate-x-full text-xs text-white font-mono bg-[var(--levl-border)] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                ~5 Yr Delta
             </div>
           </div>
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
      <Footer />
    </div>
  );
};
