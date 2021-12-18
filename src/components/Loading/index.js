import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import useStyles from "./styles"

export default function Loading() {
  const classes = useStyles()
  return (
    <div className={classes.contLoader}>
      <FontAwesomeIcon icon={faSpinner} pulse />
      <h3>Loading</h3>
    </div>
  )
}
