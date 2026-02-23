import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
const Home = lazy(() => import('./components/Home'));
const History = lazy(() => import('./components/History'));
const Executive = lazy(() => import('./components/Executives'));
const Seminars = lazy(() => import('./components/Seminars'));
const PhotoGallery = lazy(() => import('./components/PhotoGallery'));
const ResearchHighlights = lazy(() => import('./components/ResearchHighlights'));
const Newsletters = lazy(() => import('./components/Newsletters'));
const IBRO_APRC = lazy(() => import('./components/IBRO_APRC'));
const BrainBee = lazy(() => import('./components/BrainBee'));
const SymposiumTemplate = lazy(() => import('./components/SymposiumTemplate'));
const ContactUs = lazy(() => import('./components/ContactUs'));


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
        <Suspense
    fallback={
      <div className="flex items-center justify-center py-20 text-slate-500">
        Loading...
      </div>
    }
  >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/executives" element={<Executive />} />
      <Route path="/seminars" element={<Seminars />} />
      <Route path="/brain-bee" element={<BrainBee />} />
      <Route path="/newsletters" element={<Newsletters />} />
      <Route path="/symposium-2026" element={<SymposiumTemplate />} />
      <Route path="/research" element={<ResearchHighlights />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
