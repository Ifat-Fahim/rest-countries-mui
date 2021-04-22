import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

function CountryDataContextProvider({ children }) {
    const [countryData, setCountryData] = useState([]);

    const fetchCountryData = async () => {
        try {
            const res = await fetch("https://restcountries.eu/rest/v2/all");
            const data = await res.json();
            setCountryData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    return (
        <CountryContext.Provider value={{ countryData }}>
            {children}
        </CountryContext.Provider>
    );
}

export default CountryDataContextProvider;
