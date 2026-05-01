import React from 'react';
import { Panel } from './Panel';
import { Shirt, Activity, Droplet, Dumbbell, BrainCircuit, Heart } from 'lucide-react';

export const BarChartGroup: React.FC<{ data: any, title?: string }> = ({ data, title }) => {
  return (
    <Panel title={title || "Select Outcomes"} borderColor="none">
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mt-4 px-2 pb-6">
        {data.map((chart: any, index: number) => {
          const { title, bar1, bar2, minY, maxY, step, unit, asterisk1, icon, label1, label2 } = chart;
          const range = maxY - minY;
          const zeroY = 100 - ((0 - minY) / range) * 100;
          
          const yLabels = [];
          for (let i = maxY; i >= minY; i -= (step || 5)) {
             yLabels.push(i);
          }
          
          const getH = (val: number) => (Math.abs(val) / range) * 100;
          
          const b1H = getH(bar1);
          const b2H = getH(bar2);
          
          const isPos = (val: number) => val >= 0;

          const color1 = 'var(--levl-green)';
          const color2 = 'var(--levl-cyan)';

          let IconCmp = <div />;
          if (icon === 'Shirt') IconCmp = <Shirt className="w-5 h-5 text-[var(--levl-cyan)]" />;
          if (icon === 'Activity') IconCmp = <Activity className="w-5 h-5 text-[var(--levl-cyan)]" />;
          if (icon === 'Droplet') IconCmp = <Droplet className="w-5 h-5 text-[var(--levl-cyan)]" />;
          if (icon === 'Dumbbell') IconCmp = <Dumbbell className="w-5 h-5 text-[var(--levl-cyan)]" />;
          if (icon === 'BrainCircuit') IconCmp = <BrainCircuit className="w-5 h-5 text-[var(--levl-cyan)]" />;
          if (icon === 'Heart') IconCmp = <Heart className="w-5 h-5 text-[var(--levl-cyan)]" />;

          return (
            <div key={index} className="flex flex-col h-32 relative group">
               <div className="text-xs font-semibold text-center mb-3 text-[var(--levl-cyan)] flex items-center justify-center gap-2 max-w-[150px] mx-auto min-h-[30px] break-words">
                 {IconCmp} <span dangerouslySetInnerHTML={{ __html: title.replace('\n', '<br/>') }} />
               </div>
               <div className="flex h-full">
                  {/* Y Axis extended width to w-14 to prevent overlap */}
                  <div className="flex flex-col justify-between text-xs text-[var(--levl-text-muted)] border-r border-[var(--levl-border)] pr-2 w-12 relative opacity-75">
                    <div className="absolute top-1/2 -left-8 -translate-y-1/2 -rotate-90 text-[0.55rem] whitespace-nowrap opacity-60 tracking-wider">
                      {unit}
                    </div>
                    {yLabels.map((lbl, idx) => (
                       <div key={idx} className="text-right leading-none -translate-y-[2px] text-[10px]">
                          {lbl}
                       </div>
                    ))}
                  </div>
                  
                  {/* Chart Area */}
                  <div className="flex-1 relative ml-2 flex items-end justify-center gap-4">
                      {/* Zero line */}
                      <div className="absolute w-full border-t border-[var(--levl-border)] border-opacity-40 right-0" style={{ top: `${zeroY}%` }}></div>
                      
                      {/* Bar 1 */}
                      <div className="relative w-10 h-full">
                        <div 
                          className="absolute w-full flex justify-center" 
                          style={{ 
                            height: `${b1H}%`, 
                            backgroundColor: color1,
                            bottom: isPos(bar1) ? `calc(${100 - zeroY}%)` : 'auto',
                            top: !isPos(bar1) ? `calc(${zeroY}%)` : 'auto',
                            boxShadow: `0 0 10px rgba(34,197,94,0.3)`
                          }} 
                        >
                          {asterisk1 && (
                             <div className="absolute text-white text-[13px] font-bold leading-none" style={{ left: '50%', transform: 'translate(-50%, 0)', top: isPos(bar1) ? '-18px' : 'auto', bottom: !isPos(bar1) ? '-16px' : 'auto' }}>
                                {asterisk1}
                             </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Bar 2 */}
                      <div className="relative w-10 h-full">
                        <div 
                          className="absolute w-full bottom-0 bg-blue-400" 
                          style={{ 
                            height: `${b2H}%`, 
                            backgroundColor: color2,
                            bottom: isPos(bar2) ? `calc(${100 - zeroY}%)` : 'auto',
                            top: !isPos(bar2) ? `calc(${zeroY}%)` : 'auto',
                            boxShadow: `0 0 10px rgba(14,165,233,0.3)`
                          }} 
                        />
                      </div>
                  </div>
               </div>
               
               {/* Labels bottom */}
               <div className="flex justify-center gap-2 mt-3 text-[0.55rem] text-[var(--levl-text-muted)] text-center pl-10 opacity-75">
                  <div className="w-12 leading-tight" dangerouslySetInnerHTML={{ __html: (label1 || '12 Months<br/>(MR)').replace('\n', '<br/>') }} />
                  <div className="w-12 leading-tight" dangerouslySetInnerHTML={{ __html: (label2 || '24 Months<br/>(Follow-up)').replace('\n', '<br/>') }} />
               </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-12 mt-4 pt-4 border-t border-[var(--levl-border)] border-opacity-30 text-xs font-light text-[var(--levl-text-secondary)]">
          <div className="flex items-center gap-3"><div className="w-3 h-3 bg-[var(--levl-green)] shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div> {data[0]?.legend1 || '12 Months (MR)'}</div>
          <div className="flex items-center gap-3"><div className="w-3 h-3 bg-[var(--levl-cyan)] shadow-[0_0_8px_rgba(14,165,233,0.4)]"></div> {data[0]?.legend2 || '24 Months (Follow-up)'}</div>
      </div>
      <div className="text-[0.6rem] text-[var(--levl-text-muted)] text-right mt-2 pr-6">
        * p &lt; 0.05
      </div>
    </Panel>
  );
};

