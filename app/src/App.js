import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./styles/theme";

import { Create, Home, NotFound, BlogpostView } from "./pages";
import { AppContextProvider } from "./context/AppContext";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <main>
          <Router>
            <Switch>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogpost/:id">
                <BlogpostView />
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
      </AppContextProvider>
    </ThemeProvider>
  );
};
