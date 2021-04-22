import { Box, CssBaseline, makeStyles } from "@material-ui/core";
import CountryInfo from "./components/CountryInfo";
import CountryDataContextProvider from "./contexts/CountryDataContext";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#2193b0",
        backgroundImage: " linear-gradient(to right, #2193b0, #6dd5ed)",
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <CountryDataContextProvider>
                <CountryInfo />
                <CssBaseline />
            </CountryDataContextProvider>
        </Box>
    );
}

export default App;
