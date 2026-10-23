# LEVL Research Paper Summaries — Agent & Authoring Standards

Whenever adding a new research paper summary or updating an existing one in this workspace, **you must strictly follow the scientific, structural, and UI/UX standards defined below**.

---

## 1. Scientific & Quantitative Verification Checklist

Before creating or editing any `src/data/*Data.json` file or paper component:

1. **Bibliographic Verification (PubMed / DOI Cross-Check):**
   - Verify the exact **DOI**, **PMID**, **PMCID** (if applicable), **publication year**, **journal name**, and **author list**.
   - Never rely on unverified memory for PMIDs or publication years.
   - When a discovery was published alongside companion papers (e.g., the August 2023 *Nature* / *Nature Aging* / *Nature Communications* PF4 trilogy) or builds on an earlier study by the same lab (e.g., Amor et al. 2020 *Nature* vs. 2024 *Nature Aging*; Lu et al. 2020 *Nature* vs. Yang et al. 2023 *Cell*), explicitly distinguish which experiments come from which paper.

2. **Quantitative Precision & Endpoint Disambiguation:**
   - **Overall Lifespan vs. Remaining Life Expectancy:** Always state whether a percentage lifespan gain refers to **overall median/maximum lifespan from birth** or **remaining survival from late-life treatment initiation** (e.g., Harrison et al. 2009 Rapamycin: `+38% F / +28% M` remaining life expectancy from 600 days vs. `+14% F / +9% M` overall maximum lifespan).
   - **Tissue & Assay Specificity:** Never average or conflate distinct biological clocks, tissues, or assays into a single unlabelled bar chart (e.g., keep Colon `EML_AA`, Blood `PhenoAA`, and Colon `Horvath DNAmAA` distinct).
   - **Proportional Visual Encoding:** All bar heights, progress widths, and SVG chart coordinates must be mathematically proportional to the underlying data values.
   - **Biphasic & Replication Context:** Always report therapeutic dose windows, high-dose toxicity thresholds (e.g., Metformin `0.1% w/w` `+5.83%` vs. `1.0% w/w` `-14.4%`), and multi-site replication context (such as NIA Interventions Testing Program results or human RCT outcomes).

3. **Evidence Tier & Model System Transparency:**
   - Classify every study accurately into one of the three `EvidenceTier` levels defined in [`src/types/paper.ts`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/types/paper.ts):
     - `'Tier 1: Human RCT / Biobank'`
     - `'Tier 2: Mammalian Lifespan'`
     - `'Tier 3: Preclinical / Mechanistic'`
   - State the exact **Model System** (species, strain, age at onset) and **Sample Size / Cohort** in `src/data/hubData.json`.

---

## 2. Mandatory Data Schema & Shared Components

Every paper in the LEVL library must be registered in [`src/data/hubData.json`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/data/hubData.json) and use the shared layout components.

### Step 1: Register the Paper in `src/data/hubData.json`
Every entry in `hubData.json` must conform to the `HubPaper` interface in [`src/types/paper.ts`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/types/paper.ts):

```json
{
  "id": "unique-paper-id",
  "path": "/route-slug",
  "title": "Concise Main Title",
  "subtitle": "Specific Mechanistic & Quantitative Subtitle",
  "summary": "2-sentence quantitative abstract stating model system, intervention, mechanism, and primary effect size.",
  "journal": "Journal Name",
  "year": "YYYY",
  "authors": "First Author et al. (Senior Lab)",
  "doi": "10.xxxx/xxxxx",
  "pmid": "12345678",
  "url": "https://doi.org/10.xxxx/xxxxx",
  "tag": "Domain Tag",
  "category": "Biomarkers & Epigenetics | Metabolic & Mitochondrial | Senescence & Immune | Nutrient Sensing & Autophagy | Systemic Rejuvenation | Cellular Clearance & Senolytics",
  "evidenceTier": "Tier 1: Human RCT / Biobank | Tier 2: Mammalian Lifespan | Tier 3: Preclinical / Mechanistic",
  "modelSystem": "Exact organism, strain, or human cohort",
  "sampleSize": "n = X or study design summary",
  "heroMetric": {
    "value": "+24.9%",
    "label": "Specific Endpoint Label"
  },
  "accentColor": "cyan | green | purple | pink | emerald | indigo | orange | yellow | slate | teal | blue",
  "relatedIds": ["related-id-1", "related-id-2", "related-id-3"]
}
```

### Step 2: Structure `src/data/<paper>Data.json`
Every paper JSON data file must include:
- `titleBlock`: `{ headline, authors, journal, year, doi, pmid }`
- `studyOverview`: `StudyOverviewItem[]` (3 items: `"The Question"`, `"What They Did"`, `"What They Found"`)
- Domain-specific interactive sections (e.g., dose comparators, pathway cascades, organ/clock explorers)
- `keyFindings`: `{ title, desc }[]`
- `conclusions`: `ConclusionItem[]` (3 structured takeaways with `{ title, content }`)
- `protocolImplications`: `string` (evidence-grounded translational and clinical context)

### Step 3: Compose the Page Component (`src/<Paper>Webpage.tsx`)
Every paper webpage must render:
1. `<Header />` from [`src/components/Header.tsx`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/components/Header.tsx) (automatically provides the sticky reading progress bar, `"← All Studies"` back-navigation, Evidence Tier badge, and clickable `PMID` + `DOI` links).
2. **Hero Section** with clickable Journal/DOI pill, PMID pill, balanced `<h1>` heading, executive summary card, and author/DOI attribution.
3. `<StudyScorecard paperId="<id>" studyOverview={data.studyOverview} />` from [`src/components/StudyScorecard.tsx`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/components/StudyScorecard.tsx) immediately below the Hero Cover.
4. **Interactive Visual & Mechanistic Sections** (comparators, pathway diagrams, data tables).
5. **Key Findings Grid** (`data.keyFindings`).
6. `<ConclusionsSection paperId="<id>" conclusions={data.conclusions} protocolImplications={data.protocolImplications} />` from [`src/components/ConclusionsSection.tsx`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/components/ConclusionsSection.tsx) (renders Key Takeaways, Translational Protocol Context, and 3 Related Research cards).
7. `<Footer />` from [`src/components/Footer.tsx`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/components/Footer.tsx).

---

## 3. CSS, Tailwind & Accessibility Guardrails

1. **No Dynamic Tailwind Class Interpolation:**
   - Never write `border-${color}-500` or `text-${color}-400`. Tailwind's static extractor cannot detect interpolated class names. Always lookup styles via `ACCENT_STYLES[paper.accentColor]` in [`src/types/paper.ts`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/types/paper.ts).
2. **Preserve Full Tailwind Color Scales:**
   - In [`tailwind.config.js`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/tailwind.config.js), always spread `...colors.<shade>` when adding a `DEFAULT` brand hex value so shade utilities (`cyan-400`, `green-500`, `blue-400`) continue to compile.
3. **Accessible SVG Charts:**
   - Use unitless `viewBox` coordinates with `vectorEffect="non-scaling-stroke"` in `<polyline>` / `<path>` elements (never pass `%` strings into SVG `<polyline points>`).
   - Provide a screen-reader `<table className="sr-only">` fallback for data charts (see [`src/components/LineChart.tsx`](file:///Users/kylenmcclintock/Documents/AntiGravity%20Projects/LEVL%20Research%20Paper%20Summaries/src/components/LineChart.tsx)).
4. **Build Verification:**
   - Always run `npm run build` (`tsc -b && vite build`) after adding or modifying any paper to verify zero TypeScript or bundling errors.
