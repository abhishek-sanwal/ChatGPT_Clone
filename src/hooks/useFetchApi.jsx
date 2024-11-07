import { useEffect, useState } from "react";

function useFetchApi({ url, options }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(function () {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Error Fetching Data!!!");

        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return [loading, error, data];
}

export default useFetchApi;
