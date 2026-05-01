import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BookOpen } from 'lucide-react';
import hubData from './data/hubData.json';
import { Footer } from './components/Footer';

export const ResearchHub = () => {
  return (
    <div className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 px-6 border-b border-[var(--levl-border)] overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500 opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="mb-6 px-4 py-1.5 rounded-full border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] text-[var(--levl-text-secondary)] text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> LEVL Library
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          Longevity Science,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta">Decoded.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--levl-text-secondary)] font-light max-w-2xl leading-relaxed">
          We aggregate, summarize, and translate cutting-edge peer-reviewed research into actionable protocols for human healthspan extension.
        </p>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubData.map((paper) => (
            <Link 
              to={paper.path} 
              key={paper.id}
              className={`group relative aspect-square bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-${paper.accentColor} hover:border-opacity-50`}
            >
              {/* Subtle hover background glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${paper.accentColor}-500 opacity-0 group-hover:opacity-10 blur-[80px] rounded-full transition-opacity duration-500 pointer-events-none`}></div>

              {/* Top: Badge */}
              <div className="relative z-10 flex items-center gap-2">
                <div className={`px-3 py-1 rounded-full border border-${paper.accentColor} border-opacity-30 bg-${paper.accentColor}-500 bg-opacity-[0.1] text-${paper.accentColor} text-[10px] tracking-widest uppercase font-bold inline-flex items-center gap-1.5`}>
                  <Zap className="w-3 h-3" /> {paper.journal} ({paper.year})
                </div>
              </div>

              {/* Middle: Content */}
              <div className="relative z-10 mt-auto mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {paper.title}
                </h2>
                <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed line-clamp-4">
                  {paper.summary}
                </p>
              </div>

              {/* Bottom: CTA */}
              <div className="relative z-10 flex items-center justify-between border-t border-[var(--levl-border)] border-opacity-50 pt-6">
                <span className="text-xs font-semibold tracking-widest text-[var(--levl-text-muted)] uppercase group-hover:text-white transition-colors duration-300">Read Analysis</span>
                <div className={`w-8 h-8 rounded-full bg-[var(--levl-border)] flex items-center justify-center group-hover:bg-${paper.accentColor} transition-colors duration-300`}>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
