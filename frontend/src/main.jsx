import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './App.jsx';
import { ServicesProvider, createWebServices } from './ui/context/services.jsx';
import { AuthProvider } from './ui/context/auth.jsx';
import { registerServiceWorker } from './registerServiceWorker.js';
import './styles/app.css';

const services = createWebServices();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicesProvider services={services}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ServicesProvider>
  </StrictMode>,
);

registerServiceWorker();
