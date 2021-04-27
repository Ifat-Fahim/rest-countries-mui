import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

function CountryDataContextProvider({ children }) {
    const [countryData, setCountryData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCountryData = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://restcountries.eu/rest/v2/all");
            const data = await res.json();
            setCountryData(data);
            setSearchResult(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    return (
        <CountryContext.Provider
            value={{ countryData, loading, searchResult, setSearchResult }}
        >
            {children}
        </CountryContext.Provider>
    );
}

export default CountryDataContextProvider;
