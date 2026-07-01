import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { categories } from '../data';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';
import { cn } from './Sidebar';
import { QuizQuestion } from '../types';

export const QuizView: React.FC = () => {
  const { activeTopicId, language } = useAppContext();
  
  if (!activeTopicId) return null;

  let activeTopic = null;
  for (const cat of categories) {
    const topic = cat.topics.find((t) => t.id === activeTopicId);
    if (topic) {
      activeTopic = topic;
      break;
    }
  }

  if (!activeTopic || !activeTopic.content.quiz || activeTopic.content.quiz.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-500">
        <p>{language === 'en' ? 'No quiz available for this topic.' : 'Bu konu için test bulunmuyor.'}</p>
      </div>
    );
  }

  const quiz = activeTopic.content.quiz;

  return (
    <div className="flex-1 overflow-y-auto bg-transparent text-slate-300">
      <div className="max-w-3xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 tracking-tight">
          <HelpCircle className="w-8 h-8 text-[#38BDF8]" />
          {language === 'en' ? 'Quiz Mode' : 'Test Modu'}: {activeTopic.title}
        </h2>

        <div className="space-y-12">
          {quiz.map((q, idx) => (
            <QuizItem key={idx} question={q} index={idx} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
};

const QuizItem: React.FC<{ question: QuizQuestion, index: number, language: 'en'|'tr' }> = ({ question, index, language }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selectedIdx === question.correctIndex;

  return (
    <div className="bg-[#1E293B] rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-lg font-bold text-white mb-6">
        <span className="text-[#38BDF8] font-mono mr-2">{index + 1}.</span>
        {question.question[language]}
      </h3>

      <div className="space-y-3">
        {question.options.map((opt, idx) => {
          let btnClass = "w-full text-left p-4 rounded-lg border transition-colors ";
          
          if (!submitted) {
            btnClass += selectedIdx === idx 
              ? "bg-[#38BDF8]/10 border-[#38BDF8] text-white" 
              : "bg-[#0B0F1A]/50 border-slate-700 hover:border-slate-500 text-slate-300";
          } else {
            if (idx === question.correctIndex) {
              btnClass += "bg-[#22C55E]/10 border-[#22C55E] text-[#22C55E]";
            } else if (idx === selectedIdx) {
              btnClass += "bg-[#EF4444]/10 border-[#EF4444] text-[#EF4444]";
            } else {
              btnClass += "bg-[#0B0F1A]/50 border-slate-800 text-slate-500 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              disabled={submitted}
              onClick={() => setSelectedIdx(idx)}
              className={btnClass}
            >
              <div className="flex items-center justify-between font-medium">
                <span>{opt[language]}</span>
                {submitted && idx === question.correctIndex && <CheckCircle className="w-5 h-5 text-[#22C55E]" />}
                {submitted && idx === selectedIdx && idx !== question.correctIndex && <XCircle className="w-5 h-5 text-[#EF4444]" />}
              </div>
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={selectedIdx === null}
          className="mt-6 flex items-center justify-center gap-2 px-6 py-2 bg-[#38BDF8] text-slate-900 font-bold rounded-md hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {language === 'en' ? 'Submit Answer' : 'Cevabı Gönder'}
        </button>
      ) : (
        <div className={cn(
          "mt-6 p-4 rounded-lg border",
          isCorrect ? "bg-[#22C55E]/10 border-[#22C55E]/30" : "bg-[#EF4444]/10 border-[#EF4444]/30"
        )}>
          <p className={cn("text-sm font-bold mb-1 uppercase tracking-widest", isCorrect ? "text-[#22C55E]" : "text-[#EF4444]")}>
            {isCorrect 
              ? (language === 'en' ? 'Correct' : 'Doğru') 
              : (language === 'en' ? 'Incorrect' : 'Yanlış')}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            {question.explanation[language]}
          </p>
        </div>
      )}
    </div>
  );
};
