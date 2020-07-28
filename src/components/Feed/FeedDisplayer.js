import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Icons 
import AccessTime from "@material-ui/icons/AccessTime";
// core components

import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";

import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import styles from "../../assets/jss/components/FeedStyle"
import moment from "moment"
import Pagination from "../Pagination/Pagination"

const useStyles = makeStyles(styles);
export default function FeedDisplayer({ Feeds }) {
  const [displayFeeds, setdisplayFeeds] = useState([])
  const [count, setcount] = useState(10)


  function handlePagination(e, v) {
    let paginated = Feeds.slice(v * 25, v + 25)
    setdisplayFeeds(paginated)
    console.log("VVVVVVVVVVV", v)
  }
  const classes = useStyles();

  // console.log("feeds", Feeds)

  function getFromNow(time) {
    return moment(time).fromNow()
  }

  return (
    <GridContainer>
      <Pagination count={count} handlePagination={handlePagination} />
      {

        console.log(displayFeeds)
      }

    </GridContainer>
  );
}
