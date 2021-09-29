import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Create, Home, NotFound } from './pages';

export const App = () => {
  return (
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
  )
}
