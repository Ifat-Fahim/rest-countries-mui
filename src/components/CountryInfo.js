import { Box, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { CountryContext } from "../contexts/CountryDataContext";
import CountryCards from "./CountryCards";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        width: "90%",
        margin: "0 auto",
        padding: `${theme.spacing(3)}px 0`,
    },
}));

const CountryInfo = () => {
    const { countryData } = useContext(CountryContext);

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {countryData.map((singleCountry, index) => {
                return <CountryCards key={index} {...singleCountry} />;
            })}
        </Box>
    );
};

export default CountryInfo;
