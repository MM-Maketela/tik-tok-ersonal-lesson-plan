import React from 'react'
import classes from './Portfolio.module.css'
import {TextHeader} from '../../components/text_header/TextHeader'
import { PortfolioCard } from '../../components/portfolio_card/PortfolioCard'
import image from '../../assets/mobile-wallpapers-15.jpg'
export const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      

      < TextHeader   header="Portfolio" size= "3rem"/>
     
     <ul className={classes.portfolioGrid}>
      <li className={classes.portfolioCardWrapper}>

        < PortfolioCard  image={image} />

      </li>
      <li className={classes.portfolioCardWrapper}>

        < PortfolioCard  image={image} />

      </li>
      <li className={classes.portfolioCardWrapper}>

        < PortfolioCard  image={image} />

      </li>
     </ul>
      

       
    </div>
  )
}
