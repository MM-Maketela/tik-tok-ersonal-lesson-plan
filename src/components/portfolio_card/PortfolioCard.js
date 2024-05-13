import React from 'react'
import classes from './PortfolioCard.module.css'
import { TextHeader } from '../text_header/TextHeader'
import { LinkButton } from '../link_button/LinkButton'
export const PortfolioCard = (props) => {
    const {image, header} = props
  return (
    <div style={{backgroundImage:`url(${image})`, color:"white", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className={classes.portfolioCard}>
        <TextHeader  header = "Nostrud  & Exercitation" size="2.5rem"/>
        <LinkButton toText="" buttonText ="View"/>

    </div>
  )
}
