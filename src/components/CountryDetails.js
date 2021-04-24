import { Box, Card, Chip, makeStyles } from "@material-ui/core";

import { useContext } from "react";
import { useParams } from "react-router";
import { CountryContext } from "../contexts/CountryDataContext";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        maxWidth: "1100px",
        margin: `${theme.spacing(10)}px auto`,
    },
    card: {
        width: 600,
        display: "flex",
        borderRadius: "0 0 5 5",
        margin: "0 auto",
        padding: 20,
        "@media(max-width:480px)": {
            flexDirection: "column",
            width: "90%",
        },
    },
    chip: {
        margin: "0 5px 5px 0",
    },
}));

const CountryDetails = () => {
    const classes = useStyles();
    const { name } = useParams();
    const { countryData } = useContext(CountryContext);
    const selectedCountry = countryData.filter(
        (country) => country.name === name
    );
    return (
        <Box className={classes.root}>
            {selectedCountry.map((country) => {
                const {
                    name,
                    alpha3Code,
                    flag,
                    borders,
                    region,
                    subregion,
                    capital,
                    population,
                    currencies,
                } = country;
                return (
                    <div key={alpha3Code}>
                        <Card className={classes.card}>
                            <div className={classes.image}>
                                <img
                                    style={{
                                        width: "300px",
                                        marginRight: 20,
                                        backgroundColor: "#d3d3d3",
                                    }}
                                    src={flag}
                                    alt={name}
                                />
                                {borders.length ? (
                                    <p style={{ margin: 0 }}>
                                        {" "}
                                        <strong>Borders:</strong>
                                    </p>
                                ) : (
                                    ""
                                )}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        width: "300px",
                                    }}
                                >
                                    {borders.map((borderCountry, index) => {
                                        return (
                                            <span
                                                className={classes.chip}
                                                key={index}
                                            >
                                                <Chip
                                                    clickable
                                                    variant="outlined"
                                                    label={borderCountry}
                                                />
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={classes.details}>
                                <h1 style={{ marginTop: 0 }}>{name}</h1>
                                <p>
                                    <strong>Capital: </strong>
                                    {capital}
                                </p>
                                <p>
                                    <strong>Region: </strong>
                                    {region}
                                </p>
                                <p>
                                    <strong>Subregion: </strong>
                                    {subregion}
                                </p>
                                <p>
                                    <strong>Population: </strong>
                                    {population}
                                </p>
                                <p>
                                    <strong>Currencies: </strong>
                                    {currencies.map((currency, index) => {
                                        return (
                                            <span key={index}>
                                                {currency.code}
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </Card>
                    </div>
                );
            })}
        </Box>
    );
};

export default CountryDetails;
