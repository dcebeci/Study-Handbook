import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Theme, UserState, ProgressStatus, Topic } from '../types';
import { categories } from '../data';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  userState: UserState;
  updateProgress: (topicId: string, status: ProgressStatus) => void;
  updateNote: (topicId: string, note: string) => void;
  toggleFavorite: (topicId: string) => void;
  activeTopicId: string | null;
  setActiveTopicId: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: 'read' | 'quiz' | 'interview' | 'micro1';
  setViewMode: (mode: 'read' | 'quiz' | 'interview' | 'micro1') => void;
}

const defaultUserState: UserState = {
  progress: {},
  notes: {},
  favorites: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [userState, setUserState] = useState<UserState>(defaultUserState);
  const [activeTopicId, setActiveTopicId] = useState<string | null>(categories[0]?.topics[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'read' | 'quiz' | 'interview' | 'micro1'>('read');

  // Load from local storage
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('app_language') as Language;
      if (savedLang) setLanguage(savedLang);

      const savedTheme = localStorage.getItem('app_theme') as Theme;
      if (savedTheme) setTheme(savedTheme);

      const savedUserState = localStorage.getItem('app_userState');
      if (savedUserState) setUserState(JSON.parse(savedUserState));
    } catch (e) {
      console.error('Failed to load state from local storage', e);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('app_userState', JSON.stringify(userState));
  }, [userState]);

  const updateProgress = (topicId: string, status: ProgressStatus) => {
    setUserState((prev) => ({
      ...prev,
      progress: { ...prev.progress, [topicId]: status },
    }));
  };

  const updateNote = (topicId: string, note: string) => {
    setUserState((prev) => ({
      ...prev,
      notes: { ...prev.notes, [topicId]: note },
    }));
  };

  const toggleFavorite = (topicId: string) => {
    setUserState((prev) => {
      const isFav = prev.favorites.includes(topicId);
      return {
        ...prev,
        favorites: isFav
          ? prev.favorites.filter((id) => id !== topicId)
          : [...prev.favorites, topicId],
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        userState,
        updateProgress,
        updateNote,
        toggleFavorite,
        activeTopicId,
        setActiveTopicId,
        searchQuery,
        setSearchQuery,
        viewMode,
        setViewMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
