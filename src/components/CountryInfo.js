import { Box, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { CountryContext } from "../contexts/CountryDataContext";
import CountryCards from "./CountryCards";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        width: "90%",
        margin: "50px auto",
        padding: `${theme.spacing(3)}px 0`,
    },
}));

const CountryInfo = () => {
    const { countryData, loading } = useContext(CountryContext);

    const classes = useStyles();
    if (loading) {
        return <Loading />;
    }

    return (
        <Box className={classes.root}>
            {countryData.map((singleCountry) => {
                return (
                    <CountryCards
                        key={singleCountry.alpha3Code}
                        {...singleCountry}
                    />
                );
            })}
        </Box>
    );
};

export default CountryInfo;
