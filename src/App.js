import { Box, CssBaseline, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountryInfo from "./components/CountryInfo";
import TopBar from "./components/TopBar";
import CountryDataContextProvider from "./contexts/CountryDataContext";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <CountryDataContextProvider>
                <Router>
                    <TopBar />
                    <Switch>
                        <Route path="/" exact>
                            <CountryInfo />
                        </Route>
                        <Route path="/details/:name">
                            <CountryDetails />
                        </Route>
                    </Switch>
                </Router>
                <CssBaseline />
            </CountryDataContextProvider>
        </Box>
    );
}

export default App;
