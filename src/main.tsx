import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Ensure there is a <div id="root"> in your index.html.');
}

document.body.style.zoom = '100%';


createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


// import { StrictMode, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.tsx';
// import './index.css';

// const rootElement = document.getElementById('root');
// if (!rootElement) {
//   throw new Error('Root element not found. Ensure there is a <div id="root"> in your index.html.');
// }

// // Set browser zoom to 90%
// document.body.style.zoom = '90%';

// createRoot(rootElement).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );