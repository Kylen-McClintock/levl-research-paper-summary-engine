import React from 'react';

interface PanelProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  borderColor?: 'cyan' | 'green' | 'magenta' | 'none';
  icon?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  children,
  title,
  className = '',
  borderColor = 'none',
  icon
}) => {
  const borderClass = borderColor !== 'none' ? `border-${borderColor}` : '';
  const textClass = borderColor !== 'none' ? `text-${borderColor}` : 'text-primary';

  return (
    <div className={`panel ${borderClass} ${className} flex flex-col gap-3 relative`}>
      {title && (
        <div className="flex items-center gap-2 mb-1">
          {icon && <span className={`text-xl ${textClass}`}>{icon}</span>}
          <h2 className={`uppercase text-sm tracking-wider m-0 ${textClass}`}>{title}</h2>
        </div>
      )}
      <div className="flex-1 w-full h-full">
        {children}
      </div>
    </div>
  );
};
