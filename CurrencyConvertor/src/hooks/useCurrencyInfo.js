import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`);
                const result = await response.json();
                
                if (result && result[currency]) {
                    setData(result[currency]);  // Corrected API response handling
                } else {
                    console.error("Invalid API response:", result);
                    setData({});
                }
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData({});
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
