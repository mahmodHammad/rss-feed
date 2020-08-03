import React, { useState } from "react";

// core components
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CustomInput from "./CustomInput";
import Button from "@material-ui/core/Button";
import Snackbar from "../Snackbar/Snackbar"

import { validateURL, validateString } from "./helper"


export default function FeedDisplayer({ AddNewRss }) {
    const [name, setname] = useState({ value: "", error: null })
    const [category, setcategory] = useState({ value: "", error: null })
    const [url, seturl] = useState({ value: "", error: null })
    const [err, seterr] = useState(false)


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
            let error = !validateURL(value)
            seturl({ value, error })
        }
    }
    
    function handelError(id, isSuccess = false) {
        let fieldName
        if (id === "category") fieldName = category
        else if (id === "name") fieldName = name
        else if (id === "url") fieldName = url
        else return null
        if (isSuccess) return fieldName.error !== null && !fieldName.error
        else return fieldName.error !== null && fieldName.error
    }

    function handleSubmit() {
        if (name.error === null || url.error === null || category.error === null) {
            seterr("No empty fields is allowed!")
        } else {
            if (!name.error && !url.error && !category.error) {
                AddNewRss(category.value, name.value, url.value)
                // err =10 --> success
                seterr(10)
            } else {
                seterr("Please Fill All fields with correct data")
            }
        }
    }

    return (
        <GridItem xs={12} sm={12} md={6}>
            <Card chart>
                <CardHeader color="primary" >
                    Add your prefered RSS providers
                </CardHeader>
                <CardBody>
                    {/* take care! you should fill the array with a state name, this could be written better */}
                    {["category", "name", "url"].map(field => <CustomInput
                        key={field}
                        onChange={handleInputChange}
                        labelText={field}
                        id={field}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{ disabled: false }}
                        error={handelError(field, false)}
                        success={handelError(field, true)}
                    />)}
                    <Button onClick={handleSubmit} fullWidth variant="outlined" color="primary">submit</Button>
                </CardBody>
            </Card>
            {err !== false ? <Snackbar open={true} color={err === 10 ? "success" : "danger"} message={err === 10 ? "The item got added to the list!" : err} /> : null}
        </GridItem>

    );
}
