# LEVL Longevity Research Library

Interactive, peer-reviewed research paper summaries covering biomarkers, epigenetic reprogramming, senolytics, mitophagy, and metabolic longevity interventions.

## Project Standards & Adding New Papers

See [`AGENTS.md`](./AGENTS.md) for the complete **Scientific Verification Checklist**, **TypeScript & JSON Data Schemas**, and **Shared UI Component Architecture** (`<Header />`, `<StudyScorecard />`, `<ConclusionsSection />`) required for all current and future research summaries.

### Key Architectural Files
- [`src/types/paper.ts`](./src/types/paper.ts): TypeScript interfaces (`HubPaper`, `EvidenceTier`, `ResearchCategory`, `StudyOverviewItem`, `ConclusionItem`) and the static `ACCENT_STYLES` Tailwind lookup map.
- [`src/data/hubData.json`](./src/data/hubData.json): Central registry of all 21 studies with verified DOIs, PMIDs, model systems, sample sizes, evidence tiers, hero metrics, and related study IDs.
- [`src/components/Header.tsx`](./src/components/Header.tsx): Global navigation bar with automatic sticky paper sub-header (scroll progress bar, Evidence Tier badge, and direct PubMed/DOI links).
- [`src/components/StudyScorecard.tsx`](./src/components/StudyScorecard.tsx): Standardized Evidence & Methodology Scorecard and 3-pillar Study Overview (`The Question`, `What They Did`, `What They Found`).
- [`src/components/ConclusionsSection.tsx`](./src/components/ConclusionsSection.tsx): Standardized Key Takeaways, Translational Protocol Context, and Related Research cross-navigation.
- [`src/components/LineChart.tsx`](./src/components/LineChart.tsx): Accessible SVG hazard-ratio line chart with `viewBox="0 0 100 100"`, `vectorEffect="non-scaling-stroke"`, and screen-reader `<table className="sr-only">` fallback.

## Development & Build

```bash
npm install
npm run dev
npm run build
```
