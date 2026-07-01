import React from 'react';
import { useAppContext } from '../context/AppContext';
import { categories } from '../data';
import { BookOpen, CheckCircle, Circle, PlayCircle, Star, PenTool } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Sidebar: React.FC = () => {
  const { activeTopicId, setActiveTopicId, userState, searchQuery } = useAppContext();

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Studying': return <PlayCircle className="w-4 h-4 text-sky-400" />;
      case 'Needs Revision': return <PenTool className="w-4 h-4 text-amber-500" />;
      default: return <Circle className="w-4 h-4 text-slate-600" />;
    }
  };

  const filteredCategories = categories.map(cat => ({
    ...cat,
    topics: cat.topics.filter(topic => 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.topics.length > 0);

  return (
    <aside className="w-64 bg-[#0F172A] border-r border-slate-800 h-[calc(100vh-4rem)] overflow-y-auto hidden md:flex flex-col shrink-0">
      <div className="p-4 space-y-6 flex-1">
        {filteredCategories.map((category) => (
          <div key={category.id}>
            <h3 className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-3">
              {category.title}
            </h3>
            <ul className="space-y-1">
              {category.topics.map((topic) => {
                const isActive = activeTopicId === topic.id;
                return (
                  <li key={topic.id}>
                    <button
                      onClick={() => setActiveTopicId(topic.id)}
                      className={cn(
                        "w-full flex items-center justify-between text-left px-3 py-2 rounded-md text-sm transition-colors",
                        isActive
                          ? "bg-[#1E293B] text-[#38BDF8] font-medium" 
                          : "text-slate-400 hover:bg-slate-800 cursor-pointer"
                      )}
                    >
                      <div className="flex items-center gap-3 flex-1 truncate pr-2">
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full shrink-0",
                          isActive ? "bg-[#38BDF8]" : "bg-slate-600"
                        )}></span>
                        <span className="truncate">{topic.title}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {userState.favorites.includes(topic.id) && (
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        )}
                        {getStatusIcon(userState.progress[topic.id])}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-auto p-4 border-t border-slate-800 bg-[#0F172A] sticky bottom-0 z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {categories.reduce((acc, cat) => acc + cat.topics.filter(t => userState.progress[t.id] === 'Completed').length, 0)} / {categories.reduce((acc, cat) => acc + cat.topics.length, 0)} Completed
          </span>
          <span className="text-xs text-[#38BDF8]">
            {Math.round((categories.reduce((acc, cat) => acc + cat.topics.filter(t => userState.progress[t.id] === 'Completed').length, 0) / Math.max(1, categories.reduce((acc, cat) => acc + cat.topics.length, 0))) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
          <div 
            className="bg-[#38BDF8] h-full rounded-full transition-all" 
            style={{ width: `${Math.round((categories.reduce((acc, cat) => acc + cat.topics.filter(t => userState.progress[t.id] === 'Completed').length, 0) / Math.max(1, categories.reduce((acc, cat) => acc + cat.topics.length, 0))) * 100)}%` }}
          ></div>
        </div>
      </div>
    </aside>
  );
};
