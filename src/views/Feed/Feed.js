import React from 'react'
import { NavLink } from "react-router-dom";

export default function Feed() {
    return (
        <NavLink
        to="/setting"
        activeClassName="active"
      >
          Hello
          </NavLink>

    )
}
