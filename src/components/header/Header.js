import React from 'react'
import { Logo } from '../logo/Logo'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={classes.header}>

      <Logo />
        <nav className={classes.nav}>
          <Link to={"tik-tok-ersonal-lesson-plan/"} >Home</Link>
          <Link to={"tik-tok-ersonal-lesson-plan/portfolio"} >Portfolio</Link>
          <Link to={"tik-tok-ersonal-lesson-plan/about"} >About</Link>
        </nav>
    </div>
  )
}
