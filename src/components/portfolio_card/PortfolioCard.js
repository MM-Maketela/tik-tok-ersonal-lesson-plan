import React from 'react'
import classes from './PortfolioCard.module.css'
export const PortfolioCard = (props) => {
    const {image, header} = props
  return (
    <div style={{backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className={classes.portfolioCard}>


    </div>
  )
}
