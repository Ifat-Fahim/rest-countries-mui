import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import Brightness3OutlinedIcon from "@material-ui/icons/Brightness3Outlined";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "90%",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
    },
    typo: {
        cursor: "pointer",
    },
}));

const TopBar = ({ toggleTheme, setToggleTheme }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar color="inherit">
            <Toolbar className={classes.container}>
                <Typography
                    onClick={() => history.push("/")}
                    variant="h6"
                    className={classes.typo}
                >
                    Where in the world?
                </Typography>

                <IconButton onClick={() => setToggleTheme(!toggleTheme)}>
                    <Brightness3OutlinedIcon />
                    <strong style={{ fontSize: 14 }}>Dark Mode</strong>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
