import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  BookOpen,
  Search,
  ShieldCheck,
  FlaskConical,
  Microscope,
  Database,
  X,
} from 'lucide-react';
import hubDataRaw from './data/hubData.json';
import { Footer } from './components/Footer';
import { ACCENT_STYLES, type EvidenceTier, type HubPaper, type ResearchCategory } from './types/paper';

const hubData = hubDataRaw as HubPaper[];

const CATEGORIES: ('All' | ResearchCategory)[] = [
  'All',
  'Biomarkers & Multi-Omics',
  'Cellular Clearance & Senolytics',
  'Nutrient Sensing & Autophagy',
  'Metabolic & Mitochondrial',
  'Systemic & Epigenetic Rejuvenation',
];

const EVIDENCE_TIERS: ('All' | EvidenceTier)[] = [
  'All',
  'Tier 1: Human RCT / Biobank',
  'Tier 2: Mammalian Lifespan',
  'Tier 3: Preclinical / Mechanistic',
];

export const ResearchHub = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ResearchCategory>('All');
  const [selectedTier, setSelectedTier] = useState<'All' | EvidenceTier>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return hubData.filter((paper) => {
      const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
      const matchesTier = selectedTier === 'All' || paper.evidenceTier === selectedTier;
      const matchesSearch =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.subtitle.toLowerCase().includes(q) ||
        paper.summary.toLowerCase().includes(q) ||
        paper.authors.toLowerCase().includes(q) ||
        paper.journal.toLowerCase().includes(q) ||
        paper.tag.toLowerCase().includes(q) ||
        paper.modelSystem.toLowerCase().includes(q);
      return matchesCategory && matchesTier && matchesSearch;
    });
  }, [selectedCategory, selectedTier, searchQuery]);

  const getTierIcon = (tier: string) => {
    if (tier.startsWith('Tier 1')) return <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
    if (tier.startsWith('Tier 2')) return <FlaskConical className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
    return <Microscope className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
  };

  return (
    <div className="min-h-screen bg-[var(--levl-bg)] text-white font-inter selection:bg-cyan-500 selection:text-white pb-24">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 px-6 border-b border-[var(--levl-border)] overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500 opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="mb-6 px-4 py-1.5 rounded-full border border-[var(--levl-border)] bg-[var(--levl-panel-bg)] text-[var(--levl-text-secondary)] text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" aria-hidden="true" /> LEVL Peer-Reviewed Research Library
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          Longevity Science,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta">
            Decoded.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--levl-text-secondary)] font-light max-w-2xl leading-relaxed mb-10">
          We audit, synthesize, and translate landmark peer-reviewed longevity studies into rigorous interactive briefings—distinguishing human clinical evidence from mammalian lifespan and preclinical discoveries.
        </p>

        {/* Summary Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full text-left">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="text-2xl font-black text-cyan-400">{hubData.length}</div>
            <div className="text-xs text-gray-400">Landmark Studies</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="text-2xl font-black text-emerald-400">
              {hubData.filter((p) => p.evidenceTier.startsWith('Tier 1')).length}
            </div>
            <div className="text-xs text-gray-400">Human Cohort / RCTs</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="text-2xl font-black text-amber-400">
              {hubData.filter((p) => p.evidenceTier.startsWith('Tier 2')).length}
            </div>
            <div className="text-xs text-gray-400">Mammalian Lifespan Proofs</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="text-2xl font-black text-fuchsia-400">100%</div>
            <div className="text-xs text-gray-400">DOI & PMID Verified</div>
          </div>
        </div>
      </section>

      {/* Interactive Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col gap-5">
          {/* Top Row: Search Input + Evidence Tier Filter */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by molecule, pathway, author, journal, or model (e.g., 'mTOR', 'NAD+', 'UK Biobank', 'Sinclair')..."
                aria-label="Search research papers"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-black/50 border border-white/15 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-gray-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 mr-1">
                Evidence Tier:
              </span>
              {EVIDENCE_TIERS.map((tier) => {
                const isActive = selectedTier === tier;
                return (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/25'
                    }`}
                  >
                    {tier !== 'All' && getTierIcon(tier)}
                    <span>{tier === 'All' ? 'All Tiers' : tier.replace('Tier ', 'T')}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Biological Mechanism Category Pills */}
          <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-white/10">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 mr-1">
              Domain:
            </span>
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'All'
                  ? hubData.length
                  : hubData.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:border-white/25'
                  }`}
                >
                  {category} <span className="opacity-60 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Count & Reset */}
        <div className="flex items-center justify-between mt-6 px-1 text-xs text-gray-400">
          <span>
            Showing <strong className="text-white">{filteredPapers.length}</strong> of{' '}
            <strong className="text-white">{hubData.length}</strong> peer-reviewed studies
          </span>
          {(selectedCategory !== 'All' || selectedTier !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTier('All');
                setSearchQuery('');
              }}
              className="text-cyan-400 hover:text-cyan-300 font-medium underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        {filteredPapers.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl">
            <p className="text-gray-300 text-lg font-medium mb-2">No studies match your current filters.</p>
            <p className="text-gray-500 text-sm mb-6">Try clearing your search query or selecting a broader evidence tier.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTier('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/30 transition-colors cursor-pointer"
            >
              Show All {hubData.length} Studies
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPapers.map((paper) => {
              const styles = ACCENT_STYLES[paper.accentColor] || ACCENT_STYLES.blue;
              return (
                <Link
                  to={paper.path}
                  key={paper.id}
                  className={`group relative min-h-[400px] bg-[var(--levl-panel-bg)] border border-[var(--levl-border)] rounded-2xl p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${styles.cardHoverBorder}`}
                >
                  {/* Subtle hover background glow using static class map */}
                  <div
                    className={`absolute -top-12 -right-12 w-56 h-56 rounded-full blur-[70px] transition-all duration-500 pointer-events-none ${styles.cardGlow}`}
                  />

                  {/* Top: Journal Badge & Evidence Tier */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-5">
                    <div
                      className={`px-3 py-1 rounded-full border ${styles.badgeBorder} ${styles.badgeBg} ${styles.badgeText} text-[11px] tracking-wider uppercase font-bold inline-flex items-center gap-1.5`}
                    >
                      <Zap className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>
                        {paper.journal} ({paper.year})
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-gray-300">
                      {getTierIcon(paper.evidenceTier)}
                      <span>{paper.evidenceTier.split(':')[0]}</span>
                    </span>
                  </div>

                  {/* Middle: Title, Authors, Model, Summary */}
                  <div className="relative z-10 my-auto">
                    <div className="text-xs font-mono text-gray-400 mb-1.5">
                      {paper.authors} • <span className="text-gray-300">{paper.tag}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2.5 leading-snug group-hover:text-cyan-300 transition-colors duration-300">
                      {paper.title}
                    </h2>
                    <p className="text-sm text-[var(--levl-text-secondary)] font-light leading-relaxed line-clamp-4 mb-5">
                      {paper.summary}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-black/40 border border-white/5 px-2.5 py-1 rounded-md mb-4">
                      <Database className="w-3 h-3 text-gray-400 shrink-0" aria-hidden="true" />
                      <span className="truncate">{paper.modelSystem}</span>
                    </div>
                  </div>

                  {/* Bottom: Hero Metric & CTA */}
                  <div className="relative z-10 border-t border-white/10 pt-4 mt-2 flex items-center justify-between gap-3">
                    <div>
                      <div className={`text-xl font-black tracking-tight ${styles.metricText}`}>
                        {paper.heroMetric.value}
                      </div>
                      <div className="text-[11px] text-gray-400 leading-tight">
                        {paper.heroMetric.label}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                      <span>Explore</span>
                      <div
                        className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300`}
                      >
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
