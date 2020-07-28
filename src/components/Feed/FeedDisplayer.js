import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";


const styles = () => ({
  root: {
    background: "#ff"
  }
})

const useStyles = makeStyles(styles);

export default function FeedDisplayer({ Feeds }) {
  const classes = useStyles();

  
  return (

    <ol>
      {Feeds.length === 0
        ? "Loading..."
        : Feeds.map((f) =>
          f.items.map((item) => (
            <li>
              {item.title} : <a href={item.link}>Visit</a>
            </li>
          ))
        )}
    </ol>

  );
}
