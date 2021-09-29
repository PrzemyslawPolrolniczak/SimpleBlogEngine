import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./styles/theme";

import { Create, Home, NotFound } from "./pages";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Router>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </main>
    </ThemeProvider>
  );
};
