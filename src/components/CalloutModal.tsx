import React from 'react';
import { Panel } from './Panel';

interface CalloutProps {
  title: string;
  items: string[];
  borderColor?: 'cyan' | 'green' | 'magenta' | 'none';
  icon?: React.ReactNode;
}

export const CalloutModal: React.FC<CalloutProps> = ({ title, items, borderColor = 'none', icon }) => {
  return (
    <Panel title={title} borderColor={borderColor} icon={icon}>
      <ul className="text-sm font-light text-[var(--levl-text-primary)] pl-5 mt-2 space-y-3 list-outside list-disc marker:text-[var(--levl-text-secondary)]">
        {items.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </Panel>
  );
};
