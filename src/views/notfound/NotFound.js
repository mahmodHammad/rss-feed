import React from 'react'
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            
            <h1> 404!</h1>
            <h3>This page is not found</h3>
            <Link to="/feeds" >Back to home page</Link>
        </div>
    )
}
