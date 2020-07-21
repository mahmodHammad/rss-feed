import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes.js";
// @material-ui/core components
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

const switchRoutes = (
  <Router history={hist}>
    <Switch>
      {routes.map((prop, key) => (
        <Route path={prop.path} component={prop.component} key={key} />
      ))}
      <Redirect from="/" to="/notfound" />
    </Switch>
  </Router>
);

// const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  return (
    <div>
      <div>{switchRoutes}</div>
    </div>
  );
}
