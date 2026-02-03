import React from 'react';
import { motion } from 'framer-motion';
import { Box, Code, Cpu, Layers, Palette, Rocket } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: '1', title: 'Brand Identity', description: 'Visual systems that speak louder than words.', icon: 'Palette' },
  { id: '2', title: 'UI/UX Design', description: 'Immersive interfaces designed for conversion.', icon: 'Layers' },
  { id: '3', title: 'Web & App Dev', description: 'Performance-obsessed code using modern stacks.', icon: 'Code' },
  { id: '4', title: '3D Experiences', description: 'WebGL & Three.js integrations that wow.', icon: 'Box' },
  { id: '5', title: 'AI & Automation', description: 'Smart workflows to scale your operations.', icon: 'Cpu' },
  { id: '6', title: 'Digital Strategy', description: 'Data-driven roadmaps for market dominance.', icon: 'Rocket' },
];

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Box: <Box className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

export const Services: React.FC = () => {
  return (
    <section className="py-32 bg-karyo-black relative z-10 overflow-hidden" id="services">
      {/* Background Noise & Grain */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-karyo-cyan text-xs font-bold tracking-[0.2em] uppercase block mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight"
          >
            Capabilities designed for <br/>
            <span className="text-gray-500">the new era.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, zIndex: 10 }}
              className="group relative p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
              data-hover-text="Explore"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-8 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300 origin-left">
                {iconMap[service.icon]}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
