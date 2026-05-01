import React from 'react';

export const LineChart: React.FC<{ data: any }> = ({ data }) => {
  const { title, unit, minY, maxY, step, points, callout } = data;
  const range = maxY - minY;
  
  // Create Y-axis labels
  const yLabels = [];
  for (let i = maxY; i >= minY; i -= step) {
    yLabels.push(i);
  }

  const getYPercent = (val: number) => {
    return 100 - ((val - minY) / range) * 100;
  };

  const getXPercent = (index: number, total: number) => {
    return (index / (total - 1)) * 100;
  };

  return (
    <div className="flex flex-col mb-4 w-full">
      <h4 className="text-sm pb-1 mb-2 text-[var(--levl-text-secondary)] font-medium">
        {title}
      </h4>
      <div className="flex h-52 w-full pr-4">
        {/* Y Axis */}
        <div className="flex flex-col justify-between text-xs text-[var(--levl-text-muted)] border-r border-[var(--levl-border)] pr-2 w-16 relative">
          <div className="absolute top-1/2 -left-[4.5rem] -translate-y-1/2 -rotate-90 text-[0.6rem] whitespace-nowrap opacity-75 tracking-wider text-center flex flex-col items-center leading-snug w-32">
            <span>{data.yLabel || title.split('(')[0]}</span>
            <span>{unit}</span>
          </div>
          {yLabels.map((lbl, i) => (
            <div key={i} className="text-right leading-none -translate-y-1/2 opacity-75">
              {lbl}
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="flex-1 relative ml-2 mr-6">
          {/* Zero Line */}
          {minY < 0 && maxY > 0 && (
            <div 
              className="absolute w-full border-t border-[var(--levl-border)] border-dashed z-0 opacity-40" 
              style={{ top: `${getYPercent(0)}%` }} 
            />
          )}
          
          {/* Lines connecting points */}
          <svg className="absolute inset-0 w-full h-full z-10 overflow-visible" preserveAspectRatio="none">
            <polyline 
               fill="none" 
               stroke="var(--levl-green)" 
               strokeWidth="3"
               points={points.map((p: any, i: number) => `${getXPercent(i, points.length)}%,${getYPercent(p.y)}%`).join(' ')} 
            />
          </svg>

          {/* Points */}
          {points.map((p: any, i: number) => {
            const x = getXPercent(i, points.length);
            const y = getYPercent(p.y);
            return (
              <div key={i}>
                <div 
                  className="absolute w-4 h-4 bg-[var(--levl-green)] rounded-full -ml-2 -mt-2 z-20"
                  style={{ left: `${x}%`, top: `${y}%`, boxShadow: '0 0 10px var(--levl-green)' }}
                />
                {p.asterisk && (
                   <span className="absolute text-[0.8rem] text-white tracking-widest font-bold text-center" 
                         style={{ 
                            left: `${x}%`,
                            transform: 'translateX(-50%)',
                            top: p.y < -3 ? `calc(${y}% + 6px)` : `calc(${y}% - 20px)` 
                         }}>
                      {p.asterisk}
                   </span>
                )}
              </div>
            );
          })}
          
          {/* X Axis Labels explicitly placed inside chart bounds at bottom edge */}
          <div className="absolute top-[105%] left-0 w-full opacity-60">
            {points.map((p: any, i: number) => (
               <div key={i} className="absolute text-[0.55rem] text-center" style={{ left: `${getXPercent(i, points.length)}%`, transform: 'translateX(-50%)', width: '64px' }}>
                  <span dangerouslySetInnerHTML={{ __html: p.label.replace('\n', '<br/>') }} />
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* Callout Footer */}
      {callout && (
         <div className="mt-8 w-full flex items-center justify-between p-3 text-[0.65rem] text-white opacity-90 border border-[var(--levl-border)] border-opacity-40 bg-white bg-opacity-[0.02] rounded-md shadow-sm">
            <div className="flex-1">
              {callout.messages.map((m: string, i: number) => <p key={i} className="leading-relaxed">{m}</p>)}
            </div>
            <div className="text-[var(--levl-text-muted)] font-mono ml-4 pl-4 border-l border-[var(--levl-border)] border-opacity-30">
               {callout.legend.map((l: string, i: number) => <p key={i}>{l}</p>)}
            </div>
         </div>
      )}
    </div>
  );
};
