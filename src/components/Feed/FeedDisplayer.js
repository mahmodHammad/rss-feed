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
  let initFeeds= Feeds.slice(0,20)
  console.log(initFeeds)
  const [displayFeeds, setdisplayFeeds] = useState(initFeeds)

  function handlePagination(e, v) {
    let paginated = Feeds.slice(v * 20, (v * 20) + 20)
    setdisplayFeeds(paginated)
 }
  const classes = useStyles();

  // console.log("feeds", Feeds)

  function getFromNow(time) {
    return moment(time).fromNow()
  }

  return (
  <div>
  <GridContainer>
    {displayFeeds.map((item) =>
      <GridItem xs={12} sm={4} md={3} xl={2} component="a" href={item.link} target="_blank">
        <Card chart>
          <CardHeader color="info" >
            {item.title}
          </CardHeader>
          <CardBody>
            {/* <h4 className={classes.cardTitle}>Daily Sales</h4> */}
            <p className={classes.cardCategory} dangerouslySetInnerHTML={{ __html: item.contentSnippet || item.contentSnippet }} ></p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Published: {getFromNow(item.pubDate)}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    )
    }

  </GridContainer>
    <Pagination count={Feeds.length / 25} handlePagination={handlePagination} />
  </div>
  );
}
