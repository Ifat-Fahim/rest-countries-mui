import { Box, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { CountryContext } from "../contexts/CountryDataContext";
import CountryCards from "./CountryCards";
import Filter from "./Filter";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "90%",
        margin: "0 auto",
        padding: `${theme.spacing(3)}px 0`,
        "@media(max-width: 992px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        "@media(max-width:768px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media(max-width:576px)": {
            gridTemplateColumns: "1fr",
        },
    },
}));

const CountryInfo = () => {
    const { searchResult, loading } = useContext(CountryContext);

    const classes = useStyles();
    if (loading) {
        return <Loading />;
    }

    if (searchResult.length === 0) {
        return (
            <>
                <Filter />
                <div style={{ marginTop: "100px", textAlign: "center" }}>
                    <h3>Opps! no country found.</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <Filter />
            <Box className={classes.root}>
                {searchResult.map((singleCountry) => {
                    return (
                        <CountryCards
                            key={singleCountry.alpha3Code}
                            {...singleCountry}
                        />
                    );
                })}
            </Box>
        </>
    );
};

export default CountryInfo;
