import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>loading...</h1>
        </div>
    );
};

export default Loading;
