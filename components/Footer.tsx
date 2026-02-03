import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-display font-bold text-white tracking-tighter">KĀRYO</h2>
          <p className="text-gray-600 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
