import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment"
import styles from "../../assets/jss/components/FeedStyle"

// Icons 
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import Pagination from "../Pagination/Pagination"

const useStyles = makeStyles(styles);
export default function FeedDisplayer({ Feeds }) {
  const classes = useStyles();

  // for the pagination
  let initFeeds = Feeds.slice(0, 20)
  const [displayFeeds, setdisplayFeeds] = useState(initFeeds)

  function handlePagination(e, v) {
    let paginated = Feeds.slice(v * 15, (v * 15) + 15)
    setdisplayFeeds(paginated)
  }

  function getFromNow(time) {
    return moment(time).fromNow()
  }

  return (
    <div>
      <GridContainer>
        {displayFeeds.map((item) =>
          <GridItem xs={12} sm={4} md={3} xl={2} component="a" href={item.link} target="_blank">
            <Card chart>
              <CardHeader color="primary" >
               <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
              </CardHeader>
              <CardBody>
                <p className={classes.cardCategory} dangerouslySetInnerHTML={{ __html: item.contentSnippet || item.contentSnippet }} ></p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Published: {getFromNow(item.pubDate)}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        )}

      </GridContainer>
      <Pagination count={Math.floor(Feeds.length / 15)} handlePagination={handlePagination} />
    </div>
  );
}
