import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
import type { ConversationStat, LanguageStat, ExhibitorStat } from '../types';

export const analyticsApiSlice = createApi({
  reducerPath: 'analyticsApi',
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getAnalyticsConversationStats: builder.query<ConversationStat[], void>({
      query: () => ({ url: '/analytics-conversation-stats' }),
    }),
    getAnalyticsLanguageStats: builder.query<LanguageStat[], void>({
      query: () => ({ url: '/analytics-language-stats' }),
    }),
    getAnalyticsExhibitorStats: builder.query<ExhibitorStat[], void>({
      query: () => ({ url: '/analytics-exhibitor-stats' }),
    }),
  }),
});

export const {
  useGetAnalyticsConversationStatsQuery,
  useGetAnalyticsLanguageStatsQuery,
  useGetAnalyticsExhibitorStatsQuery,
} = analyticsApiSlice;
