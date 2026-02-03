import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  { id: 1, title: 'Discover', description: 'Understanding your vision, users, and goals.' },
  { id: 2, title: 'Design', description: 'Visualizing the future with high-fidelity prototypes.' },
  { id: 3, title: 'Build', description: 'Clean, scalable code built on modern architectures.' },
  { id: 4, title: 'Launch', description: 'Rigorous testing and a high-impact deployment strategy.' },
  { id: 5, title: 'Scale', description: 'Data-driven optimization to ensure continuous growth.' },
];

export const Process: React.FC = () => {
  return (
    <section className="py-32 bg-[#05060A] relative overflow-hidden" id="process">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
           <span className="text-karyo-cyan text-xs font-bold tracking-[0.2em] uppercase block mb-4">Methodology</span>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-white">From Chaos to Clarity</h2>
        </div>

        <div className="max-w-3xl mx-auto relative pl-8 md:pl-0">
           {/* Vertical Line */}
           <div className="absolute left-0 md:left-[29px] top-0 bottom-0 w-[1px] bg-white/10">
              <motion.div 
                className="w-full bg-gradient-to-b from-karyo-cyan via-purple-500 to-transparent"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "linear" }}
              />
           </div>

           <div className="space-y-12">
             {steps.map((step, index) => (
               <motion.div 
                 key={step.id}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1 }}
                 viewport={{ margin: "-50px" }}
                 className="relative pl-12 md:pl-24 group"
               >
                 {/* Step Indicator */}
                 <div className="absolute left-[-5px] md:left-[24px] top-1 w-[11px] h-[11px] rounded-full bg-black border border-white/30 group-hover:border-karyo-cyan group-hover:scale-125 transition-all duration-300 z-10">
                    <div className="absolute inset-0 bg-karyo-cyan opacity-0 group-hover:opacity-100 rounded-full blur-[2px] transition-opacity" />
                 </div>
                 
                 <div className="border-l-2 border-transparent group-hover:border-white/5 pl-6 -ml-6 transition-all duration-300">
                    <span className="text-xs font-mono text-gray-600 mb-2 block">0{step.id}</span>
                    <h3 className="text-2xl font-bold text-white font-display mb-2 group-hover:text-karyo-cyan transition-colors">{step.title}</h3>
                    <p className="text-gray-400 max-w-md font-light">{step.description}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};
