import { useState, useEffect } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      );

      const result = await response.json();
      setData(result[currency]);
    }
    fetchData();
  }, [currency]);

  return data;
}

export default useCurrency;
