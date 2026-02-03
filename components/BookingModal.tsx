import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-karyo-purple/10 flex items-center justify-center text-karyo-purple">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Book a Discovery Call</h3>
                  <p className="text-sm text-gray-400">Let's discuss your vision.</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 h-[400px] flex flex-col items-center justify-center text-center space-y-4">
              {/* Placeholder for Calendar Embed */}
              <p className="text-gray-400 max-w-md">
                This would be where the Calendly or Cal.com iframe is embedded.
              </p>
              <div className="w-full max-w-sm h-12 bg-white/5 rounded animate-pulse" />
              <div className="w-full max-w-sm h-12 bg-white/5 rounded animate-pulse delay-75" />
              <div className="w-full max-w-sm h-12 bg-white/5 rounded animate-pulse delay-150" />
              
              <button className="mt-6 px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all">
                Open External Calendar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
