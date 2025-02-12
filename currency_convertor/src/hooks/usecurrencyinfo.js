import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())  // Fixed: Added ()
            .then((res) => setData(res[currency])) // Correctly setting data
            .catch((err) => console.error("Error fetching currency data:", err)); // Error handling
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
