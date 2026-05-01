import React from 'react';
import { Panel } from './Panel';

interface MicroSummaryProps {
  title: string;
  borderColor?: 'cyan' | 'green' | 'magenta' | 'none';
  icon?: React.ReactNode;
  children: React.ReactNode;
  source?: string;
  doi?: string;
}

export const MicroSummary: React.FC<MicroSummaryProps> = ({
  title,
  borderColor = 'none',
  icon,
  children,
  source,
  doi
}) => {
  return (
    <Panel title={title} borderColor={borderColor} icon={icon} className="h-full">
      <div className="flex flex-col h-full justify-between gap-4">
        <div className="text-sm font-light text-white leading-relaxed">
          {children}
        </div>
        {(source || doi) && (
          <div className="mt-4 pt-4 border-t border-[var(--levl-border)] text-xs text-[var(--levl-text-muted)] space-y-1">
            {source && <p>Source: {source}</p>}
            {doi && <p>DOI {doi}</p>}
          </div>
        )}
      </div>
    </Panel>
  );
};
