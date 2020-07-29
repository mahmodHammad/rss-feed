import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Icons 
import AccessTime from "@material-ui/icons/AccessTime";
// core components

import GridItem from "../Grid/GridItem";

import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import styles from "../../assets/jss/components/FeedStyle"

const useStyles = makeStyles(styles);
export default function FeedDisplayer({ Feeds }) {

    return (
        <GridItem xs={12} sm={12} md={6}>

            <Card chart>
                <CardHeader color="primary" >
                    Add your prefered RSS providers
  </CardHeader>
                <CardBody>
                    {/* <h4 className={classes.cardTitle}>Daily Sales</h4> */}
                    {/* <p className={classes.cardCategory} >Hello world</p> */}
                    <p >Hello world</p>
                </CardBody>
                <CardFooter chart>
                    {/* <div className={classes.stats}> */}
                    <div>
                        Hello
                        {/* <AccessTime /> Published: {getFromNow(item.pubDate)} */}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>

    );
}


