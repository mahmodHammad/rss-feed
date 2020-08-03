import React, { useState } from "react";
import "./App.css"
// @material-ui/core components
import Navbar from "../components/Navbar/Navbar.js";
import FeedDisplayer from "../components/Feed/FeedDisplayer";
import RSSParser from "rss-parser";
import { makeStyles } from "@material-ui/core/styles";
import FeedBar from "../components/Feed/FeedBar"
import Snackbar from "../components/Snackbar/Snackbar"

let parser = new RSSParser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const styles = () => ({
  root: {
    paddingTop: 80,
    overflow: "hidden"
  }
})

// const useStyles = makeStyles(styles);
function getfeed(url) {
  return new Promise((resolve, reject) => {
    parser.parseURL(CORS_PROXY + url, (err, feed) => {
      if (err) {
        reject(err)
        throw err;
      }
      resolve(feed);
    });
  });
}

const useStyles = makeStyles(styles);

export default function Admin() {
  const [Feeds, setFeeds] = useState([]);
  const [Loadin, setLoadin] = useState(false);
  const [err, seterr] = useState(false);

  const classes = useStyles();

  function handlProviderClicked(url) {
    setLoadin(true)
    setFeeds([])

    getfeed(url).then((feeds) => {
      let updatedFeeds = [...Feeds, ...feeds.items];
      setFeeds(updatedFeeds);
      setLoadin(false)

    }).catch(err => {
      seterr("Can not load the Feed right now");
      setLoadin(false)
    })
  }

  return (
    <div>
      <Navbar color="primary" />
      <div className={classes.root}>
        <FeedBar handlProviderClicked={handlProviderClicked} />
        {Loadin ? "Loading..." : (Feeds.length ? <FeedDisplayer Feeds={Feeds} /> : null)}

      </div>
      {err ? <Snackbar message="Hello Hello Hello Hello Hello world" color="danger" open={true} /> : null}
    </div>
  );
}
