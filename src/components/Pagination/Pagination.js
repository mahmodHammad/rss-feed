import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        margin: "auto"
    },
}));

export default function PaginationRounded({ handlePagination, count }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination count={count} variant="outlined" shape="rounded" onChange={handlePagination} />
        </div>
    );
}
