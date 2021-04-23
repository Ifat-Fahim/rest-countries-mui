import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import Brightness3OutlinedIcon from "@material-ui/icons/Brightness3Outlined";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
    },
}));

const TopBar = () => {
    const classes = useStyles();
    return (
        <AppBar color="inherit">
            <Toolbar className={classes.container}>
                <Typography variant="h6">Where in the world?</Typography>
                <IconButton>
                    <Brightness3OutlinedIcon />
                    <strong style={{ fontSize: 14 }}>Dark Mode</strong>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
