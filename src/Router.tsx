import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResearchHub } from './ResearchHub';
import { AgingClocksWebpage } from './AgingClocksWebpage';
import { MetabolitesWebpage } from './MetabolitesWebpage';
import { CrExWebpage } from './CrExWebpage';
import { IL11Webpage } from './IL11Webpage';
import { CarTWebpage } from './CarTWebpage';
import { Pf4Webpage } from './Pf4Webpage';
import { EpigeneticWebpage } from './EpigeneticWebpage';
import App from './App';

export const Router = () => {
  return (
    <BrowserRouter basename="/research">
      <Routes>
        {/* Research Hub Directory */}
        <Route path="/" element={<ResearchHub />} />
        
        {/* Individual Paper Summaries */}
        <Route path="/organ-specific-aging-clocks" element={<AgingClocksWebpage />} />
        <Route path="/endogenous-metabolites-longevity" element={<MetabolitesWebpage />} />
        <Route path="/diet-vs-exercise-aging" element={<CrExWebpage />} />
        <Route path="/il-11-lifespan-extension" element={<IL11Webpage />} />
        <Route path="/car-t-senolytics" element={<CarTWebpage />} />
        <Route path="/pf4-systemic-rejuvenation" element={<Pf4Webpage />} />
        <Route path="/epigenetic-reprogramming" element={<EpigeneticWebpage />} />
        
        {/* Original Poster Generatory */}
        <Route path="/poster" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
