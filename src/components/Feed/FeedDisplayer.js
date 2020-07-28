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

const useStyles = makeStyles(styles);
export default function FeedDisplayer({ Feeds }) {
  const classes = useStyles();

  console.log("feeds", Feeds)

  function getFromNow(time) {
    return moment(time).fromNow()

  }
  return (

    <GridContainer>
      {Feeds.map((f) =>
        f.items.map((item) => (

          <GridItem xs={12} sm={4} md={3} xl={2} component="a" href={item.link} target="_blank">
            <Card chart>
              <CardHeader color="info" >
                {item.title}
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory} dangerouslySetInnerHTML={{ __html: item.contentSnippet || item.contentSnippet }} >

                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Published {getFromNow(item.pubDate)}
                </div>
              </CardFooter>
            </Card>
          </GridItem>

        )))
      }

    </GridContainer>





    // <ol>
    //   {Feeds.length === 0
    //     ? "Loading..."
    //     : Feeds.map((f) =>
    //       f.items.map((item) => (
    //         <li>
    //           {item.title} : <a href={item.link}>Visit</a>
    //         </li>
    //       ))
    //     )}
    // </ol>

  );
}
