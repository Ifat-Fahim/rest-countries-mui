import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxShadow: "1px 7px 21px -4px rgba(0,0,0,0.5)",
        transform: "scale(0.95)",
        background: "rgba(255, 255, 255)",

        "&:hover": {
            transition: "all 500ms ease",
            overflow: "hidden",
            transform: "scale(1)",
        },
    },
    cover: {
        height: "200px",
    },
    btn: {
        textTransform: "capitalize",
        fontSize: 16,
        fontWeight: 400,
    },
}));

const CountryCards = ({ name, flag, population, capital, region }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.cover}
                    image={flag}
                    title={name}
                />
            </CardActionArea>
            <CardContent>
                <h2 style={{ margin: 0 }}>{name}</h2>

                <p>
                    <strong>Population:</strong> {population}
                </p>
                <p>
                    <strong>Region:</strong> {region}{" "}
                </p>
                <p>
                    <strong>Capital:</strong> {capital}
                </p>

                <Button
                    className={classes.btn}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        history.push(`/details/${name}`);
                    }}
                >
                    See Details
                </Button>
            </CardContent>
        </Card>
    );
};

export default CountryCards;
