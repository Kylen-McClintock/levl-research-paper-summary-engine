import data from './data/rapamycinData.json';
import { Target, Activity, ShieldCheck, CheckCircle, Flame, Leaf } from 'lucide-react';
import { Footer } from './components/Footer';

export const RapamycinWebpage = () => {
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
    <div id="infographic" className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-indigo-500 selection:text-white pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 border-b border-[var(--levl-border)]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-indigo-500 border-opacity-30 bg-indigo-500 bg-opacity-[0.05] text-indigo-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:bg-opacity-20 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all cursor-pointer">
            <Target className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            The Pharmacological<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300 font-medium tracking-tight">Holy Grail Of Longevity</span>
          </h1>
          <p className="max-w-2xl text-center text-[var(--levl-text-secondary)] font-light text-sm italic mb-8">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--levl-border)] pb-4">
              <ShieldCheck className="w-4 h-4 text-indigo-400" /> Key Takeaway
            </span>
            <p className="text-lg text-[var(--levl-text-secondary)] font-light leading-relaxed">
              The landmark study proving that pharmacological inhibition of mTOR using Rapamycin extends maximum lifespan in mammals, even when started in old age.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--levl-text-muted)] font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is mTOR? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">The Master Switch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {data.whatIsMtor.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {item}
                </span>
                <p className="text-[var(--levl-text-secondary)] leading-relaxed font-light text-sm bg-white bg-opacity-[0.02] p-6 rounded-xl border border-white border-opacity-10 h-full backdrop-blur-sm">
                  {data.whatIsMtor[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Biological Seesaw */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-[var(--levl-border)] border-opacity-40 relative z-10">
         <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center">The Biological Seesaw</h2>
         <p className="text-center text-[var(--levl-text-secondary)] font-light max-w-2xl mx-auto mb-16">{data.mechanismDescription}</p>
         
         <div className="grid md:grid-cols-2 gap-8 relative">
            {/* The Fulcrum / Pivot UI */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
               <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-full px-4 py-2 text-xs font-bold tracking-widest text-white mb-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  mTOR
               </div>
               <div className="w-1 h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
            </div>

            {/* mTOR ON (Left) */}
            <div className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-3xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500 opacity-5 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-10"></div>
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 border-b border-[var(--levl-border)] pb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                           <Flame className="w-6 h-6 text-rose-400"/> {data.seesawStates.mtorOn.title}
                        </h3>
                        <span className="text-xs font-light text-[var(--levl-text-muted)] tracking-wider uppercase mt-1 block">
                           {data.seesawStates.mtorOn.subtitle}
                        </span>
                     </div>
                  </div>
                  <ul className="space-y-4">
                     {data.seesawStates.mtorOn.attributes.map((attr, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--levl-text-secondary)]">
                           <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                           {attr}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* mTOR OFF (Right) */}
            <div className="bg-indigo-900 bg-opacity-10 border border-indigo-500 border-opacity-20 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.05)] group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-10 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-20"></div>
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 border-b border-indigo-500 border-opacity-20 pb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                           <Leaf className="w-6 h-6 text-indigo-400"/> {data.seesawStates.mtorOff.title}
                        </h3>
                        <span className="text-xs font-light text-[var(--levl-text-muted)] tracking-wider uppercase mt-1 block">
                           {data.seesawStates.mtorOff.subtitle}
                        </span>
                     </div>
                  </div>
                  <ul className="space-y-4">
                     {data.seesawStates.mtorOff.attributes.map((attr, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--levl-text-secondary)]">
                           <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                           <span className={i === 3 ? "text-indigo-300 font-medium" : ""}>{attr}</span>
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
            <div key={i} className="bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">{finding.title}</h3>
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
            <Activity className="w-6 h-6 text-indigo-400" /> Protocol Implications
          </h2>
          <div className="bg-indigo-900 bg-opacity-10 border border-indigo-500 border-opacity-20 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-[0_0_40px_rgba(99,102,241,0.05)]">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-indigo-500 font-bold mt-0.5">•</span>
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
