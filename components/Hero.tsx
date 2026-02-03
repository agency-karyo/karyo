import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Scene } from './Scene';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-karyo-black">
      {/* 3D Background - Secondary Role */}
      <Scene />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo / Brand Name */}
          <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tight leading-none mb-6 text-white mix-blend-overlay opacity-90">
            KĀRYO
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-8 text-gray-400">
            We Make It Happen
          </h2>

          {/* Value Proposition */}
          <p className="font-sans text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed">
            We build digital impact through <span className="text-white font-medium">strategy</span>, <span className="text-white font-medium">design</span> & <span className="text-white font-medium">technology</span>.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={onStartProject}
              data-hover-text="Let's Talk"
              className="group relative px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a 
              href="#work"
              data-hover-text="See Case Studies"
              className="group px-10 py-4 border border-white/20 text-white font-medium text-sm uppercase tracking-wider rounded-full hover:bg-white/5 transition-all"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
