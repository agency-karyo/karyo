import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  { id: '1', title: 'Neon Horizon', category: 'Web Experience', image: 'https://picsum.photos/id/12/800/600', year: '2024' },
  { id: '2', title: 'Aether Core', category: 'Brand Identity', image: 'https://picsum.photos/id/28/800/600', year: '2024' },
  { id: '3', title: 'Cyber Pulse', category: 'Mobile App', image: 'https://picsum.photos/id/48/800/600', year: '2023' },
  { id: '4', title: 'Void Runner', category: '3D Game', image: 'https://picsum.photos/id/64/800/600', year: '2023' },
];

export const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-black relative" id="work">
      <div className="container mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
          <span className="text-karyo-cyan text-xs font-bold tracking-[0.2em] uppercase block mb-4">Selected Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">We Build Legacy</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider">
          All Projects <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-24 pb-12 no-scrollbar snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center group cursor-pointer"
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.4 }}
            data-hover-text="View Case"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-6 bg-gray-900">
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            
            {/* Content */}
            <div className="flex justify-between items-end border-b border-white/10 pb-6 group-hover:border-white/30 transition-colors">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white font-display mb-1">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </div>
              <span className="text-gray-600 font-mono text-xs border border-white/5 px-3 py-1 rounded-full group-hover:border-white/20 transition-colors">
                {project.year}
              </span>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer for end of scroll */}
        <div className="w-6 md:w-24 flex-shrink-0" />
      </div>
    </section>
  );
};
