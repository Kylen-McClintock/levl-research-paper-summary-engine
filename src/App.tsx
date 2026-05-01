import React from 'react';
import { StudyOverview } from './components/StudyOverview';
import { Panel } from './components/Panel';
import data from './data/metabolitesData.json';
import { Target, Users, Search, CheckCircle, ShieldCheck, Activity, Globe, ArrowRight, Zap, RefreshCw, Shield, HeartPulse, Dna } from 'lucide-react';

function App() {
  const mapIcons = (items: { label: string, value: string }[]) => {
    return items.map(item => {
      let icon = <CheckCircle className="w-5 h-5 text-[var(--levl-cyan)]" />;
      if (item.label === 'Objective') icon = <Target className="w-5 h-5 text-[var(--levl-cyan)]" />;
      if (item.label === 'Design') icon = <Search className="w-5 h-5 text-[var(--levl-cyan)]" />;
      if (item.label === 'Participants') icon = <Users className="w-5 h-5 text-[var(--levl-cyan)]" />;
      if (item.label === 'Assessments') icon = <Activity className="w-5 h-5 text-[var(--levl-cyan)]" />;
      return { ...item, icon };
    });
  };

  return (
    <div id="infographic" className="bg-[var(--levl-bg)] text-white w-[1200px] p-10 font-inter flex flex-col gap-6 mx-auto relative overflow-hidden">
      
      {/* 1. Header Row */}
      <div className="grid grid-cols-12 gap-8 items-stretch border-b border-[var(--levl-border)] pb-6 mb-2">
        <div className="col-span-8 flex flex-col justify-end">
          <div className="title-block flex flex-col gap-1">
            <h1 className="text-[28px] font-bold leading-tight text-white mb-2 max-w-4xl tracking-wide">
              {data.titleBlock.headline}
            </h1>
            <p className="text-xs text-[var(--levl-text-secondary)] font-light">
              {data.titleBlock.authors} <span className="italic ml-1">{data.titleBlock.journal}</span> ({data.titleBlock.year})
            </p>
            <div className="text-[10px] text-[var(--levl-text-muted)] mt-1">
              <span className="mr-6 tracking-wide">doi: {data.titleBlock.doi}</span>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <Panel title="Research Summary" borderColor="none" className="bg-transparent border border-[var(--levl-border)] p-4 h-full flex flex-col justify-center">
            <div className="text-xs font-light tracking-wide text-white mb-3 leading-relaxed whitespace-pre-line">
              {data.researchSummary}
            </div>
            <div className="text-[10px] tracking-wide text-[var(--levl-text-secondary)]">
               Source: {data.titleBlock.pmcid} ({data.titleBlock.source})
            </div>
          </Panel>
        </div>
      </div>

      {/* 2. Main 3-Column Split */}
      <div className="grid grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column (Span 4) */}
        <div className="col-span-4 flex flex-col gap-5 h-full">
          <Panel title="What are Endogenous Metabolites?" borderColor="magenta">
            <div className="flex gap-4 items-start mb-4 mt-2">
              <div className="w-16 h-16 bg-gradient-to-br from-magenta via-purple-900 to-transparent rounded-full flex-shrink-0 flex items-center justify-center border border-magenta shadow-[0_0_15px_rgba(232,121,249,0.4)]">
                 <Zap className="w-8 h-8 text-white opacity-90" />
              </div>
              <div className="text-xs font-light leading-relaxed">
                {data.whatIsClock[1]}
              </div>
            </div>
            <div className="text-xs font-light mt-4 pt-4 border-t border-[var(--levl-border)] border-opacity-30 space-y-3 opacity-90">
                <p className="font-semibold text-magenta">{data.whatIsClock[2]}</p>
                <p>{data.whatIsClock[3]}</p>
                <p className="font-semibold text-magenta mt-2">{data.whatIsClock[4]}</p>
                <p className="italic opacity-80">{data.whatIsClock[5]}</p>
            </div>
          </Panel>
          
          {/* Key Findings Summary Box */}
           <Panel title="Key Findings" borderColor="magenta">
             <div className="flex flex-col gap-3 mt-1">
                {data.keyFindings.map((finding, idx) => {
                  let icon = <ShieldCheck />;
                  if (finding.title === 'Predictive Power') icon = <Target />;
                  if (finding.title === 'Multi-Pathway Modulators') icon = <Activity />;
                  if (finding.title === 'Epigenetic Regulation') icon = <Dna />;
                  if (finding.title === 'High Biocompatibility') icon = <ShieldCheck />;
                  if (finding.title === 'Conserved Mechanisms') icon = <Globe />;
                  
                  return (
                    <div key={idx} className="flex gap-3 items-start border-b border-[var(--levl-border)] border-opacity-20 pb-3 last:border-0 last:pb-0">
                       <span className="w-6 h-6 rounded-full bg-magenta bg-opacity-10 text-magenta flex items-center justify-center flex-shrink-0 shadow-[0_0_8px_rgba(232,121,249,0.2)]">
                          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-3 h-3' })}
                       </span>
                       <div className="text-xs">
                          <span className="text-magenta font-semibold mr-1">{finding.title}</span>
                          <span className="font-light text-[var(--levl-text-secondary)] opacity-90">{finding.desc}</span>
                       </div>
                    </div>
                  );
                })}
             </div>
             <div className="mt-4 p-3 border border-magenta bg-magenta bg-opacity-[0.03] rounded text-magenta text-[11px] font-medium flex gap-3 items-center shadow-[0_0_10px_rgba(232,121,249,0.1)]">
                 <CheckCircle className="w-4 h-4 flex-shrink-0" />
                 {data.findingsCallout}
             </div>
          </Panel>

          {/* Validation moved here to balance columns */}
          <Panel title="Review Scope & Evidence Base" borderColor="green" className="flex-1">
             <div className="text-[11px] font-light text-[var(--levl-text-secondary)] mb-6 mt-1 tracking-wide">The review synthesized evidence across multiple established aging models to confirm evolutionary conservation.</div>
             
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-green-500 bg-opacity-[0.05] border border-green border-opacity-30 p-4 rounded-lg shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                   <Globe className="w-8 h-8 text-green opacity-90 flex-shrink-0" />
                   <div className="flex flex-col">
                      <span className="text-green font-bold text-lg">In Vivo Models</span>
                      <span className="text-[11px] text-[var(--levl-text-secondary)]">C. elegans, Drosophila, & Murine</span>
                   </div>
                </div>

                <div className="flex items-center gap-4 bg-green-500 bg-opacity-[0.05] border border-green border-opacity-30 p-4 rounded-lg shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                   <Users className="w-8 h-8 text-green opacity-90 flex-shrink-0" />
                   <div className="flex flex-col">
                      <span className="text-green font-bold text-lg">Human Translation</span>
                      <span className="text-[11px] text-[var(--levl-text-secondary)]">Evaluating biocompatibility & dosing</span>
                   </div>
                </div>

                <div className="flex items-center gap-4 bg-green-500 bg-opacity-[0.05] border border-green border-opacity-30 p-4 rounded-lg shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                   <Activity className="w-8 h-8 text-green opacity-90 flex-shrink-0" />
                   <div className="flex flex-col">
                      <span className="text-green font-bold text-lg">Mechanistic Pathways</span>
                      <span className="text-[11px] text-[var(--levl-text-secondary)]">IIS, mTOR, Sirtuins, & Autophagy</span>
                   </div>
                </div>
             </div>
          </Panel>
        </div>

        {/* Middle Column (Span 4) */}
         <div className="col-span-4 flex flex-col gap-6 h-full">
            <StudyOverview 
              title="Study Overview" 
              items={mapIcons(data.studyOverview)} 
              icon={<Search />} 
              borderColor="cyan"
            />
            
            {/* Key Takeaway */}
            <div className="border border-green border-opacity-80 rounded-lg p-6 bg-green-500 bg-opacity-[0.02] shadow-[0_0_15px_rgba(34,197,94,0.05)] relative flex flex-col flex-1">
              <h2 className="uppercase text-xs tracking-wider m-0 text-green font-bold flex items-center gap-2 border-b border-green border-opacity-30 pb-3">
                 <ShieldCheck className="w-4 h-4" /> KEY TAKEAWAY
              </h2>
              <div className="flex flex-col items-center justify-center h-full px-6 text-center mt-2 py-4">
                  <HeartPulse className="w-16 h-16 text-green mb-8 opacity-100 stroke-1 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
                  <p className="text-[22px] font-medium leading-relaxed tracking-wide text-white">{data.keyTakeaway}</p>
              </div>
            </div>
            
            <Panel title="The Mechanism" borderColor="cyan">
               <div className="flex flex-col gap-4 mt-2">
                 <div className="flex items-center justify-between text-xs">
                    <div className="bg-cyan-500 bg-opacity-10 border border-cyan p-3 rounded text-center w-24">
                       <Activity className="w-6 h-6 text-cyan mx-auto mb-1" />
                       <span className="text-cyan font-semibold">Nutrients</span>
                    </div>
                    <ArrowRight className="text-[var(--levl-text-muted)] w-4 h-4" />
                    <div className="bg-cyan-500 bg-opacity-10 border border-cyan p-3 rounded text-center w-24">
                       <RefreshCw className="w-6 h-6 text-cyan mx-auto mb-1" />
                       <span className="text-cyan font-semibold">Metabolites</span>
                    </div>
                    <ArrowRight className="text-[var(--levl-text-muted)] w-4 h-4" />
                    <div className="bg-cyan-500 bg-opacity-10 border border-cyan p-3 rounded text-center w-24">
                       <Shield className="w-6 h-6 text-cyan mx-auto mb-1" />
                       <span className="text-cyan font-semibold">Lifespan</span>
                    </div>
                 </div>
                 <div className="text-[11px] font-light text-[var(--levl-text-secondary)] leading-relaxed mt-2 opacity-90">
                    Endogenous metabolites act as physical messengers, translating environmental nutrient cues into deep epigenetic and transcriptional changes that directly govern cellular aging and longevity.
                 </div>
               </div>
            </Panel>
            
            <Panel title="Translational Challenges" borderColor="cyan" className="flex-1">
               <div className="flex gap-4 items-start mb-2 mt-2">
                  <div className="text-[11px] font-light leading-relaxed text-[var(--levl-text-secondary)]">
                    <ul className="space-y-3 list-outside list-disc marker:text-cyan pl-4 opacity-90">
                      {data.translationalChallenges.map((challenge, idx) => (
                        <li key={idx} className="pl-1">{challenge}</li>
                      ))}
                    </ul>
                  </div>
               </div>
            </Panel>
         </div>

         {/* Right Column (Span 4) */}
         <div className="col-span-4 flex flex-col gap-6 h-full">
            <Panel title="Top Geroprotective Metabolites" borderColor="magenta" className="flex-1 flex flex-col">
               <div className="flex flex-col h-full">
                 <div className="text-[11px] font-light text-[var(--levl-text-secondary)] mb-6 mt-1 tracking-wide">Key endogenous molecules identified by the review as potent, multi-target modulators of longevity.</div>
                 
                 <div className="flex flex-col gap-5 flex-1">
                   {data.topMetabolites.map((met, idx) => (
                     <div key={idx} className="flex flex-col gap-2 p-4 border border-magenta border-opacity-30 bg-magenta bg-opacity-[0.03] rounded-lg relative overflow-hidden shadow-[0_0_10px_rgba(232,121,249,0.05)]">
                       <div className="absolute top-0 left-0 w-1 h-full bg-magenta opacity-80"></div>
                       <h3 className="text-sm font-bold text-white tracking-wide">{met.name}</h3>
                       <div className="text-[10px] uppercase tracking-wider text-magenta font-semibold mt-1">
                         Mechanism: <span className="text-[var(--levl-text-muted)] font-normal ml-1">{met.mechanism}</span>
                       </div>
                       <div className="text-[11px] font-light text-[var(--levl-text-secondary)] leading-relaxed mt-1">
                         {met.effect}
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </Panel>
         </div>
      </div>

      {/* Bottom Modals (2 Columns) */}
      <div className="grid grid-cols-12 gap-6 mt-2 items-stretch h-full mb-2">
        <div className="col-span-8 h-full border border-green border-opacity-60 rounded-[10px] p-6 bg-green-500 bg-opacity-[0.02]">
           <div className="flex gap-4 items-start mb-6 border-b border-green border-opacity-20 pb-4">
              <div className="flex-shrink-0 mt-1 relative w-10 h-10">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-green drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10c0 4.418 3.582 8 8 8s8-3.582 8-8" />
                 </svg>
              </div>
              <div className="flex flex-col">
                 <h3 className="text-green uppercase tracking-widest font-semibold mb-2">LEVL Interpretation / Future Protocol Implication</h3>
                 <p className="text-xs text-[var(--levl-text-secondary)] leading-relaxed opacity-90 pr-4">If validated clinically, organ-specific proteomic aging tests could help prioritize more targeted prevention strategies.</p>
              </div>
           </div>
           <ul className="text-[11px] font-light text-[var(--levl-text-primary)] pl-6 space-y-4 list-outside list-disc marker:text-green opacity-90">
             {data.protocolRecommendations.map((req:string, i:number) => <li key={i} className="leading-relaxed pl-1">{req}</li>)}
           </ul>
        </div>

        <div className="col-span-4 h-full border border-cyan border-opacity-60 rounded-[10px] p-6 bg-cyan-500 bg-opacity-[0.02]">
           <div className="flex gap-4 items-center mb-6 border-b border-cyan border-opacity-20 pb-4">
              <CheckCircle className="w-7 h-7 text-cyan drop-shadow-[0_0_8px_rgba(14,165,233,0.6)] flex-shrink-0" />
              <h3 className="text-cyan uppercase tracking-widest font-semibold">Conclusions</h3>
           </div>
           <ul className="text-[11px] font-light text-[var(--levl-text-primary)] pl-6 space-y-5 list-outside list-disc marker:text-cyan opacity-90">
             {data.conclusions.map((req:string, i:number) => <li key={i} className="leading-relaxed pl-1">{req}</li>)}
           </ul>
        </div>
      </div>

      {/* LEVL Footer branding logo section */}
      <div className="mt-2 pt-6 border-t border-[var(--levl-border)] border-opacity-40 flex items-center justify-between text-xs">
         <div className="flex gap-6 items-center">
            <div className="w-[140px] ml-2">
               <img src="/src/assets/levl-logo.png" alt="LEVL Logo" className="w-full h-auto opacity-90 object-contain" />
            </div>
            <div className="font-light tracking-wide text-[var(--levl-text-secondary)]">
                At LEVL, we translate cutting-edge longevity science into actionable strategies for real human health.<br/>
                <span className="text-green font-medium">Our mission is to extend healthspan and unlock human potential.</span>
            </div>
         </div>
         <div className="font-light tracking-wide text-[var(--levl-text-secondary)] flex flex-col items-end gap-2">
            <div>
              Learn more at <span className="text-green font-medium">levlhealth.com</span>
            </div>
         </div>
      </div>
      <div className="text-[9px] mt-1 text-[var(--levl-text-muted)] italic text-center w-full pb-1 opacity-60">
         This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
      </div>
    </div>
  );
}

export default App;

