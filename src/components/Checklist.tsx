import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { BilingualText } from '../types';
import { CheckSquare } from 'lucide-react';
import { cn } from './Sidebar';

interface Props {
  topicId: string;
  checklist: BilingualText[];
}

export const Checklist: React.FC<Props> = ({ topicId, checklist }) => {
  const { language } = useAppContext();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`checklist_${topicId}`);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, [topicId]);

  const toggleItem = (index: number) => {
    const newChecked = checkedItems.includes(index)
      ? checkedItems.filter((i) => i !== index)
      : [...checkedItems, index];
    
    setCheckedItems(newChecked);
    localStorage.setItem(`checklist_${topicId}`, JSON.stringify(newChecked));
  };

  if (!checklist || checklist.length === 0) return null;

  return (
    <div className="p-6 bg-[#1E293B] rounded-xl border border-slate-700/50">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <CheckSquare className="w-5 h-5 text-[#22C55E]" />
        {language === 'en' ? 'Interview Checklist' : 'Mülakat Kontrol Listesi'}
      </h3>
      <div className="space-y-3">
        {checklist.map((item, index) => {
          const isChecked = checkedItems.includes(index);
          return (
            <label 
              key={index}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center mt-0.5">
                <input 
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(index)}
                  className="peer sr-only"
                />
                <div className={cn(
                  "w-5 h-5 rounded border-2 transition-colors flex items-center justify-center",
                  isChecked 
                    ? "bg-[#22C55E] border-[#22C55E]" 
                    : "border-slate-600 group-hover:border-slate-500"
                )}>
                  {isChecked && (
                    <svg className="w-3.5 h-3.5 text-[#0F172A] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
              </div>
              <span className={cn(
                "text-sm font-medium transition-colors",
                isChecked ? "text-slate-500 line-through" : "text-slate-300"
              )}>
                {item[language]}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
