import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import api from '../config/axiosConfig';

type AxiosArgs = {
  url: string;
  method?: AxiosRequestConfig['method'];
  data?: unknown;
  params?: unknown;
};

type AxiosBaseQueryError = {
  status?: number;
  message: string;
};

const axiosBaseQuery: BaseQueryFn<AxiosArgs, unknown, AxiosBaseQueryError> = async ({
  url,
  method = 'GET',
  data,
  params,
}) => {
  try {
    const result = await api({ url, method, data, params });
    return { data: result.data };
  } catch (err) {
    const error = err as AxiosError;
    return {
      error: {
        status: error.response?.status,
        message: error.message,
      },
    };
  }
};

export default axiosBaseQuery;
