export type FlagType = 'red' | 'green';

export interface Flag {
  id: string;
  type: FlagType;
  title: string;
  description: string;
  icon?: string;
}

export type QuoteCategory = 'self-love' | 'relationships' | 'breakup' | 'wisdom';

export interface Quote {
  id: string;
  text: string;
  author: string;
  context?: string;
  category: QuoteCategory;
}

export interface Moment {
  range: string; // ex: "Mois 1-3" ou "Printemps"
  title: string;
  description: string;
  activity: string;
}

export interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
  moments: Moment[];
}

export interface QuizScenario {
  id: string;
  text: string;
  answer: FlagType;
  explanation: string;
}

export type ViewState = 'red' | 'green' | 'quotes' | 'anecdotes' | 'calendar' | 'quiz';