import {
    createMuiTheme,
    CssBaseline,
    makeStyles,
    Paper,
    ThemeProvider,
} from "@material-ui/core";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountryInfo from "./components/CountryInfo";
import TopBar from "./components/TopBar";
import CountryDataContextProvider from "./contexts/CountryDataContext";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
    },
});

function App() {
    const classes = useStyles();
    const [toggleTheme, setToggleTheme] = useState(false);
    const theme = createMuiTheme({
        palette: {
            type: toggleTheme ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.root}>
                <CountryDataContextProvider>
                    <Router>
                        <TopBar
                            setToggleTheme={setToggleTheme}
                            toggleTheme={toggleTheme}
                        />
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
            </Paper>
        </ThemeProvider>
    );
}

export default App;
