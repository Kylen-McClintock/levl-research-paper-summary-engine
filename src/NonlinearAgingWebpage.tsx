import React, { useState } from 'react';
import {
  Activity,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Waves,
  Database,
  Info,
  GitCommit,
} from 'lucide-react';
import nonlinearData from './data/nonlinearAgingData.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StudyScorecard } from './components/StudyScorecard';
import { ConclusionsSection } from './components/ConclusionsSection';

export const NonlinearAgingWebpage: React.FC = () => {
  const [selectedWaveId, setSelectedWaveId] = useState<string>('wave_44');
  const activeWave =
    nonlinearData.waves.find((w) => w.id === selectedWaveId) || nonlinearData.waves[0];

  return (
    <div className="min-h-screen bg-[#060A12] text-gray-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 px-6 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/35 via-[#060A12] to-[#060A12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href={`https://doi.org/${nonlinearData.titleBlock.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider hover:bg-indigo-500/20 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {nonlinearData.titleBlock.journal} ({nonlinearData.titleBlock.year}) • DOI:{' '}
                {nonlinearData.titleBlock.doi}
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${nonlinearData.titleBlock.pmid}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-xs font-mono hover:bg-white/10 transition-colors"
            >
              <span>PMID: {nonlinearData.titleBlock.pmid}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Database className="w-3.5 h-3.5" aria-hidden="true" />
              <span>246.5 Billion Data Points • 10 Omics Layers</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] max-w-5xl mx-auto">
            Nonlinear Multi-Omic Waves:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-fuchsia-400">
              Human Aging Crests at Ages 44 & 60
            </span>
          </h1>

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6 shadow-2xl">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {nonlinearData.titleBlock.summary}
            </p>
          </div>

          <p className="text-xs font-mono text-gray-400 max-w-3xl mx-auto">
            Authors: {nonlinearData.titleBlock.authors}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Standardized Study Scorecard */}
        <StudyScorecard paperId="nonlinear-aging" studyOverview={nonlinearData.studyOverview} />

        {/* Scale of the Atlas + 81.03% Nonlinear vs 6.6% Linear Visual Bar */}
        <section aria-labelledby="atlas-scale-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
              Longitudinal Multi-Omic Architecture (n = 108 Humans, Ages 25–75)
            </span>
            <h2 id="atlas-scale-heading" className="text-3xl font-bold text-white">
              81.03% of Age-Associated Molecules Shift Nonlinearly
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nonlinearData.scaleMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-indigo-400 mb-2">{m.value}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{m.label}</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>

          {/* Proportional Breakdown Bar of Age-Associated Features (11,305 features) */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                Distribution of 11,305 Age-Associated Multi-Omic Features
              </span>
              <span className="text-xs font-mono text-indigo-300">
                9,106 Nonlinear (81.03%) vs. 749 Linear (6.60%)
              </span>
            </div>
            <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-indigo-500"
                style={{ width: '81.03%' }}
                title="Nonlinear age-associated molecules: 81.03%"
              />
              <div
                className="h-full bg-cyan-400"
                style={{ width: '6.60%' }}
                title="Linear age-associated molecules: 6.60%"
              />
              <div
                className="h-full bg-gray-700"
                style={{ width: '12.37%' }}
                title="Other mixed trajectories: 12.37%"
              />
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-3 text-xs text-gray-400">
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-indigo-500 inline-block" />
                <span>Nonlinear Trajectories: 81.03% (9,106 features)</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-cyan-400 inline-block" />
                <span>Strictly Linear Trajectories: 6.60% (749 features)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Wave 1 (Age 44) vs. Wave 2 (Age 60) Crest Explorer */}
        <section aria-labelledby="wave-explorer-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
                DE-SWAN Sliding-Window Dysregulation Peaks
              </span>
              <h2 id="wave-explorer-heading" className="text-3xl font-bold text-white">
                Interactive Molecular Crest Explorer: Age ~44 vs. Age ~60
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Select either molecular crest below to explore the specific multi-omic pathways,
              biomolecules, and clinical risks that inflect at that decade.
            </p>
          </div>

          {/* SVG Biphasic DE-SWAN Curve Visualization */}
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 800 220"
                className="w-full h-48 md:h-56 overflow-visible"
                role="img"
                aria-label="DE-SWAN multi-omic dysregulation curve showing two major crests at Age 44 and Age 60"
              >
                {/* Horizontal grid lines */}
                <line x1="60" y1="30" x2="760" y2="30" stroke="rgba(255,255,255,0.07)" />
                <line x1="60" y1="100" x2="760" y2="100" stroke="rgba(255,255,255,0.07)" />
                <line x1="60" y1="170" x2="760" y2="170" stroke="rgba(255,255,255,0.15)" />

                {/* Y-axis labels */}
                <text x="50" y="34" textAnchor="end" className="fill-gray-500 text-[10px] font-mono">
                  High
                </text>
                <text x="50" y="104" textAnchor="end" className="fill-gray-500 text-[10px] font-mono">
                  Med
                </text>
                <text x="50" y="174" textAnchor="end" className="fill-gray-500 text-[10px] font-mono">
                  Base
                </text>

                {/* Biphasic Wave Path (Age 35 -> 44 Crest -> 53 Trough -> 60 Crest -> 70) */}
                <path
                  d="M 80 155 C 140 150, 210 42, 275 42 C 340 42, 395 138, 460 132 C 525 126, 565 28, 625 28 C 685 28, 725 95, 750 110"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="3.5"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Crest 1 Marker (Age 44) */}
                <circle
                  cx="275"
                  cy="42"
                  r={selectedWaveId === 'wave_44' ? '9' : '6'}
                  className="fill-cyan-400 cursor-pointer"
                  onClick={() => setSelectedWaveId('wave_44')}
                />
                <text
                  x="275"
                  y="20"
                  textAnchor="middle"
                  className="fill-cyan-300 text-xs font-bold font-mono"
                >
                  Crest 1: ~Age 44 (♀ & ♂)
                </text>

                {/* Cluster 11 DSBR Drop Marker (Age 50-56) */}
                <circle cx="460" cy="132" r="5" className="fill-amber-400" />
                <text
                  x="460"
                  y="154"
                  textAnchor="middle"
                  className="fill-amber-300 text-[10px] font-mono"
                >
                  Age 50–56 DNA Repair Drop
                </text>

                {/* Crest 2 Marker (Age 60) */}
                <circle
                  cx="625"
                  cy="28"
                  r={selectedWaveId === 'wave_60' ? '9' : '6'}
                  className="fill-fuchsia-400 cursor-pointer"
                  onClick={() => setSelectedWaveId('wave_60')}
                />
                <text
                  x="625"
                  y="14"
                  textAnchor="middle"
                  className="fill-fuchsia-300 text-xs font-bold font-mono"
                >
                  Crest 2: ~Age 60 Systemic Surge
                </text>

                {/* X-axis Age Labels */}
                <text x="80" y="195" textAnchor="middle" className="fill-gray-400 text-xs font-mono">
                  Age 35
                </text>
                <text x="275" y="195" textAnchor="middle" className="fill-cyan-300 text-xs font-mono font-bold">
                  Age 44
                </text>
                <text x="460" y="195" textAnchor="middle" className="fill-gray-400 text-xs font-mono">
                  Age 53
                </text>
                <text x="625" y="195" textAnchor="middle" className="fill-fuchsia-300 text-xs font-mono font-bold">
                  Age 60
                </text>
                <text x="745" y="195" textAnchor="middle" className="fill-gray-400 text-xs font-mono">
                  Age 70
                </text>
              </svg>
            </div>

            {/* Wave Selector Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="tablist">
              {nonlinearData.waves.map((w) => {
                const isSelected = w.id === selectedWaveId;
                return (
                  <button
                    key={w.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedWaveId(w.id)}
                    className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-500/15 border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.15)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                        <Waves className="w-4 h-4" aria-hidden="true" />
                        <span>{w.age}</span>
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{w.subtitle}</h3>
                    <p className="text-xs text-gray-400">{w.sexDistribution}</p>
                  </button>
                );
              })}
            </div>

            {/* Selected Wave Pathway Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {activeWave.keyPathways.map((p) => (
                <div
                  key={p.pathway}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">{p.pathway}</h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {p.direction}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-cyan-300">Molecules: {p.molecules}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{p.clinicalImpact}</p>
                </div>
              ))}
            </div>

            {/* Screen-reader accessible fallback table */}
            <table className="sr-only">
              <caption>Nonlinear Multi-Omic Aging Waves at Ages 44 and 60</caption>
              <thead>
                <tr>
                  <th>Wave Crest</th>
                  <th>Pathway</th>
                  <th>Direction</th>
                  <th>Molecules</th>
                  <th>Clinical Impact</th>
                </tr>
              </thead>
              <tbody>
                {nonlinearData.waves.flatMap((w) =>
                  w.keyPathways.map((p) => (
                    <tr key={`${w.id}-${p.pathway}`}>
                      <td>{w.age}</td>
                      <td>{p.pathway}</td>
                      <td>{p.direction}</td>
                      <td>{p.molecules}</td>
                      <td>{p.clinicalImpact}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Unsupervised Trajectory Clusters & Methodological Note */}
        <section aria-labelledby="clusters-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
              Unsupervised Fuzzy c-Means Clustering
            </span>
            <h2 id="clusters-heading" className="text-3xl font-bold text-white">
              Distinct Multi-Omic Trajectory Clusters Across the Human Lifespan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nonlinearData.trajectoryClusters.map((c) => (
              <div
                key={c.cluster}
                className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
                  <GitCommit className="w-4 h-4" aria-hidden="true" />
                  <span>{c.cluster}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{c.signature}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>

          {/* Methodological Transparency Note */}
          <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-start gap-4">
            <Info className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-300 mb-1">
                Statistical & Methodological Context (DE-SWAN + Trajectory Clustering)
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {nonlinearData.methodologicalNote}
              </p>
            </div>
          </div>
        </section>

        {/* Key Findings Grid */}
        <section aria-labelledby="key-findings-heading" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
              Core Scientific Takeaways
            </span>
            <h2 id="key-findings-heading" className="text-3xl font-bold text-white">
              Key Findings from Shen & Snyder (Nature Aging 2024)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonlinearData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
                  <Activity className="w-4 h-4" aria-hidden="true" />
                  <span>FINDING 0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{finding.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{finding.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Standardized Conclusions & Related Research */}
        <ConclusionsSection
          paperId="nonlinear-aging"
          conclusions={nonlinearData.conclusions}
          protocolImplications={nonlinearData.protocolImplications}
        />
      </main>

      <Footer />
    </div>
  );
};
