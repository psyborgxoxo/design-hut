import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Construction from './pages/Construction';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';

function App() {
  const location = useLocation();

  // Reset scroll position to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger on pathname change

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Routing Configuration */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Chatbot Component */}
      <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
    </>
  );
}

export default App;