import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/feed") {
        return (
          <Route path={prop.layout} component={prop.component} key={key} />
        );
      }
      return null;
    })}
  </Switch>
);

// const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  return (
    <div>
      <div>{switchRoutes}</div>
    </div>
  );
}
