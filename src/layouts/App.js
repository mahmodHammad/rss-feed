import React, { useEffect, useState } from "react";
import "./App.css"
import { Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes.js";
// @material-ui/core components
import { createBrowserHistory } from "history";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Navbar/Navbar.js";
import FeedDisplayer from "../components/Feed/FeedDisplayer";
import RSSParser from "rss-parser";
import { makeStyles } from "@material-ui/core/styles";
import FeedBar from "../components/Feed/FeedBar"


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
      // console.log(feed);
      resolve(feed);
    });
  });
}

const useStyles = makeStyles(styles);

export default function Admin() {
  const [Feeds, setFeeds] = useState([]);
  const [Loadin, setLoadin] = useState(false);

  const classes = useStyles();

  function handlProviderClicked(url){
    console.log("hey you" , url)
    setFeeds([])

      getfeed(url).then((feeds) => {
        let updatedFeeds = [...Feeds, ...feeds.items];
  
        console.log("CCCCCCCC",updatedFeeds.length)
        setFeeds(updatedFeeds);
      }).catch(err => { console.log("errror", err) })
  }
  useEffect(() => {
  
    // getfeed("http://news.yahoo.com/rss/").then((feeds) => {
    //   let updatedFeeds = [...Feeds, ...feeds.items];

    //   console.log("CCCCCCCC",updatedFeeds.length)
    //   setFeeds(updatedFeeds);
    // }).catch(err => { console.log("errror", err) })
  });

  return (
    <div>
      <Navbar color="primary" />
      <div className={classes.root}>
        {/* <div> {switchRoutes}</div> */}
        <FeedBar handlProviderClicked={handlProviderClicked} />
        {Feeds.length ? <FeedDisplayer Feeds={Feeds} /> : "Loading..."}

      </div>
    </div>
  );
}


// {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }, {
//   content: 'As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents.'
//   , contentSnippet: "As persecution against Christians in China escalates, leaders of the communist regime are now forbidding parents to enroll their children in faith-based schools and are sending adopted children back to their birth parents."
//   , isoDate: "2020-07-27T18:30:00.000Z"
//   , link: "http://www.cbn.com/api/urlredirect.aspx?u=http://www1.cbn.com/cbnnews/world/2020/july/they-threatened-our-children-chinese-christian-families-facing-separation-and-relentless-persecution"
//   , pubDate: "2020-07-27T14:30:00-04:00"
//   , title: "'They Threatened Our Children': Chinese Christian Families Facing Separation and Relentless Persecution"
// }