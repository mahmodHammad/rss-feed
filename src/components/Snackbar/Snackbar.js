

import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import styles from "../../assets/jss/components/snackbarContentStyle";

const useStyles = makeStyles(styles);

export default function Snackbar(props) {
    const [Open, setOpen] = useState(true)

    // setTimeout(()=>setOpen(false),5000)

    function closeNotification() {
        setOpen(false)
    }

    const classes = useStyles();
    const { message, color, close, rtlActive } = props;
    var action = [];
    if (close !== undefined) {
        action = [
            <IconButton
                className={classes.iconButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => closeNotification()}
            >
                <Close className={classes.close} />
            </IconButton>
        ];
    }
    return (
        <Snack
            anchorOrigin={{vertical: "bottom",horizontal:"left"}}
            open={Open}
            message={
                <div>
                    <IconButton
                        className={classes.iconButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => closeNotification()}
                    >
                        <Close className={classes.close} />
                    </IconButton>
                    <span>{message}</span>
                </div>
            }
            action={action}
            ContentProps={{
                classes: {
                    root: classes.root + " " + classes[color],
                    message: classes.message,
                    action: classNames({ [classes.actionRTL]: rtlActive })
                }
            }}
        />
    );
}

Snackbar.propTypes = {
    message: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
};
