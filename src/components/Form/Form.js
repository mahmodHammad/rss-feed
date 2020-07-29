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
import CustomInput from "./CustomInput";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(styles);
export default function FeedDisplayer({ Feeds }) {


    const [name, setname] = useState({ value: "", error: null })
    const [category, setcategory] = useState({ value: "", error: null })
    const [url, seturl] = useState({ value: "", error: null })

    function validateString(value) {
        // value is always string so i have to check using this weird approach that it's not a number
        let testNum = Number(value)
        if (isNaN(testNum)) {
            let testString = String(value)
            if (testString.trim().length) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    function handleInputChange(e) {

        const id = e.target.id
        const value = e.target.value.trim()
        if (id === "name") {
            let error = !validateString(value)
            setname({ value, error })
        } else if (id === "category") {
            let error = !validateString(value)
            setcategory({ value, error })

        } else if (id === "url") {
            let error = !validURL(value)
            seturl({ value, error })

        }

        // console.log(id,value)
        console.log("name", name)
        console.log("category", category)
        console.log("url", url)
    }
    return (
        <GridItem xs={12} sm={12} md={6}>

            <Card chart>
                <CardHeader color="primary" >
                    Add your prefered RSS providers
  </CardHeader>
                <CardBody>
                    <CustomInput
                        onChange={handleInputChange}

                        labelText="Category"
                        id="category"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            disabled: false
                        }}
                        error={category.error !== null && category.error}
                        success={category.error !== null && !category.error}
                    />
                    <CustomInput
                        onChange={handleInputChange}

                        labelText="Provider Name"
                        id="name"
                        formControlProps={{
                            fullWidth: true
                        }}

                        error={name.error !== null && name.error}
                        success={name.error !== null && !name.error}

                        inputProps={{
                            disabled: false
                        }} />
                    <CustomInput
                        onChange={handleInputChange}

                        labelText="URL"
                        id="url"
                        formControlProps={{
                            fullWidth: true
                        }}

                        error={url.error !== null && url.error}
                        success={url.error !== null && !url.error}
                        inputProps={{
                            disabled: false
                        }} />

                    <Button fullWidth variant="outlined" color="primary">submit</Button>
                </CardBody>

            </Card>
        </GridItem>

    );
}


