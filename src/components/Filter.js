import { makeStyles, TextField } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../contexts/CountryDataContext";

const useStyles = makeStyles({
    root: {
        margin: "80px auto 0 auto",
        width: "90%",
    },
    input: {
        width: "80%",
        maxWidth: 400,
    },
});

const Filter = () => {
    const classes = useStyles();

    const { countryData, setSearchResult } = useContext(CountryContext);

    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const result = countryData.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(result);
    }, [countryData, searchTerm, setSearchResult]);

    return (
        <div className={classes.root}>
            <TextField
                className={classes.input}
                label="search a country"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default Filter;
