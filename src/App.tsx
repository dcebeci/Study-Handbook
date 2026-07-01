import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TopicView } from './components/TopicView';
import { QuizView } from './components/Quiz';
import { InterviewSimulation } from './components/InterviewSimulation';
import { Micro1InterviewMode } from './components/Micro1/Micro1InterviewMode';
import { BookOpen, HelpCircle, Mic, BrainCircuit } from 'lucide-react';

const MainContent = () => {
  const { viewMode, setViewMode, language } = useAppContext();

  return (
    <div className="flex h-screen bg-[#0F172A] text-slate-200 overflow-hidden font-sans select-none">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        <Navbar />
        
        {/* View Mode Switcher */}
        <div className="bg-[#0F172A] border-b border-slate-800 p-2 flex justify-center shrink-0">
          <div className="flex bg-[#1E293B] p-1 rounded-lg border border-slate-700 overflow-x-auto">
            <button
              onClick={() => setViewMode('read')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded text-sm font-semibold transition-colors whitespace-nowrap ${
                viewMode === 'read' ? 'bg-[#38BDF8] text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              {language === 'en' ? 'Study' : 'Çalış'}
            </button>
            <button
              onClick={() => setViewMode('quiz')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded text-sm font-semibold transition-colors whitespace-nowrap ${
                viewMode === 'quiz' ? 'bg-[#38BDF8] text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              {language === 'en' ? 'Quiz' : 'Test'}
            </button>
            <button
              onClick={() => setViewMode('interview')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded text-sm font-semibold transition-colors whitespace-nowrap ${
                viewMode === 'interview' ? 'bg-[#38BDF8] text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Mic className="w-4 h-4" />
              {language === 'en' ? 'Flash Interview' : 'Hızlı Mülakat'}
            </button>
            <button
              onClick={() => setViewMode('micro1')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded text-sm font-semibold transition-colors whitespace-nowrap ${
                viewMode === 'micro1' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-indigo-400'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              micro1 Sim
            </button>
          </div>
        </div>

        {/* Dynamic View */}
        {viewMode === 'read' && <TopicView />}
        {viewMode === 'quiz' && <QuizView />}
        {viewMode === 'interview' && <InterviewSimulation />}
        {viewMode === 'micro1' && <Micro1InterviewMode />}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
