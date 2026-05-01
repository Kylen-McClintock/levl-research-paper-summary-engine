import data from './data/agingClocksData.json';
import { Brain, HeartPulse, Activity, Target, ShieldCheck, Globe, ArrowRight, Zap, CheckCircle, Users, Search } from 'lucide-react';
import { LineChart } from './components/LineChart';
import { Footer } from './components/Footer';

export const AgingClocksWebpage = () => {
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
      "name": "Nature Aging"
    },
    "sameAs": `https://doi.org/${data.titleBlock.doi}`,
    "abstract": data.keyTakeaway
  };

  return (
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magenta opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-cyan border-opacity-30 bg-cyan-500 bg-opacity-[0.05] text-cyan text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all cursor-pointer">
            <Zap className="w-4 h-4" /> Nature Aging Study (2026)
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Your Organs Are Aging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan-400">at Different Rates.</span>
          </h1>
          <div className="text-center">
            <span className="block text-magenta font-semibold tracking-widest uppercase text-xs mb-4">Key Takeaway</span>
            <p className="text-lg md:text-xl text-[var(--levl-text-secondary)] font-light max-w-2xl leading-relaxed mb-10">
              {data.keyTakeaway}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 border-t border-[var(--levl-border)] pt-8 w-full justify-center opacity-80">
            <span className="text-sm font-semibold tracking-wide text-[var(--levl-text-secondary)] italic text-center max-w-2xl">
              "{data.titleBlock.headline}"
            </span>
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-cyan hover:underline hover:text-cyan-400 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16 mt-8 border-t border-magenta border-opacity-20">
             <div className="bg-[var(--levl-bg)] border border-[var(--levl-border)] rounded-2xl p-6 md:p-8 flex items-center justify-center min-h-[400px]">
                <div className="w-full h-full transform scale-90 md:scale-100 origin-center">
                  <LineChart data={data.mortalityLineChart} />
                </div>
             </div>
             <div className="bg-[var(--levl-bg)] border border-[var(--levl-border)] rounded-2xl p-6 md:p-8 flex items-center justify-center min-h-[400px]">
                <div className="w-full h-full transform scale-90 md:scale-100 origin-center">
                  <LineChart data={data.dementiaLineChart} />
                </div>
             </div>
          </div>
        </div>
      </section>

      
      {/* 2. Intro & Study Overview */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
             <h2 className="text-3xl font-bold mb-6 text-magenta">What is an Organ-Specific Aging Clock?</h2>
             <div className="space-y-6 text-[var(--levl-text-secondary)] font-light leading-relaxed">
               <p>{data.whatIsClock[0]}</p>
               <div>
                  <strong className="block text-white mb-1">{data.whatIsClock[1]}</strong>
                  <p>{data.whatIsClock[2]}</p>
               </div>
               <div>
                  <strong className="block text-white mb-1">{data.whatIsClock[3]}</strong>
                  <p>{data.whatIsClock[4]}</p>
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

      {/* 3. Key Findings & Validation */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Findings & Validation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           {data.keyFindings.map((finding, idx) => {
              let icon = <ShieldCheck />;
              if (finding.title === 'Predictive Power') icon = <Target />;
              if (finding.title === 'Brain Aging Risk') icon = <Brain />;
              if (finding.title === 'Diverse Validation') icon = <Globe />;
              if (finding.title === 'Genetic & Lifestyle Links') icon = <Activity />;
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
        
        {/* Multi-Cohort Validation */}
        <div className="bg-green-500 bg-opacity-[0.03] border border-green border-opacity-30 rounded-2xl p-8 text-center">
           <h3 className="text-sm font-semibold tracking-widest text-green uppercase mb-6">Multi-Cohort Validation</h3>
           <p className="text-xs text-[var(--levl-text-secondary)] mb-8 max-w-2xl mx-auto">The models were successfully validated across three independent cohorts, proving their robustness.</p>
           <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-green-500 bg-opacity-10 px-6 py-3 rounded-full border border-green border-opacity-20">
                 <Users className="w-5 h-5 text-green" />
                 <div className="text-left">
                    <span className="block text-sm font-bold text-white">UK Biobank</span>
                    <span className="block text-[10px] text-[var(--levl-text-secondary)]">n = 43,616</span>
                 </div>
              </div>
              <div className="flex items-center gap-3 bg-green-500 bg-opacity-10 px-6 py-3 rounded-full border border-green border-opacity-20">
                 <Users className="w-5 h-5 text-green" />
                 <div className="text-left">
                    <span className="block text-sm font-bold text-white">China Cohort</span>
                    <span className="block text-[10px] text-[var(--levl-text-secondary)]">n = 3,977</span>
                 </div>
              </div>
              <div className="flex items-center gap-3 bg-green-500 bg-opacity-10 px-6 py-3 rounded-full border border-green border-opacity-20">
                 <Users className="w-5 h-5 text-green" />
                 <div className="text-left">
                    <span className="block text-sm font-bold text-white">USA Cohort</span>
                    <span className="block text-[10px] text-[var(--levl-text-secondary)]">n = 800</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. The Mechanism */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-cyan text-center mb-12">The Mechanism</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full">
              <Activity className="w-8 h-8 text-cyan mb-3" />
              <span className="text-white font-semibold tracking-wide">Proteomics</span>
           </div>
           <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0" />
           <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full">
              <Brain className="w-8 h-8 text-cyan mb-3" />
              <span className="text-white font-semibold tracking-wide">Clocks</span>
           </div>
           <ArrowRight className="w-8 h-8 text-cyan rotate-90 md:rotate-0" />
           <div className="flex flex-col items-center flex-1 bg-cyan-500 bg-opacity-[0.05] border border-cyan border-opacity-30 p-8 rounded-xl w-full">
              <Target className="w-8 h-8 text-cyan mb-3" />
              <span className="text-white font-semibold tracking-wide">Risk</span>
           </div>
        </div>
        <p className="text-center text-[var(--levl-text-secondary)] font-light text-sm mt-8 leading-relaxed max-w-2xl mx-auto">
           Machine learning maps patterns in circulating blood proteins to the biological health of 10 specific organs. Accelerated aging profiles directly correlate with future disease incidence and overall mortality risk.
        </p>
      </section>

      {/* 2. Interactive Organ Dashboard */}

      <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Disease-Specific Links</h2>
          <p className="text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto">
            Hazard ratios per 1-SD increase in organ age gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brain Card */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-500">
            <Brain className="w-12 h-12 text-cyan mb-4" />
            <h3 className="text-xl font-semibold tracking-wide text-white mb-6">Brain Aging</h3>
            <div className="text-center w-full bg-cyan-500 bg-opacity-[0.05] p-6 rounded-xl border border-cyan border-opacity-20">
              <span className="block text-4xl font-bold text-white mb-1">1.88x</span>
              <span className="block text-sm text-cyan font-semibold tracking-widest uppercase mb-4">Dementia Risk</span>
              <div className="w-12 h-px bg-cyan opacity-40 mx-auto mb-4"></div>
              <span className="block text-xs text-[var(--levl-text-secondary)]">Also associated with Parkinson's: 1.30x HR</span>
            </div>
          </div>

          {/* Kidney Card */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-500">
            <Activity className="w-12 h-12 text-cyan mb-4" />
            <h3 className="text-xl font-semibold tracking-wide text-white mb-6">Kidney Aging</h3>
            <div className="text-center w-full bg-cyan-500 bg-opacity-[0.05] p-6 rounded-xl border border-cyan border-opacity-20 flex-1 flex flex-col justify-center">
              <span className="block text-4xl font-bold text-white mb-1">2.08x</span>
              <span className="block text-sm text-cyan font-semibold tracking-widest uppercase">Type 2 Diabetes Risk</span>
            </div>
          </div>

          {/* Intestine Card */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-500">
            <HeartPulse className="w-12 h-12 text-cyan mb-4" />
            <h3 className="text-xl font-semibold tracking-wide text-white mb-6">Intestine Aging</h3>
            <div className="text-center w-full bg-cyan-500 bg-opacity-[0.05] p-6 rounded-xl border border-cyan border-opacity-20 flex-1 flex flex-col justify-center">
              <span className="block text-4xl font-bold text-white mb-1">1.93x</span>
              <span className="block text-sm text-cyan font-semibold tracking-widest uppercase">Chronic Kidney Disease Risk</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Danger Zone */}
      <section className="w-full border-y border-magenta border-opacity-20 bg-magenta bg-opacity-[0.02] py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-magenta mb-4">Systemic Failure Risk</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
              Having multiple extremely aged organs <span className="font-semibold text-magenta">exponentially</span> drives disease and mortality risk.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-64 h-64 rounded-full border border-magenta border-opacity-40 bg-magenta bg-opacity-5 shadow-[0_0_50px_rgba(232,121,249,0.15)] relative">
             <div className="absolute inset-0 border border-magenta rounded-full animate-ping opacity-20"></div>
             <span className="text-7xl font-bold text-white mb-1">7.8x</span>
             <span className="text-sm text-magenta font-semibold tracking-wider uppercase">Mortality Risk</span>
             <span className="text-xs text-[var(--levl-text-secondary)] mt-2 opacity-80">(5+ Aged Organs)</span>
          </div>
        </div>
      </section>

      
      {/* Conclusions */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40">
        <div className="mb-8">
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
      </section>

      {/* 4. Protocol CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 bg-opacity-10 border border-green border-opacity-40 mb-8 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
           <ShieldCheck className="w-8 h-8 text-green" />
        </div>
        <h2 className="text-3xl font-bold mb-6">What can we do about it?</h2>
        <p className="text-lg font-light text-[var(--levl-text-secondary)] leading-relaxed mb-12">
          If validated clinically, organ-specific proteomic aging tests could help prioritize more targeted prevention strategies. Assessing organ-specific aging rather than total biological age can unlock highly specific interventions.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
          {data.protocolRecommendations.map((rec, i) => (
             <div key={i} className="flex gap-4 p-6 rounded-xl border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] hover:border-green hover:border-opacity-50 transition-colors">
                <CheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--levl-text-secondary)] leading-relaxed">{rec}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
