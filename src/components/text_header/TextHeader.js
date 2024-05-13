import React from 'react'
import classes from './TextHeader.module.css'
export const TextHeader = (props) => {
  const { header, size} = props
  return (
    <div>
      <p style={{fontSize:`${size}`}}  className={classes.headerText}>
        {header.toUpperCase()}
      </p >
    </div>
  )
}
