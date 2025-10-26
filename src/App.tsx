// import React, { useEffect, useState } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { MessageCircle } from 'lucide-react';

// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import Projects from './pages/Projects';
// import Construction from './pages/Construction';
// import Contact from './pages/Contact';
// import Chatbot from './components/Chatbot';

// function App() {
//   const location = useLocation();

//   // Reset scroll position to top on route change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]); // Trigger on pathname change

//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);

//   return (
//     <>
//       {/* Header always visible */}
//       <Header />

//       {/* Page Routes */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/construction" element={<Construction />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       {/* Floating chat button */}
//       <button
//         onClick={() => setIsChatbotOpen(true)}
//         className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50 flex items-center justify-center"
//         aria-label="Open chat"
//       >
//         <MessageCircle className="h-6 w-6" />
//       </button>

//       {/* Chatbot */}
//       <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
//     </>
//   );
// }

// export default App;


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