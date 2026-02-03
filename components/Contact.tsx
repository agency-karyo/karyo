import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ContactProps {
  onBookCall: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBookCall }) => {
  return (
    <section className="py-32 bg-karyo-black relative overflow-hidden" id="contact">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8">
            Have an idea? <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">We'll make it happen.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <button 
              onClick={onBookCall}
              data-hover-text="Schedule"
              className="px-10 py-5 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Book a Call
            </button>
            
            <a 
              href="mailto:hello@karyo.agency"
              data-hover-text="Email Us"
              className="group flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm uppercase tracking-widest transition-colors"
            >
              Email Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
