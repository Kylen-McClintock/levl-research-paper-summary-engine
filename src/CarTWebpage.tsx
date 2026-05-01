import data from './data/carTData.json';
import { ShieldCheck, Target, Activity, Zap, CheckCircle, Crosshair, Shield, Syringe, Sparkles, ArrowRight } from 'lucide-react';
import { Footer } from './components/Footer';

export const CarTWebpage = () => {
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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-amber-500 selection:text-white pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-amber-500 border-opacity-30 bg-amber-500 bg-opacity-[0.05] text-amber-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
            <Sparkles className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Hunting Zombie Cells<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 font-medium">Immune System Re-Engineering</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              Repurposing CAR T-cell therapy to hunt and destroy 'zombie' senescent cells provides a long-lasting, vaccine-like shield against age-related decline.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline hover:text-amber-300 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What are CAR T-Cells? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">The "Living Drug"</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {data.whatIsCART.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full">
                  {data.whatIsCART[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Senolytic Hunt (Pathway) */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
         <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center">The Senolytic Hunt</h2>
         <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-16">{data.mechanismDescription}</p>
         
         <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {data.pathwaySteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center w-full md:w-1/4 relative group">
                 <div className="w-16 h-16 rounded-full bg-white bg-opacity-[0.03] border border-[var(--levl-border)] flex items-center justify-center mb-6 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:bg-opacity-10 transition-colors z-10 relative shadow-lg">
                    {i === 0 && <Target className="w-6 h-6 text-amber-400" />}
                    {i === 1 && <Syringe className="w-6 h-6 text-amber-400" />}
                    {i === 2 && <Crosshair className="w-6 h-6 text-amber-400" />}
                    {i === 3 && <Sparkles className="w-6 h-6 text-amber-400" />}
                 </div>
                 <h4 className="text-sm font-semibold text-white mb-2">{step.step.split('. ')[1]}</h4>
                 <p className="text-xs text-[var(--levl-text-muted)] font-light">{step.desc}</p>
                 
                 {/* Connectors */}
                 {i < data.pathwaySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-[var(--levl-border)] to-amber-500/50 z-0">
                       <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-amber-500/50 translate-x-1/2" />
                    </div>
                 )}
              </div>
            ))}
         </div>
      </section>

      {/* 4. Prophylactic Timeline Visualization */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">A Vaccine Against Aging?</h2>
        
        <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">
           {/* Glow behind chart */}
           <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500 opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

           <div className="relative z-10 flex flex-col gap-12">
             
             {/* Traditional Therapeutic Approach */}
             <div className="relative w-full">
               <div className="flex justify-between text-xs text-[var(--levl-text-muted)] mb-2 font-mono uppercase tracking-widest">
                 <span>Traditional Therapy</span>
                 <span className="text-rose-400 font-semibold">Treat After Decline</span>
               </div>
               <div className="w-full h-8 bg-white bg-opacity-5 rounded-r-lg border border-white border-opacity-10 flex items-center relative">
                  {/* Youth Phase (Healthy) */}
                  <div className="w-[40%] h-full bg-gradient-to-r from-gray-600 to-gray-500 opacity-80 border-r border-white/10" />
                  {/* Aging Phase (Decline) */}
                  <div className="w-[30%] h-full bg-gradient-to-r from-gray-500 to-rose-900 opacity-80 border-r border-white/10 flex items-center justify-center">
                    <span className="text-[10px] text-white opacity-50 uppercase tracking-widest">Decline</span>
                  </div>
                  {/* Therapy Phase */}
                  <div className="w-[30%] h-full bg-gradient-to-r from-rose-900 to-amber-900 rounded-r-lg opacity-80 flex items-center justify-center">
                     <span className="text-[10px] text-amber-200 opacity-90 uppercase tracking-widest flex items-center gap-1"><Syringe className="w-3 h-3"/> Multi-Dose</span>
                  </div>
               </div>
             </div>

             {/* Prophylactic CAR T-Cell Approach */}
             <div className="relative w-full">
               <div className="flex justify-between text-xs font-semibold text-amber-400 mb-2 font-mono uppercase tracking-widest">
                 <span className="flex items-center gap-2"><Shield className="w-3 h-3" /> CAR T-Cell Prophylaxis</span>
                 <span className="text-white bg-amber-500 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.8)]">Lifelong Protection</span>
               </div>
               <div className="w-full h-8 bg-white bg-opacity-5 rounded-r-lg border border-white border-opacity-10 flex items-center relative">
                  {/* Single Dose in Youth */}
                  <div className="absolute left-[38%] -top-3 w-[4%] h-[140%] bg-amber-400 rounded shadow-[0_0_15px_rgba(245,158,11,0.8)] z-20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-black" />
                  </div>
                  
                  {/* Youth Phase (Healthy) */}
                  <div className="w-[40%] h-full bg-gradient-to-r from-amber-600 to-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-10" />
                  
                  {/* Protected Phase */}
                  <div className="w-[60%] h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-r-lg shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center z-10">
                     <span className="text-black text-[10px] font-bold tracking-widest uppercase opacity-80 flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Continuous Senescent Clearance</span>
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
                <CheckCircle className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">{finding.title}</h3>
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
            <Syringe className="w-6 h-6 text-amber-400" /> Protocol Implications
          </h2>
          <div className="bg-amber-900 bg-opacity-10 border border-amber-500 border-opacity-20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
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
