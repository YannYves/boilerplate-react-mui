import useSWR from "swr";
import fetcher from "../lib/fetcher";

function useFetchWithSwr(url: string, param?: any) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
}

export default useFetchWithSwr;
