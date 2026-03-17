export interface Event {
  id: string;
  name: string;
  description: string;
  venue: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'paused' | 'archived' | 'draft';
  languages: string[];
  totalConversations: number;
  totalExhibitors: number;
  logo?: string;
  primaryColor: string;
  welcomeMessage: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'event_admin' | 'viewer';
  status: 'active' | 'inactive';
  avatar?: string;
  assignedEvents: string[];
  lastLogin: string;
  createdAt: string;
}

export interface ConversationStat {
  date: string;
  conversations: number;
  messages: number;
  uniqueUsers: number;
}

export interface TopQuery {
  query: string;
  count: number;
  category: string;
}

export interface LanguageStat {
  language: string;
  code: string;
  percentage: number;
  count: number;
}

export interface ExhibitorStat {
  name: string;
  searches: number;
  profileViews: number;
  queries: number;
}

export interface ExportRecord {
  id: string;
  type: 'conversations' | 'analytics' | 'queries' | 'exhibitor' | 'unanswered';
  format: 'csv' | 'excel' | 'pdf';
  dateRange: string;
  eventName: string;
  status: 'completed' | 'processing' | 'failed';
  fileSize: string;
  createdAt: string;
  createdBy: string;
}

export interface KPIData {
  label: string;
  value: string | number;
  change: number;
  changeLabel: string;
  icon: string;
}

export interface RecentConversation {
  id: string;
  user: string;
  query: string;
  response: string;
  language: string;
  timestamp: string;
  satisfied: boolean | null;
}

export interface OverviewStats {
  totalConversations: number;
  totalConversationsGrowth: number;
  activeEvents: number;
  activeEventsGrowth: number;
  responseAccuracy: number;
  responseAccuracyGrowth: number;
  avgResponseTime: number;
  avgResponseTimeGrowth: number;
}

export interface CoverageTopic {
  topic: string;
  coverage: number;
  accuracy: number;
}
