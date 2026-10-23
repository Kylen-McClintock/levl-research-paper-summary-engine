import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft, ExternalLink, ShieldCheck, FlaskConical, Microscope, BookOpen } from "lucide-react";
import levlLogo from '../assets/levl-logo.png';
import hubDataRaw from '../data/hubData.json';
import { ACCENT_STYLES, type HubPaper } from '../types/paper';

const hubData = hubDataRaw as HubPaper[];

const navLinks = [
  { name: "Science", href: "https://www.levlhealth.com/#science" },
  { name: "App", href: "https://www.levlhealth.com/#app" },
  { name: "About", href: "https://www.levlhealth.com/about" },
  { name: "Learn", href: "https://www.levlhealth.com/learn", hiddenOnMobile: true },
  { name: "Research Library", href: "/" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentPaper = hubData.find((p) => p.path === location.pathname);
  const styles = currentPaper ? ACCENT_STYLES[currentPaper.accentColor] || ACCENT_STYLES.blue : ACCENT_STYLES.blue;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const getTierIcon = (tier: string) => {
    if (tier.startsWith('Tier 1')) return <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
    if (tier.startsWith('Tier 2')) return <FlaskConical className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
    return <Microscope className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || currentPaper
            ? "bg-[#060913]/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent py-2"
        }`}
      >
        {/* Reading Progress Bar on Paper Pages */}
        {currentPaper && (
          <div
            className="w-full h-[2px] bg-white/5 overflow-hidden"
            role="progressbar"
            aria-valuenow={Math.round(scrollProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Reading progress"
          >
            <div
              className={`h-full transition-all duration-150 ${styles.barFill}`}
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href="https://www.levlhealth.com/" className="flex items-center">
              <img src={levlLogo} alt="LEVL" className="h-7 w-auto object-contain" />
            </a>
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              <BookOpen className="w-3 h-3 text-cyan-400" aria-hidden="true" />
              <span>Research Hub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.levlhealth.com/checkout-mock/"
              className="hidden md:flex bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors"
            >
              Gain Early Access
            </a>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Contextual Sub-Bar on Individual Paper Pages */}
        {currentPaper && (
          <div className="border-t border-white/10 bg-[#050811]/95">
            <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-gray-200 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>All {hubData.length} Studies</span>
                </Link>

                <span className="hidden md:inline-block text-white/20">|</span>

                <span className="hidden md:inline-flex items-center gap-2 text-xs text-gray-300">
                  <strong className="text-white font-semibold">{currentPaper.title}</strong>
                  <span className="text-gray-400">
                    — {currentPaper.authors} ({currentPaper.journal}, {currentPaper.year})
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="#overview"
                  className="hidden lg:inline-block text-xs text-gray-400 hover:text-white px-2 py-1 transition-colors"
                >
                  Overview
                </a>
                <a
                  href="#conclusions"
                  className="hidden lg:inline-block text-xs text-gray-400 hover:text-white px-2 py-1 transition-colors"
                >
                  Takeaways
                </a>

                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${styles.badgeBg} ${styles.badgeBorder} ${styles.badgeText}`}
                >
                  {getTierIcon(currentPaper.evidenceTier)}
                  <span>{currentPaper.evidenceTier}</span>
                </span>

                {currentPaper.pmid && (
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${currentPaper.pmid}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-gray-300 hover:text-white transition-colors"
                  >
                    <span>PMID:{currentPaper.pmid}</span>
                    <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
                  </a>
                )}

                <a
                  href={currentPaper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-gray-300 hover:text-white transition-colors"
                >
                  <span>DOI</span>
                  <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[var(--levl-bg)] border-b border-[var(--levl-border)] p-4 md:hidden flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => {
              if (link.hiddenOnMobile) return null;
              return link.href.startsWith("http") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://www.levlhealth.com/checkout-mock/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-white text-black text-center px-4 py-3 rounded-xl font-medium text-lg mt-2"
            >
              Gain Early Access
            </a>
          </div>
        )}
      </nav>
      {/* Spacer when paper sub-bar is active so fixed header never overlaps hero badges */}
      {currentPaper && <div className="h-8" aria-hidden="true" />}
    </>
  );
}
