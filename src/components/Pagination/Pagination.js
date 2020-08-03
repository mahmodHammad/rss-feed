import React from "react";

import Pagination from '@material-ui/lab/Pagination';

export default function PaginationRounded({ handlePagination, count }) {
    return (<Pagination count={count} variant="outlined" shape="rounded" onChange={handlePagination} />);
}
