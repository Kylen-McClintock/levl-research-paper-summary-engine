import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Compass, ArrowRight, ExternalLink } from 'lucide-react';
import hubDataRaw from '../data/hubData.json';
import { ACCENT_STYLES, type ConclusionItem, type HubPaper } from '../types/paper';

const hubData = hubDataRaw as HubPaper[];

interface ConclusionsSectionProps {
  paperId: string;
  conclusions: ConclusionItem[];
  protocolImplications?: string;
}

export const ConclusionsSection: React.FC<ConclusionsSectionProps> = ({
  paperId,
  conclusions,
  protocolImplications,
}) => {
  const paper = hubData.find((p) => p.id === paperId);
  const styles = paper ? ACCENT_STYLES[paper.accentColor] || ACCENT_STYLES.blue : ACCENT_STYLES.blue;
  const relatedPapers = paper
    ? paper.relatedIds
        .map((id) => hubData.find((p) => p.id === id))
        .filter((p): p is HubPaper => Boolean(p))
    : [];

  return (
    <section id="conclusions" className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
      {/* Key Takeaways */}
      {conclusions && conclusions.length > 0 && (
        <div className="mb-14">
          <div className="text-center mb-10">
            <span className={`text-xs font-bold uppercase tracking-widest ${styles.badgeText} block mb-2`}>
              Scientific Synthesis
            </span>
            <h2 className="text-3xl font-bold text-white">Key Takeaways & Conclusions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conclusions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 p-7 rounded-2xl relative flex flex-col justify-between hover:border-white/25 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider ${styles.badgeText}`}>
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      Takeaway 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm max-w-[65ch]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Translational / Protocol Context */}
      {protocolImplications && (
        <div className={`mb-14 rounded-2xl p-6 md:p-8 border ${styles.badgeBg} ${styles.badgeBorder}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Compass className={`w-5 h-5 ${styles.badgeText}`} aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                  Translational & Longevity Protocol Context
                </h3>
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-[75ch]">
                {protocolImplications}
              </p>
            </div>
            {paper && (
              <a
                href={paper.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-white transition-colors"
              >
                <span>Read Primary Study</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Related Papers Cross-Navigation */}
      {relatedPapers.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 block mb-1">
                Continue Exploring
              </span>
              <h3 className="text-xl font-bold text-white">Related Research in the LEVL Library</h3>
            </div>
            <Link
              to="/"
              className="text-xs font-semibold text-gray-300 hover:text-white inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>View All {hubData.length} Studies</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedPapers.map((rel) => {
              const relStyles = ACCENT_STYLES[rel.accentColor] || ACCENT_STYLES.blue;
              return (
                <Link
                  key={rel.id}
                  to={rel.path}
                  className={`text-left group bg-[#0A0F1D]/80 border border-white/10 ${relStyles.cardHoverBorder} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${relStyles.badgeBg} ${relStyles.badgeBorder} ${relStyles.badgeText}`}>
                        {rel.tag}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {rel.journal} ({rel.year})
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {rel.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-sm font-black ${relStyles.metricText}`}>
                        {rel.heroMetric.value}
                      </span>
                      <span className="text-[11px] text-gray-400 truncate max-w-[160px]">
                        {rel.heroMetric.label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
