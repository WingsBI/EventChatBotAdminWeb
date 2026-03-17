import type {
  Event, User, ConversationStat, TopQuery, LanguageStat,
  ExhibitorStat, ExportRecord, KPIData, RecentConversation,
  CoverageTopic,
} from '../types';

// ── KPI Data ──
export const kpiData: KPIData[] = [
  { label: 'Total Conversations', value: '12,847', change: 12.5, changeLabel: 'vs last month', icon: 'chat' },
  { label: 'Active Events', value: 8, change: 2, changeLabel: 'new this month', icon: 'event' },
  { label: 'Response Accuracy', value: '94.2%', change: 1.8, changeLabel: 'vs last month', icon: 'accuracy' },
  { label: 'Avg Response Time', value: '1.2s', change: -0.3, changeLabel: 'vs last month', icon: 'speed' },
];

// ── Conversations Over Time ──
export const conversationStats: ConversationStat[] = [
  { date: '2026-03-01', conversations: 320, messages: 1240, uniqueUsers: 180 },
  { date: '2026-03-02', conversations: 410, messages: 1580, uniqueUsers: 220 },
  { date: '2026-03-03', conversations: 380, messages: 1420, uniqueUsers: 200 },
  { date: '2026-03-04', conversations: 520, messages: 2100, uniqueUsers: 310 },
  { date: '2026-03-05', conversations: 490, messages: 1900, uniqueUsers: 280 },
  { date: '2026-03-06', conversations: 610, messages: 2400, uniqueUsers: 350 },
  { date: '2026-03-07', conversations: 580, messages: 2200, uniqueUsers: 330 },
  { date: '2026-03-08', conversations: 450, messages: 1700, uniqueUsers: 260 },
  { date: '2026-03-09', conversations: 390, messages: 1500, uniqueUsers: 210 },
  { date: '2026-03-10', conversations: 670, messages: 2600, uniqueUsers: 380 },
  { date: '2026-03-11', conversations: 720, messages: 2800, uniqueUsers: 410 },
];

// ── Analytics Conversations Over Time ──
export const analyticsConversationStats: ConversationStat[] = [
  { date: '2026-03-01', conversations: 420, messages: 1540, uniqueUsers: 280 },
  { date: '2026-03-02', conversations: 510, messages: 1880, uniqueUsers: 320 },
  { date: '2026-03-03', conversations: 480, messages: 1720, uniqueUsers: 300 },
  { date: '2026-03-04', conversations: 620, messages: 2400, uniqueUsers: 410 },
  { date: '2026-03-05', conversations: 590, messages: 2200, uniqueUsers: 380 },
  { date: '2026-03-06', conversations: 710, messages: 2700, uniqueUsers: 450 },
  { date: '2026-03-07', conversations: 680, messages: 2500, uniqueUsers: 430 },
  { date: '2026-03-08', conversations: 550, messages: 2000, uniqueUsers: 360 },
  { date: '2026-03-09', conversations: 490, messages: 1800, uniqueUsers: 310 },
  { date: '2026-03-10', conversations: 770, messages: 2900, uniqueUsers: 480 },
  { date: '2026-03-11', conversations: 820, messages: 3100, uniqueUsers: 510 },
];

// ── Top Queries ──
export const topQueries: TopQuery[] = [
  { query: 'What time does build-up start?', count: 342, category: 'Schedule' },
  { query: 'Where is Hall B?', count: 287, category: 'Directions' },
  { query: 'Stand design submission deadline?', count: 234, category: 'Deadlines' },
  { query: 'Fire safety requirements?', count: 198, category: 'Safety' },
  { query: 'AV equipment rental?', count: 176, category: 'Equipment' },
  { query: 'Wi-Fi access for exhibitors?', count: 154, category: 'IT' },
  { query: 'Parking availability?', count: 143, category: 'Logistics' },
  { query: 'Stand height restrictions?', count: 132, category: 'Regulations' },
];

// ── Language Distribution ──
export const languageStats: LanguageStat[] = [
  { language: 'English', code: 'en', percentage: 45, count: 5781 },
  { language: 'Hindi', code: 'hi', percentage: 18, count: 2312 },
  { language: 'French', code: 'fr', percentage: 12, count: 1542 },
  { language: 'German', code: 'de', percentage: 10, count: 1285 },
  { language: 'Arabic', code: 'ar', percentage: 8, count: 1028 },
  { language: 'Spanish', code: 'es', percentage: 5, count: 642 },
  { language: 'Japanese', code: 'ja', percentage: 2, count: 257 },
];

// ── Analytics Language Distribution ──
export const analyticsLanguageStats: LanguageStat[] = [
  { language: 'English', code: 'en', percentage: 55, count: 8781 },
  { language: 'Hindi', code: 'hi', percentage: 15, count: 2112 },
  { language: 'French', code: 'fr', percentage: 10, count: 1442 },
  { language: 'Mandarin', code: 'zh', percentage: 8, count: 1185 },
  { language: 'Spanish', code: 'es', percentage: 7, count: 942 },
  { language: 'Arabic', code: 'ar', percentage: 5, count: 642 },
];

// ── Events ──
export const events: Event[] = [
  {
    id: 'evt-001', name: 'Gastech 2026', description: 'The world\'s largest gas & energy event',
    venue: 'Fiera Milano, Italy', startDate: '2026-09-15', endDate: '2026-09-18',
    status: 'active', languages: ['en', 'hi', 'fr', 'de', 'ar'],
    totalConversations: 8420, totalExhibitors: 350,
    primaryColor: '#6366f1', welcomeMessage: 'Welcome to Gastech 2026! How can I help?',
    createdAt: '2026-01-15',
  },
  {
    id: 'evt-002', name: 'ADIPEC 2026', description: 'Abu Dhabi International Petroleum Exhibition',
    venue: 'ADNEC, Abu Dhabi', startDate: '2026-11-04', endDate: '2026-11-07',
    status: 'draft', languages: ['en', 'ar'],
    totalConversations: 0, totalExhibitors: 200,
    primaryColor: '#10b981', welcomeMessage: 'Welcome to ADIPEC! Ask me anything.',
    createdAt: '2026-02-20',
  },
  {
    id: 'evt-003', name: 'World Future Energy Summit', description: 'Global platform for future energy',
    venue: 'ADNEC, Abu Dhabi', startDate: '2026-01-20', endDate: '2026-01-22',
    status: 'archived', languages: ['en', 'ar', 'fr'],
    totalConversations: 4200, totalExhibitors: 180,
    primaryColor: '#f59e0b', welcomeMessage: 'Hello! Welcome to WFES.',
    createdAt: '2025-10-01',
  },
  {
    id: 'evt-004', name: 'Tech Connect Asia', description: 'Technology exhibition across Asia',
    venue: 'Marina Bay Sands, Singapore', startDate: '2026-06-10', endDate: '2026-06-12',
    status: 'active', languages: ['en', 'ja', 'hi'],
    totalConversations: 3100, totalExhibitors: 120,
    primaryColor: '#ec4899', welcomeMessage: 'Welcome to Tech Connect Asia!',
    createdAt: '2026-01-05',
  },
  {
    id: 'evt-005', name: 'DMG Expo Frankfurt', description: 'Industrial machinery showcase',
    venue: 'Messe Frankfurt, Germany', startDate: '2026-04-08', endDate: '2026-04-11',
    status: 'paused', languages: ['en', 'de', 'fr'],
    totalConversations: 1250, totalExhibitors: 90,
    primaryColor: '#8b5cf6', welcomeMessage: 'Willkommen! How can I assist you?',
    createdAt: '2025-12-10',
  },
];

// ── Users ──
export const users: User[] = [
  { id: 'usr-001', name: 'Rajesh Kumar', email: 'rajesh@wingsbi.com', role: 'super_admin', status: 'active', assignedEvents: ['evt-001', 'evt-002', 'evt-003', 'evt-004', 'evt-005'], lastLogin: '2026-03-11T10:30:00', createdAt: '2025-06-01' },
  { id: 'usr-002', name: 'Sarah Chen', email: 'sarah@dmgevents.com', role: 'event_admin', status: 'active', assignedEvents: ['evt-001', 'evt-003'], lastLogin: '2026-03-10T14:20:00', createdAt: '2025-08-15' },
  { id: 'usr-003', name: 'Ahmed Al-Rashid', email: 'ahmed@adnec.ae', role: 'event_admin', status: 'active', assignedEvents: ['evt-002'], lastLogin: '2026-03-09T09:00:00', createdAt: '2025-09-20' },
  { id: 'usr-004', name: 'Maria Fernández', email: 'maria@expogroup.com', role: 'viewer', status: 'active', assignedEvents: ['evt-004'], lastLogin: '2026-03-08T16:45:00', createdAt: '2025-11-10' },
  { id: 'usr-005', name: 'Hans Weber', email: 'hans@messefrankfurt.de', role: 'event_admin', status: 'inactive', assignedEvents: ['evt-005'], lastLogin: '2026-02-28T11:00:00', createdAt: '2025-12-01' },
];

// ── Exhibitor Stats ──
export const exhibitorStats: ExhibitorStat[] = [
  { name: 'Shell Energy', searches: 452, profileViews: 320, queries: 180 },
  { name: 'TotalEnergies', searches: 380, profileViews: 275, queries: 156 },
  { name: 'Siemens Energy', searches: 345, profileViews: 248, queries: 134 },
  { name: 'Baker Hughes', searches: 310, profileViews: 220, queries: 112 },
  { name: 'Honeywell UOP', searches: 285, profileViews: 198, queries: 96 },
  { name: 'Schneider Electric', searches: 260, profileViews: 185, queries: 88 },
];

// ── Export Records ──
export const exportRecords: ExportRecord[] = [
  { id: 'exp-001', type: 'conversations', format: 'csv', dateRange: 'Mar 1-10, 2026', eventName: 'Gastech 2026', status: 'completed', fileSize: '2.4 MB', createdAt: '2026-03-11T10:00:00', createdBy: 'Rajesh Kumar' },
  { id: 'exp-002', type: 'analytics', format: 'pdf', dateRange: 'Feb 2026', eventName: 'Gastech 2026', status: 'completed', fileSize: '1.1 MB', createdAt: '2026-03-01T09:00:00', createdBy: 'Sarah Chen' },
  { id: 'exp-003', type: 'unanswered', format: 'excel', dateRange: 'Mar 1-11, 2026', eventName: 'Tech Connect Asia', status: 'processing', fileSize: '-', createdAt: '2026-03-11T16:30:00', createdBy: 'Rajesh Kumar' },
  { id: 'exp-004', type: 'exhibitor', format: 'csv', dateRange: 'Jan-Mar 2026', eventName: 'WFES', status: 'completed', fileSize: '890 KB', createdAt: '2026-03-05T12:00:00', createdBy: 'Ahmed Al-Rashid' },
];

// ── Recent Conversations ──
export const recentConversations: RecentConversation[] = [
  { id: 'conv-001', user: 'Visitor #4821', query: 'What time does build-up start?', response: 'Build-up begins on September 13th at 8:00 AM...', language: 'English', timestamp: '2026-03-11T16:45:00', satisfied: true },
  { id: 'conv-002', user: 'Visitor #4820', query: 'मेरे स्टैंड की ऊँचाई सीमाएँ क्या हैं?', response: 'आपके स्टैंड की ऊँचाई से संबंधित नियम...', language: 'Hindi', timestamp: '2026-03-11T16:42:00', satisfied: true },
  { id: 'conv-003', user: 'Visitor #4819', query: 'Où se trouve le Hall B?', response: 'Le Hall B est situé au niveau...', language: 'French', timestamp: '2026-03-11T16:38:00', satisfied: null },
  { id: 'conv-004', user: 'Visitor #4818', query: 'Fire safety requirements for my stand?', response: 'All stands must comply with Italian fire regulations...', language: 'English', timestamp: '2026-03-11T16:35:00', satisfied: true },
  { id: 'conv-005', user: 'Visitor #4817', query: 'كيف يمكنني حجز موقف سيارات؟', response: 'يمكنك حجز موقف سيارات عبر...', language: 'Arabic', timestamp: '2026-03-11T16:30:00', satisfied: false },
];

// ── Dashboard Extra Data ──
export const adoptionFunnel = [
  { stage: 'Eligible Exhibitors', count: 1240 },
  { stage: 'Portal Visitors', count: 1118 },
  { stage: 'Chatbot Opened', count: 876 },
  { stage: 'Asked ≥1 Question', count: 821 },
  { stage: 'Resolved ≥1 Query', count: 742 },
  { stage: 'Repeat Users', count: 488 }
];

export const adoptionSegments = [
  { segment: "Small Stands", eligible: 420, users: 262, adoption: 62.4, avgConv: 3.8, repeat: 41.2 },
  { segment: "Medium Stands", eligible: 398, users: 292, adoption: 73.4, avgConv: 4.7, repeat: 54.8 },
  { segment: "Premium Exhibitors", eligible: 214, users: 176, adoption: 82.2, avgConv: 6.1, repeat: 66.4 },
  { segment: "Country Pavilions", eligible: 98, users: 83, adoption: 84.7, avgConv: 5.3, repeat: 61.4 },
  { segment: "Co-exhibitors", eligible: 110, users: 63, adoption: 57.3, avgConv: 2.9, repeat: 34.9 }
];

export const standTypeAdoption = [
  { type: "Shell Scheme", users: 328 },
  { type: "Raw Space", users: 211 },
  { type: "Co-exhibitor", users: 63 },
  { type: "Startup Zone", users: 109 },
  { type: "Country Pavilion", users: 83 },
  { type: "Hosted Pavilion", users: 82 }
];

export const userRetention = [
  { type: 'New Users', count: 388 },
  { type: 'Repeat Users', count: 488 }
];

export const sessionMetrics = [
  { label: "Average messages / session", value: "6.8" },
  { label: "Median session duration", value: "4m 12s" },
  { label: "Average first response time", value: "2.3s" },
  { label: "Repeat session interval", value: "2.1 days" },
  { label: "Sessions with attachments / links clicked", value: "38.5%" }
];

export const sourceUsage = [
  { source: "Dashboard Widget", users: 1462 },
  { source: "Order Forms Page", users: 1038 },
  { source: "Profile Wizard", users: 676 },
  { source: "Deadline Calendar", users: 481 },
  { source: "FAQ / Help Center", users: 402 },
  { source: "Badging Module", users: 227 }
];

export const intentOutcome = [
  { intent: "Form Deadlines", conversations: 892, success: 754, unsuccessful: 54 },
  { intent: "Order Forms", conversations: 746, success: 518, unsuccessful: 92 },
  { intent: "Stand Rules", conversations: 522, success: 422, unsuccessful: 38 },
  { intent: "Badging / Staff Pass", conversations: 501, success: 376, unsuccessful: 66 },
  { intent: "Participation / Visa Letters", conversations: 438, success: 323, unsuccessful: 49 },
  { intent: "Move-in / Logistics", conversations: 401, success: 272, unsuccessful: 71 },
  { intent: "Profile / Products", conversations: 366, success: 275, unsuccessful: 36 },
  { intent: "General Event Info", conversations: 420, success: 264, unsuccessful: 34 }
];

export const feedbackSentiment = [
  { type: 'Positive', count: 72 },
  { type: 'Neutral', count: 18 },
  { type: 'Negative', count: 10 }
];

export const escalations = [
  { reason: "Policy exception / approval needed", count: 126 },
  { reason: "Missing knowledge article", count: 104 },
  { reason: "Complex logistics query", count: 88 },
  { reason: "Form-specific technical issue", count: 61 },
  { reason: "Language / context ambiguity", count: 34 },
  { reason: "User requested live support", count: 27 }
];

export const knowledgeSources = [
  { source: "Exhibitor Manual - General Information", answered: 918, coverage: 91, updated: "15 Jan 2026" },
  { source: "Order Forms & Utilities Guide", answered: 842, coverage: 84, updated: "22 Jan 2026" },
  { source: "Move-in / Move-out Logistics PDF", answered: 516, coverage: 71, updated: "11 Jan 2026" },
  { source: "Badging & Access Rules", answered: 472, coverage: 78, updated: "19 Jan 2026" },
  { source: "Participation / Visa Letter Article", answered: 351, coverage: 74, updated: "08 Jan 2026" },
  { source: "Stand Design / Fascia / Graphics Policy", answered: 299, coverage: 68, updated: "03 Jan 2026" },
  { source: "FAQ - Miscellaneous", answered: 268, coverage: 63, updated: "25 Jan 2026" }
];

export const coverageTopics: CoverageTopic[] = [
  { topic: "General Event Info", coverage: 91, accuracy: 94 },
  { topic: "Deadlines", coverage: 89, accuracy: 92 },
  { topic: "Order Forms", coverage: 82, accuracy: 88 },
  { topic: "Badge / Pass Rules", coverage: 76, accuracy: 84 },
  { topic: "Participation / Visa Letters", coverage: 73, accuracy: 81 },
  { topic: "Stand Design Rules", coverage: 69, accuracy: 77 },
  { topic: "Move-in Logistics", coverage: 66, accuracy: 74 },
  { topic: "Exception Handling", coverage: 51, accuracy: 62 }
];

export const opsImpact = [
  { dept: "Exhibitor Services", impact: 34 },
  { dept: "Operations", impact: 27 },
  { dept: "Registration", impact: 16 },
  { dept: "Logistics", impact: 12 },
  { dept: "Marketing", impact: 7 },
  { dept: "Finance", impact: 4 }
];

export const actionLog = [
  { title: "Operations team updated rigging exception policy", meta: "Triggered by 48 unanswered queries • 29 Jan 2026" },
  { title: "Arabic FAQ expansion approved", meta: "Triggered by multilingual retrieval review • 28 Jan 2026" },
  { title: "Order form widget promoted on main dashboard", meta: "Expected to improve adoption before final deadline • 27 Jan 2026" },
  { title: "Badging entitlement article rewritten", meta: "Targeting 39 unresolved conversations • 26 Jan 2026" },
  { title: "Logistics support escalation SOP added", meta: "For complex move-in and forklift requests • 25 Jan 2026" }
];

export const unansweredGaps = [
  { q: "Can I submit custom rigging layout after the deadline if venue approval is pending?", gap: "Special exception workflow missing from knowledge base", count: 48 },
  { q: "How do I order additional forklift time for country pavilion shared unloading?", gap: "Service ordering scenario not documented clearly", count: 44 },
  { q: "My co-exhibitor badge entitlement is incorrect. Who approves the revision?", gap: "Approval matrix not mapped into chatbot response", count: 39 },
  { q: "Can we replace the fascia name after graphics deadline if the legal entity changed?", gap: "Post-deadline brand/name change policy unclear", count: 31 },
  { q: "Which PDF form is mandatory for chilled storage exhibitor categories?", gap: "Sector-specific form mapping absent", count: 28 }
];
