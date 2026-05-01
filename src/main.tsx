import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AgingClocksWebpage } from './AgingClocksWebpage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgingClocksWebpage />
  </StrictMode>
);
