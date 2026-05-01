

import levlLogo from '../assets/levl-logo-gradient.png';

export const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 pt-12 mt-12 border-t border-[var(--levl-border)] border-opacity-40 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex gap-4 items-center">
        <div className="w-24">
          <img 
            src={levlLogo} 
            alt="LEVL Logo" 
            className="w-full h-auto object-contain" 
          />
        </div>
        <p className="text-xs font-light text-[var(--levl-text-secondary)] max-w-xs">
          At LEVL, we translate cutting-edge longevity science into actionable strategies for real human health.
        </p>
      </div>
      <div className="text-xs text-center md:text-right font-light text-[var(--levl-text-muted)] max-w-sm">
        This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
      </div>
    </footer>
  );
};
