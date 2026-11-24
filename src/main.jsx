import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './theme/ThemeContext';

// Apply the saved theme before the first render, so the page never flashes.
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
