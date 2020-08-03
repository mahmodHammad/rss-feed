import React, { useState } from "react";

// core components
import GridItem from "../Grid/GridItem";
import CustomTabs from "../CustomTab/CustomTab";
import GridContainer from "../Grid/GridContainer";
import CustomForm from "../Form/Form"
import {feedContent} from "./variables"
import {HandleAddNewRss} from "./helper"

export default function FeedDisplayer({ handlProviderClicked }) {
    const [Categories, setCategories] = useState(feedContent)
  
    function AddNewRss (category, name, url){
        const theNewRss = HandleAddNewRss(category, name, url,Categories)
        setCategories(theNewRss)
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
