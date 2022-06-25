import React from 'react'
import classes from './Error.module.css'

const Error = (props) => {
  return (
    <div className={classes.error}>{props.children}</div>
  )
}

export default Error