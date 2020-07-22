import React, { useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes.js";
// @material-ui/core components
import { createBrowserHistory } from "history";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Navbar/Navbar.js";
import RSSParser from "rss-parser";
const hist = createBrowserHistory();

let parser = new RSSParser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

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
export default function Admin({ ...rest }) {
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
      <Navbar />
      <div>{switchRoutes}</div>
      <ol>
        {Feeds.length === 0
          ? "Loading..."
          : Feeds.map((f) =>
              f.items.map((item) => (
                <li>
                  {item.title} : <a href={item.link}>Visit</a>
                </li>
              ))
            )}
      </ol>
      <Footer />
    </div>
  );
}
