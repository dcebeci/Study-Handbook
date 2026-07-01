import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { categories } from '../data';
import { MermaidDiagram } from './MermaidDiagram';
import { Flashcards } from './Flashcards';
import { Checklist } from './Checklist';
import { Code, Server, CheckCircle, AlertTriangle, Lightbulb, Activity, Layers, PenTool, LayoutDashboard } from 'lucide-react';
import { cn } from './Sidebar';

export const TopicView: React.FC = () => {
  const { activeTopicId, language, userState, updateProgress, updateNote } = useAppContext();
  
  if (!activeTopicId) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-500 bg-slate-900">
        <LayoutDashboard className="w-16 h-16 mb-4 text-slate-700" />
        <p className="text-lg">
          {language === 'en' ? 'Select a topic to start studying.' : 'Çalışmaya başlamak için bir konu seçin.'}
        </p>
      </div>
    );
  }

  let activeTopic = null;
  let activeCategory = null;
  
  for (const cat of categories) {
    for (const topic of cat.topics) {
      if (topic.id === activeTopicId) {
        activeTopic = topic;
        activeCategory = cat;
        break;
      }
    }
    if (activeTopic) break;
  }

  if (!activeTopic) return null;

  const content = activeTopic.content;
  const currentProgress = userState.progress[activeTopic.id] || 'Not Started';
  const currentNote = userState.notes[activeTopic.id] || '';

  const Section = ({ title, contentStr, variant = 'solid' }: { title: string, contentStr: string, variant?: 'solid' | 'outline' }) => (
    <div className={cn("p-6 rounded-xl", variant === 'solid' ? "bg-[#1E293B] border border-slate-700/50" : "border border-slate-800")}>
      <div className={cn("mb-4", variant === 'solid' ? "flex items-center justify-between" : "")}>
        <h3 className={cn(variant === 'solid' ? "text-lg font-bold text-white" : "text-xs uppercase tracking-widest text-[#38BDF8] font-bold")}>{title}</h3>
        {variant === 'solid' && <span className="text-xs font-mono text-slate-500">{language.toUpperCase()}</span>}
      </div>
      <p className={cn("leading-relaxed", variant === 'solid' ? "text-slate-400 text-sm" : "text-sm italic text-slate-300")}>
        {contentStr}
      </p>
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto bg-transparent text-slate-300 flex flex-col">
      <header className="p-8 flex items-start justify-between shrink-0">
        <div>
          <nav className="text-xs text-slate-500 flex items-center gap-2 mb-2">
            <span>{activeCategory?.title}</span>
            <span>/</span>
            <span className="text-[#38BDF8]">{activeTopic.title}</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-white">{activeTopic.title}</h1>
          <div className="flex gap-3 mt-4">
            <span className={cn(
              "px-2 py-1 border text-[10px] font-bold rounded uppercase tracking-wider",
              activeTopic.difficulty === 'Beginner' ? 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20' : 
              activeTopic.difficulty === 'Intermediate' ? 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20' : 
              'bg-blue-500/10 text-blue-400 border-blue-500/20'
            )}>
              {activeTopic.difficulty}
            </span>
            {currentProgress !== 'Not Started' && (
              <span className="px-2 py-1 bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 text-[10px] font-bold rounded uppercase tracking-wider">
                {currentProgress}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <select
            value={currentProgress}
            onChange={(e) => updateProgress(activeTopic.id, e.target.value as any)}
            className="bg-[#1E293B] border border-slate-700 text-sm text-slate-300 rounded-md py-1.5 px-3 focus:outline-none focus:border-[#38BDF8] cursor-pointer"
          >
            <option value="Not Started">{language === 'en' ? 'Not Started' : 'Başlamadı'}</option>
            <option value="Studying">{language === 'en' ? 'Studying' : 'Çalışılıyor'}</option>
            <option value="Completed">{language === 'en' ? 'Completed' : 'Tamamlandı'}</option>
            <option value="Needs Revision">{language === 'en' ? 'Needs Revision' : 'Tekrar Edilmeli'}</option>
          </select>
        </div>
      </header>

      <div className="flex-1 px-8 pb-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-8 content-start">
        <div className="space-y-6">
          <Section title={language === 'en' ? 'Overview' : 'Genel Bakış'} contentStr={content.overview[language]} />
          <Section title={language === 'en' ? 'How does it work internally?' : 'İçeride nasıl çalışır?'} contentStr={content.howItWorks[language]} />
          <Section title={language === 'en' ? 'Common Mistakes' : 'Sık Yapılan Hatalar'} contentStr={content.commonMistakes[language]} variant="outline" />
        </div>

        <div className="space-y-6">
          <Section title={language === 'en' ? 'Why does it exist?' : 'Neden var?'} contentStr={content.whyExists[language]} />
          <Section title={language === 'en' ? 'Interview Answer' : 'Mülakat Cevabı'} contentStr={content.interviewAnswer[language]} variant="outline" />
          <Section title={language === 'en' ? 'Senior Level Insights' : 'Kıdemli (Senior) Seviye Yorum'} contentStr={content.seniorExplanation[language]} />
        </div>

        {content.codeExample && (
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-[#0B0F1A] border border-slate-800 rounded-xl p-6 font-mono text-xs overflow-hidden w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <span className="text-slate-600">{language === 'en' ? 'Code Example' : 'Kod Örneği'}</span>
              </div>
              <div className="overflow-x-auto">
                <pre className="text-slate-300 whitespace-pre-wrap break-words min-w-full"><code>{content.codeExample.code}</code></pre>
              </div>
            </div>
          </div>
        )}

        <div className="col-span-1 lg:col-span-2 space-y-8">
          <Section title={language === 'en' ? 'Real World Example' : 'Gerçek Dünya Örneği'} contentStr={content.realWorldExample[language]} />

          {content.mermaidDiagram && (
            <MermaidDiagram chart={content.mermaidDiagram} />
          )}

          {content.comparison && (
            <div className="p-6 bg-[#1E293B] rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{language === 'en' ? 'Comparison' : 'Karşılaştırma'}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-700 p-3 text-sm font-semibold">{language === 'en' ? 'Feature' : 'Özellik'}</th>
                      <th className="border-b border-slate-700 p-3 text-sm font-semibold text-[#38BDF8]">{content.comparison.conceptA}</th>
                      <th className="border-b border-slate-700 p-3 text-sm font-semibold text-[#F59E0B]">{content.comparison.conceptB}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.comparison.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                        <td className="p-3 text-sm font-medium text-slate-300">{row.feature[language]}</td>
                        <td className="p-3 text-sm text-slate-400">{row.conceptA[language]}</td>
                        <td className="p-3 text-sm text-slate-400">{row.conceptB[language]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Flashcards flashcards={content.flashcards} />
            </div>
            <div>
              <Checklist topicId={activeTopic.id} checklist={content.checklist} />
            </div>
          </div>

          {/* Personal Notes */}
          <div className="p-6 bg-[#1E293B] rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <PenTool className="w-4 h-4 text-[#38BDF8]" />
                {language === 'en' ? 'Personal Notes' : 'Kişisel Notlar'}
              </h3>
            </div>
            <textarea
              value={currentNote}
              onChange={(e) => updateNote(activeTopic.id, e.target.value)}
              placeholder={language === 'en' ? 'Write your notes here...' : 'Notlarınızı buraya yazın...'}
              className="w-full h-32 bg-[#0B0F1A] border border-slate-700 rounded-lg p-4 text-sm text-slate-300 focus:outline-none focus:border-[#38BDF8] transition-colors resize-y"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
