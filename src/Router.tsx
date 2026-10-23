import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ResearchHub } from './ResearchHub';
import { AgingClocksWebpage } from './AgingClocksWebpage';
import { MetabolitesWebpage } from './MetabolitesWebpage';
import { CrExWebpage } from './CrExWebpage';
import { IL11Webpage } from './IL11Webpage';
import { CarTWebpage } from './CarTWebpage';
import { Pf4Webpage } from './Pf4Webpage';
import { EpigeneticWebpage } from './EpigeneticWebpage';
import { RapamycinWebpage } from './RapamycinWebpage';
import { UrolithinWebpage } from './UrolithinWebpage';
import { NadWebpage } from './NadWebpage';
import { SenolyticsWebpage } from './SenolyticsWebpage';
import { MetforminWebpage } from './MetforminWebpage';
import { DoHealthWebpage } from './DoHealthWebpage';
import { RapaTramWebpage } from './RapaTramWebpage';
import { NonlinearAgingWebpage } from './NonlinearAgingWebpage';
import { CalerieWebpage } from './CalerieWebpage';
import App from './App';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export const Router = () => {
  return (
    <BrowserRouter basename="/research">
      <ScrollToTop />
      <Routes>
        {/* Research Hub Directory */}
        <Route path="/" element={<ResearchHub />} />
        
        {/* Individual Paper Summaries */}
        <Route path="/do-health-omega3-clocks" element={<DoHealthWebpage />} />
        <Route path="/trametinib-rapamycin-combination" element={<RapaTramWebpage />} />
        <Route path="/nonlinear-multiomic-aging-waves" element={<NonlinearAgingWebpage />} />
        <Route path="/calerie-dunedinpace-rct" element={<CalerieWebpage />} />
        <Route path="/organ-specific-aging-clocks" element={<AgingClocksWebpage />} />
        <Route path="/endogenous-metabolites-longevity" element={<MetabolitesWebpage />} />
        <Route path="/diet-vs-exercise-aging" element={<CrExWebpage />} />
        <Route path="/il-11-lifespan-extension" element={<IL11Webpage />} />
        <Route path="/car-t-senolytics" element={<CarTWebpage />} />
        <Route path="/pf4-systemic-rejuvenation" element={<Pf4Webpage />} />
        <Route path="/epigenetic-reprogramming" element={<EpigeneticWebpage />} />
        <Route path="/rapamycin-mtor" element={<RapamycinWebpage />} />
        <Route path="/urolithin-a-mitophagy" element={<UrolithinWebpage />} />
        <Route path="/nad-communication" element={<NadWebpage />} />
        <Route path="/dq-senolytics" element={<SenolyticsWebpage />} />
        <Route path="/metformin-tame" element={<MetforminWebpage />} />
        
        {/* Original Poster Generator */}
        <Route path="/poster" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
