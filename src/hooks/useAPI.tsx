import { api } from "@/lib/api";
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";

export function useAPI<T>(fetchUrl: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(
    async (url = fetchUrl) => {
      setIsLoading(true);

      try {
        // TODO - resolve type issue
        const response = await api.get<T>(url, config);
        if (response.data.items) {
          setData(response.data.items);
          return;
        }
        setData(response.data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setIsLoading(false);
      }
    },
    [config, fetchUrl]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchData };
}
