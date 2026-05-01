import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MetabolitesWebpage } from './MetabolitesWebpage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MetabolitesWebpage />
  </StrictMode>
);
