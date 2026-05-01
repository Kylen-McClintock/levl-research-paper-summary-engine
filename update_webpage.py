import re

with open('src/AgingClocksWebpage.tsx', 'r') as f:
    content = f.read()

# Add imports
new_imports = "import { Brain, HeartPulse, Activity, Target, ShieldCheck, Globe, ArrowRight, Zap, CheckCircle, Clock, Users, Search, RefreshCw, Shield } from 'lucide-react';\nimport { LineChart } from './components/LineChart';"
content = re.sub(r"import \{ .*? \} from 'lucide-react';", new_imports, content)

# 2. Intro & Study Overview, 3. Key Findings, 4. Mechanism
intro_html = """
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

      {/* 2. Interactive Organ Dashboard */}\n"""

content = content.replace("{/* 2. Interactive Organ Dashboard */}", intro_html)

# Add line charts to Danger Zone
charts_html = """
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
      </section>"""
content = re.sub(r"</div>\n\s*</section>", charts_html, content, count=1)

# Add Conclusions to CTA
conclusions_html = """
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

      {/* 4. Protocol CTA */}"""
content = content.replace("{/* 4. Protocol CTA */}", conclusions_html)

with open('src/AgingClocksWebpage.tsx', 'w') as f:
    f.write(content)

