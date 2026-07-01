import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BilingualText, Flashcard as FlashcardType } from '../types';
import { useAppContext } from '../context/AppContext';
import { RefreshCcw } from 'lucide-react';

interface Props {
  flashcards: FlashcardType[];
}

export const Flashcards: React.FC<Props> = ({ flashcards }) => {
  const { language } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!flashcards || flashcards.length === 0) return null;

  const current = flashcards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  return (
    <div className="my-8 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
        <RefreshCcw className="w-5 h-5 text-sky-400" />
        {language === 'en' ? 'Flashcards' : 'Bilgi Kartları'}
      </h3>
      
      <div 
        className="relative w-full h-64 perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-[#1E293B] rounded-xl border border-slate-700 p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-lg">
            <span className="text-xs uppercase tracking-widest text-[#38BDF8] mb-4 font-bold">
              {language === 'en' ? 'Question' : 'Soru'}
            </span>
            <p className="text-base sm:text-lg text-white font-bold px-4">
              {current.question[language]}
            </p>
          </div>
          
          {/* Back */}
          <div 
            className="absolute w-full h-full bg-[#38BDF8]/10 rounded-xl border border-[#38BDF8]/30 p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-lg"
            style={{ transform: 'rotateX(180deg)' }}
          >
            <span className="text-xs uppercase tracking-widest text-[#38BDF8]/70 mb-4 font-bold">
              {language === 'en' ? 'Answer' : 'Cevap'}
            </span>
            <p className="text-base sm:text-lg text-[#38BDF8] font-bold px-4 overflow-y-auto">
              {current.answer[language]}
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <button 
          onClick={handlePrev}
          className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          {language === 'en' ? 'Previous' : 'Önceki'}
        </button>
        <span className="text-xs font-mono text-slate-500">
          {currentIndex + 1} / {flashcards.length}
        </span>
        <button 
          onClick={handleNext}
          className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          {language === 'en' ? 'Next' : 'Sonraki'}
        </button>
      </div>
    </div>
  );
};
