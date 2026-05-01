import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResearchHub } from './ResearchHub';
import { AgingClocksWebpage } from './AgingClocksWebpage';
import { MetabolitesWebpage } from './MetabolitesWebpage';
import App from './App';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Research Hub Directory */}
        <Route path="/" element={<ResearchHub />} />
        
        {/* Individual Paper Summaries */}
        <Route path="/organ-specific-aging-clocks" element={<AgingClocksWebpage />} />
        <Route path="/endogenous-metabolites-longevity" element={<MetabolitesWebpage />} />
        
        {/* Original Poster Generatory */}
        <Route path="/poster" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
