import React from 'react';
import { Panel } from './Panel';

export interface FlowchartGroup {
  label: string;
  sublabel: string;
  patients: string;
  color: 'magenta' | 'cyan';
  icon?: React.ReactNode;
}

interface FlowchartProps {
  groups: FlowchartGroup[];
  matchingLabel: string;
  matchedDetails: string;
}

export const StudyDesignFlowchart: React.FC<FlowchartProps> = ({ groups, matchingLabel, matchedDetails }) => {
  return (
    <Panel title="Study Design & Intervention Details" borderColor="magenta">
      <div className="flex flex-col items-center w-full mt-4">
        {/* Top Two Groups + Matching box */}
        <div className="flex w-full items-center justify-between mb-8 gap-4 px-4 relative">
            {/* Draw lines behind boxes (if we have 2 groups, connect them to center) */}
            <div className="absolute top-1/2 left-[20%] right-[20%] h-px bg-[var(--levl-border)] -z-10"></div>
            
            {groups.map((group, index) => {
              const borderClass = group.color === 'magenta' ? 'border-magenta text-magenta' : 'border-cyan text-cyan';
              return (
                <div key={index} className={`flex flex-col items-center justify-center border ${borderClass} bg-[var(--levl-bg)] rounded-md p-4 w-40 h-32 relative z-0`}>
                    <h3 className="uppercase text-sm font-bold text-center leading-tight mb-2">{group.label} <br/><span className="font-normal text-xs">({group.sublabel})</span></h3>
                    {group.icon && <div className="text-xl mb-2 opacity-80">{group.icon}</div>}
                    <div className="text-xs text-white opacity-90">{group.patients}</div>
                </div>
              );
            })}
            
            {/* Center Matching Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded border border-[var(--levl-border)] bg-[var(--levl-bg)] px-4 py-2 text-xs text-center uppercase tracking-wider text-white shadow-xl z-10 w-36">
               {matchingLabel}
            </div>
            {/* Arrows pointing down to final matched cohort box */}
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-px h-8 bg-[var(--levl-border)]"></div>
        </div>
        
        {/* Resulting Cohort */}
        <div className="border border-[var(--levl-border)] bg-gray-900 bg-opacity-40 rounded p-4 text-center mt-2 flex items-center justify-center gap-4 w-2/3 shadow-lg">
            <div className="text-white">
                <p className="font-bold text-sm tracking-wide mb-1">Matched Cohort</p>
                <p className="text-xs text-[var(--levl-text-secondary)]" dangerouslySetInnerHTML={{ __html: matchedDetails.replace('\n', '<br/>') }} />
            </div>
        </div>
      </div>
    </Panel>
  );
};
