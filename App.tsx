import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Cursor } from './components/Cursor';
import { BookingModal } from './components/BookingModal';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { ApiKeyModal } from './components/ApiKeyModal';
import { Settings } from 'lucide-react';

const Navbar: React.FC<{ onOpenBooking: () => void, onOpenSettings: () => void }> = ({ onOpenBooking, onOpenSettings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoAnimated, setLogoAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Logo animation trigger
    setTimeout(() => setLogoAnimated(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Animated Logo */}
        <a href="#" className="relative group overflow-hidden">
          <div className="flex flex-col">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[2px] bg-white mb-1"
            />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl font-display font-bold text-white tracking-tighter"
            >
              KĀRYO
            </motion.span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors" data-hover-text="Services">Services</a>
          <a href="#work" className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors" data-hover-text="Work">Work</a>
          <a href="#process" className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors" data-hover-text="Method">Process</a>

          <button
            onClick={onOpenSettings}
            className="text-gray-400 hover:text-white transition-colors"
            title="API Settings"
          >
            <Settings className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenBooking}
            className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-colors"
            data-hover-text="Book Now"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onOpenSettings}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button className="text-white" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-3xl font-display text-white hover:text-karyo-cyan transition-colors">Services</a>
            <a href="#work" onClick={() => setIsOpen(false)} className="text-3xl font-display text-white hover:text-karyo-cyan transition-colors">Work</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="text-3xl font-display text-white hover:text-karyo-cyan transition-colors">Process</a>
            <button onClick={() => { setIsOpen(false); onOpenSettings(); }} className="text-3xl font-display text-white hover:text-karyo-cyan transition-colors">Settings</button>
            <button onClick={() => { setIsOpen(false); onOpenBooking(); }} className="text-3xl font-display text-karyo-cyan">Start Project</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isApiKeyOpen, setIsApiKeyOpen] = useState(false);

  return (
    <main className="bg-karyo-black min-h-screen text-white selection:bg-white selection:text-black">
      <Cursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} onOpenSettings={() => setIsApiKeyOpen(true)} />
      <Hero onStartProject={() => setIsBookingOpen(true)} />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Contact onBookCall={() => setIsBookingOpen(true)} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApiKeyModal isOpen={isApiKeyOpen} onClose={() => setIsApiKeyOpen(false)} />
    </main>
  );
};

export default App;
