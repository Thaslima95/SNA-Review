import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { History } from './components/History';
import { Executives } from './components/Executives';
import { Seminars } from './components/Seminars';
import { PhotoGallery } from './components/PhotoGallery';
import { ResearchHighlights } from './components/ResearchHighlights';
import { Newsletters } from './components/Newsletters';
import { IBRO_APRC } from './components/IBRO_APRC';
import { BrainBee } from './components/BrainBee';
import { SymposiumTemplate } from './components/SymposiumTemplate';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

// Wrapper to ensure scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/executives" element={<Executives />} />
            <Route path="/seminars" element={<Seminars />} />
            <Route path="/brain-bee" element={<BrainBee />} />
            <Route path="/symposium-2026" element={<SymposiumTemplate />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
