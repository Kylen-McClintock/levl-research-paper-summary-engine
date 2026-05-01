import React from 'react';
import { Panel } from './Panel';

export interface OverviewItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface StudyOverviewProps {
  title: string;
  items: OverviewItem[];
  borderColor?: 'cyan' | 'green' | 'magenta' | 'none';
  icon?: React.ReactNode;
}

export const StudyOverview: React.FC<StudyOverviewProps> = ({ title, items, borderColor = 'cyan', icon }) => {
  return (
    <Panel title={title} borderColor={borderColor} icon={icon}>
      <div className="flex flex-col gap-4 mt-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 items-start border-b border-[var(--levl-border)] border-opacity-30 pb-3 last:border-0 last:pb-0">
            <div className="flex-shrink-0 mt-1 opacity-90">{item.icon}</div>
            <div className="text-xs leading-relaxed text-opacity-90">
              <span className="font-semibold text-white mr-1 text-[11px] tracking-wider">{item.label}:</span>
              <span className="text-[var(--levl-text-secondary)] font-light">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};
