import { api } from "@/lib/api";
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";

export function useAPI<T>(url: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.get<T>(url, config);
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
  }, [url, config]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}
