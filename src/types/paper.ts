export type EvidenceTier =
  | 'Tier 1: Human RCT / Biobank'
  | 'Tier 2: Mammalian Lifespan'
  | 'Tier 3: Preclinical / Mechanistic';

export type ResearchCategory =
  | 'Biomarkers & Multi-Omics'
  | 'Cellular Clearance & Senolytics'
  | 'Nutrient Sensing & Autophagy'
  | 'Metabolic & Mitochondrial'
  | 'Systemic & Epigenetic Rejuvenation';

export type AccentColorKey =
  | 'blue'
  | 'fuchsia'
  | 'emerald'
  | 'rose'
  | 'amber'
  | 'red'
  | 'indigo'
  | 'orange'
  | 'cyan'
  | 'yellow'
  | 'slate'
  | 'teal';

export interface HeroMetric {
  value: string;
  label: string;
}

export interface HubPaper {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  summary: string;
  journal: string;
  year: string;
  authors: string;
  doi: string;
  pmid?: string;
  url: string;
  tag: string;
  category: ResearchCategory;
  evidenceTier: EvidenceTier;
  modelSystem: string;
  sampleSize: string;
  heroMetric: HeroMetric;
  accentColor: AccentColorKey;
  relatedIds: string[];
}

export interface StudyOverviewItem {
  title: string;
  content: string;
}

export interface ConclusionItem {
  title: string;
  content: string;
}

export interface PaperBaseData {
  metadata: {
    title?: string;
    authors: string;
    journal: string;
    date?: string;
    year?: string;
    doi: string;
    pmid?: string;
    url: string;
    source_link?: string;
  };
  studyOverview: StudyOverviewItem[];
  conclusions: ConclusionItem[];
  protocolImplications?: string;
}

export const ACCENT_STYLES: Record<
  AccentColorKey,
  {
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    cardHoverBorder: string;
    cardGlow: string;
    metricText: string;
    pillActive: string;
    barFill: string;
  }
> = {
  blue: {
    badgeBg: 'bg-blue-500/10',
    badgeBorder: 'border-blue-500/30',
    badgeText: 'text-blue-400',
    cardHoverBorder: 'hover:border-blue-500/50',
    cardGlow: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    metricText: 'text-blue-400',
    pillActive: 'bg-blue-500/20 border-blue-500 text-blue-300',
    barFill: 'bg-blue-500',
  },
  fuchsia: {
    badgeBg: 'bg-fuchsia-500/10',
    badgeBorder: 'border-fuchsia-500/30',
    badgeText: 'text-fuchsia-400',
    cardHoverBorder: 'hover:border-fuchsia-500/50',
    cardGlow: 'bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20',
    metricText: 'text-fuchsia-400',
    pillActive: 'bg-fuchsia-500/20 border-fuchsia-500 text-fuchsia-300',
    barFill: 'bg-fuchsia-500',
  },
  emerald: {
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-400',
    cardHoverBorder: 'hover:border-emerald-500/50',
    cardGlow: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    metricText: 'text-emerald-400',
    pillActive: 'bg-emerald-500/20 border-emerald-500 text-emerald-300',
    barFill: 'bg-emerald-500',
  },
  rose: {
    badgeBg: 'bg-rose-500/10',
    badgeBorder: 'border-rose-500/30',
    badgeText: 'text-rose-400',
    cardHoverBorder: 'hover:border-rose-500/50',
    cardGlow: 'bg-rose-500/10 group-hover:bg-rose-500/20',
    metricText: 'text-rose-400',
    pillActive: 'bg-rose-500/20 border-rose-500 text-rose-300',
    barFill: 'bg-rose-500',
  },
  amber: {
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-400',
    cardHoverBorder: 'hover:border-amber-500/50',
    cardGlow: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    metricText: 'text-amber-400',
    pillActive: 'bg-amber-500/20 border-amber-500 text-amber-300',
    barFill: 'bg-amber-500',
  },
  red: {
    badgeBg: 'bg-red-500/10',
    badgeBorder: 'border-red-500/30',
    badgeText: 'text-red-400',
    cardHoverBorder: 'hover:border-red-500/50',
    cardGlow: 'bg-red-500/10 group-hover:bg-red-500/20',
    metricText: 'text-red-400',
    pillActive: 'bg-red-500/20 border-red-500 text-red-300',
    barFill: 'bg-red-500',
  },
  indigo: {
    badgeBg: 'bg-indigo-500/10',
    badgeBorder: 'border-indigo-500/30',
    badgeText: 'text-indigo-400',
    cardHoverBorder: 'hover:border-indigo-500/50',
    cardGlow: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    metricText: 'text-indigo-400',
    pillActive: 'bg-indigo-500/20 border-indigo-500 text-indigo-300',
    barFill: 'bg-indigo-500',
  },
  orange: {
    badgeBg: 'bg-orange-500/10',
    badgeBorder: 'border-orange-500/30',
    badgeText: 'text-orange-400',
    cardHoverBorder: 'hover:border-orange-500/50',
    cardGlow: 'bg-orange-500/10 group-hover:bg-orange-500/20',
    metricText: 'text-orange-400',
    pillActive: 'bg-orange-500/20 border-orange-500 text-orange-300',
    barFill: 'bg-orange-500',
  },
  cyan: {
    badgeBg: 'bg-cyan-500/10',
    badgeBorder: 'border-cyan-500/30',
    badgeText: 'text-cyan-400',
    cardHoverBorder: 'hover:border-cyan-500/50',
    cardGlow: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    metricText: 'text-cyan-400',
    pillActive: 'bg-cyan-500/20 border-cyan-500 text-cyan-300',
    barFill: 'bg-cyan-500',
  },
  yellow: {
    badgeBg: 'bg-yellow-500/10',
    badgeBorder: 'border-yellow-500/30',
    badgeText: 'text-yellow-400',
    cardHoverBorder: 'hover:border-yellow-500/50',
    cardGlow: 'bg-yellow-500/10 group-hover:bg-yellow-500/20',
    metricText: 'text-yellow-400',
    pillActive: 'bg-yellow-500/20 border-yellow-500 text-yellow-300',
    barFill: 'bg-yellow-500',
  },
  slate: {
    badgeBg: 'bg-slate-500/10',
    badgeBorder: 'border-slate-500/30',
    badgeText: 'text-slate-300',
    cardHoverBorder: 'hover:border-slate-400/50',
    cardGlow: 'bg-slate-500/10 group-hover:bg-slate-500/20',
    metricText: 'text-slate-300',
    pillActive: 'bg-slate-500/20 border-slate-400 text-slate-200',
    barFill: 'bg-slate-400',
  },
  teal: {
    badgeBg: 'bg-teal-500/10',
    badgeBorder: 'border-teal-500/30',
    badgeText: 'text-teal-400',
    cardHoverBorder: 'hover:border-teal-500/50',
    cardGlow: 'bg-teal-500/10 group-hover:bg-teal-500/20',
    metricText: 'text-teal-400',
    pillActive: 'bg-teal-500/20 border-teal-500 text-teal-300',
    barFill: 'bg-teal-500',
  },
};
