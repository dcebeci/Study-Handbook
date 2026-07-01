import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { categories } from '../../data';
import { QA } from '../../types';
import { Mic, Eye, ArrowRight, BrainCircuit, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Micro1InterviewMode: React.FC = () => {
  const { language } = useAppContext();
  
  // Extract only detailed questions from all topics
  const detailedQuestions: QA[] = [];
  categories.forEach(cat => {
    cat.topics.forEach(topic => {
      if (topic.content.detailedQuestions) {
        detailedQuestions.push(...topic.content.detailedQuestions);
      }
    });
  });

  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  if (detailedQuestions.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-500">
        <p>No Micro1 interview questions available. Please add detailedQuestions to the data.</p>
      </div>
    );
  }

  const handleNext = () => {
    setShowAnswer(false);
    setUserAnswer('');
    setCurrentIdx((prev) => (prev + 1) % detailedQuestions.length);
  };

  const q = detailedQuestions[currentIdx];

  return (
    <div className="flex-1 overflow-y-auto bg-transparent text-slate-300">
      <div className="max-w-4xl mx-auto px-8 py-12 flex flex-col min-h-[80vh]">
        
        <div className="text-center mb-8 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl mb-4 border border-indigo-500/20">
            <BrainCircuit className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Micro1 AI Simulation
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            {language === 'en' 
              ? 'This mode simulates a rigorous senior-level AI interview. Type your answer to the prompt, then review the detailed grading rubric and evaluator insights.' 
              : 'Bu mod, zorlu bir kıdemli seviye AI mülakatını simüle eder. Soruya cevabınızı yazın, ardından ayrıntılı derecelendirme değerlendirmesini ve içgörüleri inceleyin.'}
          </p>
        </div>

        <div className="w-full">
          <div className="bg-[#1E293B] border border-slate-700/50 rounded-xl p-8 mb-6 shadow-xl">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 block">Question {currentIdx + 1} / {detailedQuestions.length}</span>
            <h3 className="text-2xl font-bold text-white leading-relaxed">
              {q.question[language]}
            </h3>
          </div>

          {!showAnswer ? (
            <div className="space-y-4 animate-in fade-in duration-300">
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder={language === 'en' ? 'Type your comprehensive answer here...' : 'Kapsamlı cevabınızı buraya yazın...'}
                className="w-full h-48 bg-[#0B0F1A] border border-slate-700 rounded-xl p-6 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-y text-lg"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => setShowAnswer(true)}
                  disabled={userAnswer.trim().length === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all disabled:opacity-50 shadow-lg shadow-indigo-900/20"
                >
                  <Activity className="w-5 h-5" />
                  {language === 'en' ? 'Submit to AI Evaluator' : 'Yapay Zeka Değerlendiricisine Gönder'}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              
              {/* Evaluator Rubric */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {q.interviewerEvaluating && (
                  <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6">
                    <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <BrainCircuit className="w-4 h-4" />
                      {language === 'en' ? 'What we are evaluating' : 'Neyi değerlendiriyoruz'}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{q.interviewerEvaluating[language]}</p>
                  </div>
                )}
                
                {q.commonMistakes && (
                  <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-6">
                    <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      {language === 'en' ? 'Common Candidate Mistakes' : 'Adayların Sık Yaptığı Hatalar'}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{q.commonMistakes[language]}</p>
                  </div>
                )}
              </div>

              {/* Excellent Answer */}
              {q.excellentAnswer && (
                <div className="bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#22C55E]"></div>
                  <h4 className="text-sm font-bold text-[#22C55E] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    {language === 'en' ? 'Excellent Senior Answer' : 'Mükemmel Kıdemli (Senior) Cevabı'}
                  </h4>
                  <p className="text-slate-200 text-lg leading-relaxed italic">
                    "{q.excellentAnswer[language]}"
                  </p>
                </div>
              )}

              {/* Standard Answer Fallback */}
              {!q.excellentAnswer && (
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {language === 'en' ? 'Standard Answer' : 'Standart Cevap'}
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{q.answer[language]}</p>
                </div>
              )}
              
              <div className="flex justify-center pt-8 border-t border-slate-800">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 bg-[#1E293B] hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-full transition-all hover:border-[#38BDF8]"
                >
                  {language === 'en' ? 'Next Simulation' : 'Sıradaki Simülasyon'}
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
