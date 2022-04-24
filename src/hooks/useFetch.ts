import { useEffect, useState } from "react";

const useFetch = (url: string): { data: any; error: any; loading: any } => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        setData(jsonData);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
