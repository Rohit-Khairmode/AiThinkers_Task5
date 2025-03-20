import { Dispatch, useEffect, useState } from "react";
import { axiosInstance } from "./axios";

export function useDataFetcher(route: string) {
  const [data, setdata] = useState<any>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(route);
        setdata(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, isLoading, setdata };
}
export type DataFetcherResponse = {
  data: any;
  error: string;
  isLoading: boolean;
  setdata: Dispatch<any>;
};
