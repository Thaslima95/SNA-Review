import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

/* -------------------- Lazy Imports -------------------- */
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

/* -------------------- Simple Loader -------------------- */
const Loader = () => (
  <div className="flex justify-center items-center h-40">
    <p>Loading...</p>
  </div>
);

/* -------------------- Scroll To Top -------------------- */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* -------------------- Animated Routes -------------------- */
const AnimatedRoutes = () => {
  const location = useLocation(); // ✅ NOW INSIDE ROUTER

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
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
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
};

/* -------------------- Main App -------------------- */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;