import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,      // opt in to React.startTransition for nav updates
        v7_relativeSplatPath: true     // use the v7 splat-route resolution behavior
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
