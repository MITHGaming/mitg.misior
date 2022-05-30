import useSWR, { SWRConfiguration } from 'swr';
import axios from 'axios';
import env from '@/environment';

export const api = axios.create({
  baseURL: env.api.url,
});

const DEFAULT_OPTIONS = {
  errorRetryCount: 3,
  refreshWhenHidden: false,
  refreshWhenOffline: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: true,
};

export function useFetch<Data = any, Error = any>(
  url: string,
  body?: any,
  options?: SWRConfiguration,
) {
  const { data, error, mutate, isValidating } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url, {
        data: body,
      });

      return response.data;
    },
    {
      ...DEFAULT_OPTIONS,
      ...options,
    },
  );

  return { data, error, mutate, isValidating };
}
