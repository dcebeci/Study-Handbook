export type Language = 'en' | 'tr';
export type Theme = 'dark' | 'light';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Senior';
export type ProgressStatus = 'Not Started' | 'Studying' | 'Completed' | 'Needs Revision';

export interface BilingualText {
  en: string;
  tr: string;
}

export interface CodeExample {
  language: string;
  code: string;
}

export interface QA {
  question: BilingualText;
  answer: BilingualText;
  // micro1 Detailed Fields
  beginnerExplanation?: BilingualText;
  midLevelExplanation?: BilingualText;
  seniorExplanation?: BilingualText;
  interviewerEvaluating?: BilingualText;
  commonMistakes?: BilingualText;
  excellentAnswer?: BilingualText;
  poorAnswer?: BilingualText;
  realWorldExample?: BilingualText;
  commonMisconceptions?: BilingualText;
  performanceConsiderations?: BilingualText;
}

export interface ComparisonRow {
  feature: BilingualText;
  conceptA: BilingualText;
  conceptB: BilingualText;
}

export interface Flashcard {
  question: BilingualText;
  answer: BilingualText;
}

export interface QuizQuestion {
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
}

export interface TopicContent {
  overview: BilingualText;
  whyExists: BilingualText;
  howItWorks: BilingualText;
  realWorldExample: BilingualText;
  codeExample?: CodeExample;
  interviewAnswer: BilingualText;
  seniorExplanation: BilingualText;
  commonQuestions: QA[];
  followUpQuestions: QA[];
  detailedQuestions?: QA[]; // For micro1 specific deep dives
  commonMistakes: BilingualText;
  bestPractices: BilingualText;
  performance: BilingualText;
  comparison?: {
    conceptA: string;
    conceptB: string;
    rows: ComparisonRow[];
  };
  mermaidDiagram?: string;
  summary: BilingualText;
  flashcards: Flashcard[];
  checklist: BilingualText[];
  quiz: QuizQuestion[];
}

export interface Topic {
  id: string;
  title: string; // The topic name in English, used as key
  categoryId: string;
  difficulty: Difficulty;
  content: TopicContent;
}

export interface Category {
  id: string;
  title: string;
  topics: Topic[];
}

export interface UserState {
  progress: Record<string, ProgressStatus>;
  notes: Record<string, string>;
  favorites: string[];
}

