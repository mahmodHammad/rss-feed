import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../Grid/GridItem";
import CustomTabs from "../CustomTab/CustomTab";




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        margin: "auto",
        textAlign: "center",
    }

}));

export default function FeedDisplayer() {

    const [displayFeeds, setdisplayFeeds] = useState()


    return (
        <div>
            <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                    title=""
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: "Bugs",
                            tabIcon: BugReport,
                            tabContent: (
                                <h1>Hello</h1>

                            )
                        },
                        {
                            tabName: "Website",
                            tabIcon: Code,
                            tabContent: (
                                <h1>Mother</h1>
                            )
                        },
                        {
                            tabName: "Server",
                            tabIcon: Cloud,
                            tabContent: (
                                <h1>Fucker</h1>
                            )
                        }
                    ]}
                />
            </GridItem>
        </div>
    );
}
