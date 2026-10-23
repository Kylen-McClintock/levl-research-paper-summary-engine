import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck, FlaskConical, Microscope, BookOpen } from 'lucide-react';
import hubDataRaw from '../data/hubData.json';
import { ACCENT_STYLES, type HubPaper } from '../types/paper';

const hubData = hubDataRaw as HubPaper[];

interface PaperNavigationProps {
  paperId: string;
  onBack: () => void;
}

export const PaperNavigation: React.FC<PaperNavigationProps> = ({ paperId, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const paper = hubData.find((p) => p.id === paperId);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [paperId]);

  if (!paper) return null;

  const styles = ACCENT_STYLES[paper.accentColor] || ACCENT_STYLES.blue;

  const getTierIcon = (tier: string) => {
    if (tier.startsWith('Tier 1')) return <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
    if (tier.startsWith('Tier 2')) return <FlaskConical className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
    return <Microscope className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
  };

  return (
    <div className="sticky top-[57px] z-40 bg-[#070A12]/90 backdrop-blur-md border-b border-white/10">
      {/* Reading Progress Bar */}
      <div className="w-full h-[2px] bg-white/5 overflow-hidden" role="progressbar" aria-valuenow={Math.round(scrollProgress)} aria-valuemin={0} aria-valuemax={100} aria-label="Reading progress">
        <div
          className={`h-full transition-all duration-150 ${styles.barFill}`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-xs font-semibold text-gray-200 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Research Library</span>
          </button>

          <span className="hidden sm:inline-block text-white/20">|</span>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 truncate max-w-[240px] md:max-w-none">
            <BookOpen className="w-3.5 h-3.5 text-gray-400 shrink-0" aria-hidden="true" />
            <span className="font-semibold text-white">{paper.title}</span>
            <span className="text-gray-400">({paper.journal}, {paper.year})</span>
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          {/* Evidence Tier Badge (Icon + Text, never color alone) */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${styles.badgeBg} ${styles.badgeBorder} ${styles.badgeText}`}
          >
            {getTierIcon(paper.evidenceTier)}
            <span>{paper.evidenceTier}</span>
          </span>

          {/* Model Badge */}
          <span className="hidden lg:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300">
            {paper.sampleSize}
          </span>

          {/* Direct Source Links */}
          {paper.pmid && (
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-gray-300 hover:text-white transition-colors"
              title={`View PubMed record PMID:${paper.pmid}`}
            >
              <span>PMID: {paper.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          )}
          <a
            href={paper.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-gray-300 hover:text-white transition-colors"
            title={`Open DOI: ${paper.doi}`}
          >
            <span>DOI</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
