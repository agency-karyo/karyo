import React, { useState, useEffect } from 'react';
import { X, Key, Save, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState<'idle' | 'saved'>('idle');

  useEffect(() => {
    // Load existing key if available
    const storedKey = localStorage.getItem('GEMINI_API_KEY');
    if (storedKey) setApiKey(storedKey);
  }, [isOpen]);

  const handleSave = () => {
    if (!apiKey.trim()) return;
    localStorage.setItem('GEMINI_API_KEY', apiKey.trim());
    setStatus('saved');
    setTimeout(() => {
        setStatus('idle');
        onClose();
        // reload to ensure services pick up the new key if they are not reactive
        window.location.reload(); 
    }, 1000);
  };

  const handleClear = () => {
      localStorage.removeItem('GEMINI_API_KEY');
      setApiKey('');
      setStatus('idle');
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center -ml-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl mx-4"
                onClick={(e) => e.stopPropagation()}
            >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-karyo-cyan/10 rounded-lg">
                  <Key className="w-6 h-6 text-karyo-cyan" />
                </div>
                <h2 className="text-xl font-display font-medium">Configure API Key</h2>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-white/5">
                <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-karyo-cyan shrink-0 mt-0.5"/>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        To use the AI features of this project, you need a Gemini API Key. 
                        Your key is stored locally in your browser and is never sent to our servers.
                    </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Gemini API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Paste your API key here..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-karyo-cyan/50 focus:ring-1 focus:ring-karyo-cyan/50 transition-all font-mono text-sm"
                />
              </div>

              <div className="flex gap-3 mt-2">
                {apiKey && (
                    <button
                        onClick={handleClear}
                         className="px-4 py-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors"
                    >
                        Clear
                    </button>
                )}
                <button
                  onClick={handleSave}
                  disabled={!apiKey.trim()}
                  className="flex-1 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2.5 rounded-lg font-bold text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2"
                >
                  {status === 'saved' ? 'Saved!' : 'Save Configuration'}
                  {status !== 'saved' && <Save className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-center text-xs text-gray-600">
                Don't have a key? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-karyo-cyan hover:underline">Get one from Google AI Studio</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
