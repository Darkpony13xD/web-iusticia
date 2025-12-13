import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Home from './components/Home';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ServicesPage from './components/ServicesPage';
import TeamPage from './components/TeamPage';

// Helper component to scroll to top on route change, but handle hash links
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  const [showLoader, setShowLoader] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowLoader(false);
      setFadingOut(false);
      return;
    }

    setShowLoader(true);
    setFadingOut(false);

    const mainTimer = window.setTimeout(() => {
      setFadingOut(true);

      const fadeTimer = window.setTimeout(() => {
        setShowLoader(false);
      }, 280);

      return () => window.clearTimeout(fadeTimer);
    }, 900);

    return () => window.clearTimeout(mainTimer);
  }, [location.pathname]);

  if (showLoader) return <LoadingScreen fadingOut={fadingOut} />;

  return (
    <div className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-black flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
