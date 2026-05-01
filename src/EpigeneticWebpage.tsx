import data from './data/epigeneticData.json';
import { Activity, Zap, CheckCircle, Dna, Cpu, Terminal, Sparkles, Database, Power } from 'lucide-react';
import { Footer } from './components/Footer';

export const EpigeneticWebpage = () => {
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
    <div id="infographic" className="min-h-screen bg-[#050f0a] text-white font-inter selection:bg-emerald-500 selection:text-black pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* Matrix-like background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgTCA0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTYsIDE4NSwgMTI5LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none"></div>

      {/* 1. Hero Cover */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 border-b border-emerald-900/40">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-24 pb-16">
          <a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="mb-6 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:bg-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all cursor-pointer font-mono">
            <Terminal className="w-4 h-4" /> {data.titleBlock.journal} Study ({data.titleBlock.year})
          </a>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            The Information Theory<br />
            <span className="text-[32px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 font-mono tracking-tight">Of Cellular Aging</span>
          </h1>
          <p className="max-w-2xl text-center text-emerald-100/60 font-light text-sm italic mb-8 font-mono">
            "{data.titleBlock.headline}"
          </p>
          <div className="text-center bg-black/40 border border-emerald-500/20 rounded-2xl p-8 max-w-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <span className="flex items-center justify-center gap-2 text-white font-semibold tracking-widest uppercase text-xs mb-4 border-b border-emerald-500/20 pb-4 font-mono">
              <Cpu className="w-4 h-4 text-emerald-400" /> Executive Summary
            </span>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Aging is a loss of epigenetic software, not a hardware mutation. And using OSK gene therapy, this software can be safely rebooted to restore youth.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-8 w-full justify-center opacity-80 mt-4">
            <div className="flex items-center gap-4 text-xs text-gray-500 font-mono mt-1">
              <span>{data.titleBlock.authors}</span>
              <span>|</span>
              <span><a href={`https://doi.org/${data.titleBlock.doi}`} target="_blank" rel="noreferrer" className="text-emerald-500 hover:underline hover:text-emerald-400 transition-colors">DOI: {data.titleBlock.doi}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is the Epigenome? */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-emerald-900/40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center font-mono">system.info()</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {data.whatIsEpigenetics.map((item, i) => {
            if (i % 2 !== 0) return null;
            return (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3 flex items-center gap-2 font-mono">
                  <Terminal className="w-4 h-4" /> {item}
                </span>
                <p className="text-gray-400 leading-relaxed font-light text-sm bg-black/40 p-6 rounded-xl border border-emerald-500/10 h-full backdrop-blur-sm">
                  {data.whatIsEpigenetics[i + 1]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Hardware vs Software UI */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-emerald-900/40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center font-mono">Hardware vs. Software</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
           {/* Hardware (DNA) */}
           <div className="bg-black/40 border border-gray-800 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Database className="w-24 h-24 text-gray-500" />
              </div>
              <div className="relative z-10">
                 <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-bold text-gray-200 flex items-center gap-2"><Dna className="w-5 h-5"/> DNA (Hardware)</h3>
                    <span className="text-[10px] font-mono tracking-widest text-green-500 bg-green-500/10 px-2 py-1 rounded">INTACT</span>
                 </div>
                 <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                    The fundamental genetic code remains largely undamaged throughout your lifespan. Aging is not primarily driven by mutations in the hard drive.
                 </p>
                 <div className="w-full bg-gray-900 rounded-lg p-4 border border-gray-800 font-mono text-xs text-gray-600">
                    <p>01000111 01000001 01010100</p>
                    <p>01000011 01000011 01010100</p>
                    <p>01000001 01000111 01000011</p>
                 </div>
              </div>
           </div>

           {/* Software (Epigenome) */}
           <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)] group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Terminal className="w-24 h-24 text-emerald-500" />
              </div>
              <div className="relative z-10">
                 <div className="flex items-center justify-between mb-6 border-b border-emerald-900/50 pb-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2"><Cpu className="w-5 h-5 text-emerald-400"/> Epigenome (Software)</h3>
                    <span className="text-[10px] font-mono tracking-widest text-red-400 bg-red-400/10 px-2 py-1 rounded animate-pulse">CORRUPTED</span>
                 </div>
                 <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                    The instructions telling the hardware what to do become scrambled over time due to repair noise, causing cells to lose their identity and age.
                 </p>
                 <div className="w-full bg-black/60 rounded-lg p-4 border border-emerald-500/20 font-mono text-xs text-emerald-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(16,185,129,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                    <p className="text-red-400">ERR: memory leak at 0x00A4</p>
                    <p>executing cell.repair()</p>
                    <p className="text-red-400">ERR: identity protocol lost</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. The OSK Reboot */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-b border-emerald-900/40 relative z-10">
         <h2 className="text-3xl font-bold tracking-tight text-white mb-6 text-center font-mono">sudo reboot OSK</h2>
         <p className="text-center text-gray-400 font-light max-w-2xl mx-auto mb-16">{data.mechanismDescription}</p>
         
         <div className="relative bg-black/50 border border-emerald-500/20 rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <div className="flex flex-col space-y-12 relative z-10">
               {data.pathwaySteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                     <div className={`w-12 h-12 rounded-full border shrink-0 flex items-center justify-center transition-all ${i === 3 ? 'border-emerald-500 bg-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'border-gray-700 bg-gray-900 group-hover:border-emerald-500/50'}`}>
                        {i === 0 && <CheckCircle className="w-5 h-5 text-gray-400" />}
                        {i === 1 && <Zap className="w-5 h-5 text-yellow-500" />}
                        {i === 2 && <Activity className="w-5 h-5 text-red-400" />}
                        {i === 3 && <Power className="w-5 h-5 text-emerald-400 animate-pulse" />}
                     </div>
                     <div>
                        <h4 className={`text-base font-semibold mb-2 font-mono ${i === 3 ? 'text-emerald-400' : 'text-gray-200'}`}>
                           {step.step}
                        </h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
               ))}
               
               {/* Connecting vertical line */}
               <div className="absolute left-[54px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-gray-800 via-gray-700 to-emerald-500/50 -z-10"></div>
            </div>
         </div>
      </section>

      {/* 5. Key Findings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-emerald-900/40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center font-mono">System Diagnostics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFindings.map((finding, i) => (
            <div key={i} className="bg-black/40 border border-emerald-500/10 rounded-2xl p-8 hover:bg-emerald-900/10 hover:border-emerald-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{finding.title}</h3>
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed pl-8">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Protocol Implications */}
      <section className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <div className="mb-24">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 text-center flex items-center justify-center gap-3 font-mono">
            <Terminal className="w-6 h-6 text-emerald-400" /> Protocol.execute()
          </h2>
          <div className="bg-black/60 border border-emerald-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <ul className="space-y-6">
              {data.protocolRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-emerald-500 font-bold mt-0.5 font-mono">{`>`}</span>
                  <p className="text-gray-300 font-light leading-relaxed">{rec}</p>
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
