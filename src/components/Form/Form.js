import React, { useState } from "react";

// core components
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CustomInput from "./CustomInput";
import Button from "@material-ui/core/Button";
import Snackbar from "../Snackbar/Snackbar"

import {validateURL,validateString} from "./helper"


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
                    <CustomInput
                        onChange={handleInputChange}
                        labelText="Category"
                        id="category"
                        formControlProps={{ fullWidth: true }}
                        inputProps={{ disabled: false }}
                        error={category.error !== null && category.error}
                        success={category.error !== null && !category.error}
                    />
                    <CustomInput
                        onChange={handleInputChange}
                        labelText="Provider Name"
                        id="name"
                        formControlProps={{ fullWidth: true }}
                        error={name.error !== null && name.error}
                        success={name.error !== null && !name.error}
                        inputProps={{ disabled: false }} />
                    <CustomInput
                        onChange={handleInputChange}
                        labelText="URL"
                        id="url"
                        formControlProps={{ fullWidth: true }}
                        error={url.error !== null && url.error}
                        success={url.error !== null && !url.error}
                        inputProps={{ disabled: false }} />

                    <Button onClick={handleSubmit} fullWidth variant="outlined" color="primary">submit</Button>
                </CardBody>

            </Card>
            {err !== false ? <Snackbar open={true} color={err === 10 ? "success" : "danger"} message={err === 10 ? "The item got added to the list!" : err} /> : null}
        </GridItem>

    );
}


