import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: '1', quote: "KĀRYO transformed our abstract idea into a powerful, tangible digital presence that investors loved.", author: "Elena R.", company: "NeoFin Tech" },
  { id: '2', quote: "The level of strategic depth combined with world-class execution is rare. They don't just design, they solve.", author: "Marcus C.", company: "Aether Systems" },
  { id: '3', quote: "Our conversion rates doubled after the rebrand. The ROI on their work has been undeniable.", author: "Sarah L.", company: "GrowthScale" },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
       <div className="container mx-auto px-6 max-w-4xl text-center">
         <span className="text-karyo-cyan text-xs font-bold tracking-[0.2em] uppercase block mb-12 opacity-80">
           Client Impact
         </span>
         
         <div className="relative min-h-[200px] flex items-center justify-center">
           <AnimatePresence mode="wait">
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="relative p-8 md:p-12 border border-white/10 rounded-2xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.02)]"
             >
               <div className="text-2xl md:text-3xl font-display font-light leading-relaxed text-white mb-8">
                 "{testimonials[index].quote}"
               </div>
               
               <div className="flex flex-col items-center">
                 <span className="text-white font-bold text-lg">{testimonials[index].author}</span>
                 <span className="text-gray-500 text-sm">{testimonials[index].company}</span>
               </div>
               
               {/* Progress bar */}
               <motion.div 
                 key={`progress-${index}`}
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: 1 }}
                 transition={{ duration: 6, ease: "linear" }}
                 className="absolute bottom-0 left-0 h-[2px] bg-white/20 w-full origin-left"
               />
             </motion.div>
           </AnimatePresence>
         </div>
       </div>
    </section>
  );
};
