import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components

import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/components/NavbarStyle";

const useStyles = makeStyles(styles);
export default function Header(props) {
    const classes = useStyles();
    function makeBrand() {
      var name= "RSS Reader";
    
      return name;
    }
    const { color } = props;
    const appBarClasses = classNames({
      [" " + classes[color]]: color
    });
    return (
      <AppBar className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            {/* Here we create navbar brand, based on route name */}
            <Button color="transparent" href="https://github.com/mahmodHammad/rss-feed" className={classes.title}>
              {makeBrand()}
            </Button>
          </div>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }

  Header.propTypes = {
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
    handleDrawerToggle: PropTypes.func,
  };
  