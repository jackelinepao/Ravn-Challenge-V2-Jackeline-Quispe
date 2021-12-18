import React from "react";

import { Link } from "react-router-dom";

import useStyles from "./styles";

export default function Header() {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.contHeader}>
        <Link to="/">Ravn Star Wars Registry</Link>
      </div>
    </header>
  )
}
