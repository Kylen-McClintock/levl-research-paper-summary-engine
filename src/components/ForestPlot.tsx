import React from 'react';
import { Panel } from './Panel';

export interface ForestPlotRow {
  outcome: string;
  icon?: React.ReactNode;
  hr: number;
  ciLower: number;
  ciUpper: number;
  pValue: string;
  color?: string; // e.g. '#0ea5e9'
}

interface ForestPlotProps {
  title: string;
  rows: ForestPlotRow[];
  minScale?: number;
  maxScale?: number;
  nullValue?: number;
}

export const ForestPlot: React.FC<ForestPlotProps> = ({
  title,
  rows,
  minScale = 0.25,
  maxScale = 1.75,
  nullValue = 1.0,
}) => {
  const range = maxScale - minScale;
  
  const getPercentage = (val: number) => {
    return Math.max(0, Math.min(100, ((val - minScale) / range) * 100));
  };

  const nullPercentage = getPercentage(nullValue);

  return (
    <Panel title={title} borderColor="cyan" className="font-inter">
      <div className="flex flex-col text-sm h-full w-full">
        {/* Header */}
        <div className="flex border-b border-[var(--levl-border)] pb-2 mb-4 text-[var(--levl-text-muted)] font-medium">
          <div className="flex-[0.3]">Outcome</div>
          <div className="flex-[0.4] text-center">Hazard Ratio (95% CI)</div>
          <div className="flex-[0.2] text-center">HR (95% CI)</div>
          <div className="flex-[0.1] text-right">P Value</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-6 relative flex-1 mt-2">
          {/* Vertical Null Line */}
          <div 
            className="absolute top-0 bottom-0 border-l border-dashed border-[var(--levl-border)] z-0"
            style={{ left: `calc(30% + ${nullPercentage * 0.4}%)` }}
          />
          
          {rows.map((row, index) => {
            const hrPos = getPercentage(row.hr);
            const ciLowerPos = getPercentage(row.ciLower);
            const ciUpperPos = getPercentage(row.ciUpper);
            const color = row.color || 'var(--levl-cyan)';

            return (
              <div key={index} className="flex items-center text-white relative z-10 w-full">
                <div className="flex-[0.3] flex items-center gap-3">
                  {row.icon && <span className="w-6 h-6 flex items-center justify-center opacity-80" style={{ color }}>{row.icon}</span>}
                  <span className="leading-snug">{row.outcome}</span>
                </div>
                
                <div className="flex-[0.4] relative flex items-center justify-center h-4 w-full px-4">
                  {/* Whisker Line */}
                  <div 
                    className="absolute h-0.5 bg-current opacity-60"
                    style={{
                      left: `${ciLowerPos}%`,
                      width: `${ciUpperPos - ciLowerPos}%`,
                      color: color
                    }}
                  >
                    {/* Whiskers (End Caps) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3 bg-current"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3 bg-current"></div>
                  </div>
                  {/* Point Estimate Circle */}
                  <div 
                    className="absolute w-3 h-3 rounded-full top-1/2 -translate-y-1/2 -ml-1.5"
                    style={{
                      left: `${hrPos}%`,
                      backgroundColor: color,
                      boxShadow: `0 0 8px ${color}`
                    }}
                  />
                </div>
                
                <div className="flex-[0.2] text-center font-light">
                  {row.hr.toFixed(2)} ({row.ciLower.toFixed(2)}-{row.ciUpper.toFixed(2)})
                </div>
                <div className="flex-[0.1] text-right font-light">
                  {row.pValue}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* X-Axis Scale */}
        <div className="flex mt-8 text-[var(--levl-text-muted)] text-xs relative pt-2">
           <div className="flex-[0.3]"></div>
           <div className="flex-[0.4] relative flex justify-between px-4 border-t border-[var(--levl-border)]">
              <span>0.25</span>
              <span>0.50</span>
              <span>0.75</span>
              <span>1.00</span>
               <span>1.25</span>
               <span>1.50</span>
           </div>
           <div className="flex-[0.3]"></div>
        </div>
        
        <div className="flex text-xs text-cyan mt-3 opacity-90 justify-center gap-24 relative">
             <span className="text-left w-32">&larr; Favors GLP-1 RA</span>
             <span className="text-right w-32 border-b-0 border-transparent text-[var(--levl-text-secondary)]">Favors DPP4i &rarr;</span>
        </div>
      </div>
    </Panel>
  );
};
