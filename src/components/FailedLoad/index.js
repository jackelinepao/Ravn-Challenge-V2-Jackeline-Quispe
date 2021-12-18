import React from "react";

import useStyles from "./styles";

export default function FailedLoad() {
  const classes = useStyles()

  return (
    <div className={classes.contLoader}>
      <h3>Failed to Load Data</h3>
    </div>    
  )
}
