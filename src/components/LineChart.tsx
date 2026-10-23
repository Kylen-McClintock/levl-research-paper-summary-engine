import React from 'react';

interface DataPoint {
  label: string;
  y: number;
  asterisk?: string;
}

interface LineChartData {
  title: string;
  yLabel?: string;
  unit?: string;
  minY: number;
  maxY: number;
  step: number;
  points: DataPoint[];
  callout?: {
    messages: string[];
    legend: string[];
  };
}

export const LineChart: React.FC<{ data: LineChartData }> = ({ data }) => {
  const { title, unit, minY, maxY, step, points, callout } = data;
  const range = maxY - minY;

  const yLabels: number[] = [];
  for (let i = maxY; i >= minY; i -= step) {
    yLabels.push(Number(i.toFixed(2)));
  }

  const getYPercent = (val: number) => {
    return 100 - ((val - minY) / range) * 100;
  };

  const getXPercent = (index: number, total: number) => {
    if (total <= 1) return 50;
    return (index / (total - 1)) * 100;
  };

  return (
    <div className="flex flex-col mb-4 w-full">
      <div className="flex items-baseline justify-between pb-1 mb-3">
        <h4 className="text-sm text-[var(--levl-text-secondary)] font-semibold">
          {title}
        </h4>
        {unit && (
          <span className="text-[11px] font-mono text-[var(--levl-text-muted)]">
            {data.yLabel || title.split('(')[0].trim()} {unit}
          </span>
        )}
      </div>

      {/* Screen-reader accessible data table fallback */}
      <table className="sr-only">
        <caption>{title}</caption>
        <thead>
          <tr>
            <th scope="col">Condition</th>
            <th scope="col">Value {unit || ''}</th>
            <th scope="col">Significance</th>
          </tr>
        </thead>
        <tbody>
          {points.map((p, idx) => (
            <tr key={idx}>
              <td>{p.label.replace(/\n/g, ' ')}</td>
              <td>{p.y}</td>
              <td>{p.asterisk || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex h-52 w-full pr-4 pl-2">
        {/* Y Axis */}
        <div className="flex flex-col justify-between text-xs text-[var(--levl-text-muted)] border-r border-[var(--levl-border)] pr-2.5 w-12 relative select-none">
          {yLabels.map((lbl, i) => (
            <div key={i} className="text-right leading-none -translate-y-1/2 opacity-80 font-mono text-[11px]">
              {lbl}
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="flex-1 relative ml-4 mr-6">
          {/* Horizontal grid lines */}
          {yLabels.map((lbl, i) => (
            <div
              key={i}
              className="absolute w-full border-t border-white/[0.05] z-0 pointer-events-none"
              style={{ top: `${getYPercent(lbl)}%` }}
            />
          ))}

          {/* Zero Line */}
          {minY < 0 && maxY > 0 && (
            <div
              className="absolute w-full border-t border-[var(--levl-border)] border-dashed z-0 opacity-60"
              style={{ top: `${getYPercent(0)}%` }}
            />
          )}

          {/* SVG Polyline with valid unitless viewBox coordinates */}
          <svg
            className="absolute inset-0 w-full h-full z-10 overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              fill="none"
              stroke="var(--levl-green)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              points={points
                .map((p, i) => `${getXPercent(i, points.length)},${getYPercent(p.y)}`)
                .join(' ')}
            />
          </svg>

          {/* Data Points */}
          {points.map((p, i) => {
            const x = getXPercent(i, points.length);
            const y = getYPercent(p.y);
            return (
              <div key={i} className="group">
                <div
                  className="absolute w-3.5 h-3.5 bg-[var(--levl-green)] rounded-full -ml-[7px] -mt-[7px] z-20 transition-transform duration-200 group-hover:scale-125"
                  style={{ left: `${x}%`, top: `${y}%`, boxShadow: '0 0 10px var(--levl-green)' }}
                  title={`${p.label.replace(/\n/g, ' ')}: ${p.y}`}
                />
                {p.asterisk && (
                  <span
                    className="absolute text-xs text-white tracking-widest font-bold text-center select-none z-20"
                    style={{
                      left: `${x}%`,
                      transform: 'translateX(-50%)',
                      top: p.y < -3 ? `calc(${y}% + 8px)` : `calc(${y}% - 22px)`,
                    }}
                  >
                    {p.asterisk}
                  </span>
                )}
              </div>
            );
          })}

          {/* X Axis Labels */}
          <div className="absolute top-[105%] left-0 w-full opacity-75">
            {points.map((p, i) => (
              <div
                key={i}
                className="absolute text-[10px] leading-tight text-center text-gray-300"
                style={{
                  left: `${getXPercent(i, points.length)}%`,
                  transform: 'translateX(-50%)',
                  width: '72px',
                }}
              >
                {p.label.split('\n').map((line, lIdx) => (
                  <span key={lIdx} className="block">
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Callout Footer */}
      {callout && (
        <div className="mt-9 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 text-xs text-white/90 border border-white/10 bg-white/[0.02] rounded-lg shadow-sm">
          <div className="flex-1">
            {callout.messages.map((m, i) => (
              <p key={i} className="leading-relaxed text-gray-300">
                {m}
              </p>
            ))}
          </div>
          <div className="text-[var(--levl-text-muted)] font-mono text-[11px] sm:ml-4 sm:pl-4 sm:border-l border-white/10 shrink-0">
            {callout.legend.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
