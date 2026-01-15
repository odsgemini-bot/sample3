
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Career from './pages/Career';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-amber-50 py-8 border-t border-amber-100">
          <div className="max-w-6xl mx-auto px-4 text-center text-amber-800 opacity-70">
            <p>© 2024 Oh Du-seong. Spreading happiness through bread.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
