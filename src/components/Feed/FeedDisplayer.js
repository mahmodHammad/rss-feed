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

const useStyles = makeStyles(styles);

export default function FeedDisplayer({ Feeds }) {
  const classes = useStyles();


  return (

    <GridContainer>
      <GridItem xs={12} sm={4} md={3}>
        <Card chart>
          <CardHeader color="info">
            Hello world
        </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Daily Sales</h4>
            <p className={classes.cardCategory}>
            increase in today sales.
          </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
          </div>
          </CardFooter>
        </Card>
      </GridItem>
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
