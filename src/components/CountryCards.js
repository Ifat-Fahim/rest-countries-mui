import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
} from "@material-ui/core";

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
}));

const CountryCards = ({ name, flag }) => {
    const classes = useStyles();
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
                <h2>{name}</h2>
                <Button variant="contained" color="primary">
                    See Details
                </Button>
            </CardContent>
        </Card>
    );
};

export default CountryCards;
