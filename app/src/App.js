import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Create, Home } from './pages';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
