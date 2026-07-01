import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { categories } from '../data';
import { Mic, Eye, ArrowRight } from 'lucide-react';
import { QA } from '../types';
import { cn } from './Sidebar';

export const InterviewSimulation: React.FC = () => {
  const { language } = useAppContext();
  
  // Flatten all common and follow-up questions from all topics
  const allQuestions: QA[] = [];
  categories.forEach(cat => {
    cat.topics.forEach(topic => {
      allQuestions.push(...topic.content.commonQuestions);
      allQuestions.push(...topic.content.followUpQuestions);
    });
  });

  const [currentIdx, setCurrentIdx] = useState(Math.floor(Math.random() * allQuestions.length));
  const [showAnswer, setShowAnswer] = useState(false);

  if (allQuestions.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-500">
        <p>No interview questions available.</p>
      </div>
    );
  }

  const handleNext = () => {
    setShowAnswer(false);
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * allQuestions.length);
    } while (nextIdx === currentIdx && allQuestions.length > 1);
    setCurrentIdx(nextIdx);
  };

  const q = allQuestions[currentIdx];

  return (
    <div className="flex-1 overflow-y-auto bg-transparent text-slate-300">
      <div className="max-w-3xl mx-auto px-8 py-12 flex flex-col min-h-[80vh]">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-[#38BDF8]/10 rounded-full mb-6 border border-[#38BDF8]/20">
            <Mic className="w-8 h-8 text-[#38BDF8]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {language === 'en' ? 'Interview Simulation' : 'Mülakat Simülasyonu'}
          </h2>
          <p className="text-slate-400">
            {language === 'en' 
              ? 'Answer out loud, then check the suggested answer.' 
              : 'Sesli olarak cevaplayın, ardından önerilen cevabı kontrol edin.'}
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center max-w-2xl mx-auto w-full">
          <h3 className="text-2xl font-bold text-white text-center leading-relaxed mb-12">
            "{q.question[language]}"
          </h3>

          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[#1E293B] hover:bg-[#1E293B]/80 text-[#38BDF8] font-bold rounded-md transition-colors border border-slate-700 hover:border-[#38BDF8]"
            >
              <Eye className="w-5 h-5" />
              {language === 'en' ? 'Reveal Answer' : 'Cevabı Göster'}
            </button>
          ) : (
            <div className="w-full bg-[#1E293B] border border-slate-700/50 rounded-xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="text-xs uppercase tracking-widest text-[#22C55E] font-bold mb-4 block">
                {language === 'en' ? 'Suggested Answer' : 'Önerilen Cevap'}
              </span>
              <p className="text-lg text-slate-300 leading-relaxed italic mb-8">
                {q.answer[language]}
              </p>
              
              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-[#38BDF8] text-slate-900 font-bold rounded-md hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#38BDF8]/10"
                >
                  {language === 'en' ? 'Next Question' : 'Sıradaki Soru'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
