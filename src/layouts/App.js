import React, { useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes.js";
// @material-ui/core components
import { createBrowserHistory } from "history";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Navbar/Navbar.js";
import FeedDisplayer from "../components/Feed/FeedDisplayer";
import RSSParser from "rss-parser";
import { makeStyles } from "@material-ui/core/styles";
const hist = createBrowserHistory();

let parser = new RSSParser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";



const styles = () => ({
  root: {
    paddingTop: 80
  }
})

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
function getfeed(url) {
  return new Promise((resolve, reject) => {
    parser.parseURL(CORS_PROXY + url, function (err, feed) {
      if (err) throw err;
      console.log(feed);
      resolve(feed);
    });
  });
}
const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  const classes = useStyles();

  const [providers, setproviders] = useState([
    "https://www.reddit.com/.rss",
    "http://joeroganexp.joerogan.libsynpro.com/rss",
  ]);
  const [Feeds, setFeeds] = useState([]);
  useEffect(() => {
    getfeed(providers[0]).then((feeds) => {
      let updatedFeeds = [...Feeds, feeds];

      setFeeds(updatedFeeds);
    });
  });

  return (
    <div>
      <Navbar color="info" />
      <div className={classes.root}> <div> {switchRoutes}</div>
       <FeedDisplayer Feeds={Feeds}/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
