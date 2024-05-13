import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LinkButton.module.css'

export const LinkButton = (props) => {
    const {toText, buttonText} = props
  return (
    <div>
        <Link to={toText} className={classes.linkButton}>
        {
            buttonText
        }
        </Link>
    </div>
  )
}
