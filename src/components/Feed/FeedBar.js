import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../Grid/GridItem";
import CustomTabs from "../CustomTab/CustomTab";
import GridContainer from "../Grid/GridContainer";

import CustomForm from "../Form/Form"


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        margin: "auto",
        textAlign: "center",
    }

}));

export default function FeedDisplayer({ handlProviderClicked }) {

    const [Categories, setCategories] = useState([
        {
            name: "news", value: [
                { name: "Yahoo", url: "http://news.yahoo.com/rss/" },
                { name: "CBN US", url: "http://www.cbn.com/cbnnews/us/feed/" },
                { name: "CBN World", url: "http://www.cbn.com/cbnnews/world/feed" },
                { name: "BBC UK", url: "http://feeds.bbci.co.uk/news/rss.xml" },
                { name: "BBC World", url: "http://feeds.bbci.co.uk/news/world/rss.xml" },
                { name: "The West Australian", url: "https://thewest.com.au/rss-feeds" },
            ]
        },
        { name: "Weather", value: [{ name: "WeatherZone list", url: "http://www.weatherzone.com.au/services/rss.jsp" }] },
        { name: "technology", value: [{ name: "BBC technology", url: "http://feeds.bbci.co.uk/news/technology/rss.xml" }] },
        { name: "business", value: [{ name: "BBC business", url: "http://feeds.bbci.co.uk/news/business/rss.xml" }] },
    ])
    function AddNewRss(category, name, url) {
        let cloneCategories=[...Categories]
        console.log(category)
        console.log(name)
        console.log(url)

        let existedCategory = Categories.findIndex(c => c.name.toLowerCase() === category.toLowerCase())
        console.log(existedCategory)
        console.log(cloneCategories)
        if (existedCategory !== undefined) {
            cloneCategories[existedCategory].value.push({ name, url })
            setCategories(cloneCategories)
        }
    }

    return (
        <div>
            <GridContainer>

                <GridItem xs={12} sm={12} md={6}>
                    <CustomTabs
                        title=""
                        headerColor="primary"
                        tabs={Categories}
                        handlProviderClicked={handlProviderClicked}
                    />
                </GridItem>
                <CustomForm AddNewRss={AddNewRss} />
            </GridContainer>
        </div>
    );
}
