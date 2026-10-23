import React from 'react';
import { HelpCircle, Microscope, Sparkles, Database, Users, Award, TrendingUp } from 'lucide-react';
import hubDataRaw from '../data/hubData.json';
import { ACCENT_STYLES, type HubPaper, type StudyOverviewItem } from '../types/paper';

const hubData = hubDataRaw as HubPaper[];

interface StudyScorecardProps {
  paperId: string;
  studyOverview: StudyOverviewItem[];
}

export const StudyScorecard: React.FC<StudyScorecardProps> = ({ paperId, studyOverview }) => {
  const paper = hubData.find((p) => p.id === paperId);
  const styles = paper ? ACCENT_STYLES[paper.accentColor] || ACCENT_STYLES.blue : ACCENT_STYLES.blue;

  const getCardIcon = (index: number) => {
    if (index === 0) return <HelpCircle className={`w-5 h-5 ${styles.badgeText}`} aria-hidden="true" />;
    if (index === 1) return <Microscope className={`w-5 h-5 ${styles.badgeText}`} aria-hidden="true" />;
    return <Sparkles className={`w-5 h-5 ${styles.badgeText}`} aria-hidden="true" />;
  };

  return (
    <section id="overview" className="py-12 px-6 max-w-7xl mx-auto border-b border-white/10">
      {/* At-a-Glance Evidence Scorecard */}
      {paper && (
        <div className="mb-8 rounded-2xl bg-white/[0.02] border border-white/10 p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-widest ${styles.badgeText}`}>
                Evidence & Methodology Scorecard
              </span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-400 font-mono">
                DOI: {paper.doi}
              </span>
            </div>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles.badgeBg} ${styles.badgeBorder} ${styles.badgeText}`}>
              <Award className="w-3.5 h-3.5" aria-hidden="true" />
              {paper.evidenceTier}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 uppercase tracking-wider mb-1">
                <Database className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
                <span>Model System</span>
              </div>
              <div className="text-sm font-semibold text-white leading-snug">
                {paper.modelSystem}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
                <span>Cohort / Study Design</span>
              </div>
              <div className="text-sm font-semibold text-white leading-snug">
                {paper.sampleSize}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 uppercase tracking-wider mb-1">
                <Award className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
                <span>Primary Domain</span>
              </div>
              <div className="text-sm font-semibold text-white leading-snug">
                {paper.category}
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border ${styles.badgeBg} ${styles.badgeBorder}`}>
              <div className="flex items-center gap-1.5 text-xs text-gray-300 uppercase tracking-wider mb-1">
                <TrendingUp className={`w-3.5 h-3.5 ${styles.badgeText}`} aria-hidden="true" />
                <span>Headline Quantitative Effect</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className={`text-xl font-black tracking-tight ${styles.metricText}`}>
                  {paper.heroMetric.value}
                </span>
                <span className="text-xs text-gray-300 font-medium leading-tight">
                  {paper.heroMetric.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3-Pillar Study Overview */}
      {studyOverview && studyOverview.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studyOverview.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/[0.02] border border-white/10 p-6 md:p-7 rounded-2xl relative overflow-hidden group transition-all duration-300 ${styles.cardHoverBorder}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xs font-bold uppercase tracking-widest ${styles.badgeText}`}>
                  {item.title}
                </h3>
                {getCardIcon(idx)}
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-[15px] max-w-[68ch]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
